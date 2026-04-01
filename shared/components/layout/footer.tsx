import Link from "next/link";
import { Logo } from "@/shared/components/common/logo";
import { NAV_LINKS } from "@/shared/constants/nav-links";

export function Footer() {
  return (
    <footer className="border-t border-card-border bg-background-soft">
      <div className="container-main py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <Logo />

          <nav className="flex flex-wrap gap-5 text-sm text-text-muted">
            {NAV_LINKS.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-card-border pt-6 text-sm text-text-muted md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1 md:flex-row md:gap-6">
            <span>hello@nodesolution.com</span>
            <span>+1 555 123 2323</span>
            <span>New York, USA</span>
          </div>
          <p>© 2025 Node Solution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}