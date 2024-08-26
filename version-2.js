let logo = document.querySelector('.logo')
let lHeight = logo.clientHeight
logo.style.setProperty('--100-h', `${lHeight}px`)

let lItems = document.querySelectorAll('.logo > *')
let lItemsWidth = 0
lItems.forEach(function(e, i) {
  lItemsWidth+=e.clientWidth
})
let lGap = logo.clientWidth//-lItemsWidth
let sLGap = lGap/16
logo.style.setProperty('--l-gap', `${sLGap}px`)
//logo.style.width = `calc(var(--100-w) - ${sLGap*2}px)`