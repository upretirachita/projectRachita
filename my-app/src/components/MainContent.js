import React from 'react';
import TableOfContents from './TableOfContents';
import './MainContent.css'
import MainContenta from './MainContenta';
import TimeFrame from './TimeFrame';
import ProjectOverview from './Projectoverview';


const MainContent = () => {
  const sections = [
    { id: 'section1', title: 'Presentation' },
    { id: 'section2', title: 'Project Example ' },
    { id: 'section3', title: 'TimeFrame' },
  ];

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="main-content">
            <TableOfContents sections={sections} />
            <div className="content">
              {/*  content sections goes here */}
              <section id="section1">
                <h2>Presentation</h2>
                <MainContenta/>
              </section>

              <section id="section2">
                <h2>Project Example</h2>
                <ProjectOverview />
              </section>

              <section id="section3">
                <h2>Time Frame</h2>
                <TimeFrame />
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;