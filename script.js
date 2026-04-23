// script.js — Portfolio interactivity

// ---------------------------------------------------------------------------
// Pure utility functions
// ---------------------------------------------------------------------------

/**
 * Returns true if scrollY is strictly greater than threshold.
 * Never throws for any numeric inputs.
 * @param {number} scrollY
 * @param {number} threshold
 * @returns {boolean}
 */
function isScrolled(scrollY, threshold) {
  return scrollY > threshold;
}

// ---------------------------------------------------------------------------
// Project data
// ---------------------------------------------------------------------------

const PROJECT_DATA = {
  ityrecare: {
    name: "ItyreCare",
    description: "ItyreCare is a comprehensive tyre management and roadside assistance app built with Flutter. It connects drivers with nearby service providers in real time, offering tyre health tracking and emergency support. The app integrates Google Maps for live location sharing and Firebase for instant push notifications.",
    features: [
      "Real-time roadside assistance request and tracking",
      "Tyre health monitoring and service history",
      "Live location sharing with service providers via Google Maps",
      "Push notifications for request status updates",
      "In-app chat between driver and technician"
    ],
    techStack: ["Flutter", "Dart", "Firebase", "Google Maps API", "FCM", "REST APIs"],
    images: [],
    youtubeId: null
  },
  "sushi-guide": {
    name: "Sushi Guide",
    description: "Sushi Guide is a beautifully designed Flutter app that helps sushi enthusiasts discover, learn about, and order their favourite rolls. It features a curated catalogue of sushi types with detailed descriptions, ingredient breakdowns, and pairing suggestions. Users can save favourites and find nearby sushi restaurants.",
    features: [
      "Curated sushi catalogue with descriptions and photos",
      "Ingredient breakdown and allergen information",
      "Food pairing and sake recommendations",
      "Nearby restaurant finder with map integration",
      "Personal favourites list with offline access"
    ],
    techStack: ["Flutter", "Dart", "Firebase Firestore", "Google Maps API", "Provider"],
    images: [
      "1o2MydzbporO_F1BwV2Oy9PVr2R7yhy83",
      "1Mug9cuY0QLSipzgk0i6_f276rROoIjgS",
      "1pfVMVCUGWAEVWEKo2_s-YjQw-2atUKp6",
      "186c0oZKAHa11ZLBXaRWfIRe6dL6boUT9",
      "1bXIXC_C2CPxrbGnq9K2_mdNODj7ELGWp"
    ],
    youtubeId: null
  },
  lama: {
    name: "Lama",
    description: "Lama is a social learning platform built with Flutter that connects students and tutors for on-demand academic help. It supports live video sessions, shared whiteboards, and structured course content. Firebase powers real-time messaging and session scheduling.",
    features: [
      "On-demand tutor matching by subject and availability",
      "Live video sessions with shared whiteboard",
      "Structured course modules and progress tracking",
      "Real-time in-app messaging between students and tutors",
      "Session ratings and tutor review system"
    ],
    techStack: ["Flutter", "Dart", "Firebase", "WebSockets", "REST APIs", "GetX"],
    images: [],
    youtubeId: null
  },
  junction: {
    name: "Junction",
    description: "Junction is a community-driven event discovery app that helps users find and join local events, meetups, and hackathons. Built with Flutter, it uses location services to surface nearby events and lets organisers publish and manage their listings. Attendees can RSVP, receive reminders, and connect with other participants.",
    features: [
      "Location-based event discovery and filtering",
      "Event creation and management for organisers",
      "RSVP and attendee management",
      "In-app networking and attendee profiles",
      "Push notification reminders for upcoming events"
    ],
    techStack: ["Flutter", "Dart", "Firebase", "Google Maps API", "FCM", "Bloc"],
    images: [
      "1WrU8UAJPlpyIJCnUHyDt4mQBwng0i1xH",
      "1MMnUxJkonhuNmy3-Ag8bnZUe5O9BHIbh",
      "1-FoQbiqYWxHu4dnAsc5AuWfuUnw5Z2TG",
      "1LgJnJABvlxlPMqb-lYusHbTSw9dKcwSX"
    ],
    youtubeId: null
  },
  expatio: {
    name: "Expatio",
    description: "Expatio is a relocation companion app designed for expats moving to a new country. It provides curated guides on housing, healthcare, banking, and local culture, along with a community forum for peer advice. The app uses Firebase to sync user-generated content and personalised checklists across devices.",
    features: [
      "Country and city relocation guides",
      "Personalised moving checklist with progress tracking",
      "Community forum for expat peer advice",
      "Local services directory (housing, healthcare, banking)",
      "Multi-language support and currency converter"
    ],
    techStack: ["Flutter", "Dart", "Firebase Firestore", "Firebase Auth", "REST APIs", "Provider"],
    images: [
      "1GemN5X6bo8pt_xw0dciV3fWOvMpeKwZv",
      "114Z9AOazVAZv24CXz6S6ACes64m-w7RF",
      "1kt6a230YqeR-ePVIomWrrckaqMbsFMUI",
      "1FzCm7P6Tj6iIp-L-Qc-XMTgira4BxR7M",
      "1my0EwjCrNAs7X-R7b_-4F_Yc02Vnv0wY",
      "16fHYcaykq4TFBq6gSmEnVyqGoCc7Ky73",
      "1UZNLsHFV7gm_KZeWHygygiy8rOaTI-tO",
      "1X1Q7N4iFgS-7680E1K98r86kDA6N3A1B",
      "1T0HKIPltGKEkqVDjFu-C3foOp6km52qK",
      "1IACYqwoMKdaLicTJKKMVxvNWM_acjecZ"
    ],
    youtubeId: null
  },
  "expatio-chat": {
    name: "Expatio — Real-Time Chat",
    description: "A WhatsApp-style real-time chat system built as a core feature of Expatio. Powered by WebSockets for sub-second message delivery, it supports one-on-one and group conversations with live typing indicators, read receipts, and online presence. The UI closely mirrors WhatsApp's familiar chat experience, making it instantly intuitive for users.",
    features: [
      "Real-time messaging via WebSockets with sub-second delivery",
      "One-on-one and group chat support",
      "Live typing indicators and online/offline presence",
      "Read receipts (sent, delivered, read)",
      "WhatsApp-style chat UI with message bubbles and timestamps",
      "Media and file sharing support",
      "Message history with infinite scroll"
    ],
    techStack: ["Flutter", "Dart", "WebSockets", "Bloc", "REST APIs"],
    images: [],
    youtubeId: null
  },
  getfit: {
    name: "GetFit",
    description: "GetFit is a personal fitness tracking app built with Flutter that integrates with HealthKit and Google Fit to aggregate workout and health data. Users can set fitness goals, log custom workouts, and monitor progress through interactive charts. The app sends motivational reminders via FCM to keep users on track.",
    features: [
      "HealthKit and Google Fit integration for automatic activity sync",
      "Custom workout builder and exercise library",
      "Goal setting with progress visualisation charts",
      "Daily and weekly fitness summary reports",
      "Motivational push notification reminders"
    ],
    techStack: ["Flutter", "Dart", "HealthKit", "Google Fit", "Firebase", "FCM", "GetX"],
    images: [
      "1EqikrkMbl6FUO2hxlqpwediB8_rBPHgI",
      "1wTsZKb_1G26hTE3wEu94JVSkE3nVFBDA",
      "1J_WgNoUUaAn3YRQalyR1u9jLvI5QWZXN",
      "1Y4vMv2gwz77-rAE6jCVlxSg4yuKl0fA4"
    ],
    youtubeId: null
  },
  selectnelect: {
    name: "SelectnElect",
    description: "SelectnElect is a civic engagement app that simplifies the voting and candidate selection process for local elections. It presents candidate profiles, policy summaries, and voting guides in a clean, accessible Flutter interface. Users can compare candidates side by side and share their choices with their community.",
    features: [
      "Candidate profiles with policy summaries",
      "Side-by-side candidate comparison tool",
      "Voting guide and polling location finder",
      "Community sharing and discussion threads",
      "Election reminders and result notifications"
    ],
    techStack: ["Flutter", "Dart", "Firebase", "REST APIs", "Bloc", "Google Maps API"],
    images: [],
    youtubeId: null
  },
  asas: {
    name: "ASAS",
    description: "ASAS is a property management platform built with Flutter that streamlines the relationship between landlords and tenants. It handles rent collection, maintenance requests, and lease document management in one place. Real-time notifications via Firebase keep both parties informed of any updates or actions required.",
    features: [
      "Digital lease management and document storage",
      "Online rent collection and payment history",
      "Maintenance request submission and tracking",
      "Real-time notifications for landlords and tenants",
      "Multi-property dashboard for landlords"
    ],
    techStack: ["Flutter", "Dart", "Firebase", "FCM", "REST APIs", "Provider"],
    images: [
      "11DHtI0BLeNuVAYwCVlQ59AbbRqcsw_o3",
      "1JEQiOTxSjvhnn88hjTyY4LPW5Q1rF6ak",
      "1UL_NLl4ZGckf1Q2zlbhKUbaeilYjdWz_",
      "15t8WCdUKo4--y8ApAMHQmLEDnZ1SXsDs",
      "1h4fFBFjDdxB5PRcoCPDws5cNl7MhfR99",
      "1BykaaR0UL0FwUBrFwIVfmVJrcnhRUh93",
      "1wY5UCz7L89gbUp3hc7294Ct1n0OHosE-"
    ],
    youtubeId: null
  }
};

