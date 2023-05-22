export default function closeClickBlur(
  block,
  container,
  overlay,
  buttonOpen1,
  ButtonOpen2
) {
  document.addEventListener('click', function (e) {
    if (
      block.classList.contains('open') &&
      !container.contains(e.target) &&
      !buttonOpen1.contains(e.target) &&
      !ButtonOpen2.contains(e.target)
    ) {
      block.classList.remove('open')
      overlay.classList.remove('overlay-active')
    }
  })
}
