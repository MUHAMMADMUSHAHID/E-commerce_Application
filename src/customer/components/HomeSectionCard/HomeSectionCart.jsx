import React from 'react'

const HomeSectionCart = () => {
  return (
    <div className='cursor pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 '>
     <div className='h-[13rem] w[10rem]'>
        <img className='object-cover object-top w-full h-full' src="https://i.pinimg.com/736x/81/57/e3/8157e3f8221d4b5d90412dab01feb428.jpg" alt="" />
     </div>
     <div className='p-4'>
        <h3 className='text-lg font-medium text-gray-900'>Nofilter</h3>
        <p className='mt-2 text-sm text-gray-500'>Men solid pure cotton t-shirt</p>

     </div>
      
    </div>
  )
}

export default HomeSectionCart
