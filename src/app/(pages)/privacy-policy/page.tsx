import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-10">
          Last updated: January 1, 2024
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              1. Introduction
            </h2>
            <p className="text-gray-600">
              {siteConfig.name} (&ldquo;Meridian,&rdquo; &ldquo;we,&rdquo;
              &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to
              protecting your privacy. This Privacy Policy describes how we
              collect, use, disclose, and safeguard information when you visit
              our website or engage with our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              2. Information We Collect
            </h2>
            <p className="text-gray-600 mb-2">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>
                <strong>Contact Information:</strong> Name, email address,
                phone number, and company name when you submit a contact form.
              </li>
              <li>
                <strong>Usage Data:</strong> IP address, browser type, pages
                visited, and time spent on our site.
              </li>
              <li>
                <strong>Communications:</strong> Records of correspondence
                when you contact us.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-600 mb-2">
              We use collected information to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>Respond to inquiries and provide requested services</li>
              <li>
                Send marketing communications (with your consent)
              </li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              4. Information Sharing
            </h2>
            <p className="text-gray-600">
              We do not sell, trade, or rent your personal information to third
              parties. We may share information with service providers who
              assist in our operations, subject to confidentiality agreements.
              We may disclose information when required by law or to protect
              our rights.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              5. Data Security
            </h2>
            <p className="text-gray-600">
              We implement industry-standard security measures including SSL
              encryption, access controls, and regular security assessments.
              However, no method of transmission over the internet is 100%
              secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              6. Cookies
            </h2>
            <p className="text-gray-600">
              We use cookies and similar tracking technologies to enhance your
              experience. You can control cookie settings through your browser
              preferences.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              7. Your Rights
            </h2>
            <p className="text-gray-600 mb-2">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>
                Access the personal information we hold about you
              </li>
              <li>
                Request correction or deletion of your information
              </li>
              <li>Opt out of marketing communications</li>
              <li>
                Lodge a complaint with your local data protection authority
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              8. HIPAA Notice
            </h2>
            <p className="text-gray-600">
              To the extent our services involve protected health information
              (&ldquo;PHI&rdquo;), we operate as a Business Associate under
              HIPAA and maintain a Business Associate Agreement (BAA) with all
              applicable covered entities.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              9. Contact Us
            </h2>
            <p className="text-gray-600 mb-4">
              For privacy-related inquiries or to exercise your rights, contact
              our Privacy Officer at:
            </p>
            <address className="not-italic text-gray-600">
              {siteConfig.name}
              <br />
              Attn: Privacy Officer
              <br />
              {siteConfig.contact.address}
              <br />
              Email:{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-blue-700 hover:underline"
              >
                {siteConfig.contact.email}
              </a>
              <br />
              Phone: {siteConfig.contact.phone}
            </address>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              10. Changes to This Policy
            </h2>
            <p className="text-gray-600">
              We may update this Privacy Policy periodically. We will notify
              you of significant changes by posting the updated policy on our
              website with a revised &ldquo;Last updated&rdquo; date.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
