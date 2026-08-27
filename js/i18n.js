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
            en: 'Some of the projects I have completed for clients and showcases'
        },
        'projects-view-all': {
            id: 'Lihat Semua Proyek',
            en: 'View All Projects'
        },
        'projects-count': {
            id: '7+ proyek selesai',
            en: '7+ projects completed'
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

        // === FAQ ===
        'faq-title': {
            id: 'Pertanyaan yang Sering <span class="gradient-text">Diajukan</span>',
            en: 'Frequently Asked <span class="gradient-text">Questions</span>'
        },
        'faq-subtitle': {
            id: 'Jawaban dari beberapa pertanyaan umum sebelum kita mulai bekerja sama',
            en: 'Answers to some common questions before we start working together'
        },
        'faq-q1': {
            id: 'Apakah harga paket sudah termasuk biaya Domain dan Hosting?',
            en: 'Does the package price include Domain and Hosting fees?'
        },
        'faq-a1': {
            id: 'Ya, seluruh paket pembuatan website (Starter, Professional, dan Premium) sudah termasuk <strong>GRATIS biaya Domain</strong> (contoh: .com / .co.id) dan <strong>Hosting berkecepatan tinggi</strong> untuk 1 tahun pertama. Anda terima beres!',
            en: 'Yes, all website development packages (Starter, Professional, and Premium) include a <strong>FREE Domain</strong> (e.g., .com / .co.id) and <strong>high-speed Hosting</strong> for the first year. We handle everything!'
        },
        'faq-q2': {
            id: 'Bagaimana sistem pembayarannya?',
            en: 'What is the payment system?'
        },
        'faq-a2': {
            id: 'Pembayaran dilakukan dalam 2 tahap untuk keamanan dan kenyamanan bersama: DP (Down Payment) 50% dibayarkan sebelum pengerjaan proyek dimulai, dan sisa pelunasan 50% dibayarkan setelah website selesai 100% dan siap di-online-kan.',
            en: 'Payment is made in 2 stages for mutual security and convenience: a 50% Down Payment (DP) is paid before the project starts, and the remaining 50% balance is paid after the website is 100% complete and ready to go online.'
        },
        'faq-q3': {
            id: 'Apakah ada biaya bulanan atau tahunan setelah website jadi?',
            en: 'Are there any monthly or annual fees after the website is done?'
        },
        'faq-a3': {
            id: '<strong>Tidak ada biaya berlangganan bulanan dari saya!</strong> Anda hanya menyiapkan dana untuk biaya perpanjangan tahunan (Domain & Hosting) yang baru akan dibayarkan mulai dari tahun kedua ke pihak penyedia server (provider).',
            en: '<strong>There are no monthly subscription fees from me!</strong> You only need to prepare funds for the annual renewal fee (Domain & Hosting), which will only be paid starting from the second year directly to the server provider.'
        },
        'faq-q4': {
            id: 'Apa saja yang perlu saya siapkan sebelum mulai pembuatan website?',
            en: 'What do I need to prepare before starting the website development?'
        },
        'faq-a4': {
            id: 'Sangat mudah! Anda hanya perlu menyiapkan draf <strong>Profil Perusahaan</strong> (sejarah, layanan, dll), <strong>Logo</strong> resolusi tinggi, <strong>foto/video asli bisnis Anda</strong> (jika ada), serta referensi website yang Anda sukai. Sisanya dari sisi desain dan teknis akan saya tangani seluruhnya.',
            en: 'It\'s very easy! You only need to prepare a draft of your <strong>Company Profile</strong> (history, services, etc.), a high-resolution <strong>Logo</strong>, <strong>original photos/videos of your business</strong> (if any), and website references you like. I will handle all the rest, from design to technical aspects.'
        },
        'faq-q5': {
            id: 'Bagaimana jika saya butuh revisi lebih dari yang ditentukan di paket?',
            en: 'What if I need more revisions than specified in the package?'
        },
        'faq-a5': {
            id: 'Jangan khawatir. Jika jatah revisi paket Anda sudah habis, penyesuaian tambahan tetap bisa dilakukan dengan biaya tambahan (add-on) yang terjangkau per revisinya, tergantung tingkat kesulitan perubahan.',
            en: 'Don\'t worry. If your package revision quota runs out, further adjustments can still be made with an affordable add-on fee per revision session, depending on the complexity of the changes.'
        },
        'faq-q6': {
            id: 'Apakah saya bisa mengubah/update isi konten website sendiri ke depannya?',
            en: 'Can I change/update the website content myself in the future?'
        },
        'faq-a6': {
            id: 'Ya! Khusus untuk <strong>Paket Professional dan Premium</strong>, website akan diintegrasikan dengan Headless CMS (Sistem Manajemen Konten) modern. Anda akan mendapatkan halaman Admin untuk mengubah teks dan foto dengan mudah tanpa harus paham kode sama sekali.',
            en: 'Yes! Specifically for the <strong>Professional and Premium Packages</strong>, the website will be integrated with a modern Headless CMS (Content Management System). You will get an Admin page to easily change text and photos without needing to understand any code.'
        },
        'faq-q7': {
            id: 'Apakah website saya otomatis muncul di halaman pertama pencarian Google?',
            en: 'Will my website automatically appear on the first page of Google search?'
        },
        'faq-a7': {
            id: 'Website yang saya buat sudah dirancang dengan struktur <strong>100% SEO-Friendly</strong> dan performa sangat cepat (Core Web Vitals standar Google). Ini adalah fondasi yang sempurna. Namun, untuk kata kunci bisnis yang sangat kompetitif, Anda mungkin memerlukan layanan optimasi SEO lanjutan secara berkala agar bisa stabil di halaman pertama.',
            en: 'The websites I build are designed with a <strong>100% SEO-Friendly</strong> structure and very fast performance (Google Core Web Vitals standard). This is the perfect foundation. However, for highly competitive business keywords, you may need advanced SEO optimization services periodically to stay stable on the first page.'
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
        },

        // === Blog Page ===
        'blog-title': {
            id: 'Wawasan <span class="gradient-text">Digital</span>',
            en: 'Digital <span class="gradient-text">Insights</span>'
        },
        'blog-subtitle': {
            id: 'Artikel seputar teknologi web, bisnis digital, dan tren company profile terbaru.',
            en: 'Articles about web technology, digital business, and the latest company profile trends.'
        },
        'blog-meta-1-tag': {
            id: '🏷️ Bisnis & Teknologi',
            en: '🏷️ Business & Technology'
        },
        'blog-article-1-title': {
            id: 'Mengapa Bisnis Anda Wajib Memiliki Website Company Profile di Tahun 2026?',
            en: 'Why Your Business Must Have a Company Profile Website in 2026?'
        },
        'blog-a1-p1': {
            id: 'Di era digital yang serba cepat ini, memiliki kehadiran online yang solid bukan lagi sebuah kemewahan, melainkan kebutuhan mutlak bagi setiap perusahaan. <strong>Website company profile</strong> berfungsi sebagai brosur digital 24/7 yang bekerja tanpa henti untuk mempresentasikan kredibilitas, visi, dan layanan bisnis Anda kepada dunia.',
            en: 'In today\'s fast-paced digital era, having a solid online presence is no longer a luxury but an absolute necessity for every company. A <strong>company profile website</strong> serves as a 24/7 digital brochure that works tirelessly to present your business credibility, vision, and services to the world.'
        },
        'blog-a1-h1': {
            id: '1. Meningkatkan Kredibilitas dan Profesionalisme',
            en: '1. Boosting Credibility and Professionalism'
        },
        'blog-a1-p2': {
            id: 'Menurut berbagai studi perilaku konsumen, lebih dari 80% calon klien akan melakukan riset secara online sebelum memutuskan untuk bekerja sama dengan sebuah perusahaan (B2B) atau membeli produk (B2C). Jika bisnis Anda tidak dapat ditemukan di Google, atau memiliki website yang terlihat usang, Anda akan langsung kehilangan kepercayaan mereka. <strong>Jasa pembuatan website</strong> yang profesional memastikan company profile Anda tidak hanya ada, tetapi tampil meyakinkan.',
            en: 'According to various consumer behavior studies, over 80% of potential clients will conduct online research before deciding to work with a company (B2B) or purchase a product (B2C). If your business cannot be found on Google, or has an outdated-looking website, you will immediately lose their trust. Professional <strong>website development services</strong> ensure your company profile not only exists but looks convincing.'
        },
        'blog-a1-h2': {
            id: '2. Etalase Portofolio Tanpa Batas',
            en: '2. Unlimited Portfolio Showcase'
        },
        'blog-a1-p3': {
            id: 'Tidak seperti brosur cetak yang memiliki keterbatasan ruang dan biaya cetak, website company profile memungkinkan Anda menampilkan portofolio karya terbaik, galeri produk, dan daftar klien tanpa batas. Fitur interaktif seperti animasi 3D dan galeri responsif membuat presentasi bisnis Anda jauh lebih memukau.',
            en: 'Unlike printed brochures that have space and printing cost limitations, a company profile website allows you to showcase your best portfolio works, product galleries, and client lists without limits. Interactive features like 3D animations and responsive galleries make your business presentation far more impressive.'
        },
        'blog-a1-h3': {
            id: '3. Fondasi SEO (Search Engine Optimization)',
            en: '3. SEO (Search Engine Optimization) Foundation'
        },
        'blog-a1-p4': {
            id: 'Website adalah pusat dari seluruh strategi pemasaran digital Anda. Dengan struktur HTML yang baik dan konten yang dioptimasi untuk SEO (seperti kata kunci <em>"jasa desain website"</em> atau industri spesifik Anda), perusahaan Anda berpeluang besar untuk ditemukan oleh klien potensial tepat saat mereka sedang mencari solusi yang Anda tawarkan di mesin pencari.',
            en: 'A website is the center of your entire digital marketing strategy. With proper HTML structure and SEO-optimized content (such as keywords like <em>"website design services"</em> or your specific industry), your company has a great chance of being found by potential clients right when they are searching for the solutions you offer on search engines.'
        },
        'blog-a1-conclusion': {
            id: '<strong>Kesimpulan:</strong> Berinvestasi pada jasa pembuatan website company profile adalah langkah strategis jangka panjang. Ini bukan sekadar pengeluaran, melainkan aset digital yang akan terus menghasilkan "Return on Investment" (ROI) melalui prospek baru.',
            en: '<strong>Conclusion:</strong> Investing in company profile website development services is a long-term strategic move. It is not just an expense but a digital asset that will continuously generate Return on Investment (ROI) through new prospects.'
        },
        'blog-meta-2-tag': {
            id: '🏷️ Tips & Panduan',
            en: '🏷️ Tips & Guide'
        },
        'blog-article-2-title': {
            id: 'Tips Memilih Jasa Pembuatan Website yang Tepat untuk Perusahaan Anda',
            en: 'Tips for Choosing the Right Website Development Service for Your Company'
        },
        'blog-a2-p1': {
            id: 'Memilih <strong>web developer</strong> atau agensi yang tepat untuk membangun website perusahaan Anda bisa menjadi tugas yang membingungkan. Terlalu banyak pilihan di luar sana, mulai dari freelancer yang menawarkan harga sangat murah hingga agensi besar dengan harga premium.',
            en: 'Choosing the right <strong>web developer</strong> or agency to build your company website can be a confusing task. There are too many options out there, from freelancers offering very cheap prices to large agencies with premium pricing.'
        },
        'blog-a2-h1': {
            id: 'A. Cek Portofolio dan Studi Kasus',
            en: 'A. Check Portfolio and Case Studies'
        },
        'blog-a2-p2': {
            id: 'Hal pertama dan terpenting adalah melihat hasil kerja mereka sebelumnya. Seorang web developer yang handal tidak hanya akan berbicara soal teknis, tetapi mampu menunjukkan contoh website yang telah mereka selesaikan. Perhatikan aspek visual, kecepatan *loading*, dan apakah desainnya responsif ketika dibuka di *smartphone*.',
            en: 'The first and most important thing is to look at their previous work. A skilled web developer won\'t just talk about technicalities but will be able to show examples of websites they have completed. Pay attention to the visual aspects, loading speed, and whether the design is responsive when opened on a smartphone.'
        },
        'blog-a2-h2': {
            id: 'B. Pahami Tumpukan Teknologi (Tech Stack) yang Digunakan',
            en: 'B. Understand the Tech Stack Used'
        },
        'blog-a2-p3': {
            id: 'Pastikan jasa pembuatan website yang Anda pilih menggunakan teknologi modern. Website yang dibangun dengan pendekatan usang akan mudah terkena peretasan dan lambat saat diakses. Penggunaan framework modern seperti React, Next.js, dipadukan dengan performa *vanilla* Javascript untuk interaksi ringan, merupakan standar emas saat ini.',
            en: 'Make sure the website development service you choose uses modern technology. A website built with outdated approaches will be vulnerable to hacking and slow to access. Using modern frameworks like React, Next.js, combined with vanilla JavaScript performance for lightweight interactions, is the gold standard today.'
        },
        'blog-a2-h3': {
            id: 'C. Tanyakan Tentang Optimasi SEO',
            en: 'C. Ask About SEO Optimization'
        },
        'blog-a2-p4': {
            id: 'Sebuah website yang indah tidak akan berguna jika tidak ada yang mengunjunginya. Tanyakan apakah layanan mereka mencakup optimasi SEO dasar. Apakah mereka mengatur *meta tags*, memastikan struktur *heading* benar, dan mengompres gambar (WebP/AVIF)? Ini adalah hal fundamental yang membedakan web developer amatir dari seorang profesional.',
            en: 'A beautiful website is useless if no one visits it. Ask whether their services include basic SEO optimization. Do they set up meta tags, ensure proper heading structure, and compress images (WebP/AVIF)? These are fundamental things that distinguish an amateur web developer from a professional.'
        },
        'blog-footer-layanan': {
            id: 'Layanan',
            en: 'Services'
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
