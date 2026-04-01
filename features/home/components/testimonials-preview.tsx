import { SectionHeading } from "@/shared/components/ui/section-heading";
import { testimonials } from "@/features/testimonials/data/testimonials.data";

export function TestimonialsPreview() {
  return (
    <section className="section-space pt-0">
      <SectionHeading
        title="What Our Clients Say About Us"
        description="Businesses trust Node Solution for dependable execution, thoughtful design, and long-term partnership."
      />

      <div className="container-main mt-10 grid gap-6 lg:grid-cols-3">
        {testimonials.map((item) => (
          <div key={item.name} className="glass-card rounded-2xl p-6 shadow-card">
            <div className="mb-5 text-primary">★ ★ ★ ★ ★</div>

            <p className="text-sm leading-7 text-muted-foreground">
              {item.quote}
            </p>

            <div className="mt-6 border-t border-border pt-4">
              <h4 className="font-semibold text-white">{item.name}</h4>
              <p className="text-sm text-muted-foreground">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}