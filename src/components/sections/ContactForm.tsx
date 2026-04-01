"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const serviceOptions = [
  "Debt Recovery",
  "Revenue Cycle Management",
  "Accounts Receivable Management",
  "Consulting",
  "Business Process Outsourcing",
  "Other",
];

const industryOptions = [
  "Commercial & Retail",
  "Healthcare",
  "Government",
  "Utilities",
  "Insurance",
  "Property Management",
  "Automotive Finance",
  "Other",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle size={48} className="text-green-500 mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600 max-w-sm">
          Your message has been received. A member of our team will be in touch
          within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-gray-700"
          >
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Jane"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="lastName"
            className="text-sm font-medium text-gray-700"
          >
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Smith"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Work Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="jane@company.com"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="company" className="text-sm font-medium text-gray-700">
          Company <span className="text-red-500">*</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Acme Corp"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="(555) 000-0000"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="industry"
          className="text-sm font-medium text-gray-700"
        >
          Industry
        </label>
        <select
          id="industry"
          name="industry"
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="">Select your industry</option>
          {industryOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="service" className="text-sm font-medium text-gray-700">
          Service of Interest
        </label>
        <select
          id="service"
          name="service"
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="">Select a service</option>
          {serviceOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
          placeholder="Tell us about your receivables challenges and goals..."
        />
      </div>

      <p className="text-xs text-gray-500">
        By submitting this form, you agree to our{" "}
        <a href="/privacy-policy" className="underline hover:text-blue-700">
          Privacy Policy
        </a>
        . We will never sell your information.
      </p>

      <Button
        type="submit"
        size="lg"
        className="bg-blue-700 hover:bg-blue-800 w-full"
      >
        Submit Request
      </Button>
    </form>
  );
}
