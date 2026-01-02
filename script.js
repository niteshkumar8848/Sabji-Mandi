function scrollToSection(id){
document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

function toggleMenu() {
    const nav = document.querySelector('.nav-menu');
    nav.classList.toggle('active');
}

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.querySelector('.nav-menu');
        nav.classList.remove('active');
    });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Gallery slideshow
let slideIndex = 0;
const slides = document.querySelectorAll('.gallery-item');
const dots = document.querySelectorAll('.dot');

function showSlides(n) {
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');
}

function changeSlide(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}

window.addEventListener('load', () => {
    if (slides.length > 0) {
        showSlides(slideIndex);
        setInterval(() => {
            slideIndex++;
            showSlides(slideIndex);
        }, 4000);
    }
});

