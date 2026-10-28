export const detailedServices = [
  {
    no: "01",
    title: "Home & flat moves",
    text: "Careful flat and house moves across Bristol. Once your boxes are packed, your driver works alongside you to load and unload safely. Your belongings are protected in transit by heavy-duty moving blankets and load-rated straps.",
    features: ["Van and driver included", "Flexible booking times", "Local Bristol moves, regional moves, nationwide", "Customer loading assistance required for heavy items"],
    bestFor: "Students, flats, small houses, small office relocation.",
    cta: "Know more about pricing",
  },
  {
    no: "02",
    title: "Marketplace & Store Pickups",
    text: "Got a purchase that won’t fit in the car? We collect from Facebook Marketplace, Gumtree, IKEA, B&Q, private sellers, and local stores, then deliver straight to your door.",
    features: ["Fast local collection", "Single or multiple items", "Seller-to-your-door service", "Same-day slots available (subject to availability)"],
    bestFor: "Furniture, appliances, and bulky items.",
    cta: "Check pickup pricing",
  },
  {
    no: "03",
    title: "Licensed Waste Clearance in Bristol",
    text: "A responsible way to clear cardboard, mixed wood, unwanted furniture, household items, electronic items, and garden waste. As an Environment Agency-registered Upper Tier Waste Carrier, we ensure legal disposal with waste transfer notes provided.",
    features: ["Environment Agency-registered Upper Tier Waste Carrier", "Responsible, legal disposal", "Clear tip-fee receipts provided"],
    bestFor: "House clearances, garden waste, old furniture.",
    cta: "See Clearance Pricing",
  },
  {
    no: "04",
    title: "Self Storage Moves in Bristol",
    text: "Need to move items in or out of Big Yellow, Safestore, Vanguard, or a local lock-up? We provide stress-free transport to any Bristol storage facility. Fully insured, with one friendly local driver handling the trip alongside your loading assistance.",
    features: ["Transport to and from self-storage units", "Direct communication with the driver", "Customer loading assistance required for heavy items"],
    bestFor: "End-of-tenancy moves from a flat or house to storage, collecting items from a storage unit.",
    cta: "Get storage move pricing",
  },
  {
    no: "05",
    title: "Furniture Assemble & Dismantling",
    text: "Dismantling bed frames or squeezing bulky wardrobes down tight Bristol staircases shouldn’t add stress to moving day. RIT TRANZ offers tool-equipped furniture dismantling and flat-pack assembly, with your driver arriving fully equipped with professional Bosch trade power tools.",
    features: [
      "Full trade toolkit included (cordless Bosch impact drivers & precision drills)",
      "Existing screws/fixings securely bagged and labelled",
      "Flat per-item pricing with moves (moving hourly rate pauses)",
      "Flat-pack packaging removal available",
    ],
    bestFor: "Flat-pack builds (IKEA, Argos, Wayfair), move-day bed/wardrobe breakdown, dismantling bulky furniture.",
    cta: "Check Assemble/Dismantling pricing",
  },
];

export const serviceAreas = [
  {
    label: "LOCAL COVERAGE",
    title: "Bristol & North Somerset",
    text: "Fast, hourly-rate transport for standard moves and store collections (includes one trip up to 10 miles).",
    locations: [
      "Bristol City Centre, Clifton & Redland",
      "Bedminster, Southville & Brislington",
      "Filton, Bradley Stoke & Stoke Gifford",
      "Kingswood, Fishponds & Downend",
      "Portishead, Clevedon, Nailsea & Keynsham",
    ],
  },
  {
    label: "REGIONAL COVERAGE",
    title: "The South West & Wales",
    text: "Medium-distance transport ideal for regional flat moves and business relocations. Message us for a custom quote.",
    locations: ["Bath & North East Somerset", "Newport & Cardiff", "Gloucester & Cheltenham", "Swindon & Oxford"],
  },
  {
    label: "NATIONWIDE RELOCATIONS",
    title: "UK-Wide Transport",
    text: "Direct, dedicated A-to-B driving with no handovers. Message us on WhatsApp for a custom fixed-price quote to cover extended fuel and tolls.",
    locations: ["London & the Home Counties", "Birmingham & Manchester", "Scotland & Northern Ireland"],
  },
];

export const serviceFaqs = [
  {
    question: "Do you offer a full packing and removal service?",
    answer: "No. RIT TRANZ is a premium solo man and van service, not a full removal company. You pack your belongings into boxes beforehand, and we work together to load, secure, and unload everything with care.",
  },
  {
    question: "How quickly can you reply and book?",
    answer: "I usually reply on WhatsApp within minutes. Same-day slots are sometimes available depending on my diary, so message early in the day for urgent jobs.",
  },
  {
    question: "Are my belongings insured while in the van?",
    answer: "Yes. I carry £15,000 goods in transit cover and £2M public liability insurance. Your belongings are protected with heavy-duty moving blankets and secured with ratcheting straps.",
  },
  {
    question: "Who will be doing my move?",
    answer: "Me, personally. RIT TRANZ is a one-man service, so the person you speak to on WhatsApp is the driver who turns up. There are no subcontractors and no handovers.",
  },
  {
    question: "Can you move large furniture like sofas, wardrobes, and mattresses?",
    answer: "Yes, as long as it fits through the doors and into the van. Because I am a solo driver, an able-bodied customer must be present at both locations to assist me with lifting heavy or bulky items. Send photos and measurements on WhatsApp, and I will confirm before booking.",
  },
  {
    question: "Do you do student moves in Bristol?",
    answer: "Yes. I help students moving to and from UWE, the University of Bristol, shared houses, and storage units, often with flexible booking times around term dates.",
  },
  {
    question: "What does \"one trip up to 10 miles\" mean?",
    answer: "The standard local hourly rate includes the van, the driver, and one trip of up to 10 miles. Extra distance and additional trips are charged separately at a fair mileage rate. We will agree on the final, fixed price before you book so there are no surprises.",
  },
  {
    question: "Do I need to pack everything myself?",
    answer: "Yes. Please have everything boxed, securely taped, and ready before I arrive. This keeps your booking time short and your final cost down.",
  },
  {
    question: "Can you collect from Facebook Marketplace, Gumtree, IKEA, and B&Q?",
    answer: "Yes, I do single or multiple-item collections from retail stores and private sellers, delivering straight to your door. Send the address and a photo of the item for a quick quote.",
  },
  {
    question: "Can you collect the same day?",
    answer: "Often yes, subject to availability. WhatsApp me with the collection address and your preferred time.",
  },
  {
    question: "Are you a licensed waste carrier?",
    answer: "Yes. I am an Environment Agency Registered Upper Tier Waste Carrier, so your waste is taken and disposed of legally at commercial facilities.",
  },
  {
    question: "What kinds of waste can you take?",
    answer: "Cardboard, mixed wood, unwanted furniture, household items, electronic items, and garden waste are all accepted. Send a description and photos for an accurate quote. Hazardous waste, asbestos, and large DIY or construction rubble are not accepted.",
  },
];

export const serviceFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: serviceFaqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};
