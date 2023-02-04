let carouselDiv = document.querySelector('.carousel-div')
let cardsDiv = document.querySelector('.cards-div')
let aboutSection = document.querySelector('.about')
let galleryBtn = document.querySelector('.gallery-btn')
let aboutBtn = document.querySelector('.about-btn')
let contactBtn = document.querySelector('.contact-btn')
let logo = document.querySelector('.logo')
let footerGallery = document.querySelector('.footer-gallery')

logo.addEventListener('click', () => {
    carouselDiv.classList.remove('hide')
    aboutSection.classList.remove('hide')
    cardsDiv.classList.add('hide')
})




galleryBtn.addEventListener('click', () => {
    carouselDiv.classList.add('hide')
    aboutSection.classList.add('hide')
    cardsDiv.classList.remove('hide')
})

aboutBtn.addEventListener('click', () => {
    carouselDiv.classList.add('hide')
    aboutSection.classList.remove('hide')
    cardsDiv.classList.add('hide')
})

contactBtn.addEventListener('click', () => {
    carouselDiv.classList.add('hide')
    about.classList.add('hide')
    cardsDiv.classList.remove('hide')

})










