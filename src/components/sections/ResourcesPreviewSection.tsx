import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { blogPosts } from "@/data/site";
import { ArrowRight, Clock } from "lucide-react";

export function ResourcesPreviewSection() {
  const preview = blogPosts.slice(0, 3);
  return (
    <section className="py-20 bg-white" id="resources">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Resources &amp; Insights
            </h2>
            <p className="text-lg text-gray-600">
              Compliance updates, industry trends, and best practices.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-blue-700 text-blue-700 hover:bg-blue-50 shrink-0"
          >
            <Link href="/resources">
              View All Resources <ArrowRight size={14} className="ml-1" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {preview.map((post) => (
            <Card key={post.slug} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
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
                <Link
                  href={`/resources/${post.slug}`}
                  className="text-sm text-blue-700 font-medium hover:underline flex items-center gap-1"
                >
                  Read article <ArrowRight size={13} />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
