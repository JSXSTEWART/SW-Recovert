import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { CtaSection } from "@/components/sections/CtaSection";
import { blogPosts, siteConfig } from "@/data/site";
import { Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources & Blog",
  description: `Compliance guides, industry insights, and best practices from the ${siteConfig.name} team.`,
};

const categories = ["All", "Compliance", "Healthcare", "Technology", "Government"];

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Resources &amp; Insights
            </h1>
            <p className="text-lg text-blue-100">
              Compliance updates, industry trends, and proven best practices
              from our team of experts.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-1.5 rounded-full text-sm font-medium border border-gray-300 hover:border-blue-700 hover:text-blue-700 transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card
                key={post.slug}
                className="hover:shadow-md transition-shadow flex flex-col"
              >
                <CardHeader className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-base leading-snug">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <Link
                      href={`/resources/${post.slug}`}
                      className="text-sm text-blue-700 font-medium hover:underline flex items-center gap-1"
                    >
                      Read <ArrowRight size={13} />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
