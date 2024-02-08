import React, { useState } from 'react';
import { FaSearchPlus, FaSearchMinus } from 'react-icons/fa';
import { Col, Container, Row, Card } from 'react-bootstrap';
import backGroundImage from '../images/2d.JPG';
import cardImage from '../images/one.JPG';

const Example3a3 = () => {
  const [isBackgroundZoomed, setIsBackgroundZoomed] = useState(true);
  const [isCardZoomed, setIsCardZoomed] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [isZoomButtonVisible, setIsZoomButtonVisible] = useState(false);
  const [zoomButtonPosition, setZoomButtonPosition] = useState({ x: '50%', y: '50%' });

  const handleBackgroundZoomToggle = () => {
    setIsBackgroundZoomed((prevZoomed) => !prevZoomed);
    setIsContentVisible(!isContentVisible);
    setIsCardZoomed(false);
    setIsZoomButtonVisible(false);
  };

  const handleCardClick = (event) => {
    event.stopPropagation(); 
    setIsCardZoomed(!isCardZoomed);
    setIsZoomButtonVisible(false);
  };

  const handleMouseMove = (event) => {
    if (isZoomButtonVisible) {
      setZoomButtonPosition({
        x: event.clientX - 16,
        y: event.clientY - 16,
      });
    }
  };

  const handleMouseEnter = () => {
    setIsZoomButtonVisible(true);
  };

  const handleMouseLeave = () => {
    setIsZoomButtonVisible(false);
  };

  const zoomButtonStyle = {
    backgroundColor: 'none',
    border: 'none',
    cursor: 'pointer',
    zIndex: 2,
    position: 'absolute',
    top: zoomButtonPosition.y,
    left: zoomButtonPosition.x,
    transform: 'translate(-50%, -50%)',
    display: isZoomButtonVisible ? 'block' : 'none',
  };

  return (
    <Container
      fluid
      style={{
        backgroundImage: isCardZoomed ? 'none' : (isBackgroundZoomed ? `url(${backGroundImage})` : 'show'),
        backgroundSize: isBackgroundZoomed ? '100%' : '50%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        position: 'relative',
        transition: 'background-size 0.8s ease',
        overflow: 'hidden',
        border: isBackgroundZoomed ? 'none' : '10px solid red',
      }}
      onClick={handleBackgroundZoomToggle}
    >
      
      <Row style={{paddingTop:'3%'}}>
        <Col md ={1}></Col>
        <Col md={4}>
          <div
            style={{ visibility: isContentVisible ? 'visible' : 'hidden' }}
            onClick={handleCardClick}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Card style={{ transform: isCardZoomed ? 'scale(1)' : 'scale(1)' }}>
              <Card.Img variant="top" src={cardImage} alt="Card Image" style={{ width: '100%' }} />
              <Card.Body>
                <Card.Title>Card Title One</Card.Title>
                <Card.Text>This is a sample card in the container. Click on the card to zoom in.</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
      <br/>
      <br/>

      <button onClick={handleBackgroundZoomToggle} style={zoomButtonStyle}>
        {isBackgroundZoomed ? <FaSearchPlus size={24} /> : <FaSearchMinus size={24} />}
      </button>
    </Container>
  );
};

export default Example3a3;