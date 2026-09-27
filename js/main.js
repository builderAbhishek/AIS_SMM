/**
 * AIS SOCIAL GROWTH SYSTEM - PRIMARY APPLICATION CONTROLLER
 * Alag Innovative Solutions
 * 
 * Central coordinator initializing components, interactive showcases,
 * industry switchers, accordions, and system inspection modals.
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Common Layout Components
  if (window.AIS_COMPONENTS) {
    AIS_COMPONENTS.initHeader();
    AIS_COMPONENTS.initFooter();
    AIS_COMPONENTS.initBookingModal();
  }

  // 2. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 3. Initialize Animations & Observers
  if (window.AIS_ANIMATIONS) {
    AIS_ANIMATIONS.initScrollReveals();
    AIS_ANIMATIONS.initSystemDiagramPulse();
  }

  // 4. Navbar Sticky Scroll Behavior
  const navbar = document.getElementById("navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        navbar.classList.add("shadow-xl", "bg-[#07090E]/95", "border-white/15");
      } else {
        navbar.classList.remove("shadow-xl", "border-white/15");
      }
    }, { passive: true });
  }

  // 5. Industry Tabs Controller (for index.html and industries.html)
  initIndustryTabs();

  // 6. FAQ Accordion Controller
  initFaqAccordions();

  // 7. System Stages Detail Inspector
  initSystemStageInspector();
});

/**
 * Industry Showcase Tabs Handler
 */
