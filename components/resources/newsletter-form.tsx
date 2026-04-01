"use client";

import { Button } from "@/components/ui/button";

export function NewsletterForm() {
  return (
    <form
      className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
      aria-label="Newsletter subscription form"
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        placeholder="Enter your email"
        className="flex-1 px-4 py-3 rounded-lg text-[#0f1c2e] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#c8962c]"
        required
        aria-required="true"
      />
      <Button type="submit" variant="secondary" size="md">
        Subscribe
      </Button>
    </form>
  );
}
