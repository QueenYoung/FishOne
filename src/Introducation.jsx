import React, { Fragment } from 'react';
import Hero from './components/Hero';
import Card from './components/Card';
import 'bulma-timeline/bulma-timeline.min.css';

import Zooming from './util/zooming.js';

const zooming = new Zooming({
  bgColor: '#000',
  bgOpacity: 0.8,
  enableGrab: false
});

const Timeline = ({ date, newYear, children }) => (
  <Fragment>
    {newYear && (
      <header className="timeline-header">
        <span className="tag is-danger is-medium">{newYear}</span>
      </header>
    )}
    <div className="timeline-item">
      <div className="timeline-marker is-warning" />
      <div className="timeline-content">
        <p className="heading">{date}</p>
        {children}
      </div>
    </div>
  </Fragment>
);

const Introducation = ({ hero, selfies = [], articles = [] }) => (
  <Fragment>
    <Hero {...hero} />
    <section className="section">
      <hr />
      <h2 className="title">Selfies</h2>
      <div className="columns">
        {selfies.map((selfies, i) => (
          <div className="column" key={i}>
            <Card {...selfies} zooming={zooming}>
            </Card>  
          </div>
        ))}
      </div>
      <hr />
      <h2 className="title">Timeline</h2>
      <section className="timeline container is-centered">
        <header className="timeline-header">
          <span className="tag is-large is-light">Start</span>
        </header>
        {articles.map(article => (
          <Timeline
            date={article.date}
            key={article.date}
            newYear={article.newYear}>
            <Card {...article} zooming={zooming} />
          </Timeline>
        ))}
        <footer className="timeline-header">
          <span className="tag is-large is-light">End</span>
        </footer>
      </section>
    </section>
  </Fragment>
);

export default Introducation;
