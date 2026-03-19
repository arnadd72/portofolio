<!DOCTYPE html>
<html lang="id" data-theme="dark">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arnanda Setya Nosa Putra | Terminal & Portfolio</title>
    
    <script src="https://unpkg.com/lucide@latest"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/home.css">
    <link rel="stylesheet" href="assets/css/about.css">
    <link rel="stylesheet" href="assets/css/projects.css">
    <link rel="stylesheet" href="assets/css/animations.css">
    <link rel="stylesheet" href="assets/css/welcome.css">
    <link rel="stylesheet" href="assets/css/contact.css">
    <link rel="stylesheet" href="assets/css/space.css">
    <link rel="stylesheet" href="assets/css/glow.css">
    
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
</head>

<body class="no-scroll">

    <div style="position: fixed; inset: 0; background-color: #090e17; z-index: -999;"></div>

    <div class="galaxy-bg" style="position: fixed; inset: 0; z-index: -3;"></div>

    <div id="tsparticles" style="position: fixed; inset: 0; z-index: 0; pointer-events: none;"></div>

    <?php include 'includes/sections/welcome.html'; ?>
    
    <nav class="navbar">
        <div class="nav-container">
            <a href="#" class="logo">ASNP<span class="text-primary"></span></a>
            <div class="nav-links">
                <a href="#hero" class="nav-link">Home</a>
                <a href="#about" class="nav-link">Tentang</a>
                <a href="#tech" class="nav-link">Tech</a>
                <a href="#projects" class="nav-link">Proyek</a>
                <a href="#contact" class="nav-link">Kontak</a>
            </div>
            <div class="hamburger" id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <div class="scroll-progress-container">
        <div class="scroll-progress-bar" id="scrollProgress"></div>
    </div>
    
    <main>
        <?php include 'includes/sections/home.html'; ?>
        <?php include 'includes/sections/about.html'; ?>
        <?php include 'includes/sections/tech.html'; ?>
        <?php include 'includes/sections/projects.html'; ?>
        <?php include 'includes/sections/contact.html'; ?>
    </main>

    <footer class="footer">
        <div class="container text-center">
            <p>&copy; <?= date('Y') ?> Arnanda Setya Nosa Putra. All rights reserved.</p>
        </div>
    </footer>

    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/tsparticles@3.3.0/tsparticles.bundle.min.js"></script>

    <script src="assets/js/ajax.js"></script>
    <script src="assets/js/main.js"></script>
    <script src="assets/js/glow.js"></script>

    <script>
        lucide.createIcons();
        AOS.init({ duration: 800, once: false, mirror: true });
    </script>
</body>
</html>
