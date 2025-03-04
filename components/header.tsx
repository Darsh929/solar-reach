"use client";

import NavIcon from "@/components/nav-icon";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [logoSize, setLogoSize] = useState(250);
  const [navSize, setNavSize] = useState(54);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setLogoSize(150);
        setNavSize(40);
      } else {
        setLogoSize(250);
        setNavSize(54);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="absolute -top-5 left-0 right-0 z-50 mx-auto ml-0 flex max-w-screen-lg flex-row items-center justify-between px-6 sm:top-0 sm:ml-auto">
      <Image
        src="/logo_full_dark.svg"
        alt="Solar Reach logo"
        width={logoSize}
        height={logoSize}
      />
      <div
        className="relative -top-1 flex flex-col justify-end sm:mr-0"
        onMouseLeave={() => setIsHovered(false)}
      >
        <div onMouseEnter={() => setIsHovered(true)}>
          <NavIcon width={navSize} height={navSize} isHovered={isHovered} />
        </div>
        <div className="absolute right-2 top-12 w-40 text-right text-xl font-extrabold uppercase text-[var(--background)]">
          <motion.nav initial={false} animate={isHovered ? "open" : "closed"}>
            <motion.ul
              variants={{
                open: {
                  clipPath: "inset(0% 0% 0% 0% round 10px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.1,
                    delayChildren: 0.2,
                    staggerChildren: 0.05,
                  },
                },
                closed: {
                  clipPath: "inset(10% 50% 90% 50% round 10px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.3,
                  },
                },
              }}
              style={{ pointerEvents: isHovered ? "auto" : "none" }}
              className="space-y-1"
            >
              <motion.li variants={itemVariants}>
                <Link href="/" className="decoration-2 hover:underline">
                  Home
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link href="/about" className="decoration-2 hover:underline">
                  About Us
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link href="/donate" className="decoration-2 hover:underline">
                  Donate
                </Link>
              </motion.li>
              {/* <motion.li variants={itemVariants}>
                  <Link href="/volunteer" className="hover:underline decoration-2">Get Involved</Link>
                </motion.li> */}
            </motion.ul>
          </motion.nav>
        </div>
      </div>
    </div>
  );
}
