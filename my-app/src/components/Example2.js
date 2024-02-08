import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Example2a from './Example2a';
import Example2b from './Example2b';

const Example2 = () => {
  return (
    <Container fluid>
    {/* First Part */}
    <Row>
      <Col md={3}>
        {/* Content for the first part */}
        
        <Example2a />
      </Col>

      {/* Second Part */}
      <Col md={9}>
      <Example2b />
      </Col>
    </Row>
  </Container>
  )
}

export default Example2
