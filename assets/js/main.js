// assets/js/main.js

document.addEventListener("DOMContentLoaded", () => {
    
    // --- 0. FORCE SCROLL TO TOP ON REFRESH ---
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // --- 1. WELCOME SCREEN ANIMATION SUTRADARA ---
    const welcomeScreen = document.getElementById('welcome-screen');
    const typeWriterEl = document.getElementById('w-typewriter');
    
    if (welcomeScreen) {
        // Kunci scroll saat welcome screen aktif
        document.body.classList.add('no-scroll');
        
        // Logika Typewriter Welcome Screen
        const welcomeText = "Arnanda Setya";
        let wIndex = 0;
        function welcomeType() {
            if (typeWriterEl && wIndex < welcomeText.length) {
                typeWriterEl.textContent += welcomeText.charAt(wIndex);
                wIndex++;
                setTimeout(welcomeType, 150);
            }
        }
        setTimeout(welcomeType, 2500);

        // Menunggu 4.5 detik lalu hilangkan welcome screen
        setTimeout(() => {
            welcomeScreen.classList.add('exit');
            
            setTimeout(() => {
                welcomeScreen.style.display = 'none';
                document.body.classList.remove('no-scroll');
                
                // KUNCI RAHASIA: Trigger animasi website utama!
                document.body.classList.add('welcome-done');
                
                // Mulai ngetik teks di Hero Section
                startHeroTyping();
            }, 800);
        }, 4500);
    } else {
        // Jika tidak ada welcome screen, langsung jalankan web utama
        document.body.classList.add('welcome-done');
        startHeroTyping();
    }

    // --- 2. FUNGSI TYPING UNTUK HERO SECTION ---
    function startHeroTyping() {
        const typingText = document.querySelector('.typing-text');
        const roles = ["Web Developer", "Mobile Developer"];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            if (!typingText) return;

            const currentRole = roles[roleIndex];
            
            if (isDeleting) {
                typingText.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentRole.length) {
                // Pause at the end of the word
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                // Move to next word when deleted
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        }
        
        setTimeout(type, 800); // Wait 0.8s before starting
    }

    // --- 2.5 ROTATING QUOTES ---
    const quotes = [
        { text: '"Satu-satunya cara untuk melakukan pekerjaan hebat adalah dengan mencintai apa yang Anda lakukan."', author: "Steve Jobs" },
        { text: '"Kode yang baik adalah dokumentasi terbaiknya sendiri. Seiring Anda mulai menambahkan komentar, tanyakan pada diri Anda: Bagaimana saya bisa membuat kode ini lebih mudah dipahami?"', author: "Steve McConnell" },
        { text: '"Desain bukan sekadar apa yang terlihat dan terasa. Desain adalah bagaimana ia berfungsi."', author: "Steve Jobs" }
    ];
    let quoteIndex = 0;
    const quoteContainer = document.querySelector('.hero-quote-text');
    const quoteTextSpan = document.getElementById('quoteText');
    const quoteAuthorSpan = document.getElementById('quoteAuthor');

    if (quoteContainer && quoteTextSpan && quoteAuthorSpan) {
        setInterval(() => {
            // Fade out
            quoteContainer.style.opacity = '0';
            
            setTimeout(() => {
                // Change text while invisible
                quoteIndex = (quoteIndex + 1) % quotes.length;
                quoteTextSpan.textContent = quotes[quoteIndex].text;
                quoteAuthorSpan.textContent = quotes[quoteIndex].author;
                
                // Fade in
                quoteContainer.style.opacity = '1';
            }, 800); // match the CSS transition duration
        }, 8000); // change every 5 seconds
    }

    // --- 3. (CURSOR REMOVED - USING DEFAULT BROWSER CURSOR) ---


    // --- 4. MAGNETIC BUTTONS ---
    const magneticEls = document.querySelectorAll('.magnetic-el, .btn');
    magneticEls.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const pos = el.getBoundingClientRect();
            const x = e.clientX - pos.left - pos.width / 2;
            const y = e.clientY - pos.top - pos.height / 2;
            el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = `translate(0px, 0px)`;
        });
    });

    // --- 5. VANILLA 3D TILT EFFECT ---
    const tiltCards = document.querySelectorAll('.glass-tilt');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; 
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -15; 
            const rotateY = ((x - centerX) / centerX) * 15;
            
            card.style.transform = `
                perspective(1000px) 
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg) 
                scale3d(1.05, 1.05, 1.05)
            `;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `
                perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)
            `;
        });
    });

    // --- 6. SCROLL PROGRESS & PARALLAX HERO ---
    const progressBar = document.getElementById('scrollProgress');
    const heroContent = document.querySelector('.hero-text-content'); 
    
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        if(progressBar) progressBar.style.width = scrolled + "%";

        if(heroContent && window.scrollY < window.innerHeight) {
            heroContent.style.transform = `translateY(${window.scrollY * 0.4}px)`;
            heroContent.style.opacity = 1 - (window.scrollY / 700);
        }
    });

    // --- 7. SCROLL REVEAL & SKILL BARS ---
    const reveals = document.querySelectorAll('.reveal, .reveal-up, .reveal-down, .reveal-left, .reveal-right, .reveal-scale, .reveal-flip, .project-card, .tech-card, .tech-flip-card');
    const skillBars = document.querySelectorAll('.skill-progress');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                if(entry.target.querySelector('.skill-progress')) {
                    skillBars.forEach(bar => {
                        bar.style.width = bar.getAttribute('data-width');
                    });
                }
            } else {
                // Remove active class when out of view so it animates again!
                entry.target.classList.remove('active');
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    reveals.forEach(r => observer.observe(r));

    // --- 8. PROJECT FILTER ANIMATION ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const val = btn.getAttribute('data-filter');
            
            projects.forEach(p => {
                p.style.opacity = '0';
                p.style.transform = 'scale(0.9)';
                
                setTimeout(() => {
                    if (val === 'all' || p.getAttribute('data-category') === val) {
                        p.style.display = 'flex';
                        setTimeout(() => {
                            p.style.opacity = '1';
                            p.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        p.style.display = 'none';
                    }
                }, 300);
            });
        });
    });

    // --- 9. AJAX CONTACT FORM ---
    const form = document.getElementById('contactForm');
    const btnSubmit = document.getElementById('submitBtn');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            btnSubmit.innerHTML = 'Sending...';
            btnSubmit.disabled = true;
            try {
                const res = await fetch('api/contact.php', { method: 'POST', body: new FormData(form) });
                const result = await res.json();
                if (result.status === 'success') {
                    Swal.fire({ title: 'Success!', text: result.message, icon: 'success', background: '#0b1120', color: '#f8fafc', confirmButtonColor: '#14b8a6' });
                    form.reset();
                } else {
                    Swal.fire({ title: 'Oops...', text: result.message, icon: 'error', background: '#0b1120', color: '#f8fafc', confirmButtonColor: '#14b8a6' });
                }
            } catch (err) {
                Swal.fire({ title: 'Error!', text: 'Connection failed.', icon: 'error', background: '#0b1120', color: '#f8fafc', confirmButtonColor: '#14b8a6' });
            } finally {
                btnSubmit.innerHTML = '<i data-lucide="send" class="icon-sm"></i> Send Message';
                btnSubmit.disabled = false;
                lucide.createIcons();
            }
        });
    }

    // --- 10. THEME, HAMBURGER & STICKY NAVBAR ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    const themeBtn = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const navbar = document.querySelector('.navbar');

    if (hamburger) hamburger.addEventListener('click', () => navLinks.classList.toggle('show'));
    
    // Enforce dark mode as absolute default if no preference is saved
    if (localStorage.getItem('theme') === 'light') {
        html.setAttribute('data-theme', 'light');
    } else {
        html.removeAttribute('data-theme'); // default to dark
    }
    
    // Set initial icon state
    function updateThemeIcon() {
        if (!themeBtn) return;
        const currentTheme = html.getAttribute('data-theme');
        const iconName = currentTheme === 'light' ? 'sun' : 'moon';
        themeBtn.innerHTML = `<i data-lucide="${iconName}" class="icon-sm"></i>`;
        lucide.createIcons();
    }
    updateThemeIcon();

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            updateThemeIcon();
        });
    }

    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.background = 'var(--bg-surface)';
                navbar.style.borderBottom = '1px solid var(--border-glass)';
                navbar.style.backdropFilter = 'blur(16px)';
            } else {
                navbar.style.background = 'transparent';
                navbar.style.borderBottom = '1px solid transparent';
                navbar.style.backdropFilter = 'none';
            }
        }
    });
});