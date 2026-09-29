import headphonesImg from '../assets/headphones.jpg';
import smartwatchImg from '../assets/smartwatch.jpg';
import sneakersImg from '../assets/sneakers.jpg';
import keyboardImg from '../assets/keyboard.jpg';

export const CATEGORIES = [
  'All Products',
  'Electronics',
  'Fashion',
  'Gaming',
  'Home & Smart Life',
  'Accessories'
];

export const PRODUCTS = [
  {
    id: 1,
    name: 'Aurora Wireless ANC Headphones',
    category: 'Electronics',
    price: 249.99,
    originalPrice: 299.99,
    rating: 4.9,
    reviewCount: 142,
    image: headphonesImg,
    badge: 'HOT DEAL',
    inStock: true,
    description: 'Experience ultra-immersive studio sound with hybrid active noise cancellation, 40-hour battery life, dynamic spatial audio, and memory foam comfort cushions.',
    features: [
      'Hybrid Active Noise Cancellation (up to -40dB)',
      '40-hour playback with rapid 10-min fast charge (4 hrs)',
      'Custom 45mm Titanium Dynamic Drivers',
      'Dual-device Bluetooth 5.3 multi-point connection',
      'Premium ultra-soft protein leather earcups'
    ],
    specs: {
      'Connectivity': 'Bluetooth 5.3 / 3.5mm Aux',
      'Battery Life': '40 Hours (ANC ON)',
      'Weight': '260g',
      'Warranty': '2 Years'
    }
  },
  {
    id: 2,
    name: 'Apex Pro Titanium Smartwatch',
    category: 'Electronics',
    price: 349.00,
    originalPrice: 399.00,
    rating: 4.8,
    reviewCount: 98,
    image: smartwatchImg,
    badge: 'BEST SELLER',
    inStock: true,
    description: 'Aerospace-grade titanium smartwatch featuring Always-On Retina AMOLED display, multi-sport GPS tracking, ECG heart monitoring, and 100m water resistance.',
    features: [
      'Grade 5 Titanium case with sapphire crystal glass',
      'Dual-frequency Precision GPS & Off-road Maps',
      'Advanced Health Suite: ECG, SpO2, Sleep & Stress tracking',
      '14-day continuous battery life',
      '50m Water Resistance rating'
    ],
    specs: {
      'Display': '1.96" Super AMOLED 1000 nits',
      'Case Material': 'Grade 5 Titanium',
      'Battery': 'Up to 14 Days',
      'Compatibility': 'iOS & Android'
    }
  },
  {
    id: 3,
    name: 'Axelra StreetTech Urban Sneakers',
    category: 'Fashion',
    price: 139.50,
    originalPrice: 175.00,
    rating: 4.7,
    reviewCount: 84,
    image: sneakersImg,
    badge: '20% OFF',
    inStock: true,
    description: 'Engineered streetwise footwear combining breathable knit technology, reactive cloud-foam cushioning, and futuristic architectural rubber sole.',
    features: [
      'Multi-density CloudFoam responsive midsole',
      'Breathable engineered mesh mesh with suede overlays',
      'Anti-slip continental rubber outsole',
      'Ergonomic orthopedic footbed'
    ],
    specs: {
      'Upper': 'Engineered Mesh & Synthetic Suede',
      'Sole': 'High-Grip Thermoplastic Rubber',
      'Fit': 'True to size',
      'Care': 'Machine washable gentle cycle'
    }
  },
  {
    id: 4,
    name: 'KBD Custom Mech 75% Keyboard',
    category: 'Gaming',
    price: 189.99,
    originalPrice: 219.99,
    rating: 4.9,
    reviewCount: 210,
    image: keyboardImg,
    badge: 'TOP RATED',
    inStock: true,
    description: 'Ultra-tactile 75% mechanical keyboard featuring CNC machined aluminum body, hot-swappable tactile switches, per-key RGB backlighting, and coiled USB-C cable.',
    features: [
      'CNC anodized aluminum body with gasket mount design',
      'Hot-swappable 5-pin PCB with pre-lubed switches',
      'Per-key south-facing RGB customization',
      'Triple mode: Bluetooth 5.1, 2.4G Wireless, USB-C'
    ],
    specs: {
      'Layout': '75% Compact (82 Keys)',
      'Switch Type': 'Pre-lubed Custom Linear/Tactile',
      'Battery': '4000mAh Lithium Ion',
      'Cable': 'Custom Coiled Type-C'
    }
  },
  {
    id: 5,
    name: 'SonicPulse Portable RGB Speaker',
    category: 'Electronics',
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.6,
    reviewCount: 76,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80',
    badge: 'NEW',
    inStock: true,
    description: '360° omnidirectional high-definition sound with dual passive radiators, dynamic light show synced to your music, and IP67 dust/waterproof rating.',
    features: [
      '360-degree immersive surround sound with deep bass',
      'Customizable RGB ambient light show pulsing to rhythm',
      'IP67 fully waterproof & floatable design',
      '24-hour continuous wireless playback'
    ],
    specs: {
      'Output Power': '30W RMS',
      'Waterproof': 'IP67 Submersible',
      'Playtime': '24 Hours',
      'Weight': '550g'
    }
  },
  {
    id: 6,
    name: 'Vortex Curved Gaming Monitor 27"',
    category: 'Gaming',
    price: 429.99,
    originalPrice: 499.99,
    rating: 4.8,
    reviewCount: 165,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
    badge: 'LIMITED',
    inStock: true,
    description: '27-inch 1500R curved QHD 165Hz gaming monitor featuring 1ms MPRT response time, HDR400, and AMD FreeSync Premium Pro technology.',
    features: [
      '2560 x 1440 QHD Resolution at 165Hz refresh rate',
      '1500R curvature for panoramic immersive viewing',
      'Quantum Dot Color technology with 98% DCI-P3',
      'Adjustable ergonomic stand with tilt, swivel & height'
    ],
    specs: {
      'Panel Type': 'Curved Fast VA',
      'Response Time': '1ms (MPRT)',
      'Inputs': '2x HDMI 2.1, 2x DisplayPort 1.4',
      'HDR': 'VESA DisplayHDR 400'
    }
  },
  {
    id: 7,
    name: 'Lumina Smart Ambient Desk Lamp',
    category: 'Home & Smart Life',
    price: 64.99,
    originalPrice: 79.99,
    rating: 4.5,
    reviewCount: 52,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
    badge: 'SMART',
    inStock: true,
    description: 'Minimalist smart LED desk lamp with wireless smartphone charging base, stepless color temperature adjustment, and voice control via Alexa & Google Assistant.',
    features: [
      '10W built-in Qi fast wireless charging pad',
      'Stepless dimming (2700K to 6500K color range)',
      'Circadian rhythm auto-brightness adjustment',
      'Smart home integration (HomeKit, Alexa, Google)'
    ],
    specs: {
      'Brightness': '900 Lumens Max',
      'Wireless Charger': '10W Qi Standard',
      'Material': 'Anodized Aluminum & Acrylic',
      'Lifespan': '50,000 Hours'
    }
  },
  {
    id: 8,
    name: 'CyberLeather Minimalist Backpack',
    category: 'Accessories',
    price: 119.00,
    originalPrice: 149.00,
    rating: 4.9,
    reviewCount: 112,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
    badge: 'POPULAR',
    inStock: true,
    description: 'Weatherproof full-grain vegan leather laptop backpack equipped with anti-theft hidden pockets, USB charging port, and TSA-friendly 16" laptop sleeve.',
    features: [
      'Water-resistant micro-fiber vegan leather exterior',
      'Padded compartment fits up to 16" MacBook Pro',
      'Hidden RFID-blocking passport & wallet pocket',
      'Pass-through luggage strap for seamless travel'
    ],
    specs: {
      'Capacity': '22 Liters',
      'Dimensions': '44cm x 30cm x 15cm',
      'Weight': '0.95 kg',
      'Color': 'Obsidian Black'
    }
  },
  {
    id: 9,
    name: 'Zenith Studio Wireless Earbuds',
    category: 'Electronics',
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.6,
    reviewCount: 91,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
    badge: 'FEATURED',
    inStock: true,
    description: 'Ultra-compact true wireless earbuds with transparent acoustic chambers, active noise cancellation, and wireless charging case.',
    features: [
      'Active Noise Cancellation & Transparency Mode',
      '32 Hours total battery life with Qi wireless charging case',
      'IPX5 sweat and splash resistance',
      'Touch controls with custom equalizer app'
    ],
    specs: {
      'Drivers': '11mm Graphene Coated',
      'Microphones': '6 Noise-Canceling Mics',
      'Codec': 'LDAC, AAC, SBC',
      'Case Charging': 'USB-C & Wireless Qi'
    }
  },
  {
    id: 10,
    name: 'Nomad Stainless Insulated Flask',
    category: 'Home & Smart Life',
    price: 38.50,
    originalPrice: 45.00,
    rating: 4.8,
    reviewCount: 64,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80',
    badge: 'HOT',
    inStock: true,
    description: 'Double-wall vacuum insulated stainless steel water bottle featuring built-in LED temperature screen and UV-C self-cleaning cap.',
    features: [
      'Keeps beverages ice-cold for 24 hrs or boiling hot for 12 hrs',
      'UV-C LED light automatically purifies water every 2 hours',
      'Touch LED top lid shows real-time liquid temperature',
      '100% BPA-free food-grade 18/8 stainless steel'
    ],
    specs: {
      'Volume': '750 ml (25 oz)',
      'Battery': 'Rechargeable USB magnetic cap',
      'Material': '18/8 Pro-Grade Stainless Steel',
      'Leakproof': 'Yes'
    }
  },
  {
    id: 11,
    name: 'Prism Polarized Designer Sunglasses',
    category: 'Fashion',
    price: 89.00,
    originalPrice: 110.00,
    rating: 4.7,
    reviewCount: 43,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80',
    badge: 'NEW',
    inStock: true,
    description: 'Handcrafted lightweight titanium sunglasses with UV400 anti-reflective polarized lenses and spring-hinged temples.',
    features: [
      '100% UV400 Protection with HD Polarized coating',
      'Super-lightweight Japanese titanium wire frame',
      'Scratch-resistant polycarbonate lenses',
      'Includes premium leather folding case & cleaning cloth'
    ],
    specs: {
      'Frame Material': 'Titanium Alloy',
      'Lens Technology': '9-layer HD Polarized',
      'UV Protection': 'UV400 Category 3',
      'Weight': '18g'
    }
  },
  {
    id: 12,
    name: 'HyperDrive Wireless Ergonomic Mouse',
    category: 'Gaming',
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.8,
    reviewCount: 138,
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80',
    badge: 'BEST SELLER',
    inStock: true,
    description: 'Ultra-lightweight 58g wireless gaming mouse with 26K DPI optical sensor, optical switches, and 90-hour battery life.',
    features: [
      'Ultra-light 58g ergonomic honeycomb shell design',
      'Flagship 26,000 DPI 650 IPS Optical Sensor',
      'Gen-3 Optical switches rated for 90 million clicks',
      'Lag-free 1ms 2.4GHz wireless connection'
    ],
    specs: {
      'Sensor': 'PAW3395 Optical',
      'Weight': '58 grams',
      'Polling Rate': '1000Hz / 4000Hz ready',
      'Battery Life': 'Up to 90 Hours'
    }
  }
];

export const PROMO_CODES = {
  'WELCOME10': 0.10, // 10% off
  'NEXUS20': 0.20,   // 20% off
  'FREESHIP': 'FREE' // Free shipping coupon
};

export const INITIAL_REVIEWS = [
  {
    id: 101,
    productId: 1,
    author: 'Alex M.',
    rating: 5,
    date: '2 days ago',
    comment: 'The noise cancellation is on another level! Battery lasts forever. Best purchase I made this year.'
  },
  {
    id: 102,
    productId: 1,
    author: 'Sarah K.',
    rating: 5,
    date: '1 week ago',
    comment: 'Super comfortable for long study sessions. Sound quality is rich with punchy bass.'
  },
  {
    id: 103,
    productId: 2,
    author: 'David R.',
    rating: 5,
    date: '3 days ago',
    comment: 'Titanium build feels solid yet lightweight. GPS tracking is accurate down to the meter on my trail runs!'
  }
];
