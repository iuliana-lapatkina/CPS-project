export default function showHideElements(
  button,
  elements,
  openText,
  closeText
) {
  let currentButton = document.querySelector(button)
  currentButton.addEventListener('click', () => {
    changeVisibility(elements)
    changeButton(currentButton, openText, closeText)
  })
}

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
