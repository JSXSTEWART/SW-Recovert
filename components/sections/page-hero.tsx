export function PageHero({ title, description }: { title: string; description: string }) {
  return (
    <section className="border-b border-border bg-muted/30 py-14">
      <div className="container">
        <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{description}</p>
      </div>
    </section>
  );
}
