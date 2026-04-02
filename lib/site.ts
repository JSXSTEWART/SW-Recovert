import { getSiteSettings } from "@/lib/notion";
import type { SiteSettings } from "@/lib/notion-types";

/** Static fallback — used when Notion is unavailable */
export const siteConfig = {
  name: "Southwest Recovery Services",
  description:
    "Southwest Recovery Services is a nationally recognized leader in financial business process outsourcing and receivables management.",
  url: "https://www.swrecovery.com",
  email: "info@swrecovery.com",
  privacyEmail: "privacy@swrecovery.com",
  phone: "+1 (866) 551-4684",
  customerServicePhone: "+1 (866) 837-3065",
  paymentPhone: "+1 (866) 558-3328",
  headquarters: "16200 Addison Road, Suite 260, Addison, TX 75001",
};

/** Fetch site settings from Notion with fallback */
export async function getSiteConfig(): Promise<SiteSettings> {
  return getSiteSettings();
}
