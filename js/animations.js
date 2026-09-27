/**
 * AIS SOCIAL GROWTH SYSTEM - LIGHTWEIGHT ANIMATIONS & OBSERVERS
 * Alag Innovative Solutions
 * 
 * Provides smooth scroll-triggered reveals, metric counters, and 
 * diagram stage sequencers without heavy third-party dependencies.
 */

const AIS_ANIMATIONS = {
  initScrollReveals: function() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      document.querySelectorAll(".reveal-init").forEach(el => {
        el.classList.remove("reveal-init");
      });
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          
          // Trigger counter animation if element contains counters
          const counters = entry.target.querySelectorAll("[data-counter-target]");
          counters.forEach(counter => AIS_ANIMATIONS.animateCounter(counter));

          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".reveal-init").forEach(el => {
      revealObserver.observe(el);
    });
  },

  // Smooth Counter Animation for metrics (e.g. 10 Industries, 8 Moving Parts, etc.)
  animateCounter: function(counterEl) {
    if (counterEl.dataset.counted === "true") return;
    counterEl.dataset.counted = "true";

    const target = parseInt(counterEl.dataset.counterTarget, 10);
    const duration = 1200; // ms
    const startTime = performance.now();
    const prefix = counterEl.dataset.counterPrefix || "";
    const suffix = counterEl.dataset.counterSuffix || "";

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeProgress * target);

      counterEl.textContent = `${prefix}${currentVal}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        counterEl.textContent = `${prefix}${target}${suffix}`;
      }
    }

    requestAnimationFrame(step);
  },

  // System Diagram Interactive Highlighter
  initSystemDiagramPulse: function() {
    const nodes = document.querySelectorAll(".system-stage-card");
    if (!nodes.length) return;

    let currentIndex = 0;
    setInterval(() => {
      nodes.forEach((node, idx) => {
        if (idx === currentIndex) {
          node.classList.add("ring-1", "ring-[#FF661F]/40", "shadow-lg");
        } else {
          node.classList.remove("ring-1", "ring-[#FF661F]/40", "shadow-lg");
        }
      });
      currentIndex = (currentIndex + 1) % nodes.length;
    }, 3500);
  }
};

// Expose globally
if (typeof window !== "undefined") {
  window.AIS_ANIMATIONS = AIS_ANIMATIONS;
}
