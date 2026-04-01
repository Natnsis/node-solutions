import Link from "next/link";
import { cn } from "@/shared/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({
  children,
  href,
  className,
  variant = "primary",
}: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition-all duration-300",
    variant === "primary" &&
      "bg-primary text-[var(--color-primary-foreground)] hover:brightness-110",
    variant === "secondary" &&
      "border border-border bg-card text-foreground hover:bg-white/10",
    variant === "ghost" &&
      "text-muted-foreground hover:text-foreground",
    className
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return <button className={styles}>{children}</button>;
}