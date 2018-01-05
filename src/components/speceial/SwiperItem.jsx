import React, { Fragment } from 'react';
import Card from '../Card';
import Media from '../Media';
import WatchFace from './WatchFace';
import './summary.css';
import zip from 'lodash/zip';

const SwiperItem = ({ text, img = '', active }) => (
  <div className={`swiper-slide ${active ? 'is-active' : ''}`}>
    <Card pic={img.pic} size="is-4by3">
      {img.pic && <Media title="鱼一" subtitle="@fishfish_7" />}
      {text && (
        <Fragment>
          <p className="title">{`“${text.title}”`}</p>
          <p className="subtitle">{text.subtitle}</p>
        </Fragment>
      )}
      {
        img && (
          <Fragment>
            {img.content}
            <br/>
            <time><small className="has-text-grey-light">{img.datetime}</small></time>
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
       <h1 className="title">小邱同学年度总结</h1>
       <WatchFace />
      </div>  
      {
        zip(words, active).map(([word, status], i) => (
          <SwiperItem key={i} {...word} active={status} />
        ))
      }
    </div>
    <div className="swiper-pagination" />
      <div className="icon has-text-danger is-active" onClick={() => console.log(1)}>
        <span role="img" aria-label="music">🎶</span>
      </div>
  </div>
);

export default SwiperContainer;
