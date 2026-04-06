import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/shared/providers/theme-provider";
import { BackgroundPattern } from "@/shared/components/common/background-pattern";
import { ToastProvider } from "@/shared/components/common/toast-provider";

export const metadata: Metadata = {
  title: "Node Solution",
  description: "Building brands, spaces, and digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative min-h-screen bg-background text-foreground">
        <ThemeProvider>
          <ToastProvider>
            <BackgroundPattern
              variant="mesh"
              className="fixed inset-0 z-0 opacity-50"
            />
            <div className="relative z-10">{children}</div>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}