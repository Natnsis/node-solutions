"use client";

import Lottie from "lottie-react";
import { cn } from "@/shared/lib/utils";
import logoAnimation from "@/shared/assets/logo-lottie.json";

type AnimatedLogoProps = {
  className?: string;
  size?: number;
  mode?: "static" | "loop";
};

export function AnimatedLogo({
  className,
  size = 48,
  mode = "loop",
}: AnimatedLogoProps) {
  return (
    <div
      className={cn("shrink-0", className)}
      style={{ width: size, height: size }}
      aria-label="nod solution logo"
    >
      <Lottie
        animationData={logoAnimation}
        loop={mode === "loop"}
        autoplay
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}