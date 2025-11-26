import React from "react";
import { IoClose } from "react-icons/io5";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function AddProductModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0  bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl w-[850px] max-h-[650px] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-blue-800 text-white p-3 flex justify-between items-center text-lg font-semibold">
          <span>New Material</span>
          <button onClick={onClose} className="hover:text-gray-200">
            <IoClose size={26} />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 grid grid-cols-2 gap-6">

          {/* LEFT COLUMN */}
          <div className="space-y-4">

            {/* Category */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">
                Item group selection
              </label>
              <select className="border rounded-md px-3 py-2">
                <option>Select category</option>
              </select>
            </div>

            {/* Item Name + HSN */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm text-gray-700">Item Name*</label>
                <input
                  className="border rounded-md w-full px-3 py-2"
                  placeholder="Enter item name"
                />
              </div>
              <div>
                <label className="text-sm text-gray-700">Item HSN</label>
                <input
                  className="border rounded-md w-full px-3 py-2"
                  placeholder="Enter item hsn"
                />
              </div>
            </div>

            {/* Item code + Barcode */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm text-gray-700">Item code</label>
                <input
                  className="border rounded-md w-full px-3 py-2"
                  placeholder="Enter item code"
                />
              </div>
              <div>
                <label className="text-sm text-gray-700">Barcode</label>
                <input
                  className="border rounded-md w-full px-3 py-2"
                  placeholder="Barcode"
                />
              </div>
            </div>

            {/* Units */}
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="text-sm text-gray-700">Unit Primary*</label>
                <select className="border rounded-md w-full px-3 py-2">
                  <option>Select unit</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-700">Secondary</label>
                <select className="border rounded-md w-full px-3 py-2">
                  <option>Select unit</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-700">CF*</label>
                <input
                  className="border rounded-md w-full px-3 py-2"
                  placeholder="CF"
                />
              </div>
            </div>

            {/* Tax + Batch + Serial */}
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="text-sm text-gray-700">Tax %</label>
                <select className="border rounded-md w-full px-3 py-2">
                  <option>Select tax rate</option>
                </select>
              </div>

              <div className="flex items-center gap-2 pt-6">
                <input type="checkbox" />
                <span className="text-sm text-gray-700">Enabled</span>
              </div>

              <div className="flex items-center gap-2 pt-6">
                <input type="checkbox" />
                <span className="text-sm text-gray-700">Enabled</span>
              </div>
            </div>

            {/* Image upload */}
            <div>
              <label className="text-sm text-gray-700">Item image</label>

              <div className="border border-dashed rounded-md text-center py-10 text-gray-500">
                <p>Upload image (max 5MB)</p>
                <p className="text-xs">PNG, JPG supported</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-4">

            {/* Purchase Rate */}
            <div>
              <label className="text-sm text-gray-700">Purchase Rate</label>
              <input className="border rounded-md w-full px-3 py-2" />
            </div>

            {/* Retail Rate */}
            <div>
              <label className="text-sm text-gray-700">Retail Rate</label>
              <input className="border rounded-md w-full px-3 py-2" />
            </div>

            {/* Wholesale Rate */}
            <div>
              <label className="text-sm text-gray-700">Wholesale Rate</label>
              <input className="border rounded-md w-full px-3 py-2" />
            </div>

            {/* Discount Amount */}
            <div>
              <label className="text-sm text-gray-700">Discount Amount</label>
              <input className="border rounded-md w-full px-3 py-2" />
            </div>

            {/* Warehouse */}
            <div>
              <label className="text-sm text-gray-700">Warehouse</label>
              <select className="border rounded-md w-full px-3 py-2">
                <option>Select warehouse</option>
              </select>
            </div>

            {/* Opening Stock */}
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <span className="text-sm text-gray-700">Enabled Opening Stock</span>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end items-center gap-3 px-6 py-3 border-t bg-gray-50">

          <button className="bg-red-400 text-white px-6 py-2 rounded-md">
            Clear all
          </button>

          <button className="border px-6 py-2 rounded-md">
            Save & New
          </button>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-md">
            Save
          </button>

        </div>
      </div>
    </div>
  );
}

export default AddProductModal;
