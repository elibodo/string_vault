"use client";

import React from "react";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

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
    <div className="space-y-4">
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
          <button className="transition-all duration-300 ease-in-out border-2 rounded-md p-1 text-3xl dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-300 dark:hover:text-gray-800 bg-gray-200 text-black border-gray-400 hover:bg-gray-800 hover:text-white">
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
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={"Fender"}
                    onChange={(e) => handleBrandCheckbox(e.target.value)}
                    className="h-4 w-4"
                  />
                  <span>Fender</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={"Gibson"}
                    onChange={(e) => handleBrandCheckbox(e.target.value)}
                    className="h-4 w-4"
                  />
                  <span>Gibson</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={"PRS"}
                    onChange={(e) => handleBrandCheckbox(e.target.value)}
                    className="h-4 w-4"
                  />
                  <span>PRS</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={"Ibanez"}
                    onChange={(e) => handleBrandCheckbox(e.target.value)}
                    className="h-4 w-4"
                  />
                  <span>Ibanez</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={"Epiphone"}
                    onChange={(e) => handleBrandCheckbox(e.target.value)}
                    className="h-4 w-4"
                  />
                  <span>Epiphone</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={"Martin"}
                    onChange={(e) => handleBrandCheckbox(e.target.value)}
                    className="h-4 w-4"
                  />
                  <span>Martin</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={"Yamaha"}
                    onChange={(e) => handleBrandCheckbox(e.target.value)}
                    className="h-4 w-4"
                  />
                  <span>Yamaha</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={"Taylor"}
                    onChange={(e) => handleBrandCheckbox(e.target.value)}
                    className="h-4 w-4"
                  />
                  <span>Taylor</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={"Jackson"}
                    onChange={(e) => handleBrandCheckbox(e.target.value)}
                    className="h-4 w-4"
                  />
                  <span>Jackson</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={"ESP"}
                    onChange={(e) => handleBrandCheckbox(e.target.value)}
                    className="h-4 w-4"
                  />
                  <span>ESP</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={"Squier"}
                    onChange={(e) => handleBrandCheckbox(e.target.value)}
                    className="h-4 w-4"
                  />
                  <span>Squier</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={"Schecter"}
                    onChange={(e) => handleBrandCheckbox(e.target.value)}
                    className="h-4 w-4"
                  />
                  <span>Schecter</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={"Gretsch"}
                    onChange={(e) => handleBrandCheckbox(e.target.value)}
                    className="h-4 w-4"
                  />
                  <span>Gretsch</span>
                </label>
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
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={"Stratocaster"}
                    onChange={(e) => handleModelCheckbox(e.target.value)}
                    className="h-4 w-4"
                  />
                  <span>Stratocaster</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={"Les Paul"}
                    onChange={(e) => handleModelCheckbox(e.target.value)}
                    className="h-4 w-4"
                  />
                  <span>Les Paul</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={"Telecaster"}
                    onChange={(e) => handleModelCheckbox(e.target.value)}
                    className="h-4 w-4"
                  />
                  <span>Telecaster</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={"SG"}
                    onChange={(e) => handleModelCheckbox(e.target.value)}
                    className="h-4 w-4"
                  />
                  <span>SG</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={"Flying V"}
                    onChange={(e) => handleModelCheckbox(e.target.value)}
                    className="h-4 w-4"
                  />
                  <span>Flying V</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={"Explorer"}
                    onChange={(e) => handleModelCheckbox(e.target.value)}
                    className="h-4 w-4"
                  />
                  <span>Explorer</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={"Jazzmaster"}
                    onChange={(e) => handleModelCheckbox(e.target.value)}
                    className="h-4 w-4"
                  />
                  <span>Jazzmaster</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={"Jaguar"}
                    onChange={(e) => handleModelCheckbox(e.target.value)}
                    className="h-4 w-4"
                  />
                  <span>Jaguar</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={"Firebird"}
                    onChange={(e) => handleModelCheckbox(e.target.value)}
                    className="h-4 w-4"
                  />
                  <span>Firebird</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={"Mustang"}
                    onChange={(e) => handleModelCheckbox(e.target.value)}
                    className="h-4 w-4"
                  />
                  <span>Mustang</span>
                </label>
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
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={"USA"}
                    onChange={(e) => handleCountryCheckbox(e.target.value)}
                    className="h-4 w-4"
                  />
                  <span>USA</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={"Japan"}
                    onChange={(e) => handleCountryCheckbox(e.target.value)}
                    className="h-4 w-4"
                  />
                  <span>Japan</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={"Mexico"}
                    onChange={(e) => handleCountryCheckbox(e.target.value)}
                    className="h-4 w-4"
                  />
                  <span>Mexico</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={"South Korea"}
                    onChange={(e) => handleCountryCheckbox(e.target.value)}
                    className="h-4 w-4"
                  />
                  <span>South Korea</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={"Indonesia"}
                    onChange={(e) => handleCountryCheckbox(e.target.value)}
                    className="h-4 w-4"
                  />
                  <span>Indonesia</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={"China"}
                    onChange={(e) => handleCountryCheckbox(e.target.value)}
                    className="h-4 w-4"
                  />
                  <span>China</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={"Canada"}
                    onChange={(e) => handleCountryCheckbox(e.target.value)}
                    className="h-4 w-4"
                  />
                  <span>Canada</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={"Italy"}
                    onChange={(e) => handleCountryCheckbox(e.target.value)}
                    className="h-4 w-4"
                  />
                  <span>Italy</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
