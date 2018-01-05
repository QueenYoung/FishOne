import React, { Component, Fragment } from 'react';
import 'bulma-pageloader/bulma-pageloader.min.css';
import 'swiper/dist/css/swiper.min.css';
import Swiper from 'swiper';
import SwiperContainer from './components/speceial/SwiperItem';

class Birthday extends Component {
  state = { 
    pageLoading: false,
    words: []
  }

  async componentDidMount() {
    setTimeout(() => {
      this.setState(({ pageLoading }) => ({ pageLoading: false }));
    }, 3000);
    const module = await import('./components/speceial/words.js');
    this.setState({
      words: module.default,
      active: Array(module.default.length).fill(false)
    });
    const mySwiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      slidesPerview: 1,
      mousewheel: true,
      // effect: 'coverflow',
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true
      },
    });

    let pos = 0;
    mySwiper.on('scroll', () => {
      this.setState(({ active }) => ({
        active: active.map((status, i) =>
          i === pos ? true : status
        )
      }))
      pos += 1;
    });
  }
  render() {
    const { pageLoading, words, active } = this.state;
    return (
      <Fragment>
        <div className={`pageloader is-danger ${pageLoading ? 'is-active' : ''}`}
          style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <span className="title">精彩内容正在准备中! </span>
        </div>
        <SwiperContainer words={words} active={active} />
      </Fragment>
    );
  }
}

export default Birthday;
