// Slider.js
import React, { useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Slider.css';

import image1 from '../images/2a.JPG';
import image2 from '../images/2b.JPG';
import image3 from '../images/2c.JPG';
import image4 from '../images/2d.JPG';
import image5 from '../images/2e.JPG';
import image6 from '../images/2f.JPG';
import image7 from '../images/2g.JPG';
import image8 from '../images/2h.JPG';
import image9 from '../images/2j.JPG';

const Slider = ({ onChange }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    onChange(selectedIndex); // Trigger the onChange callback with the selected index
  };

  const slideLabels = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9th ',
  ];

  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

  const handlePrev = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
    onChange(index === 0 ? images.length - 1 : index - 1);
  };

  const handleNext = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
    onChange(index === images.length - 1 ? 0 : index + 1);
  };

  return (
    <div className="text-center">
      <div>
        <Button variant="secondary" onClick={handlePrev}>&lt; Back</Button>
        <span className="mx-2">{`${index + 1}/${images.length}`}</span>
        <Button variant="primary" onClick={handleNext}>Next &gt;</Button>
      </div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {images.map((image, idx) => (
          <Carousel.Item key={idx}>
            <img className="d-block w-100" src={image} alt={slideLabels[idx]} />
            <Carousel.Caption>
              <h3>{slideLabels[idx]}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
