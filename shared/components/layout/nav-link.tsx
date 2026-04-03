import Link from "next/link";
import { cn } from "@/shared/lib/utils";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function NavLink({ href, children, className }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-sm text-muted-foreground transition duration-300 hover:text-foreground",
        className
      )}
    >
      {children}
    </Link>
  );
}