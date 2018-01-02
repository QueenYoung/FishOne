import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag';
class Card extends Component {
  static defaultProps = {
    lazy: true
  };
  static contextTypes = {
    observer: PropTypes.object
  }

  static propTypes = {
    pic: PropTypes.string.isRequired,
    title: PropTypes.string,
    text: PropTypes.string,
    i: PropTypes.number,
    lazy: PropTypes.bool,
    zooming: PropTypes.object
  };

  componentDidMount() {
    const { zooming, lazy } = this.props;
    zooming && zooming.listen(this.img);

    if (lazy) {
      const { observer } = this.context;
      observer.observe(this.img);
    }
  }

  render() {
    const { pic, text, title, date, i, children, size, lazy } = this.props;
    return (
      <div className="card">
        <div className="card-image">
          <figure className={`image ${size}`}>
            {lazy ?
              <img
                data-origin={pic}
                ref={node => (this.img = node)}
                data-src={pic}
                alt="邱译莹"
                data-action="zoom"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'top'
                }}
              />
              : <img src={pic}
                alt="邱译莹 Profile"
                style={{ objectFit: 'cover', objectPosition: 'top' }} />
            }
          </figure>
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
    );
  }
}

export default Card;
