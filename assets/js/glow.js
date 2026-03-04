// assets/js/glow.js

document.addEventListener("DOMContentLoaded", () => {
        // Select all cards to inject the glow effect into
        const targetSelectors = [
             '.project-card', 
             '.tech-card', 
             '.tech-flip-card', 
             '.about-card', 
             '.welcome-card', 
             '.timeline-card-glow-inner',
             '.about-content-wrapper'
        ];
    
    // Using a set to avoid duplicating if a card matches multiple selectors
    const allCards = Array.from(new Set(document.querySelectorAll(targetSelectors.join(', '))));
    
    allCards.forEach((card) => {
        // Ensure card has the glow-card base class
        if (!card.classList.contains('glow-card')) {
            card.classList.add('glow-card');
        }
        
        // Add the glow div inside the card if it doesn't exist
        if (!card.querySelector('.glow')) {
            const glowEl = document.createElement('div');
            glowEl.className = 'glow';
            card.appendChild(glowEl);
        }

        // Add mousemove event listener to track angle
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            // Get mouse position relative to the center of the card
            const mouseX = e.clientX - rect.left - rect.width / 2;
            const mouseY = e.clientY - rect.top - rect.height / 2;

            // Calculate the angle from the center of the card to the mouse.
            let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

            // Adjust the angle so that it's between 0 and 360
            angle = (angle + 360) % 360;

            // Set the angle as a CSS variable `--start`
            // We use a 270-degree offset (+90 degree CSS offset, +180 degree flip)
            // so the gradient beam correctly points AT the mouse cursor instead of away.
            card.style.setProperty("--start", `${angle + 270}deg`);
        });
    });
});
