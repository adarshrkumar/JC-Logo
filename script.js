let strokeSize = 40

let logo = document.getElementsByClassName('logo')[0]
let logoWidth = logo.clientWidth

let wordEles = document.body.querySelectorAll('.logo > .word')
let wordAmt = wordEles.length
let wordGap = strokeSize * (wordAmt-1)

let lettersWidth = 0
wordEles.forEach(function(w) {
  w.querySelectorAll('.letter').forEach(function(l) {
    lettersWidth+= l.clientWidth
  })
})
let letterEles = logo.querySelectorAll('.word > .letter')
let lettersAmt = letterEles.length
let letterGap = (lettersAmt-wordAmt) * (strokeSize/gNum)
let gaps = wordGap+letterGap
if (logoWidth > window.innerWidth) {
  lettersWidth = window.innerWidth-gaps
}
let letterWidth = lettersWidth/lettersAmt
let letterHeight = (letterWidth/130)*200
logo.style.setProperty('--100-w-percent', `${letterWidth}px`)
logo.style.setProperty('--100-h-percent', `${letterHeight}px`)
// let piEle = logo.querySelector('.pi')
// piEle.style.setProperty('--100-w-percent', `${logo.clientWidth}px`)
// piEle.style.setProperty('--100-h-percent', `${logo.clientHeight}px`)

letters.split(' ').forEach(function(w, wI) {
  let wordEle = wordEles[wI]
  if (piMode) wordEle.style.gap = `calc(var(--stroke-size)/${gNum})`
  w.split('').forEach(function(l, lI) {
    let possibleEle = wordEle.querySelectorAll('.letter')[lI]
    let classList = possibleEle.className.split(' ')
    let hasLetter = false
    classList.forEach(function(c) {
      if (c === l) hasLetter = true
    })
    let letterEle = ''
    if (hasLetter) {
      letterEle = possibleEle
    }
    else {
      letterEle = wordEle.querySelector(`.letter.${l}`)
    }
    letterEle.removeAttribute('hidden')
  })
})

if (!!devMode) {
  let style = `
    .logo .word .letter *:not([colorSwap], .container) {
      outline: solid 1px black;
    }
    .logo .word *:is(.letter, .letter [colorSwap], .letter .container) {
      outline: solid 1px var(--main-color);
    }
  `
  let styleEle = document.createElement('style')
  styleEle.innerHTML = style
  document.head.appendChild(styleEle)
}