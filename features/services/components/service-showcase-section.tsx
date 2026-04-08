"use client";

import { ChevronDown } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { ServiceCapabilityGroup } from "./service-capability-group";

type ServiceShowcaseSectionProps = {
  service: {
    slug: string;
    title: string;
    description: string;
    image: string;
    icon: React.ElementType;
    groups: {
      title: string;
      items: { title: string; icon: React.ElementType }[];
    }[];
  };
  isOpen: boolean;
  onToggle: () => void;
};

export function ServiceShowcaseSection({
  service,
  isOpen,
  onToggle,
}: ServiceShowcaseSectionProps) {
  const Icon = service.icon;

  return (
    <section
      id={`service-${service.slug}`}
      className="border-t border-border pt-12 first:border-t-0 first:pt-0 scroll-mt-24"
    >
      <div
        className={`overflow-hidden rounded-2xl border border-border bg-[var(--background-soft)] shadow-card transition duration-500 ${
          isOpen ? "shadow-glow" : ""
        }`}
      >
        <button
          type="button"
          onClick={onToggle}
          className="group grid w-full items-stretch text-left"
          aria-expanded={isOpen}
        >
          <div className="grid lg:grid-cols-[1.45fr_0.95fr]">
            <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card text-primary transition duration-300 group-hover:scale-105">
                    <Icon size={24} />
                  </div>

                  <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                    {service.title}
                  </h2>
                </div>

                <div
                  className={`accordion-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-card ${
                    isOpen ? "text-primary" : "text-foreground"
                  } group-hover:text-primary`}
                >
                  <ChevronDown size={20} className={isOpen ? "rotate-180" : "rotate-0"} />
                </div>
              </div>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
                {service.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <div className="inline-flex w-fit rounded-md border border-border bg-card px-4 py-2 text-sm text-foreground">
                  Our design services include:
                </div>

                {/* CTA → Contact with auto-select */}
                <Button
  href={`/contact?service=${encodeURIComponent(service.slug)}#contact-top`}
  variant="secondary"
  className="rounded-xl"
>
  Request This Service
</Button>
              </div>
            </div>

            {/* Premium image panel */}
            <div className="relative min-h-[260px] border-t border-border lg:min-h-full lg:border-l lg:border-t-0">
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:brightness-110"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-l from-background/5 via-background/15 to-background/70 lg:bg-gradient-to-r lg:from-background/55 lg:via-background/15 lg:to-transparent" />
                <div className="absolute inset-0 grid-pattern opacity-20" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_28%)] opacity-70 transition duration-700 group-hover:opacity-100" />
              </div>
            </div>
          </div>
        </button>

        {/* Accordion body */}
        <div
          className={`accordion-panel grid ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-border px-6 py-8 md:px-8 md:py-10 lg:px-10">
              <div className="space-y-10">
                {service.groups.map((group) => (
                  <ServiceCapabilityGroup
                    key={group.title}
                    title={group.title}
                    items={group.items}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}