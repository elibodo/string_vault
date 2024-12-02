import React from "react";
import Link from "next/link";
import GuitarCard from "../components/GuitarCard";
import { guitars } from "../guitars";

const profilePage = () => {
  const name = "Eli Bodovinitz";
  const email = "ebodovinitz@gmail.com";
  const totalGuitars = guitars.length;
  const totalCost = guitars.reduce((sum, guitar) => sum + guitar.cost, 0);
  const totalValue = guitars.reduce((sum, guitar) => sum + guitar.value, 0);
  const averageCost = totalCost / totalGuitars;
  const brands = new Set(guitars.map((guitar) => guitar.brand)).size;
  const models = new Set(guitars.map((guitar) => guitar.model)).size;
  const country = new Set(guitars.map((guitar) => guitar.madeIn)).size;

  return (
    <div className="space-y-4 mx-2 ">
      <div className="flex justify-between">
        <h1 className="text-4xl font-semibold text-gray-500 whitespace-nowrap">
          Profile
        </h1>
        <Link
          href={"/newGuitar"}
          className="transition-all duration-300 ease-in-out border-2 rounded-md py-1 px-2 text-lg dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-300 dark:hover:text-gray-800 bg-gray-200 text-black border-gray-400 hover:bg-gray-800 hover:text-white"
        >
          Add Guitar
        </Link>
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
                key={guitar.serialNumber}
                className="odd:bg-white even:bg-gray-50 hover:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-900 dark:hover:bg-gray-700 "
              >
                <td className="border px-3 py-2">{guitar.brand}</td>
                <td className="border px-3 py-2">{guitar.model}</td>
                <td className="border px-3 py-2">{guitar.subModel}</td>
                <td className="border px-3 py-2">{guitar.year}</td>
                <td className="border px-3 py-2">{guitar.madeIn}</td>
                <td className="border px-3 py-2">${guitar.cost}</td>
                <td className="border px-3 py-2">${guitar.value}</td>
                <td className="border px-3 py-2">{guitar.serialNumber}</td>
                <td className="border px-3 py-2">{guitar.purchaseDate}</td>
                <td className="border px-3 py-2">{guitar.serviceDate}</td>
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
          <GuitarCard key={guitar.serialNumber} guitar={guitar} />
        ))}
      </div>
    </div>
  );
};

export default profilePage;
