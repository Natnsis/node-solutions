import { Button } from "@/shared/components/ui/button";

const tags = [
  "Branding",
  "Digital Marketing",
  "Interior & Construction",
  "IT Solutions",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-card-border">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container-main relative flex min-h-[88vh] flex-col items-center justify-center text-center">
        <div className="max-w-4xl">
          <p className="mb-4 inline-flex rounded-full border border-card-border bg-card px-4 py-1 text-xs uppercase tracking-[0.2em] text-primary">
            Creative • Technical • Strategic
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Building Brands, Spaces, and
            <br className="hidden md:block" /> Digital Experiences
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm text-text-muted md:text-lg">
            Node Solution helps businesses grow through design, digital strategy,
            printing excellence, and reliable IT infrastructure.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-card-border bg-card px-4 py-2 text-sm text-white shadow-soft"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact">Start a Project</Button>
            <Button href="/services" variant="secondary">
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}