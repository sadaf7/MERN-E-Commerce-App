import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarousel } from './mainCarouselData';
import { useNavigate } from 'react-router-dom';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};


const MainCarousel = () => {

    const items = mainCarousel.map((item)=>{
        return(
            <img className=' cursor-pointer' role='presentation' src={item.image} alt="mainCarousel" />
        )
    })
    
    return(

        <AliceCarousel
            items={items}
            // responsive={responsive}
            disableButtonsControls
            autoPlayInterval={2000}
            autoPlay
            infinite
        />
    )
}


export default MainCarousel