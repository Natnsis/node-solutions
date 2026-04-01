import { Button } from "@/shared/components/ui/button";
import { Orbit } from "lucide-react";

export function ContactCta() {
  return (
    <section className="section-space pt-0">
      <div className="container-main">
        <div className="section-banner-bg rounded-3xl border border-card-border px-6 py-14 text-center shadow-glow md:px-10">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-card-border bg-card text-primary">
            <Orbit size={28} />
          </div>

          <h2 className="mt-6 text-2xl font-semibold md:text-3xl">
            Thank you for your interest in Node Solution.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-text-muted md:text-base">
            Whether you need branding, technical support, digital marketing, or
            space transformation, our team is ready to help you move forward.
          </p>

          <div className="mt-8">
            <Button href="/contact">Book a Consultation</Button>
          </div>
        </div>
      </div>
    </section>
  );
}