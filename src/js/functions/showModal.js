export default function showModal(block, overlay, openButton) {
  openButton.addEventListener('click', () => {
    block.classList.toggle('open')
    overlay.classList.toggle('overlay-active')
  })
}
