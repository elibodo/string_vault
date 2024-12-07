"use client";

import React from "react";
import { guitars } from "../app/guitars";
import { useState } from "react";
import AddGuitar from "./AddGuitar";
import { useAuth } from "@/hooks/useAuth";

const ProfileData = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { session } = useAuth();

  const name = session?.user?.user_metadata?.full_name;
  const email = session?.user?.email;
  const totalGuitars = guitars.length;
  const totalCost = guitars.reduce((sum, guitar) => sum + guitar.cost, 0);
  const totalValue = guitars.reduce((sum, guitar) => sum + guitar.value, 0);
  const averageCost = totalCost / totalGuitars;
  const brands = new Set(guitars.map((guitar) => guitar.brand)).size;
  const models = new Set(guitars.map((guitar) => guitar.model)).size;
  const country = new Set(guitars.map((guitar) => guitar.madein)).size;

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-4xl font-semibold text-gray-500 whitespace-nowrap">
          Profile
        </h1>
        <div
          onClick={() => openModal()}
          className=" cursor-pointer transition-all duration-300 ease-in-out border-2 rounded-md py-1 px-2 text-lg dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-300 dark:hover:text-gray-800 bg-gray-200 text-black border-gray-400 hover:bg-gray-800 hover:text-white"
        >
          Add Guitar
        </div>
      </div>
      {/* information containers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border-2 rounded-md py-3 px-6 h-auto space-y-1">
          <h2 className="text-xl text-center font-semibold mb-3 border-b-2 pb-3">
            User Info
          </h2>
          <div className="overflow-hidden">
            <p>{name}</p>
            <p>{email}</p>
          </div>
        </div>
        <div className="border-2 rounded-md py-3 px-6 space-y-1">
          <h2 className="text-xl text-center font-semibold mb-3 border-b-2 pb-3">
            Stats
          </h2>
          <div className="overflow-hidden">
            <p>Guitars: {totalGuitars}</p>
            <p>Total Cost: ${totalCost}</p>
            <p>Avergage Cost: ${averageCost}</p>
            <p>Total Value: ${totalValue}</p>
          </div>
        </div>
        <div className="border-2 rounded-md py-3 px-6 space-y-1">
          <h2 className="text-xl text-center font-semibold mb-3 border-b-2 pb-3">
            Gear
          </h2>
          <div className="overflow-hidden">
            <p>Brands: {brands}</p>
            <p>Models: {models}</p>
            <p>Countries: {country}</p>
          </div>
        </div>
      </div>
      <AddGuitar isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default ProfileData;
