// ============================================
// PREMIUM PORTFOLIO JAVASCRIPT
// Advanced Animations & Interactions - Ultra Modern
// ============================================

// ========== SCROLL PROGRESS BAR ==========
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.querySelector('.scroll-progress').style.width = scrollPercent + '%';
  
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  if (scrollTop > 50) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
});

// ========== MOBILE MENU TOGGLE ==========
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
  });

  // Close menu when link is clicked
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });
}

// ========== DOWNLOAD CV BUTTON ==========
const downloadCVBtn = document.getElementById('downloadCVBtn');
if (downloadCVBtn) {
  downloadCVBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'Harsh_Raj_CV.pdf.docx';
    link.download = 'Harsh_Raj_CV.pdf.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

// ========== CERTIFICATE MODAL FUNCTIONS ==========
function openCertificateModal(imagePath) {
  const modal = document.getElementById('certificateModal');
  const modalImg = document.getElementById('certificateModalImg');
  modal.classList.add('active');
  modalImg.src = imagePath;
}

function closeCertificateModal() {
  const modal = document.getElementById('certificateModal');
  modal.classList.remove('active');
}

// Close modal when clicking outside the image
document.addEventListener('click', (e) => {
  const modal = document.getElementById('certificateModal');
  if (e.target === modal) {
    closeCertificateModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeCertificateModal();
  }
});

// ========== GALLERY MODAL FUNCTIONS ==========
let currentGalleryIndex = 0;
let allGalleryImages = [];

function openGalleryModal(imageSrc) {
  const modal = document.getElementById('galleryModal');
  const modalImg = document.getElementById('galleryModalImg');
  
  // Get all carousel images
  allGalleryImages = Array.from(document.querySelectorAll('.carousel-image')).map(img => img.src);
  
  // Find current image index
  currentGalleryIndex = allGalleryImages.indexOf(imageSrc);
  
  modal.style.display = 'flex';
  modalImg.src = imageSrc;
  document.body.style.overflow = 'hidden';
}

function closeGalleryModal() {
  const modal = document.getElementById('galleryModal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

function changeGalleryImage(direction) {
  currentGalleryIndex += direction;
  
  // Loop around
  if (currentGalleryIndex >= allGalleryImages.length) {
    currentGalleryIndex = 0;
  } else if (currentGalleryIndex < 0) {
    currentGalleryIndex = allGalleryImages.length - 1;
  }
  
  const modalImg = document.getElementById('galleryModalImg');
  modalImg.style.animation = 'none';
  setTimeout(() => {
    modalImg.src = allGalleryImages[currentGalleryIndex];
    modalImg.style.animation = 'scaleIn 0.4s ease';
  }, 50);
}

// Close gallery modal when clicking outside the image
document.addEventListener('click', (e) => {
  const modal = document.getElementById('galleryModal');
  if (e.target === modal) {
    closeGalleryModal();
  }
});

// Close gallery modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeGalleryModal();
  }
  // Arrow keys to navigate
  if (e.key === 'ArrowRight') {
    changeGalleryImage(1);
  } else if (e.key === 'ArrowLeft') {
    changeGalleryImage(-1);
  }
});

// ========== CAROUSEL FUNCTIONALITY ==========
let currentCarouselIndex = 0;
const carouselTrack = document.getElementById('carouselTrack');
const carouselItems = document.querySelectorAll('.carousel-item');
const itemsPerView = window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1;

// Generate carousel indicators
function generateCarouselIndicators() {
  const indicatorsContainer = document.getElementById('carouselIndicators');
  const totalSlides = Math.ceil(carouselItems.length / itemsPerView);
  
  for (let i = 0; i < totalSlides; i++) {
    const indicator = document.createElement('div');
    indicator.className = 'carousel-indicator';
    if (i === 0) indicator.classList.add('active');
    indicator.onclick = () => goToCarouselSlide(i);
    indicatorsContainer.appendChild(indicator);
  }
}

