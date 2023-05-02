import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../../assets/banner-1.jpg'
import banner2 from '../../../../assets/banner-2.jpg'
import banner3 from '../../../../assets/banner-3.jpg'

const Banner = () => {
  return (
    <div className='mt-2'>
      <Carousel variant="dark rounded">
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src={banner3}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;