import React from "react";
import "@/styles/globals.css";
import { ViewTransitions } from "next-view-transitions";
import { Header } from "@/components/layouts";

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
        <body>
          <Header />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
