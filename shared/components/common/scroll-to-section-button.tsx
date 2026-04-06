"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/shared/lib/utils";

type ScrollToSectionButtonProps = {
  targetId?: string;
  className?: string;
  showAfter?: number;
};

export function ScrollToSectionButton({
  targetId,
  className,
  showAfter = 200,
}: ScrollToSectionButtonProps) {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = docHeight > 0 ? scrollTop / docHeight : 0;

      setVisible(scrollTop > showAfter);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfter]);

  const handleClick = () => {
    if (targetId) {
      const element = document.getElementById(targetId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        return;
      }
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const radius = 22;
  const circumference = 2 * Math.PI * radius;

  const strokeDashoffset = useMemo(() => {
    return circumference - scrollProgress * circumference;
  }, [circumference, scrollProgress]);

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll to top section"
      className={cn(
        "group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300",
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
        className
      )}
    >
      {/* Glow ring */}
      <span className="absolute inset-0 rounded-full bg-primary/15 blur-md transition duration-300 group-hover:bg-primary/25" />

      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full border border-primary/20 animate-scrollPulse" />

      {/* Progress ring */}
      <svg
        className="absolute inset-0 -rotate-90"
        viewBox="0 0 48 48"
        fill="none"
      >
        <circle
          cx="24"
          cy="24"
          r={radius}
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="2"
        />
        <circle
          cx="24"
          cy="24"
          r={radius}
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="text-primary transition-all duration-200"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>

      {/* Button surface */}
      <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-card backdrop-blur-md transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-secondary group-hover:text-primary">
        <ArrowUp size={18} />
      </span>
    </button>
  );
}