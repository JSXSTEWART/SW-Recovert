import Link from "next/link";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <Container className="grid gap-8 py-10 md:grid-cols-3">
        <div>
          <h3 className="text-base font-semibold">{siteConfig.name}</h3>
          <p className="mt-2 text-sm text-muted-foreground">Compliance-first receivables performance for complex organizations.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Company</h4>
          <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/resources">Resources</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Legal</h4>
          <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li>{siteConfig.email}</li>
          </ul>
        </div>
      </Container>
      <Container className="border-t border-border py-4 text-xs text-muted-foreground">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </Container>
    </footer>
  );
}
