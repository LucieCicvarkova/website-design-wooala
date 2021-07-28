
let button = document.querySelector('.toggle-icon');
let nav = document.querySelector('.nav-list');
let line = document.querySelector('.nav-border-line');


button.addEventListener('click', function(e) {    
nav.classList.toggle('nav-list-active');
line.classList.toggle('nav-border-line-active');
});