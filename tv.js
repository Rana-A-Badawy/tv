window.addEventListener('scroll', function() {
 const navbar = document.getElementById('navbar');
 if (window.scrollY > 0) {
     navbar.classList.add('scrolled');
 } else {
     navbar.classList.remove('scrolled');
 }
 if(scrollY>=200){
    btn.style.display="block";
   } 
   else{
    btn.style.display="none";
   }
});
// Toggle dark mode
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
 document.body.classList.toggle('dark-mode');
 document.body.style.background('dark-mode');
});
// Toggle mobile menu
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
menuIcon.addEventListener('click', () => {
 navLinks.classList.toggle('show');
});

