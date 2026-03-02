<?php
// includes/sections/tech.php

$tech_stack = [
    ['name' => 'HTML5', 'icon' => 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'],
    ['name' => 'CSS3', 'icon' => 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'],
    ['name' => 'JavaScript', 'icon' => 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'],
    ['name' => 'Tailwind', 'icon' => 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'],
    ['name' => 'React', 'icon' => 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'],
    ['name' => 'PHP', 'icon' => 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg'], 
    ['name' => 'MySQL', 'icon' => 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg'],
    ['name' => 'Firebase', 'icon' => 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg'],
    ['name' => 'Laravel', 'icon' => 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg'],
    ['name' => 'Flutter', 'icon' => 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg']
];
?>
<section id="tech" class="section">
    <div class="container">
        <h2 class="section-title text-center reveal-down">Tech <span>Stack</span></h2>
        
        <!-- Forced 5 column grid on desktop -->
        <div class="tech-grid mt-3 tech-grid-5">
            
            <?php 
            $delay = 100;
            foreach ($tech_stack as $tech): 
                $delayClass = "delay-" . min($delay, 500);
            ?>
                <!-- Added tech-hover-float for extra floating animation -->
                <div class="tech-flip-card tech-hover-float reveal-up <?= $delayClass ?>">
                    <div class="tech-flip-inner">
                        <div class="tech-flip-front glass">
                            <!-- Image container fetching from external CDN -->
                            <div class="tech-icon-wrapper" data-fallback="<?= substr($tech['name'], 0, 2) ?>">
                                <img src="<?= htmlspecialchars($tech['icon']) ?>" 
                                     alt="<?= htmlspecialchars($tech['name']) ?>"
                                     onerror="this.style.display='none'; this.parentNode.classList.add('show-fallback');"
                                     style="width: 65px; height: 65px; object-fit: contain;">
                            </div>
                        </div>
                        <div class="tech-flip-back glass">
                            <h3 class="tech-name"><?= htmlspecialchars($tech['name']) ?></h3>
                        </div>
                    </div>
                </div>
            <?php 
                $delay += 100;
                if ($delay > 500) $delay = 100; // Reset stagger for the second row
            endforeach; 
            ?>

        </div>
    </div>
</section>