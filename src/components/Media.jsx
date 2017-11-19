import React from 'react';
import Image from './Image'
const Media = ({ src, title, subtitle }) => (
  <div className="media">
    <div className="media-left">
      <Image size='is-48x48' src={src}/>
    </div>
    <div className="media-content">
      <p className="title is-4">{title}</p>
      <p className="subtitle is-6">{subtitle}</p>
    </div>
  </div>
);

export default Media;