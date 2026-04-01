import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Meridian's compliance-first approach gave us confidence in every interaction with our patients. Our net collection rate improved by 22% within the first quarter.",
    author: "Chief Revenue Officer",
    company: "Regional Health System, Southeast",
  },
  {
    quote:
      "After 18 months with Meridian, our municipal utility's delinquency rate dropped by 31%. Their team felt like an extension of ours.",
    author: "Finance Director",
    company: "Municipal Water Authority",
  },
  {
    quote:
      "The transparency and reporting alone set them apart. We always know what's happening with our receivables—no surprises.",
    author: "VP of Finance",
    company: "Commercial Lending Group",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Real results from organizations across industries.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card key={t.company} className="border-gray-200">
              <CardContent className="pt-6">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-700 text-sm mb-4 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {t.author}
                  </p>
                  <p className="text-xs text-gray-500">{t.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
