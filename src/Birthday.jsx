import React, { Component, Fragment } from 'react';
import { unmountComponentAtNode } from 'react-dom';
import 'bulma-pageloader/bulma-pageloader.min.css';
import 'swiper/dist/css/swiper.min.css';
import Swiper from 'swiper/dist/js/swiper.min';
import SwiperContainer from './components/speceial/SwiperItem';
import bgm from './bgm.mp3';

class Birthday extends Component {
  state = {
    pageLoading: true,
    words: [],
    canRemoveModal: false
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
  toggleModal = () => {
    if (this.state.canRemoveModal) {
      document.querySelector('.navbar').style.opacity = 1;
      this.mySwiper.off('scroll');
      unmountComponentAtNode(document.querySelector('#happy'));
    }
  };

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
      // 用来检测是否滑动到最后一页了. 似乎 swipper 有 bug, 所以 || 的后面一分支 hack 了这个 bug
      if (
        document.querySelector(
          '.swiper-slide.swiper-slide-active:last-child'
        ) ||
        !document.querySelector('.swiper-slide-next')
      ) {
        this.audio.pause();
        document
          .querySelector('.icon.has-text-danger')
          .classList.remove('is-active');
        this.setState({ canRemoveModal: true });
      }
      pos += 1;
    });
  }

  render() {
    const { pageLoading, words, active } = this.state;
    return (
      <Fragment>
        <div
          className={`pageloader is-danger ${pageLoading ? 'is-active' : ''}`}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <span className="title">精彩内容正在准备! 玩命加载中ヾ(=･ω･=)o </span>
        </div>

        <div className={`modal is-active`}>
          <div className="modal-background" onClick={this.toggleModal} />
          <div className="modal-content">
            <SwiperContainer words={words} active={active} />
          </div>
        </div>
        <audio src="" autoPlay loop ref={node => (this.audio = node)} />
      </Fragment>
    );
  }
}

export default Birthday;
