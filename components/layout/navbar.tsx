"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#e2e8f0] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-[#1e3a5f] font-bold text-xl tracking-tight"
            aria-label="Meridian Recovery Solutions Home"
          >
            <span className="text-[#c8962c] text-2xl font-black">M</span>
            <span>Meridian Recovery</span>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-[#475569] hover:text-[#1e3a5f] hover:bg-[#f4f6f9] rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+18005551234"
              className="flex items-center gap-1.5 text-sm font-medium text-[#1e3a5f] hover:text-[#c8962c] transition-colors"
              aria-label="Call us at 1-800-555-1234"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              1-800-555-1234
            </a>
            <Button
              variant="primary"
              size="sm"
              onClick={() => (window.location.href = "/contact")}
            >
              Get a Free Consultation
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-[#1e3a5f] hover:bg-[#f4f6f9] rounded-md"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={cn(
          "md:hidden border-t border-[#e2e8f0] bg-white overflow-hidden transition-all duration-300",
          mobileOpen ? "max-h-screen" : "max-h-0"
        )}
        aria-hidden={!mobileOpen}
      >
        <nav
          className="px-4 py-3 space-y-1"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-3 py-2 text-base font-medium text-[#475569] hover:text-[#1e3a5f] hover:bg-[#f4f6f9] rounded-md transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 pb-1 border-t border-[#e2e8f0] mt-2 flex flex-col gap-2">
            <a
              href="tel:+18005551234"
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-[#1e3a5f]"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              1-800-555-1234
            </a>
            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              <Button variant="primary" size="sm" className="w-full">
                Get a Free Consultation
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
