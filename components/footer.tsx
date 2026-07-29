import EmailForm from "@/components/email-form";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const navigation = {
    nav: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Donate", href: "/donate" },
    ],
    social: [
      {
        name: "Instagram",
        href: "https://www.instagram.com/solar_reach_",
        icon: (props: React.SVGProps<SVGSVGElement>) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.315 1.802h-.63c-2.454 0-2.744.009-3.808.058-.976.045-1.505.207-1.858.344-.466.181-.8.398-1.15.748-.35.35-.567.684-.748 1.15-.137.353-.3.882-.344 1.858-.049 1.064-.058 1.354-.058 3.808v.63c0 2.454.009 2.744.058 3.808.045.976.207 1.505.344 1.858.181.466.398.8.748 1.15.35.35.684.567 1.15.748.353.137.882.3 1.858.344 1.054.048 1.37.058 3.808.058h.63c2.454 0 2.744-.009 3.808-.058.976-.045 1.505-.207 1.858-.344.466-.181.8-.398 1.15-.748.35-.35.567-.684.748-1.15.137-.353.3-.882.344-1.858.048-1.064.058-1.354.058-3.808v-.63c0-2.454-.009-2.744-.058-3.808-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.858-.344-1.064-.049-1.354-.058-3.808-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: "TikTok",
        href: "https://www.tiktok.com/@solar_reach",
        icon: (props: React.SVGProps<SVGSVGElement>) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M16.6 5.82c-1.02-.9-1.6-2.19-1.6-3.62h-3.15v13.44c0 1.55-1.26 2.81-2.81 2.81a2.81 2.81 0 01-2.81-2.81 2.81 2.81 0 012.81-2.81c.29 0 .57.04.83.13V9.65a6.06 6.06 0 00-.83-.06 6 6 0 00-6 6 6 6 0 006 6 6 6 0 006-6V9.4a7.63 7.63 0 004.5 1.45V7.72a4.83 4.83 0 01-2.94-1.9z" />
          </svg>
        ),
      },
      {
        name: "GitHub",
        href: "https://github.com/Darsh929/solar-reach",
        icon: (props: React.SVGProps<SVGSVGElement>) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.339-.012 2.419-.012 2.749 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.523 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
  };

  return (
    <footer
      className="transition-colors duration-1000"
      style={{ backgroundColor: "#4D5669" }}
    >
      <div className="mx-auto w-full max-w-7xl px-6 pt-8 pb-10 sm:pt-10 lg:px-8">
        {/* Logo */}
        <Image
          src="/favicon.ico"
          alt="Solar Reach Logo"
          width={48}
          height={48}
          className="-mb-6"
        />
        <div className="flex items-end justify-end gap-x-6">
          <ul className="flex items-end gap-x-4">
            {navigation.nav.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm text-gray-400 hover:text-white"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-x-4">
            {navigation.social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="size-5" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-4 gap-x-2 border-y border-white/10 py-8 sm:flex sm:items-center sm:justify-between">
          <div>
            <h3 className="text-sm/6 font-semibold text-white">
              Stay Connected
            </h3>
            <p className="mt-2 max-w-lg text-sm/6 text-gray-300">
              Sign up for our newsletter to stay informed about our latest
              projects, success stories, and ways you can get involved.
            </p>
          </div>
          <EmailForm />
        </div>
      </div>
    </footer>
  );
}
