// ===== HAMBURGER MENU =====
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburgerMenu');
    const menuList = document.getElementById('menuList');
    const body = document.body;

    if (!hamburger || !menuList) {
        console.log('Hamburger elements not found!');
        return;
    }

    // ساخت اوورلی
    let overlay = document.querySelector('.overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'overlay';
        document.body.appendChild(overlay);
    }

    // تابع باز و بسته کردن منو
    function toggleMenu() {
        hamburger.classList.toggle('active');
        menuList.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('no-scroll');
    }

    // کلیک روی همبرگر
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });

    // کلیک روی اوورلی
    overlay.addEventListener('click', function() {
        if (menuList.classList.contains('active')) {
            toggleMenu();
        }
    });

    // کلیک روی لینک‌های منو
    document.querySelectorAll('.menu-list a').forEach(function(link) {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 992 && menuList.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // تغییر اندازه صفحه
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            hamburger.classList.remove('active');
            menuList.classList.remove('active');
            overlay.classList.remove('active');
            body.classList.remove('no-scroll');
        }
    });

    // جلوگیری از بسته شدن منو با کلیک داخل منو
    menuList.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});