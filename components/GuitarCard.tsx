"use client";

import React from "react";
import Image from "next/image";
import GuitarModal from "./GuitarModal";
import { useState } from "react";

type Props = {
  guitar: {
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
  };
};

const GuitarCard = ({ guitar }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [modalAltText, setModalAltText] = useState("");

  const [isLoading, setIsLoading] = useState(true);

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
    <>
      <div key={guitar.id} className="flex flex-col items-center">
        {/* Image Container */}
        <div
          className="relative w-full h-[270px] cursor-pointer rounded-t-xl overflow-hidden hover:scale-105 transition-transform ease-in-out duration-200"
          onClick={() =>
            openModal(guitar.image_url, `${guitar.brand} ${guitar.model}`)
          }
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-500 animate-pulse"></div>
          )}
          <Image
            src={guitar.image_url}
            alt={`${guitar.brand} ${guitar.model}`}
            fill
            style={{ objectFit: "cover" }}
            onLoad={() => setIsLoading(false)}
          />
        </div>
        {/* Description Container */}
        <div className="w-full border border-t-0 border-gray-500 rounded-b-xl p-4 shadow-md overflow-clip">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-base lg:text-lg font-semibold">
              {guitar.brand}
            </h2>
            <p className="text-gray-500 text-sm lg:text-base">{guitar.year}</p>
          </div>

          <p className="text-gray-500 text-sm lg:text-base">{guitar.model}</p>
          <p className="text-gray-500 text-sm lg:text-base">
            {guitar.submodel}
          </p>
          <p className="text-gray-500 text-sm lg:text-base">{guitar.madein}</p>
        </div>
      </div>
      <GuitarModal
        isOpen={isModalOpen}
        imageSrc={modalImageSrc}
        altText={modalAltText}
        onClose={closeModal}
      />
    </>
  );
};

export default GuitarCard;
