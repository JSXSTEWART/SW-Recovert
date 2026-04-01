import { cn } from "@/lib/utils";

export function InfoCard({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <article className={cn("rounded-lg border border-border bg-white p-6", className)}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
    </article>
  );
}
