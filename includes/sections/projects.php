<?php
// includes/sections/projects.php
// Variabel $projects sudah dipanggil dari data.php di index.php utama
?>
<section id="projects" class="section">
    <div class="container">
        <div class="reveal-down">
            <h2 class="section-title text-center">Proyek <span>Saya</span></h2>
            
            <div class="filter-container text-center mt-2">
                <button class="filter-btn active magnetic-el"
                    data-filter="all">Semua</button>
                <button class="filter-btn magnetic-el"
                    data-filter="Web">Web</button>
                <button class="filter-btn magnetic-el"
                    data-filter="API">API</button>
            </div>
        </div>

        <div class="project-grid mt-3">
            <?php 
            $index = 0;
            foreach ($projects as $proj): 
                $delayClass = "delay-" . (($index % 5 + 1) * 100); 
            ?>
                <div class="project-card glass hover-lift hover-glow reveal-up <?= $delayClass ?>"
                    data-category="<?= htmlspecialchars($proj['category']) ?>">

                    <div class="project-img-wrapper">
                        <img src="assets/img/<?= htmlspecialchars($proj['image_url']) ?>"
                            alt="Thumbnail" loading="lazy"
                            class="project-img">
                    </div>

                    <div class="project-info">
                        <h3><?= htmlspecialchars($proj['title']) ?></h3>
                        <p class="text-sm mt-1">
                            <?= htmlspecialchars($proj['description']) ?>
                        </p>

                        <div class="tech-tags mt-1">
                            <?php
                            $tags = explode(',', $proj['tech_stack']);
                            foreach ($tags as $tag):
                            ?>
                                <span class="tag">
                                    <?= htmlspecialchars(trim($tag)) ?>
                                </span>
                            <?php
                                $index++;
                            endforeach; ?>
                        </div>

                        <div class="project-links mt-2">
                            <a href="<?= htmlspecialchars($proj['demo_link']) ?>"
                                target="_blank" class="link-btn magnetic-el">
                                <i data-lucide="external-link"
                                    class="icon-sm"></i> Demo
                            </a>
                            <a href="<?= htmlspecialchars($proj['github_link']) ?>"
                                target="_blank"
                                class="link-btn outline magnetic-el">
                                <i data-lucide="github"
                                    class="icon-sm"></i> GitHub
                            </a>
                        </div>
                    </div>
                </div>
            <?php 
            endforeach; 
            ?>
        </div>
    </div>
</section>