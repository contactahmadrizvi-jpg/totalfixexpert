// Fix Experts Oman - Main Interactive Script
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initBeforeAfterSlider();
  initGalleryCarousel();
  initGalleryLightbox();
  initForms();
  initDynamicComponents();
});

// Navigation Sticky & Mobile Menu
function initNavigation() {
  const header = document.querySelector("header");
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("active");
      // Animating burger lines
      const span1 = hamburger.children[0];
      const span2 = hamburger.children[1];
      const span3 = hamburger.children[2];
      if (hamburger.classList.contains("active")) {
        span1.style.transform = "rotate(45deg) translate(5px, 5px)";
        span2.style.opacity = "0";
        span3.style.transform = "rotate(-45deg) translate(6px, -6px)";
      } else {
        span1.style.transform = "none";
        span2.style.opacity = "1";
        span3.style.transform = "none";
      }
    });
  }

  // Close nav on link click
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      if (hamburger) {
        hamburger.classList.remove("active");
        Array.from(hamburger.children).forEach(s => s.removeAttribute("style"));
      }
    });
  });
}


// Before/After Slider Interaction
function initBeforeAfterSlider() {
  const sliders = document.querySelectorAll(".ba-slider");
  sliders.forEach(slider => {
    const beforeImage = slider.querySelector(".ba-before");
    const handle = slider.querySelector(".ba-handle");
    if (!beforeImage || !handle) return;

    let isResizing = false;

    const onMove = (clientX) => {
      const rect = slider.getBoundingClientRect();
      const position = ((clientX - rect.left) / rect.width) * 100;
      
      if (position >= 0 && position <= 100) {
        beforeImage.style.width = `${position}%`;
        handle.style.left = `${position}%`;
      }
    };

    const startResize = () => { isResizing = true; };
    const stopResize = () => { isResizing = false; };

    handle.addEventListener("mousedown", startResize);
    window.addEventListener("mouseup", stopResize);
    window.addEventListener("mousemove", (e) => {
      if (!isResizing) return;
      onMove(e.clientX);
    });

    // Touch events for mobile responsiveness
    handle.addEventListener("touchstart", startResize);
    window.addEventListener("touchend", stopResize);
    window.addEventListener("touchmove", (e) => {
      if (!isResizing) return;
      onMove(e.touches[0].clientX);
    });
  });
}

// Gallery Carousel
function initGalleryCarousel() {
  const track = document.getElementById("carousel-track");
  const dotsContainer = document.getElementById("carousel-dots");
  const prevBtn = document.querySelector(".carousel-btn-prev");
  const nextBtn = document.querySelector(".carousel-btn-next");
  if (!track || !prevBtn || !nextBtn) return;

  const slides = track.querySelectorAll(".carousel-slide");
  const totalSlides = slides.length;
  let currentIndex = 0;
  let autoPlayTimer = null;

  function getSlidesPerView() {
    if (window.innerWidth <= 540) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }

  function getMaxIndex() {
    return Math.max(0, totalSlides - getSlidesPerView());
  }

  function updateCarousel() {
    const perView = getSlidesPerView();
    const slideEl = slides[0];
    const gap = parseFloat(getComputedStyle(slideEl).marginRight) || 32;
    const slideWidth = slideEl.offsetWidth + gap;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    // Update dots
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll(".carousel-dot");
      dots.forEach((dot, i) => dot.classList.toggle("active", i === currentIndex));
    }
  }

  function buildDots() {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = "";
    const maxIdx = getMaxIndex();
    for (let i = 0; i <= maxIdx; i++) {
      const dot = document.createElement("button");
      dot.className = "carousel-dot" + (i === 0 ? " active" : "");
      dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
      dot.addEventListener("click", () => {
        currentIndex = i;
        updateCarousel();
        resetAutoPlay();
      });
      dotsContainer.appendChild(dot);
    }
  }

  function next() {
    currentIndex = currentIndex >= getMaxIndex() ? 0 : currentIndex + 1;
    updateCarousel();
  }

  function prev() {
    currentIndex = currentIndex <= 0 ? getMaxIndex() : currentIndex - 1;
    updateCarousel();
  }

  function resetAutoPlay() {
    clearInterval(autoPlayTimer);
    autoPlayTimer = setInterval(next, 4000);
  }

  nextBtn.addEventListener("click", () => { next(); resetAutoPlay(); });
  prevBtn.addEventListener("click", () => { prev(); resetAutoPlay(); });

  // Touch/swipe support
  let startX = 0;
  let isDragging = false;
  track.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; isDragging = true; }, { passive: true });
  track.addEventListener("touchend", (e) => {
    if (!isDragging) return;
    isDragging = false;
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
      resetAutoPlay();
    }
  });

  window.addEventListener("resize", () => {
    if (currentIndex > getMaxIndex()) currentIndex = getMaxIndex();
    buildDots();
    updateCarousel();
  });

  buildDots();
  updateCarousel();
  resetAutoPlay();
}

