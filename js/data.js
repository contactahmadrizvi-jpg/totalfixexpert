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
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
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
    id: "office-shifting",
    category: "moving",
    title: "Office Shifting",
    subtitle: "Efficient corporate and office relocation",
    description: "Minimize business downtime with our organized corporate moving and IT equipment handling services.",
    fullDescription: "Moving offices requires speed, organization, and careful handling. We specialize in relocating corporate spaces with minimum disruption. Our team packs files, IT infrastructure, servers, and office furniture systematically, labeling everything for easy setup. We work after-hours or during weekends to ensure your operations remain active.",
    icon: `<svg viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm10 12h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/></svg>`,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    benefits: [
      "Weekend & night shifting available",
      "IT equipment & server packing expertise",
      "Systematic labeling and layout planning",
      "Dedicated corporate project coordinator"
    ],
    process: [
      "Inventory mapping & labeling",
      "Secure IT and workspace packing",
      "Transport and fast unloading",
      "Reassembly and quick department setup"
    ]
  },
  {
    id: "villa-shifting",
    category: "moving",
    title: "Villa Shifting",
    subtitle: "Large scale residential moving solutions",
    description: "Exclusive villa relocation services tailored for spacious residences, landscaping, and outdoor setups.",
    fullDescription: "Villa moving involves complex logistics, valuable assets, and large furniture sets. We specialize in villa relocations, ensuring fine art, garden decor, play structures, and high-end home systems are safely packaged and moved by professionals.",
    icon: `<svg viewBox="0 0 24 24"><path d="M17 11V3H7v4H3v14h18V11h-2zm-8 8H5v-2h4v2zm0-4H5v-2h4v2zm0-4H5V9h4v2zm6 8h-4v-6h4v6zm6 0h-4v-2h4v2zm0-4h-4v-2h4v2z"/></svg>`,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80",
    benefits: [
      "Handling of large and heavy assets",
      "Chandelier & fine-art packaging",
      "Garden furniture & outdoor equipment moving",
      "Multiple trucks for same-day completion"
    ],
    process: [
      "Pre-move detailed site survey",
      "Specialty wrapping for high-value items",
      "Managed multi-truck transport",
      "Complete assembly and outdoor layout staging"
    ]
  },
  {
    id: "shop-shifting",
    category: "moving",
    title: "Shop Shifting",
    subtitle: "Retail and commercial store relocations",
    description: "Secure relocation of retail displays, inventories, fixtures, and delicate product stocks.",
    fullDescription: "Our shop shifting service is structured for retail stores, supermarkets, and boutiques. We pack inventories securely to prevent damage and transport display counters, cash registers, racks, and signage carefully to your new commercial space.",
    icon: `<svg viewBox="0 0 24 24"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"/></svg>`,
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=600&q=80",
    benefits: [
      "Inventory packing & safety checks",
      "Safe transport of glass fixtures & displays",
      "Quick relocation to avoid business losses",
      "Heavy load support for equipment & machinery"
    ],
    process: [
      "Stock inventory checklist creation",
      "Dismantling shelves, counters & displays",
      "Transit in weatherproof enclosed fleet",
      "Unpacking, cleaning, and layout setup"
    ]
  },
  {
    id: "home-renovation",
    category: "renovation",
    title: "Home Renovation",
    subtitle: "Complete home transformation & upgrades",
    description: "Premium remodeling for your kitchen, bathrooms, and living areas with Omani design elements.",
    fullDescription: "Transform your living space with our premium home renovation services. We offer comprehensive remodeling, including flooring upgrades, drywall installations, modern false ceilings, wall painting, kitchen cabinetry redesign, and bathroom transformations. We integrate premium materials and contemporary designs that match the luxury style expected in Oman.",
    icon: `<svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>`,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
    benefits: [
      "Custom 3D layout planning",
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
    id: "room-renovation",
    category: "renovation",
    title: "Room Renovation",
    subtitle: "Individual room remodeling & styling",
    description: "Refresh your bedroom, kids' room, guest room, or lounge with custom partitions, lighting, and finishes.",
    fullDescription: "Give any single room a complete facelift. Whether it's upgrading a master bedroom with modern accent walls and indirect lighting or building a cozy, functional family lounge, our experts deliver high-end woodwork, gypsum board design, painting, and smart lighting setup.",
    icon: `<svg viewBox="0 0 24 24"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-9 14H5v-5h5v5zm9 0h-7v-5h7v5zm0-7H5V6h14v5z"/></svg>`,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80",
    benefits: [
      "Custom drywall & ceiling work",
      "Vibrant paint, wallpaper, and panel designs",
      "Electrical sockets & ambient lighting layout",
      "Space-saving built-in closets & desks"
    ],
    process: [
      "Consultation on room layout requirements",
      "Plastering, wiring, and ceiling frame setup",
      "Painting, panelling & light fixtures installation",
      "Final cleanup and furniture assembly"
    ]
  },
  {
    id: "shop-renovation",
    category: "renovation",
    title: "Shop Renovation",
    subtitle: "Modern commercial interior solutions",
    description: "Commercial shop fitting, branding-friendly design upgrades, lighting layouts, and partition works.",
    fullDescription: "Make your retail store stand out to Omani shoppers. We renovate commercial units with beautiful showcase glass, sturdy product shelves, modern checkout counters, high-end tiling, and specialized lighting systems designed to highlight your products.",
    icon: `<svg viewBox="0 0 24 24"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"/></svg>`,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80",
    benefits: [
      "Branding integration options",
      "Compliant with commercial regulations in Oman",
      "Durable high-traffic materials",
      "Speedy delivery to prevent trading delays"
    ],
    process: [
      "Detailed architectural layouts & approvals",
      "Demolition, structural updates & plumbing/HVAC",
      "Shop front framing, shelves, and counter construction",
      "Branded detailing, paint finishes, and lighting testing"
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
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
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
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
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
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
    comment: "Fast, reliable, and affordable handyman services. I needed curtain rods installed and a large TV mounted on a concrete wall. The handyman arrived with all tools and completed the work cleanly."
  }
];

const BLOG_DATA = [
  {
    id: "stress-free-shifting",
    category: "Moving Tips",
    title: "10 Tips For Stress-Free House Shifting In Muscat",
    excerpt: "House shifting can be daunting. Check out our expert tips to make your move inside Muscat smooth and hassle-free.",
    date: "July 2, 2026",
    image: "https://images.unsplash.com/photo-1603796846097-bee99e4a60c9?auto=format&fit=crop&w=600&q=80",
    content: "Moving home is known to be one of the most stressful life events. However, with systematic planning, you can make the transition smooth. First, declutter your home weeks before shifting. Donate or throw away items you no longer use. Second, pack a survival box containing essential toiletries, changes of clothes, and documentation for the first night. Third, color-code your boxes based on destination rooms to speed up unloading. If you find it hard, always hire certified experts like Fix Experts Oman who handle packing, heavy lifting, and dismantling professionally."
  },
  {
    id: "choose-movers-oman",
    category: "Moving Tips",
    title: "How To Choose Professional Movers In Oman",
    excerpt: "What to look for in a removalist company? Here is how to find trusted moving professionals in Oman.",
    date: "June 25, 2026",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
    content: "When selecting a moving company, trust and safety come first. Make sure to check their Google reviews, verification credentials, and physical office presence. Ask if they use closed moving trucks, which protect your furniture from Muscat's harsh dust and heat. Finally, request a detailed, itemized quote to prevent hidden charges on moving day."
  },
  {
    id: "furniture-repair-muscat",
    category: "Carpentry Advice",
    title: "Best Furniture Repair Services In Muscat",
    excerpt: "Learn how to restore antique wooden items and choose structural furniture repair solutions.",
    date: "June 18, 2026",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
    content: "Wooden furniture gives homes warmth, but hinges degrade, and finishes fade. Rather than discarding quality wood, look into professional repair services. Wood staining, joint reinforcement, and replacing runners can double the lifespan of dining tables, beds, and wardrobes for a fraction of the cost of new furniture."
  },
  {
    id: "renovation-trends-oman",
    category: "Renovation Ideas",
    title: "Modern Home Renovation Trends In Oman",
    excerpt: "Upgrade your living spaces with the latest trending interior ideas tailored for Omani homes.",
    date: "June 10, 2026",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
    content: "Omani home designs are evolving to mix traditional architecture with clean, modern minimalism. Popular trends include hidden lighting, light-colored marble tiling, large glass windows, and open-plan kitchen setups featuring dark oak cabinetry and gold accent hardware."
  }
];

const FAQS_DATA = [
  {
    question: "How much does house shifting cost in Oman?",
    answer: "House shifting costs depend on the home size (e.g., number of rooms), the amount of furniture, and the distance. A standard 1-bedroom apartment move in Muscat ranges between OMR 50 to 80, while a larger villa move can range from OMR 120 to 250 including dismantling, packing, transit, and reassembly. Contact us for a free precise site inspection and quote."
  },
  {
    question: "Do you provide furniture assembly services?",
    answer: "Yes, we provide professional assembly services for all flat-pack furniture. We assemble wardrobes, beds, tables, drawer chests, and cupboards from IKEA, Home Centre, Danube, and online stores. We ensure correct alignment and anchor tall units to the wall for safety."
  },
  {
    question: "Can you renovate complete homes?",
    answer: "Yes, we execute complete residential and commercial renovations across Oman. Our services cover civil works, drywall partition setups, modern lighting, false ceiling installations, high-quality painting, wall paneling, tile laying, and custom carpentry fit-outs."
  },
  {
    question: "Are your carpenters experienced?",
    answer: "Absolutely. Our carpentry team consists of skilled craftsmen with over 10 years of experience in furniture manufacturing, bed repair, custom cabinet making, and antique wood restoration."
  },
  {
    question: "Do you serve Muscat and nearby cities?",
    answer: "Yes, we serve all areas within Muscat (Qurum, Al Mouj, Seeb, Ruwi, Bawshar, Madinat Qaboos) and nearby cities including Barka, Sohar, Nizwa, and Salalah."
  },
  {
    question: "Do you provide emergency handyman services?",
    answer: "Yes, we provide emergency handyman support for urgent repairs like leaking pipes, faulty electrical switches, jammed door locks, and furniture breakdowns. Call us directly on our hotlines for immediate dispatch."
  }
];

const LOCATIONS_DATA = ["Muscat", "Seeb", "Barka", "Sohar", "Nizwa", "Salalah"];
