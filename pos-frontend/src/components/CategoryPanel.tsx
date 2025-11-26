import React from "react";

function CategoryPanel() {
  // Temporary object array for testing
  const categories = [
    { name: "Mobile" },
    { name: "Laptop" },
    { name: "Headphones" },
    { name: "Chargers" },
    { name: "Accessories" },
    { name: "Camera" },
    { name: "Speakers" },
  ];

  return (
    <div className="bg-white shadow-md w-[350px] h-[500px] overflow-auto">
      
      {/* Header */}
          <div className="bg-blue-800">
            <p className="text-center py-1 text-white font-bold">Item Category</p>
          </div>
      {/* Category Boxes Grid */}
      <div className="grid grid-cols-2 gap-3 px-3 py-3">
        {categories.map((cat, index) => (
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
