document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");
    const header = document.querySelector("header");
    
    // Smooth Scroll
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Sticky Header
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.style.background = "#1a252f";
        } else {
            header.style.background = "#2c3e50";
        }
    });
});
