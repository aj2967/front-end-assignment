"use-strict";


// Menu Button
const menuToggle = document.getElementById("menu-toggle");
const menuNav = document.getElementById("links");

const toggleMenu = () => {
  menuNav.classList.toggle("menu-toggle");
}
menuToggle.addEventListener("click", toggleMenu);



//Dark mode
let darkMode = localStorage.getItem('darkMode');
const darkModeBtn = document.querySelector('#dark-toggle');

function darkModeFunc() {
  document.body.classList.add('dark-mode');
  localStorage.setItem('darkMode', 'enabled')
}

function lightModeFunc() {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('darkMode', 'disabled')
}

if (darkMode === 'enabled') {
  darkModeFunc();
}

darkModeBtn.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enabled') {
    darkModeFunc();
  } else {
    lightModeFunc();
  }
})
