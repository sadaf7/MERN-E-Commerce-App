import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
            <img className='w-full h-full object-contain object-top' src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" alt="" />
        </div>

        <div className="ml-5 space-y-2">
            <p className='font-semibold'>Brand Name</p>
            <p className='opacity-80'>size: L, White</p>
            <p className='text-lg font-medium'>Title</p>
            <div className="flex space-x-5 items-center text-lg pt-2 text-gray-900">
              <p className='font-semibold'>$200</p>
              <p className='opacity-70 line-through'>$100</p>
              <p className='text-green-500 font-semibold'>5% off</p>
            </div>
        </div>
      </div>
        <div className="lg:flex items-center lg:space-x-10 pt-4">
            <div className="flex items-center space-x-2">
                <IconButton sx={{color:'violet'}}>
                    <RemoveCircleOutlineIcon/>
                </IconButton>
                <span className="py-1 px-7 border rounded-sm">2</span>
                    <IconButton sx={{color:'violet'}}>
                        <AddCircleOutlineIcon/>
                    </IconButton>
            </div>
            <div className="">
                <Button sx={{color:'violet'}}>Remove</Button>
            </div>
        </div>
    </div>
  )
}

export default CartItem
