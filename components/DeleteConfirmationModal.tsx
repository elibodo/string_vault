"use client";

import React from "react";

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  isOpen,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4">
          Are you sure you want to delete this item?
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          This action cannot be undone.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={onCancel}
            className="transition-all duration-300 ease-in-out border-2 rounded-md py-1 px-2 text-lg
            dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-300 
            dark:hover:text-gray-800 bg-gray-200 text-black border-gray-400 hover:bg-gray-800 
            hover:text-white"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="transition-all duration-300 ease-in-out border-2 rounded-md py-1 px-2 text-lg
            dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-red-500 
            dark:hover:text-gray-800 bg-gray-200 text-black border-gray-400 hover:bg-red-500 
            hover:text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
