import { NAV_LINKS } from "@/shared/constants/nav-links";
import { Logo } from "@/shared/components/common/logo";
import { Button } from "@/shared/components/ui/button";
import { ThemeToggle } from "@/shared/components/common/theme-toggle";
import { NavLink } from "./nav-link";
import { MobileNav } from "./mobile-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="container-main relative flex h-20 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />

          <Button href="/contact" className="rounded-lg px-4 py-2">
            Let&apos;s Talk
          </Button>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}