import React from 'react';

const round = {
  borderRadius: '50%'
}
const Image = ({ src, size = '', circle = false }, { observer }) => (
  <p className={`image ${size}`}>
    <img
      data-src={src}
      alt="loading"
      style={circle ? round : {}}
    />
  </p>
);

export default Image;
