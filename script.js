const menuIcon = document.querySelector('#menu-icon');
const navLinks= document.querySelector('.nav-links');
menuIcon.onclick=() => {
    navLinks.classList.toggle('active');
    // menuIcon.classList.toggle('active');
}

var typed=new Typed(".home-text",{
    strings:["computer science student","Web Devoloper"],
    typeSpeed:150,
    backSpeed:150,
    backDelay:1000,
    loop:true
});