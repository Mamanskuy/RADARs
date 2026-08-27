import './bootstrap';
import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();


const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('hamburger-active');
        navMenu.classList.toggle('hidden');
    });
}


// JavaScript untuk sticky header
var header = document.querySelector("header");

if (header) {
    var sticky = header.offsetTop;

    window.onscroll = function() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    };
}
