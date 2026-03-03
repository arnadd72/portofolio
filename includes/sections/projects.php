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
                <div class="project-card glass hover-lift hover-glow <?= $delayClass ?>"
                    data-aos="zoom-in-up" data-aos-anchor-placement="top-center" data-aos-duration="800"
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
                                target="_blank" class="link-btn magnetic-el" style="display:flex; align-items:center;">
                                <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png" 
                                     alt="Demo" style="width:20px; height:20px; margin-right:6px;" /> Demo
                            </a>
                            <a href="<?= htmlspecialchars($proj['github_link']) ?>"
                                target="_blank"
                                class="link-btn outline magnetic-el" style="display:flex; align-items:center;">
                                <img src="https://skillicons.dev/icons?i=github" 
                                     alt="GitHub" style="width:20px; height:20px; margin-right:6px; border-radius:50%;" /> GitHub
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