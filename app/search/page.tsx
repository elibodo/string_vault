import React from "react";
import Filter from "../components/Filter";
import GuitarCard from "../components/GuitarCard";
import { guitars } from "../guitars";

const page = () => {
  return (
    <div className="container mx-auto px-3 pb-16 pt-4">
      <div className="flex flex-col lg:flex-row lg:space-x-10">
        {/* Left side: Title */}
        <div className="mb-8 lg:mb-0">
          <Filter />
        </div>
        {/* Gallery Section */}
        <div className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {guitars.map((guitar) => (
            <GuitarCard key={guitar.serialNumber} guitar={guitar} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
