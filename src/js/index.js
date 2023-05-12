import '../scss/style.scss'

if (document.documentElement.clientWidth < 768) {
  document.querySelector('.brands__container').classList.add('swiper')
  document.querySelector('.brands__list').classList.add('swiper-wrapper')

  const swiperSlide = document.querySelectorAll('.brands__item')
  for (let i = 0; i < swiperSlide.length; i++) {
    swiperSlide[i].classList.add('swiper-slide')
  }

  const swiper = new Swiper('.swiper', {
    sliderPerView: 'auto',
    spaceBetween: 16,
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
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
