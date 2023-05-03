import React from 'react';
import banner1 from '../../../assets/banner-1.jpg'
import banner2 from '../../../assets/banner-1.jpg'
import banner3 from '../../../assets/banner-3.jpg'
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
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