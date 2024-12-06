"use client";

import React from "react";
import { useState, useEffect } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AddGuitar: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 300); // Matches the duration of the transition
    }
  }, [isOpen]);

  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [subModel, setSubModel] = useState("");
  const [madeIn, setMadeIn] = useState("");
  const [year, setYear] = useState("");
  const [cost, setCost] = useState("");
  const [value, setValue] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [serviceDate, setServiceDate] = useState("");
  const [serialNumber, setSerialNumber] = useState("");

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } transition-opacity duration-300`}
    >
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative max-h-[95vh] w-full max-w-2xl overflow-y-auto p-6 rounded-lg bg-white dark:bg-gray-800">
        {/* Close Button */}
        <div className="space-y-4 mx-2">
          <h1 className="text-4xl font-semibold text-gray-500 whitespace-nowrap">
            Add Guitar
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log({
                brand,
                model,
                subModel,
                madeIn,
                year,
                cost,
                value,
                purchaseDate,
                serviceDate,
                serialNumber,
              });
              onClose();
            }}
            className="p-2 max-w-2xl mx-auto"
          >
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
                  htmlFor="model"
                  className="text-sm font-medium mb-1 dark:text-white text-black"
                >
                  Sub Model
                </label>
                <input
                  id="model"
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
                  required
                  className="text-sm transition-all duration-300 ease-in-out flex-grow border-2 py-1 px-2 rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600 bg-gray-200 text-black border-gray-400 cursor-pointer"
                />
              </div>
            </div>
            {/* Submit Button */}
            <div className="col-span-2 gap-5 flex justify-center mt-6">
              <button
                onClick={onClose}
                className="transition-all duration-300 ease-in-out border-2 rounded-md py-1 px-2 text-lg dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-300 dark:hover:text-gray-800 bg-gray-200 text-black border-gray-400 hover:bg-gray-800 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="transition-all duration-300 ease-in-out border-2 rounded-md py-1 px-2 text-lg dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-300 dark:hover:text-gray-800 bg-gray-200 text-black border-gray-400 hover:bg-gray-800 hover:text-white"
              >
                Add Guitar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddGuitar;