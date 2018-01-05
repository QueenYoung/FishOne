import React from 'react'
const Hero = props => (
  <section className="hero is-bold" style={
    { backgroundColor: '#daf4fa' }
  }>
    <div className="hero-body">
      <h1 className="title">{props.title}</h1>
      <h2 className="subtitle">{props.subtitle}</h2>
      <hr className="is-paddingless" />
      <p className="has-text-grey">{props.small}</p>
    </div>
  </section>
)

export default Hero
