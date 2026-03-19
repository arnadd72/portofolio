<?php
?>
<footer class="glass footer text-center p-2 mt-4 reveal-up">
    <div class="container" style="padding: 30px 0;">
        <div class="footer-social" style="display: flex; justify-content: center; gap: 20px; margin-bottom: 15px;">
            <a href="https://github.com/" target="_blank" class="nav-link" style="color: var(--text-muted);">
                <i data-lucide="github" style="width: 22px; height: 22px;"></i>
            </a>
            <a href="https://linkedin.com/" target="_blank" class="nav-link" style="color: var(--text-muted);">
                <i data-lucide="linkedin" style="width: 22px; height: 22px;"></i>
            </a>
            <a href="https://instagram.com/" target="_blank" class="nav-link" style="color: var(--text-muted);">
                <i data-lucide="instagram" style="width: 22px; height: 22px;"></i>
            </a>
            <a href="mailto:arnanda@example.com" class="nav-link" style="color: var(--text-muted);">
                <i data-lucide="mail" style="width: 22px; height: 22px;"></i>
            </a>
        </div>
        <p style="color: var(--text-muted); font-size: 0.9rem;">
            &copy; <?= date('Y') ?> Arnanda Setya Nosa Putra.
        </p>
    </div>
</footer>

<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

<script src="https://unpkg.com/lucide@latest"></script>
<script>
    lucide.createIcons();
</script>

<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
    AOS.init({
        duration: 800,
        once: false,
        mirror: true
    });
</script>

<script src="assets/js/main.js" defer></script>
</body>

</html>