import React from 'react';
import './Header.scss';
import Button from '../Button';

const Header = ({ bg, h }) => (
  <div className="header" style={{ background: bg, height: h }}>
    <Logo num=" 1-800-1234-567 " c="orange" />
    <Title text="brittancy pierce" />
    <Btn bg="yellow" />
  </div>
);

const Logo = ({ num, c }) => (
  <div className="logo">
    <p>
      <i style={{ color: c }} className="fas fa-phone-volume" />
      {num}
    </p>
  </div>
);
const Title = ({ text }) => (
  <div className="title">
    <h1>{text}</h1>
  </div>
);
const Btn = ({ bg }) => (
  <div className="btn" style={{ background: bg }}>
    <Button
      name="book now"
      bg="orange"
      c="white"
      fs="14px"
      w="100px"
      h="40px"
      b="none"
      u="none"
    />
  </div>
);
export default Header;
