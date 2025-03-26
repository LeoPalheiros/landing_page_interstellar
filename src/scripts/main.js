document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll('.header__menu a[href^="#"]');

    menuLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60, 
                    behavior: "smooth"
                });
            }
        });
    });
});
