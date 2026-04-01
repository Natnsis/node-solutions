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
    <div className={cn("section-banner-bg border-y border-card-border", className)}>
      <div className="container-main py-10 text-center">
        <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
        {description ? (
          <p className="mx-auto mt-3 max-w-2xl text-sm text-text-muted md:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}