document.addEventListener("DOMContentLoaded", () => {
        const targetSelectors = [
             '.project-card', 
             '.tech-card', 
             '.tech-flip-card', 
             '.about-card', 
             '.welcome-card', 
             '.timeline-card-glow-inner',
             '.about-content-wrapper'
        ];
    
    const allCards = Array.from(new Set(document.querySelectorAll(targetSelectors.join(', '))));
    
    allCards.forEach((card) => {
        if (!card.classList.contains('glow-card')) {
            card.classList.add('glow-card');
        }
        
        if (!card.querySelector('.glow')) {
            const glowEl = document.createElement('div');
            glowEl.className = 'glow';
            card.appendChild(glowEl);
        }

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const mouseX = e.clientX - rect.left - rect.width / 2;
            const mouseY = e.clientY - rect.top - rect.height / 2;

            let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

            angle = (angle + 360) % 360;

            card.style.setProperty("--start", `${angle + 270}deg`);
        });
    });
});
