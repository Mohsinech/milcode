import React from "react";
import "@/styles/globals.css";
import { ViewTransitions } from "next-view-transitions";
import { Header, Footer } from "@/components/layouts";
import { LenisProvider } from "@/context/LenisContext";

export const metadata = {
  title: "milcode studio - Create interfaces",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <link rel="icon" type="icon" href="/favicon.ico" />
        <body>
          <LenisProvider>
            <Header />
            {children}
            <Footer />
          </LenisProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
