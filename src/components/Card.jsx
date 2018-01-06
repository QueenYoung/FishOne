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
  static contextTypes = {
    observer: PropTypes.object
  };

  static propTypes = {
    pic: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    zooming: PropTypes.object
  };

  componentDidMount() {
    const { zooming } = this.props;
    const { observer } = this.context;
    if (!this.img) return;
    observer && observer.observe(this.img);
    zooming && zooming.listen(this.img);
  }

  render() {
    const {
      pic,
      text,
      title,
      children,
      size,
      thumbnail,
      isSwiper
    } = this.props;
    const coverStyle = { objectFit: 'cover', objectPosition: '20%' };
    return (
      <div className="card">
        {pic && (
          <div className="card-image">
            <figure className={`image ${size}`}>
              <img
                className={isSwiper ? 'swiper-lazy' : 'placeholder'}
                ref={node => (this.img = node)}
                src="https://bulma.io/images/placeholders/640x480.png"
                data-src={thumbnail || pic}
                data-origin={pic}
                alt="邱译莹"
                data-action="zoom"
                style={coverStyle}
              />
            </figure>
          </div>
        )}
        <div className="card-content">
          {children || <CardContent title={title} text={text} />}
        </div>
      </div>
    );
  }
}

export default Card;