function initIndustryTabs() {
  const tabButtons = document.querySelectorAll(".industry-tab-btn");
  const contentContainer = document.getElementById("industry-content-display");

  if (!tabButtons.length || !contentContainer || !window.AIS_DATA) return;

  function renderIndustry(industryId) {
    const data = AIS_DATA.industries.find(item => item.id === industryId);
    if (!data) return;

    contentContainer.innerHTML = `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in">
        
        <!-- Left: Strategic Breakdown -->
        <div class="lg:col-span-7 space-y-6">
          <div class="flex items-center gap-3">
            <span class="badge-orange">${data.badge}</span>
            <span class="text-xs text-slate-400 font-mono">AIS Industry Framework</span>
          </div>

          <h3 class="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
            ${data.name}
          </h3>

          <!-- The Core Problem -->
          <div class="p-5 rounded-xl bg-[#141B2A] border border-white/10 space-y-2">
            <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-400">
              <i data-lucide="alert-triangle" class="w-4 h-4 shrink-0"></i>
              <span>The Local Business Reality</span>
            </div>
            <p class="text-sm text-slate-300 leading-relaxed">
              ${data.problem}
            </p>
          </div>

          <!-- Content Direction -->
          <div class="p-5 rounded-xl bg-[#141B2A] border border-white/10 space-y-2">
            <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF8533]">
              <i data-lucide="layers" class="w-4 h-4 shrink-0"></i>
              <span>Engineered Content Direction</span>
            </div>
            <p class="text-sm text-slate-300 leading-relaxed">
              ${data.contentDirection}
            </p>
          </div>

          <!-- Action CTA Trigger -->
          <div class="p-5 rounded-xl bg-[#141B2A] border border-emerald-500/30 space-y-2">
            <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              <i data-lucide="mouse-pointer" class="w-4 h-4 shrink-0"></i>
              <span>High-Intent Call To Action</span>
            </div>
            <p class="text-sm text-white font-medium">
              "${data.cta}"
            </p>
          </div>
        </div>

        <!-- Right: Potential Funnel & Sample Creative Angle -->
        <div class="lg:col-span-5 space-y-6">
          
          <!-- Funnel Flow Card -->
          <div class="ais-card p-6 border-white/15 space-y-4">
            <h4 class="font-heading text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-2">
              <i data-lucide="git-merge" class="w-4 h-4 text-[#FF8533]"></i>
              Potential Conversion Pathway
            </h4>

            <div class="space-y-3 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-white/10">
              ${data.funnel.map((step, idx) => `
                <div class="relative pl-7 group">
                  <div class="absolute left-1.5 top-1 w-3.5 h-3.5 rounded-full bg-[#1A2438] border border-[#FF661F] flex items-center justify-center text-[9px] text-[#FF8533] font-bold">
                    ${idx + 1}
                  </div>
                  <div class="text-xs font-semibold text-white">${step.step}</div>
                  <div class="text-xs text-slate-400 mt-0.5 leading-relaxed">${step.desc}</div>
                </div>
              `).join("")}
            </div>

            <div class="pt-3 border-t border-white/10 text-[11px] text-slate-400 italic">
              *Strategic pathway model. Customized to your location and operational capacity.
            </div>
          </div>

          <!-- Illustrative Creative Angle -->
          <div class="p-5 rounded-xl bg-[#0A0E18] border border-white/10 space-y-2">
            <div class="text-[11px] font-semibold text-[#FF8533] uppercase tracking-wider">
              Illustrative Content Prompt:
            </div>
            <p class="text-xs text-slate-300 font-mono leading-relaxed bg-[#101624] p-3 rounded-lg border border-white/5">
              ${data.illustrativePost}
            </p>
          </div>

          <button type="button" onclick="AIS_COMPONENTS.openBookingModal()" class="btn-primary w-full justify-center py-2.5 text-xs">
            Discuss ${data.name} Strategy &rarr;
          </button>

        </div>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
  }

  // Add click listeners to buttons
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => {
        b.classList.remove("active", "border-[#FF661F]", "bg-white/10", "text-[#FF8533]");
        b.classList.add("text-slate-400", "border-white/10");
      });
      btn.classList.add("active", "border-[#FF661F]", "bg-white/10", "text-[#FF8533]");
      btn.classList.remove("text-slate-400", "border-white/10");

      const industryId = btn.dataset.industry;
      renderIndustry(industryId);
    });
  });

  // Render initial tab
  const activeBtn = document.querySelector(".industry-tab-btn.active") || tabButtons[0];
  if (activeBtn) {
    activeBtn.click();
  }
}

/**
 * FAQ Accordion Toggler
 */
function initFaqAccordions() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const header = item.querySelector(".faq-header");
    const content = item.querySelector(".faq-content");
    if (!header || !content) return;

    header.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      // Close all other FAQs in same group
      faqItems.forEach(other => {
        other.classList.remove("active");
        const otherContent = other.querySelector(".faq-content");
        if (otherContent) otherContent.classList.remove("open");
        const btn = other.querySelector(".faq-header");
        if (btn) btn.setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("active");
        content.classList.add("open");
        header.setAttribute("aria-expanded", "true");
      }
    });
  });
}

/**
 * System Stage Deep-Dive Inspector
 */
function initSystemStageInspector() {
  const stageCards = document.querySelectorAll(".system-stage-card");
  if (!stageCards.length || !window.AIS_DATA) return;

  stageCards.forEach(card => {
    card.addEventListener("click", () => {
      const stepNumber = card.dataset.step;
      const stageData = AIS_DATA.systemStages.find(s => s.step === stepNumber);
      if (!stageData) return;

      showStageModal(stageData);
    });
  });
}

function showStageModal(stage) {
  let modal = document.getElementById("system-stage-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "system-stage-modal";
    modal.className = "fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay overflow-y-auto";
    document.body.appendChild(modal);
  }

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  modal.innerHTML = `
    <div class="relative w-full max-w-xl bg-[#0D121D] border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl my-8 text-left">
      <button type="button" onclick="closeStageModal()" class="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>

      <div class="flex items-center gap-3 mb-3">
        <span class="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#FF661F]/20 text-[#FF8533] border border-[#FF661F]/30">STAGE ${stage.step}</span>
        <span class="badge-dark text-xs">${stage.tag}</span>
      </div>

      <h3 class="font-heading text-2xl font-bold text-white tracking-tight">${stage.title}</h3>
      <p class="text-sm text-slate-300 mt-2 leading-relaxed">${stage.summary}</p>

      <div class="mt-6 p-4 rounded-xl bg-[#141B2A] border border-white/10 space-y-3">
        <h4 class="text-xs font-semibold text-[#FF8533] uppercase tracking-wider">Key Stage Deliverables:</h4>
        <ul class="text-xs text-slate-300 space-y-2">
          ${stage.deliverables.map(item => `
            <li class="flex items-start gap-2">
              <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
              <span>${item}</span>
            </li>
          `).join("")}
        </ul>
      </div>

      <div class="mt-4 p-4 rounded-xl bg-[#0A0D14] border border-white/5 text-xs text-slate-400 leading-relaxed">
        <strong>Strategic Insight:</strong> ${stage.details}
      </div>

      <div class="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
        <button type="button" onclick="closeStageModal()" class="btn-secondary text-xs py-2 px-4">
          Close Inspector
        </button>
        <button type="button" onclick="closeStageModal(); AIS_COMPONENTS.openBookingModal();" class="btn-primary text-xs py-2 px-4">
          Discuss This Stage &rarr;
        </button>
      </div>
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();
}

function closeStageModal() {
  const modal = document.getElementById("system-stage-modal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }
}
window.closeStageModal = closeStageModal;
