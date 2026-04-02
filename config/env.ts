type EnvConfig = {
  NEXT_PUBLIC_SITE_URL: string;
  NOTION_API_KEY: string;
  NOTION_PAGES_DB_ID: string;
  NOTION_BLOG_DB_ID: string;
  NOTION_SERVICES_DB_ID: string;
  NOTION_INDUSTRIES_DB_ID: string;
  NOTION_TESTIMONIALS_DB_ID: string;
  NOTION_TEAM_DB_ID: string;
  NOTION_LOCATIONS_DB_ID: string;
  NOTION_SETTINGS_DB_ID: string;
  REVALIDATE_SECRET: string;
};

export const env: EnvConfig = {
  NEXT_PUBLIC_SITE_URL:
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  NOTION_API_KEY: process.env.NOTION_API_KEY ?? "",
  NOTION_PAGES_DB_ID: process.env.NOTION_PAGES_DB_ID ?? "",
  NOTION_BLOG_DB_ID:
    process.env.NOTION_BLOG_DB_ID ?? "de337ab0-6907-43f7-aa20-189e7030a1dd",
  NOTION_SERVICES_DB_ID:
    process.env.NOTION_SERVICES_DB_ID ?? "0a72865d-bd81-4495-b9d9-fbdc4550fab1",
  NOTION_INDUSTRIES_DB_ID:
    process.env.NOTION_INDUSTRIES_DB_ID ?? "929c793c-dc70-4496-8ab8-161f0920960d",
  NOTION_TESTIMONIALS_DB_ID:
    process.env.NOTION_TESTIMONIALS_DB_ID ?? "f789c67a-1f98-4bfd-8ae8-edab8282ba0e",
  NOTION_TEAM_DB_ID:
    process.env.NOTION_TEAM_DB_ID ?? "cb617f3a-cc8b-45ef-896e-908b4fa0dd7c",
  NOTION_LOCATIONS_DB_ID:
    process.env.NOTION_LOCATIONS_DB_ID ?? "5d3d1955-bb33-4fda-a369-0c87a09551bf",
  NOTION_SETTINGS_DB_ID:
    process.env.NOTION_SETTINGS_DB_ID ?? "28dc5975-caaf-4201-9059-31dda417e9dd",
  REVALIDATE_SECRET: process.env.REVALIDATE_SECRET ?? "",
};
