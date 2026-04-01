export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-lg text-muted-foreground">{description}</p> : null}
    </div>
  );
}
