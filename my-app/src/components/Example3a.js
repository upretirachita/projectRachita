import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col, Modal } from 'react-bootstrap';
import './Example3a.css';
import Image1 from '../images/Image3a.JPG';
import Image2 from '../images/Image3b.JPG';
import Image3 from '../images/Image3c.JPG';
import Image4 from '../images/Image3d.JPG';

const Example3a = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardIndex) => {
    setSelectedCard(cardIndex);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCard(null);
  };

  const cardImages = [Image1, Image2, Image3, Image4];

  return (
    <Container>
        <Row className="custom-row">
        {[1, 2, 3, 4].map((cardIndex) => (
          <Col md={3} key={cardIndex}>
            <Card className="custom-card" onClick={() => handleCardClick(cardIndex)}>
              <Card.Img variant="top" src={cardImages[cardIndex - 1]} className="custom-card-img" />
              <Card.Body>
                <Card.Title>Card {cardIndex}</Card.Title>
                <Card.Text>
                  This is the content of card {cardIndex}. You can add more details here.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body>
          <Card className="full-screen-card">
            <Card.Img variant="top" src={cardImages[selectedCard - 1]} />
            <Card.Body>
              <Card.Title>Card {selectedCard}</Card.Title>
              <Card.Text>
                This is the content of card {selectedCard}. You can add more details here.
              </Card.Text>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Example3a;
