import React from 'react';
const TileParent = ({ vertical, size, children }) => (
  <div
    className={`tile is-parent ${vertical ? 'vertical' : ''} is-${size}`}>
    <div className="tile is-child box">
      {children}
    </div>
  </div>
)

export default TileParent;