import Link from "next/link";
import { cn } from "@/shared/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({
  children,
  className,
  href,
  variant = "primary",
}: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition-all duration-300",
    variant === "primary" &&
      "bg-primary text-black hover:bg-white",
    variant === "secondary" &&
      "border border-card-border bg-card text-text hover:bg-white/10",
    variant === "ghost" &&
      "text-text-muted hover:text-white",
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