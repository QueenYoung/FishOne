import React from 'react';
const Level = ({ copy = [], size }) => (
  <nav className="level is-mobile">
    {
      copy.map(({ heading, title }) => (
        <div className="level-item has-text-centered">
          <div>
            <p className={`heading ${size}`}>{heading}</p>
            <p className={`title ${size}`}>{title}</p>
          </div>
        </div>
      ))
    }
  </nav>
);

export default Level;