"use client";

import { Button } from "@/components/ui/button";

export default function Donate() {
  return (
    <div className="mx-auto flex w-full max-w-(--breakpoint-lg) flex-col px-6 pb-24 sm:px-20">
      <h1 className="mt-32 text-xl font-bold uppercase sm:mt-64">Support us</h1>
      <h1 className="mt-2 scroll-m-20 text-4xl font-extrabold tracking-tight">
        Be a catalyst for change
      </h1>

      <p className="mt-6 text-xl leading-7">
        At Solar Reach, we&apos;re bringing light and hope to communities
        without reliable electricity.
        <br />
        <br />
        Your donation directly funds sustainable, solar-powered lights that
        improve education, safety, and quality of life.
        <br />
        <br />
        With your support, children can study after dark, families can feel safe
        at night, and entire communities can thrive.
        <br />
        <br />
        <strong>Every dollar counts</strong>, and your generosity powers
        brighter futures through renewable energy.
        <br />
        <br />
        <strong>Join us today.</strong> Let&apos;s light up lives together and
        make a lasting global impact.
        <br />
        <br />
        Your contribution makes all the difference.
      </p>
      <div className="mt-12 flex flex-col items-center">
        <Button
          onClick={() =>
            window.open(
              "https://www.paypal.com/donate/?hosted_button_id=QED7FXY72CW9Q",
              "_blank",
            )
          }
          className="w-full max-w-xs cursor-pointer rounded-lg border-none bg-blue-500 px-6 py-3 text-white transition-all hover:bg-blue-600 sm:max-w-sm md:max-w-md lg:max-w-lg"
        >
          Donate via PayPal
        </Button>
      </div>
    </div>
  );
}
