export default function hideModalEsc(modal, overlay) {
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      modal.classList.remove('open')
      overlay.classList.remove('overlay-active')
    }
  })
}
