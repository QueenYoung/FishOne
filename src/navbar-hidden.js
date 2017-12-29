import { throttle } from 'lodash';

document.addEventListener('DOMContentLoaded', function() {
  // Scrolling
  var navbarEl = document.querySelector('.navbar')
  // var specialShadow = document.getElementById('specialShadow')
  var NAVBAR_HEIGHT = 72
  var THRESHOLD = 184
  var horizon = NAVBAR_HEIGHT
  var whereYouStoppedScrolling = 0
  var scrollFactor = 0
  var currentTranslate = 0


  function upOrDown(lastY, currentY) {
    if (currentY >= lastY) {
      return goingDown(currentY)
    }
    return goingUp(currentY)
  }

  function goingDown(currentY) {
    whereYouStoppedScrolling = currentY

    if (currentY > horizon) {
      horizon = currentY
    }

    translateHeader(currentY, false)
  }

  function goingUp(currentY) {
    if (currentY < whereYouStoppedScrolling - NAVBAR_HEIGHT) {
      horizon = currentY + NAVBAR_HEIGHT
    }

    translateHeader(currentY, true)
  }

  function constrainDelta(delta) {
    return Math.max(0, Math.min(delta, NAVBAR_HEIGHT))
  }

  function translateHeader(currentY, upwards) {
    // let topTranslateValue;
    var translateValue = void 0

    if (upwards && currentTranslate === 0) {
      translateValue = 0
    } else if (currentY <= NAVBAR_HEIGHT) {
      translateValue = currentY * -1
    } else {
      var delta = constrainDelta(Math.abs(currentY - horizon))
      translateValue = delta - NAVBAR_HEIGHT
    }

    if (translateValue !== currentTranslate) {
      var navbarStyle =
        `transform: translateY(${translateValue}px);`
      currentTranslate = translateValue
      navbarEl.setAttribute('style', navbarStyle)
    }

    if (currentY > THRESHOLD * 2) {
      scrollFactor = 1
    } else if (currentY > THRESHOLD) {
      scrollFactor = (currentY - THRESHOLD) / THRESHOLD
    } else {
      scrollFactor = 0
    }

    // var translateFactor = 1 + translateValue / NAVBAR_HEIGHT
    // specialShadow.style.opacity = scrollFactor
    // specialShadow.style.transform = `scaleY(${translateFactor})`
  }

  translateHeader(window.scrollY, false)

  var ticking = false
  var lastY = 0

  window.addEventListener('scroll', throttle(function() {
    var currentY = window.scrollY

    if (!ticking) {
      window.requestAnimationFrame(function() {
        upOrDown(lastY, currentY)
        ticking = false
        lastY = currentY
      })
    }

    ticking = true
  }), 250)
})
