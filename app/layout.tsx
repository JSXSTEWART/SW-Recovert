import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.swrecovery.com"),
  title: {
    default: "Southwest Recovery Services | Professional Debt Recovery & AR Management",
    template: "%s | Southwest Recovery Services",
  },
  description:
    "Southwest Recovery Services provides professional debt recovery, revenue cycle management, accounts receivable management, and business process outsourcing services across commercial, healthcare, government, and more.",
  keywords: [
    "debt recovery",
    "accounts receivable management",
    "revenue cycle management",
    "collection agency",
    "business process outsourcing",
    "healthcare collections",
    "commercial debt collection",
    "southwest recovery services",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.swrecovery.com",
    siteName: "Southwest Recovery Services",
    title: "Southwest Recovery Services | Professional Debt Recovery",
    description:
      "Trusted debt recovery and accounts receivable management for commercial, healthcare, government, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Southwest Recovery Services",
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
        <Footer />
      </body>
    </html>
  );
}
