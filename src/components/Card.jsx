import React from 'react'
import { Link } from 'react-router-dom';
import Tag from './Tag';
const Card = ({ pic, text, title, date, i }) => (
  <div className='card'>
    <div className="card-image">
      <Link to={pic || '#'}>
        <figure className="image">
          <img
            src={pic || "https://bulma.io/images/placeholders/1280x960.png"}
            alt="邱译莹"
          />
        </figure>
      </Link>
    </div>
    <div className="card-content">
      {title && <h3 className="title">{title}</h3>}
      <div className="content">
        <p>{text}</p>
        {date && <Tag invert={i % 2}>{date}</Tag> }
      </div>
    </div>
  </div>
)
export default Card
