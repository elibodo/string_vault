"use client";

import { useState } from "react";
import Image from "next/image";
import GuitarModal from "./components/GuitarModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [modalAltText, setModalAltText] = useState("");

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
  ];

  const openModal = (imageSrc: string, altText: string) => {
    setModalImageSrc(imageSrc);
    setModalAltText(altText);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImageSrc("");
    setModalAltText("");
  };

  return (
    <div className="container mx-auto px-3 pb-16 pt-4">
      <div className="flex flex-col md:flex-row md:space-x-10">
        {/* Left side: Title */}
        <div className="mb-8 md:mb-0">
          <h1 className="text-4xl font-semibold text-gray-500 whitespace-nowrap">
            String Vault
          </h1>
        </div>

        {/* Right side: Description */}
        <div className="space-y-8 text-lg">
          <p>
            A website I built to organize and showcase pictures of my entire
            guitar collection, as well as other people&apos;s collections.
          </p>
          <p className="text-base">
            Click the &apos;Search&apos; button at the top of the page to see
            more gear. You can search by brand, model, or country of origin
            using the search bar, or filter your results with the drop-down
            selectors.
          </p>
          <p className="text-base">
            Sign up to upload pictures of your gear, track serial numbers, keep
            track of how much you paid, have a record of the guitars that you
            own, and view your entire collection on your profile.
          </p>

          <p className="text-base">
            Here are some pieces from my collection. Click them to view a larger
            image.
          </p>

          {/* Gallery Section */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {guitarCollection.map((guitar) => (
              <div key={guitar.id} className="flex flex-col items-center">
                {/* Image Container */}
                <div
                  className="relative w-full h-[270px] cursor-pointer rounded-t-xl overflow-hidden hover:scale-105 transition-transform ease-in-out duration-200"
                  onClick={() =>
                    openModal(guitar.imageUrl, `${guitar.make} ${guitar.model}`)
                  }
                >
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

      {/* Modal Component */}
      <GuitarModal
        isOpen={isModalOpen}
        imageSrc={modalImageSrc}
        altText={modalAltText}
        onClose={closeModal}
      />
    </div>
  );
}
