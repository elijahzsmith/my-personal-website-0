// const navigationBar = querySelector('.navbar');
// navigationBar.


const h2 = document.createElement('h2');
h2.textContent = 'See us live (JS)';

document.querySelector('body').appendChild(h2);

const hamburger = document.querySelector(".three_line");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// add event listeners and modify some html and css using js