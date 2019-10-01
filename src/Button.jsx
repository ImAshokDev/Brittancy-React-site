import React from 'react';

const Button = ({
 name, fs, w, h, ff 
}) => (
  <button
    type="button"
    style={{
      fontSize: fs,
      width: w,
      height: h,
      fontFamily: ff,
    }}
  >
    <p>{name}</p>
  </button>
);
export default Button;
