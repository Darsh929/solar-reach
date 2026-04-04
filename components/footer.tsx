import EmailForm from "@/components/email-form";
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
    <footer className="bg-dark-4">
      <div className="mx-auto w-full max-w-7xl px-6 pt-8 pb-10 sm:pt-10 lg:px-8">
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
          className="-mb-6 size-12"
        >
          <g transform="matrix(0.715699, 0, 0, 0.665239, -3.365015, 100.264091)">
            <g className="fill-yellow-5">
              <path d="M 10.109 -27.416 C 29.029 -64.11 56.494 -96.651 86.855 -124.627 C 94.259 -131.449 109.294 -132.382 117.029 -125.939 C 171.509 -80.559 220.591 -28.66 266.716 25.191 C 273.534 33.151 275.695 45.925 272.882 56.021 C 269.127 69.5 247.037 112.666 220.144 101.937 C 151.292 74.468 82.805 44.517 19.686 5.644 C 9.917 -0.372 4.851 -17.219 10.109 -27.416 Z" />
              <path d="M 524.168 102.651 C 567.569 80.851 612.751 61.903 659.425 48.47 C 665.904 46.605 674.52 52.384 676.873 58.702 C 689.741 93.262 699.203 129.491 703.242 166.147 C 704.064 173.609 698.234 184.022 690.779 184.907 C 644.444 190.41 597.172 189.432 550.8 184.251 C 540.812 183.135 531.245 175.345 526.398 166.54 C 518.822 152.778 516.32 136.324 515.772 120.624 C 515.541 114.016 518.259 105.619 524.168 102.651 Z" />
              <path d="M 244.178 227.165 C 243.926 208.81 241.359 189.491 232.699 173.305 C 227.792 164.133 216.743 157.506 206.387 156.529 C 146.195 150.847 85.249 148.324 25.029 153.703 C 15.368 154.566 4.174 164.857 4.721 174.541 C 7.268 219.602 18.327 264.366 33.682 306.807 C 37.076 316.187 48.979 326.11 58.581 323.407 C 119.465 306.265 177.608 279.592 233.759 250.475 C 241.314 246.557 244.295 235.675 244.178 227.165 Z" />
              <path d="M 406.051 333.114 C 417.369 325.664 431.318 321.002 444.867 321.046 C 453.476 321.074 463.66 325.657 467.594 333.315 C 497.217 390.985 523.508 450.747 543.215 512.512 C 546.173 521.783 541.952 535.135 533.561 540.065 C 500.83 559.295 464.475 573.664 427.169 580.691 C 417.483 582.516 403.896 574.518 402.23 564.803 C 390.547 496.672 387.816 426.967 388.956 357.851 C 389.121 347.829 397.679 338.625 406.051 333.114 Z" />
            </g>
          </g>
        </svg>

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
