/**
 * AIS SOCIAL GROWTH SYSTEM - DATA REPOSITORY
 * Alag Innovative Solutions
 * 
 * Structured data powering the presentation layers, interactive tabs,
 * accordions, calculators, and system architecture breakdowns.
 */

const AIS_DATA = {
  // 1. First Principles Model
  firstPrinciples: [
    {
      id: "attention",
      title: "ATTENTION",
      role: "Discovery & Reach",
      tagline: "Get the right people to notice the business.",
      summary: "Without targeted visibility, even world-class services stay invisible. We engineer content hooks and hyper-local signals so local prospects discover your business organically and through consistent brand presence.",
      inputs: ["Problem-aware hooks", "High-retention Reels", "Local visual cues", "SEO-optimized profiles"],
      icon: "eye"
    },
    {
      id: "trust",
      title: "TRUST",
      role: "Credibility & Verification",
      tagline: "Show expertise, proof, people and real work.",
      summary: "Modern customers do not buy from anonymous feeds. We showcase the real professionals behind your business, transparent behind-the-scenes processes, genuine client results, and educational depth.",
      inputs: ["Behind-the-scenes walkthroughs", "Founder/practitioner viewpoints", "Case breakdowns", "Certifications & real work"],
      icon: "shield-check"
    },
    {
      id: "demand",
      title: "DEMAND",
      role: "Desire & Problem Framing",
      tagline: "Make the audience understand why the service matters.",
      summary: "Content must clearly connect the viewer's immediate frustrations with your specific solution, demonstrating why postponing action costs them time, comfort, or money.",
      inputs: ["Before-and-after logic", "Cost-of-inaction framing", "Service differentiators", "Targeted problem breakdowns"],
      icon: "flame"
    },
    {
      id: "action",
      title: "ACTION",
      role: "Frictionless Response",
      tagline: "Give them an easy, low-friction next step.",
      summary: "Attention that isn't guided to an action is wasted. We place direct, low-resistance call-to-actions across bios, highlights, captions, and links so interested prospects know exactly what to do next.",
      inputs: ["One-tap WhatsApp routing", "Direct call buttons", "Simple booking flows", "Clear DM triggers"],
      icon: "arrow-up-right"
    },
    {
      id: "opportunity",
      title: "BUSINESS OPPORTUNITY",
      role: "Conversations & Enquiries",
      tagline: "Turn attention into enquiries, visits, calls or conversations.",
      summary: "The final benchmark of social media is not vanity follower counts—it is generating legitimate business enquiries, scheduled consultations, walk-in visits, and sales conversations.",
      inputs: ["Qualified incoming DMs", "WhatsApp lead chats", "Consultation bookings", "Physical store footfalls"],
      icon: "briefcase"
    }
  ],

  // 2. The 8-Stage System Architecture
  systemStages: [
    {
      step: "01",
      id: "positioning",
      title: "Positioning & Market Stance",
      tag: "Foundation",
      summary: "Before designing a single post, we define who your ideal customer is, what pain points keep them up at night, and what distinct reason they have to choose you over every local competitor.",
      deliverables: [
        "Ideal Customer Profile (ICP) definition",
        "Unique Value Proposition & competitor differentiation",
        "Strategic brand voice and tone guidelines",
        "Core content pillars & editorial rules"
      ],
      details: "Random posting happens when a brand doesn't know who it is speaking to. We build a positioning blueprint that ensures every piece of future content feels intentional and focused on high-intent clients."
    },
    {
      step: "02",
      id: "content-strategy",
      title: "Content Strategy & Editorial Engine",
      tag: "Planning",
      summary: "Every single post has a specific job. We organize a weekly and monthly content framework balancing education, authority, proof, behind-the-scenes, and direct response.",
      deliverables: [
        "Monthly content themes and rhythm",
        "8-part job-based content mapping",
        "Seasonal and local business campaign integration",
        "Structured weekly content calendar"
      ],
      details: "We eliminate the 'what should we post today?' fatigue by mapping 30 days in advance with clear strategic purpose behind each asset."
    },
    {
      step: "03",
      id: "creative-production",
      title: "Creative Production & Craft",
      tag: "Execution",
      summary: "High-retention Reels, clean editorial carousels, striking static graphics, and story flows designed to maintain attention in competitive local feeds.",
      deliverables: [
        "Hook-first video scripts and visual storyboards",
        "Clean, typography-focused carousel graphics",
        "High-contrast promotional and offer creatives",
        "Persuasive, conversational captions with clear CTAs"
      ],
      details: "We prioritize clarity over superficial flashiness. Clean typography, strong color contrast, and immediate value hooks outperform cluttered templates every time."
    },
    {
      step: "04",
      id: "distribution",
      title: "Multi-Channel Distribution",
      tag: "Reach",
      summary: "Content must reach local buyers where they spend their attention: Instagram, Facebook, Google Business Profile, WhatsApp Channels, and YouTube Shorts.",
      deliverables: [
        "Platform-specific visual and caption formatting",
        "Optimized posting schedules for peak local engagement",
        "Google Business Profile updates for local search discovery",
        "Cross-channel story sharing and broadcast sync"
      ],
      details: "Creating great content is only half the battle. Distributing it across touchpoints ensures a prospect who discovers you on Instagram also sees active proof when checking your Google profile."
    },
    {
      step: "05",
      id: "lead-capture",
      title: "Lead Capture & Conversion Pathways",
      tag: "Conversion",
      summary: "Attention is not the finish line. We engineer frictionless conversion pathways from bio links and direct messages directly into WhatsApp, phone calls, or targeted landing pages.",
      deliverables: [
        "Optimized Instagram/Facebook bio architecture",
        "Pre-filled WhatsApp conversation starters",
        "High-conversion mobile landing pages (when bundled)",
        "Direct action callouts in captions and highlights"
      ],
      details: "A prospect interested in your services should never have to search for your contact info. We reduce booking friction to a single tap."
    },
    {
      step: "06",
      id: "follow-up",
      title: "Enquiry Handoff & Follow-Up Framework",
      tag: "Handoff",
      summary: "A lead is not automatically a customer. We provide your front-desk, sales, or receptionist team with structured qualification and response frameworks to turn incoming chats into closed business.",
      deliverables: [
        "Fast-response WhatsApp & DM response templates",
        "Lead qualification checklists for front-desk teams",
        "Follow-up rhythm recommendations for warm enquiries",
        "CRM/Spreadsheet handoff alignment"
      ],
      details: "Speed to lead is critical for local businesses. Having ready response scripts ensures no warm inquiry gets lost during busy operating hours."
    },
    {
      step: "07",
      id: "analysis",
      title: "Performance Analysis & Metric Review",
      tag: "Measurement",
      summary: "We look past superficial vanity metrics like empty views. We evaluate profile visits, bio clicks, enquiry rates, top-performing topics, and audience retention.",
      deliverables: [
        "Transparent monthly performance report",
        "Topic-by-topic content engagement breakdown",
        "Inquiry volume tracking and source attribution",
        "Executive summary: What worked & what didn't"
      ],
      details: "Zero manufactured metrics. We review genuine platform analytics to understand what resonates with your local market."
    },
    {
      step: "08",
      id: "optimization",
      title: "Iterative Testing & Optimization",
      tag: "Evolution",
      summary: "Social media is an ongoing scientific feedback loop. We run continuous micro-experiments—testing hook angles, video pacing, and offer phrasing—to double down on what works.",
      deliverables: [
        "Hypothesis-driven content A/B testing",
        "Monthly strategy recalibration call",
        "Adjustment of underperforming content pillars",
        "Quarterly brand perception audit"
      ],
      details: "We don't guess. We formulate hypotheses, test variations, study the real platform response, and refine the system each month."
    }
  ],

  // 3. Content Strategy: Every Post Has a Job
  contentJobs: [
    {
      type: "PROBLEM",
      role: "Attention",
      description: "Directly articulates a painful, relatable challenge your local customer faces daily.",
      example: "'Why your knee still hurts even after 3 weeks of rest' (for Physiotherapy clinic)",
      badge: "Hook & Resonance"
    },
    {
      type: "EDUCATION",
      role: "Authority",
      description: "Shares genuine expertise, unravelling complexities without gatekeeping to prove your mastery.",
      example: "'The 3 structural inspections every homebuyer in Delhi NCR must do before signing'",
      badge: "Market Expertise"
    },
    {
      type: "PROOF",
      role: "Trust",
      description: "Demonstrates real client transformations, verified outcomes, or authentic before-and-after work.",
      example: "'How we restored 4 rooms in a 25-year-old heritage boutique stay' (with real video footage)",
      badge: "Social Verification"
    },
    {
      type: "BEHIND THE SCENES",
      role: "Authenticity",
      description: "Reveals the humans, discipline, sanitary practices, and daily operations that make your business unique.",
      example: "'6:00 AM prep inside our kitchen: Sourcing farm-fresh produce daily' (Restaurant)",
      badge: "Human Connection"
    },
    {
      type: "OFFER",
      role: "Demand",
      description: "Presents a well-packaged service package or seasonal incentive with clear terms and zero vagueness.",
      example: "'Comprehensive Pre-Monsoon Vehicle Safety Inspection Package — Book via WhatsApp'",
      badge: "Commercial Intent"
    },
    {
      type: "FAQ",
      role: "Objection Removal",
      description: "Answers the unasked questions and hesitations holding potential buyers back from reaching out.",
      example: "'Does laser hair removal hurt? Here is an honest, clinical breakdown of what to expect'",
      badge: "Friction Buster"
    },
    {
      type: "COMPARISON",
      role: "Decision Support",
      description: "Helps buyers make an informed choice between alternatives, positioning your approach clearly.",
      example: "'CBSE vs ICSE curriculum: How our school balances board prep with practical skills'",
      badge: "Clarity Guide"
    },
    {
      type: "CTA",
      role: "Action",
      description: "Provides a clear, low-pressure instruction for viewers who are ready to take the next step.",
      example: "'Send us a WhatsApp message with the word ADMISSION to receive our complete prospectus'",
      badge: "Direct Response"
    }
  ],

  // 4. Perception Design Matrix
  perceptionTraits: [
    {
      trait: "Professional",
      visualRule: "Crisp typography, balanced layouts, and polished color grading over chaotic neon graphics.",
      impression: "'This business takes their craft seriously.'"
    },
    {
      trait: "Active & Reliable",
      visualRule: "Regular weekly publishing rhythm and updated highlights, showing current operations.",
      impression: "'They are thriving, accessible, and not abandoned.'"
    },
    {
      trait: "Knowledgeable",
      visualRule: "Content that explains the 'why' behind decisions rather than generic copied quotes.",
      impression: "'They are genuine subject-matter experts in their field.'"
    },
    {
      trait: "Trustworthy",
      visualRule: "Real photos of your facility, team, and verified results instead of generic stock models.",
      impression: "'What I see online is what I will experience in person.'"
    },
    {
      trait: "Relevant",
      visualRule: "Addressing local community concerns, local landmarks, and immediate seasonal challenges.",
      impression: "'They understand my local neighborhood and context.'"
    },
    {
      trait: "Easy to Contact",
      visualRule: "Prominently featured WhatsApp and phone links with immediate response expectations.",
      impression: "'Reaching them will be effortless and low pressure.'"
    }
  ],

  // 5. Twelve Comprehensive Service Offerings
  services: [
    {
      id: "social-strategy",
      number: "01",
      title: "Social Media Strategy",
      shortDesc: "Complete positioning roadmap, competitor market analysis, and strategic content pillars tailored for your local trade area.",
      deliverables: ["Market & Competitor Audit", "Target Buyer Persona Matrix", "Brand Voice Architecture", "Quarterly Roadmap"],
      whoItsFor: "Businesses wanting to stop guessing and build an intentional competitive moat."
    },
    {
      id: "content-strategy",
      number: "02",
      title: "Content Strategy & Calendar",
      shortDesc: "Structured 30-day editorial frameworks where every single asset has an assigned job: Attention, Trust, or Action.",
      deliverables: ["Monthly Content Calendars", "Topic & Hook Pipelines", "Job-Based Content Balance", "Campaign Timelines"],
      whoItsFor: "Teams tired of last-minute posting stress and random unaligned content."
    },
    {
      id: "reel-production",
      number: "03",
      title: "Reel & Short Video Production",
      shortDesc: "Hook-driven vertical video editing, pacing, subtitling, and visual direction designed for maximum retention on Instagram & YouTube.",
      deliverables: ["Script & Hook Writing", "Dynamic Video Pacing & Editing", "Accurate Subtitling & Motion Callouts", "Cover Design"],
      whoItsFor: "Local brands looking to tap into algorithmic organic discovery without looking amateur."
    },
    {
      id: "graphic-design",
      number: "04",
      title: "Brand Graphic Design",
      shortDesc: "Editorial carousels, striking informational graphics, and announcement creatives maintaining strict brand aesthetic consistency.",
      deliverables: ["Multi-Slide Informational Carousels", "High-Contrast Feed Posts", "Custom Story Templates", "Highlight Covers"],
      whoItsFor: "Businesses who want their feed to look like an established, premium brand."
    },
    {
      id: "copywriting",
      number: "05",
      title: "Strategic Copywriting",
      shortDesc: "Persuasive, conversational captions that capture local nuances, eliminate objections, and guide readers into action.",
      deliverables: ["Hook Formulations", "Story-driven Body Copy", "Objection Removal Micro-copy", "Action-Oriented CTAs"],
      whoItsFor: "Brands whose current captions are either 2 emojis or dry corporate announcements."
    },
    {
      id: "social-management",
      number: "06",
      title: "Social Media Management",
      shortDesc: "Complete operational management: scheduling, caption publishing, hashtag curation, and profile health monitoring.",
      deliverables: ["Scheduled Multi-Platform Publishing", "Hashtag & Location Tagging", "Bio & Link Updates", "Quality Assurance"],
      whoItsFor: "Busy business owners who want complete peace of mind that their channels run like clockwork."
    },
    {
      id: "profile-optimization",
      number: "07",
      title: "Profile & Bio Optimization",
      shortDesc: "Turn your Instagram, Facebook, and Google Business profiles from passive business cards into high-conversion landing destinations.",
      deliverables: ["SEO-Optimized Bio Copy", "Structured Story Highlights", "Conversion Link-in-Bio Setup", "Action Buttons"],
      whoItsFor: "Accounts getting views or profile taps but losing visitors due to a confusing bio."
    },
    {
      id: "landing-pages",
      number: "08",
      title: "Lead Landing Pages",
      shortDesc: "Fast-loading, mobile-first single page funnels built to capture enquiries from social media campaigns and bio link traffic.",
      deliverables: ["Mobile-Optimized Layouts", "Clear Value Hierarchy", "Direct WhatsApp & Call Triggers", "Fast Load Times (<1.5s)"],
      whoItsFor: "Businesses running specific service campaigns or seasonal admissions/offers."
    },
    {
      id: "business-websites",
      number: "09",
      title: "Business Websites (AIS Core)",
      shortDesc: "Custom, modern web development by AIS that serves as the central anchor of credibility and detailed information for your brand.",
      deliverables: ["Modern Responsive Architecture", "Editorial Typography & Layouts", "Service Catalog & Case Showcases", "SEO Foundations"],
      whoItsFor: "Companies ready to replace outdated template sites with a high-trust digital headquarters."
    },
    {
      id: "funnel-setup",
      number: "10",
      title: "Lead Funnel Setup",
      shortDesc: "Integrated pathways connecting Instagram profiles to WhatsApp chat triggers, contact forms, and front-desk notification alerts.",
      deliverables: ["WhatsApp Link Pre-fill Scripts", "Form Notification Routing", "Lead Qualification Checklists", "Frictionless Contact Paths"],
      whoItsFor: "Businesses losing prospective clients between seeing a post and picking up the phone."
    },
    {
      id: "monthly-analytics",
      number: "11",
      title: "Monthly Analytics & Reporting",
      shortDesc: "Honest, jargon-free monthly reports detailing genuine reach, audience engagement, bio link clicks, and enquiry momentum.",
      deliverables: ["Monthly Performance Dashboard", "Content Scorecards (Top vs Bottom)", "Profile Traffic Analytics", "Actionable Takeaways"],
      whoItsFor: "Business owners who want transparent facts instead of padded vanity metrics."
    },
    {
      id: "strategy-optimization",
      number: "12",
      title: "Strategy & Experimentation",
      shortDesc: "Monthly review calls to review market feedback, formulate new content hypotheses, and refine editorial angles for the upcoming cycle.",
      deliverables: ["Monthly Strategy Review Call", "Content A/B Experiment Plans", "Competitor Market Adjustments", "Next-Cycle Roadmap"],
      whoItsFor: "Clients committed to systematic, compounding business growth over the long run."
    }
  ],

  // 6. Ten Industry Solutions (Interactive Showcase)
  industries: [
    {
      id: "school",
      name: "School / K-12",
      badge: "Education",
      icon: "graduation-cap",
      problem: "Parents perceive the school only through annual fees and generic brochures. Lack of day-to-day insight into student safety, faculty qualifications, sports infrastructure, and holistic development makes admission decisions stressful.",
      contentDirection: "Day-in-the-life student reels, faculty qualification spotlights, science lab and robotics demonstrations, safety & hygiene protocols, and clear admission timeline guides.",
      cta: "Schedule a Campus Tour / Download Prospectus",
      funnel: [
        { step: "Discovery", desc: "Parent sees Reel on innovative experiential STEM curriculum" },
        { step: "Trust", desc: "Visits profile to watch faculty credentials & campus safety highlights" },
        { step: "Action", desc: "Taps bio link for campus tour scheduling" },
        { step: "Conversion", desc: "Direct WhatsApp confirmation with the admissions counselor" }
      ],
      illustrativePost: "Video: Inside our Grade 6 Robotics Lab: How our students build working models instead of just memorizing theories."
    },
    {
      id: "hospital",
      name: "Hospital / Healthcare",
      badge: "Healthcare",
      icon: "heart-pulse",
      problem: "Patients feel anxious and skeptical about medical procedures. Stock images of smiling stethoscope models breed distrust; patients seek proven surgical experience, hygiene standards, and empathetic care.",
      contentDirection: "Doctor-led educational breakdowns of common health concerns, technology equipment explainers, patient recovery walkthroughs (with explicit consent), and OPD schedule clarity.",
      cta: "Book Consultation / WhatsApp OPD Desk",
      funnel: [
        { step: "Discovery", desc: "Local patient discovers doctor explaining common joint pain misconceptions" },
        { step: "Trust", desc: "Reviews hospital credentials, clean OT walkthrough, and doctor's experience" },
        { step: "Action", desc: "Taps 'Book OPD Appointment' button in bio" },
        { step: "Conversion", desc: "Automated WhatsApp confirmation with time slot & clinic directions" }
      ],
      illustrativePost: "Doctor Reel: 'The difference between seasonal viral fever and acute infection—3 signs you shouldn't ignore.'"
    },
    {
      id: "coaching",
      name: "Coaching Institute",
      badge: "Test Prep",
      icon: "book-open",
      problem: "Market is saturated with loud '100% selection guarantee' claims that students and parents increasingly distrust. Genuine academic mentoring and structured doubt-solving go unnoticed.",
      contentDirection: "Concept breakdown micro-lectures, teacher problem-solving methodologies, real student study schedules, doubt-clearing sessions, and transparent exam analysis.",
      cta: "Take Free Diagnostic Test / WhatsApp Mentor",
      funnel: [
        { step: "Discovery", desc: "Student watches 60-second shortcut solving a complex physics numerical" },
        { step: "Trust", desc: "Checks highlights showing classroom culture and mentor credentials" },
        { step: "Action", desc: "Clicks to register for free Sunday mock diagnostic test" },
        { step: "Conversion", desc: "Academic counseling session at center following test results" }
      ],
      illustrativePost: "Carousel: 'Top 5 mistakes students make in organic chemistry reaction mechanisms (and how to avoid them).'"
    },
    {
      id: "restaurant",
      name: "Restaurant / Cafe",
      badge: "Hospitality & Dining",
      icon: "utensils",
      problem: "Low local footfall on weekdays and over-reliance on third-party food delivery aggregators that charge 25-30% commissions without building brand loyalty.",
      contentDirection: "Sensory food preparation reels, chef sourcing stories, ambience and seating tours, weekend special reveals, and direct table booking incentives.",
      cta: "Reserve Table / Get Directions on WhatsApp",
      funnel: [
        { step: "Discovery", desc: "Local foodie watches artisan wood-fired pizza preparation Reel" },
        { step: "Trust", desc: "Checks Instagram highlights for verified menu prices, seating, and hygiene" },
        { step: "Action", desc: "Clicks 'Reserve a Table' directly via WhatsApp link" },
        { step: "Conversion", desc: "Table reserved + Google Maps direction link sent automatically" }
      ],
      illustrativePost: "Reel: 'From sourdough starter to 450°C stone oven: 48-hour slow-fermented crust in action.'"
    },
    {
      id: "realestate",
      name: "Real Estate Developer",
      badge: "Property",
      icon: "building-2",
      problem: "Buyers are skeptical of generic 3D renders. They want to see real construction progress, neighborhood connectivity, legal approvals, and actual carpet area transparency.",
      contentDirection: "On-site construction milestone updates, walkthrough videos of actual sample flats, neighborhood connectivity analysis (schools, metro), and home loan guidance.",
      cta: "Schedule Site Visit / Request Floor Plans",
      funnel: [
        { step: "Discovery", desc: "Homebuyer watches walk-through Reel of actual 3BHK carpet layout" },
        { step: "Trust", desc: "Watches verified RERA number and monthly construction progress videos" },
        { step: "Action", desc: "Fills quick WhatsApp form to request PDF brochure and pricing sheet" },
        { step: "Conversion", desc: "Sales coordinator books assisted weekend site visit" }
      ],
      illustrativePost: "Video: 'Real carpet area vs super area: Walking through our newly completed 3BHK sample home.'"
    },
    {
      id: "hotel",
      name: "Hotel / Boutique Resort",
      badge: "Travel & Stay",
      icon: "hotel",
      problem: "Heavy commissions to online travel agencies (OTAs) and inability to showcase the serene experience, local cuisine, and bespoke hospitality that justifies premium tariff.",
      contentDirection: "Morning view reels, property aesthetic tours, local excursion itineraries, chef special dining highlights, and seasonal direct-booking perks.",
      cta: "Check Availability / WhatsApp Concierge",
      funnel: [
        { step: "Discovery", desc: "Traveler sees Reel of sunset tea experience overlooking hills" },
        { step: "Trust", desc: "Browses verified guest room tours, amenities, and authentic guest feedback" },
        { step: "Action", desc: "Taps 'Book Direct for Complimentary Breakfast' link" },
        { step: "Conversion", desc: "Direct reservation via hotel desk without OTA commission deduction" }
      ],
      illustrativePost: "Story Series: 'A 24-hour itinerary for your weekend retreat at our heritage courtyard.'"
    },
    {
      id: "salon",
      name: "Salon & Wellness Clinic",
      badge: "Beauty & Grooming",
      icon: "sparkles",
      problem: "Clients are afraid of botched hair treatments, hidden add-on costs, and unhygienic tools. Stock photos of European models do not reflect actual salon work.",
      contentDirection: "Real client before-and-after transformations, stylist consultation clips, sanitized equipment demonstrations, transparent pricing guides, and seasonal packages.",
      cta: "Book Appointment / WhatsApp Consultation",
      funnel: [
        { step: "Discovery", desc: "Client sees balayage hair transformation on local client with similar hair texture" },
        { step: "Trust", desc: "Checks stylist certifications, premium product brands used, and salon hygiene" },
        { step: "Action", desc: "Clicks WhatsApp link to send photo of their hair for estimated pricing" },
        { step: "Conversion", desc: "Appointment confirmed with senior stylist" }
      ],
      illustrativePost: "Reel: 'Restoring damaged, over-processed hair: Step-by-step Olaplex bond repair treatment.'"
    },
    {
      id: "gym",
      name: "Fitness Center / Gym",
      badge: "Fitness",
      icon: "dumbbell",
      problem: "January crowds drop by March. Intimidating bodybuilding imagery scares away everyday working professionals seeking sustainable health and fitness.",
      contentDirection: "Trainer form corrections, beginner workout guides, member milestone celebrations (sustainable weight loss, stamina improvements), facility tour, and trial passes.",
      cta: "Claim 3-Day Trial Pass / WhatsApp Trainer",
      funnel: [
        { step: "Discovery", desc: "Working professional sees Reel on '3 posture fixes for desk workers'" },
        { step: "Trust", desc: "Views welcoming gym environment, clean locker rooms, certified trainers" },
        { step: "Action", desc: "Claims a 3-Day Complimentary Gym Pass via WhatsApp" },
        { step: "Conversion", desc: "Trial workout conducted followed by personalized annual membership offer" }
      ],
      illustrativePost: "Educational: 'How to deadlift without straining your lower back: 3 common alignment cues.'"
    },
    {
      id: "retail",
      name: "Local Retail / Jeweller / Furnishing",
      badge: "Retail",
      icon: "shopping-bag",
      problem: "Online e-commerce giants undercut on price, but cannot compete on tactile experience, custom craftsmanship, immediate availability, and local trust.",
      contentDirection: "Craftsmanship close-ups, new arrival showcases, hallmark certification explainers, styling guides, and festive collection previews.",
      cta: "Check In-Store Stock / Video Call Preview",
      funnel: [
        { step: "Discovery", desc: "Shopper sees Reel showcasing newly arrived handcrafted living room set" },
        { step: "Trust", desc: "Watches video detailing solid teakwood construction and warranty terms" },
        { step: "Action", desc: "Requests in-store viewing or video call preview via WhatsApp" },
        { step: "Conversion", desc: "Shopper visits showroom to test furniture and finalize order" }
      ],
      illustrativePost: "Product Reel: 'How to check gold hallmark stampings yourself before purchasing jewelry.'"
    },
    {
      id: "professional",
      name: "Professional Services (CA / Legal / Architect)",
      badge: "B2B Services",
      icon: "briefcase",
      problem: "Complex regulatory jargon intimidates business owners. Clients struggle to differentiate qualified strategic advisors from basic form-fillers.",
      contentDirection: "Simplified tax deadline explainers, architectural design walkthroughs, contract hazard checklists, and case studies of money/time saved for clients.",
      cta: "Schedule Advisory Consultation",
      funnel: [
        { step: "Discovery", desc: "Founder sees carousel explaining new GST compliance updates for MSMEs" },
        { step: "Trust", desc: "Reads profile highlights with published advisory insights and client scenarios" },
        { step: "Action", desc: "Schedules a 20-minute tax architecture review call" },
        { step: "Conversion", desc: "Retainer agreement signed for ongoing compliance and advisory" }
      ],
      illustrativePost: "Carousel: '3 tax deductions MSME business owners frequently miss before March 31.'"
    }
  ],

  // 7. Monthly Content Engine Rhythm (Framework Example)
  contentEngine: [
    {
      week: "Week 01",
      focus: "Attention & Core Problems",
      theme: "Identifying Friction Points",
      composition: "Problem Reel + Educational Carousel + Verified Proof Asset",
      objective: "Hook the local audience with relatable challenges and demonstrate immediate subject mastery."
    },
    {
      week: "Week 02",
      focus: "Authority & Human Behind-The-Scenes",
      theme: "Building Credibility & Familiarity",
      composition: "Deep Education Reel + Behind-The-Scenes Story Flow + Objection-Buster FAQ",
      objective: "Humanize your business and show the discipline, equipment, and people behind the counter."
    },
    {
      week: "Week 03",
      focus: "Proof & Structured Demand",
      theme: "Validating Outcomes",
      composition: "Client Case Walkthrough + Comparative Post + Targeted Offer Creative",
      objective: "Frame why delaying a decision costs the customer more than investing in your solution today."
    },
    {
      week: "Week 04",
      focus: "Direct Response & Conversion Action",
      theme: "Guiding the Decision",
      composition: "High-Urgency Offer Reel + Social Proof Compilation + Direct WhatsApp Action Post",
      objective: "Capture accumulated interest and drive prospective clients to message, call, or visit."
    }
  ],

  // 8. Conceptual Transformation: Before vs. After (Illustrative)
  transformation: {
    disclaimer: "Illustrative conceptual framework. Results vary depending on market conditions, product offering, and operational responsiveness.",
    before: {
      title: "Random Posting (The Broken Default)",
      items: [
        { text: "Posting festival greetings and generic stock quotes without strategy", icon: "alert-circle" },
        { text: "Cluttered, inconsistent fonts and low-contrast mobile graphics", icon: "alert-circle" },
        { text: "No clear message: Audiences don't understand why to choose you", icon: "alert-circle" },
        { text: "Captions contain only hashtags and no call to action", icon: "alert-circle" },
        { text: "Bio links are broken, missing, or lead to slow dead-end homepages", icon: "alert-circle" },
        { text: "Account owner has no idea what worked or why inquiries aren't coming", icon: "alert-circle" }
      ]
    },
    after: {
      title: "AIS Social Growth System (Engineered Architecture)",
      items: [
        { text: "Strategic 8-part content engine targeting local buyer objections", icon: "check-circle-2" },
        { text: "Editorial visual identity with crisp typography and brand recognition", icon: "check-circle-2" },
        { text: "Sharp positioning: Crystal clear differentiation from local rivals", icon: "check-circle-2" },
        { text: "Conversational copywriting with frictionless WhatsApp and call CTAs", icon: "check-circle-2" },
        { text: "Dedicated mobile landing pages and instant WhatsApp chat triggers", icon: "check-circle-2" },
        { text: "Transparent monthly analytics identifying what to scale next month", icon: "check-circle-2" }
      ]
    }
  },

  // 9. Transparent Metrics: "What We Measure" (No fake numbers)
  metricsMeasured: [
    {
      metric: "Targeted Reach",
      definition: "Total unique local accounts that viewed your content within your geographic target area.",
      whyItMatters: "Proves whether your brand is breaking through the local feed noise."
    },
    {
      metric: "Engaged Interactions",
      definition: "Saves, shares, thoughtful comments, and video completion rates.",
      whyItMatters: "Shares and saves indicate high value and genuine intent, far beyond superficial likes."
    },
    {
      metric: "Profile Visits",
      definition: "The number of users who found content compelling enough to inspect your business page.",
      whyItMatters: "The first critical micro-conversion step from viewer to prospective client."
    },
    {
      metric: "Website & Bio Link Clicks",
      definition: "Direct outbound taps on your landing page, appointment portal, or catalogue.",
      whyItMatters: "Measures how effectively content directs interested attention towards your digital assets."
    },
    {
      metric: "Direct WhatsApp / Call Inquiries",
      definition: "Actual messages, consultation inquiries, or telephone calls initiated from social signals.",
      whyItMatters: "The definitive business metric that directly impacts pipeline and revenue."
    },
    {
      metric: "Content Performance Matrix",
      definition: "Comparative retention and response across Problem, Proof, Education, and Offer posts.",
      whyItMatters: "Informs exactly which topics to double down on during the next 30-day cycle."
    }
  ],

  // 10. Sample Monthly Report Preview (Realistic format)
  sampleReport: {
    period: "Month 02 Review — Sample Client Overview",
    label: "SAMPLE REPORT PREVIEW",
    notice: "Sample illustrative report template. Actual client reports are populated with real platform API telemetry.",
    kpis: [
      { name: "Total Content Published", value: "16 Assets", delta: "100% on schedule" },
      { name: "Local Accounts Reached", value: "Tracked Monthly", delta: "Platform telemetry" },
      { name: "Profile Visits", value: "Monitored", delta: "Direct intent signal" },
      { name: "WhatsApp & Call Taps", value: "Primary KPI", delta: "Action-oriented" }
    ],
    topPerformingPillars: [
      { pillar: "Doctor-Led Explainer Reel", insight: "Highest save rate (4.2x average). Viewers bookmarked to consult family members." },
      { pillar: "Behind-The-Scenes Facility Tour", insight: "Highest comment engagement. Directly dispelled local safety hesitations." },
      { pillar: "Weekend Package Carousel", insight: "Generated the highest proportion of outbound WhatsApp inquiry taps." }
    ],
    whatWorked: [
      "Short 30-second vertical reels with subtitles outperformed static graphics for initial local discovery.",
      "Direct WhatsApp button in bio with pre-filled greeting reduced message abandonment.",
      "Answering patient FAQs directly in captions built demonstrable authority."
    ],
    whatDidntWork: [
      "Festival greeting graphics generated low retention and zero outbound actions (recommend phasing out).",
      "Broad general tips without local context underperformed specific local scenario breakdowns."
    ],
    nextCycleExperiments: [
      "Test Hook Variant A (Question-led) against Hook Variant B (Contrarian fact-led).",
      "Introduce a weekly 'Ask the Specialist' story sequence driving Sunday consultation bookings.",
      "Deploy dedicated mobile landing page for the upcoming seasonal package."
    ]
  },

  // 11. Scientific Experimentation Framework
  experimentationFlow: [
    {
      step: "01",
      title: "Hypothesis",
      desc: "We formulate a specific assertion. Example: 'Prospective parents care more about teacher retention and student emotional safety than high-tech computer labs.'"
    },
    {
      step: "02",
      title: "Content Experiment",
      desc: "We produce 2 contrasting creative formats: One focused on faculty tenure and student care, one focused on infrastructure."
    },
    {
      step: "03",
      title: "Measure & Track",
      desc: "We monitor view duration, shares, DM questions, and campus visit inquiries generated by each format."
    },
    {
      step: "04",
      title: "Analyze & Learn",
      desc: "We dissect the genuine audience response without emotional bias."
    },
    {
      step: "05",
      title: "Scale Winner",
      desc: "We double down on the winning angle in the next 30-day production cycle, continually reducing client acquisition friction."
    }
  ],

  // 12. Three Transparent Packages (No fake promises)
  packages: [
    {
      id: "foundation",
      number: "01",
      name: "Social Foundation",
      badge: "Core Presence",
      tagline: "For established local businesses looking to professionalize their channels and end random posting.",
      suitableFor: "Businesses who need a reputable, active, and professional social presence with zero fluff.",
      pricingType: "Tailored monthly investment",
      pricingNote: "Custom scope based on post cadence and creative requirements",
      features: [
        { text: "Comprehensive Brand & Positioning Audit", included: true },
        { text: "Strategic Bio & Profile Optimization (IG & FB)", included: true },
        { text: "Monthly Content Calendar (12 High-Value Posts)", included: true },
        { text: "8 Editorial Brand Graphics / Carousels", included: true },
        { text: "4 Scripted & Edited Short Reels", included: true },
        { text: "Professional Copywriting with Custom CTAs", included: true },
        { text: "Direct WhatsApp Action Link Integration", included: true },
        { text: "Multi-Platform Publishing (IG, FB, Google)", included: true },
        { text: "Transparent Monthly Performance Report", included: true },
        { text: "Dedicated Mobile Landing Page", included: false },
        { text: "Custom Business Website by AIS", included: false },
        { text: "Bi-Weekly Strategy & Experimentation Calls", included: false }
      ],
      highlight: false,
      ctaText: "Discuss Social Foundation"
    },
    {
      id: "growth",
      number: "02",
      name: "Growth System",
      badge: "Most Popular",
      tagline: "For ambitious businesses actively seeking more qualified local enquiries and market authority.",
      suitableFor: "Local leaders, clinics, academies, and premium stores wanting a comprehensive attention engine.",
      pricingType: "Tailored monthly investment",
      pricingNote: "Scaled around multi-format video production and weekly experimentation",
      features: [
        { text: "Everything in Social Foundation", included: true },
        { text: "Expanded Monthly Calendar (18-20 High-Value Assets)", included: true },
        { text: "8-10 Hook-Driven Vertical Reels with Motion Pacing", included: true },
        { text: "10 Editorial Carousels & High-Contrast Static Creatives", included: true },
        { text: "Objection-Buster FAQ Story Sequences", included: true },
        { text: "High-Converting Mobile Landing Page Funnel", included: true },
        { text: "WhatsApp Pre-filled Lead Routing Setup", included: true },
        { text: "Front-Desk Lead Qualification & Response Scripts", included: true },
        { text: "Continuous Content A/B Hypothesis Testing", included: true },
        { text: "Monthly Strategy & Calibration Video Call", included: true },
        { text: "Full Custom Business Website by AIS", included: false },
        { text: "Quarterly Brand Perception Review", included: true }
      ],
      highlight: true,
      ctaText: "Discuss Growth System"
    },
    {
      id: "business-growth",
      number: "03",
      name: "Business Growth (Full Digital)",
      badge: "Complete System",
      tagline: "The complete digital infrastructure: Social Growth System paired with an AIS custom business website.",
      suitableFor: "Enterprises, multi-branch clinics, institutions, and builders wanting unified digital leadership.",
      pricingType: "Tailored monthly + development investment",
      pricingNote: "Includes custom high-speed web architecture + ongoing growth engine",
      features: [
        { text: "Everything in Growth System", included: true },
        { text: "Custom High-Performance Business Website by AIS", included: true },
        { text: "Multi-Page Responsive Architecture (<1.5s load)", included: true },
        { text: "Direct WhatsApp & Call Integration Across All Pages", included: true },
        { text: "Dedicated Service Landing Pages for Campaigns", included: true },
        { text: "Google Business Profile Local SEO Integration", included: true },
        { text: "Full Cross-Platform Management (IG, FB, LinkedIn, Google)", included: true },
        { text: "Bi-Weekly Strategy & Pipeline Optimization Calls", included: true },
        { text: "Priority Creative Turnaround & On-Demand Revisions", included: true },
        { text: "Quarterly Competitive Positioning Reset", included: true },
        { text: "Dedicated Account Strategist & Direct WhatsApp Line", included: true }
      ],
      highlight: false,
      ctaText: "Discuss Business Growth"
    }
  ],

  // 13. The 6-Step Implementation Process
  processSteps: [
    {
      number: "01",
      name: "Understand",
      duration: "Days 1 - 3",
      headline: "Deep Dive Into Your Local Market",
      desc: "We analyze your business model, customer hesitations, local competitors, current brand perception, and revenue drivers through a structured onboarding diagnostic.",
      outcome: "Clarity on who we are speaking to and what makes your business genuinely superior."
    },
    {
      number: "02",
      name: "Strategize",
      duration: "Days 4 - 7",
      headline: "Architect The 30-Day Growth Blueprint",
      desc: "We establish your 8-part content engine, define monthly themes, craft hook angles, and schedule our first 30-day production timeline.",
      outcome: "A clear, approved editorial plan where every post has a designated conversion job."
    },
    {
      number: "03",
      name: "Create",
      duration: "Days 8 - 14",
      headline: "Precision Scripting & Visual Craft",
      desc: "We script, design, edit, and write copy for your Reels, carousels, and stories, ensuring crisp typography and high-retention pacing.",
      outcome: "A complete batch of ready-to-publish assets delivered for your review and sign-off."
    },
    {
      number: "04",
      name: "Publish",
      duration: "Ongoing",
      headline: "Systematic Multi-Channel Distribution",
      desc: "Content is scheduled and published at peak engagement windows across Instagram, Facebook, and Google Business Profile with frictionless CTAs.",
      outcome: "Consistent, active brand presence without taking a single minute of your daily schedule."
    },
    {
      number: "05",
      name: "Measure",
      duration: "Monthly Rhythm",
      headline: "Transparent Analytics & Inquiry Tracking",
      desc: "We aggregate real platform telemetry: tracking profile visits, outbound link clicks, save rates, and genuine inbound inquiries.",
      outcome: "An honest monthly report showing exact business signals rather than vanity fluff."
    },
    {
      number: "06",
      name: "Optimize",
      duration: "Monthly Review",
      headline: "Hypothesis Testing & System Refinement",
      desc: "We review the data together on our strategy call, retire underperforming angles, and scale what is driving real engagement and inquiries.",
      outcome: "A compounding marketing system that becomes smarter, sharper, and more effective each month."
    }
  ],

  // 14. Twelve Transparent FAQs (Strictly honest, no false guarantees)
  faqs: [
    {
      q: "Do you only create social media posts?",
      a: "No. Creating standalone posts is the least impactful part of modern social media. We build a complete growth system: beginning with market positioning, building an 8-part content engine, setting up frictionless WhatsApp and landing page conversion pathways, and monitoring monthly business impact. Posts without a system are just noise."
    },
    {
      q: "Do you manage our account completely, or do we still have to post?",
      a: "We handle the complete execution cycle: strategy, scripting, graphic design, video editing, caption copywriting, scheduling, and monthly reporting. Depending on your business, you may provide raw smartphone video clips of your facility or team using our simple shot-lists, and we transform them into polished, high-retention assets."
    },
    {
      q: "How many posts and reels do we receive each month?",
      a: "Deliverables are configured based on your chosen package. Our Social Foundation package includes 12 strategic assets per month (8 graphics/carousels + 4 reels), while our Growth System delivers 18-20 assets with heavy vertical video focus. We prioritize quality, retention, and conversion jobs over spamming your feed with empty filler."
    },
    {
      q: "Do you write scripts and captions, or do we have to provide them?",
      a: "We write all scripts, hooks, captions, and call-to-actions. Every caption is crafted using conversational, persuasive copy tailored to your target buyer's local context. You never have to worry about staring at a blank caption box."
    },
    {
      q: "Do you create Reels and short videos?",
      a: "Yes. Short vertical video is currently the most effective organic discovery format on Instagram and YouTube. We provide shot-by-shot guidance, write retention-first hooks, pace the footage dynamically, add professional subtitles, and format covers that match your brand identity."
    },
    {
      q: "Do you run paid advertisements, or is this purely organic?",
      a: "The AIS Social Growth System focuses primarily on organic attention, brand perception, and frictionless conversion infrastructure. However, our content assets and landing pages are built with paid advertising readiness in mind, and we can configure targeted local ad distribution as an add-on module."
    },
    {
      q: "Do you build websites as well?",
      a: "Yes. Alag Innovative Solutions (AIS) is a full-stack digital development firm. We build custom, ultra-fast, modern business websites and high-conversion landing pages. In fact, pairing social media attention with an AIS-built website creates the strongest conversion pipeline for local businesses."
    },
    {
      q: "How do you measure success if you don't track vanity metrics?",
      a: "We measure signals that correlate with business interest: profile visits, website clicks, WhatsApp inquiry taps, phone calls, content save/share rates, and audience retention. While we monitor reach and follower growth, we treat them as secondary indicators rather than final outcomes."
    },
    {
      q: "Can you work with local businesses in our specific city or tier?",
      a: "Yes. The AIS Social Growth System was engineered specifically for local and regional businesses—such as schools, healthcare clinics, restaurants, coaching academies, real estate developers, hotels, and professional firms. Local businesses benefit the most from clear positioning because local competitors rarely possess a coherent system."
    },
    {
      q: "How long before we see meaningful business data?",
      a: "System setup and initial baseline calibration take approximately 2 to 4 weeks. Most clients start observing improved profile engagement, cleaner brand perception, and higher-quality inquiry conversations within the first 60 to 90 days of consistent publishing. Marketing systems compound over time."
    },
    {
      q: "Do you guarantee a specific number of followers, leads, or sales?",
      a: "No. We never make false or misleading revenue guarantees. Final sales depend on multiple factors outside social media: market demand, pricing, competitor moves, and how promptly your staff responds to incoming inquiries. What we guarantee is a rigorous, consistent, professional system engineered according to first principles and continually optimized against real data."
    },
    {
      q: "What do you need from our team to get started?",
      a: "Very little of your daily time. We conduct an initial 60-minute onboarding discovery call to understand your business nuances. Following that, we deliver an easy shot-list checklist for any team or facility footage required. Once you approve the monthly calendar, our team handles all design, editing, copywriting, and publishing."
    }
  ],

  // 15. Free Social Media Audit Checkpoints
  auditCriteria: [
    { title: "Profile & Bio Architecture", desc: "Is your bio immediately clear about who you serve and what next step to take, or is it vague?" },
    { title: "Market Positioning", desc: "Can a visitor within 5 seconds tell why they should choose you over your 3 closest local rivals?" },
    { title: "Content Job Balance", desc: "Are your posts balanced between Education, Proof, and Problem, or are you just posting festival greetings?" },
    { title: "Visual & Brand Identity", desc: "Does your feed look professional and established, or does it look like disjointed Canva templates?" },
    { title: "Conversion Pathways", desc: "Is your WhatsApp, call button, or website link frictionless and pre-configured for simple inquiries?" },
    { title: "Engagement & Retention Signals", desc: "Are your Reels hooked properly to retain attention in the first 3 seconds?" },
    { title: "Local Search Consistency", desc: "Are your name, address, phone, and highlights aligned across Instagram, Facebook, and Google?" }
  ]
};

// Expose globally for vanilla JS access
if (typeof window !== "undefined") {
  window.AIS_DATA = AIS_DATA;
}
