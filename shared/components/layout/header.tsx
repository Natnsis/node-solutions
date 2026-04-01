import Link from "next/link";
import { NAV_LINKS } from "@/shared/constants/nav-links";
import { Logo } from "@/shared/components/common/logo";
import { Button } from "@/shared/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <div className="container-main flex h-20 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-text-muted transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact">Let&apos;s Talk</Button>
        </div>

        <div className="md:hidden">
          <Button href="/contact" variant="secondary" className="px-4 py-2">
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
}