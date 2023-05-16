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

function openCloseModal(block) {
  block.classList.toggle('open')
  overlay.classList.toggle('overlay-active')
}

const menu = document.querySelector('.menu')
const menuContainer = document.querySelector('.menu-container')
const overlay = document.querySelector('.overlay')
const menuButtonOpen = document.querySelector('.header__menu-button')
const menuButtonClose = document.querySelector('.menu__button-close')
menuButtonOpen.addEventListener('click', () => {
  openCloseModal(menu)
})
menuButtonClose.addEventListener('click', () => {
  openCloseModal(menu)
})
// window.addEventListener('click', function (e) {
//   if (menu.classList.contains('open') && !menuContainer.contains(e.target)) {
//     // menu.classList.remove('open')
//     menu.style.display = 'none'
//   }
// })
// document.addEventListener('click', outsideEvtListener)
// function outsideEvtListener(evt) {
//   if (evt.target === menuContainer || menuContainer.contains(evt.target)) {
//     return
//   }
//   menu.classList.add('open')
// }

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    menu.classList.toggle('open')
    overlay.classList.toggle('overlay-active')
  }
})

document.addEventListener('click', function (e) {
  if (
    menu.classList.contains('open') &&
    !menuContainer.contains(e.target) &&
    !menuButtonOpen.contains(e.target)
  ) {
    menu.classList.toggle('open')
    overlay.classList.toggle('overlay-active')
  }
})
