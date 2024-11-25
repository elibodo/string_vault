import React from "react";
import Filter from "../components/Filter";
import Image from "next/image";

const page = () => {
  const guitarCollection = [
    {
      id: 1,
      make: "Fender",
      model: "Stratocaster",
      madeIn: "Japan",
      year: "1994",
      imageUrl: "/fender.jpg",
    },
    {
      id: 2,
      make: "Ibanez",
      model: "AZ2402",
      madeIn: "Japan",
      year: "2020",
      imageUrl: "/ibanez_az.jpg",
    },
    {
      id: 3,
      make: "Fender",
      model: "Stratocaster",
      madeIn: "Mexico",
      year: "1993",
      imageUrl: "/fender2.jpg",
    },
    {
      id: 4,
      make: "Ibanez",
      model: "S1027PBF",
      madeIn: "Indonesia",
      year: "2019",
      imageUrl: "/ibanez_s_7.jpg",
    },
    {
      id: 5,
      make: "Ibanez",
      model: "S1027PBF",
      madeIn: "Indonesia",
      year: "2019",
      imageUrl: "/ibanez_s_7.jpg",
    },
    {
      id: 6,
      make: "Ibanez",
      model: "S1027PBF",
      madeIn: "Indonesia",
      year: "2019",
      imageUrl: "/ibanez_s_7.jpg",
    },
  ];
  return (
    <div className="container mx-auto px-3 pb-16 pt-4">
      <div className="flex flex-col lg:flex-row lg:space-x-10">
        {/* Left side: Title */}
        <div className="mb-8 lg:mb-0">
          <Filter />
        </div>
        {/* Gallery Section */}
        <div className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {guitarCollection.map((guitar) => (
            <div key={guitar.id} className="flex flex-col items-center">
              {/* Image Container */}
              <div className="relative w-full h-[270px] cursor-pointer rounded-t-xl overflow-hidden hover:scale-105 transition-transform ease-in-out duration-200">
                <Image
                  src={guitar.imageUrl}
                  alt={`${guitar.make} ${guitar.model}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              {/* Description Container */}
              <div className="w-full border border-t-0 border-gray-500 rounded-b-xl p-4 shadow-md overflow-clip">
                <div className="flex flex-row justify-between items-center">
                  <h2 className="text-base lg:text-lg font-semibold">
                    {guitar.make}
                  </h2>
                  <p className="text-gray-500 text-sm lg:text-base">
                    {guitar.year}
                  </p>
                </div>

                <p className="text-gray-500 text-sm lg:text-base">
                  {guitar.model}
                </p>
                <p className="text-gray-500 text-sm lg:text-base">
                  {guitar.madeIn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
