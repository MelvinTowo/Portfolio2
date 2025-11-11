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
  
  // Favicon and icons
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  
  // Additional SEO metadata
  keywords: ["Melvin Towo", "Portfolio", "Backend Engineer", "Cloud Infrastructure", "Full Stack Developer", "Computer Science", "Georgia Tech"],
  authors: [{ name: "Melvin Towo", url: "https://melvintowo.com" }],
  creator: "Melvin Towo",
  
  // Open Graph metadata for social sharing
  openGraph: {
    type: "website",
    locale: "en",
    url: "https://melvintowo.com",
    title: "Melvin Towo - Portfolio",
    description: "Backend & Cloud Infrastructure Engineer | Computer Science Masters Student | Full-Stack Developer",
    siteName: "Melvin Towo Portfolio",
  },
  
  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    title: "Melvin Towo - Portfolio",
    description: "Backend & Cloud Infrastructure Engineer | Computer Science Masters Student | Full-Stack Developer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${firaCode.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
