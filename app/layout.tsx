import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import { team } from "@/lib/team";

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
        <div
          className="pointer-events-none fixed top-0 left-0 -z-10 opacity-0"
          aria-hidden
        >
          {team.map((person) => (
            <Image
              key={person.name}
              src={person.imageUrl}
              alt=""
              width={400}
              height={500}
              priority
            />
          ))}
        </div>
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
