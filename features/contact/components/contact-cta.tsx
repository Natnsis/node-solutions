import { AnimatedLogo } from "@/shared/components/common/animated-logo";
import { Button } from "@/shared/components/ui/button";
import { Orbit } from "lucide-react";

export function ContactCta() {
  return (
    <section className="section-space pt-0">
      <div className="container-main">
        <div className="section-banner-bg relative overflow-hidden rounded-3xl border border-border px-6 py-14 text-center shadow-glow md:px-10">
          <div className="absolute inset-0 grid-pattern opacity-20" />

          <div className="relative">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-border bg-card text-primary backdrop-blur-sm">
             <AnimatedLogo size={64} mode="static" />
            </div>

            <h2 className="mt-6 text-2xl font-semibold text-foreground md:text-3xl">
              Thank you for your interest in Node Solution.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
              Whether you need branding, digital marketing, printing, commercial
              design, or IT support, our team is ready to help you move forward.
            </p>

            <div className="mt-8">
              <Button href="/contact">Book a Consultation</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}