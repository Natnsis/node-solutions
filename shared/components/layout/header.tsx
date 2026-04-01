import Link from "next/link";
import { NAV_LINKS } from "@/shared/constants/nav-links";
import { Logo } from "@/shared/components/common/logo";
import { Button } from "@/shared/components/ui/button";
import { ThemeToggle } from "@/shared/components/common/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="container-main flex h-20 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>

          <div className="hidden md:block">
            <Button href="/contact" className="rounded-lg px-4 py-2">
              Let&apos;s Talk
            </Button>
          </div>

          <div className="sm:hidden">
            <ThemeToggle />
          </div>

          <div className="md:hidden">
            <Button href="/contact" variant="secondary" className="px-4 py-2">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}