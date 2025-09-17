import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumora | Digital Excellence",
  description:
    "A modern platform showcasing cutting-edge web solutions by Lumora.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <nav>
          <a href="/">Lumora</a>
          <a href="/services">Services</a>
          <a href="/about">About Us</a>
          <a href="/careers">Careers</a>
          <a href="/contact">Contact</a>
        </nav>
        {children}
        <footer>© 2025 Lumora</footer>
      </body>
    </html>
  );
}
