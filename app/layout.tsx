import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://meridianrecovery.com"),
  title: {
    default: "Meridian Recovery Solutions | Professional Debt Recovery & AR Management",
    template: "%s | Meridian Recovery Solutions",
  },
  description:
    "Meridian Recovery Solutions provides professional debt recovery, revenue cycle management, accounts receivable management, and business process outsourcing services across commercial, healthcare, government, and more.",
  keywords: [
    "debt recovery",
    "accounts receivable management",
    "revenue cycle management",
    "collection agency",
    "business process outsourcing",
    "healthcare collections",
    "commercial debt collection",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://meridianrecovery.com",
    siteName: "Meridian Recovery Solutions",
    title: "Meridian Recovery Solutions | Professional Debt Recovery",
    description:
      "Trusted debt recovery and accounts receivable management for commercial, healthcare, government, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meridian Recovery Solutions",
    description: "Professional debt recovery and AR management services.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
import { Inter } from "next/font/google";

import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Debt Recovery & AR Management`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
