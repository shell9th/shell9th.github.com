
window.onscroll = function() { toggleStickyNavbar(), toggleNavbarBackground() };

function toggleStickyNavbar() {
    var navbar = document.getElementById("stickyNavbar");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-200px"; 
    }
}

function toggleNavbarBackground() {
    var navbar = document.querySelector(".navbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add("scrolled");  
    } else {
        navbar.classList.remove("scrolled");  
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const navbarLinks = document.querySelectorAll(".sticky-navbar a");
    const sectionButtons = document.querySelectorAll(".white-section1 a"); 

  
    function smoothScrollTo(targetId) {
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            const targetPosition = targetSection.offsetTop;
            const startPosition = window.scrollY;
            const distance = targetPosition - startPosition;
            const duration = 800; 
            let startTime = null;

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;


                const ease = t => t * t * (3 - 2 * t);

                const run = ease(timeElapsed / duration) * distance + startPosition;
                window.scrollTo(0, run);

                if (timeElapsed < duration) requestAnimationFrame(animation);
            }

            requestAnimationFrame(animation);
        }
    }


    navbarLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); 
            const targetId = this.getAttribute("href").substring(1); 
            smoothScrollTo(targetId); 
        });
    });


    sectionButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); 
            const targetId = this.getAttribute("href").substring(1); 
            smoothScrollTo(targetId); 
        });
    });
});