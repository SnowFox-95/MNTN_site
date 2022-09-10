const navBtn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;

// клик по кнопке
navBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    toggleMobileNav()
})

// клик по окну за пределами навигации
window.addEventListener('click', function(){
if(body.classList.contains('no-scroll')) {
        toggleMobileNav()
    }
})

// останавливаем клик внутри открытой мобильной навигации
mobileNav.addEventListener('click', function(event){
    event.stopPropagation()
})

function toggleMobileNav(){
    mobileNav.classList.toggle('mobile-nav-active');
    navBtn.classList.toggle('nav-button-close');
    body.classList.toggle('no-scroll');
}