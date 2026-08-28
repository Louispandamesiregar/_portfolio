/* ==========================================
   THREE.JS - 3D Particle Hero Scene
   Interactive particle system with mouse tracking
   and floating wireframe geometries
   ========================================== */

(function () {
    'use strict';

    const canvas = document.getElementById('hero-canvas');
    if (!canvas || typeof THREE === 'undefined') return;

    const heroSection = document.getElementById('hero');
    const width = heroSection ? heroSection.offsetWidth : window.innerWidth;
    const height = heroSection ? heroSection.offsetHeight : window.innerHeight;

    // === Scene Setup ===
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    // === Mouse Tracking ===
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    document.addEventListener('mousemove', (e) => {
        mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    // === Particle System ===
    const particleCount = 800;
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const colorPalette = [
        new THREE.Color(0x0ea5e9), // Sky blue
        new THREE.Color(0x7c3aed), // Violet
        new THREE.Color(0xdb2777), // Pink
        new THREE.Color(0x0ea5e9), // More sky blue (weighted)
    ];

    for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;

        // Distributed across a sphere-like volume
        const radius = 4 + Math.random() * 6;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);

        positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i3 + 2] = radius * Math.cos(phi) - 2;

        velocities[i3] = (Math.random() - 0.5) * 0.002;
        velocities[i3 + 1] = (Math.random() - 0.5) * 0.002;
        velocities[i3 + 2] = (Math.random() - 0.5) * 0.002;

        const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        colors[i3] = color.r;
        colors[i3 + 1] = color.g;
        colors[i3 + 2] = color.b;

        sizes[i] = Math.random() * 1.5 + 0.5;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('aColor', new THREE.BufferAttribute(colors, 3));
    particleGeometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));

    // Custom shader material for glowing particles
    const particleMaterial = new THREE.ShaderMaterial({
        uniforms: {
            uTime: { value: 0 },
            uMouse: { value: new THREE.Vector2(0, 0) },
            uPixelRatio: { value: renderer.getPixelRatio() }
        },
        vertexShader: `
            attribute float aSize;
            attribute vec3 aColor;
            varying vec3 vColor;
            varying float vOpacity;
            uniform float uTime;
            uniform vec2 uMouse;
            uniform float uPixelRatio;

            void main() {
                vColor = aColor;
                
                vec3 pos = position;
                
                // Subtle wave motion
                pos.x += sin(uTime * 0.3 + position.y * 0.5) * 0.1;
                pos.y += cos(uTime * 0.2 + position.x * 0.5) * 0.1;
                pos.z += sin(uTime * 0.4 + position.x * 0.3) * 0.05;
                
                // Mouse influence
                float distToMouse = length(pos.xy - uMouse * 3.0);
                float mouseInfluence = smoothstep(3.0, 0.0, distToMouse) * 0.5;
                pos.xy += normalize(pos.xy - uMouse * 3.0) * mouseInfluence * 0.3;
                
                vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
                gl_Position = projectionMatrix * mvPosition;
                
                // Size attenuation
                gl_PointSize = aSize * uPixelRatio * (120.0 / -mvPosition.z);
                gl_PointSize = max(gl_PointSize, 0.5);
                
                // Distance-based opacity
                float dist = length(mvPosition.xyz);
                vOpacity = smoothstep(15.0, 2.0, dist) * 0.5;
            }
        `,
        fragmentShader: `
            varying vec3 vColor;
            varying float vOpacity;

            void main() {
                // Circular point with glow
                float dist = length(gl_PointCoord - vec2(0.5));
                if (dist > 0.5) discard;
                
                float alpha = smoothstep(0.5, 0.15, dist) * vOpacity;
                float glow = smoothstep(0.5, 0.0, dist) * 0.15;
                
                vec3 finalColor = vColor + glow;
                gl_FragColor = vec4(finalColor, alpha);
            }
        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.NormalBlending
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // === Wireframe Geometries ===
    const wireframeMaterial = new THREE.MeshBasicMaterial({
        color: 0x7c3aed,
        wireframe: true,
        transparent: true,
        opacity: 0.15
    });

    const wireframeMaterial2 = new THREE.MeshBasicMaterial({
        color: 0x0ea5e9,
        wireframe: true,
        transparent: true,
        opacity: 0.12
    });

    // Icosahedron
    const icosahedron = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.5, 1),
        wireframeMaterial
    );
    icosahedron.position.set(3, 1.5, -3);
    scene.add(icosahedron);

    // Torus
    const torus = new THREE.Mesh(
        new THREE.TorusGeometry(1.2, 0.3, 8, 24),
        wireframeMaterial2
    );
    torus.position.set(-3.5, -1, -2);
    scene.add(torus);

    // Octahedron
    const octahedron = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.8, 0),
        wireframeMaterial
    );
    octahedron.position.set(-2, 2.5, -4);
    scene.add(octahedron);

    // Dodecahedron
    const dodecahedron = new THREE.Mesh(
        new THREE.DodecahedronGeometry(0.7, 0),
        wireframeMaterial2
    );
    dodecahedron.position.set(4, -2, -3);
    scene.add(dodecahedron);

    // === Connection Lines ===
    const lineCount = 50;
    const linePositions = new Float32Array(lineCount * 6);
    const lineColors = new Float32Array(lineCount * 6);

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.25,
        blending: THREE.NormalBlending
    });

    const connectionLines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(connectionLines);

    // === Animation Loop ===
    const clock = new THREE.Clock();

    function updateConnections() {
        const posAttr = particleGeometry.getAttribute('position');
        const linePos = lineGeometry.getAttribute('position');
        const lineCol = lineGeometry.getAttribute('color');
        let lineIndex = 0;
        const maxDist = 2.0;

        for (let i = 0; i < Math.min(particleCount, 100) && lineIndex < lineCount; i++) {
            for (let j = i + 1; j < Math.min(particleCount, 100) && lineIndex < lineCount; j++) {
                const dx = posAttr.array[i * 3] - posAttr.array[j * 3];
                const dy = posAttr.array[i * 3 + 1] - posAttr.array[j * 3 + 1];
                const dz = posAttr.array[i * 3 + 2] - posAttr.array[j * 3 + 2];
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                if (dist < maxDist) {
                    const li = lineIndex * 6;
                    linePos.array[li] = posAttr.array[i * 3];
                    linePos.array[li + 1] = posAttr.array[i * 3 + 1];
                    linePos.array[li + 2] = posAttr.array[i * 3 + 2];
                    linePos.array[li + 3] = posAttr.array[j * 3];
                    linePos.array[li + 4] = posAttr.array[j * 3 + 1];
                    linePos.array[li + 5] = posAttr.array[j * 3 + 2];

                    const alpha = 1 - dist / maxDist;
                    lineCol.array[li] = 0;
                    lineCol.array[li + 1] = 0.94 * alpha;
                    lineCol.array[li + 2] = 1 * alpha;
                    lineCol.array[li + 3] = 0;
                    lineCol.array[li + 4] = 0.94 * alpha;
                    lineCol.array[li + 5] = 1 * alpha;

                    lineIndex++;
                }
            }
        }

        // Clear unused lines
        for (let i = lineIndex; i < lineCount; i++) {
            const li = i * 6;
            for (let j = 0; j < 6; j++) {
                linePos.array[li + j] = 0;
                lineCol.array[li + j] = 0;
            }
        }

        linePos.needsUpdate = true;
        lineCol.needsUpdate = true;
    }

    let animationId;
    let isAnimating = false;

    function animate() {
        if (!isAnimating) return;
        animationId = requestAnimationFrame(animate);

        const elapsedTime = clock.getElapsedTime();

        // Smooth mouse
        mouse.x += (mouse.targetX - mouse.x) * 0.05;
        mouse.y += (mouse.targetY - mouse.y) * 0.05;

        // Update uniforms
        particleMaterial.uniforms.uTime.value = elapsedTime;
        particleMaterial.uniforms.uMouse.value.set(mouse.x, mouse.y);

        // Rotate particle system slightly
        particles.rotation.y = elapsedTime * 0.03;
        particles.rotation.x = Math.sin(elapsedTime * 0.02) * 0.1;

        // Animate positions
        const posAttr = particleGeometry.getAttribute('position');
        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            posAttr.array[i3] += velocities[i3];
            posAttr.array[i3 + 1] += velocities[i3 + 1];
            posAttr.array[i3 + 2] += velocities[i3 + 2];

            // Boundary wrap
            if (Math.abs(posAttr.array[i3]) > 10) velocities[i3] *= -1;
            if (Math.abs(posAttr.array[i3 + 1]) > 10) velocities[i3 + 1] *= -1;
            if (Math.abs(posAttr.array[i3 + 2]) > 10) velocities[i3 + 2] *= -1;
        }
        posAttr.needsUpdate = true;

        // Rotate wireframes
        icosahedron.rotation.x = elapsedTime * 0.15;
        icosahedron.rotation.y = elapsedTime * 0.1;
        icosahedron.position.y = 1.5 + Math.sin(elapsedTime * 0.5) * 0.3;

        torus.rotation.x = elapsedTime * 0.2;
        torus.rotation.z = elapsedTime * 0.15;
        torus.position.y = -1 + Math.cos(elapsedTime * 0.4) * 0.3;

        octahedron.rotation.y = elapsedTime * 0.25;
        octahedron.rotation.z = elapsedTime * 0.1;
        octahedron.position.x = -2 + Math.sin(elapsedTime * 0.3) * 0.2;

        dodecahedron.rotation.x = elapsedTime * 0.12;
        dodecahedron.rotation.y = elapsedTime * 0.18;
        dodecahedron.position.y = -2 + Math.sin(elapsedTime * 0.6) * 0.2;

        // Mouse-based camera parallax
        camera.position.x = mouse.x * 0.3;
        camera.position.y = mouse.y * 0.2;
        camera.lookAt(scene.position);

        // Update connection lines every few frames
        if (Math.floor(elapsedTime * 10) % 3 === 0) {
            updateConnections();
        }

        renderer.render(scene, camera);
    }

    // Removed animate() call here, it is started by the IntersectionObserver

    // === Resize Handler ===
    window.addEventListener('resize', () => {
        const width = heroSection ? heroSection.offsetWidth : window.innerWidth;
        const height = heroSection ? heroSection.offsetHeight : window.innerHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        particleMaterial.uniforms.uPixelRatio.value = renderer.getPixelRatio();
    });

    // === Performance: Pause when not visible ===
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !isAnimating) {
                isAnimating = true;
                clock.start();
                animate();
            } else if (!entry.isIntersecting && isAnimating) {
                isAnimating = false;
                clock.stop();
                if (animationId) {
                    cancelAnimationFrame(animationId);
                }
            }
        });
    }, { threshold: 0.1 });

    if (heroSection) observer.observe(heroSection);

})();
