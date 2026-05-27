import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DestinyObs · Full-Stack Software Engineer",
  description:
    "Destiny Obueh (DestinyObs) — Full-Stack Software Engineer & Cloud/DevOps Engineer building scalable web apps, backend systems, and cloud infrastructure.",
  keywords: [
    "Full-Stack Engineer", "Software Engineer", "Cloud Engineer", "DevOps",
    "React", "Node.js", "Next.js", "TypeScript", "AWS", "Docker",
    "Destiny Obueh", "DestinyObs",
  ],
  authors: [{ name: "Destiny Obueh", url: "https://github.com/destinyobs" }],
  creator: "Destiny Obueh",
  openGraph: {
    type: "website",
    title: "DestinyObs · Full-Stack Software Engineer",
    description: "Building scalable web applications, backend systems, and cloud infrastructure.",
    siteName: "DestinyObs Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "DestinyObs · Full-Stack Software Engineer",
    description: "Building scalable web apps, backend systems, and cloud infrastructure.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FAFAF6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
