import type { ComponentType } from "react";
import type { NotionPage, NotionBlock, PageTemplate } from "@/lib/notion-types";

import { LandingTemplate } from "./landing-template";
import { ServiceTemplate } from "./service-template";
import { IndustryTemplate } from "./industry-template";
import { BlogTemplate } from "./blog-template";
import { LegalTemplate } from "./legal-template";
import { SupportTemplate } from "./support-template";
import { CareersTemplate } from "./careers-template";
import { ContactTemplate } from "./contact-template";

export type TemplateProps = {
  page: NotionPage;
  blocks: NotionBlock[];
};

export const templates: Record<
  PageTemplate,
  ComponentType<TemplateProps>
> = {
  landing: LandingTemplate as unknown as ComponentType<TemplateProps>,
  service: ServiceTemplate as unknown as ComponentType<TemplateProps>,
  industry: IndustryTemplate as unknown as ComponentType<TemplateProps>,
  blog: BlogTemplate as unknown as ComponentType<TemplateProps>,
  legal: LegalTemplate as unknown as ComponentType<TemplateProps>,
  support: SupportTemplate as unknown as ComponentType<TemplateProps>,
  careers: CareersTemplate as unknown as ComponentType<TemplateProps>,
  contact: ContactTemplate as unknown as ComponentType<TemplateProps>,
};
