import { AnimatedLogo } from "@/shared/components/common/animated-logo";
import { Orbit } from "lucide-react";

export function ContactPageHero() {
  return (
    <section className="pt-6 md:pt-8">
      <div className="container-main">
        <div className="section-banner-bg relative overflow-hidden  border border-border px-6 py-16 text-center shadow-card md:px-10 md:py-20">
          <div className="absolute inset-0 grid-pattern opacity-25" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-border bg-card text-primary backdrop-blur-sm">
                <AnimatedLogo size={64} mode="static" />
            </div>

            <h1 className="mt-6 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
              Contact Us
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
              Let&apos;s discuss your next project. Whether you need strategy,
              branding, technical support, or full digital execution, our team is
              here to help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}