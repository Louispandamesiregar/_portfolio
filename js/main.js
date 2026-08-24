/* ==========================================
   MAIN JAVASCRIPT
   Core logic: navigation, scroll effects,
   typing animation, stats counter, and more
   ========================================== */

(function () {
    'use strict';

    // ========================================
    // LOADER
    // ========================================
    const loader = document.getElementById('loader');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            if (loader) {
                loader.classList.add('hidden');
                document.body.style.overflow = '';
            }
        }, 2200);
    });

    // Prevent scrolling during load
    document.body.style.overflow = 'hidden';

    // ========================================
    // CUSTOM CURSOR
    // ========================================
    const cursorDot = document.getElementById('cursor-dot');
    const cursorOutline = document.getElementById('cursor-outline');

    if (cursorDot && cursorOutline) {
        let cursorX = 0, cursorY = 0;
        let outlineX = 0, outlineY = 0;

        document.addEventListener('mousemove', (e) => {
            cursorX = e.clientX;
            cursorY = e.clientY;
        });

        function animateCursor() {
            // Dot follows immediately
            cursorDot.style.transform = `translate(${cursorX - 4}px, ${cursorY - 4}px)`;

            // Outline follows with delay
            outlineX += (cursorX - outlineX) * 0.12;
            outlineY += (cursorY - outlineY) * 0.12;
            cursorOutline.style.transform = `translate(${outlineX - 20}px, ${outlineY - 20}px)`;

            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Hover effect on interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-category, .tech-icon, input, textarea');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursorOutline.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursorOutline.classList.remove('hover'));
        });
    }

    // ========================================
    // NAVBAR
    // ========================================
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Mobile toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu on link click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNav() {
        const scrollY = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('data-section') === sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);

    // ========================================
    // SMOOTH SCROLLING
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // ========================================
    // SCROLL-TRIGGERED ANIMATIONS
    // ========================================
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Staggered delay for sibling elements
                const siblings = entry.target.parentElement?.querySelectorAll('.animate-on-scroll');
                let delay = 0;
                if (siblings) {
                    const idx = Array.from(siblings).indexOf(entry.target);
                    delay = idx * 100;
                }
                
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);

                scrollObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => scrollObserver.observe(el));

    // ========================================
    // FAQ ACCORDION LOGIC
    // ========================================
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all others
            faqItems.forEach(faq => {
                faq.classList.remove('active');
                const ans = faq.querySelector('.faq-answer');
                if (ans) ans.style.maxHeight = null;
            });
            
            if (!isActive) {
                item.classList.add('active');
                const answer = item.querySelector('.faq-answer');
                if (answer) {
                    answer.style.maxHeight = answer.scrollHeight + "px";
                }
            }
        });
    });

    // ========================================
    // TYPING ANIMATION
    // ========================================
    const typingElement = document.getElementById('typing-text');
    if (typingElement) {
        const phrases = [
            'Web Developer',
            'UI/UX Designer',
            'Freelancer',
            'Creative Coder',
            'Problem Solver'
        ];

        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;

        function typeWriter() {
            const currentPhrase = phrases[phraseIndex];

            if (isDeleting) {
                typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                isDeleting = true;
                typingSpeed = 2000; // Pause before deleting
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typingSpeed = 500; // Pause before new phrase
            }

            setTimeout(typeWriter, typingSpeed);
        }

        // Start after loader
        setTimeout(typeWriter, 2500);
    }

    // ========================================
    // STATS COUNTER ANIMATION
    // ========================================
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');

    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        function update() {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                return;
            }
            element.textContent = Math.floor(current);
            requestAnimationFrame(update);
        }

        update();
    }

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => statsObserver.observe(el));

    // ========================================
    // SKILL BAR ANIMATION
    // ========================================
    const skillBars = document.querySelectorAll('.skill-bar-fill');

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.width = width + '%';
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    skillBars.forEach(bar => skillObserver.observe(bar));

    // ========================================
    // SCROLL INDICATOR HIDE
    // ========================================
    const scrollIndicator = document.getElementById('scroll-indicator');
    if (scrollIndicator) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.pointerEvents = 'none';
            } else {
                scrollIndicator.style.opacity = '1';
                scrollIndicator.style.pointerEvents = 'auto';
            }
        });
    }

    // ========================================
    // BACK TO TOP
    // ========================================
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ========================================
    // CONTACT FORM
    // ========================================
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = document.getElementById('submit-btn');
            const originalContent = submitBtn.innerHTML;

            // Show sending state
            submitBtn.innerHTML = '<span>Mengirim...</span>';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';

            // Simulate send (replace with actual form handler like Formspree, EmailJS, etc.)
            setTimeout(() => {
                submitBtn.innerHTML = `
                    <span>Pesan Terkirim! ✓</span>
                `;
                submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';

                // Reset after delay
                setTimeout(() => {
                    submitBtn.innerHTML = originalContent;
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '1';
                    submitBtn.style.background = '';
                    contactForm.reset();
                }, 3000);
            }, 1500);
        });

        // Input focus effects
        const formInputs = document.querySelectorAll('.form-input');
        formInputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });
            input.addEventListener('blur', () => {
                input.parentElement.classList.remove('focused');
            });
        });
    }

    // ========================================
    // PARALLAX ON SCROLL
    // ========================================
    const floatingShapes = document.querySelectorAll('.floating-shape');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        floatingShapes.forEach((shape, i) => {
            const speed = (i + 1) * 0.03;
            shape.style.transform = `translateY(${scrollY * speed}px) rotate(${scrollY * speed * 2}deg)`;
        });
    });

    // ========================================
    // IMAGE LAZY LOAD ENHANCEMENT
    // ========================================
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
        
        // If already loaded (cached)
        if (img.complete) {
            img.style.opacity = '1';
        }
    });

    // ========================================
    // PERFORMANCE: Request Animation Frame throttle
    // ========================================
    let ticking = false;
    
    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateActiveNav();
                ticking = false;
            });
            ticking = true;
        }
    }

    // Replace scroll listener for active nav
    window.removeEventListener('scroll', updateActiveNav);
    window.addEventListener('scroll', onScroll, { passive: true });

    // ========================================
    // MOBILE SWIPE & SNAP LOGIC
    // ========================================
    function initSwipeSnaps() {
        const grids = [
            { grid: document.querySelector('.skills-grid'), dots: document.getElementById('skills-dots') },
            { grid: document.querySelector('.services-grid'), dots: document.getElementById('services-dots') },
            { grid: document.querySelector('.pricing-grid'), dots: document.getElementById('pricing-dots') }
        ];

        grids.forEach(item => {
            if (!item.grid || !item.dots) return;

            // Trigger shake hint when element comes into view (on mobile)
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && window.innerWidth <= 768) {
                        const firstCard = item.grid.children[0];
                        if (firstCard && !firstCard.classList.contains('shake-hint')) {
                            firstCard.classList.add('shake-hint');
                        }
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            observer.observe(item.grid);

            // Setup dots based on number of children
            const numCards = item.grid.children.length;
            item.dots.innerHTML = '';
            for (let i = 0; i < numCards; i++) {
                const dot = document.createElement('div');
                dot.className = 'swipe-dot' + (i === 0 ? ' active' : '');
                item.dots.appendChild(dot);
            }

            // Update dots on scroll
            item.grid.addEventListener('scroll', () => {
                if (window.innerWidth > 768) return;
                
                // Hapus animasi goyang jika pengguna sudah mengerti cara menggesernya
                const firstCard = item.grid.children[0];
                if (firstCard && firstCard.classList.contains('shake-hint')) {
                    firstCard.classList.remove('shake-hint');
                }

                const scrollLeft = item.grid.scrollLeft;
                const cardWidth = item.grid.children[0].offsetWidth;
                const activeIndex = Math.round(scrollLeft / cardWidth);

                const dots = item.dots.querySelectorAll('.swipe-dot');
                dots.forEach((dot, index) => {
                    if (index === activeIndex) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
            }, { passive: true });
        });
    }

    initSwipeSnaps();

})();
