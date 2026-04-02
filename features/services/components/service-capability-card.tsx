type ServiceCapabilityCardProps = {
  title: string;
  icon: React.ElementType;
};

export function ServiceCapabilityCard({
  title,
  icon: Icon,
}: ServiceCapabilityCardProps) {
  return (
    <div className="premium-hover group relative overflow-hidden rounded-xl border border-border shadow-card">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=1200&auto=format&fit=crop')",
        }}
      />

      <div className="absolute inset-0 bg-background/65 transition duration-500 group-hover:bg-background/55" />
      <div className="absolute inset-0 glass-card" />

      <div className="relative flex min-h-[120px] flex-col justify-between p-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card text-foreground transition duration-500 group-hover:scale-105 group-hover:text-primary">
          <Icon size={20} />
        </div>

        <p className="mt-4 text-sm font-medium leading-6 text-foreground transition duration-300 group-hover:text-primary">
          {title}
        </p>
      </div>
    </div>
  );
}