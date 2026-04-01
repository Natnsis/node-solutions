import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/shared/providers/theme-provider";

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
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}