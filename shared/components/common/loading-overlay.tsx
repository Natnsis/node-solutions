import { AnimatedLogo } from "@/shared/components/common/animated-logo";

type LoadingOverlayProps = {
  message?: string;
};

export function LoadingOverlay({
  message = "Sending your inquiry...",
}: LoadingOverlayProps) {
  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center rounded-[inherit] bg-background/55 backdrop-blur-md">
      <div className="glass-card flex min-w-[240px] flex-col items-center gap-4 rounded-3xl px-8 py-7 shadow-glow">
        <AnimatedLogo size={56} mode="loop" />
        <div className="text-center">
          <p className="text-sm font-medium text-foreground">{message}</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Please wait a moment
          </p>
        </div>
      </div>
    </div>
  );
}