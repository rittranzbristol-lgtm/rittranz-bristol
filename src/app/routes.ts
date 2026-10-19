import { createBrowserRouter } from "react-router";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import PricingPage from "../pages/PricingPage";
import PrivacyPage from "../pages/PrivacyPage";
import ServicesPage from "../pages/ServicesPage";
import TermsPage from "../pages/TermsPage";

export const router = createBrowserRouter([
  { path: "/", Component: HomePage },
  { path: "/services", Component: ServicesPage },
  { path: "/pricing", Component: PricingPage },
  { path: "/about", Component: AboutPage },
  { path: "/contact", Component: ContactPage },
  { path: "/privacy", Component: PrivacyPage },
  { path: "/terms", Component: TermsPage },
]);
