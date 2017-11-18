import React from 'react';
import Hero from './components/Hero'
import Card from './components/Card'
const Introducation = ({ hero, selfies = [], articles = [] }) => (
  <div>
    <Hero {...hero}/>
    <hr/>
    <section className="section">
      <div className="columns">
        {
          selfies.map((selfies, i) => (
            <div className="column" key={i}
              style={{margin: '0 .75em'}}
            >
              <Card {...selfies} />
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
              <Card { ...article } i={i}/>
              </div>
            </div>
          ))
        }
      </section>
    </section>
  </div>
);

export default Introducation;