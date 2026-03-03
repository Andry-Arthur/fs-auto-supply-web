import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: {
    default: "FS Auto Supply",
    template: "%s | FS Auto Supply",
  },
  description:
    "FS Auto Supply offers dependable automotive parts, accessories, and service-ready components for daily drivers and fleet needs.",
  applicationName: "FS Auto Supply",
  keywords: [
    "FS Auto Supply",
    "auto parts",
    "automotive supply",
    "brake kits",
    "filters",
    "suspension parts",
    "fleet parts",
  ],
  authors: [{ name: "FS Auto Supply" }],
  creator: "FS Auto Supply",
  publisher: "FS Auto Supply",
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
    title: "FS Auto Supply",
    description:
      "Dependable automotive parts, accessories, and service-ready components for daily drivers and fleet needs.",
    siteName: "FS Auto Supply",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FS Auto Supply",
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
