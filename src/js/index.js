import '../scss/style.scss'

if (document.documentElement.clientWidth < 768) {
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

const brandsButton = document.querySelector('.brands__button')
brandsButton.addEventListener('click', () => {
  changeVisibility('.brands__item')
  changeButton(brandsButton, 'Показать все', 'Скрыть')
})

const aboutButton = document.querySelector('.about__button')
aboutButton.addEventListener('click', () => {
  changeVisibility('.about__text-item')
  changeButton(aboutButton, 'Читать далее', 'Скрыть')
})

const servicesButton = document.querySelector('.services__button')
servicesButton.addEventListener('click', () => {
  changeVisibility('.services__item')
  changeButton(servicesButton, 'Показать все', 'Скрыть')
})

function changeButton(button, openText, closeText) {
  button.classList.toggle('button-show')
  if (button.classList.contains('button-show')) {
    button.textContent = openText
    return
  } else {
    button.textContent = closeText
  }
}

function changeVisibility(block) {
  let changeBlock = document.querySelectorAll(block)
  for (let i = 0; i < changeBlock.length; i++) {
    changeBlock[i].classList.toggle('open')
  }
}
