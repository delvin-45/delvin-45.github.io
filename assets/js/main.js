document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------------------
       1. Custom Cursor
       ----------------------------------------------- */
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");

    window.addEventListener("mousemove", (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Smooth follow
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Hover effect for links
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursorOutline.style.width = '50px';
            cursorOutline.style.height = '50px';
            cursorOutline.style.backgroundColor = 'rgba(0, 245, 212, 0.1)';
        });
        link.addEventListener('mouseleave', () => {
            cursorOutline.style.width = '30px';
            cursorOutline.style.height = '30px';
            cursorOutline.style.backgroundColor = 'transparent';
        });
    });

    /* -----------------------------------------------
       2. Loader
       ----------------------------------------------- */
    const loader = document.getElementById('loader-wrapper');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 1500); // Fake load time for effect
    }

    /* -----------------------------------------------
       3. Intersection Observer (Fade in on scroll)
       ----------------------------------------------- */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.post-card, .post-content, .hero-title, .hero-desc, .glass-card');
    sections.forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });

    /* -----------------------------------------------
       4. Navbar Scroll Effect
       ----------------------------------------------- */
    const navbar = document.querySelector('.site-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* -----------------------------------------------
       5. Typing Effect for Hero
       ----------------------------------------------- */
    const typeTarget = document.querySelector('.hero-subtitle-text');

    if (typeTarget) {
        const texts = [
            "Analyzing Threat Vectors...",
            "Encrypting Communications...",
            "Securing Infrastructure...",
            "Resilience Architecture."
        ];

        let count = 0;
        let index = 0;
        let currentText = "";
        let letter = "";

        (function type() {
            if (count === texts.length) {
                count = 0;
            }
            currentText = texts[count];
            letter = currentText.slice(0, ++index);

            typeTarget.textContent = letter;

            if (letter.length === currentText.length) {
                count++;
                index = 0;
                setTimeout(type, 2000); // Pause at end
            } else {
                setTimeout(type, 100); // Typing speed
            }
        })();
    }

    /* -----------------------------------------------
       6. Theme Toggle
       ----------------------------------------------- */
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (themeToggle) {
        const icon = themeToggle.querySelector('i');

        // Check saved theme
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'light') {
            body.classList.add('light-mode');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-mode');

            if (body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light');
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                localStorage.setItem('theme', 'dark');
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        });
    }

});
