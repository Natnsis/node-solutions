import Link from "next/link";
import { Orbit } from "lucide-react";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-card-border bg-card text-primary">
        <Orbit size={18} />
      </span>
      <span className="text-lg font-semibold tracking-wide text-primary">
        Nod Solution
      </span>
    </Link>
  );
}