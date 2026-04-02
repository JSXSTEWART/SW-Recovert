import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Globe, Share2 } from "lucide-react";

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/industries", label: "Industries" },
    { href: "/resources", label: "Resources" },
    { href: "/about/locations", label: "Locations" },
    { href: "/customer-support", label: "Customer Support" },
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
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center" aria-label="Southwest Recovery Services Home">
              <Image src="/swrs-logo.svg" alt="Southwest Recovery Services" width={230} height={42} />
            </Link>
            <p className="mt-4 text-sm text-blue-200 leading-relaxed">Financial business process outsourcing and receivables management services with a compliance-first approach.</p>
            <div className="mt-5 space-y-2 text-sm text-blue-200">
              <a href="tel:+18665514684" className="flex items-center gap-2 hover:text-white transition-colors" aria-label="Phone: 1-866-551-4684"><Phone className="h-4 w-4 shrink-0 text-[#c8962c]" aria-hidden="true" />Main: 1-866-551-4684</a>
              <a href="tel:+18668373065" className="flex items-center gap-2 hover:text-white transition-colors" aria-label="Customer Service: 1-866-837-3065"><Phone className="h-4 w-4 shrink-0 text-[#c8962c]" aria-hidden="true" />Support: 1-866-837-3065</a>
              <a href="mailto:info@swrecovery.com" className="flex items-center gap-2 hover:text-white transition-colors" aria-label="Email: info@swrecovery.com"><Mail className="h-4 w-4 shrink-0 text-[#c8962c]" aria-hidden="true" />info@swrecovery.com</a>
              <address className="flex items-start gap-2 not-italic"><MapPin className="h-4 w-4 shrink-0 mt-0.5 text-[#c8962c]" aria-hidden="true" /><span>16200 Addison Road, Suite 260<br />Addison, TX 75001</span></address>
            </div>
            <div className="mt-5 flex gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors" aria-label="LinkedIn"><Globe className="h-4 w-4" aria-hidden="true" /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors" aria-label="Twitter / X"><Share2 className="h-4 w-4" aria-hidden="true" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#c8962c] mb-4">Company</h3>
            <ul className="space-y-2">{footerLinks.company.map((link) => (<li key={link.href}><Link href={link.href} className="text-sm text-blue-200 hover:text-white transition-colors">{link.label}</Link></li>))}</ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#c8962c] mb-4">Services</h3>
            <ul className="space-y-2">{footerLinks.services.map((link) => (<li key={link.href}><Link href={link.href} className="text-sm text-blue-200 hover:text-white transition-colors">{link.label}</Link></li>))}</ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#c8962c] mb-4">Compliance & Legal</h3>
            <ul className="space-y-2">{footerLinks.legal.map((link) => (<li key={link.href}><Link href={link.href} className="text-sm text-blue-200 hover:text-white transition-colors">{link.label}</Link></li>))}</ul>
            <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="text-xs text-blue-300 leading-relaxed">Southwest Recovery Services is fully compliant with the FDCPA, HIPAA, GLBA, and all applicable federal and state regulations.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-300">
          <p>&copy; {new Date().getFullYear()} Southwest Recovery Services, Inc. All rights reserved.</p>
          <p>Licensed &amp; Bonded &bull; FDCPA Compliant &bull; BBB Accredited</p>
        </div>
      </div>
    </footer>
  );
}
