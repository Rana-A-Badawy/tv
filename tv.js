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
////////////////////////////////////////////////////////////////////////////////////////////////////////
// Toggle dark mode
// Toggle dark mode
const themeToggle = document.getElementById('theme-toggle');

// التحقق من التفضيل المحفوظ في localStorage عند تحميل الصفحة
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
    // تبديل كلاس الوضع الداكن
    document.body.classList.toggle('dark-mode');

    // تحديث قيمة localStorage بناءً على الوضع الحالي
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Toggle mobile menu
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
menuIcon.addEventListener('click', () => {
 navLinks.classList.toggle('show');
});
