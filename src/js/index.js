import '../scss/style.scss'
import swiperCreate from './functions/swiper'
import showHideElements from './functions/showHideElements'
import showModal from './functions/showModal'
import hideModal from './functions/hideModal'
import hideModalEsc from './functions/hideModalEsc'
import closeClickBlur from './functions/closeClickBlur'

if (document.documentElement.clientWidth < 768) {
  swiperCreate()
}

showHideElements(
  '.services__button',
  '.services__item',
  'Показать все',
  'Скрыть'
)

showHideElements('.brands__button', '.brands__item', 'Показать все', 'Скрыть')

showHideElements(
  '.about__button',
  '.about__text-item',
  'Читать далее',
  'Скрыть'
)

const feedback = document.querySelector('.feedback')
const feedbackContainer = document.querySelector('.feedback-container')
const feedbackOverlay = document.querySelector('.feedback-overlay')
const feedbackButtonClose = document.querySelector('.feedback__button-close')
const openMessageMenu = document.querySelector('.menu__button-message')
const openMessageHeader = document.querySelector('.header__button-message')
const menu = document.querySelector('.menu')
const menuContainer = document.querySelector('.menu-container')
const menuOverlay = document.querySelector('.menu-overlay')
const menuButtonClose = document.querySelector('.menu__button-close')
const openMenu = document.querySelector('.header__menu-button')
const call = document.querySelector('.call')
const callContainer = document.querySelector('.call-container')
const callOverlay = document.querySelector('.call-overlay')
const callButtonClose = document.querySelector('.call__button-close')
const openCallMenu = document.querySelector('.menu__button-call')
const openCallHeader = document.querySelector('.header__button-call')

showModal(menu, menuOverlay, openMenu)
showModal(feedback, feedbackOverlay, openMessageMenu)
showModal(feedback, feedbackOverlay, openMessageHeader)
showModal(call, callOverlay, openCallHeader)
showModal(call, callOverlay, openCallMenu)

hideModal(menu, menuOverlay, menuButtonClose)
hideModal(feedback, feedbackOverlay, feedbackButtonClose)
hideModal(call, callOverlay, callButtonClose)

hideModalEsc(menu, menuOverlay)
hideModalEsc(feedback, feedbackOverlay)
hideModalEsc(call, callOverlay)

closeClickBlur(menu, menuContainer, menuOverlay, openMenu, openMenu)
closeClickBlur(
  feedback,
  feedbackContainer,
  feedbackOverlay,
  openMessageMenu,
  openMessageHeader
)
closeClickBlur(call, callContainer, callOverlay, openCallMenu, openCallHeader)
