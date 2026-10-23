import type { Metadata } from "next";
import { Geist, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Melvin Towo — Backend & Cloud Engineer",
  description: "Backend and cloud infrastructure engineer based in Dallas, TX. Currently at Toshiba, pursuing an MS in CS at Georgia Tech.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  keywords: ["Melvin Towo", "Backend Engineer", "Cloud Infrastructure", "Georgia Tech", "Toshiba"],
  authors: [{ name: "Melvin Towo", url: "https://melvintowo.com" }],
  creator: "Melvin Towo",
  openGraph: {
    type: "website",
    locale: "en",
    url: "https://melvintowo.com",
    title: "Melvin Towo — Backend & Cloud Engineer",
    description: "Backend and cloud infrastructure engineer based in Dallas, TX.",
    siteName: "Melvin Towo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Melvin Towo — Backend & Cloud Engineer",
    description: "Backend and cloud infrastructure engineer based in Dallas, TX.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} antialiased grain bg-bg text-fg`}
        suppressHydrationWarning
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
