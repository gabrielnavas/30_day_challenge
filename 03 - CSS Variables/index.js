function handleUpdate() {
  const elementsArray = getInputElements()
  elementsArray.forEach(element => element.addEventListener('change', setStyleTwoDotRoot))
  elementsArray.forEach(element => element.addEventListener('mousemove', setStyleTwoDotRoot))
}

function setStyleTwoDotRoot(name, value, sizing = '') {
  const keyStr = `--${this.name}`
  const valueStr = `${this.value}${this.dataset.sizing || ''}`
  document.documentElement.style.setProperty(keyStr, valueStr)
}

function getInputElements() {
  const elementsNode = document.querySelectorAll('.controls input')
  elementsArray = Array.from(elementsNode)
  return elementsArray
}


handleUpdate()