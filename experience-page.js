const getUrlParams = () => {
  const params = new URLSearchParams(window.location.search);
  return {
    id: params.get('id')
  };
};

const findExperience = (experienceId) => {
  if (typeof window.experiences === 'undefined') {
    console.error('Experiences array not found');
    return null;
  }
  return window.experiences.find(e => e.id === experienceId);
};

const getNavigationExperiences = (currentExperience) => {
  const allExperiences = window.experiences || [];
  const currentIndex = allExperiences.findIndex(e => e.id === currentExperience.id);
  
  const prevIndex = currentIndex > 0 ? currentIndex - 1 : allExperiences.length - 1;
  const nextIndex = currentIndex < allExperiences.length - 1 ? currentIndex + 1 : 0;
  
  return {
    prev: allExperiences[prevIndex],
    next: allExperiences[nextIndex]
  };
};

const renderExperiencePage = (experience) => {
  if (!experience) {
    document.body.innerHTML = '<div class="min-h-screen flex items-center justify-center"><p class="text-xl text-muted">Experience not found</p></div>';
    return;
  }

  // Update page title
  const pageTitle = document.getElementById('experience-title');
  if (pageTitle) {
    pageTitle.textContent = `${experience.title} at ${experience.organization} | MofeOluwa Oladeji`;
  }

  // Update experience heading
  const heading = document.getElementById('experience-heading');
  if (heading) {
    heading.textContent = experience.title;
  }

  // Update organization
  const organization = document.getElementById('experience-organization');
  if (organization) {
    organization.textContent = experience.organization;
  }

  // Update period
  const period = document.getElementById('experience-period');
  if (period) {
    period.textContent = experience.period;
  }

  // Update type
  const type = document.getElementById('experience-type');
  if (type && experience.type) {
    type.textContent = experience.type;
  }

  // Update location
  const location = document.getElementById('experience-location');
  if (location && experience.location) {
    location.textContent = experience.location;
  }

  // Update summary
  const summary = document.getElementById('experience-summary');
  if (summary) {
    summary.textContent = experience.summary;
  }

  // Update description
  const description = document.getElementById('experience-description');
  if (description) {
    description.textContent = experience.description;
  }

  // Render responsibilities
  const responsibilitiesContainer = document.getElementById('experience-responsibilities');
  const responsibilitiesSection = document.getElementById('experience-responsibilities-section');
  if (responsibilitiesContainer && experience.responsibilities && experience.responsibilities.length > 0) {
    responsibilitiesContainer.innerHTML = '';
    experience.responsibilities.forEach(responsibility => {
      const li = document.createElement('li');
      li.className = 'flex gap-3 text-lg text-muted leading-relaxed';
      li.innerHTML = `<span class="text-primary mt-1">▹</span><span>${responsibility}</span>`;
      responsibilitiesContainer.appendChild(li);
    });
  } else if (responsibilitiesSection) {
    responsibilitiesSection.classList.add('hidden');
  }

  // Render skills
  const skillsContainer = document.getElementById('experience-skills');
  if (skillsContainer && experience.skills) {
    skillsContainer.innerHTML = '';
    experience.skills.forEach(skill => {
      const li = document.createElement('li');
      li.className = 'rounded-full border border-accent/20 bg-surface px-5 py-2 text-sm font-semibold text-accent';
      li.textContent = skill;
      skillsContainer.appendChild(li);
    });
  }

  // Render achievements
  const achievementsContainer = document.getElementById('experience-achievements');
  const achievementsSection = document.getElementById('experience-achievements-section');
  if (achievementsContainer && experience.achievements && experience.achievements.length > 0) {
    achievementsSection?.classList.remove('hidden');
    achievementsContainer.innerHTML = '';
    experience.achievements.forEach(achievement => {
      const li = document.createElement('li');
      li.className = 'flex gap-3 text-lg text-muted leading-relaxed';
      li.innerHTML = `<span class="text-primary mt-1">✓</span><span>${achievement}</span>`;
      achievementsContainer.appendChild(li);
    });
  }

  // Setup navigation
  const navigation = getNavigationExperiences(experience);
  
  const prevLink = document.getElementById('prev-experience');
  if (prevLink && navigation.prev) {
    prevLink.href = `experience.html?id=${navigation.prev.id}`;
    const prevTitle = prevLink.querySelector('.prev-experience-title');
    if (prevTitle) {
      prevTitle.textContent = `${navigation.prev.title} at ${navigation.prev.organization}`;
    }
  }

  const nextLink = document.getElementById('next-experience');
  if (nextLink && navigation.next) {
    nextLink.href = `experience.html?id=${navigation.next.id}`;
    const nextTitle = nextLink.querySelector('.next-experience-title');
    if (nextTitle) {
      nextTitle.textContent = `${navigation.next.title} at ${navigation.next.organization}`;
    }
  }
};

