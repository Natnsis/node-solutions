import { ServiceCapabilityCard } from "./service-capability-card";

type ServiceCapabilityGroupProps = {
  title: string;
  items: {
    title: string;
    icon: React.ElementType;
  }[];
};

export function ServiceCapabilityGroup({
  title,
  items,
}: ServiceCapabilityGroupProps) {
  return (
    <div>
      <h3 className="mb-5 text-lg font-medium text-foreground">{title}</h3>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <ServiceCapabilityCard
            key={item.title}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}