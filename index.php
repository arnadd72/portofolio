<!DOCTYPE html>
<html lang="id" data-theme="dark">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Combined title -->
    <title>Arnanda Setya Nosa Putra | Terminal & Portfolio</title>
    
    <!-- CSS Dependencies from index.html (Terminal) -->
    <script src="https://unpkg.com/lucide@latest"></script>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">

    <!-- CSS Dependencies from header.php (Portfolio) -->
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/home.css">
    <link rel="stylesheet" href="assets/css/about.css">
    <link rel="stylesheet" href="assets/css/projects.css">
    <link rel="stylesheet" href="assets/css/animations.css">
    <link rel="stylesheet" href="assets/css/welcome.css">
    <link rel="stylesheet" href="assets/css/space.css"> <!-- Custom Space Art -->
    <link rel="stylesheet" href="assets/css/gooey-buttons.css"> <!-- Gooey Button Animation -->
    
    <!-- SweetAlert2 (Portfolio) -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <!-- AOS (Portfolio) -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
</head>

<!-- Body uses no-scroll initially while terminal is present -->
<body class="no-scroll">

    <!-- Global Background Color Fallback (behind particles) -->
    <div style="position: fixed; inset: 0; background-color: var(--bg-main); z-index: -999;"></div>

    <!-- PURE METEOR SHOWER BACKGROUND CONTAINER -->
    <div class="galaxy-bg" style="position: fixed; inset: 0; z-index: -3; background: var(--bg-main);"></div>

    <!-- INTERACTIVE SPACE BACKGROUND (tsParticles) -->
    <div id="tsparticles" style="position: fixed; inset: 0; z-index: 0; pointer-events: none;"></div>

    <?php include 'includes/sections/welcome.html'; ?>
    
    <!-- Navbar from header.php -->
    <nav class="navbar">
        <div class="nav-container">
            <a href="#" class="logo">ASN<span class="text-primary">.P</span></a>
            <div class="nav-links">
                <a href="#hero" class="nav-link">Home</a>
                <a href="#about" class="nav-link">Tentang</a>
                <a href="#tech" class="nav-link">Tech</a>
                <a href="#projects" class="nav-link">Proyek</a>
                <a href="#contact" class="nav-link">Kontak</a>
                <button id="theme-toggle" class="theme-btn magnetic-el btn-icon" aria-label="Toggle Theme">
                    <i data-lucide="sun" class="icon-sm"></i>
                </button>
            </div>
            <div class="hamburger" id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <!-- Progress Bar from header.php -->
    <div class="scroll-progress-container">
        <div class="scroll-progress-bar" id="scrollProgress"></div>
    </div>
    
    <!-- Main Sections -->
    <main>
        <?php include 'includes/sections/home.html'; ?>
        <?php include 'includes/sections/about.html'; ?>
        <?php include 'includes/sections/tech.html'; ?>
        <?php include 'includes/sections/projects.html'; ?>
        <?php include 'includes/sections/contact.html'; ?>
    </main>

    <!-- Footer from footer.php -->
    <footer class="footer">
        <div class="container text-center">
            <p>&copy; <?= date('Y') ?> Arnanda Setya Nosa Putra. All rights reserved.</p>
            <p class="mt-1 text-sm text-muted" style="display:flex; align-items:center; justify-content:center;">
                Dibuat dengan <i data-lucide="heart" style="width:16px; height:16px; margin:0 4px; color:var(--primary);"></i> di Indonesia
            </p>
        </div>
    </footer>

    <!-- Library Scripts (MUST load before main.js) -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/tsparticles@3.3.0/tsparticles.bundle.min.js"></script>

    <!-- Core Scripts (loads AFTER all libraries) -->
    <script src="assets/js/main.js"></script>

    <!-- SVG Goo Filter for Gooey Buttons -->
    <svg width="0" height="0" style="position: absolute;">
        <filter id="goo" x="-50%" y="-50%" width="200%" height="200%">
            <feComponentTransfer>
                <feFuncA type="discrete" tableValues="0 1"/>
            </feComponentTransfer>
            <feGaussianBlur stdDeviation="5"/>
            <feComponentTransfer>
                <feFuncA type="table" tableValues="-5 11"/>
            </feComponentTransfer>
        </filter>
    </svg>

    <script>
        lucide.createIcons();
        AOS.init({ duration: 800, once: false, mirror: true });

        // Gooey buttons: inject background layer + cursor tracking
        document.querySelectorAll('.gooey-btn').forEach(btn => {
            // Inject .gooey-bg span (receives SVG filter, keeps text crisp)
            if (!btn.querySelector('.gooey-bg')) {
                const bg = document.createElement('span');
                bg.className = 'gooey-bg';
                bg.setAttribute('aria-hidden', 'true');
                btn.insertBefore(bg, btn.firstChild);
            }
            // Cursor tracking — blob follows mouse position
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                btn.style.setProperty('--x', x);
                btn.style.setProperty('--y', y);
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.setProperty('--x', 50);
                btn.style.setProperty('--y', 50);
            });
        });
    </script>
</body>
</html>
