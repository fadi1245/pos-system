import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import AddProductModal from "./AddItemModal";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { fetchProducts } from "../features/product/productSlice";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function ItemListModal({ isOpen, onClose }: Props) {
  const [addModalOpen, setAddModalOpen] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const { items: products, loading, error } = useSelector(
    (state: RootState) => state.product
  );

  useEffect(() => {
    if (isOpen) {
      dispatch(fetchProducts({ limit: 50 }));
    }
  }, [isOpen, dispatch]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50"
        onClick={onClose}
      >
        <div
          className="bg-white shadow-xl rounded-lg w-[700px] max-h-[600px] overflow-hidden relative"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-blue-800 text-white p-3 font-semibold text-lg flex justify-between items-center">
            <span>Material List</span>

            <button onClick={onClose} className="text-white hover:text-gray-300">
              <IoClose size={26} />
            </button>
          </div>

          <div className="flex items-center justify-between px-4 py-3">
            <div className="relative w-full max-w-[350px]">
              <IoSearch className="absolute left-3 top-3 text-gray-500" />
              <input
                type="text"
                placeholder="Search by item name..."
                className="w-full border rounded-md pl-9 pr-3 py-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <button
              onClick={() => setAddModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md ml-2 flex items-center gap-1"
            >
              <IoMdAdd size={18} />
              Add Item
            </button>
          </div>

          <div className="overflow-auto max-h-[350px] mx-5 border rounded-md">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100 border-b text-gray-700">
                  <th className="p-2 w-16 text-left">TYPE</th>
                  <th className="p-2 text-left">ITEM NAME</th>
                  <th className="p-2 text-right w-20">PRICE</th>
                </tr>
              </thead>

              <tbody>
                {loading && (
                  <tr>
                    <td colSpan={3} className="text-center py-3">
                      Loading...
                    </td>
                  </tr>
                )}

                {error && (
                  <tr>
                    <td colSpan={3} className="text-center text-red-500 py-3">
                      Failed to load products
                    </td>
                  </tr>
                )}

                {!loading && products.length === 0 && (
                  <tr>
                    <td colSpan={3} className="text-center py-3 text-gray-500">
                      No items found
                    </td>
                  </tr>
                )}

                {products.map((p, i) => (
                  <tr
                    key={p._id || i}
                    className="border-b hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="p-2 text-left">G</td>
                    <td className="p-2">{p.name}</td>
                    <td className="p-2 text-right">{p.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center px-4 py-3 text-sm text-gray-600">
            <span>Showing {products.length} records</span>

            <div className="flex items-center gap-2">
              <button className="px-2 py-1 border rounded">&lt;</button>
              <input
                type="number"
                defaultValue={1}
                className="w-12 border rounded text-center py-1"
              />
              <button className="px-2 py-1 border rounded">&gt;</button>
            </div>
          </div>
        </div>
      </div>

      <AddProductModal
        isOpen={addModalOpen}
        onClose={() => setAddModalOpen(false)}
      />
    </>
  );
}

export default ItemListModal;
