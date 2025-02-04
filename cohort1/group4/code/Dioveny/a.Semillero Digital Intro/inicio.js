
document.getElementById('ctaButton').addEventListener('click', () => {
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});


window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#0d0d1a';
    } else {
        header.style.backgroundColor = '#1a1a2e';
    }
});
