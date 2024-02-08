import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import './Example3a4.css'

const Example3a8 = () => {
  return (
    <Container>
      <h1 className="mt-5">Welcome to  Page 9</h1>

      <Card className="mt-4">
        <Card.Body>
          <Card.Title>What is the lorem text?</Card.Title>
          <Card.Text>
          Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. It features scrambled Latin text, which emphasizes the design over content of the layout. It is the standard placeholder text of the printing and publishing industries.
          </Card.Text>
         
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Example3a8;
