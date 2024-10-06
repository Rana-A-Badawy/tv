
const themeToggle3 = document.getElementById('theme-toggle3');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}
themeToggle3.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    // const btn = document.getElementById('btn');

    // if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    // } else {
    //     navbar.classList.remove('scrolled');
    // }

    // if (window.scrollY >= 200) {
    //     btn.style.display = "block";
    // } else {
    //     btn.style.display = "none";
    // }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////
// Toggle mobile menu
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
