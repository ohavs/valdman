let carouselDiv = document.querySelector('.carousel-div')
let cardsDiv = document.querySelector('.cards-div')
let about = document.querySelector('.about')
let gallery = document.querySelector('.gallery')
let aboutNav = document.querySelector('.about-nav')
let contact = document.querySelector('.contact')
let logo = document.querySelector('.logo')

logo.addEventListener('click', () => {
    carouselDiv.classList.remove('hide')
    about.classList.remove('hide')
    cardsDiv.classList.add('hide')
})


gallery.addEventListener('click', () => {
    carouselDiv.classList.add('hide')
    about.classList.add('hide')
    cardsDiv.classList.remove('hide')
console.log('click')    
})