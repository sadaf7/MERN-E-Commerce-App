import React from 'react'

const HomeSectionCard = ({product}) => {
  return (
    <div className='cursor-pointer bg-white w-[15rem] flex flex-col items-center rounded-lg shadow-lg overflow-hidden mx-3'>
      
      <div className='h-[13rem] w-[10rem]'>
        <img className=' object-cover object-top w-full h-full' src={product.imageUrl} alt="" />
      </div>

      <div className='p-4'>
        <h3 className=' text-lg font-medium text-gray-900'>Name</h3>
        <p className=' mt-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, explicabo?</p>
      </div>
      <img src="" alt="" />
    </div>
  )
}

export default HomeSectionCard
