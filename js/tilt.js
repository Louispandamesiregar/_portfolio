/* ==========================================
   3D TILT EFFECT
   Parallax tilt on hover for cards
   ========================================== */

(function () {
    'use strict';

    const tiltElements = document.querySelectorAll('[data-tilt]');
    if (!tiltElements.length) return;

    // Skip on mobile/touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    const config = {
        maxTilt: 8,         // max tilt degrees
        speed: 400,         // transition speed
        glare: true,        // enable glare effect
        maxGlare: 0.15,     // max glare opacity
        scale: 1.02,        // scale on hover
        perspective: 1000   // perspective in px
    };

    tiltElements.forEach(element => {
        let glareElement = null;

        // Setup
        element.style.transformStyle = 'preserve-3d';
        element.style.willChange = 'transform';

        // Create glare overlay
        if (config.glare) {
            const glareWrap = document.createElement('div');
            glareWrap.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;
                pointer-events: none;
                border-radius: inherit;
                z-index: 10;
            `;

            glareElement = document.createElement('div');
            glareElement.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                width: 200%;
                height: 200%;
                transform: translate(-50%, -50%) rotate(0deg);
                background: linear-gradient(
                    0deg,
                    rgba(255, 255, 255, 0) 0%,
                    rgba(255, 255, 255, ${config.maxGlare}) 100%
                );
                opacity: 0;
                transition: opacity 0.3s ease;
                pointer-events: none;
            `;

            glareWrap.appendChild(glareElement);
            element.style.position = 'relative';
            element.style.overflow = 'hidden';
            element.appendChild(glareWrap);
        }

        // Mouse enter
        element.addEventListener('mouseenter', () => {
            element.style.transition = `transform ${config.speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`;
            if (glareElement) glareElement.style.opacity = '1';
        });

        // Mouse move
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const percentX = (x - centerX) / centerX;
            const percentY = (y - centerY) / centerY;

            const tiltX = -percentY * config.maxTilt;
            const tiltY = percentX * config.maxTilt;

            element.style.transform = `
                perspective(${config.perspective}px)
                rotateX(${tiltX}deg)
                rotateY(${tiltY}deg)
                scale3d(${config.scale}, ${config.scale}, ${config.scale})
            `;

            // Update glare
            if (glareElement) {
                const angle = Math.atan2(percentY, percentX) * (180 / Math.PI) - 90;
                glareElement.style.transform = `
                    translate(-50%, -50%)
                    rotate(${angle}deg)
                `;
                const distance = Math.sqrt(percentX * percentX + percentY * percentY);
                glareElement.style.opacity = Math.min(distance, 1).toString();
            }
        });

        // Mouse leave
        element.addEventListener('mouseleave', () => {
            element.style.transition = `transform ${config.speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`;
            element.style.transform = `
                perspective(${config.perspective}px)
                rotateX(0deg)
                rotateY(0deg)
                scale3d(1, 1, 1)
            `;

            if (glareElement) {
                glareElement.style.opacity = '0';
            }
        });
    });

})();
