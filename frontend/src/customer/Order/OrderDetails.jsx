import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracking from './OrderTracking'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const OrderDetails = () => {
  return (
    <div className='px:5 lg:px-20'>
        <div className="">
            <h1 className="font-bold text-xl py-10">Delivery Address</h1>
            <AddressCard/>
        </div>
        <div className="py-20">
            <OrderTracking activeStep={3}/>
        </div>
        <Grid container>
            {[1,1,1,1,1,1].map((item)=>{
                return(
                    <Grid item container className='shadow-xl hover:shadow-2xl rounded-md cursor-pointer p-5 border' sx={{alignItems:'center',justifyContent:'space-between'}}>
                    <Grid item xs={6}>
                        <div className="flex items-center space-x-2">
                            <img className='object-cover object-top w-[5rem] h-[5rem]' src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" alt="" />
                        </div>
                        <div className="space-y-2 ">
                            <p className='font-semibold'>Tittle</p>
                            <p className='space-x-5 text-sm opacity-8 font-semibold'>
                                <span>Color: Pink</span>
                                <span>Size: M</span>
                            </p>
                            <p>Brand Name</p>
                            <p>$1500</p>
                        </div>
                    </Grid>
                    <Grid item>
                        <Box sx={{color: deepPurple[500]}}>
                            <StarOutlineIcon sx={{fontSize:'2rem'}} className='px-2 text-md'/>
                            <span>Rate & Review</span>
                        </Box>
                    </Grid>
                </Grid>
                )
            })}
           
        </Grid>
    </div>
  )
}

export default OrderDetails
