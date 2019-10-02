import React from 'react';
import './App.scss';
import Header from './header/Header';
import Menu from './menu/Menu';
import Slider from './slider/Slider';
import About from './about/About';
import Video from './video/Video';
import img from './video/video-bg.jpg';

const App = () => (
  <div className="brittancy">
    <Header h="110px" />
    <Menu />
    <Slider />
    <About />
    <Video image={img} />
  </div>
);
export default App;
