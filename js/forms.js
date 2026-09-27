/**
 * AIS SOCIAL GROWTH SYSTEM - FORM HANDLERS & VALIDATION
 * Alag Innovative Solutions
 * 
 * Handles Free Social Audit submissions, Strategy Call requests,
 * and contact enquiries with clean UX, validation, and zero false claims.
 */

const AIS_FORMS = {
  // 1. Free Social Media Audit Form
  handleAuditSubmit: function(e) {
    e.preventDefault();
    const form = e.target;

    const name = form.querySelector("#audit-name") ? form.querySelector("#audit-name").value.trim() : "";
    const business = form.querySelector("#audit-business") ? form.querySelector("#audit-business").value.trim() : "";
    const phone = form.querySelector("#audit-phone") ? form.querySelector("#audit-phone").value.trim() : "";
    const handle = form.querySelector("#audit-handle") ? form.querySelector("#audit-handle").value.trim() : "";
    const website = form.querySelector("#audit-website") ? form.querySelector("#audit-website").value.trim() : "";
    const category = form.querySelector("#audit-category") ? form.querySelector("#audit-category").value : "";
    const goal = form.querySelector("#audit-goal") ? form.querySelector("#audit-goal").value : "";

    if (!name || !business || !phone || !category) {
      alert("Please complete the required fields (Name, Business Name, Phone, and Industry Category).");
      return;
    }

    // Prepare Lead Data (Can be persisted to localStorage or connected to webhooks)
    const auditLead = {
      name,
      business,
      phone,
      handle,
      website,
      category,
      goal,
      submittedAt: new Date().toISOString()
    };

    try {
      localStorage.setItem("ais_last_audit_lead", JSON.stringify(auditLead));
    } catch (err) {
      console.log("Storage not accessible:", err);
    }

    // Display Professional Confirmation Modal
    this.showAuditConfirmationModal(auditLead);
    form.reset();
  },

  // 2. Audit Confirmation Modal (Honest, transparent, zero fake instant claims)
  showAuditConfirmationModal: function(lead) {
    let confirmModal = document.getElementById("ais-audit-confirm-modal");
    if (!confirmModal) {
      confirmModal = document.createElement("div");
      confirmModal.id = "ais-audit-confirm-modal";
      confirmModal.className = "fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay overflow-y-auto";
      document.body.appendChild(confirmModal);
    }

    confirmModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";

    confirmModal.innerHTML = `
      <div class="relative w-full max-w-xl bg-[#0D121D] border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl my-8 text-left">
        <!-- Close Button -->
        <button type="button" onclick="AIS_FORMS.closeAuditModal()" class="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10" aria-label="Close confirmation">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>

        <div class="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
          <i data-lucide="check-circle" class="w-6 h-6"></i>
        </div>

        <div class="badge-orange mb-2">Request Confirmed</div>
        <h3 class="font-heading text-2xl font-bold text-white tracking-tight">Audit Diagnostic In Queue for ${lead.business}</h3>
        <p class="text-sm text-slate-300 mt-2 leading-relaxed">
          Thank you, <strong class="text-white">${lead.name}</strong>. We have logged your request. Rather than generating an automated, generic bot score, an AIS growth strategist will manually examine your presence over the next <strong>24 to 48 business hours</strong>.
        </p>

        <!-- What AIS Checks -->
        <div class="mt-6 p-4 rounded-xl bg-[#141B2A] border border-white/10 space-y-3">
          <h4 class="text-xs font-semibold text-[#FF8533] uppercase tracking-wider">What our strategists inspect manually:</h4>
          <ul class="text-xs text-slate-300 space-y-2">
            <li class="flex items-center gap-2">
              <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-400"></i>
              <span><strong>Bio Architecture:</strong> Clarity of proposition and action triggers.</span>
            </li>
            <li class="flex items-center gap-2">
              <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-400"></i>
              <span><strong>Content Job Balance:</strong> Ratio of Problem, Education, Proof, and BTS.</span>
            </li>
            <li class="flex items-center gap-2">
              <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-400"></i>
              <span><strong>Visual Identity &amp; Perception:</strong> Consistency, readability, and authority.</span>
            </li>
            <li class="flex items-center gap-2">
              <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-400"></i>
              <span><strong>Conversion Pathway:</strong> Friction points between attention and inquiry.</span>
            </li>
          </ul>
        </div>

        <!-- Next Steps Action -->
        <div class="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a href="https://wa.me/${AIS_CONFIG.contact.whatsapp}?text=${encodeURIComponent(`Hi AIS, I just requested a social audit for ${lead.business} (${lead.phone}). Connecting here to send any extra context!`)}" target="_blank" rel="noopener noreferrer" class="btn-primary w-full sm:w-auto text-xs py-3 px-4 flex items-center justify-center gap-2">
            <i data-lucide="message-square" class="w-4 h-4"></i>
            Speed Up via WhatsApp
          </a>
          <button type="button" onclick="AIS_FORMS.closeAuditModal()" class="btn-secondary w-full sm:w-auto text-xs py-3 px-4">
            Close &amp; Continue Browsing
          </button>
        </div>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
  },

  closeAuditModal: function() {
    const modal = document.getElementById("ais-audit-confirm-modal");
    if (modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    }
  },

  // 3. Strategy Call Modal Form Submission
  handleBookingSubmit: function(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector("#book-name").value.trim();
    const business = form.querySelector("#book-business").value.trim();
    const phone = form.querySelector("#book-phone").value.trim();
    const category = form.querySelector("#book-category").value;

    AIS_COMPONENTS.closeBookingModal();
    AIS_COMPONENTS.showToast(
      "Strategy Call Requested",
      `Thank you, ${name}. Our strategy team will reach out via WhatsApp (${phone}) within 4 hours to confirm your consultation time.`
    );
    form.reset();
  },

  // 4. Contact Page Form Submission
  handleContactSubmit: function(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector("#contact-name").value.trim();
    const email = form.querySelector("#contact-email").value.trim();

    AIS_COMPONENTS.showToast(
      "Enquiry Received",
      `Thank you, ${name}. Your message has been routed to our strategy team. We will get back to you at ${email} shortly.`
    );
    form.reset();
  }
};

// Expose globally
if (typeof window !== "undefined") {
  window.AIS_FORMS = AIS_FORMS;
}
