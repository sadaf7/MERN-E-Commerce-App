import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {

  const navigate = useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container gap={3}>
          <Grid item xs={12} >
            <TextField required id='firstName' name='firstName' label='First Name' fullWidth autoComplete='given-name'/>
          </Grid>
          <Grid item xs={12} >
            <TextField required id='lastName' name='lastName' label='Last Name' fullWidth autoComplete='given-name'/>
          </Grid>
          <Grid item xs={12}>
            <TextField type='email' required id='email' name='email' label='Email' fullWidth autoComplete='email'/>
          </Grid>
          <Grid item xs={12}>
            <TextField type='password' required id='password' name='password' label='Password' fullWidth autoComplete='password'/>
          </Grid>
          <Grid item xs={12}>
            <Button className='' sx={{bgcolor:'#9155FD', color:'white'}} type='submit' variant='contained' size='large' fullWidth>SignUp</Button>
          </Grid>
        </Grid>
      </form>
      <div className='flex justify-center flex-col items-center'>
        <div className='py-3 flex items-center'>
          <p className='text-blue-950'>Do you have already an account?</p>
          <Button size='small' onClick={()=>navigate('/login') }>Login Here!</Button>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm
