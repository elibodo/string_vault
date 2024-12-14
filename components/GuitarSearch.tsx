"use client";

import React, { useState } from "react";
import Filter from "./Filter";
import Feed from "./Feed";

const GuitarSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [brands, setBrands] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [countries, setCountries] = useState<string[]>([]);

  return (
    <div className="container mx-auto px-3 pb-16 pt-4">
      <div className="flex flex-col lg:flex-row lg:space-x-10">
        <div className="mb-8 lg:mb-0">
          <Filter
            setSearchQuery={setSearchQuery}
            setBrands={setBrands}
            setModels={setModels}
            setCountries={setCountries}
          />
        </div>
        <Feed
          searchQuery={searchQuery}
          brands={brands}
          models={models}
          countries={countries}
        />
      </div>
    </div>
  );
};

export default GuitarSearch;
