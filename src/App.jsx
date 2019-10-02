import React from 'react';
import './App.scss';
import Header from './header/Header';
import Menu from './menu/Menu';
import Slider from './slider/Slider';
import About from './about/About';
import Video from './video/Video';
import img1 from './video/video-bg.jpg';
import Price from './prices/Price';
import Profile from './profile/Profile';
import img2 from './profile/images/bg.jpg';

const App = () => (
  <div className="brittancy">
    <Header h="110px" />
    <Menu />
    <Slider />
    <About />
    <Video image={img1} />
    <Price />
    <Profile image={img2} />
  </div>
);
export default App;
