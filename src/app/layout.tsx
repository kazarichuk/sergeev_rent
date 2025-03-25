import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sergeev-rent.vercel.app'),
  title: "Sergeev Rent - Аренда автомобилей",
  description: "Аренда автомобилей в Санкт-Петербурге. Большой выбор автомобилей, выгодные цены, круглосуточная поддержка.",
  openGraph: {
    title: "Sergeev Rent - Аренда автомобилей",
    description: "Аренда автомобилей в Санкт-Петербурге. Большой выбор автомобилей, выгодные цены, круглосуточная поддержка.",
    url: "https://sergeev-rent.vercel.app",
    siteName: "Sergeev Rent",
    images: [
      {
        url: "/photo_2025-03-25 7.36.54 PM.jpeg",
        width: 1200,
        height: 630,
        alt: "Sergeev Rent - Аренда автомобилей",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sergeev Rent - Аренда автомобилей",
    description: "Аренда автомобилей в Санкт-Петербурге. Большой выбор автомобилей, выгодные цены, круглосуточная поддержка.",
    images: ["/photo_2025-03-25 7.36.54 PM.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
