import React from 'react'
import { Link, Outlet } from 'react-router-dom' 

const Products = () => {
  return (
    <div className='flex gap-4 mb-4 justify-center text-center'>
        <Link className='text-lg font-bold p-4 mt-5 border-2 rounded-full' to='/product/men'>Men's</Link>
        <Link className='text-lg font-bold p-4 mt-5 border-2 rounded-full' to='/product/women'>Women's</Link>

        {/* // This is nessary use in nested routing  */}
        <Outlet/>
    </div>
  )
}

export default Products