import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router";

// Wraps every page. Opening a different page starts at the top instead of keeping
// the previous page's scroll position. Links to a section of another page (/contact#quote)
// then scroll down to it; in-page links (#quote) are handled by the browser.
export default function RootLayout() {
  const { pathname, hash, key } = useLocation();

  useLayoutEffect(() => {
    // "instant" overrides the site-wide smooth scrolling, so the new page doesn't visibly scroll up.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  // `key` changes on every navigation, so the Contact page's own quote buttons work too.
  useLayoutEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [pathname, hash, key]);

  return <Outlet />;
}
