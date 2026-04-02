import { cn } from "@/shared/lib/utils";

type SectionHeadingProps = {
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <section className={cn("pt-6 md:pt-8", className)}>
      <div className="container-main">
        <div className="section-banner-bg relative overflow-hidden border border-border px-6 py-12 text-center shadow-card md:px-10 md:py-16">
          
          {/* Background Pattern */}
          <div className="absolute inset-0 grid-pattern opacity-25" />

          {/* Content */}
          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              {title}
            </h2>

            {description && (
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}