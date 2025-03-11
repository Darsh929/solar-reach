import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Solar Reach",
  description:
    "At Solar Reach, we're committed to bringing sustainable, solar-powered light to areas where energy resources are scarce.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[--background]">
      <body className="bg-[--yellow-5] text-[--background]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
