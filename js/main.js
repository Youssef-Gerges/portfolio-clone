const ham = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobil = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('#header .container');


ham.addEventListener('click', () => {
    ham.classList.toggle('active');
    mobil.classList.toggle('active');
});


document.addEventListener('scroll', () => {
    var position = window.scrollY;
    if (position > 250) {
        header.style.backgroundColor = "#29323c";
    } else {
        header.style.backgroundColor = "transparent";
    }
});