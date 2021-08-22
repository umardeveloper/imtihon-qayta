const elHumburgerBtn = document.querySelector('.header-humburger');
const elHeader = document.querySelector('.header');
elHumburgerBtn.addEventListener('click' , (evt) => {
    elHeader.classList.toggle('header--open');
});