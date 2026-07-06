// Fix Experts Oman - Local CMS Data Storage
const SERVICES_DATA = [
  {
    id: "house-shifting",
    category: "moving",
    title: "House Shifting",
    subtitle: "Premium home and villa relocation service in Muscat",
    description: "Stress-free residential relocation with professional packing, secure loading, and precise setup in your new home.",
    fullDescription: "Our premium house shifting service is designed to take the stress out of moving. From small apartments to large villas, our highly trained team handles every step. We use multi-layer bubble wrap, premium carton boxes, and heavy-duty protective blankets to secure your furniture, electronics, and delicate items. Our service includes dismantling of beds and wardrobes, secure transport in closed GPS-tracked moving trucks, and complete reassembly and positioning at your new location.",
    icon: `<svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>`,
    image: "assets/services1.jpeg",
    benefits: [
      "Expert dismantling & reassembly",
      "Premium packing materials used",
      "Closed transit vehicles for dust protection",
      "Insurance coverage options available"
    ],
    process: [
      "Dismantling and categorized packing",
      "Safe loading in customized closed containers",
      "Transport via optimal routes",
      "Unpacking, assembly, and setup"
    ]
  },

  {
    id: "home-renovation",
    category: "renovation",
    title: "Home and Shop Renovation",
    subtitle: "Complete home & commercial space transformation",
    description: "Premium remodeling for your home, kitchen, bathrooms, living areas, and retail shops with Omani design elements.",
    fullDescription: "Transform your home or commercial space with our premium renovation services. We offer comprehensive remodeling for residences and retail shops alike — including flooring upgrades, drywall installations, modern false ceilings, wall painting, kitchen cabinetry redesign, bathroom transformations, showcase glass, product shelves, and modern checkout counters. We integrate premium materials and contemporary designs that match the luxury style expected in Oman.",
    icon: `<svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>`,
    image: "assets/services5.jpeg",
    benefits: [
      "Custom 3D layout planning for homes & shops",
      "Premium materials & sanitaryware selection",
      "Plumbing, electrical, and finishing work included",
      "On-schedule project delivery warranty"
    ],
    process: [
      "Design consult & material selection",
      "Demolition and surface preparation",
      "Civil, electrical, & plumbing installations",
      "Finishing paint, fixtures, and final inspection"
    ]
  },
  {
    id: "furniture-repair",
    category: "carpentry",
    title: "Furniture Repair",
    subtitle: "Professional wooden furniture restoration",
    description: "Restore your dining tables, premium sofas, antique cupboards, and cabinets back to life.",
    fullDescription: "Don't discard expensive furniture when it shows signs of damage. Our experienced carpenters specialize in repairing structural joints, fixing broken drawer sliders, polishing old wooden surfaces, and re-upholstering luxury sofas, ensuring they look new again.",
    icon: `<svg viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z"/></svg>`,
    image: "assets/services8.jpeg",
    benefits: [
      "High-grade premium wood polish",
      "Structural reinforcement for squeaky/wobbly items",
      "Door lock & hinge replacement",
      "On-site repair option for standard jobs"
    ],
    process: [
      "Condition assessment & wood identification",
      "Structural reinforcing and gluing",
      "Sanding, patching, and wood staining",
      "Final lacquer sealing and polishing"
    ]
  },
  {
    id: "carpenter-work",
    category: "carpentry",
    title: "Carpenter Work",
    subtitle: "Custom woodwork & carpentry services",
    description: "Expert custom carpentry for shelves, partitioning, wooden frames, and general installations.",
    fullDescription: "From building custom TV consoles to fitting interior wooden doors, our carpenter service in Muscat handles all woodworks. We source high-quality MDF, solid wood, and plywood, delivering high-precision craftsmanship for all household needs.",
    icon: `<svg viewBox="0 0 24 24"><path d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2l-1.5 1.5L6 2v16h12V3.5h1.5zM12 11H8v-2h4v2zm0-4H8V5h4v2zm4 8H8v-2h8v2z"/></svg>`,
    image: "assets/services9.jpeg",
    benefits: [
      "Precision cut & clean joint seals",
      "Eco-friendly wood treatments",
      "Custom sizes tailored to your home dimensions",
      "Expert carpenters with decades of collective experience"
    ],
    process: [
      "Accurate space measurements",
      "Wood selection and design approval",
      "On-site cutting and structural frame builds",
      "Final finish fitting and smooth sanding"
    ]
  },
  {
    id: "cabinet-making",
    category: "carpentry",
    title: "Cabinet Making",
    subtitle: "Custom cabinet and wardrobe builders",
    description: "Bespoke kitchen cabinets, walk-in closets, and storage wardrobes designed for space optimization.",
    fullDescription: "Maximize storage space elegantly. We build custom kitchen cabinets, modern pantries, bedroom wardrobes, and bathroom vanity sets. We use soft-close hydraulic hinges, premium laminated sheets, and handle hardware of your choice.",
    icon: `<svg viewBox="0 0 24 24"><path d="M4 4h16v16H4V4zm2 2v6h5V6H6zm7 0v6h5V6h-5zm-7 8v4h5v-4H6zm7 0v4h5v-4h-5z"/></svg>`,
    image: "assets/services10.jpeg",
    benefits: [
      "Heavy duty soft-close hinges & channels",
      "High moisture-resistant (HMR) wood options",
      "Custom internal configurations (shelves, racks)",
      "Wide choice of finishes (High gloss, Matte, Acrylic)"
    ],
    process: [
      "Storage space assessment and CAD design plan",
      "Pre-cutting panels in specialized workshop",
      "Installation of internal frames and drawer slides",
      "Hanging doors, hardware fitting, and level calibration"
    ]
  },
  {
    id: "bed-installation",
    category: "carpentry",
    title: "Bed Installation & Repair",
    subtitle: "Complete bed assembly and creak repair",
    description: "Safe assembly of luxury beds, custom headboards, and structural squeak removal services.",
    fullDescription: "A shaky or squeaky bed disrupts your sleep. We specialize in assembling imported flat-pack beds (IKEA, Home Centre, Danube) and reinforcing old bed frames. We replace broken slats, fix center beams, and secure hydraulic storage beds.",
    icon: `<svg viewBox="0 0 24 24"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/></svg>`,
    image: "assets/services11.jpeg",
    benefits: [
      "Eradicate bed squeaks & structural wobble",
      "Hydraulic lift-up bed repair specialist",
      "Custom headboard wall mounts",
      "Correct assembly preventing long-term damage"
    ],
    process: [
      "Component checks and layout matching",
      "Secure side panels to headboard/footboard",
      "Sturdy installation of support slats & middle rail",
      "Load testing and mattress placement"
    ]
  },
  {
    id: "furniture-assembly",
    category: "installation",
    title: "Furniture Assembly",
    subtitle: "Quick flat-pack furniture setup",
    description: "Hassle-free assembly of wardrobes, dining tables, desks, drawers, and TV units.",
    fullDescription: "Avoid the complex instructions of flat-pack furniture. Our specialists assemble products from IKEA, Home Box, Home Centre, and online international brands in a fraction of the time. We make sure alignments are clean, doors hang perfectly, and drawers slide smoothly.",
    icon: `<svg viewBox="0 0 24 24"><path d="M4 18v3h3v-3h10v3h3v-3h1v-6H3v6h1zM3 5v6h18V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2z"/></svg>`,
    image: "assets/services12.jpeg",
    benefits: [
      "Fast assembly using specialized hand tools",
      "Wall anchoring for children safety (anti-tip)",
      "Zero scratch guarantee on flooring during setup",
      "Cardboard packaging cleanup and disposal"
    ],
    process: [
      "Unboxing and checking item checklists",
      "Frame configuration and structure build",
      "Drawer fitting, cabinet adjustments, and door leveling",
      "Safety anchoring to walls and cleaning work area"
    ]
  },
  {
    id: "handyman-services",
    category: "installation",
    title: "General Handyman",
    subtitle: "Professional home repair & mounting services",
    description: "TV mounting, curtain hanging, shelf installation, lock replacement, and quick electrical/plumbing repairs.",
    fullDescription: "From hanging heavy mirrors to fixing running toilets, our general handyman services cover all odd jobs around the house. We bring our own high-end hammer drills, wall plugs, screwdrivers, and replacement accessories to fix everything safely.",
    icon: `<svg viewBox="0 0 24 24"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5.1-2.4-7.5-1.3L8 5.3 5.3 8 1.7 4.4C.6 6.8 1 9.9 3 11.9c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.4-.4.4-1.1 0-1.4z"/></svg>`,
    image: "assets/services10.jpeg",
    benefits: [
      "Sturdy concrete wall mounting",
      "Electrical bulb, switch & socket repair",
      "Plumbing tap, drain & washer replacement",
      "Speedy response for home maintenance jobs"
    ],
    process: [
      "Job assessment and safety check",
      "Drilling, wiring, or pipe fixing with accuracy",
      "Functional testing of the repair/mount",
      "Cleaning of concrete dust or work residue"
    ]
  },
  {
    id: "painting",
    category: "painting",
    title: "Painting Services",
    subtitle: "Professional interior & exterior painting",
    description: "High-quality wall painting, texture finishes, accent walls, and complete property repainting by skilled painters.",
    fullDescription: "Transform any space with our professional painting services. We handle interior and exterior painting for homes, offices, and commercial spaces. Our team uses premium paints, proper surface preparation, and clean-edge techniques to deliver flawless finishes. From single accent walls to full property repainting, we ensure neat, durable, and beautiful results every time.",
    icon: `<svg viewBox="0 0 24 24"><path d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3z"/></svg>`,
    image: "assets/services13.jpeg",
    benefits: [
      "Premium branded paints & finishes",
      "Proper surface prep (sanding, priming, filling)",
      "Clean edge work and zero splatter guarantee",
      "Interior, exterior & accent wall options"
    ],
    process: [
      "Surface inspection and color consultation",
      "Furniture protection and masking",
      "Priming, sanding, and crack filling",
      "Two-coat application and final cleanup"
    ]
  },
  {
    id: "cleaning",
    category: "cleaning",
    title: "Cleaning Services",
    subtitle: "Deep cleaning & post-renovation cleanup",
    description: "Thorough residential and commercial cleaning including deep cleaning, move-in/move-out, and post-construction cleanup.",
    fullDescription: "Keep your property spotless with our professional cleaning services. We provide deep cleaning for villas, apartments, and offices, including post-renovation debris removal, move-in/move-out cleaning, and regular maintenance cleans. Our trained staff uses eco-friendly products and industrial-grade equipment to deliver hygienic, fresh, and sparkling results.",
    icon: `<svg viewBox="0 0 24 24"><path d="M15 3l-1 2H7v2h1l1 12h6l1-12h1V5h-7l1-2H8zm-2 14h-2v-3h2v3zm4.5-9.5l-1 8h-7l-1-8h9z"/></svg>`,
    image: "assets/services14.png",
    benefits: [
      "Eco-friendly cleaning products",
      "Post-renovation & construction cleanup",
      "Move-in / move-out deep cleaning",
      "Trained and insured cleaning staff"
    ],
    process: [
      "Property walkthrough and scope assessment",
      "Dusting, vacuuming, and surface wiping",
      "Deep cleaning of kitchens, bathrooms & floors",
      "Final inspection and fragrance finishing"
    ]
  },
  {
    id: "electrical-work",
    category: "installation",
    title: "Electrical Work",
    subtitle: "Licensed electrical repairs & installations",
    description: "Safe electrical wiring, socket installation, lighting setup, fan mounting, and circuit breaker repairs by certified technicians.",
    fullDescription: "Our licensed electricians handle all residential and commercial electrical work in Muscat. From rewiring old circuits to installing modern LED lighting, ceiling fans, distribution boards, and smart switches, we ensure every job meets Oman safety standards. We use premium cables, connectors, and branded components for long-lasting results.",
    icon: `<svg viewBox="0 0 24 24"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>`,
    image: "https://images.pexels.com/photos/38264253/pexels-photo-38264253.jpeg?auto=compress&cs=tinysrgb&w=800",
    benefits: [
      "Certified & licensed electricians",
      "Compliant with Oman safety regulations",
      "Premium wiring & branded components",
      "Emergency same-day service available"
    ],
    process: [
      "Electrical system inspection & fault diagnosis",
      "Detailed quote with material breakdown",
      "Safe wiring, installation & connections",
      "Testing, certification & cleanup"
    ]
  },
  {
    id: "plumbing-services",
    category: "installation",
    title: "Plumbing Services",
    subtitle: "Expert plumbing repair & installation",
    description: "Leak fixes, pipe replacement, tap installation, water heater setup, drain cleaning, and bathroom fittings by skilled plumbers.",
    fullDescription: "From dripping taps to burst pipes, our professional plumbers provide fast and reliable plumbing services across Muscat. We handle water heater installation, bathroom fixture fitting, kitchen sink repairs, drain unblocking, and complete pipe replacements. Our team carries quality parts and tools to resolve issues in a single visit.",
    icon: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h-2v-2h2v2zm0-4h-2V8h2v4zm4 4h-2v-2h2v2zm0-4h-2V8h2v4z"/></svg>`,
    image: "https://images.pexels.com/photos/29226620/pexels-photo-29226620.jpeg?auto=compress&cs=tinysrgb&w=800",
    benefits: [
      "Experienced & insured plumbers",
      "Same-day leak & burst pipe repair",
      "Water heater installation & servicing",
      "Quality parts with warranty"
    ],
    process: [
      "Issue inspection & leak detection",
      "Transparent quote with parts cost",
      "Repair or replacement with minimal disruption",
      "Pressure testing & final cleanup"
    ]
  },
  {
    id: "ac-maintenance",
    category: "installation",
    title: "AC Maintenance",
    subtitle: "AC servicing, repair & installation",
    description: "Professional AC deep cleaning, gas refilling, compressor repair, thermostat fixes, and new unit installation.",
    fullDescription: "Keep your cooling system running efficiently in Oman's hot climate. Our AC technicians provide comprehensive services including deep cleaning, filter replacement, gas refilling (R410A/R32), compressor repair, thermostat calibration, and complete split/window AC installation. We service all major brands including LG, Samsung, Daikin, Carrier, and Gree.",
    icon: `<svg viewBox="0 0 24 24"><path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22z"/></svg>`,
    image: "https://images.pexels.com/photos/33671149/pexels-photo-33671149.jpeg?auto=compress&cs=tinysrgb&w=800",
    benefits: [
      "All major AC brands serviced",
      "Deep cleaning & sanitization",
      "Gas refilling with leak check",
      "Annual maintenance contracts available"
    ],
    process: [
      "AC condition assessment & performance check",
      "Filter cleaning or replacement",
      "Coil cleaning, gas top-up & electrical check",
      "Cooling test & maintenance report"
    ]
  },
  {
    id: "furniture-installation",
    category: "installation",
    title: "Furniture Installation",
    subtitle: "Professional furniture setup & mounting",
    description: "Expert assembly and wall-mounting of beds, wardrobes, TV units, kitchen racks, shelves, and office furniture.",
    fullDescription: "We provide professional furniture installation services for homes and offices in Muscat. Whether you need a new bed assembled, wall-mounted TV unit, kitchen shelves installed, or office workstations set up, our team handles it with precision. We bring all necessary tools, hardware, and wall anchors to ensure secure, level, and damage-free installation.",
    icon: `<svg viewBox="0 0 24 24"><path d="M4 18v3h3v-3h10v3h3v-3h1v-6H3v6h1zM3 5v6h18V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2z"/></svg>`,
    image: "https://images.pexels.com/photos/5691502/pexels-photo-5691502.jpeg?auto=compress&cs=tinysrgb&w=800",
    benefits: [
      "Beds, wardrobes, desks & TV units",
      "Wall mounting with heavy-duty anchors",
      "Anti-tip safety anchoring included",
      "Zero scratch floor protection"
    ],
    process: [
      "Unboxing and parts inventory check",
      "Frame assembly per manufacturer specs",
      "Wall mounting & level calibration",
      "Final stability test & cleanup"
    ]
  },
  {
    id: "home-repair",
    category: "installation",
    title: "Home Repair & Maintenance",
    subtitle: "Complete home upkeep & fix-it service",
    description: "All-in-one home maintenance covering door repairs, window fixes, tile replacement, paint touch-ups, and general repairs.",
    fullDescription: "Our comprehensive home repair and maintenance service covers everything your property needs to stay in top condition. From fixing squeaky doors and cracked tiles to repainting walls and replacing window seals, our multi-skilled technicians handle it all. Perfect for landlords, property managers, and homeowners who want a single trusted partner for all maintenance tasks.",
    icon: `<svg viewBox="0 0 24 24"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5.1-2.4-7.5-1.3L8 5.3 5.3 8 1.7 4.4C.6 6.8 1 9.9 3 11.9c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.4-.4.4-1.1 0-1.4z"/></svg>`,
    image: "https://images.pexels.com/photos/11398216/pexels-photo-11398216.jpeg?auto=compress&cs=tinysrgb&w=800",
    benefits: [
      "One call for all home repairs",
      "Door, window, tile & wall fixes",
      "Paint touch-ups & sealant work",
      "Ideal for landlords & property managers"
    ],
    process: [
      "Property walkthrough & repair checklist",
      "Consolidated quote for all jobs",
      "Multi-trade technician dispatch",
      "Quality check & handover"
    ]
  }
];

const TESTIMONIALS_DATA = [
  {
    name: "Salim Al-Harthy",
    location: "Al Mouj, Muscat",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    comment: "Extremely professional movers! They relocated my entire 4-bedroom villa in Al Mouj to Al Seeb in just one day. Zero damage to our glass furniture and antiques. Recommended!"
  },
  {
    name: "Sarah Williams",
    location: "Madinat Qaboos, Muscat",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
    comment: "I hired them for custom bedroom cupboards and flat-pack assembly. The carpenters were polite, tidy, and did a magnificent job. The soft-close finish is top-tier."
  },
  {
    name: "Faisal Al-Balushi",
    location: "Ruwi, Muscat",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    comment: "Outstanding home renovation work. They transformed our old kitchen into a beautiful modern design. Very transparent pricing, and they finished exactly on time."
  },
  {
    name: "Amna Al-Zadjali",
    location: "Qurum, Muscat",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
    comment: "Fast, reliable, and affordable handyman services. I needed curtain rods installed and a large TV mounted on a concrete wall. The handyman arrived with all tools and completed the work cleanly."
  }
];

const LOCATIONS_DATA = ["Muscat", "Seeb", "Barka", "Sohar", "Nizwa", "Salalah"];
