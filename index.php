<?php
// index.php

// 1. Panggil data proyek (sebagai pengganti database)
require_once 'includes/data.php';

// 2. Panggil bagian Header (Navigasi, Kursor Dewa, Tag Meta)
include 'includes/header.php';
?>

<?php include 'includes/sections/welcome.php'; ?>

<main>
    <?php include 'includes/sections/home.php'; ?>

    <?php include 'includes/sections/about.php'; ?>

    <?php include 'includes/sections/tech.php'; ?>

    <?php include 'includes/sections/projects.php'; ?>

    <?php include 'includes/sections/contact.php'; ?>

</main>

<?php include 'includes/footer.php'; ?>