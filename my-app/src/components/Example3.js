// Example3.js
import React, { useState } from 'react';
import './Example3.css';
import Slider from './Slider';
import Example3a from './Example3a';
import Example3a1 from './Example3a1';
import Example3a2 from './Example3a2';
import Example3a3 from './Example3a3';
import Example3a4 from './Example3a4';
import Example3a5 from './Example3a5';
import Example3a6 from './Example3a6';
import Example3a8 from './Example3a8';

const Example3 = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSlideChange = (selectedIndex) => {
    setActiveSlideIndex(selectedIndex);
  };

  return (
    <div className="example3-container">
      <Slider onChange={handleSlideChange} />
      {activeSlideIndex === 0 && <Example3a3 activeSlideIndex={activeSlideIndex} />}
      {activeSlideIndex === 1 && <Example3a />}
      {activeSlideIndex === 2 && <Example3a2 />}
      {activeSlideIndex === 3 && <Example3a1 />}
      {activeSlideIndex === 4 && <Example3a4 />}
      {activeSlideIndex === 5 && <Example3a5 />}
      {activeSlideIndex === 6 && <Example3a6 />}
      {activeSlideIndex === 7 && <Example3a />}
      {activeSlideIndex === 8 && <Example3a8 />}
    </div>
  );
};

export default Example3;