// Lightbox Modal for Gallery
function initGalleryLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const closeBtn = document.getElementById("lightbox-close");
  const galleryItems = document.querySelectorAll(".gallery-item");

  if (!lightbox) return;

  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      const title = item.querySelector("h4");
      if (img) {
        lightboxImg.src = img.src;
        lightboxCaption.textContent = title ? title.textContent : "";
        lightbox.style.display = "flex";
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  }

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
}


// Form Validation and Formspree Submission
function initForms() {
  // Show/hide "Other Services" text input
  const serviceSelect = document.getElementById("service");
  const otherServiceGroup = document.getElementById("other-service-group");
  const otherServiceInput = document.getElementById("other-service");

  if (serviceSelect && otherServiceGroup) {
    serviceSelect.addEventListener("change", () => {
      if (serviceSelect.value === "Other Services") {
        otherServiceGroup.style.display = "block";
        if (otherServiceInput) otherServiceInput.setAttribute("required", "required");
      } else {
        otherServiceGroup.style.display = "none";
        if (otherServiceInput) otherServiceInput.removeAttribute("required");
      }
    });
  }

  const forms = document.querySelectorAll("form");
  forms.forEach(form => {
    // Avoid double submit binding on search elements
    if (form.getAttribute("role") === "search") return;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Honeypot spam protection check
      const honeypot = form.querySelector('.hp-field input');
      if (honeypot && honeypot.value.trim() !== '') {
        // Bot detected - silently reject without showing error
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : "Submit";
      const formspreeAction = form.getAttribute("action");

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `Sending... <span class="spinner"></span>`;
      }

      // If form has Formspree action, submit via fetch
      if (formspreeAction && formspreeAction.includes("formspree.io")) {
        try {
          const formData = new FormData(form);
          const response = await fetch(formspreeAction, {
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
          });

          if (response.ok) {
            showToast("Success! Your service request has been received. Our team will contact you shortly.");
            form.reset();
            if (otherServiceGroup) otherServiceGroup.style.display = "none";
          } else {
            const data = await response.json();
            showToast(data.error || "Something went wrong. Please try again or WhatsApp us directly.");
          }
        } catch (err) {
          showToast("Network error. Please try again or WhatsApp us directly.");
        }
      } else {
        // Fallback for forms without Formspree
        setTimeout(() => {
          showToast("Success! Your service request has been received. Our team will contact you shortly.");
          form.reset();
        }, 1500);
      }

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    });
  });
}

// Show Toast Notification
function showToast(message) {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.style.cssText = `
      position: fixed;
      bottom: 85px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #0B1628;
      color: #FFFFFF;
      padding: 1rem 2rem;
      border-radius: 50px;
      font-weight: 600;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      z-index: 10000;
      border: 2px solid #D9A404;
      text-align: center;
      max-width: 90%;
      animation: fadeInUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    `;
    document.body.appendChild(container);
  }
  
  container.textContent = message;
  container.style.display = "block";
  
  setTimeout(() => {
    container.style.display = "none";
  }, 4000);
}

// Render dynamic elements based on pages (CMS logic)
function initDynamicComponents() {
  // Testimonials render (if container exists)
  const testimonialsContainer = document.getElementById("testimonials-wrapper");
  if (testimonialsContainer && typeof TESTIMONIALS_DATA !== "undefined") {
    testimonialsContainer.innerHTML = TESTIMONIALS_DATA.map(t => `
      <div class="testimonial-card">
        <div class="testimonial-header">
          <img class="testimonial-avatar" src="${t.avatar}" alt="${t.name}" loading="lazy">
          <div class="testimonial-info">
            <h4>${t.name}</h4>
            <p>${t.location}</p>
          </div>
        </div>
        <div class="star-rating">
          ${"★".repeat(t.rating)}${"☆".repeat(5 - t.rating)}
        </div>
        <p class="testimonial-body">"${t.comment}"</p>
      </div>
    `).join("");
  }


  // Services filtering (Home / Services pages)
  const serviceFilters = document.querySelectorAll(".filter-btn");
  const servicesContainer = document.getElementById("services-grid-wrapper");
  
  if (servicesContainer && typeof SERVICES_DATA !== "undefined") {
    const renderServices = (filter = "all") => {
      const filtered = filter === "all" ? SERVICES_DATA : SERVICES_DATA.filter(s => s.category === filter);
      servicesContainer.innerHTML = filtered.map(s => `
        <div class="service-card" data-category="${s.category}" data-id="${s.id}">
          <div class="service-image-container">
            <img src="${s.image}" alt="${s.title}" loading="lazy">
            <div class="service-icon-floating">
              ${s.icon}
            </div>
          </div>
          <div class="service-card-body">
            <h3>${s.title}</h3>
            <p>${s.description}</p>
            <div class="service-card-footer">
              <a href="services.html#${s.id}" class="link-arrow">Learn More &rarr;</a>
            </div>
          </div>
        </div>
      `).join("");
    };

    // Initial render
    renderServices();

    serviceFilters.forEach(btn => {
      btn.addEventListener("click", () => {
        serviceFilters.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderServices(btn.dataset.filter);
      });
    });
  }
}
