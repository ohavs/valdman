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



logo.addEventListener('click', () => {
  carouselDiv.classList.remove('hide')
  aboutSection.classList.remove('hide')
  aboutUs.classList.add('hide')
  cardsDiv.classList.add('hide')
  chat.classList.add('hide')
  whatsappBtn.classList.remove('hide')
})




galleryBtn.addEventListener('click', () => {
  carouselDiv.classList.add('hide')
  aboutSection.classList.add('hide')
  aboutUs.classList.add('hide')
  cardsDiv.classList.remove('hide')
  chat.classList.add('hide')
  whatsappBtn.classList.remove('hide')
  collapse.click()
})

footerGallery.addEventListener('click', () => {
  carouselDiv.classList.add('hide')
  aboutSection.classList.add('hide')
  aboutUs.classList.add('hide')
  cardsDiv.classList.remove('hide')
  chat.classList.add('hide')
  whatsappBtn.classList.remove('hide')
})

aboutBtn.addEventListener('click', () => {
  carouselDiv.classList.add('hide')
  aboutSection.classList.add('hide')
  aboutUs.classList.remove('hide')
  cardsDiv.classList.add('hide')
  chat.classList.add('hide')
  whatsappBtn.classList.remove('hide')
  collapse.click()
})
footerAbout.addEventListener('click', () => {
  carouselDiv.classList.add('hide')
  aboutSection.classList.add('hide')
  aboutUs.classList.remove('hide')
  cardsDiv.classList.add('hide')
  chat.classList.add('hide')
  whatsappBtn.classList.remove('hide')
})

contactBtn.addEventListener('click', () => {
  carouselDiv.classList.add('hide')
  aboutUs.classList.add('hide')
  aboutSection.classList.add('hide')
  cardsDiv.classList.add('hide')
  chat.classList.remove('hide')
  whatsappBtn.classList.add('hide')
  collapse.click()
})

footerContact.addEventListener('click', () => {
  carouselDiv.classList.add('hide')
  aboutUs.classList.add('hide')
  aboutSection.classList.add('hide')
  cardsDiv.classList.add('hide')
  chat.classList.remove('hide')
  whatsappBtn.classList.add('hide')
})





//whatsapp//
var isMouseDown, initX, initY, height = draggable.offsetHeight, width = draggable.offsetWidth;

draggable.addEventListener('mousedown', function (e) {
  isMouseDown = true;
  document.body.classList.add('no-select');
  initX = e.offsetX;
  initY = e.offsetY;
})

document.addEventListener('mousemove', function (e) {
  if (isMouseDown) {
    var cx = e.clientX - initX,
      cy = e.clientY - initY;
    if (cx < 0) {
      cx = 0;
    }
    if (cy < 0) {
      cy = 0;
    }
    if (window.innerWidth - e.clientX + initX < width) {
      cx = window.innerWidth - width;
    }
    if (e.clientY > window.innerHeight - height + initY) {
      cy = window.innerHeight - height;
    }
    draggable.style.left = cx + 'px';
    draggable.style.top = cy + 'px';
  }
})

draggable.addEventListener('mouseup', function () {
  isMouseDown = false;
  document.body.classList.remove('no-select');
})


// chat 
let input = document.querySelector('.message-input')
let submit = document.querySelector('.send-button')
let clickBtn=document.querySelector(".href")
submit.addEventListener("click", () => {
   clickBtn.href=`whatsapp://send?phone=+972506500855&text=${input.value }`
  clickBtn.click()
})