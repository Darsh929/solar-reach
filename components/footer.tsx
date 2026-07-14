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

        <div className="flex items-end justify-end gap-x-4">
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
