import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item  xs={1}>
            <Box>
                <Avatar className='text-white' sx={{width:56,height:56,bgcolor:'#9155fd'}}>
                    S
                </Avatar>
            </Box>
        </Grid>

        <Grid item  xs={9}>
            <div className="space-y-2">
                <div>
                    <p className='text-lg font-semibold'>Sadaf</p>
                    <p className='opacity-80'>April 5, 2024</p>
                </div>
            </div>

            <Rating name="read-only" value={4.5} precision={.5} readOnly />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing!</p>
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductReviewCard
