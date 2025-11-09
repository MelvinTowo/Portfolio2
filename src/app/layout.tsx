import type { Metadata } from "next";
import { Geist, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
  display: "swap", // Improves loading performance
});

const firaCode = Fira_Code({
  variable: "--font-geist-mono", // Keep the same CSS variable name for compatibility
  subsets: ["latin"],
  fallback: ["'SF Mono'", "Monaco", "'Cascadia Code'", "'Roboto Mono'", "Consolas", "'Courier New'", "monospace"],
  display: "swap", // Improves loading performance
});

export const metadata: Metadata = {
  title: "Melvin Towo - Portfolio",
  description: "Backend & Cloud Infrastructure Engineer | Computer Science Masters Student | Full-Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${firaCode.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
