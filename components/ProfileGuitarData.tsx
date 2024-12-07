"use client";

import React from "react";
import GuitarCard from "./GuitarCard";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useAuth } from "@/hooks/useAuth";

interface Guitar {
  id: string;
  brand: string;
  model: string;
  submodel: string;
  year: number;
  madein: string;
  cost: number;
  value: number;
  serialnumber: string;
  purchasedate: string;
  servicedate: string;
  image_url: string;
  user_id: string;
}

const ProfileGuitarData = () => {
  const [guitars, setGuitars] = useState<Guitar[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { session } = useAuth();

  // Fetch guitars for the current user
  useEffect(() => {
    const fetchGuitars = async () => {
      setLoading(true);
      try {
        const user = session?.user?.id;
        if (user) {
          const { data, error } = await supabase
            .from("guitars")
            .select("*")
            .eq("user_id", user);
          if (error) {
            throw error;
          }

          setGuitars(data || []);
        }
      } catch (error) {
        setError("Failed to load guitars");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGuitars();
  }, [session]);

  if (loading) {
    return <p>Loading guitars...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <>
      <h1 className="text-4xl font-semibold text-gray-500 whitespace-nowrap">
        Guitars
      </h1>
      <div className="overflow-x-auto rounded-md border">
        <table className="min-w-full border-collapse border text-sm">
          <thead className="bg-gray-500 ">
            <tr className="whitespace-nowrap">
              <th className="border px-2 py-2 text-left">Brand</th>
              <th className="border px-2 py-2 text-left">Model</th>
              <th className="border px-2 py-2 text-left">Sub Model</th>
              <th className="border px-2 py-2 text-left">Year</th>
              <th className="border px-2 py-2 text-left">Made In</th>
              <th className="border px-2 py-2 text-left">Cost</th>
              <th className="border px-2 py-2 text-left">Value</th>
              <th className="border px-2 py-2 text-left">Serial Number</th>
              <th className="border px-2 py-2 text-left">Purchased</th>
              <th className="border px-2 py-2 text-left">Serviced</th>
              <th className="border px-2 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {guitars.map((guitar) => (
              <tr
                key={guitar.id}
                className="odd:bg-white even:bg-gray-50 hover:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-900 dark:hover:bg-gray-700 "
              >
                <td className="border px-3 py-2 whitespace-nowrap">
                  {guitar.brand}
                </td>
                <td className="border px-3 py-2 whitespace-nowrap">
                  {guitar.model}
                </td>
                <td className="border px-3 py-2 whitespace-nowrap">
                  {guitar.submodel}
                </td>
                <td className="border px-3 py-2 whitespace-nowrap">
                  {guitar.year}
                </td>
                <td className="border px-3 py-2 whitespace-nowrap">
                  {guitar.madein}
                </td>
                <td className="border px-3 py-2 whitespace-nowrap">
                  ${guitar.cost}
                </td>
                <td className="border px-3 py-2 whitespace-nowrap">
                  ${guitar.value}
                </td>
                <td className="border px-3 py-2 whitespace-nowrap">
                  {guitar.serialnumber}
                </td>
                <td className="border px-3 py-2 whitespace-nowrap">
                  {guitar.purchasedate}
                </td>
                <td className="border px-3 py-2 whitespace-nowrap">
                  {guitar.servicedate}
                </td>
                <td className="border px-3 py-2 text-center whitespace-nowrap">
                  <button className="hover:underline hover:font-bold mr-4">
                    Edit
                  </button>
                  <button className="hover:underline hover:font-bold">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pt-4 grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {guitars.map((guitar) => (
          <GuitarCard key={guitar.id} guitar={guitar} />
        ))}
      </div>
    </>
  );
};

export default ProfileGuitarData;
