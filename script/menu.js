// ===== MENU FILTER BUTTONS =====
const filterButtons = document.querySelectorAll('.menu-filter a');

filterButtons.forEach(a => {
    a.addEventListener('click', function() {
    
        filterButtons.forEach(btn => btn.classList.remove('active'));
    
        this.classList.add('active');
    });
});

// ----------------
document.querySelectorAll('a[href="#NaMoogood"]').forEach(a => a.onclick = e => (e.preventDefault(), alert('موجود نیست')));