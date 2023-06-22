document.addEventListener("DOMContentLoaded", load);


function load() {

  const yearElement = document.querySelector('.footer__year');

  if (yearElement) {
    yearElement.innerHTML = new Date().getFullYear();
  } 
}