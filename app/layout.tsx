import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Solar Reach",
  description:
    "At Solar Reach, we’re committed to bringing sustainable, solar-powered light to areas where energy resources are scarce.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-dark-4">
      <body className="bg-background text-foreground">
        <Header />
        {children}
        <Footer />
        <Toaster
          toastOptions={{
            classNames: {
              toast: "!bg-[#2F2A3B] !text-light-3 !border-dark-3",
              title: "!text-white",
              description: "!text-light-3",
            },
          }}
        />
      </body>
    </html>
  );
}
