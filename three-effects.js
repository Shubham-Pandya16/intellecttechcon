/* ============================================================================
   THREE.JS 3D MOTION ELEMENTS
   Atmospheric, non-functional 3D scenes for premium feel
   ============================================================================ */

// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Check if device is mobile
const isMobile = window.innerWidth < 768;

// Skip 3D on mobile if reduced motion is preferred
if (prefersReducedMotion && isMobile) {
  console.log('3D effects disabled: reduced motion preference detected');
} else {
  // Initialize all 3D scenes
  initHeroScene();
  initParticleField();
  initSolutionsScene();
}

/* ============================================================================
   HERO 3D ELEMENT - TorusKnot with mouse parallax
   ============================================================================ */

function initHeroScene() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth * 0.55 / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth * 0.55, window.innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;
  renderer.setClearColor(0x000000, 0);

  camera.position.z = 3;

  // Torus Knot - main mesh
  const geometry = new THREE.TorusKnotGeometry(1.2, 0.38, 200, 32, 2, 3);
  const material = new THREE.MeshStandardMaterial({
    color: 0xea6624,
    metalness: 0.85,
    roughness: 0.15,
    envMapIntensity: 1.2
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // Secondary blue halo mesh
  const haloGeometry = new THREE.TorusKnotGeometry(1.25, 0.38, 200, 32, 2, 3);
  const haloMaterial = new THREE.MeshStandardMaterial({
    color: 0x325baa,
    transparent: true,
    opacity: 0.25,
    metalness: 0.6,
    roughness: 0.3
  });

  const haloMesh = new THREE.Mesh(haloGeometry, haloMaterial);
  haloMesh.scale.set(1.04, 1.04, 1.04);
  scene.add(haloMesh);

  // Lighting
  const orangeLight = new THREE.RectAreaLight(0xea6624, 4, 5, 5);
  orangeLight.position.set(3, 2, 2);
  scene.add(orangeLight);

  const blueLight = new THREE.RectAreaLight(0x325baa, 2, 5, 5);
  blueLight.position.set(-3, -2, 1);
  scene.add(blueLight);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
  scene.add(ambientLight);

  // Mouse tracking
  let mouseX = 0;
  let mouseY = 0;
  let targetCameraX = 0;
  let targetCameraY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    targetCameraX = mouseX * 0.6;
    targetCameraY = mouseY * 0.6;
  });

  // Resize handler
  window.addEventListener('resize', () => {
    const width = window.innerWidth * 0.55;
    const height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  });

  // Intersection observer for cleanup
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting && isAnimating) {
          cancelAnimationFrame(animationId);
          isAnimating = false;
        } else if (entry.isIntersecting && !isAnimating) {
          isAnimating = true;
          animate();
        }
      });
    },
    { threshold: 0 }
  );

  observer.observe(canvas);

  let isAnimating = true;
  let animationId;

  function animate() {
    animationId = requestAnimationFrame(animate);

    // Rotation
    mesh.rotation.x += 0.003;
    mesh.rotation.y += 0.005;
    mesh.rotation.z += 0.001;

    haloMesh.rotation.x -= 0.002;
    haloMesh.rotation.y -= 0.004;

    // Mouse parallax
    camera.position.x += (targetCameraX - camera.position.x) * 0.04;
    camera.position.y += (targetCameraY - camera.position.y) * 0.04;

    renderer.render(scene, camera);
  }

  animate();

  // Cleanup on page unload
  window.addEventListener('beforeunload', () => {
    renderer.dispose();
    geometry.dispose();
    material.dispose();
    haloGeometry.dispose();
    haloMaterial.dispose();
  });
}

/* ============================================================================
   FLOATING PARTICLE FIELD - Global background
   ============================================================================ */

function initParticleField() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);

  camera.position.z = 2;

  // Particle setup
  const count = 120;
  const geometry = new THREE.BufferGeometry();

  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const sizes = new Float32Array(count);

  // Orange color (70% of particles)
  const orangeColor = new THREE.Color(0xea6624);
  // Blue color (30% of particles)
  const blueColor = new THREE.Color(0x325baa);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 8;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 8;

    // 70% orange, 30% blue
    const isOrange = Math.random() > 0.3;
    const color = isOrange ? orangeColor : blueColor;
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;

    sizes[i] = Math.random() * 0.06 + 0.04;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

  const material = new THREE.PointsMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 0.55,
    sizeAttenuation: true,
    size: 0.05
  });

  const points = new THREE.Points(geometry, material);
  scene.add(points);

  // Resize handler
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  let isAnimating = true;
  let animationId;

  function animate() {
    animationId = requestAnimationFrame(animate);

    // Drift particles upward
    const positionArray = geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      positionArray[i * 3 + 1] += 0.002; // Upward drift

      // Reset when particle leaves top
      if (positionArray[i * 3 + 1] > 4) {
        positionArray[i * 3 + 1] = -4;
      }
    }
    geometry.attributes.position.needsUpdate = true;

    points.rotation.z += 0.0001;

    renderer.render(scene, camera);
  }

  animate();

  // Cleanup
  window.addEventListener('beforeunload', () => {
    renderer.dispose();
    geometry.dispose();
    material.dispose();
  });
}

/* ============================================================================
   SOLUTIONS SECTION 3D ELEMENT - Icosahedron wireframe
   ============================================================================ */

function initSolutionsScene() {
  const canvas = document.getElementById('solutions-canvas');
  if (!canvas) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(340, 340);
  renderer.setClearColor(0x000000, 0);

  camera.position.z = 3;

  // Icosahedron wireframe
  const geometry = new THREE.IcosahedronGeometry(1.8, 1);
  const material = new THREE.MeshBasicMaterial({
    color: 0x325baa,
    wireframe: true,
    transparent: true,
    opacity: 0.18
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // Subtle lighting for depth
  const light = new THREE.DirectionalLight(0xffffff, 0.2);
  scene.add(light);

  let isAnimating = true;
  let animationId;

  function animate() {
    animationId = requestAnimationFrame(animate);

    mesh.rotation.y += 0.004;
    mesh.rotation.x += 0.002;

    renderer.render(scene, camera);
  }

  animate();

  // Intersection observer for cleanup
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting && isAnimating) {
          cancelAnimationFrame(animationId);
          isAnimating = false;
        } else if (entry.isIntersecting && !isAnimating) {
          isAnimating = true;
          animate();
        }
      });
    },
    { threshold: 0 }
  );

  observer.observe(canvas);

  // Cleanup
  window.addEventListener('beforeunload', () => {
    renderer.dispose();
    geometry.dispose();
    material.dispose();
  });
}
