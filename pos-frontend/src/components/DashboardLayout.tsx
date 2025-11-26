import React from 'react'
import BillinPanel from './BillinPanel'
import CategoryPanel from './CategoryPanel'
import ProductPanel from './ProductPanel'
import ActionPanel from './ActionPanel'

function DashboardLayout() {
  return (
    <div>
      <div className='flex h-screen w-full overflow-hidden'>
            <div>
                <BillinPanel/>
            </div>
            <div>
                <div className='flex'>
                    <CategoryPanel/>
                    <ProductPanel/>
                </div>
                <div>
                    <ActionPanel/>
                </div>
            </div>
      </div>
    </div>
  )
}

export default DashboardLayout
