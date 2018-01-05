import React, { Fragment } from 'react';
import Card from '../Card';
import Media from '../Media';
import './summary.css';
import zip from 'lodash/zip';

const SwiperItem = ({ text, img = '', active }) => (
  <div className={`swiper-slide ${active ? 'is-active' : ''}`}>
    <Card pic={img.pic} size="is-4by3">
      {img.pic && <Media title="鱼一" subtitle="@fishfish_7" />}
      {text && (
        <Fragment>
          <p className="title">{text.title}</p>
          <p className="subtitle">{text.subtitle}</p>
        </Fragment>
      )}
      {
        img && (
          <Fragment>
            {img.content}
            <br/>
            <time>{img.datatime}</time>
          </Fragment>
        )
      }
    </Card>
  </div>
);

const SwiperContainer = ({ words = [], active=[] }) => (
  <div className="swiper-container">
    <div className="swiper-wrapper">
      <div className="swiper-slide is-active">
       <h1 className="title">???</h1>
      </div>  
      {
        zip(words, active).map(([word, status], i) => (
          <SwiperItem key={i} {...word} active={status} />
        ))
      }
    </div>
    <div className="swiper-pagination" />
  </div>
);

export default SwiperContainer;
