const projects = [
  {
    id: 'spiderman-run-cycle',
    title: 'Miles Run Cycle',
    category: 'Animations',
    summary: 'Stylized sprint cycle capturing Spider-Man\'s elastic momentum between swings',
    thumbnail: 'projects/spiderman-run-cycle/pic1.png',
    mediaType: 'video',
    mediaSrc: 'projects/spiderman-run-cycle/video.mp4',
    description:
      'Blocking-to-polish study animating Spider-Man powering through a city sprint. Focused on snappy contact poses, offset torso twist, and dynamic camera sweeps that keep the silhouette heroic while the suit details trail behind.',
    tools: ['Blender'],
    gallery: [
      'projects/spiderman-run-cycle/pic1.png',
      'projects/spiderman-run-cycle/pic2.png'
    ],
    links: [],
  },
  {
    id: 'run-cycle',
    title: 'Run Cycle',
    category: 'Animations',
    summary: 'Clean humanoid run cycle demonstrating balanced contact, recoil, and airborne phases',
    thumbnail: 'projects/run-cycle/pic1.png',
    mediaType: 'video',
    mediaSrc: 'projects/run-cycle/video.mkv',
    description:
      'Gameplay-ready loop animated in Blender for a neutral biped. Built from stepped blocking, refined with graph editor clean-up, and finished with subtle head bob and arm overlap for believable motion at 24 fps.',
    tools: ['Blender'],
    gallery: [
      'projects/run-cycle/pic1.png',
      'projects/run-cycle/pic2.png'
    ],
    links: [],
  },
  {
    id: 'woman-jumping',
    title: 'Character motion animation',
    category: 'Animations',
    summary: 'Athletic heroine vaulting off a rooftop into a forward dive',
    thumbnail: 'projects/woman-jumping/pic1.png',
    mediaType: 'video',
    mediaSrc: 'projects/woman-jumping/video.mkv',
    description:
      'Cinematic stunt animation showing a fighter sprint, plant, and launch into space. Timing emphasizes explosive leg extension, while secondary motion in hair and jacket sells the airtime before she readies for impact.',
    tools: ['Blender'],
    gallery: [
      'projects/woman-jumping/pic1.png',
      'projects/woman-jumping/pic2.png'
    ],
    links: [],
  },
  {
    id: 'woman-punching',
    title: 'Simple action test',
    category: 'Animations',
    summary: 'Slow-motion haymaker revealing weight transfer, recoil, and cloth drag',
    thumbnail: 'projects/woman-punching/pic1.png',
    mediaType: 'video',
    mediaSrc: 'projects/woman-punching/video.mkv',
    description:
      'Shot study focused on anticipation and follow-through for a powerhouse punch. Splined in Blender with slow-motion retiming, accent lights, and camera shake to underline the force and emotional intensity.',
    tools: ['Blender'],
    gallery: [
      'projects/woman-punching/pic1.png',
      'projects/woman-punching/pic2.png'
    ],
    links: [],
  },
  {
    id: 'african-woman-drawing',
    title: 'Charcoal drawing of African Woman',
    category: 'Drawings',
    summary: 'Graphite portrait celebrating the strength and serenity of an African matriarch',
    thumbnail: 'projects/african-woman-drawing/project.jpg',
    mediaType: 'image',
    mediaSrc: 'projects/african-woman-drawing/project.jpg',
    description:
      'Traditional pencil drawing on textured paper exploring braided hairstyles, patterned fabric, and soft light across high cheekbones. Layered shading captures quiet confidence and the cultural symbolism in her attire.',
    tools: ['Traditional Drawing'],
    gallery: [],
    links: [],
  },
  {
    id: 'futuristic-swat-helmet',
    title: 'Futuristic SWAT Helmet',
    category: '3D',
    summary: 'Hard-surface concept of a tactical helmet built for near-future response teams',
    thumbnail: 'projects/futuristic-swat-helmet/project.jpg',
    mediaType: 'image',
    mediaSrc: 'projects/futuristic-swat-helmet/project.jpg',
    description:
      'Modeled in Blender with non-destructive modifiers, showcasing angular plating, visor vents, and layered ridges. Final renders highlight metallic roughness maps and emissive trims prepared for HUD callouts.',
    tools: ['Blender'],
    gallery: [],
    links: [],
  },
  {
    id: 'facial-animation',
    title: 'Facial Animation test',
    category: 'Animations',
    summary: 'Dialogue test pushing nuanced lip sync and brow micro-movements',
    thumbnail: 'projects/facial-animation/pic1.png',
    mediaType: 'video',
    mediaSrc: 'projects/facial-animation/video.mkv',
    description:
      'Performance captured by hand-keying a short monologue. Emphasis on phoneme clarity, cheek compression, and asymmetrical expressions so the character feels alive even in tight close-up renders.',
    tools: ['Blender'],
    gallery: [
      'projects/facial-animation/pic1.png',
      'projects/facial-animation/pic2.png'
    ],
    links: [],
  },
  {
    id: 'asian-cloth-illustration',
    title: 'Cloth Illustration',
    category: 'Illustrations',
    summary: 'Digital painting honoring traditional silk garments under warm lantern light',
    thumbnail: 'projects/asian-cloth-illustration/pic1.jpg',
    mediaType: 'image',
    mediaSrc: 'projects/asian-cloth-illustration/project.jpg',
    description:
      'Illustration exploring layered hanfu fabrics, shimmering embroidery, and rim-lit folds. Painted in Photoshop with custom brushes, gradient maps, and color-dodge accents to suggest luminous silk and ambient glow.',
    tools: ['Adobe Photoshop'],
    gallery: [
      'projects/asian-cloth-illustration/pic1.jpg',
      'projects/asian-cloth-illustration/pic2.jpg',
      'projects/asian-cloth-illustration/pic3.jpg'
    ],
    links: [],
  },
  {
    id: 'center-of-attraction',
    title: 'Center Of Attraction',
    category: 'Motion Graphics',
    summary: 'Motion graphics loop orbiting geometric forms around a glowing core',
    thumbnail: 'projects/center-of-attraction/pic1.png',
    mediaType: 'video',
    mediaSrc: 'projects/center-of-attraction/video.mp4',
    description:
      'After Effects composition combining 3D layers, polar coordinates, and echo trails. The sequence pulses with synchronized typography and particle bursts timed to a custom ambient beat.',
    tools: ['Adobe After Effects'],
    gallery: [
      'projects/center-of-attraction/pic1.png',
      'projects/center-of-attraction/pic2.png'
    ],
    links: [],
  },
  {
    id: 'scorac',
    title: 'SCORAC Logo',
    category: 'Motion Graphics',
    summary: 'Logo reveal crafted for SCORAC with kinetic typography and light streaks',
    thumbnail: 'projects/scorac/pic1.png',
    mediaType: 'video',
    mediaSrc: 'projects/scorac/video.mp4',
    description:
      'Brand bumper designed in After Effects with shape layer rigs, turbulence displace, and optical flare accents. Animation resolves into the SCORAC wordmark with color transitions tuned for web and event playback.',
    tools: ['Adobe After Effects'],
    gallery: [],
    links: [],
  },
  {
    id: 'king-illustration',
    title: 'Simple Illustration',
    category: 'Illustrations',
    summary: 'Painterly portrait of a regal figure draped in ornate Ankara textiles',
    thumbnail: 'projects/king-illustration/project.jpg',
    mediaType: 'image',
    mediaSrc: 'projects/king-illustration/project.jpg',
    description:
      'Photoshop illustration exploring royal posture, gold embroidery, and atmospheric lighting. Glazing techniques and blend modes build depth across the crown, jewelry, and richly patterned garments.',
    tools: ['Adobe Photoshop'],
    gallery: [],
    links: [],
  },
  {
    id: 'adam-sandler-drawing',
    title: 'Charcoal Drawing of Adam Sandler',
    category: 'Drawings',
    summary: 'Expressive graphite portrait capturing Adam Sandler’s laid-back charm',
    thumbnail: 'projects/adam-sandler-drawing/project.webp',
    mediaType: 'image',
    mediaSrc: 'projects/adam-sandler-drawing/project.webp',
    description:
      'Pencil sketch rendered on smooth Bristol paper, focusing on Sandler’s relaxed grin and signature casual style. Cross-hatching and blended graphite tones define facial structure while loose garment lines reinforce his easygoing persona.',
    tools: ['Traditional Drawing'],
    gallery: [],
    links: [],
  },
  {
    id: 'spider-animation',
    title: 'Spider Animation',
    category: 'Animations',
    summary: 'Dynamic spider locomotion study showcasing realistic leg coordination',
    thumbnail: 'projects/spider-animation/video.mp4',
    mediaType: 'video',
    mediaSrc: 'projects/spider-animation/video.mp4',
    description:
      'Animation study exploring the intricate movement patterns of spider locomotion. Features realistic leg coordination, weight distribution, and the characteristic eight-legged gait pattern.',
    tools: ['Blender'],
    gallery: [],
    links: [],
  },
];