// Scroll carousel
function scrollCarousel(direction) {
  const itemsPerView = window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1;
  const maxIndex = Math.ceil(carouselItems.length / itemsPerView) - 1;
  
  currentCarouselIndex += direction;
  
  if (currentCarouselIndex > maxIndex) {
    currentCarouselIndex = 0;
  } else if (currentCarouselIndex < 0) {
    currentCarouselIndex = maxIndex;
  }
  
  updateCarouselPosition();
}

// Go to specific carousel slide
function goToCarouselSlide(index) {
  currentCarouselIndex = index;
  updateCarouselPosition();
}

// Update carousel position
function updateCarouselPosition() {
  const itemsPerView = window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1;
  const itemWidth = (100 / itemsPerView);
  const gapWidth = (1.5 * 16) / (window.innerWidth > 0 ? window.innerWidth : 1); // Convert gap to percentage
  const offset = -(currentCarouselIndex * itemWidth);
  
  carouselTrack.style.transform = `translateX(${offset}%)`;
  
  // Update indicators
  document.querySelectorAll('.carousel-indicator').forEach((indicator, index) => {
    if (index === currentCarouselIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

// Handle window resize for responsive carousel
window.addEventListener('resize', () => {
  updateCarouselPosition();
});

// Initialize carousel on page load
document.addEventListener('DOMContentLoaded', () => {
  generateCarouselIndicators();
});

// ========== SMOOTH SCROLL ==========
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// ========== INTERSECTION OBSERVER FOR SCROLL ANIMATIONS ==========
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      // Stagger animate child elements
      const children = entry.target.querySelectorAll('.project-card, .cert-card, .skill-item, .leadership-card, .repo-card');
      children.forEach((child, index) => {
        setTimeout(() => {
          child.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s both`;
        }, 0);
      });
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// ========== COUNTER ANIMATION WITH INTERSECTION OBSERVER ==========
const countersAbout = document.querySelectorAll('.counter-about');

const counterObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.counted) {
      entry.target.dataset.counted = 'true';
      animateCounter(entry.target);
    }
  });
}, { threshold: 0.5 });

countersAbout.forEach(counter => {
  counterObserver.observe(counter);
});

function animateCounter(counter) {
  const target = +counter.getAttribute('data-target');
  const duration = 2000;
  const increment = target / (duration / 20);
  let current = 0;

  const updateCounter = () => {
    current += increment;
    if (current < target) {
      counter.innerText = Math.ceil(current);
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Open email client
    window.location.href = `mailto:harshrajb46@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(message)}%0A%0AFrom: ${email}`;
    
    // Reset form
    this.reset();
  });
}

// Navbar Hide/Show on Scroll
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (navbar) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      navbar.style.transform = 'translateY(-100%)';
    } else {
      navbar.style.transform = 'translateY(0)';
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }
});

// Active Nav Link on Scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
});

// Add Active Link Styling
const style = document.createElement('style');
style.textContent = `
  .nav-link.active {
    color: #6366f1 !important;
  }
  .nav-link.active::after {
    width: 100% !important;
  }
`;
document.head.appendChild(style);

// Skill Progress Bar Animation
window.addEventListener('load', () => {
  const skillBars = document.querySelectorAll('.skill-progress');
  skillBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.transition = 'width 1s ease-out';
      bar.style.width = width;
    }, 100);
  });
});

// Parallax Effect on Particles (Optional)
window.addEventListener('mousemove', (e) => {
  const particles = document.querySelectorAll('.particle');
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  particles.forEach((particle, index) => {
    const speed = (index + 1) * 10;
    particle.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
  });
});

// Scroll to Top Button (Optional Addition)
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 999;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
  font-size: 1.2rem;
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.style.display = 'flex';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

scrollTopBtn.addEventListener('mouseover', () => {
  scrollTopBtn.style.transform = 'translateY(-5px)';
});

scrollTopBtn.addEventListener('mouseout', () => {
  scrollTopBtn.style.transform = 'translateY(0)';
});

// Typing Effect for Hero Title (Optional)
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
  const text = heroTitle.textContent;
  heroTitle.textContent = '';
  let index = 0;

  function typeText() {
    if (index < text.length) {
      heroTitle.textContent += text.charAt(index);
      index++;
      setTimeout(typeText, 50);
    }
  }

  // Start typing after a small delay
  setTimeout(typeText, 500);
}