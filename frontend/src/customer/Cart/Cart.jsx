import React from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

    const navigate = useNavigate();

    const handleCheckout=()=>{
        navigate('/checkout?step=2')
    }

  return (
    <div>
        <div className='lg:grid grid-cols-3 lg:px-16 relative mt-3'>
        <div className="col-span-2">
           {[1,1,1,1,1].map((item)=>{
            return(
                <CartItem key={`cart-item${Math.random()*10}`}/>
            )
           })} 
        </div>
        <div className="px-5 sticky top-0 h-[100vh] lg:mt-0">
            <div className="border">
                <p className='uppercase font-bold opacity-70 pb-4'>Price Details</p>
                <hr/>
                <div className="font-semibold space-y-3 px-2">
                    <div className="flex justify-between pt-3 text-black">
                        <span>Price</span>
                        <span>$2000</span>
                    </div>
                    <div className="flex justify-between pt-3 ">
                        <span>Discount</span>
                        <span className='text-green-500'>$-500</span>
                    </div>
                    <div className="flex justify-between pt-3 ">
                        <span>Deliver Charges</span>
                        <span className='text-green-500'>Free</span>
                    </div>
                    <hr />
                    <div className="flex justify-between pt-3 text-black font-bold">
                        <span>Total Amount</span>
                        <span>$1500</span>
                    </div>
                </div>
                <div className="mt-4 px-2">
                    <Button onClick={handleCheckout} variant='contained' fullWidth sx={{px:'2rem', py:'0.7rem', bgcolor:"#9155fd"}}>
                        Check Out
                    </Button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Cart
