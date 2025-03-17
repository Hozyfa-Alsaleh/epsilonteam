document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId); 
        
        window.scrollTo({
            top: targetSection.offsetTop - 80, // تعديل المسافة حسب الحاجة
            behavior: "smooth"
        });
    });
});







