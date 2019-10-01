import React from 'react';
import './App.scss';
import Header from './header/Header';
import Menu from './menu/Menu';
import Slider from './slider/Slider';

const App = () => (
  <div className="brittancy">
    <Header h="110px" />
    <Menu />
    <Slider />
  </div>
);
export default App;
