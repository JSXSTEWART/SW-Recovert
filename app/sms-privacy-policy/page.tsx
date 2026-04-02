import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "SMS Privacy Policy",
  description: "How Southwest Recovery Services handles data for SMS messaging programs.",
};

export default function SmsPrivacyPolicyPage() {
  return (
    <>
      <PageHero title="SMS Privacy Policy" description="Data handling disclosure for SMS communications." />
      <section className="py-12">
        <Container className="prose prose-slate max-w-3xl">
          <p>
            We use SMS messages for account notifications, service updates, and support interactions when consent has been provided.
            Message frequency may vary and standard carrier rates may apply.
          </p>
        </Container>
      </section>
    </>
  );
}
