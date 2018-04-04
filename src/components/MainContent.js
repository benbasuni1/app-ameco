import React from 'react';
import { Carousel } from 'react-bootstrap';
import pic1 from '../img/pic1.jpg';
import pic2 from '../img/pic2.jpg';
import pic3 from '../img/pic3.jpg';

const MainContent = () => (
    <Carousel>
        <Carousel.Item>
            <img src={pic1} alt="pic1" />
            <Carousel.Caption>
                <h1>First slide label</h1>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item >
        <Carousel.Item>
            <img src={pic2} alt="pic2" />
            <Carousel.Caption>
                <h2>First slide label</h2>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src={pic3} alt="pic3" />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
    </Carousel>

);

export default MainContent;


