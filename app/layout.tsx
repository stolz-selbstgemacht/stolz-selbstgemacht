import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "stolz.selbstgemacht",
  description: "Selbstgenähte Kleidung und Accessoires",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}