const filtersContainer = document.getElementById('portfolio-filters');
const grid = document.getElementById('portfolio-grid');
const modal = document.getElementById('project-modal');
const modalMedia = modal?.querySelector('.modal-media');
const modalCategory = modal?.querySelector('.modal-category');
const modalTitle = modal?.querySelector('.modal-title');
const modalDescription = modal?.querySelector('.modal-description');
const modalTools = modal?.querySelector('.modal-tools');
const modalGallery = modal?.querySelector('.modal-gallery');
const modalLinks = modal?.querySelector('.modal-links');
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const whatsappButton = document.getElementById('contact-whatsapp');
const yearNode = document.getElementById('year');
const mobileToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

const MEDIA_PLACEHOLDER = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

let mediaObserver;

const loadMediaElement = (element) => {
  const source = element.dataset.src;
  if (source && element.dataset.loaded !== 'true') {
    element.src = source;
    element.dataset.loaded = 'true';
    if (element instanceof HTMLVideoElement) {
      element.load();
    }
  }

  if (element instanceof HTMLVideoElement) {
    const playPromise = element.play?.();
    if (playPromise instanceof Promise) {
      playPromise.catch(() => {});
    }
  }
};

const ensureMediaObserver = () => {
  if (mediaObserver) return mediaObserver;
  if (!('IntersectionObserver' in window)) {
    return null;
  }

  mediaObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const element = entry.target;
        if (!(element instanceof HTMLVideoElement) && !(element instanceof HTMLImageElement)) {
          return;
        }

        if (entry.isIntersecting) {
          loadMediaElement(element);
        } else if (element instanceof HTMLVideoElement) {
          element.pause();
        }
      });
    },
    { rootMargin: '160px 0px', threshold: 0.2 }
  );

  return mediaObserver;
};

