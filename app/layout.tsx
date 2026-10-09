import React from "react";
import type { Metadata } from "next";
import "@/styles/globals.css";
import { ViewTransitions } from "next-view-transitions";
import { Header, Footer } from "@/components/layouts";
import { LenisProvider } from "@/context/LenisContext";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Websites for restaurants`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    title: `${SITE_NAME} — Websites for restaurants`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Websites for restaurants`,
    description: SITE_DESCRIPTION,
  },
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
