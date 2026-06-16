import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://arthurgunther.vercel.app";

export const metadata: Metadata = {
  title: "Arthur Gunther",
  description: "Product designer / enterprise ux / design systems",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Arthur Gunther",
    description: "Product designer / enterprise ux / design systems",
    url: siteUrl,
    siteName: "Arthur Gunther",
    images: [
      {
        url: "/og-image.png",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arthur Gunther",
    description: "Product designer / enterprise ux / design systems",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
