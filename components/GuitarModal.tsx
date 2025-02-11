"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

type ModalProps = {
  isOpen: boolean;
  imageSrc: string;
  altText: string;
  onClose: () => void;
};

const GuitarModal: React.FC<ModalProps> = ({
  isOpen,
  imageSrc,
  altText,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [isOpen]);

  if (!isVisible || !imageSrc) return null;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-75 flex justify-center px-2 items-center z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className={`relative rounded-lg transition-transform transform ${
          isOpen ? "scale-100" : "scale-90"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-white opacity-50 bg-gray-800 hover:opacity-100 transition-opacity ease-in-out rounded-full p-2"
          onClick={onClose}
        >
          <IoClose className="text-3xl" />
        </button>
        {imageSrc && (
          <>
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-500 animate-pulse"></div>
            )}
            <Image
              src={imageSrc}
              alt={altText}
              width={500}
              height={500}
              className="rounded-lg"
              onLoad={() => setIsLoading(false)}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default GuitarModal;
