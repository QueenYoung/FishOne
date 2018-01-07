import React, { Component } from 'react';
import 'bulma-pageloader/bulma-pageloader.min.css';
import 'swiper/dist/css/swiper.min.css';
import Swiper from 'swiper/dist/js/swiper.min';
import SwiperContainer from './components/speceial/SwiperItem';
import bgm from './bgm.mp3';
import Modal from './components/Modal';
import { withRouter } from 'react-router-dom';

const M = withRouter(Modal);

class Birthday extends Component {
  state = {
    pageLoading: true,
    words: []
  };

  fetchAudioStream = () => {
    fetch(bgm)
      .then(res => {
        const reader = res.body.getReader();
        return new ReadableStream({
          start(controller) {
            return (function pump() {
              return reader.read().then(({ done, value }) => {
                if (done) {
                  controller.close();
                  return;
                }

                controller.enqueue(value);
                return pump();
              });
            })();
          }
        });
      })
      .then(stream => new Response(stream))
      .then(res => res.blob())
      .then(blob => URL.createObjectURL(blob))
      .then(src => (this.audio.src = src))
      .catch(console.log);
  };

  componentWillUnmount() {
    this.mySwiper.off('scroll');
    document.querySelector('.navbar').style.transform = 'translateY(0)';
  }

  async componentDidMount() {
    this.fetchAudioStream();
    const [module] = await Promise.all([
      import('./components/speceial/words.js'),
      new Promise(resolve => setTimeout(resolve, 3000))
    ]);
    this.setState(({ pageLoading }) => ({ pageLoading: false }));
    this.setState({
      words: module.default,
      active: Array(module.default.length).fill(false)
    });
    this.mySwiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      slidesPerview: 1,
      mousewheel: true,
      lazy: true,
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        click: true
      }
    });

    let pos = 0;
    this.mySwiper.on('scroll', event => {
      this.setState(({ active }) => ({
        active: active.map((status, i) => (i === pos ? true : status))
      }));
    });
  }

  render() {
    const { pageLoading, words, active } = this.state;
    return (
      <M>
        <div
          className={`pageloader is-danger ${pageLoading ? 'is-active' : ''}`}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <span className="title">精彩内容正在准备! 玩命加载中ヾ(=･ω･=)o </span>
        </div>

        <SwiperContainer words={words} active={active} />
        <audio src="" autoPlay loop ref={node => (this.audio = node)} />
      </M>
    );
  }
}

export default Birthday;
