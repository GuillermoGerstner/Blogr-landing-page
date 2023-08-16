import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogr",
  description: "Frontend Mentor | Blogr",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
