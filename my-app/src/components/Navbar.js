import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    Routes,
    BrowserRouter,
  } from "react-router-dom";
import Example1 from '../components/Example1';
import Example2 from '../components/Example2';
import Example3 from '../components/Example3';
import Home from '../components/Home';
import './Navbar.css';
  

function ColorSchemesExample() {
  return (
    <BrowserRouter>
    <>
      <Navbar >
        <Container>
          {/* <Navbar.Brand href="#home">Test</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/example1'>Example1</Nav.Link>
            <Nav.Link as={Link} to='/example2'>Example2</Nav.Link>
            <Nav.Link as={Link} to='/example3'>Example3</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
     <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/example1' element={ <Example1 /> } />
            <Route path='/example2' element={ <Example2 /> } />
            <Route path='/example3' element={ <Example3 /> } />
        </Routes>
     </div>
   
    </>
    </BrowserRouter>
  );
}

export default ColorSchemesExample;