const handleMobileMenu = () => {
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
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

const setCurrentYear = () => {
  const yearNode = document.getElementById('year');
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear().toString();
  }
};

// Custom Diamond Cursor Implementation
const initCustomCursor = () => {
  const cursor = document.querySelector('.custom-cursor');
  if (!cursor) return;

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  let cursorTimeout;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    if (!cursor.classList.contains('active')) {
      cursor.classList.add('active');
    }
    
    clearTimeout(cursorTimeout);
    cursorTimeout = setTimeout(() => {
      cursor.classList.remove('active');
    }, 2000);
  });

  document.addEventListener('mousedown', () => {
    cursor.classList.add('clicking');
  });

  document.addEventListener('mouseup', () => {
    cursor.classList.remove('clicking');
  });

  const animateCursor = () => {
    const speed = 0.15;
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    requestAnimationFrame(animateCursor);
  };

  animateCursor();
};

// Beige Pattern Animation Implementation
const initBeigePatterns = () => {
  const canvas = document.getElementById('beige-patterns-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let particles = [];
  
  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  class Particle {
    constructor(x, y) {
      this.baseX = x;
      this.baseY = y;
      this.x = x;
      this.y = y;
      this.size = Math.random() * 3 + 1;
      this.speedX = Math.random() * 2 - 1;
      this.speedY = Math.random() * 2 - 1;
      this.alpha = Math.random() * 0.5 + 0.2;
    }

    update() {
      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 150;

      if (distance < maxDistance) {
        const force = (maxDistance - distance) / maxDistance;
        const angle = Math.atan2(dy, dx);
        this.x -= Math.cos(angle) * force * 3;
        this.y -= Math.sin(angle) * force * 3;
      } else {
        this.x += (this.baseX - this.x) * 0.05;
        this.y += (this.baseY - this.y) * 0.05;
      }

      this.x += this.speedX * 0.2;
      this.y += this.speedY * 0.2;
    }

    draw() {
      if (!ctx) return;
      ctx.fillStyle = `rgba(245, 240, 235, ${this.alpha})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const createParticles = () => {
    particles = [];
    const spacing = 80;
    const maxParticles = 150;
    let count = 0;
    
    for (let y = 0; y < canvas.height && count < maxParticles; y += spacing) {
      for (let x = 0; x < canvas.width && count < maxParticles; x += spacing) {
        particles.push(new Particle(x, y));
        count++;
      }
    }
  };

  createParticles();
  window.addEventListener('resize', createParticles);

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const animate = () => {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });

    ctx.strokeStyle = 'rgba(245, 240, 235, 0.15)';
    ctx.lineWidth = 0.5;
    const maxConnectionsPerParticle = 3;

    for (let i = 0; i < particles.length; i++) {
      let connections = 0;
      for (let j = i + 1; j < particles.length && connections < maxConnectionsPerParticle; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
          connections++;
        }
      }
    }

    requestAnimationFrame(animate);
  };

  animate();
};

const initExperiencePage = () => {
  const { id } = getUrlParams();
  
  if (!id) {
    window.location.href = './index.html#experience';
    return;
  }

  const experience = findExperience(id);
  renderExperiencePage(experience);
  handleMobileMenu();
  setCurrentYear();
  initCustomCursor();
  initBeigePatterns();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initExperiencePage);
} else {
  initExperiencePage();
}
