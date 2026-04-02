import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "SMS Terms and Conditions Policy",
  description: "Terms that apply to SMS opt-in and opt-out messaging with Southwest Recovery Services.",
};

export default function SmsTermsPage() {
  return (
    <>
      <PageHero title="SMS Terms and Conditions" description="Program terms for SMS subscribers." />
      <section className="py-12">
        <Container className="prose prose-slate max-w-3xl">
          <p>
            By opting in, you agree to receive recurring SMS communications from Southwest Recovery Services.
            Reply STOP to opt out, or HELP for assistance.
          </p>
        </Container>
      </section>
    </>
  );
}
