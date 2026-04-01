"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const services = [
  "Debt Recovery",
  "Revenue Cycle Management",
  "Accounts Receivable Management",
  "Consulting",
  "Business Process Outsourcing",
  "Other",
];

const industries = [
  "Commercial",
  "Healthcare",
  "Government",
  "Utilities",
  "Insurance",
  "Property Management",
  "Automotive Finance",
  "Other",
];

export function ContactForm() {
  return (
    <Card>
      <CardContent className="p-6 sm:p-8">
        <form
          aria-label="Contact form"
          noValidate
          onSubmit={(e) => e.preventDefault()}
          className="space-y-5"
        >
          {/* Name Row */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="first-name">First Name *</Label>
              <Input
                id="first-name"
                name="firstName"
                type="text"
                placeholder="Jane"
                required
                aria-required="true"
                autoComplete="given-name"
              />
            </div>
            <div>
              <Label htmlFor="last-name">Last Name *</Label>
              <Input
                id="last-name"
                name="lastName"
                type="text"
                placeholder="Smith"
                required
                aria-required="true"
                autoComplete="family-name"
              />
            </div>
          </div>

          {/* Company & Title */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="company">Company *</Label>
              <Input
                id="company"
                name="company"
                type="text"
                placeholder="Acme Health System"
                required
                aria-required="true"
                autoComplete="organization"
              />
            </div>
            <div>
              <Label htmlFor="title">Job Title</Label>
              <Input
                id="title"
                name="title"
                type="text"
                placeholder="CFO"
                autoComplete="organization-title"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Business Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="jane@company.com"
                required
                aria-required="true"
                autoComplete="email"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(555) 000-0000"
                autoComplete="tel"
              />
            </div>
          </div>

          {/* Service Interest */}
          <div>
            <Label htmlFor="service">Service of Interest *</Label>
            <select
              id="service"
              name="service"
              required
              aria-required="true"
              className="flex h-11 w-full rounded-lg border border-[#e2e8f0] bg-white px-4 py-2 text-base text-[#0f1c2e] focus:border-[#1e3a5f] focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/20"
            >
              <option value="">Select a service…</option>
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Industry */}
          <div>
            <Label htmlFor="industry">Your Industry *</Label>
            <select
              id="industry"
              name="industry"
              required
              aria-required="true"
              className="flex h-11 w-full rounded-lg border border-[#e2e8f0] bg-white px-4 py-2 text-base text-[#0f1c2e] focus:border-[#1e3a5f] focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/20"
            >
              <option value="">Select your industry…</option>
              {industries.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>

          {/* Portfolio Size */}
          <div>
            <Label htmlFor="portfolio">
              Estimated Portfolio / Annual AR Value
            </Label>
            <select
              id="portfolio"
              name="portfolio"
              className="flex h-11 w-full rounded-lg border border-[#e2e8f0] bg-white px-4 py-2 text-base text-[#0f1c2e] focus:border-[#1e3a5f] focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/20"
            >
              <option value="">Select a range…</option>
              <option>Under $100K</option>
              <option>$100K – $500K</option>
              <option>$500K – $1M</option>
              <option>$1M – $5M</option>
              <option>$5M – $25M</option>
              <option>Over $25M</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your current receivables challenges…"
              rows={4}
            />
          </div>

          {/* Consent */}
          <div className="flex items-start gap-3">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              required
              aria-required="true"
              className="mt-1 h-4 w-4 rounded border-[#e2e8f0] text-[#1e3a5f] focus:ring-[#1e3a5f]"
            />
            <label
              htmlFor="consent"
              className="text-sm text-[#64748b] leading-relaxed"
            >
              I agree to be contacted by Meridian Recovery Solutions regarding
              my inquiry. I have read and accept the{" "}
              <Link
                href="/privacy-policy"
                className="text-[#1e3a5f] underline underline-offset-2"
              >
                Privacy Policy
              </Link>
              .
            </label>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
          >
            Submit Request
          </Button>

          <p className="text-xs text-center text-[#94a3b8]">
            We typically respond within 1 business day. All information is kept
            strictly confidential.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
