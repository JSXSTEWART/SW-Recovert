import Link from "next/link";
import { Phone, Mail, MapPin, Globe, Share2 } from "lucide-react";

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/industries", label: "Industries" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services#debt-recovery", label: "Debt Recovery" },
    { href: "/services#revenue-cycle", label: "Revenue Cycle Management" },
    { href: "/services#accounts-receivable", label: "Accounts Receivable" },
    { href: "/services#consulting", label: "Consulting" },
    { href: "/services#bpo", label: "Business Process Outsourcing" },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/contact", label: "Terms of Service" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-bold text-xl"
              aria-label="Meridian Recovery Solutions Home"
            >
              <span className="text-[#c8962c] text-2xl font-black">M</span>
              <span>Meridian Recovery</span>
            </Link>
            <p className="mt-4 text-sm text-blue-200 leading-relaxed">
              Professional debt recovery and accounts receivable management
              solutions trusted by industries nationwide.
            </p>
            <div className="mt-5 space-y-2 text-sm text-blue-200">
              <a
                href="tel:+18005551234"
                className="flex items-center gap-2 hover:text-white transition-colors"
                aria-label="Phone: 1-800-555-1234"
              >
                <Phone className="h-4 w-4 shrink-0 text-[#c8962c]" aria-hidden="true" />
                1-800-555-1234
              </a>
              <a
                href="mailto:info@meridianrecovery.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
                aria-label="Email: info@meridianrecovery.com"
              >
                <Mail className="h-4 w-4 shrink-0 text-[#c8962c]" aria-hidden="true" />
                info@meridianrecovery.com
              </a>
              <address className="flex items-start gap-2 not-italic">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-[#c8962c]" aria-hidden="true" />
                <span>123 Financial Plaza, Suite 400<br />New York, NY 10001</span>
              </address>
            </div>
            <div className="mt-5 flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Globe className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Twitter / X"
              >
                <Share2 className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#c8962c] mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#c8962c] mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance & Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#c8962c] mb-4">
              Compliance & Legal
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="text-xs text-blue-300 leading-relaxed">
                Meridian Recovery Solutions is fully compliant with the FDCPA,
                HIPAA, GLBA, and all applicable federal and state regulations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-300">
          <p>
            &copy; {new Date().getFullYear()} Meridian Recovery Solutions, Inc.
            All rights reserved.
          </p>
          <p>Licensed &amp; Bonded &bull; FDCPA Compliant &bull; BBB Accredited</p>
        </div>
      </div>
    </footer>
  );
}
