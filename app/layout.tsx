import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: {
    default: "Fs Auto Supply",
    template: "%s | Fs Auto Supply",
  },
  description:
    "Fs Auto Supply offers dependable automotive parts, accessories, and service-ready components for daily drivers and fleet needs.",
  applicationName: "Fs Auto Supply",
  keywords: [
    "Fs Auto Supply",
    "auto parts",
    "automotive supply",
    "brake kits",
    "filters",
    "suspension parts",
    "fleet parts",
  ],
  authors: [{ name: "Fs Auto Supply" }],
  creator: "Fs Auto Supply",
  publisher: "Fs Auto Supply",
  category: "automotive",
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Fs Auto Supply",
    description:
      "Dependable automotive parts, accessories, and service-ready components for daily drivers and fleet needs.",
    siteName: "Fs Auto Supply",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fs Auto Supply",
    description:
      "Dependable automotive parts, accessories, and service-ready components for daily drivers and fleet needs.",
  },
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
