let carouselDiv = document.querySelector('.carousel-div')
let cardsDiv = document.querySelector('.cards')
let aboutSection = document.querySelector('.about')
let aboutUs = document.querySelector('.aboutus')
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
    aboutUs.classList.add('hide')
    cardsDiv.classList.remove('hide')
})

aboutBtn.addEventListener('click', () => {
    carouselDiv.classList.add('hide')
    aboutSection.classList.add('hide')
    aboutUs.classList.remove('hide')
    cardsDiv.classList.add('hide')
})

contactBtn.addEventListener('click', () => {
    carouselDiv.classList.add('hide')
    aboutUs.classList.add('hide')
    aboutSection.classList.add('hide')
    cardsDiv.classList.add('hide')

})










