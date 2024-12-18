"use client";

import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useAuth } from "@/hooks/useAuth";

type Guitar = {
  id: string;
  brand: string;
  model: string;
  submodel?: string | null;
  madein: string;
  year: number;
  cost: number | null;
  value: number | null;
  purchasedate?: string | null;
  servicedate?: string | null;
  serialnumber?: string | null;
  image_url: string;
  user_id: string;
};

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  guitar?: Guitar;
};

const AddGuitar: React.FC<ModalProps> = ({ isOpen, onClose, guitar }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { session } = useAuth();

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [isOpen]);

  const [brand, setBrand] = useState(guitar?.brand || "");
  const [model, setModel] = useState(guitar?.model || "");
  const [subModel, setSubModel] = useState(guitar?.submodel || "");
  const [madeIn, setMadeIn] = useState(guitar?.madein || "");
  const [year, setYear] = useState(guitar?.year || "");
  const [cost, setCost] = useState(guitar?.cost?.toString() || "");
  const [value, setValue] = useState(guitar?.value?.toString() || "");
  const [purchaseDate, setPurchaseDate] = useState(guitar?.purchasedate || "");
  const [serviceDate, setServiceDate] = useState(guitar?.servicedate || "");
  const [serialNumber, setSerialNumber] = useState(guitar?.serialnumber || "");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    let imageUrl = guitar?.image_url;

    try {
      if (image) {
        const fileExt = image.name.split(".").pop();
        const fileName = `${session?.user?.id}-${Date.now()}.${fileExt}`;
        const { error: uploadError } = await supabase.storage
          .from("guitar-images")
          .upload(fileName, image);

        if (uploadError) {
          throw new Error("Image upload failed.");
        }

        const { data } = supabase.storage
          .from("guitar-images")
          .getPublicUrl(fileName);

        if (!data || !data.publicUrl) {
          throw new Error(
            "Failed to retrieve the public URL for the uploaded image."
          );
        }

        imageUrl = data.publicUrl;
      }

      const guitarData = {
        brand: brand.trim(),
        model: model.trim(),
        submodel: subModel.trim() || null,
        madein: madeIn.trim(),
        year: year,
        cost: parseFloat(cost) || null,
        value: parseFloat(value) || null,
        purchasedate: purchaseDate || null,
        servicedate: serviceDate || null,
        serialnumber: serialNumber.trim() || null,
        image_url: imageUrl,
        user_id: session?.user?.id,
      };

      let dbError;
      if (guitar) {
        const { error } = await supabase
          .from("guitars")
          .update(guitarData)
          .eq("id", guitar.id);
        dbError = error;
      } else {
        const { error } = await supabase.from("guitars").insert([guitarData]);
        dbError = error;
      }

      if (dbError) {
        throw new Error("Failed to save the guitar data.");
      }

      setBrand("");
      setModel("");
      setSubModel("");
      setMadeIn("");
      setYear("");
      setCost("");
      setValue("");
      setPurchaseDate("");
      setServiceDate("");
      setSerialNumber("");
      setImage(null);
      onClose();
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } transition-opacity duration-300`}
    >
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

      <div className="relative max-h-[95vh] w-full max-w-2xl overflow-y-auto p-6 rounded-lg bg-white dark:bg-gray-800">
        <div className="space-y-4 mx-2">
          <h1 className="text-4xl font-semibold text-gray-500 whitespace-nowrap">
            {guitar ? "Edit Guitar" : "Add Guitar"}
          </h1>
          <form onSubmit={handleSubmit} className="p-2 max-w-2xl mx-auto">
            <div className="flex flex-col col-span-2 gap-4 pb-8 text-sm">
              <p>
                The brand, model, sub model, year, made in, and image will be
                displayed publicly to showcase your guitar collection.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Brand */}
              <div className="flex flex-col">
                <label
                  htmlFor="brand"
                  className="text-sm font-medium mb-1 dark:text-white text-black"
                >
                  Brand (required)
                </label>
                <input
                  id="brand"
                  type="text"
                  value={brand}
                  placeholder="Fender, Gibson, etc."
                  onChange={(e) => setBrand(e.target.value)}
                  required
                  className="text-sm transition-all duration-300 ease-in-out flex-grow border-2 py-1 px-2 rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600 bg-gray-200 text-black border-gray-400"
                />
              </div>

              {/* Model */}
              <div className="flex flex-col">
                <label
                  htmlFor="model"
                  className="text-sm font-medium mb-1 dark:text-white text-black"
                >
                  Model (required)
                </label>
                <input
                  id="model"
                  type="text"
                  value={model}
                  placeholder="Stratocaster, Les Paul, etc."
                  onChange={(e) => setModel(e.target.value)}
                  required
                  className="text-sm transition-all duration-300 ease-in-out flex-grow border-2 py-1 px-2 rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600 bg-gray-200 text-black border-gray-400"
                />
              </div>
              {/* sub model */}
              <div className="flex flex-col">
                <label
                  htmlFor="submodel"
                  className="text-sm font-medium mb-1 dark:text-white text-black"
                >
                  Sub Model
                </label>
                <input
                  id="submodel"
                  type="text"
                  value={subModel}
                  placeholder="Player Series, 50's Standard, etc."
                  onChange={(e) => setSubModel(e.target.value)}
                  className="text-sm transition-all duration-300 ease-in-out flex-grow border-2 py-1 px-2 rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600 bg-gray-200 text-black border-gray-400"
                />
              </div>

              {/* Made In */}
              <div className="flex flex-col">
                <label
                  htmlFor="madeIn"
                  className="text-sm font-medium mb-1 dark:text-white text-black"
                >
                  Made In (required)
                </label>
                <input
                  id="madeIn"
                  type="text"
                  value={madeIn}
                  placeholder="USA, Mexico, Japan, etc."
                  onChange={(e) => setMadeIn(e.target.value)}
                  required
                  className="text-sm transition-all duration-300 ease-in-out flex-grow border-2 py-1 px-2 rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600 bg-gray-200 text-black border-gray-400"
                />
              </div>

              {/* Year */}
              <div className="flex flex-col">
                <label
                  htmlFor="year"
                  className="text-sm font-medium mb-1 dark:text-white text-black"
                >
                  Year (required)
                </label>
                <input
                  id="year"
                  type="number"
                  value={year}
                  placeholder="2020"
                  required
                  onChange={(e) => setYear(e.target.value)}
                  className="text-sm transition-all duration-300 ease-in-out flex-grow border-2 py-1 px-2 rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600 bg-gray-200 text-black border-gray-400"
                />
              </div>

              {/* Cost */}
              <div className="flex flex-col">
                <label
                  htmlFor="cost"
                  className="text-sm font-medium mb-1 dark:text-white text-black"
                >
                  Your Cost
                </label>
                <div className="flex items-center border-2 rounded-md dark:border-gray-600 border-gray-400 dark:bg-gray-800 bg-gray-200">
                  <span className="px-2 dark:text-white text-black">$</span>
                  <input
                    id="cost"
                    type="number"
                    value={cost}
                    placeholder="1000"
                    onChange={(e) => setCost(e.target.value)}
                    className="text-sm flex-grow py-1 px-2 rounded-md outline-none transition-all duration-300 ease-in-out dark:bg-gray-800 dark:text-white bg-gray-200 text-black border-none"
                  />
                </div>
              </div>

              {/* Value */}
              <div className="flex flex-col">
                <label
                  htmlFor="value"
                  className="text-sm font-medium mb-1 dark:text-white text-black"
                >
                  Actual Value
                </label>
                <div className="flex items-center border-2 rounded-md dark:border-gray-600 border-gray-400 dark:bg-gray-800 bg-gray-200">
                  <span className="px-2 dark:text-white text-black">$</span>
                  <input
                    id="value"
                    type="number"
                    value={value}
                    placeholder="1100"
                    onChange={(e) => setValue(e.target.value)}
                    className="text-sm flex-grow py-1 px-2 rounded-md outline-none transition-all duration-300 ease-in-out dark:bg-gray-800 dark:text-white bg-gray-200 text-black border-none"
                  />
                </div>
              </div>

              {/* Serial Number */}
              <div className="flex flex-col">
                <label
                  htmlFor="serialNumber"
                  className="text-sm font-medium mb-1 dark:text-white text-black"
                >
                  Serial Number
                </label>
                <input
                  id="serialNumber"
                  type="text"
                  value={serialNumber}
                  placeholder="SN345678"
                  onChange={(e) => setSerialNumber(e.target.value)}
                  className="text-sm transition-all duration-300 ease-in-out flex-grow border-2 py-1 px-2 rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600 bg-gray-200 text-black border-gray-400"
                />
              </div>

              {/* purchase date */}
              <div className="flex flex-col">
                <label
                  htmlFor="purchaseDate"
                  className="text-sm font-medium mb-1 dark:text-white text-black"
                >
                  Purchase Date
                </label>
                <input
                  id="purchaseDate"
                  type="date"
                  value={purchaseDate}
                  onChange={(e) => setPurchaseDate(e.target.value)}
                  className="text-sm transition-all duration-300 ease-in-out flex-grow border-2 py-1 px-2 rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600 bg-gray-200 text-black border-gray-400"
                />
              </div>

              {/* service date */}
              <div className="flex flex-col">
                <label
                  htmlFor="serviceDate"
                  className="text-sm font-medium mb-1 dark:text-white text-black"
                >
                  Service Date
                </label>
                <input
                  id="serviceDate"
                  type="date"
                  value={serviceDate}
                  onChange={(e) => setServiceDate(e.target.value)}
                  className="text-sm transition-all duration-300 ease-in-out flex-grow border-2 py-1 px-2 rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600 bg-gray-200 text-black border-gray-400"
                />
              </div>

              {/* Image File */}
              {guitar ? (
                <></>
              ) : (
                <div className="flex flex-col">
                  <label
                    htmlFor="imageFile"
                    className="text-sm font-medium mb-1 dark:text-white text-black"
                  >
                    Image (required)
                  </label>
                  <input
                    id="imageFile"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files?.[0] || null)}
                    required
                    className="text-sm transition-all duration-300 ease-in-out flex-grow border-2 py-1 px-2 rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600 bg-gray-200 text-black border-gray-400 cursor-pointer"
                  />
                </div>
              )}
            </div>
            {/* Submit and cancel Button */}
            <div className="col-span-2 gap-5 flex justify-center mt-6">
              <button
                onClick={onClose}
                className="transition-all duration-300 ease-in-out border-2 rounded-md py-1 px-2 text-lg dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-300 dark:hover:text-gray-800 bg-gray-200 text-black border-gray-400 hover:bg-gray-800 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="transition-all duration-300 ease-in-out border-2 rounded-md py-1 px-2 text-lg dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-300 dark:hover:text-gray-800 bg-gray-200 text-black border-gray-400 hover:bg-gray-800 hover:text-white"
              >
                {loading
                  ? "Saving..."
                  : `${guitar ? "Update Guitar" : "Add Guitar"}`}
              </button>
            </div>
            {error && <p className="text-red-500 text-center mt-3">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddGuitar;
