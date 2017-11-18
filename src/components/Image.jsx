import React from 'react';

const Image = ({ src, size }) => (
  <p className={`image ${size}`}>
    <img src={src} alt="A easy" className="is-rounded"/>
  </p>
);

export default Image;