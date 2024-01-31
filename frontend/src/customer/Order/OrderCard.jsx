import { Grid } from '@mui/material'
import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {

  const navigate = useNavigate();

  return (
    <div onClick={()=>navigate('/account/order/5')} className='shadow-lg hover:shadow-2xl border'>
      <Grid container spacing={3}  sx={{justifyContent:'space-between',padding:2,cursor:'pointer' }}>
        <Grid item xs={6}>
            <div className="flex items-center rounded-lg">
                <img className='object-cover object-top w-[5rem] h-[5rem]' src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" alt="" />
                <div className="ml-5 space-y-2">
                    <p>descrption</p>
                    <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                    <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                </div>
            </div>
        </Grid>

        <Grid xs={2} item>
            <p>$9000</p>
        </Grid>

        <Grid xs={4} item>
            {true &&
             <div>
                <p>
                    <FiberManualRecordIcon sx={{width:'15px', height:'15px'}} className='text-green-600 text-sm mr-2'/>
                    <span>Expected Deliver on March, 09</span>
                </p>
                <p className='text-xs ml-6'>
                     Your Item has been delivered
                </p>
                
             </div>
            }
                
            {false && <p>
                <span>Deliverd On March, 09</span>
            </p>}
        </Grid>
      </Grid>
    </div>
  )
}

export default OrderCard
