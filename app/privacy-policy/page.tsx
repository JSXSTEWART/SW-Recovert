import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Southwest Recovery Services Privacy Policy — how we collect, use, and protect your personal information.",
};

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: `We collect information you provide directly to us, such as when you fill out a contact form, request a consultation, or subscribe to our newsletter. This may include:

• Name, job title, and company name
• Business email address and phone number
• Information about your receivables portfolio or service needs
• Communications you send us

We also automatically collect certain technical information when you visit our website, including IP address, browser type, referring URLs, and pages visited. This is collected through cookies and similar technologies.`,
  },
  {
    id: "how-we-use-information",
    title: "2. How We Use Your Information",
    content: `We use the information we collect to:

• Respond to your inquiries and provide requested services
• Send you relevant communications, including compliance updates and industry resources (where you have opted in)
• Improve our website and services
• Comply with legal obligations
• Detect and prevent fraud

We will not sell your personal information to third parties. We may share information with service providers who assist us in operating our website or conducting our business, subject to confidentiality agreements.`,
  },
  {
    id: "data-security",
    title: "3. Data Security",
    content: `Southwest Recovery Services maintains administrative, technical, and physical safeguards designed to protect the information we collect. We are SOC 2 Type II certified and maintain security practices consistent with applicable legal requirements, including those under GLBA and HIPAA where applicable.

Despite our safeguards, no data transmission or storage system can be guaranteed 100% secure. If you believe your information has been compromised, please contact us immediately.`,
  },
  {
    id: "cookies",
    title: "4. Cookies & Tracking Technologies",
    content: `We use cookies and similar tracking technologies to improve your browsing experience, analyze site traffic, and serve relevant content. You can control cookie settings through your browser preferences. Disabling certain cookies may affect website functionality.

We use Google Analytics to understand how visitors interact with our website. Google's privacy policy is available at https://policies.google.com/privacy.`,
  },
  {
    id: "your-rights",
    title: "5. Your Rights & Choices",
    content: `Depending on your location, you may have certain rights regarding your personal information, including:

• The right to access or correct your personal information
• The right to request deletion of your personal information
• The right to opt out of marketing communications
• The right to data portability

To exercise any of these rights, please contact us at privacy@swrecovery.com. California residents may have additional rights under the California Consumer Privacy Act (CCPA).`,
  },
  {
    id: "third-party-links",
    title: "6. Third-Party Links",
    content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites. We encourage you to review the privacy policies of any third-party sites you visit.`,
  },
  {
    id: "compliance",
    title: "7. Regulatory Compliance",
    content: `As a debt recovery company, Southwest Recovery Services operates under numerous regulatory frameworks including:

• Fair Debt Collection Practices Act (FDCPA)
• Health Insurance Portability and Accountability Act (HIPAA)
• Gramm-Leach-Bliley Act (GLBA)
• Consumer Financial Protection Bureau (CFPB) regulations
• Applicable state collection laws

Our privacy practices are designed to meet or exceed the requirements of these regulations.`,
  },
  {
    id: "changes",
    title: "8. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the "Last Updated" date at the top of this page. We encourage you to review this policy periodically.`,
  },
  {
    id: "contact",
    title: "9. Contact Us",
    content: `If you have questions or concerns about this Privacy Policy or our data practices, please contact us:

Southwest Recovery Services
Attn: Privacy Officer
16200 Addison Road, Suite 260
Addison, TX 75001

Email: privacy@swrecovery.com
Phone: 1-866-551-4684`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="bg-[#1e3a5f] text-white py-16"
        aria-labelledby="privacy-hero-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="accent" className="mb-4">
            Legal
          </Badge>
          <h1
            id="privacy-hero-heading"
            className="text-4xl font-bold mb-3"
          >
            Privacy Policy
          </h1>
          <p className="text-blue-200">
            Last Updated: January 1, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-[#64748b] leading-relaxed mb-10">
              Southwest Recovery Services, Inc. (&ldquo;Southwest Recovery Services,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is
              committed to protecting the privacy and security of the information
              you share with us. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website
              or interact with our services.
            </p>

            {/* Table of Contents */}
            <nav
              className="mb-12 p-6 bg-[#f4f6f9] rounded-xl"
              aria-label="Privacy policy table of contents"
            >
              <h2 className="text-base font-semibold text-[#0f1c2e] mb-3">
                Contents
              </h2>
              <ol className="space-y-1">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-sm text-[#1e3a5f] hover:text-[#c8962c] underline underline-offset-2 transition-colors"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* Sections */}
            <div className="space-y-12">
              {sections.map((section) => (
                <div key={section.id} id={section.id}>
                  <h2 className="text-xl font-bold text-[#0f1c2e] mb-4">
                    {section.title}
                  </h2>
                  <p className="text-[#64748b] leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-[#e2e8f0]">
              <p className="text-sm text-[#94a3b8]">
                Have questions about this policy?{" "}
                <Link
                  href="/contact"
                  className="text-[#1e3a5f] underline underline-offset-2"
                >
                  Contact us
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
