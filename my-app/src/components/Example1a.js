import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faSave } from '@fortawesome/free-solid-svg-icons';
import image1 from '../images/one.JPG';
import image2 from '../images/two.JPG';
import image3 from '../images/three.JPG';

const Example1a = () => {
  const backgroundImages = [image1, image2, image3];
  const [backgroundImage, setBackgroundImage] = useState(backgroundImages[0]);
  const [colImage, setColImage] = useState(image1);
  const [showButtons, setShowButtons] = useState(false);

  const handleImageClick = () => {
    const currentIndex = backgroundImages.indexOf(backgroundImage);
    const nextIndex = (currentIndex + 1) % backgroundImages.length;
    setBackgroundImage(backgroundImages[nextIndex]);

    const colIndex = (currentIndex + 2) % backgroundImages.length;
    setColImage(backgroundImages[colIndex]);
  };

  const handleDownloadClick = () => {
    const link = document.createElement('a');
    link.href = backgroundImage;
    link.download = 'background_image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSaveClick = () => {
    // This is a simplified example, saving to local storage
    localStorage.setItem('savedImage', backgroundImage);
    alert('Image saved!');
  };

  const handleMouseEnter = () => {
    setShowButtons(true);
  };

  const handleMouseLeave = () => {
    setShowButtons(false);
  };

  return (
    <Container
      fluid
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', position: 'relative', paddingTop: 0 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Row className="d-flex justify-content-start align-items-center" style={{ height: '30%', paddingLeft: '15px' }}>
        <Col xs={12} md={3} className="text-left" style={{ border: '7px solid white', padding: '40px', borderRadius: '10px', marginTop: '10%', backgroundColor: 'white' }}>
          {/* Visible on all screen sizes (xs) and hidden on medium and larger screens (md) */}
          <img src={colImage} alt="Inner Image" style={{ width: '100%', marginTop: '10px', cursor: 'pointer' }} onClick={handleImageClick} />
          <h1>History</h1>
          <p style={{ paddingTop: 0 }}>This is your component content your component content aligned to the left This is your component content alignes your component content aligned to the left.</p>
        </Col>
      </Row>

      {showButtons && (
        <>
          {/* Download button in the lower right */}
          <button onClick={handleDownloadClick} style={{ position: 'absolute', bottom: '10px', right: '10px', zIndex: 999, background: 'none', border: 'none', cursor: 'pointer' }}>
            <FontAwesomeIcon icon={faDownload} style={{ fontSize: '24px', color: 'white' }} />
          </button>

          {/* Save button in the lower right */}
          <button onClick={handleSaveClick} style={{ position: 'absolute', bottom: '10px', right: '50px', zIndex: 999, background: 'none', border: 'none', cursor: 'pointer' }}>
            <FontAwesomeIcon icon={faSave} style={{ fontSize: '24px', color: 'white' }} />
          </button>
        </>
      )}
    </Container>
  );
};

export default Example1a;
