import React from 'react'
import { AiOutlineShoppingCart, AiOutlineWarning } from "react-icons/ai";


function ProductPanel() {
    const products = [
        { name: "DAVIDOFF ONE SLIM", price: 24.5, lowStock: true },
        { name: "MARLBORO SILVER BLUE", price: 23.5, lowStock: true },
        { name: "MARLBORO VISTA", price: 23.5, lowStock: true },
        { name: "MARLBORO TOUCH", price: 19.5, lowStock: false },
        { name: "SCISSORS RED SMALL", price: 12.7, lowStock: true },
        { name: "WILLS RED SMALL", price: 13.7, lowStock: true },
        { name: "DAVIDOFF GOLD", price: 24.5, lowStock: true },
        { name: "MARLBORO WHITE", price: 23.5, lowStock: false },
        { name: "MARLBORO RED", price: 23.5, lowStock: false },
      ];
  return (
    <div className='bg-red-500'>
      <div className="bg-white shadow-md w-full h-[500px] overflow-auto no-scollbar">

{/* Header */}
<div className="bg-blue-800 sticky top-0 z-20">
  <p className="text-center py-1 text-white font-bold">Item Details</p>
</div>

{/* Product Grid */}
<div className="grid grid-cols-4 gap-3 px-2 py-3">

  {products.map((product, index) => (
    <div
      key={index}
      className="relative bg-yellow-200 rounded-md p-1 h-[150px] w-40 shadow-md cursor-pointer hover:brightness-95 transition"
    >
      {/* Floating Price Label (same method used for BillingPanel floating label) */}
      <div className="absolute -top-2 left-2 bg-green-500 text-white text-[12px] px-2 py-px rounded font-semibold shadow">
        {product.price.toFixed(1)}
      </div>

      <div className="flex flex-col items-center justify-center h-full gap-1">
  <div className="text-orange-700 text-3xl">
    <AiOutlineShoppingCart />
  </div>

  <div className="text-center font-medium px-1 leading-tight">
    {product.name}
  </div>
</div>

      {/* Low Stock Warning */}
      {product.lowStock && (
        <div className="absolute bottom-0 left-0 right-0 bg-red-500 text-white text-[11px] py-0.5 flex items-center justify-center gap-1">
          <AiOutlineWarning className="text-white text-sm" />
          Low Stock
        </div>
      )}
    </div>
  ))}

</div>
</div>
    </div>
  )
}

export default ProductPanel
