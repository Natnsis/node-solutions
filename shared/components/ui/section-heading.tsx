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
    <div className={cn("section-banner-bg border-y border-border", className)}>
      <div className="container-main py-10 text-center md:py-12">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}