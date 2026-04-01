import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Blog",
  description: "Latest articles on debt recovery, AR management, and compliance operations.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero title="Blog" description="Editorial content coming soon. Start by publishing your first long-form insight here." />
      <section className="py-16">
        <Container>
          <div className="rounded-lg border border-dashed border-border bg-white p-8 text-sm text-muted-foreground">
            No posts yet. Add MDX or CMS integration in a future iteration.
          </div>
        </Container>
      </section>
    </>
  );
}
