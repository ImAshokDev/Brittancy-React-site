import React from 'react';

const Button = ({
 name, bg, c, fs, w, h, b, u 
}) => (
  <button
    type="button"
    style={{
      backgroundColor: bg,
      color: c,
      fontSize: fs,
      width: w,
      height: h,
      border: b,
      outline: u,
    }}
  >
    {name}
  </button>
);
export default Button;
