"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig } from "@/data/site";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="text-blue-700">{siteConfig.name}</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-700"
          >
            <Phone size={14} />
            {siteConfig.contact.phone}
          </a>
          <Button asChild size="sm" className="bg-blue-700 hover:bg-blue-800">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu size={20} />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="flex flex-col gap-6 mt-8">
              <Link
                href="/"
                className="font-bold text-lg text-blue-700"
                onClick={() => setOpen(false)}
              >
                {siteConfig.name}
              </Link>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base font-medium text-gray-700 hover:text-blue-700"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Button asChild className="bg-blue-700 hover:bg-blue-800 w-full">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Get Started
                </Link>
              </Button>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="text-sm text-gray-600"
              >
                {siteConfig.contact.phone}
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