// ---------------------------------------------------------------------------
// Modal content lookup
// ---------------------------------------------------------------------------

/**
 * Returns the project data object for a known slug, or null for unknown slugs.
 * Never throws.
 * @param {string} projectId
 * @param {Object} projectData
 * @returns {Object|null}
 */
function getModalContent(projectId, projectData) {
  const entry = projectData[projectId];
  return entry !== undefined ? entry : null;
}

// ---------------------------------------------------------------------------
// CommonJS export shim — allows Vitest to import these functions while the
// file still works as a plain browser script loaded with <script defer>.
// ---------------------------------------------------------------------------
if (typeof module !== 'undefined') {
  module.exports = { isScrolled, getModalContent, PROJECT_DATA };
}

// ---------------------------------------------------------------------------
// DOM initialisation
// ---------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  // ---- Scroll Reveal ----
  const revealEls = document.querySelectorAll('.reveal');

  if (typeof IntersectionObserver === 'undefined') {
    // Feature not supported — remove reveal class so elements stay visible
    revealEls.forEach((el) => el.classList.remove('reveal'));
  } else if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // User prefers reduced motion — show all immediately
    revealEls.forEach((el) => el.classList.add('reveal--visible'));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach((el) => revealObserver.observe(el));

    // Safety fallback: if any elements are still hidden after 1.5s
    // (e.g. observer didn't fire for above-the-fold content), reveal them all.
    setTimeout(() => {
      revealEls.forEach((el) => el.classList.add('reveal--visible'));
    }, 1500);
  }

  // ---- Navbar ----
  const navbar = document.getElementById('navbar');
  const navMenu = document.querySelector('.nav-menu');
  const hamburger = document.querySelector('.hamburger');

  // ---- Back-to-Top ----
  const backToTop = document.getElementById('back-to-top');

  // Scroll listener: toggle navbar--scrolled and back-to-top--visible
  window.addEventListener('scroll', () => {
    if (navbar) {
      navbar.classList.toggle('navbar--scrolled', isScrolled(window.scrollY, 50));
    }
    if (backToTop) {
      backToTop.classList.toggle('back-to-top--visible', isScrolled(window.scrollY, 300));
    }
  });

  // Back-to-top click: smooth scroll to top
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Hamburger click: toggle nav-menu--open
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('nav-menu--open');
    });
  }

  // Nav link clicks: close the mobile menu
  if (navMenu) {
    navMenu.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('nav-menu--open');
      });
    });
  }

  // ---- Modal ----
  const modalOverlay = document.getElementById('modal-overlay');
  const modalBody = modalOverlay.querySelector('.modal-body');

  function openModal(projectId) {
    const content = getModalContent(projectId, PROJECT_DATA);
    if (!content) {
      console.warn('No project data for:', projectId);
      return;
    }

    const featuresHtml = content.features
      .map((f) => `<li>${f}</li>`)
      .join('');

    const techHtml = content.techStack
      .map((t) => `<span class="modal-tech-tag">${t}</span>`)
      .join('');

    // Image slideshow — only rendered when images array is non-empty
    let galleryHtml = '';
    if (content.images && content.images.length > 0) {
      const imgs = content.images
        .map((id, i) =>
          `<img class="gallery-slide${i === 0 ? ' gallery-slide--active' : ''}"
               src="https://drive.google.com/uc?export=view&id=${id}"
               alt="${content.name} screenshot ${i + 1}"
               loading="lazy" />`
        )
        .join('');

      const dots = content.images.length > 1
        ? `<div class="gallery-dots">${content.images
            .map((_, i) => `<button class="gallery-dot${i === 0 ? ' gallery-dot--active' : ''}" data-index="${i}" aria-label="Image ${i + 1}"></button>`)
            .join('')}</div>`
        : '';

      const arrows = content.images.length > 1
        ? `<button class="gallery-arrow gallery-arrow--prev" aria-label="Previous image"><i class="ri-arrow-left-s-line"></i></button>
           <button class="gallery-arrow gallery-arrow--next" aria-label="Next image"><i class="ri-arrow-right-s-line"></i></button>`
        : '';

      galleryHtml = `<div class="modal-gallery">${arrows}${imgs}${dots}</div>`;
    }

    const videoHtml = content.youtubeId
      ? `<h3>Demo</h3><div class="modal-video"><iframe src="https://www.youtube.com/embed/${content.youtubeId}" allowfullscreen loading="lazy" title="${content.name} demo"></iframe></div>`
      : '';

    modalBody.innerHTML = `
      <h2 id="modal-title">${content.name}</h2>
      ${galleryHtml}
      <p>${content.description}</p>
      <h3>Features</h3>
      <ul>${featuresHtml}</ul>
      <h3>Tech Stack</h3>
      <div class="modal-tech-tags">${techHtml}</div>
      ${videoHtml}
    `;

    // Wire up gallery controls if multiple images
    if (content.images && content.images.length > 1) {
      const slides = modalBody.querySelectorAll('.gallery-slide');
      const dots = modalBody.querySelectorAll('.gallery-dot');
      let current = 0;

      function goTo(index) {
        slides[current].classList.remove('gallery-slide--active');
        dots[current].classList.remove('gallery-dot--active');
        current = (index + slides.length) % slides.length;
        slides[current].classList.add('gallery-slide--active');
        dots[current].classList.add('gallery-dot--active');
      }

      modalBody.querySelector('.gallery-arrow--prev').addEventListener('click', () => goTo(current - 1));
      modalBody.querySelector('.gallery-arrow--next').addEventListener('click', () => goTo(current + 1));
      dots.forEach((dot) => dot.addEventListener('click', () => goTo(Number(dot.dataset.index))));
    }

    modalOverlay.classList.add('modal--open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('modal--open');
    document.body.style.overflow = '';
  }

  // Wire up "View Details" buttons
  document.querySelectorAll('.btn-details').forEach((btn) => {
    btn.addEventListener('click', () => openModal(btn.dataset.project));
  });

  // Close on overlay backdrop click
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // Close on × button
  modalOverlay.querySelector('.modal-close').addEventListener('click', closeModal);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
});
