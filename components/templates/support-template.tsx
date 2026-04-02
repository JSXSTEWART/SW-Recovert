import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NotionBlockRenderer } from "@/lib/notion-renderer";
import type { NotionPage, NotionBlock } from "@/lib/notion-types";

type Props = {
  page: NotionPage;
  blocks: NotionBlock[];
};

export async function SupportTemplate({ page, blocks }: Props) {
  return (
    <>
      <section
        className="bg-[#1e3a5f] text-white py-16 lg:py-20"
        aria-labelledby="support-hero"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="accent" className="mb-4">
            {page.heroBadge || "Customer Support"}
          </Badge>
          <h1
            id="support-hero"
            className="text-4xl sm:text-5xl font-bold mb-5 max-w-2xl"
          >
            {page.heroTitle || "We're Here to Help"}
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl leading-relaxed">
            {page.heroDescription ||
              "Have questions about your account? Need to make a payment? Our support team is ready to assist you."}
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <Card className="border-2 hover:border-[#1e3a5f]/30 transition-colors">
              <CardHeader>
                <div
                  className="w-12 h-12 bg-[#1e3a5f] rounded-xl flex items-center justify-center mb-3"
                  aria-hidden="true"
                >
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Customer Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#64748b] mb-4">
                  Speak with a customer service representative about your
                  account, payment options, or general inquiries.
                </p>
                <a href="tel:+18668373065">
                  <Button variant="primary" size="md" className="w-full">
                    Call +1 (866) 837-3065
                  </Button>
                </a>
                <p className="text-xs text-[#64748b] mt-2 text-center">
                  Monday – Friday, 8am – 6pm ET
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#c8962c]/30 transition-colors">
              <CardHeader>
                <div
                  className="w-12 h-12 bg-[#c8962c] rounded-xl flex items-center justify-center mb-3"
                  aria-hidden="true"
                >
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Make a Payment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#64748b] mb-4">
                  Make a payment by phone. Have your account number ready for
                  faster service.
                </p>
                <a href="tel:+18665583328">
                  <Button variant="secondary" size="md" className="w-full">
                    Call +1 (866) 558-3328
                  </Button>
                </a>
                <p className="text-xs text-[#64748b] mt-2 text-center">
                  24/7 automated payment line
                </p>
              </CardContent>
            </Card>
          </div>

          {blocks.length > 0 && (
            <div className="mt-8">
              <NotionBlockRenderer blocks={blocks} />
            </div>
          )}

          <div className="mt-12 text-center">
            <p className="text-[#64748b] mb-4">
              Need to reach us another way?
            </p>
            <Link href="/contact">
              <Button variant="outline" size="md">
                Contact Us Online{" "}
                <ArrowRight
                  className="ml-2 h-4 w-4"
                  aria-hidden="true"
                />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
