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
    description: "ItyreCare is a scalable service booking application built for a multi-branch automotive service provider in Dubai. The platform enables users to schedule a wide range of vehicle services — including engine diagnostics, air conditioning repair, and tire-related assistance such as puncture fixes — through a structured and dynamic booking workflow.",
    features: [
      "Select a specific service branch from multiple locations",
      "Choose from a categorized list of vehicle services",
      "Real-time slot-based scheduling with conflict prevention",
      "Multi-language support (English & Arabic) with RTL handling",
      "Firebase push notifications for booking status updates",
      "Firebase Phone Verification for secure user authentication",
      "API-driven architecture for scalable service and branch management"
    ],
    techStack: ["Flutter", "Dart", "REST APIs", "Firebase FCM", "Firebase Auth", "Localization (i18n)"],
    images: [
      "10jyl_U6OEokpf--FApKGMBkH-eggyVFi",
      "1yzkJ2ezmGfVMGDbnoVC0lKg36Z-Q2dXi"
    ],
    youtubeId: null
  },
  "sushi-guide": {
    name: "Sushi Guide",
    description: "Sushi Guide is a full-featured e-commerce application developed for the Lebanese market, focused on delivering a wide variety of Korean food products. The app provides a seamless end-to-end shopping experience — from product discovery to checkout — with a reward-based loyalty system that tracks and redeems points in real time to drive customer retention.",
    features: [
      "Dynamic product catalog with category-based filtering",
      "Cart and checkout system with multi-item support",
      "Secure API-based order placement flow",
      "Reward points tracking and redemption on every purchase",
      "Optimized state management for smooth UI with large datasets",
      "Modular and scalable architecture for product and order management"
    ],
    techStack: ["Flutter", "Dart", "Firebase Firestore", "Google Maps API", "Provider", "REST APIs"],
    images: [
      "1o2MydzbporO_F1BwV2Oy9PVr2R7yhy83",
      "1Mug9cuY0QLSipzgk0i6_f276rROoIjgS",
      "1pfVMVCUGWAEVWEKo2_s-YjQw-2atUKp6",
      "186c0oZKAHa11ZLBXaRWfIRe6dL6boUT9",
      "1bXIXC_C2CPxrbGnq9K2_mdNODj7ELGWp"
    ],
    youtubeId: "7q1ZCX5JGa0"
  },
  lama: {
    name: "Lama",
    description: "Lama is a service-based mobile application designed to streamline event planning by connecting users with a variety of service providers — including catering, ice cream services, and other event solutions for both small and large-scale events. Users select services through predefined packages at multiple pricing tiers and provide event details such as date and guest count for better customization.",
    features: [
      "Structured booking flow with predefined service packages",
      "Multiple pricing tiers per service for flexible selection",
      "Event detail input (date, guest count) for service customization",
      "GetX state management and navigation for smooth UX",
      "Multi-language support (English & Arabic) with RTL UI handling",
      "API-driven service listings and package configuration"
    ],
    techStack: ["Flutter", "Dart", "GetX", "REST APIs", "Localization (i18n)", "RTL Support"],
    images: [
      "1cZUOyyipfQ0XuSyUVtXHp8AGRS3iS0Mf",
      "1fkJv9QYPf6HZ_namiCiLBF1R_JyLydoP",
      "1-uDm7-B-FAbC0ldnqGxa6WtQng7GF7FP",
      "1sfU1bIc0E2eFpcubbY2V-xWQMG1V1nMg"
    ],
    youtubeId: null
  },
  junction: {
    name: "Junction",
    description: "Junction is a large-scale, multi-role automotive service platform built for the Bahrain market, connecting customers, workshops, and truck drivers within a unified ecosystem. Customers can book multiple services in a single session, workshops manage requests and send custom quotations, and truck drivers receive location-based towing requests with live tracking — all in real time.",
    features: [
      "Multi-role platform: Customer, Workshop, and Truck Driver modules",
      "Google Maps integration for live location and nearby workshop discovery",
      "Real-time truck driver tracking via WebSockets",
      "Combine multiple services (oil change, car wash, towing) in one booking",
      "Workshop quotation system with user approval flow",
      "Real-time booking timeline for service progress tracking",
      "Time-bound request acceptance window for truck drivers (e.g. 5 min)",
      "Firebase push notifications and authentication"
    ],
    techStack: ["Flutter", "Dart", "GetX", "Firebase", "Google Maps API", "WebSockets", "REST APIs"],
    images: [
      "1WrU8UAJPlpyIJCnUHyDt4mQBwng0i1xH",
      "1MMnUxJkonhuNmy3-Ag8bnZUe5O9BHIbh",
      "1-FoQbiqYWxHu4dnAsc5AuWfuUnw5Z2TG",
      "1LgJnJABvlxlPMqb-lYusHbTSw9dKcwSX"
    ],
    youtubeId: "xrbrGvAx3fQ"
  },
  expatio: {
    name: "Expatio",
    description: "Expatio is a feature-rich social and business networking platform connecting users across regions to interact, share opportunities, and build communities based on origin and current location. The platform supports posts, jobs, events, and ads with a fully interactive feed, real-time WebSocket chat, deep linking via Branch.io, a matrimonial matchmaking module, and dynamic feature control via Firebase Remote Config.",
    features: [
      "Social feed with posts, jobs, events, and ads — like, comment, repost, bookmark, mention",
      "Real-time one-to-one chat using WebSockets",
      "Community segmentation by birth country and current country",
      "Business profiles with Google Business integration",
      "Matrimonial module with matchmaking and in-app messaging",
      "Deep linking via Branch.io for shareable content across platforms",
      "Follow system for users and businesses",
      "Dynamic feature toggling via Firebase Remote Config",
      "Firebase Analytics, Crashlytics, and FCM push notifications",
      "Full Dark and Light theme support"
    ],
    techStack: ["Flutter", "Dart", "GetX", "WebSockets", "Firebase Analytics", "Firebase Crashlytics", "Firebase Remote Config", "FCM", "Google Maps API", "Branch.io", "REST APIs"],
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
    youtubeId: "Fv03uaYunEg?start=1"
  },
  "expatio-chat": {
    name: "Expatio — Real-Time Chat",
    description: "The real-time chat system built into Expatio delivers a WhatsApp-style messaging experience powered by WebSockets. It supports one-on-one conversations with sub-second message delivery, live typing indicators, read receipts (sent, delivered, read), and online/offline presence — all within a familiar, intuitive chat UI.",
    features: [
      "Real-time messaging via WebSockets with sub-second delivery",
      "One-on-one chat with WhatsApp-style message bubbles and timestamps",
      "Live typing indicators and online/offline presence",
      "Read receipts: sent, delivered, and read states",
      "Media and file sharing support",
      "Message history with infinite scroll",
      "Seamlessly integrated into the Expatio social platform"
    ],
    techStack: ["Flutter", "Dart", "WebSockets", "Bloc", "REST APIs"],
    images: [],
    youtubeId: "H8UqLO6LKIg?start=1"
  },
  getfit: {
    name: "GetFit",
    description: "GetFit is a large-scale fitness and health tracking platform built around a multi-role ecosystem of trainees, trainers, and administrators. Trainees receive personalized workout and diet plans based on their goals, track calories and progress through interactive charts, and sync health data from Apple Health and Google Fit. Trainers manage all assigned trainees, create custom plans, and monitor progress in real time.",
    features: [
      "Multi-role platform: Trainee, Trainer, and Admin modules",
      "Onboarding flow capturing height, weight, goals, and workout preferences",
      "Personalized workout routines and diet plans assigned by trainers",
      "Progressive workout system — complete exercises to unlock next steps",
      "Apple HealthKit (iOS) and Health Connect / Google Fit (Android) integration",
      "Calorie tracking with burned vs. remaining visualized in charts",
      "Trainer dashboard to create, assign, and update plans per trainee",
      "Structured diet plans (breakfast, lunch, dinner) with daily targets",
      "Firebase push notifications for reminders and updates"
    ],
    techStack: ["Flutter", "Dart", "GetX", "HealthKit", "Health Connect", "Google Fit", "Firebase FCM", "REST APIs", "Charts"],
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
    description: "SelectnElect is a political engagement platform designed to enhance transparency and voter awareness during US elections. Users can discover and compare political candidates, follow politicians and parties, engage with a public content feed, and participate in civic issue tracking — all within a structured multi-role ecosystem of voters, politicians, parties, and organizations.",
    features: [
      "Politician discovery and search by region and election status",
      "Side-by-side candidate comparison for informed decision-making",
      "Political profiles with election participation and campaign posts",
      "Follow and endorsement system for politicians and parties",
      "Public issue tracking (healthcare, education, infrastructure)",
      "Organizations, parties, and business entity management",
      "Job board, campaign events, and volunteer recruitment per party",
      "Centralized home feed for politician updates and announcements"
    ],
    techStack: ["Flutter", "Dart", "GetX", "REST APIs", "Search & Comparison Algorithms"],
    images: [
      "1Iuyl5qtdptanEzlCL4wTKDZlB3lVDPGI",
      "1uUuGM7tUse7L73uYnzYTTv87rVa8ajJQ",
      "1N9BQW8wWPfmROfgOCl82NzpY0WpcYf3H",
      "1cAqyRMw-1ZZSkvxxOUUYRIJdnU8IW3yD",
      "1FA1Tihbk9dQe4uZc4V_KhQEtvin4RDLA"
    ],
    youtubeId: null
  },
  asas: {
    name: "ASAS",
    description: "ASAS is an ongoing real estate digital platform streamlining collaboration between property owners, architectural planners, and real estate companies. Users can share architectural plans with multiple companies, negotiate pricing, communicate via real-time chat, estimate project budgets, and manage invoices — all within a single structured ecosystem.",
    features: [
      "Architectural plan sharing with registered companies for review and collaboration",
      "Multi-company invitation and in-platform price negotiation",
      "Real-time one-to-one chat via WebSockets for project discussions",
      "Built-in budget estimation calculator based on selected services",
      "Invoice management system for tracking and record-keeping",
      "Company listings and services directory for provider comparison",
      "Direct service booking from listed companies",
      "Scalable B2B and B2C architecture"
    ],
    techStack: ["Flutter", "Dart", "GetX", "WebSockets", "REST APIs"],
    images: [
      "11DHtI0BLeNuVAYwCVlQ59AbbRqcsw_o3",
      "1JEQiOTxSjvhnn88hjTyY4LPW5Q1rF6ak",
      "1UL_NLl4ZGckf1Q2zlbhKUbaeilYjdWz_",
      "15t8WCdUKo4--y8ApAMHQmLEDnZ1SXsDs",
      "1h4fFBFjDdxB5PRcoCPDws5cNl7MhfR99",
      "1BykaaR0UL0FwUBrFwIVfmVJrcnhRUh93",
      "1wY5UCz7L89gbUp3hc7294Ct1n0OHosE-"
    ],
    youtubeId: "GEBIoI3qjq4"
  },
  "snake-xenzia": {
    name: "Snake Xenzia",
    description: "Snake Xenzia is a modern 2D arcade game inspired by the iconic Nokia Snake, rebuilt using the Flame Engine to deliver smooth performance and real-time gameplay on modern mobile devices. The game preserves the nostalgic mechanics of the original while enhancing it with improved visuals, responsiveness, and customizable themes. As the snake grows, the game dynamically increases in difficulty — encouraging strategic movement and quick decision-making.",
    features: [
      "Classic Snake mechanics faithfully recreated with smooth animations",
      "Dual control system: on-screen directional buttons + gesture swipe controls",
      "5 customizable visual themes for personalized gameplay",
      "Progressive difficulty — speed and complexity increase as the snake grows",
      "Collision detection system for wall and self-collision",
      "2D grid-based movement system for precise positioning",
      "Optimized game loop for consistent frame rates across devices",
      "Expandable architecture for future leaderboards, levels, and sound effects"
    ],
    techStack: ["Flutter", "Flame Engine", "GetX", "Custom Game Loop", "Gesture Detection", "Collision Detection"],
    images: [],
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
               src="https://drive.google.com/thumbnail?id=${id}&sz=w800"
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
