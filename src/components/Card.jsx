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
    pic: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    zooming: PropTypes.object,
    footer: PropTypes.object
  };

  componentDidMount() {
    const { zooming } = this.props;
    if (!this.img || !zooming) return;
    zooming.listen(this.img);
  }

  render() {
    const { pic, text, title, children, size, thumbnail, zooming } = this.props;
    const lazy = !!zooming;
    const coverStyle = { objectFit: 'cover', objectPosition: 'top' };
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
                  style={coverStyle}
                />
              </a>
              : <img src={pic}
                alt="邱译莹 Profile"
                style={coverStyle} />
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
