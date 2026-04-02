"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import type { NotionPage, NotionBlock } from "@/lib/notion-types";

type Props = {
  page: NotionPage;
  blocks: NotionBlock[];
};

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+1 (866) 551-4684", href: "tel:+18665514684" },
  { icon: Mail, label: "Email", value: "info@swrecovery.com", href: "mailto:info@swrecovery.com" },
  { icon: MapPin, label: "Address", value: "16200 Addison Road, Suite 260, Addison, TX 75001", href: null },
  { icon: Clock, label: "Hours", value: "Monday–Friday 8am–6pm ET | Saturday 9am–1pm ET", href: null },
];

const serviceOptions = [
  "Debt Recovery",
  "Revenue Cycle Management",
  "Accounts Receivable Management",
  "Consulting",
  "Business Process Outsourcing",
  "Other",
];

const industryOptions = [
  "Commercial",
  "Healthcare",
  "Government",
  "Utilities",
  "Insurance",
  "Property Management",
  "Automotive Finance",
  "Other",
];

export function ContactTemplate({ page }: Props) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section
        className="bg-[#1e3a5f] text-white py-16 lg:py-20"
        aria-labelledby="contact-hero"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="accent" className="mb-4">
            {page.heroBadge || "Contact Us"}
          </Badge>
          <h1
            id="contact-hero"
            className="text-4xl sm:text-5xl font-bold mb-5 max-w-2xl"
          >
            {page.heroTitle || "Let's Start a Conversation"}
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl leading-relaxed">
            {page.heroDescription ||
              "Tell us about your receivables challenges and we'll connect you with a specialist who can help."}
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#0f1c2e]">
                Get in Touch
              </h2>
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex gap-4">
                    <div
                      className="w-10 h-10 bg-[#1e3a5f]/10 rounded-lg flex items-center justify-center shrink-0"
                      aria-hidden="true"
                    >
                      <Icon className="h-5 w-5 text-[#1e3a5f]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#64748b]">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-[#0f1c2e] font-medium hover:text-[#1e3a5f]"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[#0f1c2e]">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-[#f4f6f9] rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-[#0f1c2e] mb-3">
                    Thank You!
                  </h3>
                  <p className="text-[#64748b]">
                    We&apos;ve received your inquiry and will be in touch within
                    one business day.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-[#f4f6f9] rounded-2xl p-8 space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Company *</Label>
                      <Input
                        id="company"
                        name="company"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Business Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="jobTitle">Job Title</Label>
                      <Input
                        id="jobTitle"
                        name="jobTitle"
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="service">Service of Interest *</Label>
                      <select
                        id="service"
                        name="service"
                        required
                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="industry">Your Industry *</Label>
                      <select
                        id="industry"
                        name="industry"
                        required
                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="">Select your industry</option>
                        {industryOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1"
                      placeholder="Tell us about your receivables challenges..."
                    />
                  </div>
                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      required
                      className="mt-1"
                    />
                    <Label htmlFor="consent" className="text-sm text-[#64748b]">
                      I consent to Southwest Recovery Services contacting me
                      about my inquiry. View our{" "}
                      <Link
                        href="/privacy-policy"
                        className="text-[#1e3a5f] underline"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </Label>
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Submit Inquiry{" "}
                    <ArrowRight
                      className="ml-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
