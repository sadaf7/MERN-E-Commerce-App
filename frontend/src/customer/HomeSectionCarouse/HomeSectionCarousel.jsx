import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';



const HomeSectionCarousel = ({data,sectionName}) => {

    const [activeIndex,setActiveIndex] = useState(0);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    // const slidePrev=()=>{
    //   setActiveIndex(activeIndex - 1)
    // }
    // const slideNext=()=>setActiveIndex(activeIndex + 1)
    
    // const syncActiveIndex=({item})=>syncActiveIndex(item)

    const items = data.slice(0,12).map((item)=>{
        return(
            <HomeSectionCard product={item}/>
        )
    })


  return (
    <div className='px-8 lg:px-8 relative'>
      <h2 className=' font-semibold mb-1 text-gray-800'>{sectionName}</h2>
      <div className='relative p-5 border '>
      <AliceCarousel
        // mouseTracking
        items={items}
        responsive={responsive}
        // controlsStrategy="alternate"
        // disableButtonsControls
        disableDotsControls
        // onSlideChanged={syncActiveIndex}
        // activeIndex={activeIndex}
        // infinite
    />
       <Button className='' variant='contained' sx={{position:'absolute', bgcolor:'white', top:'8rem', right:'0rem', transform:' translateX(50%) rotate(90deg)'}}>
        <KeyboardArrowLeftIcon sx={{transform:'rotate(90deg)', color:'black'}}/>
      </Button>
      <Button  className='' sx={{position:'absolute', top:'8rem', bgcolor:'white', left:'0rem', transform:' translateX(-50%) rotate(90deg)'}} variant='contained'>
        <KeyboardArrowRightIcon sx={{transform:'rotate(90deg)', color:'black'}}/>
      </Button>
      </div>
    </div>
  )
}

export default HomeSectionCarousel
