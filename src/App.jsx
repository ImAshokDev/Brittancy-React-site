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
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import Picks from './picks/Picks';

const App = () => (
  <div className="brittancy">
    <Header h="110px" />
    <Menu list={['about me', 'services', 'gallery', 'contacts', 'pages']} />
    <Slider />
    <About />
    <Video image={img1} />
    <Price />
    <Picks />
    <Profile image={img2} />
    <Contact />
    <Footer />
  </div>
);
export default App;
