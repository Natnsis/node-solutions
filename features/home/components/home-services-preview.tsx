import { SectionHeading } from "@/shared/components/ui/section-heading";
import { services } from "@/features/services/data/services.data";
import { ServiceCard } from "@/features/services/components/service-card";

export function HomeServicesPreview() {
  return (
    <section className="section-space">
      <SectionHeading
        title="Our Services"
        description="We offer integrated creative, technical, and business solutions designed to move your brand forward."
      />

      <div className="container-main mt-10 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <ServiceCard
            key={service.slug}
            title={service.title}
            description={service.description}
            href={`/services/${service.slug}`}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
}