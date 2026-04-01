import Link from "next/link";
import { Logo } from "@/shared/components/common/logo";
import { NAV_LINKS } from "@/shared/constants/nav-links";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--background-soft)]">
      <div className="container-main py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <Logo />

          <nav className="flex flex-wrap gap-5 text-sm text-muted-foreground">
            {NAV_LINKS.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 text-muted-foreground">
            <Link href="#" className="hover:text-foreground">
              <Facebook size={18} />
            </Link>
            <Link href="#" className="hover:text-foreground">
              <Twitter size={18} />
            </Link>
            <Link href="#" className="hover:text-foreground">
              <Linkedin size={18} />
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
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