const registerMediaElement = (element) => {
  const observer = ensureMediaObserver();
  if (!observer) {
    loadMediaElement(element);
    return;
  }

  observer.observe(element);
};

const renderProjects = (items) => {
  if (!grid) return;
  if (mediaObserver) {
    mediaObserver.disconnect();
  }
  grid.querySelectorAll('video').forEach((video) => video.pause());
  grid.innerHTML = '';
  const fragment = document.createDocumentFragment();

  items.forEach((project) => {
    const card = document.createElement('article');
    card.className = 'project-card group';
    card.dataset.projectId = project.id;

    const mediaWrapper = document.createElement('div');
    mediaWrapper.className = 'overflow-hidden';

    if (project.mediaType === 'video') {
      const video = document.createElement('video');
      video.dataset.src = project.mediaSrc;
      video.preload = 'none';
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.setAttribute('muted', '');
      video.setAttribute('loop', '');
      video.setAttribute('autoplay', '');
      video.setAttribute('playsinline', '');
      video.className = 'transition duration-700 ease-out';
      mediaWrapper.appendChild(video);
      registerMediaElement(video);
    } else {
      const img = document.createElement('img');
      img.alt = project.title;
      img.loading = 'lazy';
      img.src = MEDIA_PLACEHOLDER;
      img.dataset.src = project.mediaSrc || project.thumbnail || '';
      mediaWrapper.appendChild(img);
      registerMediaElement(img);
    }

    const info = document.createElement('div');
    info.className = 'project-info';

    const chip = document.createElement('span');
    chip.className = 'project-chip';
    chip.textContent = project.category;

    const title = document.createElement('h3');
    title.className = 'project-title';
    title.textContent = project.title;

    const summary = document.createElement('p');
    summary.className = 'project-summary';
    summary.textContent = project.summary;

    info.append(chip, title, summary);
    card.append(mediaWrapper, info);
    fragment.appendChild(card);
  });

  grid.appendChild(fragment);
};

const setFilterActive = (target) => {
  if (!filtersContainer) return;
  const buttons = filtersContainer.querySelectorAll('button');
  buttons.forEach((btn) => btn.classList.remove('active'));
  target.classList.add('active');
};

const openModal = (projectId) => {
  const project = projects.find((item) => item.id === projectId);
  if (!project || !modal || !modalMedia || !modalCategory || !modalTitle || !modalDescription || !modalTools || !modalGallery || !modalLinks) return;

  modalMedia.innerHTML = '';
  modalGallery.innerHTML = '';
  modalTools.innerHTML = '';
  modalLinks.innerHTML = '';

  if (project.mediaType === 'video') {
    const video = document.createElement('video');
    video.src = project.mediaSrc;
    video.controls = true;
    video.autoplay = true;
    video.muted = true;
    video.playsInline = true;
    video.poster = project.thumbnail;
    modalMedia.appendChild(video);
  } else if (project.mediaType === 'iframe') {
    const iframe = document.createElement('iframe');
    iframe.src = project.mediaSrc;
    iframe.width = '100%';
    iframe.height = '420';
    iframe.allowFullscreen = true;
    iframe.loading = 'lazy';
    modalMedia.appendChild(iframe);
  } else {
    const img = document.createElement('img');
    img.src = project.mediaSrc;
    img.alt = project.title;
    img.loading = 'lazy';
    modalMedia.appendChild(img);
  }

  modalCategory.textContent = project.category;
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;

  project.tools.forEach((tool) => {
    const li = document.createElement('li');
    li.textContent = tool;
    modalTools.appendChild(li);
  });

  project.gallery.forEach((image) => {
    const img = document.createElement('img');
    img.src = image;
    img.alt = `${project.title} gallery visual`;
    img.loading = 'lazy';
    modalGallery.appendChild(img);
  });

  project.links.forEach(({ label, url }) => {
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.target = '_blank';
    anchor.rel = 'noreferrer';
    anchor.textContent = label;
    modalLinks.appendChild(anchor);
  });

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.style.overflow = '';
  const media = modal.querySelector('video');
  media?.pause();
};

