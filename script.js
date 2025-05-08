const menu = document.querySelector('.menu');
const navLinks = document.querySelector('.nav-links');

menu.addEventListener('click', ()=>{
    navLinks.classList.toggle('show');
})

window.addEventListener('scroll', ()=>{
    navLinks.classList.remove('show');
})

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});
