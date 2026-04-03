import { Mail, Phone, MapPin } from "lucide-react";

const contactItems = [
  {
    title: "Email Us",
    description: "Reach out anytime and our team will respond as soon as possible.",
    value: "hello@nodesolution.com",
    icon: Mail,
  },
  {
    title: "Call Us",
    description: "Talk directly with us for consultations, planning, or support.",
    value: "+1 555 123 2323",
    icon: Phone,
  },
  {
    title: "Visit / Location",
    description: "We work globally and collaborate with businesses across industries.",
    value: "New York, USA",
    icon: MapPin,
  },
];

export function ContactInfoCards() {
  return (
    <section className="section-space pb-10">
      <div className="container-main">
        <div className="grid gap-6 md:grid-cols-3">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="glass-card rounded-2xl p-6 shadow-card"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card text-primary">
                  <Icon size={20} />
                </div>

                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>

                <p className="mt-4 text-sm font-medium text-foreground">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}