const handleFiltering = () => {
  if (!filtersContainer) return;
  filtersContainer.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLButtonElement)) return;
    const filter = target.dataset.filter;
    setFilterActive(target);

    if (!filter || filter === 'all') {
      renderProjects(projects);
    } else {
      const filtered = projects.filter((project) => project.category === filter);
      renderProjects(filtered);
    }
  });
};

const handleProjectClicks = () => {
  grid?.addEventListener('click', (event) => {
    const card = event.target instanceof Element ? event.target.closest('.project-card') : null;
    if (!card) return;
    const projectId = card.dataset.projectId;
    if (!projectId) return;
    openModal(projectId);
  });
};

const handleModalInteraction = () => {
  if (!modal) return;
  modal.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (target.dataset.closeModal !== undefined || target.closest('[data-close-modal]')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
};

const handleContactForm = () => {
  if (!contactForm || !whatsappButton) return;
  
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
  });

  const nameInput = contactForm.querySelector('input[name="name"]');
  const emailInput = contactForm.querySelector('input[name="email"]');
  const messageInput = contactForm.querySelector('textarea[name="message"]');

  whatsappButton.addEventListener('click', (event) => {
    if (!nameInput || !emailInput || !messageInput) return;
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !email || !message) {
      if (formStatus) {
        formStatus.textContent = 'Please fill in all fields before sending.';
        formStatus.style.color = 'var(--color-primary)';
      }
      event.preventDefault();
      return;
    }

    const whatsappMessage = `Hi MofeOluwa,%0A%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0A%0AMessage:%0A${encodeURIComponent(message)}`;
    whatsappButton.href = `https://wa.me/2348067505366?text=${whatsappMessage}`;
  });
};

const handleMobileMenu = () => {
  if (!mobileToggle || !mobileMenu) return;
  
  mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const isOpen = mobileMenu.classList.contains('open');
    mobileToggle.setAttribute('aria-expanded', isOpen.toString());
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      mobileToggle.setAttribute('aria-expanded', 'false');
    });
  });
};

const handleScrollAnimations = () => {
  const animatedElements = document.querySelectorAll('[data-animate]');
  
  if (!('IntersectionObserver' in window)) {
    animatedElements.forEach((element) => element.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, parseInt(delay, 10));
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -100px 0px' }
  );

  animatedElements.forEach((element) => observer.observe(element));
};

const handleParallax = () => {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  if (parallaxElements.length === 0) return;

  let ticking = false;

  const updateParallax = () => {
    const scrollY = window.scrollY;
    
    parallaxElements.forEach((element) => {
      const speed = parseFloat(element.dataset.parallaxSpeed || '0.5');
      const yPos = -(scrollY * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
    
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  });
};

const setCurrentYear = () => {
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear().toString();
  }
};

const loadCategoryData = async () => {
  try {
    const response = await fetch('./project-data.json');
    if (!response.ok) {
      console.warn('Could not load project-data.json, using default categorization');
      return null;
    }
    const categoryData = await response.json();
    console.log('Loaded category data:', categoryData);
    return categoryData;
  } catch (error) {
    console.warn('Error loading project-data.json:', error);
    return null;
  }
};

const validateProjectCategories = async () => {
  const categoryData = await loadCategoryData();
  if (!categoryData) return;

  const categoryToProjects = categoryData;
  const allCategorizedProjects = new Set();
  
  Object.entries(categoryToProjects).forEach(([category, projectIds]) => {
    projectIds.forEach(id => {
      allCategorizedProjects.add(id);
      const project = projects.find(p => p.id === id);
      if (project && project.category !== category) {
        console.warn(`Project ${id} has category "${project.category}" but is mapped to "${category}" in project-data.json`);
      } else if (!project) {
        console.warn(`Project ${id} from project-data.json not found in projects array`);
      }
    });
  });

  projects.forEach(project => {
    if (!allCategorizedProjects.has(project.id)) {
      console.warn(`Project ${project.id} is not categorized in project-data.json`);
    }
  });
};

const initializeApp = () => {
  renderProjects(projects);
  handleFiltering();
  handleProjectClicks();
  handleModalInteraction();
  handleContactForm();
  handleMobileMenu();
  handleScrollAnimations();
  handleParallax();
  setCurrentYear();
  validateProjectCategories();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
