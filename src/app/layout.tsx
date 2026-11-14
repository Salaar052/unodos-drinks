import type { Metadata, Viewport } from "next";
import { Creepster, Nunito } from "next/font/google";
import "./globals.css";

const display = Creepster({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://unodos-drinks.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Unodos Drinks | Blood Moon Izakaya",
  description:
    "Enter if you dare. Unodos Drinks by Undos Games — horror-anime potions and power-up food at Geek Con, 21–22 Nov 2026.",
  applicationName: "Unodos Drinks",
  openGraph: {
    type: "website",
    locale: "en_PK",
    title: "Unodos Drinks | Blood Moon Izakaya",
    description:
      "Haunted-anime drinks and food at Geek Con. Undos Games presents Unodos Drinks.",
    siteName: "Unodos Drinks",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unodos Drinks | Blood Moon Izakaya",
    description: "Scan the stall QR — sip if you dare.",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#07030a",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}