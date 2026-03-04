<!DOCTYPE html>
<html lang="id" data-theme="dark">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Combined title -->
    <title>Arnanda Setya Nosa Putra | Terminal & Portfolio</title>
    
    <!-- CSS Dependencies from index.html (Terminal) -->
    <script src="https://unpkg.com/lucide@latest"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">

    <!-- CSS Dependencies from header.php (Portfolio) -->
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/home.css">
    <link rel="stylesheet" href="assets/css/about.css">
    <link rel="stylesheet" href="assets/css/projects.css">
    <link rel="stylesheet" href="assets/css/animations.css">
    <link rel="stylesheet" href="assets/css/welcome.css">
    <link rel="stylesheet" href="assets/css/contact.css">
    <link rel="stylesheet" href="assets/css/space.css"> <!-- Custom Space Art -->
    <link rel="stylesheet" href="assets/css/glow.css"> <!-- 3D Mouse Tracking Glow -->
    
    <!-- SweetAlert2 (Portfolio) -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <!-- AOS (Portfolio) -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
</head>

<!-- Body uses no-scroll initially while terminal is present -->
<body class="no-scroll">

    <!-- Global Background Color Fallback (behind particles) -->
    <div style="position: fixed; inset: 0; background-color: #090e17; z-index: -999;"></div>

    <!-- PURE METEOR SHOWER BACKGROUND CONTAINER -->
    <div class="galaxy-bg" style="position: fixed; inset: 0; z-index: -3;"></div>

    <!-- INTERACTIVE SPACE BACKGROUND (tsParticles) -->
    <div id="tsparticles" style="position: fixed; inset: 0; z-index: 0; pointer-events: none;"></div>

    <?php include 'includes/sections/welcome.html'; ?>
    
    <!-- Navbar from header.php -->
    <nav class="navbar">
        <div class="nav-container">
            <a href="#" class="logo">ASNP<span class="text-primary"></span></a>
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
    <script src="assets/js/glow.js"></script>

    <script>
        lucide.createIcons();
        AOS.init({ duration: 800, once: false, mirror: true });
    </script>
</body>
</html>
