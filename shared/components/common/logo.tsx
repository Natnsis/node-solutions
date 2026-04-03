import Link from "next/link";
import { AnimatedLogo } from "./animated-logo";

type LogoProps = {
  href?: string;
  animated?: boolean;
  mode?: "static" | "loop";
  size?: number;
  showText?: boolean;
};

export function Logo({
  href = "/",
  animated = true,
  mode = "static",
  size = 38,
  showText = true,
}: LogoProps) {
  return (
    <Link href={href} className="flex items-center gap-3">
      {animated ? (
        <AnimatedLogo size={size} mode={mode} />
      ) : (
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-primary">
          NS
        </div>
      )}

      {showText ? (
        <span className="text-lg font-semibold tracking-wide text-primary">
          Node Solution
        </span>
      ) : null}
    </Link>
  );
}