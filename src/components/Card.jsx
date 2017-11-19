import React from 'react'
import { Link } from 'react-router-dom'
import Tag from './Tag'
const Card = ({ pic, text, title, date, i, children, notLink, size }) => {
  const Wrapper = props =>
    notLink ? (
      <div>{props.children}</div>
    ) : (
      <Link to={pic || '#'}>{props.children}</Link>
    )
  return (
    <div className="card">
      <div className="card-image">
        <Wrapper>
          <figure className={`image ${size}`}>
            <img
              src={pic || 'https://bulma.io/images/placeholders/1280x960.png'}
              alt="邱译莹"
              style={{
                objectFit: 'cover',
                objectPosition: 'top'
              }}
            />
          </figure>
        </Wrapper>
      </div>
      <div className="card-content">
        {children || (
          <div>
            {title && <h3 className="title">{title}</h3>}
            <div className="content">
              <p>{text}</p>
              {date && <Tag invert={i % 2}>{date}</Tag>}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default Card
