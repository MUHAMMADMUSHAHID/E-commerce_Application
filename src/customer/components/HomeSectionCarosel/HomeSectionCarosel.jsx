import React, { useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectioncart from '../HomeSectionCard/HomeSectionCart';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const HomeSectionCarosel = () => {
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 2 },
    1024: { items: 5 },
  };

  const items = [1, 1, 1, 1, 1,1,1,1,1,1,1,1,1].map((item, idx) => <HomeSectioncart key={idx} />);

  return (
    <div className="relative px-4 lg:px-8 ">
      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          disableButtonsControls
          disableDotsControls
          infinite
          responsive={responsive}
        />

        {/* Left Button */}
        <button
          onClick={() => carouselRef.current.slidePrev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-50"
        >
          <KeyboardArrowLeftIcon />
        </button>

        {/* Right Button */}
        <button
          onClick={() => carouselRef.current.slideNext()}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-50"
        >
          <KeyboardArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
