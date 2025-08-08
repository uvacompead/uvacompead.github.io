import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UVACOMPEAD · Apoio Computação EAD da UVA",
  description:
    "Comunidade EAD de Computação da UVA com estrutura colaborativa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:title"
          content="UVACOMPEAD · Apoio Computação EAD da UVA"
        />
        <meta
          property="og:description"
          content="Comunidade EAD de Computação da UVA com estrutura colaborativa."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://uvacompead.github.io/" />
        <meta
          property="og:image"
          content="https://uvacompead.github.io/preview.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
