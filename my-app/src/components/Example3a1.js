import React, { useState } from 'react';
import { FaSearchPlus, FaSearchMinus } from 'react-icons/fa';
import { Col, Container, Row } from 'react-bootstrap';
import mainPic from '../images/3a1.JPG';
import subPic from '../images/3a1a.JPG';

const Example3a1 = () => {
  const [isMainPicZoomed, setIsMainPicZoomed] = useState(false);
  const [isSubPicZoomed, setIsSubPicZoomed] = useState(false);


  const handleMainPicZoomToggle = () => {
    setIsMainPicZoomed((prevZoomed) => !prevZoomed);
    setIsSubPicZoomed(false);
  
  };

  const handleSubPicZoomToggle = () => {
    setIsSubPicZoomed((prevZoomed) => !prevZoomed);
   
  };



  const zoomButtonStyle = {
    backgroundColor: 'none',
    border: 'none',
    cursor: 'pointer',
    zIndex: 2,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };


 

  return (
    <Container fluid >
      <Row>
        {/* Empty column for md-4 */}
        <Col md={2}></Col>

        {/* Container with background image covering full screen starting from md-5 */}
        <Col md={3}>
          {!isSubPicZoomed && (
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <img
                src={isMainPicZoomed ? subPic : mainPic}
                alt="Main Pic Zoomed"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <button onClick={handleMainPicZoomToggle} style={zoomButtonStyle}>
                {isMainPicZoomed ? <FaSearchMinus size={24} /> : <FaSearchPlus size={24} />}
              </button>
            </div>
          )}
        </Col>

        {/* Subpic container starting from md-5 */}
        {isSubPicZoomed && (
          <Col md={4}>
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <img
                src={subPic}
                alt="Sub Pic Zoomed"
                style={{ width: '50%', height: 'auto', display: isSubPicZoomed ? 'block' : 'none' }}
              />
              <button onClick={handleSubPicZoomToggle} style={zoomButtonStyle}>
                {isSubPicZoomed ? <FaSearchMinus size={24} /> : <FaSearchPlus size={24} />}
              </button>
            </div>
          </Col>
        )}
      </Row>

    </Container>
  );
};

export default Example3a1;
