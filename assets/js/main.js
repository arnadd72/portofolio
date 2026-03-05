// assets/js/main.js

// --- 0. FORCE SCROLL TO TOP ON REFRESH ---
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Clear hash if present to prevent browser jumping to sections
if (window.location.hash) {
    window.history.replaceState('', document.title, window.location.pathname + window.location.search);
}

// Immediately scroll to top
window.scrollTo(0, 0);

// Force scroll to top when everything (including images/CSS) finishes loading
window.addEventListener('load', () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, 10);
});

document.addEventListener("DOMContentLoaded", () => {
    // Scroll to top during early DOM parsing
    window.scrollTo(0, 0);
    // --- 1. ASTRONAUT 3D WELCOME SCREEN SUTRADARA ---
    const welcomeScreen = document.getElementById('welcome-screen');
    const welcomeProgress = document.getElementById('welcome-progress');
    const welcomePercent = document.getElementById('welcome-percent');
    
    if (welcomeScreen && welcomeProgress && welcomePercent) {
        // Kunci scroll saat welcome screen aktif
        document.body.classList.add('no-scroll');
        
        let progress = 0;
        const duration = 3000; // 3 seconds loading simulation
        const intervalTime = 30;
        const increment = (100 / (duration / intervalTime));
        
        const loadingInterval = setInterval(() => {
            progress += increment;
            
            if (progress >= 100) {
                progress = 100;
                clearInterval(loadingInterval);
                document.getElementById('welcome-status')
                    .textContent = "Launch successful.";
                
                // Menunggu sejenak setelah 100% lalu hilangkan welcome screen
                setTimeout(() => {
                    // Mengaktifkan CSS transition fade + blur
                    welcomeScreen.classList.add('exit'); 
                    
                    setTimeout(() => {
                        welcomeScreen.style.display = 'none';
                        document.body.classList.remove('no-scroll');
                        
                        // KUNCI RAHASIA: Memulai GSAP animasi website utama
                        document.body.classList.add('welcome-done');
                        startHeroTyping();
                    }, 800);
                }, 800);
            }
            
            // Update UI elements
            welcomeProgress.style.width = `${progress}%`;
            welcomePercent.textContent = `${Math.floor(progress)}%`;
            
        }, intervalTime);

    } else {
        // Jika tidak ada welcome screen, langsung jalankan web utama
        document.body.classList.add('welcome-done');
        startHeroTyping();
    }

    // --- 2. FUNGSI TYPING UNTUK HERO SECTION & GSAP ANIMATION ---
    function startHeroTyping() {
        
        // --- GSAP TIMELINE ---
        if (typeof gsap !== 'undefined') {
            const tl = gsap.timeline();
            
            // 1. Reveal text elements one by one from top to bottom
            tl.to('.gsap-reveal', {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out'
            });

            // 2. Reveal the 3D Spline viewer with a smooth pop effect
            tl.to('.gsap-reveal-3d', {
                scale: 1,
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: 'back.out(1.5)'
            }, "-=0.6"); // overlap slightly with text animation
            
            // 3. Start typing effect after the text containers are visible
            tl.call(initTypingEffect);
        } else {
            // Fallback: Show elements instantly if GSAP fails to load
            document.querySelectorAll('.gsap-reveal, .gsap-reveal-3d')
                .forEach(el => {
                    el.style.opacity = 1;
                    el.style.transform = 'none';
                });
            initTypingEffect();
        }

        function initTypingEffect() {
            const typingText = document.querySelector('.typing-text');
            const roles = ["Web Developer", "Mobile Developer"];
            let roleIndex = 0;
            let charIndex = 0;
            let isDeleting = false;

            function type() {
                if (!typingText) return;

                const currentRole = roles[roleIndex];
                
                if (isDeleting) {
                    typingText.textContent = 
                        currentRole.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    typingText.textContent = 
                        currentRole.substring(0, charIndex + 1);
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
            
            setTimeout(type, 500);
        }
    }

    // --- 2.5 ROTATING QUOTES ---
    const quotes = [
        { 
            text: '"Satu-satunya cara untuk melakukan pekerjaan hebat adalah dengan mencintai apa yang Anda lakukan."', 
            author: "Steve Jobs" 
        },
        { 
            text: '"Kode yang baik adalah dokumentasi terbaiknya sendiri. Seiring Anda mulai menambahkan komentar, tanyakan pada diri Anda: Bagaimana saya bisa membuat kode ini lebih mudah dipahami?"', 
            author: "Steve McConnell" 
        },
        { 
            text: '"Desain bukan sekadar apa yang terlihat dan terasa. Desain adalah bagaimana ia berfungsi."', 
            author: "Steve Jobs" 
        }
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

    // --- 5.5 ADVANCED 3D PROFILE CARD EFFECT ---
    const profileCard = document.getElementById('profile-card');
    const profileCardWrapper = document.getElementById('profile-card-wrapper');
    
    if (profileCard && profileCardWrapper) {
        let bounds;
        
        function rotateToMouse(e) {
            bounds = profileCard.getBoundingClientRect();
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            const leftX = mouseX - bounds.left;
            const topY = mouseY - bounds.top;
            
            const center = {
                x: leftX - bounds.width / 2,
                y: topY - bounds.height / 2
            };
            
            const distance = Math.sqrt(center.x ** 2 + center.y ** 2);
            
            profileCard.style.setProperty('--pointer-x', 
                `${(leftX / bounds.width) * 100}%`);
            profileCard.style.setProperty('--pointer-y', 
                `${(topY / bounds.height) * 100}%`);
            
            profileCard.style.setProperty('--pointer-from-center', 
                clamp(distance / (bounds.width / 2), 0, 1));
            profileCard.style.setProperty('--pointer-from-left', 
                clamp(leftX / bounds.width, 0, 1));
            profileCard.style.setProperty('--pointer-from-top', 
                clamp(topY / bounds.height, 0, 1));
            
            // Adjust sensitivity below. Lower multiple = less rotation.
            profileCard.style.setProperty('--rotate-x', 
                `${(center.y / 100) * -15}deg`);
            profileCard.style.setProperty('--rotate-y', 
                `${(center.x / 100) * 15}deg`);
        }
        
        const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
        
        profileCardWrapper.addEventListener('mouseenter', () => {
            bounds = profileCard.getBoundingClientRect();
            profileCard.classList.add('interacting');
            profileCard.style.setProperty('--card-opacity', 1);
        });
        
        profileCardWrapper.addEventListener('mousemove', rotateToMouse);
        
        profileCardWrapper.addEventListener('mouseleave', () => {
            profileCard.classList.remove('interacting');
            profileCard.style.setProperty('--rotate-x', '0deg');
            profileCard.style.setProperty('--rotate-y', '0deg');
            profileCard.style.setProperty('--card-opacity', 0);
            profileCard.style.setProperty('--pointer-x', '50%');
            profileCard.style.setProperty('--pointer-y', '50%');
        });
    }

    // --- 6. SCROLL PROGRESS & PARALLAX HERO ---
    const progressBar = document.getElementById('scrollProgress');
    const heroContent = document.querySelector('.hero-text-content'); 
    
    window.addEventListener('scroll', () => {
        const winScroll = 
            document.body.scrollTop || document.documentElement.scrollTop;
        const height = 
            document.documentElement.scrollHeight - 
            document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        
        if(progressBar) progressBar.style.width = scrolled + "%";

        if(heroContent && window.scrollY < window.innerHeight) {
            heroContent.style.transform = `translateY(${window.scrollY * 0.4}px)`;
            heroContent.style.opacity = 1 - (window.scrollY / 700);
        }
    });

    // --- 7. SCROLL REVEAL & SKILL BARS ---
    const reveals = document.querySelectorAll(
        '.reveal, .reveal-up, .reveal-down, .reveal-left, ' +
        '.reveal-right, .reveal-scale, .reveal-flip, ' +
        '.project-card, .tech-card, .tech-flip-card'
    );
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

    // --- 8. PROJECT FILTER ANIMATION (ENHANCED) ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('active')) return;
            
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const val = btn.getAttribute('data-filter');
            
            if (typeof gsap !== 'undefined') {
                // Animate out all cards smoothly
                gsap.to(projects, {
                    scale: 0.8,
                    y: 20,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.inOut",
                    onComplete: () => {
                        let visibleProjects = [];
                        projects.forEach(p => {
                            if (val === 'all' || p.getAttribute('data-category') === val) {
                                p.style.display = 'flex';
                                visibleProjects.push(p);
                            } else {
                                p.style.display = 'none';
                            }
                        });
                        
                        // Animate in visible cards with a stagger effect
                        if (visibleProjects.length > 0) {
                            gsap.fromTo(visibleProjects, 
                                { scale: 0.8, y: 30, opacity: 0 },
                                { scale: 1, y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.2)" }
                            );
                        }
                    }
                });
            } else {
                // Vanilla fallback
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
            }
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
                const res = await fetch('api/contact.php', { 
                    method: 'POST', 
                    body: new FormData(form) 
                });
                const result = await res.json();
                if (result.status === 'success') {
                    Swal.fire({ 
                        title: 'Success!', 
                        text: result.message, 
                        icon: 'success', 
                        background: '#0b1120', 
                        color: '#f8fafc', 
                        confirmButtonColor: '#14b8a6' 
                    });
                    form.reset();
                } else {
                    Swal.fire({ 
                        title: 'Oops...', 
                        text: result.message, 
                        icon: 'error', 
                        background: '#0b1120', 
                        color: '#f8fafc', 
                        confirmButtonColor: '#14b8a6' 
                    });
                }
            } catch (err) {
                Swal.fire({ 
                    title: 'Error!', 
                    text: 'Connection failed.', 
                    icon: 'error', 
                    background: '#0b1120', 
                    color: '#f8fafc', 
                    confirmButtonColor: '#14b8a6' 
                });
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

    if (hamburger) hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        hamburger.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    // Close menu when a link is clicked
    const navItems = navLinks.querySelectorAll('a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('show');
            hamburger.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
    
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
            const next = html.getAttribute('data-theme') === 'dark' 
                ? 'light' 
                : 'dark';
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

    // --- 11. INITIALIZE TSPARTICLES (Meteor Shower / Starfall) ---
    if (typeof tsParticles !== 'undefined') {
        tsParticles.load("tsparticles", {
            background: {
                color: { value: "transparent" },
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "repulse", // Meteors scatter when cursor approaches
                    },
                    resize: true,
                },
                modes: {
                    repulse: {
                        distance: 120,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: ["#ffffff", "#6366f1", "#14b8a6", "#e2e8f0"],
                },
                links: {
                    enable: false,
                },
                move: {
                    direction: "none", 
                    enable: true,
                    outModes: {
                        default: "out",
                    },
                    random: true,
                    speed: { min: 0.5, max: 2 },
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 120, // Optimized for smooth 60fps
                },
                opacity: {
                    value: { min: 0.5, max: 1 },
                    animation: {
                        enable: true,
                        speed: 0.5,
                        minimumValue: 0.3,
                        sync: false
                    }
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1.5, max: 4 }, 
                }
            },
            detectRetina: true,
        });
    }

    // --- 12. GOOEY BUTTON EFFECT ---
    const gooeyBtns = document.querySelectorAll('.gooey-btn'); 
    
    gooeyBtns.forEach(btn => {
        // Tambahkan div gooey-bg ke dalam tombol
        if (!btn.querySelector('.gooey-bg')) {
            const bg = document.createElement('div');
            bg.className = 'gooey-bg';
            btn.appendChild(bg);
        }

        // Lacak kursor mouse
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            btn.style.setProperty('--x', x);
            btn.style.setProperty('--y', y);
        });

        // Kembalikan ke tengah saat mouse pergi
        btn.addEventListener('mouseleave', () => {
            btn.style.setProperty('--x', 50);
            btn.style.setProperty('--y', 50);
        });
    });

    // --- 12.5 TEXT GLOW CURSOR EFFECT ---
    const textGlows = document.querySelectorAll('.text-glow-cursor');
    textGlows.forEach(textEl => {
        textEl.addEventListener('mousemove', (e) => {
            const rect = textEl.getBoundingClientRect();
            // Calculate mouse position relative to the text element in pixels
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            textEl.style.setProperty('--x', `${x}px`);
            textEl.style.setProperty('--y', `${y}px`);
        });
        
        textEl.addEventListener('mouseleave', () => {
            // Optional: reset to center or let it stay at last position
            textEl.style.setProperty('--x', `50%`);
            textEl.style.setProperty('--y', `50%`);
        });
    });

    // --- 13. TIMELINE GSAP ANIMATION ---
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Animate each timeline card coming in from left
        gsap.utils.toArray(".timeline-card").forEach((card) => {
            gsap.from(card, {
                xPercent: -50,
                opacity: 0,
                transformOrigin: "left left",
                duration: 1,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                },
            });
        });

        // Animate the timeline mask as user scrolls
        gsap.utils.toArray(".timeline").forEach((timeline) => {
            gsap.to(timeline, {
                transformOrigin: "bottom bottom",
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: timeline.closest('.timeline-wrapper'),
                    start: "top center",
                    end: "70% center",
                    onUpdate: (self) => {
                        gsap.to(timeline, {
                            scaleY: 1 - self.progress,
                        });
                    },
                },
            });
        });

        // Animate expText elements
        gsap.utils.toArray(".expText").forEach((text) => {
            gsap.from(text, {
                opacity: 0,
                /* Slight translation instead of xPercent: 0 for smoother effect */
                x: 20, 
                duration: 1,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: text,
                    start: "top 60%",
                },
            });
        });
    }

    // --- 15. CONTACT FORM AJAX EMAIL SENDER ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const submitBtn = document.getElementById('submitBtn');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i data-lucide="loader-2" class="icon-sm spin"></i> Mengirim...';
            submitBtn.disabled = true;

            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }

            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());
            data._subject = `Pesan Baru dari Portfolio: ${data.subject}`;
            data._captcha = false;
            data._template = "basic";

            fetch('https://formsubmit.co/ajax/nosaclp4@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(result => {
                if (result.success === 'true' || result.success === true) {
                    Swal.fire({
                        title: 'Terkirim!',
                        text: 'Pesan Anda berhasil diteruskan ke Email saya.',
                        icon: 'success',
                        background: '#0e0e10',
                        color: '#fff',
                        confirmButtonColor: '#c084fc'
                    });
                    contactForm.reset();
                } else {
                    throw new Error(result.message || 'Terjadi kesalahan sistem.');
                }
            })
            .catch(error => {
                Swal.fire({
                    title: 'Gagal Mengirim',
                    text: 'Pastikan koneksi internet Anda stabil. (' + error.message + ')',
                    icon: 'error',
                    background: '#0e0e10',
                    color: '#fff',
                    confirmButtonColor: '#c084fc'
                });
            })
            .finally(() => {
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            });
        });
    }

});