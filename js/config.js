/**
 * AIS SOCIAL GROWTH SYSTEM - GLOBAL CONFIGURATION
 * Alag Innovative Solutions
 * 
 * Edit this file to update agency details, contact information, social links,
 * branding colors, and core service offerings across the entire website.
 */

const AIS_CONFIG = {
  // Brand Identity
  agency: {
    name: "Alag Innovative Solutions",
    shortName: "AIS",
    tagline: "Engineering Growth for Forward-Thinking Businesses",
    productName: "AIS Social Growth System",
    productBadge: "Engineered Growth System",
    heroHeadline: "Your Social Media Should Do More Than Look Active.",
    heroSubheadline: "We build a practical social media system that helps local businesses earn attention, build trust and create more opportunities to talk to potential customers.",
    promise: "We build the system that turns attention into trust, trust into enquiries, and enquiries into business opportunities.",
    principles: "Strategy + Content + Distribution + Conversion",
    establishedYear: 2024,
  },

  // Contact & Inquiries
  contact: {
    phone: "+91 98765 43210",
    phoneDisplay: "+91 98765 43210",
    email: "growth@alaginnovative.com",
    supportEmail: "hello@alaginnovative.com",
    whatsapp: "+919876543210",
    whatsappMessage: "Hello AIS Team, I am interested in learning more about the AIS Social Growth System for my business.",
    address: {
      line1: "AIS Innovation Hub",
      line2: "Tech Boulevard, Sector 62",
      city: "Noida / New Delhi NCR",
      state: "Uttar Pradesh",
      country: "India",
      pincode: "201301"
    },
    workingHours: "Mon - Sat: 9:30 AM - 6:30 PM IST",
    responseTime: "Guaranteed response within 4 business hours"
  },

  // Social Channels
  social: {
    instagram: "https://instagram.com/alaginnovative",
    linkedin: "https://linkedin.com/company/alag-innovative-solutions",
    facebook: "https://facebook.com/alaginnovativesolutions",
    youtube: "https://youtube.com/@alaginnovative",
    twitter: "https://x.com/alaginnovative"
  },

  // Action / Booking Links
  cta: {
    primaryText: "Book a Strategy Call",
    secondaryText: "See How It Works",
    auditText: "Get a Free Social Audit",
    whatsappText: "Chat on WhatsApp",
    bookingDuration: "30-Minute Free Strategy Session",
    bookingDescription: "A no-fluff session to audit your current social footprint, identify conversion leaks, and outline a tailored growth blueprint."
  },

  // Color Palette Definitions (Tailwind Reference)
  theme: {
    colors: {
      bgDark: "#080B10",
      bgCard: "#0F141F",
      bgCardElevated: "#151C2C",
      borderSubtle: "#1F293D",
      borderAccent: "#31415E",
      accentSaffron: "#FF661F",
      accentOrange: "#FF8A3D",
      accentGlow: "rgba(255, 102, 31, 0.15)",
      textPrimary: "#F8FAFC",
      textMuted: "#94A3B8",
      textDarker: "#64748B"
    }
  }
};

// Expose globally for vanilla JS access
if (typeof window !== "undefined") {
  window.AIS_CONFIG = AIS_CONFIG;
}
