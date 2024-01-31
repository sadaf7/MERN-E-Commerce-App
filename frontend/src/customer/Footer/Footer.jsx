import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <Grid container className='bg-black text-white text-center mt-10' sx={{ bgcolor:'black', color:'white', py:3}}>
        <Grid item xs={12} sm={6} md={4}>
            <Typography className='pb-5' variant='h6'>Company</Typography>
            <div>
                <Button variant='h6' className='pb-5' gutterBottom >About</Button>
            </div>
            <div>
                <Button variant='h6' className='pb-5' gutterBottom >About</Button>
            </div>
            <div>
                <Button variant='h6' className='pb-5' gutterBottom >About</Button>
            </div>
            <div>
                <Button variant='h6' className='pb-5' gutterBottom >About</Button>
            </div>
            <div>
                <Button variant='h6' className='pb-5' gutterBottom >About</Button>
            </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <Typography className='pb-5' variant='h6'>Company</Typography>
            <div>
                <Button variant='h6' className='pb-5' gutterBottom >About</Button>
            </div>
            <div>
                <Button variant='h6' className='pb-5' gutterBottom >About</Button>
            </div>
            <div>
                <Button variant='h6' className='pb-5' gutterBottom >About</Button>
            </div>
            <div>
                <Button variant='h6' className='pb-5' gutterBottom >About</Button>
            </div>
            <div>
                <Button variant='h6' className='pb-5' gutterBottom >About</Button>
            </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <Typography className='pb-5' variant='h6'>Company</Typography>
            <div>
                <Button variant='h6' className='pb-5' gutterBottom >About</Button>
            </div>
            <div>
                <Button variant='h6' className='pb-5' gutterBottom >About</Button>
            </div>
            <div>
                <Button variant='h6' className='pb-5' gutterBottom >About</Button>
            </div>
            <div>
                <Button variant='h6' className='pb-5' gutterBottom >About</Button>
            </div>
            <div>
                <Button variant='h6' className='pb-5' gutterBottom >About</Button>
            </div>
        </Grid>
        <Grid mt={2} item xs={12}>
            <Typography>All rights reserved</Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
