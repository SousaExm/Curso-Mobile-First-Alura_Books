import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

const lancamentos = new Swiper('.lancamentos', {
  // Navigation arrows
  navigation: {
    nextEl: '.btn-lancamentos-next',
    prevEl: '.btn-lancamentos-prev'
  },

  slidesPerView: 2.5,
  spaceBetween: 10,
  centeredSlides: true,
  centeredSlidesBounds: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  },

  breakpoints: {
    720: {
      slidesPerView: 3,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  }
});

const maisVendidos = new Swiper('.mais-vendidos', {
  // Navigation arrows
  navigation: {
    nextEl: '.btn-mais-vendidos-next',
    prevEl: '.btn-mais-vendidos-prev'
  },

  slidesPerView: 2.5,
  spaceBetween: 10,
  centeredSlides: true,
  centeredSlidesBounds: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  },

  breakpoints: {
    780: {
      slidesPerView: 3,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  }
});