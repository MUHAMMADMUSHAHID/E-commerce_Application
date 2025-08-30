import React from 'react'
import './ProductCard.css'

const ProductCard = () => {
  return (
    <div className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
     <div className='h-[20rem]'>
       <img src='https://i.pinimg.com/736x/13/dc/e7/13dce7661c5fd415bff806f24c27063a.jpg' alt='Product Image' className='w-full h-full object-cover object-left-top' />  
     </div>
     <div className='textPart bg-white p-3'>
      <div>
        <p className='font-bold opacity-60'>Urban Monkey</p>
        <p>Mens Hoodie for winter</p>
      </div>
      <div className='flex items-center space-x-2'>
        <p className='font-semibold'>₹299</p>
        <p className='line-through opacity-50'>₹899</p>
        <p className='text-green-500 font-semibold'>70% off</p>
      </div>
     </div>
    </div>
  )
}

export default ProductCard
