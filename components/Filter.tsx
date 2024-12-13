"use client";

import React from "react";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

const brandsList = [
  "Fender",
  "Gibson",
  "PRS",
  "Ibanez",
  "Epiphone",
  "Martin",
  "Yamaha",
  "Taylor",
  "Jackson",
  "ESP",
  "Squier",
  "Schecter",
  "Gretsch",
];

const modelsList = [
  "Stratocaster",
  "Les Paul",
  "Telecaster",
  "SG",
  "Flying V",
  "Explorer",
  "Jazzmaster",
  "Jaguar",
  "Firebird",
  "Mustang",
];

const countriesList = [
  "USA",
  "Japan",
  "Mexico",
  "South Korea",
  "Indonesia",
  "China",
  "Canada",
  "Italy",
];

const Filter = () => {
  const [expandBrand, setExpandBrand] = useState(false);
  const [expandModel, setExpandModel] = useState(false);
  const [expandCountry, setExpandCountry] = useState(false);

  const [brands, setBrands] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [country, setCountry] = useState<string[]>([]);

  const handleBrandCheckbox = (brand: string) => {
    setBrands((prev) => {
      if (prev.includes(brand)) {
        return prev.filter((item) => item !== brand);
      }
      return [...prev, brand];
    });
  };
  const handleModelCheckbox = (brand: string) => {
    setModels((prev) => {
      if (prev.includes(brand)) {
        return prev.filter((item) => item !== brand);
      }
      return [...prev, brand];
    });
  };
  const handleCountryCheckbox = (brand: string) => {
    setCountry((prev) => {
      if (prev.includes(brand)) {
        return prev.filter((item) => item !== brand);
      }
      return [...prev, brand];
    });
  };

  console.log(brands, models, country);

  return (
    <form className="space-y-4">
      <h1 className="text-4xl font-semibold text-gray-500 whitespace-nowrap">
        Search Guitars
      </h1>
      <div className="space-y-2 w-full">
        {/* Text search */}
        <div className="flex space-x-2">
          <input
            type="text"
            className="transition-all duration-300 ease-in-out flex-grow border-2 py-2 px-3 rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600 bg-gray-200 text-black border-gray-400"
            placeholder="Search..."
          />
          <button
            type="submit"
            className="transition-all duration-300 ease-in-out border-2 rounded-md p-1 text-3xl dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-300 dark:hover:text-gray-800 bg-gray-200 text-black border-gray-400 hover:bg-gray-800 hover:text-white"
          >
            <IoIosSearch />
          </button>
        </div>
        <div className="flex gap-1 flex-col sm:flex-col md:flex-row lg:flex-col">
          {/* Brand */}
          <div className="transition-all duration-300 ease-in-out w-full h-min border-2 rounded-md dark:border-gray-600 border-gray-400 dark:bg-gray-800 bg-gray-200 text-black dark:text-white">
            <button
              onClick={() => {
                setExpandBrand(!expandBrand);
              }}
              className="w-full flex items-center justify-between py-2 px-3"
            >
              <span>Brands</span>
              <IoIosArrowDown
                className={`origin-center transform transition duration-300 ease-out ${
                  expandBrand ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expandBrand ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-5 pr-2 pb-3 text-sm space-y-1">
                {brandsList.map((brand) => (
                  <label key={brand} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={brand}
                      onChange={(e) => handleBrandCheckbox(e.target.value)}
                      className="h-4 w-4"
                    />
                    <span>{brand}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          {/* Model */}
          <div className="transition-all duration-300 ease-in-out w-full h-min border-2 rounded-md dark:border-gray-600 border-gray-400 dark:bg-gray-800 bg-gray-200 text-black dark:text-white">
            <button
              onClick={() => {
                setExpandModel(!expandModel);
              }}
              className="w-full flex items-center justify-between py-2 px-3"
            >
              <span>Models</span>
              <IoIosArrowDown
                className={`origin-center transform transition duration-300 ease-out ${
                  expandModel ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expandModel ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-5 pr-2 pb-3 text-sm space-y-1">
                {modelsList.map((model) => (
                  <label key={model} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={model}
                      onChange={(e) => handleModelCheckbox(e.target.value)}
                      className="h-4 w-4"
                    />
                    <span>{model}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          {/* Country */}
          <div className="transition-all duration-300 ease-in-out w-full h-min border-2 rounded-md dark:border-gray-600 border-gray-400 dark:bg-gray-800 bg-gray-200 text-black dark:text-white">
            <button
              onClick={() => {
                setExpandCountry(!expandCountry);
              }}
              className="w-full flex items-center justify-between py-2 px-3"
            >
              <span>Country</span>
              <IoIosArrowDown
                className={`origin-center transform transition duration-300 ease-out ${
                  expandCountry ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expandCountry ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-5 pr-2 pb-3 text-sm space-y-1">
                {countriesList.map((country) => (
                  <label key={country} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={country}
                      onChange={(e) => handleCountryCheckbox(e.target.value)}
                      className="h-4 w-4"
                    />
                    <span>{country}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Filter;
