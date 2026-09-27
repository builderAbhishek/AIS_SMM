/**
 * AIS SOCIAL GROWTH SYSTEM - COMPONENT INJECTORS & UTILITIES
 * Alag Innovative Solutions
 * 
 * Provides dynamic header, footer, booking modal, and toast functionality
 * across all pages to ensure consistency and maintainability.
 */

const AIS_COMPONENTS = {
  // Determine active link based on current path
  getCurrentPage: function() {
    const path = window.location.pathname;
    const page = path.split("/").pop() || "index.html";
    return page;
  },

  // Initialize Header Navigation
  initHeader: function() {
    const headerContainer = document.getElementById("ais-header-slot");
    if (!headerContainer) return;

    const currentPage = this.getCurrentPage();
    const isHome = currentPage === "index.html" || currentPage === "";

    headerContainer.innerHTML = `
      <!-- Top Announcement Banner -->
      <div class="bg-gradient-to-r from-[#121824] via-[#1E293B] to-[#121824] border-b border-white/5 py-2 px-4 text-center text-xs text-slate-300">
        <span class="inline-flex items-center gap-2">
          <span class="inline-block w-2 h-2 rounded-full bg-[#FF661F] animate-pulse"></span>
          <strong class="text-white font-medium">AIS Social Growth System:</strong> Engineered for local businesses ready to stop posting randomly.
          <a href="audit.html" class="underline text-[#FF8533] hover:text-white transition ml-1">Claim Free Social Audit &rarr;</a>
        </span>
      </div>

      <!-- Main Sticky Navbar -->
      <nav id="navbar" class="sticky top-0 z-50 transition-all duration-300 backdrop-blur-md bg-[#07090E]/90 border-b border-white/10" aria-label="Main Navigation">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-20">
            
            <!-- Logo & Brand -->
            <a href="index.html" class="flex items-center gap-3 group focus-visible:outline-none" aria-label="Alag Innovative Solutions Home">
              <div class="w-10 h-10 rounded-xl bg-[#0E1422] border border-white/10 flex items-center justify-center p-1.5 transition-transform group-hover:scale-105 group-hover:border-[#FF661F]/40 shadow-sm">
                <img src="assets/icons/logo.svg" alt="AIS Logo" class="w-full h-full object-contain">
              </div>
              <div class="flex flex-col">
                <span class="font-heading font-bold text-lg tracking-tight text-white flex items-center gap-1.5">
                  AIS
                  <span class="text-xs px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400 font-sans font-normal hidden sm:inline-block">System</span>
                </span>
                <span class="text-[11px] text-slate-400 tracking-wider uppercase font-medium">Alag Innovative Solutions</span>
              </div>
            </a>

            <!-- Desktop Navigation Links -->
            <div class="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <a href="index.html" class="nav-link px-3 py-2 rounded-md text-sm font-medium transition ${isHome ? 'text-white bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'}">Home</a>
              <a href="system.html" class="nav-link px-3 py-2 rounded-md text-sm font-medium transition ${currentPage === 'system.html' ? 'text-white bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'}">System</a>
              <a href="process.html" class="nav-link px-3 py-2 rounded-md text-sm font-medium transition ${currentPage === 'process.html' ? 'text-white bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'}">How It Works</a>
              <a href="services.html" class="nav-link px-3 py-2 rounded-md text-sm font-medium transition ${currentPage === 'services.html' ? 'text-white bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'}">Services</a>
              <a href="industries.html" class="nav-link px-3 py-2 rounded-md text-sm font-medium transition ${currentPage === 'industries.html' ? 'text-white bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'}">Industries</a>
              <a href="pricing.html" class="nav-link px-3 py-2 rounded-md text-sm font-medium transition ${currentPage === 'pricing.html' ? 'text-white bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'}">Pricing</a>
              <a href="faq.html" class="nav-link px-3 py-2 rounded-md text-sm font-medium transition ${currentPage === 'faq.html' ? 'text-white bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'}">FAQ</a>
              <a href="contact.html" class="nav-link px-3 py-2 rounded-md text-sm font-medium transition ${currentPage === 'contact.html' ? 'text-white bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'}">Contact</a>
            </div>

            <!-- Header Action CTAs -->
            <div class="hidden sm:flex items-center gap-3">
              <a href="audit.html" class="text-xs text-slate-300 hover:text-white px-3 py-2 border border-white/10 rounded-md transition font-medium hidden md:inline-flex items-center gap-1.5">
                <i data-lucide="scan-search" class="w-3.5 h-3.5 text-[#FF8533]"></i>
                Free Audit
              </a>
              <button type="button" onclick="AIS_COMPONENTS.openBookingModal()" class="btn-primary text-sm py-2 px-4 shadow-sm" aria-haspopup="dialog">
                <span>Book Strategy Call</span>
                <i data-lucide="calendar" class="w-4 h-4"></i>
              </button>
            </div>

            <!-- Mobile Hamburger Button -->
            <div class="flex lg:hidden items-center gap-2">
              <button type="button" onclick="AIS_COMPONENTS.openBookingModal()" class="btn-primary text-xs py-1.5 px-3 sm:hidden">
                Book Call
              </button>
              <button id="mobile-menu-toggle" type="button" class="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#FF661F]" aria-controls="mobile-menu" aria-expanded="false" aria-label="Toggle navigation menu">
                <i id="mobile-hamburger-icon" data-lucide="menu" class="w-6 h-6"></i>
              </button>
            </div>

          </div>
        </div>

        <!-- Mobile Drawer Menu -->
        <div id="mobile-menu" class="hidden lg:hidden border-t border-white/10 bg-[#0A0D14]/98 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl">
          <a href="index.html" class="block px-3 py-2.5 rounded-lg text-base font-medium ${isHome ? 'text-white bg-white/10' : 'text-slate-300 hover:bg-white/5'}">Home</a>
          <a href="system.html" class="block px-3 py-2.5 rounded-lg text-base font-medium ${currentPage === 'system.html' ? 'text-white bg-white/10' : 'text-slate-300 hover:bg-white/5'}">The System</a>
          <a href="process.html" class="block px-3 py-2.5 rounded-lg text-base font-medium ${currentPage === 'process.html' ? 'text-white bg-white/10' : 'text-slate-300 hover:bg-white/5'}">How It Works (Process)</a>
          <a href="services.html" class="block px-3 py-2.5 rounded-lg text-base font-medium ${currentPage === 'services.html' ? 'text-white bg-white/10' : 'text-slate-300 hover:bg-white/5'}">Services</a>
          <a href="industries.html" class="block px-3 py-2.5 rounded-lg text-base font-medium ${currentPage === 'industries.html' ? 'text-white bg-white/10' : 'text-slate-300 hover:bg-white/5'}">Industry Frameworks</a>
          <a href="pricing.html" class="block px-3 py-2.5 rounded-lg text-base font-medium ${currentPage === 'pricing.html' ? 'text-white bg-white/10' : 'text-slate-300 hover:bg-white/5'}">Pricing Packages</a>
          <a href="audit.html" class="block px-3 py-2.5 rounded-lg text-base font-medium ${currentPage === 'audit.html' ? 'text-white bg-white/10' : 'text-[#FF8533] hover:bg-white/5'}">Free Social Media Audit</a>
          <a href="faq.html" class="block px-3 py-2.5 rounded-lg text-base font-medium ${currentPage === 'faq.html' ? 'text-white bg-white/10' : 'text-slate-300 hover:bg-white/5'}">FAQ</a>
          <a href="contact.html" class="block px-3 py-2.5 rounded-lg text-base font-medium ${currentPage === 'contact.html' ? 'text-white bg-white/10' : 'text-slate-300 hover:bg-white/5'}">Contact &amp; Location</a>
          <div class="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <button type="button" onclick="AIS_COMPONENTS.openBookingModal()" class="btn-primary w-full justify-center py-3">
              Book Strategy Call
            </button>
            <a href="https://wa.me/${AIS_CONFIG.contact.whatsapp}?text=${encodeURIComponent(AIS_CONFIG.contact.whatsappMessage)}" target="_blank" rel="noopener noreferrer" class="btn-secondary w-full justify-center py-2.5 text-sm">
              <i data-lucide="message-square" class="w-4 h-4 text-emerald-400"></i>
              WhatsApp AIS Directly
            </a>
          </div>
        </div>
      </nav>
    `;

    // Hook mobile menu toggler
    const toggleBtn = document.getElementById("mobile-menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    if (toggleBtn && mobileMenu) {
      toggleBtn.addEventListener("click", () => {
        const isHidden = mobileMenu.classList.contains("hidden");
        if (isHidden) {
          mobileMenu.classList.remove("hidden");
          toggleBtn.setAttribute("aria-expanded", "true");
        } else {
          mobileMenu.classList.add("hidden");
          toggleBtn.setAttribute("aria-expanded", "false");
        }
      });
    }
  },

  // Initialize Footer
  initFooter: function() {
    const footerContainer = document.getElementById("ais-footer-slot");
    if (!footerContainer) return;

    footerContainer.innerHTML = `
      <footer class="bg-[#05070B] border-t border-white/10 text-slate-400 pt-16 pb-12 mt-auto" role="contentinfo">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
            
            <!-- Brand Overview -->
            <div class="lg:col-span-2 space-y-4">
              <a href="index.html" class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-lg bg-[#0E1422] border border-white/10 flex items-center justify-center p-1.5">
                  <img src="assets/icons/logo.svg" alt="AIS Logo" class="w-full h-full object-contain">
                </div>
                <div>
                  <span class="font-heading font-bold text-lg text-white">AIS Social Growth System</span>
                  <div class="text-[11px] text-slate-400">By Alag Innovative Solutions</div>
                </div>
              </a>
              <p class="text-sm text-slate-400 leading-relaxed max-w-sm">
                A structured social media and digital growth system for local businesses. We engineer the connection from attention to trust, trust to enquiry, and enquiry to business opportunity.
              </p>
              <div class="text-xs text-slate-400 space-y-1">
                <p class="text-slate-300 font-medium">Core Positioning:</p>
                <p class="italic">"Your Social Media Should Do More Than Look Active."</p>
              </div>
              <div class="flex items-center gap-3 pt-2">
                <a href="${AIS_CONFIG.social.instagram}" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#FF661F] transition" aria-label="Instagram">
                  <i data-lucide="instagram" class="w-4 h-4"></i>
                </a>
                <a href="${AIS_CONFIG.social.linkedin}" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#FF661F] transition" aria-label="LinkedIn">
                  <i data-lucide="linkedin" class="w-4 h-4"></i>
                </a>
                <a href="${AIS_CONFIG.social.facebook}" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#FF661F] transition" aria-label="Facebook">
                  <i data-lucide="facebook" class="w-4 h-4"></i>
                </a>
                <a href="${AIS_CONFIG.social.youtube}" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#FF661F] transition" aria-label="YouTube">
                  <i data-lucide="youtube" class="w-4 h-4"></i>
                </a>
              </div>
            </div>

            <!-- System & Navigation -->
            <div class="space-y-3">
              <h4 class="font-heading text-sm font-semibold uppercase tracking-wider text-white">The System</h4>
              <ul class="space-y-2 text-sm">
                <li><a href="system.html#first-principles" class="hover:text-white transition">First Principles</a></li>
                <li><a href="system.html#architecture" class="hover:text-white transition">8-Part Architecture</a></li>
                <li><a href="system.html#content-engine" class="hover:text-white transition">Content Engine</a></li>
                <li><a href="system.html#perception" class="hover:text-white transition">Perception Design</a></li>
                <li><a href="system.html#web-synergy" class="hover:text-white transition">Social + Website Synergy</a></li>
                <li><a href="process.html" class="hover:text-white transition">6-Step Process</a></li>
              </ul>
            </div>

            <!-- Services & Verticals -->
            <div class="space-y-3">
              <h4 class="font-heading text-sm font-semibold uppercase tracking-wider text-white">Services &amp; Markets</h4>
              <ul class="space-y-2 text-sm">
                <li><a href="services.html#social-strategy" class="hover:text-white transition">Social Media Strategy</a></li>
                <li><a href="services.html#reel-production" class="hover:text-white transition">Reel &amp; Video Production</a></li>
                <li><a href="services.html#business-websites" class="hover:text-white transition">AIS Business Websites</a></li>
                <li><a href="services.html#funnel-setup" class="hover:text-white transition">Lead Funnel Setup</a></li>
                <li><a href="industries.html" class="hover:text-white transition">10 Industry Blueprints</a></li>
                <li><a href="pricing.html" class="hover:text-white transition">Packages &amp; Scope</a></li>
              </ul>
            </div>

            <!-- Contact & Inquiries -->
            <div class="space-y-3">
              <h4 class="font-heading text-sm font-semibold uppercase tracking-wider text-white">Connect with AIS</h4>
              <ul class="space-y-2.5 text-sm">
                <li class="flex items-start gap-2.5">
                  <i data-lucide="phone" class="w-4 h-4 text-[#FF8533] shrink-0 mt-0.5"></i>
                  <a href="tel:${AIS_CONFIG.contact.phone}" class="hover:text-white transition">${AIS_CONFIG.contact.phoneDisplay}</a>
                </li>
                <li class="flex items-start gap-2.5">
                  <i data-lucide="mail" class="w-4 h-4 text-[#FF8533] shrink-0 mt-0.5"></i>
                  <a href="mailto:${AIS_CONFIG.contact.email}" class="hover:text-white transition">${AIS_CONFIG.contact.email}</a>
                </li>
                <li class="flex items-start gap-2.5">
                  <i data-lucide="message-circle" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
                  <a href="https://wa.me/${AIS_CONFIG.contact.whatsapp}?text=${encodeURIComponent(AIS_CONFIG.contact.whatsappMessage)}" target="_blank" rel="noopener noreferrer" class="hover:text-white transition text-emerald-400">WhatsApp Inquiries</a>
                </li>
                <li class="flex items-start gap-2.5 text-xs text-slate-400">
                  <i data-lucide="map-pin" class="w-4 h-4 text-[#FF8533] shrink-0 mt-0.5"></i>
                  <span>${AIS_CONFIG.contact.address.line1}, ${AIS_CONFIG.contact.address.city}, India</span>
                </li>
              </ul>
              <div class="pt-2">
                <a href="audit.html" class="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF8533] hover:underline">
                  Request Free Social Audit &rarr;
                </a>
              </div>
            </div>

          </div>

          <!-- Bottom Legal & Disclaimer Row -->
          <div class="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              &copy; ${new Date().getFullYear()} Alag Innovative Solutions (AIS). All rights reserved.
            </div>
            
            <div class="flex items-center gap-6">
              <a href="privacy.html" class="hover:text-white transition">Privacy Policy</a>
              <a href="terms.html" class="hover:text-white transition">Terms of Service</a>
              <a href="faq.html" class="hover:text-white transition">Transparency FAQ</a>
              <a href="sitemap.xml" class="hover:text-white transition">Sitemap</a>
            </div>
          </div>

          <!-- Ethical Disclaimer -->
          <div class="mt-6 p-4 rounded-lg bg-white/[0.02] border border-white/5 text-[11px] text-slate-400 leading-relaxed text-center">
            <strong>Transparency Notice:</strong> AIS Social Growth System builds structured marketing frameworks, high-craft content, and direct conversion pathways. We do not make false guarantees of specific revenue, followers, or sales volumes. Growth depends on product-market fit, local demand, operational follow-through, and disciplined execution.
          </div>

        </div>
      </footer>
    `;
  },

  // Modal Injector for Booking Strategy Call
  initBookingModal: function() {
    if (document.getElementById("ais-booking-modal")) return;

    const modalDiv = document.createElement("div");
    modalDiv.id = "ais-booking-modal";
    modalDiv.className = "fixed inset-0 z-50 hidden flex items-center justify-center p-4 modal-overlay overflow-y-auto";
    modalDiv.setAttribute("role", "dialog");
    modalDiv.setAttribute("aria-modal", "true");
    modalDiv.setAttribute("aria-labelledby", "modal-title");

    modalDiv.innerHTML = `
      <div class="relative w-full max-w-xl bg-[#0D121D] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl my-8 transition-all">
        <!-- Close Button -->
        <button type="button" onclick="AIS_COMPONENTS.closeBookingModal()" class="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 focus:outline-none" aria-label="Close modal">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>

        <div class="space-y-2 mb-6">
          <div class="badge-orange mb-1">
            <i data-lucide="calendar" class="w-3 h-3"></i>
            30-Minute Strategy Session
          </div>
          <h3 id="modal-title" class="font-heading text-2xl font-bold text-white tracking-tight">Book a Strategy Call with AIS</h3>
          <p class="text-sm text-slate-400">
            A focused diagnostic session to evaluate your current social presence, identify conversion leaks, and map an intentional growth architecture. Zero pushy sales pitches.
          </p>
        </div>

        <form id="booking-modal-form" onsubmit="AIS_FORMS.handleBookingSubmit(event)" class="space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label for="book-name" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Full Name *</label>
              <input type="text" id="book-name" required placeholder="Dr. Rohan Sharma" class="w-full bg-[#141B2A] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-400 focus:border-[#FF661F] focus:outline-none transition">
            </div>
            <div>
              <label for="book-business" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Business / Brand Name *</label>
              <input type="text" id="book-business" required placeholder="Apex Dental Clinic" class="w-full bg-[#141B2A] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-400 focus:border-[#FF661F] focus:outline-none transition">
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label for="book-phone" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Phone (WhatsApp) *</label>
              <input type="tel" id="book-phone" required placeholder="+91 98765 00000" class="w-full bg-[#141B2A] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-400 focus:border-[#FF661F] focus:outline-none transition">
            </div>
            <div>
              <label for="book-category" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Industry Category *</label>
              <select id="book-category" required class="w-full bg-[#141B2A] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:border-[#FF661F] focus:outline-none transition">
                <option value="" disabled selected>Select your industry</option>
                <option value="School / K-12 Academy">School / K-12 Academy</option>
                <option value="Hospital / Healthcare Clinic">Hospital / Healthcare Clinic</option>
                <option value="Coaching Institute / Test Prep">Coaching Institute / Test Prep</option>
                <option value="Restaurant / Cafe">Restaurant / Cafe</option>
                <option value="Real Estate Developer">Real Estate Developer</option>
                <option value="Hotel / Boutique Resort">Hotel / Boutique Resort</option>
                <option value="Salon & Wellness Clinic">Salon &amp; Wellness Clinic</option>
                <option value="Fitness Center / Gym">Fitness Center / Gym</option>
                <option value="Local Retail / Showroom">Local Retail / Showroom</option>
                <option value="Professional Services (CA/Legal)">Professional Services (CA/Legal)</option>
                <option value="Other Local Business">Other Local Business</option>
              </select>
            </div>
          </div>

          <div>
            <label for="book-handle" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Instagram Handle or Website Link</label>
            <input type="text" id="book-handle" placeholder="@apexdental or https://apexdental.com" class="w-full bg-[#141B2A] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-400 focus:border-[#FF661F] focus:outline-none transition">
          </div>

          <div>
            <label for="book-challenge" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Primary Growth Challenge</label>
            <textarea id="book-challenge" rows="2" placeholder="e.g. We post weekly but get zero WhatsApp inquiries, or our competitor looks far more reputable online." class="w-full bg-[#141B2A] border border-white/10 rounded-lg px-3.5 py-2 text-sm text-white placeholder-slate-400 focus:border-[#FF661F] focus:outline-none transition"></textarea>
          </div>

          <div class="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button type="submit" class="btn-primary w-full sm:w-auto flex-1 justify-center py-3 text-sm font-semibold">
              Confirm Strategy Session Request &rarr;
            </button>
            <a href="https://wa.me/${AIS_CONFIG.contact.whatsapp}?text=${encodeURIComponent('Hi AIS, I would like to schedule a strategy call regarding my social media presence.')}" target="_blank" rel="noopener noreferrer" class="btn-secondary w-full sm:w-auto text-xs py-3 px-4 text-emerald-400 border-emerald-500/20">
              <i data-lucide="message-square" class="w-4 h-4"></i>
              WhatsApp Instead
            </a>
          </div>

          <p class="text-[11px] text-slate-400 text-center pt-1">
            🔒 We respect your privacy. No spam. You will receive a direct WhatsApp / email confirmation within 4 business hours.
          </p>
        </form>
      </div>
    `;

    document.body.appendChild(modalDiv);

    // Escape key listener
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        AIS_COMPONENTS.closeBookingModal();
      }
    });

    // Re-create lucide icons for newly added modal
    if (window.lucide) {
      window.lucide.createIcons();
    }
  },

  openBookingModal: function() {
    this.initBookingModal();
    const modal = document.getElementById("ais-booking-modal");
    if (modal) {
      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
      const firstInput = document.getElementById("book-name");
      if (firstInput) setTimeout(() => firstInput.focus(), 100);
    }
  },

  closeBookingModal: function() {
    const modal = document.getElementById("ais-booking-modal");
    if (modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    }
  },

  // Toast Notification
  showToast: function(title, message, type = "success") {
    let toast = document.getElementById("ais-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "ais-toast";
      toast.className = "fixed bottom-5 right-5 z-50 max-w-sm w-full bg-[#0E1522] border border-white/15 rounded-xl p-4 shadow-2xl transition-all duration-300 transform translate-y-10 opacity-0 pointer-events-none";
      document.body.appendChild(toast);
    }

    const iconColor = type === "success" ? "text-emerald-400" : "text-[#FF8533]";
    const iconName = type === "success" ? "check-circle" : "info";

    toast.innerHTML = `
      <div class="flex items-start gap-3">
        <i data-lucide="${iconName}" class="w-5 h-5 ${iconColor} shrink-0 mt-0.5"></i>
        <div class="flex-1">
          <h5 class="text-sm font-semibold text-white">${title}</h5>
          <p class="text-xs text-slate-300 mt-0.5">${message}</p>
        </div>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();

    // Animate in
    toast.classList.remove("translate-y-10", "opacity-0", "pointer-events-none");
    toast.classList.add("translate-y-0", "opacity-100");

    // Auto dismiss after 5s
    setTimeout(() => {
      toast.classList.add("translate-y-10", "opacity-0", "pointer-events-none");
      toast.classList.remove("translate-y-0", "opacity-100");
    }, 5000);
  }
};

// Expose globally
if (typeof window !== "undefined") {
  window.AIS_COMPONENTS = AIS_COMPONENTS;
}
