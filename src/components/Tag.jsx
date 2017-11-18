import React from 'react';
const Tag = ({ color='is-dark', invert=false, children }) => (
  <span
    className={`tag ${color}`}
    style={{
      position: 'absolute',
      top: 0,
      [invert ? 'right' : 'left']: 0
    }}
  >{children}</span>
);

export default Tag;