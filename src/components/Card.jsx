import React, { Component } from 'react';
import PropTypes from 'prop-types';

const CardContent = ({ title, text }) => (
  <div>
    {title && <h3 className="title">{title}</h3>}
    <div className="content">
      <p>{text}</p>
    </div>
  </div>
);

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
    lazy: PropTypes.bool,
    zooming: PropTypes.object,
    footer: PropTypes.object
  };

  componentDidMount() {
    if (!this.img) return;
    const { zooming, lazy } = this.props;
    zooming && zooming.listen(this.img);

    if (lazy) {
      const { observer } = this.context;
      observer.observe(this.img);
    }
  }

  render() {
    const { pic, text, title, children, size, lazy, thumbnail } = this.props;
    return (
      <div className="card">
        {pic && <div className="card-image">
          <figure className={`image ${size}`}>
            {lazy ?
              <a href={pic}>
                <img className="placeholder"
                  ref={node => (this.img = node)}
                  src={thumbnail}
                  data-src={pic}
                  alt="邱译莹"
                  data-action="zoom"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'top'
                  }}
                />
              </a>
              : <img src={pic}
                alt="邱译莹 Profile"
                style={{ objectFit: 'cover', objectPosition: 'top' }} />
            }
          </figure>
        </div>
        }
        <div className="card-content">
          {children || <CardContent title={title} text={text} />}
        </div>
      </div>
    );
  }
}

export default Card;
