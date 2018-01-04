import 'swiper/dist/css/swiper.min.css';
import Swiper from 'swiper';
import 'bulma/css/bulma.css';

document.addEventListener('DOMContentLoaded', (event) => {
  const mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerview: 1,
    mousewheel: true,
    effect: 'coverflow',
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true
    },
  });

  let startIndex = 0;
  const sliders = document.querySelectorAll('.swiper-slide > .box');
  mySwiper.on('scroll', () => {
    const slider = sliders[startIndex++];
    slider && slider.classList.add('active');
  });
});
