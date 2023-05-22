export default function swiperCreate() {
  document
    .querySelectorAll(
      '.brands__container, .services__container, .price__container'
    )
    .forEach((elem) => elem.classList.add('swiper'))
  document
    .querySelectorAll('.brands__list, .services__list, .price__list')
    .forEach((elem) => elem.classList.add('swiper-wrapper'))

  const swiperSlide = document.querySelectorAll(
    '.brands__item, .services__item, .price__table-line'
  )
  for (let i = 0; i < swiperSlide.length; i++) {
    swiperSlide[i].classList.add('swiper-slide')
  }

  const swiperBrands = new Swiper('.swiper-brands', {
    sliderPerView: 'auto',
    spaceBetween: 16,
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination-brands',
      clickable: true
    }
  })

  const swiperServices = new Swiper('.swiper-services', {
    sliderPerView: 'auto',
    spaceBetween: 16,
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination-services',
      clickable: true
    }
  })

  const swiperPrice = new Swiper('.swiper-price', {
    sliderPerView: 'auto',
    spaceBetween: 16,
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination-price',
      clickable: true
    }
  })
}
