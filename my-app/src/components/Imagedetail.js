// ImageDetail.js
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Imagedetail.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const ImageDetail = ({ image, onHide, onNext }) => {
  const [isFullScreen, setIsFullScreen] = useState(true);

  const handleToggleScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <Modal show={true} onHide={onHide} centered dialogClassName={isFullScreen ? 'modal-fullscreen' : 'modal-small'}>
      <Modal.Header closeButton>
        <Modal.Title>{image.details}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="image-container" onClick={handleToggleScreen}>
          <img src={image.url} alt={image.name} className="img-fluid" />
        </div>
        <div>
          <h5>{image.name}</h5>
          <p>{image.details}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" size={isFullScreen ? 'sm' : 'lg'} onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" size={isFullScreen ? 'sm' : 'lg'} onClick={handleNext}>
          Next
        </Button>
        <Button variant="info" size={isFullScreen ? 'sm' : 'lg'} onClick={handleToggleScreen}>
          Toggle {isFullScreen ? 'Small' : 'Full'} Screen
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ImageDetail;
