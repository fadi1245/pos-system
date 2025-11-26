import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { fetchCategories } from "../features/category/categorySlice";
import { createProduct } from "../features/product/productSlice";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function AddProductModal({ isOpen, onClose }: Props) {
  const dispatch = useDispatch<AppDispatch>();

  const { items: categories } = useSelector(
    (state: RootState) => state.category
  );

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (isOpen) dispatch(fetchCategories());
  }, [isOpen, dispatch]);

  const handleSave = () => {
    if (!name || !category || !price) {
      alert("Item name, category, and price are required");
      return;
    }

    dispatch(
      createProduct({
        name,
        category,
        price: Number(price),
      })
    );

    setName("");
    setCategory("");
    setPrice("");

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl w-[900px] max-h-[650px] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-blue-800 text-white p-3 flex justify-between items-center text-lg font-semibold">
          <span>New Material</span>
          <button onClick={onClose}>
            <IoClose size={26} className="hover:text-gray-300" />
          </button>
        </div>

        <div className="p-6 grid grid-cols-2 gap-6">
          <div className="space-y-4">

            <div className="flex flex-col">
              <label className="text-sm text-gray-700">Item group selection</label>
              <select
                className="border rounded-md px-3 py-2"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select category</option>
                {categories.map((c) => (
                  <option key={c._id} value={c._id}>
                    {c.name}
                  </option>
                ))}
                <option disabled>──────────</option>
                <option value="__new">➕ Add New Category</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm text-gray-700">Item Name*</label>
                <input
                  className="border rounded-md w-full px-3 py-2"
                  placeholder="Enter item name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="text-sm text-gray-700">Item HSN</label>
                <input className="border rounded-md w-full px-3 py-2" disabled />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm text-gray-700">Item code</label>
                <input className="border rounded-md w-full px-3 py-2" disabled />
              </div>
              <div>
                <label className="text-sm text-gray-700">Barcode</label>
                <input className="border rounded-md w-full px-3 py-2" disabled />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="text-sm text-gray-700">Unit Primary</label>
                <select className="border rounded-md w-full px-3 py-2" disabled>
                  <option>Select unit</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-700">Secondary</label>
                <select className="border rounded-md w-full px-3 py-2" disabled>
                  <option>Select unit</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-700">CF</label>
                <input className="border rounded-md w-full px-3 py-2" disabled />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-700">Item image</label>
              <div className="border border-dashed rounded-md text-center py-10 text-gray-500">
                <p>Upload image (max 5MB)</p>
                <p className="text-xs">PNG, JPG supported</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-700">Purchase Rate*</label>
              <input
                className="border rounded-md w-full px-3 py-2"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="0.00"
              />
            </div>

            <div>
              <label className="text-sm text-gray-700">Retail Rate</label>
              <input className="border rounded-md w-full px-3 py-2" disabled />
            </div>
            <div>
              <label className="text-sm text-gray-700">Wholesale Rate</label>
              <input className="border rounded-md w-full px-3 py-2" disabled />
            </div>

            <div>
              <label className="text-sm text-gray-700">Discount Amount</label>
              <input className="border rounded-md w-full px-3 py-2" disabled />
            </div>

            <div>
              <label className="text-sm text-gray-700">Warehouse</label>
              <select className="border rounded-md w-full px-3 py-2" disabled>
                <option>Select warehouse</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" disabled />
              <span className="text-sm text-gray-700">Enabled Opening Stock</span>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-center gap-3 px-6 py-3 border-t bg-gray-50">
          <button className="bg-red-400 text-white px-6 py-2 rounded-md">
            Clear all
          </button>

          <button className="border px-6 py-2 rounded-md">Save & New</button>

          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-6 py-2 rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProductModal;
