let logoEle = document.body.getElementsByClassName('logo')[0]
var gNum = 1.5
if (piMode) gNum = 1.5/2

var piHTML = `
      <div class="pi">
        <span class="round">
          <span class="round inner">
            <span class="round inner"></span>
          </span>
        </span>
        <span class="line"></span>
        <span class="v-lines">
          <span class="a"></span>
          <span class="b"></span>
          <span class="c"></span>
        </span>
      </div>
`

var letterHTMLs = {
  J: `<div class="letter J">
        <span class="head" colorSwap></span>
        <span class="head-block" colorSwap></span>
        <span class="line h"></span>
        <span class="line v"></span>
        <span class="circle outer">
          <span class="circle inner"></span>
        </span>
      </div>`, 
  C: `<div class="letter C">
        <span class="circle outer">
          <span class="circle inner">
            <span class="head" colorSwap></span>
          </span>
          <span class="rect"></span>
        </span>
      </div>`, 
  a: `<div class="letter a">
        <span class="circle outer">
          <span class="circle inner"></span>
        </span>
        <span class="line outer"></span>
      </div>`, 
  e: `<div class="letter e">
        <span class="circle outer">
          <span class="circle inner"></span>
          <span class="line"></span>
          <span class="block"></span>
        </span>
      </div>`, 
  r: `<div class="letter r">
        <span class="container">
          <span class="circle outer">
            <span class="round square" colorSwap>
              <span class="round"></span>
            </span>
            <span class="circle inner">
            <span class="rounded square">
              <span class="rounded" colorSwap></span>
            </span>
          </span>
        </span>
        <span class="line">
        </span>
        <span class="head-block"></span>
        <span class="head" colorSwap></span>
      </span>
      </div>`, 
  s: `<div class="letter s">
        <span class="container">
          <span class="circle one outer">
            <span class="circle one inner" colorSwap></span>
            <span class="rect" colorSwap></span>
          </span>
          <span class="circle two outer">
            <span class="circle two inner" colorSwap></span>
            <span class="rect" colorSwap></span>
          </span>
          <span class="line outer" colorSwap>
            <span class="line inner one"></span>
            <span class="line inner two"></span>
          </span>
        </span>
      </div>`, 
  t: `<div class="letter t">
        <span class="line v"></span>
        <span class="base outer">
          <span class="round square" colorSwap>
            <span class="round"></span>
          </span>
          <span class="base inner" colorSwap>
            <span class="rounded square">
              <span class="rounded" colorSwap></span>
            </span>
          </span>
        </span>
        <span class="line h"></span>
      </div>`, 
  v: `<div class="letter v">
        <span class="container">
          <span class="overcorrect"></span>
          <span class="line one"></span>
          <span class="line two"></span>
        </span>
      </div>`, 
}

if (piMode) {
  logoEle.innerHTML = piHTML
}

letters.split(' ').forEach(function(word, wordI) {
  let wordEle = document.createElement('div')
  wordEle.classList.add('word')
  logoEle.appendChild(wordEle)

  word.split('').forEach(function(letter, letterI) {
    let letterHTML = letterHTMLs[letter]
    wordEle.innerHTML = `${wordEle.innerHTML}
                        ${letterHTML}`
  })
})