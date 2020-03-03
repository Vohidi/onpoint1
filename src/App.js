import React from 'react';
import './App.css';

import Slide1 from '../src/components/slide1';
import Slide2 from '../src/components/slide2';
import Slideshow from '../src/components/slidelast';
import imgs from '../src/img/pagination.png'

function App() {
  return (
    <div className="Slider">
      <div className="sidebar">
        <a href="#1"><img className="img11" src={imgs} alt="img1" /> </a>
        <a href="#2"><img className="img11" src={imgs} alt="img1" /> </a>
        <a href="#3"><img className="img11" src={imgs} alt="img1" /> </a>
      </div>
      <div id="1">  <Slide1 /> </div>
      <div id="2">  <Slide2 /> </div>
      <div id="3"><Slideshow /> </div>


      
    </div>
  );
}

export default App;
