import React from 'react';
import Hero from './components/Hero'
import Card from './components/Card'

import Zooming from './util/zooming.js';

const zooming = new Zooming({
  bgColor: '#000',
  bgOpacity: 0.8,
  enableGrab: false,
});

const Introducation = ({ hero, selfies = [], articles = [] }) => (
  <div>
    <Hero {...hero}/>
    <section className="section">
      <hr/>
      <h2 className="title">Selfies</h2>
      <div className="columns">
        {
          selfies.map((selfies, i) => (
            <div className="column" key={i}>
              <Card {...selfies} lazy zooming={zooming}/>
            </div>
          ))
        }
      </div>
      <hr/>
      <h2 className="title">Timeline</h2>
      <section className="timeline container">
        {
          articles.map((article, i) => (
            <div className="timeline-item" key={article.date}>
              <div className="timeline-img"/>
              <div className="timeline-content">
                <Card { ...article } i={i} lazy zooming={zooming} />
              </div>
            </div>
          ))
        }
      </section>
    </section>
  </div>
);

export default Introducation;
