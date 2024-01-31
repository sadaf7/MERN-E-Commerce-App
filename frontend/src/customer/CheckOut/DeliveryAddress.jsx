import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import AddressCard from '../AddressCard/AddressCard'

const DeliveryAddress = () => {

    const handleSubmit=(e)=>{
        e.preventDefault();
        const data = new FormData(e.currentTarget)
        const address={
            firstName:data.get('firstName'),
            lastName:data.get('lastName'),
            streetAddress:data.get('address'),
            city:data.get('city'),
            state:data.get('state'),
            phoneNumber:data.get('phoneNumber'),
            zip:data.get('zip'),
        }
        console.log('address',address)
    }
  return (
    <div>
      <Grid sx={{marginTop:3}} container spacing={4}>
        <Grid item xs={12} lg={5} className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">
            <div className="p-5 py-7 border-b cursor-pointer">
                <AddressCard/>
                <Button size='large' variant='contained' sx={{mt:2,bgcolor:'blueviolet'}}>Delivere Here</Button>
            </div>
        </Grid>
        <Grid item xs={12} md={7}>
            <Box className='border rounded-s-md shadow-md p-5'>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth id='firstName' name='firstName' label='First Name' autoComplete='given-name'/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth id='lastName' name='lastName' label='Last Name' autoComplete='given-name'/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth id='address' multiline rows={4} name='address' label='Address' autoComplete='given-name'/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth id='city' name='city' label='City' autoComplete='given-name'/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth id='state' name='state' label='State' autoComplete='given-name'/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth id='zipCode' name='zipCode' label='Zip Code' autoComplete='shipping postal-code'/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth id='phoneNumber' name='phoneNumber' label='Phone Number' autoComplete='given-name'/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button type='submit' size='large' variant='contained' sx={{mt:2,bgcolor:'blueviolet'}}>Delivere Here</Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default DeliveryAddress
