/* ==========================================
   THREE.JS - 3D Interactive Globe
   Rotating wireframe globe for contact section
   with location dots and arc connections
   ========================================== */

(function () {
    'use strict';

    const canvas = document.getElementById('globe-canvas');
    if (!canvas || typeof THREE === 'undefined') return;

    // === Scene Setup ===
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    // === Globe Group ===
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // === Wireframe Sphere ===
    const sphereGeometry = new THREE.SphereGeometry(1.5, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({
        color: 0x0ea5e9,
        wireframe: true,
        transparent: true,
        opacity: 0.15
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    globeGroup.add(sphere);

    // === Inner Glow Sphere ===
    const innerSphere = new THREE.Mesh(
        new THREE.SphereGeometry(1.48, 32, 32),
        new THREE.MeshBasicMaterial({
            color: 0x7c3aed,
            transparent: true,
            opacity: 0.05,
            side: THREE.BackSide
        })
    );
    globeGroup.add(innerSphere);

    // === Latitude/Longitude Lines ===
    function createLatLine(lat) {
        const points = [];
        const radius = 1.52;
        const phi = (90 - lat) * (Math.PI / 180);
        const r = radius * Math.sin(phi);
        const y = radius * Math.cos(phi);

        for (let i = 0; i <= 64; i++) {
            const theta = (i / 64) * Math.PI * 2;
            points.push(new THREE.Vector3(
                r * Math.cos(theta),
                y,
                r * Math.sin(theta)
            ));
        }

        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        return new THREE.Line(geometry, new THREE.LineBasicMaterial({
            color: 0x0ea5e9,
            transparent: true,
            opacity: 0.08
        }));
    }

    function createLonLine(lon) {
        const points = [];
        const radius = 1.52;
        const theta = lon * (Math.PI / 180);

        for (let i = 0; i <= 64; i++) {
            const phi = (i / 64) * Math.PI;
            points.push(new THREE.Vector3(
                radius * Math.sin(phi) * Math.cos(theta),
                radius * Math.cos(phi),
                radius * Math.sin(phi) * Math.sin(theta)
            ));
        }

        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        return new THREE.Line(geometry, new THREE.LineBasicMaterial({
            color: 0x0ea5e9,
            transparent: true,
            opacity: 0.08
        }));
    }

    // Add lat/lon lines
    for (let lat = -60; lat <= 60; lat += 30) {
        globeGroup.add(createLatLine(lat));
    }
    for (let lon = 0; lon < 360; lon += 30) {
        globeGroup.add(createLonLine(lon));
    }

    // === Location Dots ===
    const locations = [
        { lat: -6.2, lon: 106.8, name: 'Jakarta' },    // Jakarta, Indonesia
        { lat: 1.3, lon: 103.8, name: 'Singapore' },     // Singapore
        { lat: 35.7, lon: 139.7, name: 'Tokyo' },        // Tokyo
        { lat: 37.6, lon: -122.4, name: 'San Francisco' }, // SF
        { lat: 51.5, lon: -0.1, name: 'London' },        // London
        { lat: 48.9, lon: 2.3, name: 'Paris' },          // Paris
        { lat: -33.9, lon: 151.2, name: 'Sydney' },      // Sydney
        { lat: 3.1, lon: 101.7, name: 'Kuala Lumpur' },  // KL
    ];

    function latLonToVec3(lat, lon, radius) {
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = (lon + 180) * (Math.PI / 180);
        return new THREE.Vector3(
            -radius * Math.sin(phi) * Math.cos(theta),
            radius * Math.cos(phi),
            radius * Math.sin(phi) * Math.sin(theta)
        );
    }

    const dotGeometry = new THREE.SphereGeometry(0.025, 8, 8);
    const dotMaterial = new THREE.MeshBasicMaterial({ color: 0x0ea5e9 });
    const dotGlowMaterial = new THREE.MeshBasicMaterial({
        color: 0x0ea5e9,
        transparent: true,
        opacity: 0.5
    });
    const glowGeometry = new THREE.SphereGeometry(0.05, 8, 8);

    locations.forEach(loc => {
        const pos = latLonToVec3(loc.lat, loc.lon, 1.53);
        const dot = new THREE.Mesh(dotGeometry, dotMaterial);
        dot.position.copy(pos);
        globeGroup.add(dot);

        const glow = new THREE.Mesh(glowGeometry, dotGlowMaterial);
        glow.position.copy(pos);
        globeGroup.add(glow);
    });

    // === Arc Connections from Jakarta ===
    function createArc(start, end) {
        const startVec = latLonToVec3(start.lat, start.lon, 1.53);
        const endVec = latLonToVec3(end.lat, end.lon, 1.53);

        const mid = new THREE.Vector3()
            .addVectors(startVec, endVec)
            .multiplyScalar(0.5);
        const dist = startVec.distanceTo(endVec);
        mid.normalize().multiplyScalar(1.53 + dist * 0.3);

        const curve = new THREE.QuadraticBezierCurve3(startVec, mid, endVec);
        const points = curve.getPoints(50);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);

        return new THREE.Line(geometry, new THREE.LineBasicMaterial({
            color: 0x7c3aed,
            transparent: true,
            opacity: 0.4
        }));
    }

    const jakarta = locations[0];
    [locations[1], locations[2], locations[7]].forEach(loc => {
        globeGroup.add(createArc(jakarta, loc));
    });

    // === Outer Particle Ring ===
    const ringParticleCount = 300;
    const ringPositions = new Float32Array(ringParticleCount * 3);

    for (let i = 0; i < ringParticleCount; i++) {
        const angle = (i / ringParticleCount) * Math.PI * 2;
        const radius = 2 + (Math.random() - 0.5) * 0.3;
        const y = (Math.random() - 0.5) * 0.2;

        ringPositions[i * 3] = radius * Math.cos(angle);
        ringPositions[i * 3 + 1] = y;
        ringPositions[i * 3 + 2] = radius * Math.sin(angle);
    }

    const ringGeometry = new THREE.BufferGeometry();
    ringGeometry.setAttribute('position', new THREE.BufferAttribute(ringPositions, 3));

    const ringMaterial = new THREE.PointsMaterial({
        color: 0x0ea5e9,
        size: 0.03,
        transparent: true,
        opacity: 0.5,
        blending: THREE.NormalBlending
    });

    const ringParticles = new THREE.Points(ringGeometry, ringMaterial);
    globeGroup.add(ringParticles);

    // === Position Globe ===
    globeGroup.position.set(0, 0, 0);

    // === Animation ===
    const clock = new THREE.Clock();

    let animationId;

    function animate() {
        if (!isAnimating) return;
        animationId = requestAnimationFrame(animate);
        const elapsed = clock.getElapsedTime();

        // Slow rotation
        globeGroup.rotation.y = elapsed * 0.1;
        globeGroup.rotation.x = Math.sin(elapsed * 0.05) * 0.1 + 0.2;

        // Pulse ring
        ringParticles.rotation.y = -elapsed * 0.05;
        ringMaterial.opacity = 0.3 + Math.sin(elapsed * 2) * 0.1;

        // Pulse dots
        dotGlowMaterial.opacity = 0.2 + Math.sin(elapsed * 3) * 0.15;

        renderer.render(scene, camera);
    }

    // === Start only when visible ===
    let isAnimating = false;

    const contactSection = document.getElementById('contact');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !isAnimating) {
                isAnimating = true;
                clock.start();
                animate();
            } else if (!entry.isIntersecting) {
                isAnimating = false;
                clock.stop();
            }
        });
    }, { threshold: 0.1 });

    if (contactSection) observer.observe(contactSection);

    // === Resize ===
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

})();
