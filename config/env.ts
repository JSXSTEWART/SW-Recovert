type EnvConfig = {
  NEXT_PUBLIC_SITE_URL: string;
};

export const env: EnvConfig = {
  NEXT_PUBLIC_SITE_URL:
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};
