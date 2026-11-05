export const navItems = [["Home", "/"], ["Services", "/services"], ["Pricing", "/pricing"], ["About", "/about"], ["Contact", "/contact"]];
export const facebookUrl = "https://www.facebook.com/rittranz";
export const instagramUrl = "https://www.instagram.com/rittranz/";
// The quote form on the Contact page, for pages that have no form of their own
export const quoteFormPath = "/contact#quote";
// Pre-filled first message for each WhatsApp link, chosen to fit where the link sits
export const whatsAppMessages = {
  general: "Hi RIT TRANZ, I found you on your website and I'd like to ask about a van job.",
  question: "Hi RIT TRANZ, I have a question about your van service.",
  sameDay: "Hi RIT TRANZ, do you have a van available today?",
  pricing: "Hi RIT TRANZ, I'd like to ask about pricing for a job.",
  jobDetails: "Hi RIT TRANZ, I'd like a free quote. Here are my postcodes, items and photos:",
};
// Google Business Profile place ID for RIT TRANZ
const googlePlaceId = "ChIJ8Rdf3-gXPy4RkYnqxEVc1EQ";
// Opens the business (with its reviews) in Google Maps; uses the Maps app on phones
export const googleBusinessUrl = `https://www.google.com/maps/search/?api=1&query=RIT%20TRANZ&query_place_id=${googlePlaceId}`;
// Opens the "write a review" form (share this with customers after a job)
export const googleWriteReviewUrl = "https://g.page/r/CZGJ6sRFXNREEAE/review";
