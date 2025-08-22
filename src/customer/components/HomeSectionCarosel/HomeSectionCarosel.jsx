import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectioncart from '../HomeSectionCard/HomeSectionCart'; // Make sure this path is correct

const HomeSectionCarosel = () => {

    const responsive = {
        0: { items: 1 },
        720: { items: 2 },
        1024: { items: 4 },
    };

    const items = [1,1,1,1,1].map((item, idx) => <HomeSectioncart key={idx} />);
    return (
        <div>
            <AliceCarousel 
                items={items}
                disableButtonsControls
                autoPlay
                autoPlayInterval={1000}
                infinite
                responsive={responsive}
            />
        </div>
    )
}

export default HomeSectionCarosel