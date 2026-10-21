import type { ReactNode } from "react";
import CTA from "./CTA";
import Footer from "./Footer";
import Header from "./Header";

export default function Shell({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-[#f6f8fc] text-[#071a3d]"><Header /><main className="bg-[linear-gradient(#071a3d,#071a3d)] bg-[length:100%_110px] bg-no-repeat pt-[110px]">{children}</main><CTA /><Footer /></div>;
}
