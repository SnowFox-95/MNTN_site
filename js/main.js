const navBtn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;

// клик по кнопке
navBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    mobileNav.classList.toggle('mobile-nav-active');
    navBtn.classList.toggle('nav-button-close');
    body.classList.toggle('no-scroll');
})

// клик по окну за пределами навигации
window.addEventListener('click', function(){
    console.log('click on window');

    if(body.classList.contains('no-scroll')) {
        body.classList.toggle('no-scroll');
        navBtn.classList.toggle('nav-button-close');
        mobileNav.classList.toggle('mobile-nav-active');
    }
})

// останавливаем клик внутри открытой мобильной навигации
mobileNav.addEventListener('click', function(event){
    event.stopPropagation()
})