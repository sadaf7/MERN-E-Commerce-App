import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm = ({open,handleClose}) => {

  const navigate = useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container gap={3}>
          <Grid item xs={12}>
            <TextField type='email' required id='email' name='email' label='Email' fullWidth autoComplete='email'/>
          </Grid>
          <Grid item xs={12}>
            <TextField type='password' required id='password' name='password' label='Password' fullWidth autoComplete='password'/>
          </Grid>
          <Grid item xs={12}>
            <Button className='' sx={{bgcolor:'#9155FD', color:'white'}} type='submit' variant='contained' size='large' fullWidth>Login</Button>
          </Grid>
        </Grid>
      </form>
      <div className='flex justify-center flex-col items-center'>
        <div className='py-3 flex items-center'>
          <p className='text-blue-950'>Don't you have an account?</p>
          <Button size='small' onClick={()=>navigate('/register') }>Register</Button>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
