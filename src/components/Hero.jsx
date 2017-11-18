import React from 'react'
const Hero = props => (
  <section className="hero is-bold is-medium" style={
    { backgroundColor: '#daf4fa' }
  }>
    <div className="hero-body">
      <div className="container">
        <h1 className="title">{props.title}</h1>
        <h2 className="subtitle">{props.subtitle}</h2>
        <hr className="is-paddingless" />
        <p className="has-text-grey">{props.small}</p>
      </div>
    </div>
  </section>
)

export default Hero
