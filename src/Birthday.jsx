import React, { Component, Fragment } from 'react';
import { unmountComponentAtNode } from 'react-dom';
import 'bulma-pageloader/bulma-pageloader.min.css';
import 'swiper/dist/css/swiper.min.css';
import Swiper from 'swiper';
import SwiperContainer from './components/speceial/SwiperItem';

class Birthday extends Component {
  state = { 
    pageLoading: false,
    words: [],
    canRemoveModal: false
  }


  toggleModal = () => {
    if (this.state.canRemoveModal) {
      document.querySelector('.icon.has-text-danger').classList.remove('is-active');
      unmountComponentAtNode(document.querySelector('#happy'));
    }
  }

  async componentDidMount() {
    setTimeout(() => {
      this.setState(({ pageLoading }) => ({ pageLoading: false }));
    }, 3000);
    const [module, bgm] = await Promise.all([
      import('./components/speceial/words.js'),
      import('./Christmas.mp3')
    ]);
    this.audio.src = bgm;
    this.setState({
      words: module.default,
      active: Array(module.default.length).fill(false)
    });
    const mySwiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      slidesPerview: 1,
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        click: true
      },
    });

    let pos = 0;
    mySwiper.on('scroll', (event) => {
      this.setState(({ active }) => ({
        active: active.map((status, i) =>
          i === pos ? true : status
        )
      }));
      // 用来检测是否滑动到最后一页了. 似乎 swipper 有 bug, 所以 || 的后面一分支 hack 了这个 bug
      if (document.querySelector('.swiper-slide.swiper-slide-active:last-child') || 
          !document.querySelector('.swiper-slide-next')) {
        this.audio.pause();
        this.setState({ canRemoveModal: true });
      }
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

        <div className={`modal is-active`}>
          <div className="modal-background" onClick={this.toggleModal}></div>
          <div className="modal-content">
            <SwiperContainer
              words={words}
              active={active} />
          </div>
        </div>
        <audio src="" autoPlay loop ref={node => this.audio = node}/>
      </Fragment>
    );
  }
}

export default Birthday;
