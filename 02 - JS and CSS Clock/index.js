function setDate() {
  const date = new Date()
  const secondsPointer = document.querySelector('.second-hand')
  const minutesPointer = document.querySelector('.min-hand')
  const hoursPointer = document.querySelector('.hour-hand')
  const seconds = date.getSeconds()
  const minutes = date.getMinutes()
  const hours = date.getHours()
  const initSettingDegCSS = 90
  setSeconds(seconds, secondsPointer, initSettingDegCSS)
  setMinutes(minutes, minutesPointer, initSettingDegCSS)
  setHours(hours, hoursPointer, initSettingDegCSS)
}

function setSeconds(seconds, element, initDegCSS) {
  const secondsDegrees = ((seconds / 60) * 360) + initDegCSS
  element.style.transform = `rotate(${secondsDegrees}deg)`
}

function setMinutes(minutes, element, initDegCSS) {
  const secondsDegrees = ((minutes / 60) * 360) + initDegCSS
  element.style.transform = `rotate(${secondsDegrees}deg)`
}

function setHours(hours, element, initDegCSS) {
  const secondsDegrees = ((hours / 12) * 360) + initDegCSS
  element.style.transform = `rotate(${secondsDegrees}deg)`
}

setInterval(setDate, 1000);