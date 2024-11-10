"use client";

import Image from "next/image";

export default function Home() {
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
      make: "Ibanez",
      model: "S1027PBF",
      madeIn: "Indonesia",
      year: "2019",
      imageUrl: "/ibanez_s_7.jpg",
    },
    {
      id: 4,
      make: "Fender",
      model: "Stratocaster",
      madeIn: "",
      year: "",
      imageUrl: "/strats_cat.jpg",
    },
  ];
  return (
    <div className="container mx-auto px-4 pb-8 pt-4">
      <div className="flex flex-col md:flex-row md:space-x-10">
        {/* Left side: Title */}
        <div className="mb-8 md:mb-0">
          <h1 className="text-4xl font-semibold text-gray-500 whitespace-nowrap">
            String Vault
          </h1>
        </div>

        {/* Right side: Description */}
        <div className="space-y-4 text-lg">
          <p>
            A website I created to keep pictures of all my guitars in one place.
          </p>
          <p>Here&apos;s some of my collection</p>

          {/* Gallery Section */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {guitarCollection.map((guitar) => (
              <div key={guitar.id} className="flex flex-col items-center">
                {/* Image Container */}
                <div className="relative w-full h-[270px] cursor-pointer rounded-t-xl overflow-hidden hover:scale-105 transition-transform ease-in-out duration-200">
                  <Image
                    src={guitar.imageUrl} // Dynamically set the image based on the object
                    alt={`${guitar.make} ${guitar.model}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                {/* Description Container */}
                <div className="w-full border border-t-0 border-gray-500 rounded-b-xl p-4 shadow-md overflow-clip">
                  <div className="flex flex-row justify-between">
                    <h2 className="text-base md:text-lg font-semibold">
                      {guitar.make}
                    </h2>
                    <p className="text-gray-500 text-sm md:text-lg">
                      {guitar.year}
                    </p>
                  </div>

                  <p className="text-gray-500 text-sm md:text-lg">
                    {guitar.model}
                  </p>
                  <p className="text-gray-500 text-sm md:text-lg">
                    {guitar.madeIn}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p>
            Using your Google account to sign up, you can upload pictures of
            your gear, track serial numbers, and input model and brand
            information from your profile.
          </p>
          <p>
            Press the &apos;Search&apos; button at the top of the page to view
            your gear as well as others. You can search for models, brands, and
            types (electric / acoustic / extended range) using the search bar or
            filter by these options with the drop-down selectors.
          </p>
        </div>
      </div>
    </div>
  );
}
