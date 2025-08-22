import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCaroselData';



const MainCarosel = () => {
        
const items = MainCarouselData.map((item) => (
    <img  className="w-full h-full object-cover cursor-pointer"  role="presentation" src={item.image} alt="" />
));
return (
    <div className=" m-0 p-0 ">
    <AliceCarousel 
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        
    />
    </div>
);
}

export default MainCarosel;