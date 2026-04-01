import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Meridian Recovery Solutions for a free consultation on debt recovery, AR management, or revenue cycle services. Reach our team by phone, email, or the form below.",
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "1-800-555-1234",
    href: "tel:+18005551234",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@meridianrecovery.com",
    href: "mailto:info@meridianrecovery.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "123 Financial Plaza, Suite 400\nNew York, NY 10001",
    href: "https://maps.google.com",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Monday–Friday: 8am–6pm ET\nSaturday: 9am–1pm ET",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="bg-[#1e3a5f] text-white py-16 lg:py-20"
        aria-labelledby="contact-hero-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="accent" className="mb-4">
            Contact Us
          </Badge>
          <h1
            id="contact-hero-heading"
            className="text-4xl sm:text-5xl font-bold mb-5 max-w-2xl"
          >
            Let&apos;s Talk About Your Recovery Goals
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl leading-relaxed">
            Whether you&apos;re ready to get started or just exploring your options,
            our specialists are ready to help. Free consultations, no obligation.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-white py-16 lg:py-24" aria-labelledby="contact-section-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2
                id="contact-section-heading"
                className="text-xl font-bold text-[#0f1c2e] mb-6"
              >
                Get in Touch
              </h2>
              <div className="space-y-5">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 bg-[#1e3a5f]/10 rounded-lg flex items-center justify-center shrink-0"
                        aria-hidden="true"
                      >
                        <Icon className="h-5 w-5 text-[#1e3a5f]" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#94a3b8] mb-0.5">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm text-[#374151] hover:text-[#1e3a5f] transition-colors whitespace-pre-line"
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-[#374151] whitespace-pre-line">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 p-5 bg-[#f4f6f9] rounded-xl">
                <h3 className="font-semibold text-[#0f1c2e] mb-2">
                  Free Consultation
                </h3>
                <p className="text-sm text-[#64748b] leading-relaxed">
                  Our initial consultation is always free. We&apos;ll review your
                  portfolio and provide a no-obligation assessment with
                  recommended solutions.
                </p>
              </div>
            </div>

            {/* Contact Form (Client Component) */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-[#0f1c2e] mb-6">
                Request a Free Consultation
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
=======
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/sections/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Connect with Apex Receivables Group for a consultation.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact" description="Tell us about your portfolio, goals, and constraints. Our team will respond within one business day." />
      <section className="py-16">
        <Container className="grid gap-8 lg:grid-cols-2">
          <ContactForm />
          <aside className="rounded-lg border border-border bg-muted/30 p-6">
            <h2 className="text-lg font-semibold">Talk with our team</h2>
            <p className="mt-2 text-sm text-muted-foreground">We support enterprise and mid-market clients across the United States.</p>
            <dl className="mt-6 space-y-3 text-sm">
              <div><dt className="font-medium">Email</dt><dd className="text-muted-foreground">{siteConfig.email}</dd></div>
              <div><dt className="font-medium">Phone</dt><dd className="text-muted-foreground">{siteConfig.phone}</dd></div>
            </dl>
          </aside>
        </Container>
      </section>
    </>
  );
}