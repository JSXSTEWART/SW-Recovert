import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  Services: [
    { href: "/services#debt-recovery", label: "Debt Recovery" },
    { href: "/services#revenue-cycle-management", label: "Revenue Cycle" },
    { href: "/services#accounts-receivable-management", label: "AR Management" },
    { href: "/services#consulting", label: "Consulting" },
    { href: "/services#business-process-outsourcing", label: "BPO" },
  ],
  Industries: [
    { href: "/industries#commercial", label: "Commercial" },
    { href: "/industries#healthcare", label: "Healthcare" },
    { href: "/industries#government", label: "Government" },
    { href: "/industries#utilities", label: "Utilities" },
    { href: "/industries#insurance", label: "Insurance" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy-policy", label: "Privacy Policy" },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-xl font-bold text-white">
              {siteConfig.name}
            </Link>
            <p className="mt-3 text-sm text-gray-400 max-w-xs">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone size={14} /> {siteConfig.contact.phone}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail size={14} /> {siteConfig.contact.email}
              </a>
              <span className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0" />{" "}
                {siteConfig.contact.address}
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {group}
              </h3>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Licensed &amp; Bonded | FDCPA Compliant | HIPAA Compliant</p>
        </div>
      </div>
    </footer>
  );
}
