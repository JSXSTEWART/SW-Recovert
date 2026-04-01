import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/data/site";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${siteConfig.name} for a free consultation on debt recovery, AR management, and revenue cycle services.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-blue-100">
              Ready to improve your recovery rates? Get a free, no-obligation
              consultation with our team.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <ContactForm />
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-3">
                  <Phone
                    size={18}
                    className="text-blue-700 mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Phone</p>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-gray-600 hover:text-blue-700"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-blue-700 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Email</p>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-gray-600 hover:text-blue-700"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    className="text-blue-700 mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Office</p>
                    <p className="text-gray-600">
                      {siteConfig.contact.address}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock
                    size={18}
                    className="text-blue-700 mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Business Hours
                    </p>
                    <p className="text-gray-600">
                      Monday – Friday: 8:00 AM – 6:00 PM EST
                    </p>
                    <p className="text-gray-600">
                      Saturday: 9:00 AM – 1:00 PM EST
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Compliance Commitment:</strong> All information
                  submitted through this form is protected under our Privacy
                  Policy and handled in strict accordance with applicable data
                  protection regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
