document.addEventListener('DOMContentLoaded', () => {
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

mobileToggle.addEventListener('click', () => {
navMenu.classList.toggle('open');
const icon = mobileToggle.querySelector('i');
if (navMenu.classList.contains('open')) {
icon.classList.replace('fa-bars-staggered', 'fa-xmark');
} else {
icon.classList.replace('fa-xmark', 'fa-bars-staggered');
}
});

navLinks.forEach(link => {
link.addEventListener('click', () => {
navMenu.classList.remove('open');
mobileToggle.querySelector('i').classList.replace('fa-xmark', 'fa-bars-staggered');
});
});


const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
if (window.scrollY > 50) {
navbar.classList.add('sticky');
} else {
navbar.classList.remove('sticky');
}
});


const revealElements = document.querySelectorAll('.scroll-reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('revealed');
if (entry.target.id === 'skills' || entry.target.querySelector('#skills')) {
animateProgressBars();
}
observer.unobserve(entry.target);
}
});
}, {
threshold: 0.12,
rootMargin: "0px 0px -40px 0px"
});

revealElements.forEach(element => {
revealObserver.observe(element);
});

function animateProgressBars() {
const progressFills = document.querySelectorAll('.progress-fill');
progressFills.forEach(fill => {
const targetedWidth = fill.style.width;
fill.style.width = '0';
setTimeout(() => {
fill.style.width = targetedWidth;
}, 150);
});
}


const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
let currentScroll = window.pageYOffset;

sections.forEach(current => {
const sectionHeight = current.offsetHeight;
const sectionTop = current.offsetTop - 140;
const sectionId = current.getAttribute('id');

if (currentScroll > sectionTop && currentScroll <= sectionTop + sectionHeight) {
document.querySelector('.nav-menu a[href*=' + sectionId + ']')?.classList.add('active');
} else {
document.querySelector('.nav-menu a[href*=' + sectionId + ']')?.classList.remove('active');
}
});
});

const contactForm = document.getElementById('portfolio-contact-form');
if (contactForm) {
contactForm.addEventListener('submit', (e) => {
e.preventDefault();

const submitBtn = contactForm.querySelector('.form-submit-btn');
const initialBtnText = submitBtn.innerHTML;

submitBtn.innerHTML = 'Processing Transmission... <i class="fa-solid fa-circle-notch fa-spin"></i>';
submitBtn.style.pointerEvents = 'none';

setTimeout(() => {
submitBtn.innerHTML = 'Message Dispatched Successfully! <i class="fa-solid fa-circle-check"></i>';
submitBtn.style.background = '#ccd5ae';
contactForm.reset();

setTimeout(() => {
submitBtn.innerHTML = initialBtnText;
submitBtn.style.background = '';
submitBtn.style.pointerEvents = 'auto';
}, 3500);
}, 1800);
});
}
});