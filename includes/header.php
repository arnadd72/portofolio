<?php
// includes/header.php
?>
<!DOCTYPE html>
<html lang="id" data-theme="dark">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arnanda Setya | Premium Portfolio</title>

    <link rel="stylesheet" href="assets/css/main.css?v=<?= time(); ?>">
    <link rel="stylesheet" href="assets/css/animations.css?v=<?= time(); ?>">
    <link rel="stylesheet" href="assets/css/welcome.css?v=<?= time(); ?>">
    <link rel="stylesheet" href="assets/css/home.css?v=<?= time(); ?>">
    <link rel="stylesheet" href="assets/css/about.css?v=<?= time(); ?>">
    <link rel="stylesheet" href="assets/css/projects.css?v=<?= time(); ?>">
</head>

<body>


    <div class="scroll-progress-container">
        <div class="scroll-progress-bar" id="scrollProgress"></div>
    </div>

    <div class="animated-bg"></div>

    <header class="navbar glass magnetic-wrap">
        <div class="nav-container">
            <a href="#" class="logo magnetic-el">Arn<span>anda</span></a>
            <nav class="nav-links">
                <a href="#hero" class="nav-link">Home</a>
                <a href="#about" class="nav-link">About</a>
                <a href="#tech" class="nav-link">Tech</a>
                <a href="#projects" class="nav-link">Projects</a>
                <a href="#contact" class="nav-link">Contact</a>
                <button id="theme-toggle" class="btn-icon magnetic-el">
                    <i data-lucide="moon" class="icon-sm"></i>
                </button>
            </nav>
            <button class="hamburger" id="hamburger">
                <span></span><span></span><span></span>
            </button>
        </div>
    </header>