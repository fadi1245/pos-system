import React, { useState } from 'react'
import { FaRegCirclePause } from "react-icons/fa6";
import { IoReturnUpBack } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";
import { IoChevronBackOutline } from "react-icons/io5";
import { GrNext } from "react-icons/gr";
import { FiMinus } from "react-icons/fi";
import { MdOutlineLocalPrintshop } from "react-icons/md";
import { IoReturnUpBackSharp } from "react-icons/io5";
import { CiEraser } from "react-icons/ci";
import ItemListModal from './ItemListModal';

function ActionPanel() {
    const [itemModalOpen, setItemModalOpen] = useState(false);

  return (
    <div className='px-4 py-3 space-y-4'>

      <div className='grid grid-cols-7 gap-3'>

        <div className='border w-full py-3 bg-amber-100 rounded-md shadow-sm'>
          <div className='flex justify-center text-xl'>
            <FaRegCirclePause />
          </div>
          <p className='text-center text-sm font-medium'>Hold</p>
        </div>

        <div className='border w-full py-3 bg-amber-100 rounded-md shadow-sm'>
          <div className='flex justify-center text-xl'>
            <IoReturnUpBack />
          </div>
          <p className='text-center text-sm font-medium'>Recall</p>
        </div>

        <div className='border w-full py-3 bg-amber-100 rounded-md shadow-sm'>
          <div className='flex justify-center text-xl'>
            <IoMdAdd />
          </div>
          <p className='text-center text-sm font-medium'>QTY</p>
        </div>

        <div className='border w-full py-3 bg-red-200 rounded-md shadow-sm'>
          <div className='flex justify-center text-xl'>
            <MdOutlineDelete />
          </div>
          <p className='text-center text-sm font-medium'>Del All</p>
        </div>

        <div className="col-span-3 flex gap-1">
            <div className="flex-1 bg-green-500 text-white font-semibold rounded-md flex items-center justify-center text-sm">
                PREVIEW & SAVE
            </div>

            <div className="flex-1 bg-green-500 text-white font-semibold rounded-md flex items-center justify-center text-sm">
                SAVE & PRINT
            </div>
            </div>
        <div></div>
      </div>

      <div className='grid grid-cols-7 gap-3'>

        <div className='border w-full py-3 bg-amber-100 rounded-md shadow-sm'>
          <div className='flex justify-center text-xl'>
            <IoChevronBackOutline />
          </div>
          <p className='text-center text-sm font-medium'>Prev</p>
        </div>

        <div className='border w-full py-3 bg-amber-100 rounded-md shadow-sm'>
          <div className='flex justify-center text-xl'>
            <GrNext />
          </div>
          <p className='text-center text-sm font-medium'>Next</p>
        </div>

        <div className='border w-full py-3 bg-amber-100 rounded-md shadow-sm'>
          <div className='flex justify-center text-xl'>
            <FiMinus />
          </div>
          <p className='text-center text-sm font-medium'>QTY</p>
        </div>

        <div className='border w-full py-3 bg-red-200 rounded-md shadow-sm'>
          <div className='flex justify-center text-xl'>
            <MdOutlineDelete />
          </div>
          <p className='text-center text-sm font-medium'>Del Row</p>
        </div>

        <div className='border w-full py-3 bg-amber-100 rounded-md shadow-sm text-center text-sm font-medium'>
          Report
        </div>

        <div className='border w-full py-3 bg-amber-100 rounded-md shadow-sm text-center text-sm font-medium'>
          Cash
        </div>

        <div className='border w-full py-3 bg-amber-100 rounded-md shadow-sm text-center text-sm font-medium'>
          0.00
        </div>

      </div>

      <div className='grid grid-cols-7 gap-3'>

        <div className='border w-full py-3 bg-blue-100 rounded-md shadow-sm'>
          <div className='flex justify-center text-xl'>
            <MdOutlineLocalPrintshop />
          </div>
          <p className='text-center text-sm font-medium'>Reprint</p>
        </div>

        <div className='border w-full py-3 bg-blue-100 rounded-md shadow-sm'>
          <div className='flex justify-center text-xl'>
            <IoReturnUpBackSharp />
          </div>
          <p className='text-center text-sm font-medium'>S Return</p>
        </div>

        <div className='border w-full py-3 bg-blue-100 rounded-md shadow-sm'>
          <div className='flex justify-center text-xl'>
            <CiEraser />
          </div>
          <p className='text-center text-sm font-medium'>Clear</p>
        </div>

        <div className='border w-full py-3 bg-blue-100 rounded-md shadow-sm text-center text-sm font-medium'>
          Price
        </div>

        <div className='border w-full py-3 bg-blue-100 rounded-md shadow-sm text-center text-sm font-medium'>
          Accounts
        </div>

        <div className='border w-full py-3 bg-blue-100 rounded-md shadow-sm text-center text-sm font-medium'
        onClick={() => setItemModalOpen(true)}
        >
          Item
        </div>

        <div className='border w-full py-3 bg-blue-100 rounded-md shadow-sm text-center text-sm font-medium'>
          Balance 0.000
        </div>

      </div>
      <ItemListModal 
        isOpen={itemModalOpen} 
        onClose={() => setItemModalOpen(false)} 
      />
    </div>
  )
}

export default ActionPanel
