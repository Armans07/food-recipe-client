import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../../assets/12005101_477.jpg'
import banner2 from '../../../../assets/9217031_4122940.jpg'
import banner3 from '../../../../assets/13003801_food-facebook-cover-09.jpg'

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
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;