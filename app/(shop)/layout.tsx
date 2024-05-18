import Footer from "@/components/global/Footer";
import ShopHeader from "@/components/global/ShopHeader";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <ShopHeader />
      {children}
      <Footer />
    </div>
  );
}
