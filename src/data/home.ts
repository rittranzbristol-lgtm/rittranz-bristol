import type { IconName } from "../components/icons/Icon";
import { facebookUrl, instagramUrl } from "./site.js";

export const services = [
  {
    icon: "home" as IconName,
    title: "Home & flat moves",
    description: "Careful, efficient moves for flats, small houses, and student accommodation across Bristol.",
    price: "£40",
    unit: "/ hour",
    note: "2-hour minimum",
    cta: "View moving details",
  },
  {
    icon: "store" as IconName,
    title: "Store & item pickups",
    description: "Fast local collections from Facebook Marketplace, IKEA, B&Q, and private sellers delivered straight to your door.",
    price: "£35",
    unit: "from",
    note: "Based on item & distance",
    cta: "View pickup details",
  },
  {
    icon: "waste" as IconName,
    title: "Licensed waste clearance",
    description: "Responsible, Environment Agency-licensed clearance for cardboard, unwanted furniture, household waste, and green waste.",
    price: "£80",
    priceExtra: "Micro loads start from £60",
    unit: "from",
    note: "Tip fees charged at extra cost",
    cta: "View clearance details",
  },
  {
    icon: "box" as IconName,
    title: "Self-storage moves",
    description: "Stress-free transport to and from self-storage units. Handled by a solo driver, with your help required for loading heavy items.",
    price: "£40",
    unit: "/ hour",
    note: "2-hour minimum",
    cta: "View more details",
  },
];

export const coverage = ["Bristol", "Portishead", "Nailsea", "Clevedon", "All BS Postcodes", "Nationwide Moves"];
export const faqWhatsAppUrl = `https://wa.me/447584201972?text=${encodeURIComponent("Hi, I'd like a quote.")}`;
export const homeFaqs = [
  {
    question: "Is there a minimum booking?",
    answer: "Yes, there is a 2-hour minimum booking required for moves. This covers the call-out fee, commercial van insurance, running costs, and labour, ensuring you get a fully insured van and driver to your door in Bristol at a fair price. After the first two hours, you only pay for the time the job takes.",
  },
  {
    question: "Do I need to help load?",
    answer: "Rit Tranz is a premium solo man and van service. Your driver handles the logistics, securing, and standard carrying. However, for large, heavy, or bulky items (such as sofas and appliances), an able-bodied person must be present at both locations to assist the driver with the heavy lifting.",
  },
  {
    question: "What size is your van, and will my items fit?",
    answer: "We use a Ford Transit Custom SWB with 6.0 m³ of load space (2.55 m long, 1.77 m wide, 1.40 m high) and a typical payload of 800 kg. Thick padded blankets, ratchet straps, a sack truck, and a stair-climbing trolley are included on every job. Send your measurements on WhatsApp to check that everything fits.",
  },
  {
    question: "Are my items insured?",
    answer: "Yes. Your items are covered up to £15,000 while in transit, and Rit Tranz holds £2M public liability insurance cover for total peace of mind. Ask us for a copy of our certificate.",
  },
  {
    question: "Do you handle stairs, flats, and parking permits?",
    answer: "Yes, we frequently manage flat moves and student accommodations. However, parking permits are not included. Any permit or visitor parking needed at the pickup and drop-off addresses must be arranged by the customer.",
  },
  {
    question: "Can you clear unwanted items?",
    answer: "Yes. Waste clearance is fully legal and Environment Agency licensed, with tip and weighbridge fees passed on at cost. Our Upper Tier Waste Carrier license number is CBDU651708 and can be verified on the public register.",
  },
  {
    question: "How do I pay, and when?",
    answer: "Payment is due upon delivery completion. You can pay by card, cash, or bank transfer.",
  },
  {
    question: "Do you offer same-day service?",
    answer: "Yes, Rit Tranz offers same-day services across Bristol, subject to availability. Send a WhatsApp message as early as you can to secure a slot.",
  },
];
export const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MovingCompany"],
  name: "RIT TRANZ",
  url: "https://www.rittranz.co.uk/",
  logo: "https://www.rittranz.co.uk/assets/rit-tranz-logo.png",
  image: "https://www.rittranz.co.uk/assets/rit-tranz-logo.png",
  telephone: "+447584201972",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Bristol and all surrounding areas",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "20:00",
  },
  sameAs: [facebookUrl, instagramUrl],
};
