import {
  ShieldCheck,
  Users,
  LineChart,
  Handshake,
} from "lucide-react";
import { SectionHeading } from "@/shared/components/ui/section-heading";

const features = [
  {
    title: "Expert Team",
    description:
      "Our specialists combine business insight, creative thinking, and technical execution to deliver measurable value.",
    icon: ShieldCheck,
  },
  {
    title: "Client-Centric Approach",
    description:
      "We tailor every project to your goals, brand identity, and operational needs instead of using one-size-fits-all solutions.",
    icon: Users,
  },
  {
    title: "Results-Driven Solutions",
    description:
      "From brand visibility to technical reliability, every solution is built to produce real business impact.",
    icon: LineChart,
  },
  {
    title: "Collaborative Partnership",
    description:
      "We work with you as an extension of your team to ensure alignment, transparency, and long-term success.",
    icon: Handshake,
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-space pt-0">
      <SectionHeading
        title="Why Choose Node Solution?"
        description="We blend strategy, creativity, and technology to build solutions that are visually strong and commercially effective."
      />

      <div className="container-main mt-10 grid gap-6 md:grid-cols-2">
        {features.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="glass-card rounded-2xl p-6 shadow-soft"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon size={22} />
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-text-muted">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}