import React from 'react';

const round = {
  borderRadius: '50%'
}
const Image = ({ src, size='', circle=false }) => (
  <p className={`image ${size}`}>
    <img
      src={src}
      alt="A easy"
      style={circle ? round : {}}
    />
  </p>
);

export default Image;