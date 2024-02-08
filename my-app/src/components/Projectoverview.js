import React from 'react';
import { Container, Table } from 'react-bootstrap';

const ProjectOverview = () => {
  return (
    <Container className="mt-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Topic</th>
            <th>Feature 1</th>
            <th>Feature 2</th>
            <th>Feature 3</th>
            <th>Feature 4</th>
            <th>Feature 5</th>
            <th>Feature 6</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Example 1</td>
            <td>Card pic when clicked background pic is changed</td>
            <td>Background Image can be downloaded</td>
            <td>Background Image can be saved</td>
            <td></td>
            <td></td>
            <td></td>
            
          </tr>
          <tr>
            <td>Example 2</td>
            <td>There is two divison in the page one is text and next is gallery </td>
            <td>Gallery any of the pic when pressed is zoomed</td>
            <td>We can move next,close the pic and toggle to small screen</td>
            <td>We can toggle to big screen,view next picture ,close the picture </td>
            <td>Toggle full screen can independent handle close,next and back to main page </td>
            <td>Toggle small screen can independent handle close,next and back to main page</td>
           
          </tr>
          <tr>
            <td>Example 3</td>
            <td>Added slider images</td>
            <td>When slided to next pic every pages has its one content</td>
            <td>When we are in page one slide when we press the background image background image is zoomed when we press the content the sontent pic is zoomed. Each pic when zoomed the other pic is disable</td>
            <td>slide 2 there is card which each pic can be zoomed also the same componet has been reused in slide 8 </td>
            <td>Slide 3 has some text which have been reused in slide 6,7,9 (also css has been reused) </td>
            <td>Slide 4 when zoomed out independent image is zoomed and when zoomed in default page</td>
          
          </tr>
          
        </tbody>
      </Table>
      <h3>Tools and languages used:</h3>
      <a>React </a><br/>
      <a>Bootstrap </a><br/>
      <a>CSS</a><br/><br/>
    </Container>
  );
};

export default ProjectOverview;
