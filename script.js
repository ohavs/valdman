let carouselDiv = document.querySelector('.carousel-div')
let cardsDiv = document.querySelector('.cards')
let aboutSection = document.querySelector('.about')
let aboutUs = document.querySelector('.aboutus')
let galleryBtn = document.querySelector('.gallery-btn')
let aboutBtn = document.querySelector('.about-btn')
let contactBtn = document.querySelector('.contact-btn')
let logo = document.querySelector('.logo')
let footerGallery = document.querySelector('.footer-gallery')
let footerAbout = document.querySelector('.footer-about')
let footerContact = document.querySelector('.footer-contact')
let chat = document.querySelector('.chat')
let whatsappBtn = document.querySelector('.whatsapp')
let collapse = document.querySelector('.navbar-toggler')
let principles = document.querySelector('.principles')
let social = document.querySelector('.social')


//  logo click 
logo.addEventListener('click', () => {
  carouselDiv.classList.remove('hide')
  aboutSection.classList.remove('hide')
  aboutUs.classList.add('hide')
  cardsDiv.classList.add('hide')
  chat.classList.add('hide')
  whatsappBtn.classList.remove('hide')
  principles.classList.remove('hide')
  social.classList.add('hide')
})



// gallery 
galleryBtn.addEventListener('click', () => {
  carouselDiv.classList.add('hide')
  aboutSection.classList.add('hide')
  aboutUs.classList.add('hide')
  cardsDiv.classList.remove('hide')
  chat.classList.add('hide')
  whatsappBtn.classList.remove('hide')
  principles.classList.add('hide')
  social.classList.add('hide')
  closeNav()
})

//about us
aboutBtn.addEventListener('click', () => {
  carouselDiv.classList.add('hide')
  aboutSection.classList.add('hide')
  aboutUs.classList.remove('hide')
  cardsDiv.classList.add('hide')
  chat.classList.add('hide')
  whatsappBtn.classList.remove('hide')
  principles.classList.add('hide')
  social.classList.add('hide')
  closeNav()
})

//contact
contactBtn.addEventListener('click', () => {
  carouselDiv.classList.add('hide')
  aboutUs.classList.add('hide')
  aboutSection.classList.add('hide')
  cardsDiv.classList.add('hide')
  chat.classList.remove('hide')
  whatsappBtn.classList.add('hide')
  principles.classList.add('hide')
  social.classList.remove('hide')
  closeNav()
})
// /////////
//footer
footerGallery.addEventListener('click', () => {
  carouselDiv.classList.add('hide')
  aboutSection.classList.add('hide')
  aboutUs.classList.add('hide')
  cardsDiv.classList.remove('hide')
  chat.classList.add('hide')
  whatsappBtn.classList.remove('hide')
  principles.classList.add('hide')
  social.classList.add('hide')
})


footerAbout.addEventListener('click', () => {
  carouselDiv.classList.add('hide')
  aboutSection.classList.add('hide')
  aboutUs.classList.remove('hide')
  cardsDiv.classList.add('hide')
  chat.classList.add('hide')
  whatsappBtn.classList.remove('hide')
  principles.classList.add('hide')
  social.classList.add('hide')
})


footerContact.addEventListener('click', () => {
  carouselDiv.classList.add('hide')
  aboutUs.classList.add('hide')
  aboutSection.classList.add('hide')
  cardsDiv.classList.add('hide')
  chat.classList.remove('hide')
  whatsappBtn.classList.add('hide')
  principles.classList.add('hide')
  social.classList.remove('hide')
})


function closeNav(){
  if(window.innerWidth<990){
    collapse.click()
  }
}




// chat 
let input = document.querySelector('.message-input')
let submit = document.querySelector('.send-button')
let clickBtn=document.querySelector(".href")
submit.addEventListener("click", () => {
   clickBtn.href=`whatsapp://send?phone=+972506500855&text=${input.value }`
  clickBtn.click()
})