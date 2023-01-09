var mobile_nav = document.querySelector(".mobile-navbar-btn");
var nav_header = document.querySelector(".header");

function toggleNavbar(){
    nav_header.classList.toggle("active")
}

mobile_nav.addEventListener("click",() => toggleNavbar());