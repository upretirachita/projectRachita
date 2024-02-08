// ThreeByThreeCard.js

import React, { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import ImageDetail from './Imagedetail';
import './Example2b.css';


import image1 from '../images/2a.JPG';
import image2 from '../images/2b.JPG';
import image3 from '../images/2c.JPG';
import image4 from '../images/2d.JPG';
import image5 from '../images/2e.JPG';
import image6 from '../images/2f.JPG';
import image7 from '../images/2g.JPG';
import image8 from '../images/2h.JPG';
import image9 from '../images/2j.JPG';

const ThreeByThreeCard = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const images = [
    { id: 1, url: image1, name: '1 Rilli', details: '1 Rilli' },
    { id: 2, url: image2, name: '2 Varhainen Hyvinkää', details: '2 Varhainen Hyvinkää' },
    { id: 3, url: image3, name: '3 Rata ja tehdas', details: '3 Rata ja tehdas' },
    { id: 4, url: image4, name: '4 Kasvava kauppala', details: '4 Kasvava kauppala' },
    { id: 5, url: image5, name: '5 Isojen tehtaiden kaupunk', details: '5 Isojen tehtaiden kaupunk' },
    { id: 6, url: image6, name: '6 Rakennemuutos', details: '6 Rakennemuutos' },
    { id: 7, url: image7, name: '7 Hyvinkää kartalla', details: '7 Hyvinkää kartalla' },
    { id: 8, url: image8, name: '8 Industrial Hyvinkää', details: '8 Industrial Hyvinkää' },
    { id: 9, url: image9, name: '9 Viimeistämö', details: '9 Viimeistämö' },
  ];

  const imageStyle = {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    cursor: 'pointer',
  };

  const handleImageClick = (index) => {
    // console.log('Clicked on image:', images[index].url);
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const handleNext = () => {
    const nextIndex = (selectedImageIndex + 1) % images.length;
    setSelectedImageIndex(nextIndex);
  };

  return (
    <div class> 
      <Card>
        <Card.Body>
          <Row>
            {images.map((image, index) => (
              <Col md={4} key={index} onClick={() => handleImageClick(index)}>
                <img src={image.url} alt={image.name} style={imageStyle} />
                <h5>{image.name}</h5>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
      {selectedImageIndex !== null && (
        <ImageDetail
          image={images[selectedImageIndex]}
          onHide={closeModal}
          onNext={handleNext}
        />
      )}
      
    </div>
  );
};

export default ThreeByThreeCard;
