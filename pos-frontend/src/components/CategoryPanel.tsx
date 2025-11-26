import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../app/store";
import { fetchCategories } from "../features/category/categorySlice";

function CategoryPanel() {

  const dispatch = useDispatch<AppDispatch>();

  const { items, loading, error } = useSelector(
    (state: RootState) => state.category
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="bg-white shadow-md w-[350px] h-[500px] overflow-auto">
      
          <div className="bg-blue-800">
            <p className="text-center py-1 text-white font-bold">Item Category</p>
          </div>
      <div className="grid grid-cols-2 gap-3 px-3 py-3">
        {items.map((cat, index) => (
          <div
            key={index}
            className="rounded-md px-3 py-4 text-center font-medium bg-blue-200 hover:bg-gray-100 cursor-pointer shadow-xl"
          >
            {cat.name}
          </div>
        ))}
      </div>

    </div>
  );
}

export default CategoryPanel;
