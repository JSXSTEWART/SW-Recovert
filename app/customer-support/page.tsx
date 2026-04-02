import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Customer Support",
  description:
    "Connect with Southwest Recovery Services customer support, make a payment, or submit a dispute request.",
};

export default function CustomerSupportPage() {
  return (
    <>
      <section className="bg-[#1e3a5f] text-white py-16 lg:py-20" aria-labelledby="support-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="accent" className="mb-4">Customer Support</Badge>
          <h1 id="support-heading" className="text-4xl sm:text-5xl font-bold mb-5 max-w-2xl">Need Help With Your Account?</h1>
          <p className="text-blue-200 text-lg max-w-2xl leading-relaxed">Our customer service team can assist with account questions, payment options, dispute handling, and communication preferences.</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[#e2e8f0] p-6">
            <h2 className="text-xl font-semibold text-[#0f1c2e] mb-2">Call Customer Service</h2>
            <p className="text-[#64748b] mb-4">Speak with an account representative Monday-Friday.</p>
            <a href="tel:+18668373065" className="text-[#1e3a5f] font-semibold">1-866-837-3065</a>
          </div>
          <div className="rounded-2xl border border-[#e2e8f0] p-6">
            <h2 className="text-xl font-semibold text-[#0f1c2e] mb-2">Make a Payment by Phone</h2>
            <p className="text-[#64748b] mb-4">Automated and agent-assisted payment options are available.</p>
            <a href="tel:+18665583328" className="text-[#1e3a5f] font-semibold">1-866-558-3328</a>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="rounded-2xl bg-[#f4f6f9] p-6 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <div>
              <h3 className="text-lg font-semibold text-[#0f1c2e]">Prefer to send a message?</h3>
              <p className="text-[#64748b]">Use our secure contact form and include your reference number (if available).</p>
            </div>
            <Link href="/contact"><Button>Contact Support</Button></Link>
          </div>
        </div>
      </section>
    </>
  );
}
