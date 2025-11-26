import React from 'react'

function BillinPanel() {
  return (<>
    <div className="bg-blue-800">
    <p className="text-center py-1 text-white font-bold">Item Category</p>
  </div>
    <div className='h-screen p-5 '>
        
        <div className="flex justify-between items-start mb-4">

<div className="flex gap-4">

  <div className="relative w-40">
  <label 
    className="absolute -top-2 left-3 bg-white text-[11px] px-1 text-gray-600"
  >
    Invoice No
  </label>

  <input
    type="text"
    name="invoiceNumber"
    className="border rounded-lg px-3 pt-4 pb-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-400"
    placeholder=""
  />
</div>

  <div className="relative w-40">
  <label className="absolute -top-2 left-3 bg-white text-[11px] px-1 text-gray-600">
    User
  </label>
  <input
    type="text"
    name="userid"
    className="border rounded-lg px-3 pt-4 pb-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-400"
  />
</div>


</div>

<div className="flex flex-col">
  <input
    type="date"
    className="border rounded-lg px-3 py-2 w-40 focus:outline-none focus:ring-1 focus:ring-blue-400"
  />
</div>

</div>
      <div className='flex gap-2 mb-4'>
        <input type="customerName" placeholder='customer neme' className='border rounded-lg px-3 pt-2 pb-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-400' name="" id="" />
        <select name="" id="" className='border rounded-lg px-3 pt-4 pb-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-400'>
            <option value="cash">Cash</option>
            <option value="card">Card</option>
        </select>
      </div>
      <div className='w-full'>
        <input type="text" className='border rounded-lg px-3 pt-2 pb-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-400' name="phone" placeholder='Phone' id="" />
      </div>
      <div className="flex gap-4 my-3">

<div className="relative w-full">
  <label className="absolute -top-2 left-3 bg-white text-[11px] px-1 text-gray-600">
    Barcode
  </label>
  <input
    type="text"
    className="border rounded-lg px-3 pt-4 pb-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-400"
  />
</div>

<div className="relative w-full">
  <label className="absolute -top-2 left-3 bg-white text-[11px] px-1 text-gray-600">
    Item
  </label>
  <input
    type="text"
    className="border rounded-lg px-3 pt-4 pb-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-400"
  />
</div>

</div>

      <div className="border rounded-lg bg-white shadow-sm max-w-[620px] h-[250px] overflow-auto no-scrollbar">

      <div className="grid grid-cols-6 bg-linear-to-r from-blue-700 to-blue-600 text-white font-semibold text-sm py-2 px-3 sticky top-0 z-10">
        <div>#</div>
        <div>ITEM NAME</div>
        <div className="text-center">QTY</div>
        <div className="text-center">PRICE</div>
        <div className="text-center">UNIT</div>
        <div className="text-right">AMOUNT</div>
      </div>

      <div className="divide-y">

        <div className="grid grid-cols-6 items-center py-2 px-3">

          <div>
            <input type="checkbox" className="w-4 h-4" />
          </div>

          <div className="font-medium">MARLBORO TOUCH</div>

          <div className="flex justify-center">
            <input
              type="number"
              defaultValue={1}
              className="w-16 text-center border rounded-md px-2 py-1"
            />
          </div>

          <div className="flex justify-center">
            <input
              type="number"
              defaultValue={19.5}
              className="w-20 text-center border rounded-md px-2 py-1"
            />
          </div>

          <div className="flex justify-center">
            <select className="border rounded-md px-2 py-1">
              <option>Box</option>
              <option>Piece</option>
            </select>
          </div>

          <div className="text-right font-semibold">19.500</div>
        </div>

        <div className="grid grid-cols-6 items-center py-2 px-3">

          <div>
            <input type="checkbox" className="w-4 h-4" />
          </div>

          <div className="font-medium">MARLBORO SILVER BLUE</div>

          <div className="flex justify-center">
            <input
              type="number"
              defaultValue={1}
              className="w-16 text-center border rounded-md px-2 py-1"
            />
          </div>

          <div className="flex justify-center">
            <input
              type="number"
              defaultValue={23.5}
              className="w-20 text-center border rounded-md px-2 py-1"
            />
          </div>

          <div className="flex justify-center">
            <select className="border rounded-md px-2 py-1">
              <option>Box</option>
              <option>Piece</option>
            </select>
          </div>

          <div className="text-right font-semibold">23.500</div>
        </div>

        <div className="grid grid-cols-6 items-center py-2 px-3">

          <div>
            <input type="checkbox" className="w-4 h-4" />
          </div>

          <div className="font-medium">DAVIDOFF ONE SLIM</div>

          <div className="flex justify-center">
            <input
              type="number"
              defaultValue={4}
              className="w-16 text-center border rounded-md px-2 py-1"
            />
          </div>

          <div className="flex justify-center">
            <input
              type="number"
              defaultValue={24.5}
              className="w-20 text-center border rounded-md px-2 py-1"
            />
          </div>

          <div className="flex justify-center">
            <select className="border rounded-md px-2 py-1">
              <option>Box</option>
              <option>Piece</option>
            </select>
          </div>

          <div className="text-right font-semibold">98.000</div>
        </div>

      </div>

      <div className="px-3 py-2">
        <button className="text-blue-600 font-medium text-sm hover:underline flex items-center gap-1">
          <span className="text-lg">+</span> Add Row
        </button>
      </div>
            <div className="grid grid-cols-6 bg-linear-to-r from-blue-700 to-blue-600 text-white font-semibold text-sm py-2 px-3 mt-2">

            <div></div>

            <div className="text-left">TOTAL QTY</div>

            <div className="text-center text-white">6</div>

            <div className="text-right col-span-2">TOTAL AMOUNT</div>

            <div className="text-right font-bold">141.000</div>

            </div>
    </div>
    <div className="flex gap-4 my-3">

<div className="relative w-full mt-2">
  <label className="absolute -top-2 left-3 bg-white text-[11px] px-1 text-gray-600">
    Total Tax
  </label>
  <input
    type="text"
    className="border rounded-lg px-3 pt-4 pb-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-400"
  />
</div>

<div className="relative w-full">
  <label className="absolute -top-2 left-3 bg-white text-[11px] px-1 text-gray-600">
    Total Taxable
  </label>
  <input
    type="text"
    className="border rounded-lg px-3 pt-4 pb-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-400"
  />
</div>

</div>
    <div className="flex gap-4 my-3">

<div className="relative w-full">
  <label className="absolute -top-2 left-3 bg-white text-[11px] px-1 text-gray-600">
    Total Discount
  </label>
  <input
    type="text"
    className="border rounded-lg px-3 pt-4 pb-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-400"
  />
</div>

<div className="relative w-full">
  <label className="absolute -top-2 left-3 bg-white text-[11px] px-1 text-gray-600">
    Adjustments
  </label>
  <input
    type="text"
    className="border rounded-lg px-3 pt-4 pb-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-400"
  />
</div>

</div>

    <div className='flex justify-end' >
        <div className='bg-orange-300 max-w-20 text-center py-3 px-2 rounded-md'>
            141.00
        </div>
    </div>
    </div>
    </>
  )
}

export default BillinPanel
