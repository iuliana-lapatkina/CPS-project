export default function hideModal(block, overlay, closeButton) {
  closeButton.addEventListener('click', () => {
    block.classList.toggle('open')
    overlay.classList.toggle('overlay-active')
  })
}
