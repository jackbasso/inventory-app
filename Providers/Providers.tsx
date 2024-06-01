import React, { ReactNode } from "react";
import { ThemeProvider } from "./ThemeProvider";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </ThemeProvider>
  );
}
