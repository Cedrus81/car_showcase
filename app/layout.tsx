import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "./_components";

export const metadata: Metadata = {
  title: "otopark",
  description: "Discover the best cars in the galaxy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
