const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('show')
    navMenu.classList.toggle('show');
})