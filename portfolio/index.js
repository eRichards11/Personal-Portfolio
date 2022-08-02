//Hamburger toggle

const navToggle = document.querySelector('#nav-toggle')
const navLinks = document.querySelectorAll('.link-list')


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open')
    })

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open')
  })
})



//Hero Image

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const sizeWidth = ctx.canvas.clientWidth;   
const sizeHeight = ctx.canvas.clientHeight; 
canvas.width = sizeWidth;
canvas.height = sizeHeight;

const heroImg = new Image()
heroImg.src = './images/fullReelHero.png'
const imgWidth = 1920
const imgHeight = 1080
let frames = 0
let thisFrame = 0
const staggerFrames = 15

function animate() {
    ctx.clearRect(0, 0, sizeWidth, sizeHeight)
    ctx.drawImage(
        heroImg,
        frames * imgWidth,
        0,
        imgWidth,
        imgHeight,
        0, 
        0, 
        sizeWidth, 
        sizeHeight)
        if (thisFrame % staggerFrames == 0) {
            if (frames < 3) frames++
            else (frames = 0) 
        }
    
        thisFrame++
    requestAnimationFrame(animate)
}
animate()

//scroll animation

const scrollOffset = 10;

const scrollElement = document.querySelector(".scroll")

const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top

  return (
    elementTop <=
    ((window.innerHeight || document.documentElement.clientHeight) - offset)
  )
}

const displayScrollElement = () => {
  scrollElement.classList.add('scrolled')
}

const hideScrollElement = () => {
  scrollElement.classList.remove('scrolled')
}

const handleScrollAnimation = () => {
  if (elementInView(scrollElement, scrollOffset)) {
      displayScrollElement()
  } else {
    hideScrollElement()
  }
}

let throttleTimer = false

const throttle = (callback, time) => {
    if (throttleTimer) return
    throttleTimer = true

    setTimeout(() => {
        callback();
        throttleTimer = false
    }, time)
}

window.addEventListener('scroll', () => {
    throttle(handleScrollAnimation, 250)
})

//checking for 'prefer reduced animation'
const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

window.addEventListener("scroll", () => {
  if (mediaQuery && !mediaQuery.matches) {
    handleScrollAnimation()
  }
})





