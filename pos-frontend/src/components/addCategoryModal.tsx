import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSave: (name: string) => void;
}

function NewCategoryModal({ isOpen, onClose, onSave }: Props) {
  const [name, setName] = useState("");

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg w-[350px] p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">Add New Category</h2>
          <button onClick={onClose}>
            <IoClose size={24} className="text-gray-700" />
          </button>
        </div>

        <div className="flex flex-col mb-4">
          <label className="text-sm text-gray-600 mb-1">Category Name *</label>
          <input
            type="text"
            placeholder="Enter category name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-md px-3 py-2 focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-end gap-3 mt-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-md text-gray-600"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              if (name.trim() !== "") {
                onSave(name);
                onClose();
              }
            }}
            className="px-5 py-2 bg-blue-600 text-white rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewCategoryModal;
