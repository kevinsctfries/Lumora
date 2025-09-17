import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";
import Navbar from "./components/navbar/Navbar";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
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
      <body className={`${roboto.variable}`}>
        <Navbar />
        {children}
        <footer>© 2025 Lumora</footer>
      </body>
    </html>
  );
}
