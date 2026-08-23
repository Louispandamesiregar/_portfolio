/* ==========================================
   INTERNATIONALIZATION (i18n)
   Language toggle system: Indonesian ↔ English
   ========================================== */

(function () {
    'use strict';

    const translations = {
        // === Loader ===
        'loader-text': {
            id: 'Memuat pengalaman...',
            en: 'Loading experience...'
        },

        // === Navigation ===
        'nav-services': {
            id: 'Layanan',
            en: 'Services'
        },
        'nav-cta': {
            id: 'Hire Me',
            en: 'Hire Me'
        },

        // === Hero ===
        'hero-greeting': {
            id: "Hello, I'm",
            en: "Hello, I'm"
        },
        'hero-badge': {
            id: 'Available for Freelance',
            en: 'Available for Freelance'
        },
        'hero-description': {
            id: 'Membangun website modern & berkinerja tinggi yang mengubah visi bisnis Anda menjadi pengalaman digital yang memukau.',
            en: 'Building modern & high-performance websites that transform your business vision into stunning digital experiences.'
        },
        'hero-cta-primary': {
            id: 'Lihat Karya Saya',
            en: 'View My Work'
        },
        'hero-cta-secondary': {
            id: 'Hubungi Saya',
            en: 'Contact Me'
        },
        'scroll-indicator': {
            id: 'Scroll Down',
            en: 'Scroll Down'
        },

        // === About Section ===
        'about-title': {
            id: 'Tentang <span class="gradient-text">Saya</span>',
            en: 'About <span class="gradient-text">Me</span>'
        },
        'about-subtitle': {
            id: 'Mengenal lebih dekat siapa di balik kode-kode ini',
            en: 'Get to know the person behind the code'
        },
        'about-p1': {
            id: 'Saya adalah mahasiswa <strong>Universitas Pelita Bangsa</strong> yang berdedikasi dalam dunia pengembangan web. Dengan passion yang kuat dalam menciptakan website yang tidak hanya fungsional tetapi juga memukau secara visual.',
            en: 'I am a student at <strong>Universitas Pelita Bangsa</strong> dedicated to web development. With a strong passion for creating websites that are not only functional but also visually stunning.'
        },
        'about-p2': {
            id: 'Saya mengkhususkan diri dalam pembuatan <strong>Company Profile</strong>, <strong>Corporate Website</strong>, dan solusi web modern menggunakan teknologi terkini seperti React, Next.js, dan Three.js.',
            en: 'I specialize in creating <strong>Company Profiles</strong>, <strong>Corporate Websites</strong>, and modern web solutions using cutting-edge technologies like React, Next.js, and Three.js.'
        },
        'about-p3': {
            id: 'Setiap proyek yang saya kerjakan bukan sekadar menulis kode — melainkan menciptakan pengalaman digital yang meninggalkan kesan mendalam bagi pengunjung website klien saya.',
            en: 'Every project I work on is more than just writing code — it\'s about crafting digital experiences that leave a lasting impression on my clients\' website visitors.'
        },
        'info-education-label': {
            id: 'Pendidikan',
            en: 'Education'
        },
        'info-location-label': {
            id: 'Lokasi',
            en: 'Location'
        },
        'info-specialization-label': {
            id: 'Spesialisasi',
            en: 'Specialization'
        },
        'about-cta': {
            id: 'Mari Bekerja Sama',
            en: "Let's Work Together"
        },

        // === Skills Section ===
        'skills-title': {
            id: 'Keahlian & <span class="gradient-text">Teknologi</span>',
            en: 'Skills & <span class="gradient-text">Technologies</span>'
        },
        'skills-subtitle': {
            id: 'Tools dan teknologi yang saya kuasai untuk membangun website berkualitas tinggi',
            en: 'Tools and technologies I master to build high-quality websites'
        },

        // === Services Section ===
        'services-title': {
            id: 'Layanan <span class="gradient-text">Profesional</span>',
            en: 'Professional <span class="gradient-text">Services</span>'
        },
        'services-subtitle': {
            id: 'Solusi digital terbaik untuk meningkatkan kredibilitas dan performa bisnis Anda secara online',
            en: 'The best digital solutions to enhance your business credibility and online performance'
        },
        'service-1-title': {
            id: 'Jasa Pembuatan Website Custom',
            en: 'Custom Website Development'
        },
        'service-1-desc': {
            id: 'Membangun website dari nol yang disesuaikan dengan identitas brand Anda. Berkinerja tinggi, sangat responsif, dan aman untuk menjangkau audiens secara global.',
            en: 'Building websites from scratch tailored to your brand identity. High-performance, fully responsive, and secure to reach audiences globally.'
        },
        'service-2-title': {
            id: 'Desain Company Profile Interaktif',
            en: 'Interactive Company Profile Design'
        },
        'service-2-desc': {
            id: 'Tingkatkan kredibilitas bisnis Anda di mata klien potensial dengan website company profile modern yang dilengkapi dengan animasi 3D interaktif yang memukau.',
            en: 'Boost your business credibility with a modern company profile website featuring stunning interactive 3D animations.'
        },
        'service-3-title': {
            id: 'Redesign & Optimasi SEO',
            en: 'Redesign & SEO Optimization'
        },
        'service-3-desc': {
            id: 'Memperbarui tampilan website lama Anda menjadi lebih segar dan modern, sekaligus melakukan optimasi agar lebih mudah ditemukan di halaman pertama pencarian Google.',
            en: 'Refresh your old website with a modern look while optimizing it to rank higher on Google\'s first page of search results.'
        },

        // === Pricing ===
        'pricing-title': {
            id: 'Pilih Paket <span class="gradient-text">yang Sesuai</span>',
            en: 'Choose the Right <span class="gradient-text">Plan</span>'
        },
        'pricing-subtitle': {
            id: 'Harga transparan, tanpa biaya tersembunyi. Konsultasi gratis untuk setiap paket.',
            en: 'Transparent pricing, no hidden fees. Free consultation for every plan.'
        },
        'pricing-popular': {
            id: '⭐ Paling Populer',
            en: '⭐ Most Popular'
        },
        'pricing-starter-desc': {
            id: 'Cocok untuk UMKM, toko lokal, atau kebutuhan digital pertama Anda.',
            en: 'Perfect for small businesses, local shops, or your first digital presence.'
        },
        'pricing-starter-f1': { id: 'Landing page 1 halaman', en: '1-page landing page' },
        'pricing-starter-f2': { id: 'Desain responsif (mobile-friendly)', en: 'Responsive design (mobile-friendly)' },
        'pricing-starter-f3': { id: 'Formulir kontak', en: 'Contact form' },
        'pricing-starter-f4': { id: 'Revisi 2x', en: '2 revisions' },
        'pricing-starter-f5': { id: 'Estimasi pengerjaan: 5–7 hari', en: 'Estimated delivery: 5–7 days' },

        'pricing-pro-desc': {
            id: 'Cocok untuk perusahaan menengah dan startup yang ingin tampil profesional.',
            en: 'Ideal for mid-size companies and startups looking for a professional look.'
        },
        'pricing-pro-f1': { id: 'Company profile 5–8 halaman', en: 'Company profile 5–8 pages' },
        'pricing-pro-f2': { id: 'Animasi modern & desain premium', en: 'Modern animations & premium design' },
        'pricing-pro-f3': { id: 'SEO dasar teroptimasi', en: 'Basic SEO optimized' },
        'pricing-pro-f4': { id: 'Formulir kontak aktif (email)', en: 'Active contact form (email)' },
        'pricing-pro-f5': { id: 'Revisi 3x', en: '3 revisions' },
        'pricing-pro-f6': { id: 'Estimasi pengerjaan: 7–14 hari', en: 'Estimated delivery: 7–14 days' },

        'pricing-premium-desc': {
            id: 'Cocok untuk korporat yang ingin tampil berbeda dengan teknologi 3D interaktif.',
            en: 'Ideal for corporations wanting to stand out with interactive 3D technology.'
        },
        'pricing-premium-f1': { id: 'Website custom multi-halaman', en: 'Custom multi-page website' },
        'pricing-premium-f2': { id: 'Animasi 3D interaktif (Three.js)', en: 'Interactive 3D animation (Three.js)' },
        'pricing-premium-f3': { id: 'Performa & Core Web Vitals tinggi', en: 'High performance & Core Web Vitals' },
        'pricing-premium-f4': { id: 'SEO komprehensif + artikel blog', en: 'Comprehensive SEO + blog articles' },
        'pricing-premium-f5': { id: 'Revisi unlimited (30 hari)', en: 'Unlimited revisions (30 days)' },
        'pricing-premium-f6': { id: 'Estimasi pengerjaan: 14–21 hari', en: 'Estimated delivery: 14–21 days' },

        'pricing-btn': {
            id: 'Konsultasi Gratis',
            en: 'Free Consultation'
        },
        'pricing-note': {
            id: '* Harga dapat disesuaikan dengan kebutuhan spesifik proyek Anda. Hubungi saya untuk diskusi lebih lanjut.',
            en: '* Pricing can be adjusted to your specific project needs. Contact me for further discussion.'
        },

        // === Projects Section ===
        'projects-title': {
            id: 'Karya <span class="gradient-text">Terbaik</span>',
            en: 'Best <span class="gradient-text">Works</span>'
        },
        'projects-subtitle': {
            id: 'Beberapa proyek yang telah saya selesaikan untuk klien dan showcase',
            en: 'Some projects I have completed for clients and showcase'
        },
        'project-1-desc': {
            id: 'Website company profile profesional untuk perusahaan logistik dan distribusi berbasis di Jakarta. Menampilkan armada, layanan, dan unit bisnis perusahaan.',
            en: 'Professional company profile website for a Jakarta-based logistics and distribution company. Showcasing fleet, services, and business units.'
        },
        'project-2-desc': {
            id: 'Website pemesanan convention hall premium yang elegan. Menampilkan fasilitas mewah, kapasitas tamu besar, galeri estetis, dan formulir booking acara secara online.',
            en: 'Elegant premium convention hall booking website. Featuring luxury facilities, large guest capacity, aesthetic gallery, and online event booking form.'
        },
        'project-3-desc': {
            id: 'Website company profile modern untuk bisnis Food & Beverage dengan desain elegan dan navigasi intuitif.',
            en: 'Modern company profile website for Food & Beverage business with elegant design and intuitive navigation.'
        },
        'project-4-desc': {
            id: 'Website perusahaan kontraktor dengan desain profesional, menampilkan portfolio proyek konstruksi dan layanan.',
            en: 'Professional contractor company website showcasing construction project portfolio and services.'
        },
        'project-5-desc': {
            id: 'Website e-commerce responsif untuk lini pakaian yang dipadukan dengan profil kedai kopi. Menampilkan desain asimetris bergaya kolase dengan palet warna earthy.',
            en: 'Responsive e-commerce website for a clothing line combined with a coffee shop profile. Featuring asymmetric collage-style design with an earthy color palette.'
        },
        'project-6-desc': {
            id: 'Website portfolio interaktif ini! Dibangun dengan Three.js, menampilkan animasi 3D, particle system, dan efek visual premium.',
            en: 'This interactive portfolio website! Built with Three.js, featuring 3D animations, particle systems, and premium visual effects.'
        },

        // === Clients Section ===
        'clients-title': {
            id: 'Klien yang <span class="gradient-text">Mempercayai</span>',
            en: 'Clients Who <span class="gradient-text">Trust Me</span>'
        },
        'clients-subtitle': {
            id: 'Perusahaan yang telah bekerja sama dengan saya',
            en: 'Companies that have collaborated with me'
        },
        'client-1-desc': {
            id: 'Mengembangkan website company profile lengkap untuk perusahaan logistik dan distribusi. Menampilkan armada kendaraan, layanan pengiriman & procurement, serta unit bisnis diversifikasi (F&B, retail). Website dibangun dengan Next.js dan di-deploy di Vercel.',
            en: 'Developed a complete company profile website for a logistics and distribution company. Showcasing vehicle fleet, delivery & procurement services, and diversified business units (F&B, retail). Built with Next.js and deployed on Vercel.'
        },
        'client-visit': {
            id: 'Kunjungi Website',
            en: 'Visit Website'
        },
        'trust-label': {
            id: 'Teknologi yang saya gunakan untuk membangun solusi terbaik',
            en: 'Technologies I use to build the best solutions'
        },

        // === Contact Section ===
        'contact-title': {
            id: 'Mari <span class="gradient-text">Terhubung</span>',
            en: "Let's <span class=\"gradient-text\">Connect</span>"
        },
        'contact-subtitle': {
            id: 'Punya proyek menarik? Mari diskusikan bagaimana saya bisa membantu',
            en: 'Have an exciting project? Let\'s discuss how I can help'
        },
        'contact-heading': {
            id: 'Mulai Proyek Bersama',
            en: 'Start a Project Together'
        },
        'contact-text': {
            id: 'Saya selalu terbuka untuk peluang baru dan kolaborasi menarik. Baik itu company profile, corporate website, atau proyek kreatif lainnya — mari kita wujudkan bersama.',
            en: 'I\'m always open to new opportunities and exciting collaborations. Whether it\'s a company profile, corporate website, or any creative project — let\'s make it happen together.'
        },
        'form-name': {
            id: 'Nama Lengkap',
            en: 'Full Name'
        },
        'form-subject': {
            id: 'Subjek',
            en: 'Subject'
        },
        'form-message': {
            id: 'Pesan',
            en: 'Message'
        },
        'form-message-placeholder': {
            id: 'Ceritakan tentang proyek Anda...',
            en: 'Tell me about your project...'
        },
        'form-submit': {
            id: 'Kirim Pesan',
            en: 'Send Message'
        },

        // === Footer ===
        'footer-tagline': {
            id: 'Membangun pengalaman digital yang memukau',
            en: 'Building stunning digital experiences'
        },
        'footer-nav': {
            id: 'Navigasi',
            en: 'Navigation'
        },
        'footer-social': {
            id: 'Sosial',
            en: 'Social'
        }
    };

    // Get saved language or default to Indonesian
    let currentLang = localStorage.getItem('site-lang') || 'id';

    /**
     * Apply translations to all elements with [data-i18n] attribute
     */
    function applyTranslations(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[key] && translations[key][lang]) {
                // Check if translation contains HTML (like <span>, <strong>)
                if (translations[key][lang].includes('<')) {
                    el.innerHTML = translations[key][lang];
                } else {
                    el.textContent = translations[key][lang];
                }
            }
        });

        // Handle placeholder translations
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[key] && translations[key][lang]) {
                el.placeholder = translations[key][lang];
            }
        });

        // Update <html lang> attribute
        document.documentElement.lang = lang;

        // Update the toggle button active state
        const toggleBtns = document.querySelectorAll('.lang-btn');
        toggleBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    }

    /**
     * Initialize the language toggle UI
     */
    function initLangToggle() {
        const toggle = document.getElementById('lang-toggle');
        if (!toggle) return;

        toggle.addEventListener('click', (e) => {
            const btn = e.target.closest('.lang-btn');
            if (!btn) return;

            const newLang = btn.dataset.lang;
            if (newLang === currentLang) return;

            currentLang = newLang;
            localStorage.setItem('site-lang', newLang);
            applyTranslations(newLang);
        });
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initLangToggle();
            applyTranslations(currentLang);
        });
    } else {
        initLangToggle();
        applyTranslations(currentLang);
    }

    // Expose for external use (e.g., EmailJS messages)
    window.i18n = {
        currentLang: () => currentLang,
        t: (key) => translations[key] ? translations[key][currentLang] : key
    };
})();
