import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
};

export function ServiceCard({
  title,
  description,
  href,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-card-border bg-[url('https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60 transition group-hover:bg-black/50" />
      <div className="relative flex h-full min-h-[360px] flex-col justify-between p-6">
        <div>
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-card-border bg-card text-primary">
            <Icon size={22} />
          </div>

          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="mt-4 text-sm leading-7 text-text-muted">{description}</p>
        </div>

        <div className="mt-6">
          <Link
            href={href}
            className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-4 py-2 text-sm transition hover:bg-white/10"
          >
            Learn More <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}