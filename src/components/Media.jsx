import React from 'react';
import Image from './Image';
import src from '../img/logo.jpg';
import 'bulma-divider/bulma-divider.min.css';
const Media = ({ title, subtitle, children }) => (
  <div className="media">
    <div className="media-left">
      <Image size="is-64x64" src={src} />
    </div>

    <div className="media-content">
      <p className="title">{title}</p>
      <p className="subtitle">{subtitle}</p>
      {children}
    </div>
  </div>
);

export default Media;
