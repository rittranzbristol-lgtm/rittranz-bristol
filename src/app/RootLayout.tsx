import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router";

// Wraps every page. Opening a different page starts at the top instead of keeping
// the previous page's scroll position. In-page links (#quote) are unaffected.
export default function RootLayout() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // "instant" overrides the site-wide smooth scrolling, so the new page doesn't visibly scroll up.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return <Outlet />;
}
