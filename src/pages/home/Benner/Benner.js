import React from 'react';
import { Carousel } from 'react-bootstrap';
import benner1 from '../../../images/benner/nature.jpg';
import benner2 from '../../../images/benner/hills.jpg';
import benner3 from '../../../images/benner/bird.jpg';
import './Benner.css';

const Benner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={benner1}
                    alt="Nature Photography"
                />
                <Carousel.Caption>
                    <h2>Nature Photography</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={benner2}
                    alt="Hills Photography"
                />

                <Carousel.Caption>
                    <h2>Hills Photography</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={benner3}
                    alt="Birds Photography"
                />

                <Carousel.Caption>
                    <h2>Birds Photography</h2>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Benner;