import React from 'react'
const Card = ({ pic, words, title, date }) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img
          src={pic || "https://bulma.io/images/placeholders/1280x960.png"}
          alt="邱译莹"
        />
      </figure>
    </div>
    <div className="card-content">
      <h3 className="title">{title}</h3>

      <div className="content">
        {words}
        <time datetime="2016-1-1">{date}</time>
      </div>
    </div>
  </div>
)
export default Card
