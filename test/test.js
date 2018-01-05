import 'swiper/dist/css/swiper.min.css';
import Swiper from 'swiper';
import 'bulma/css/bulma.css';
import 'bulma-divider/bulma-divider.css';

document.addEventListener('DOMContentLoaded', (event) => {
  const mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerview: 1,
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true
    },
  });

  let startIndex = 0;
  const sliders = document.querySelectorAll('.swiper-slide > .card');
  mySwiper.on('scroll', () => {
    const slider = sliders[startIndex++];
    slider && slider.classList.add('active');
  });
});
