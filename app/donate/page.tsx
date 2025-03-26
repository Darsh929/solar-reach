"use client";

import { Button } from "@/components/ui/button";

export default function Donate() {
  return (
    <div className="mx-auto flex w-full max-w-(--breakpoint-lg) flex-col px-6 pb-20 sm:px-20 sm:pb-24">
      <h1 className="mt-32 text-xl font-bold uppercase sm:mt-64">Support us</h1>
      <h1 className="mt-2 scroll-m-20 text-4xl font-extrabold tracking-tight">
        Be a catalyst for change
      </h1>

      <p className="mt-6 text-lg leading-7">
        At Solar Reach, we’re on a mission to bring safe, sustainable light to
        communities living without reliable electricity.
        <br />
        <br />
        Every donation directly funds the creation and distribution of
        solar-powered lights—tools that open doors to education, safety, and
        opportunity. With just one light, a child can finish their homework, a
        family can gather without fear, and a village can take a step toward a
        brighter future.
        <br />
        <br />
        <strong>Every dollar counts.</strong> Whether it’s $5 or $500, your
        contribution fuels renewable energy solutions with lasting impact.
        <br />
        <br />
        <strong>Join us today.</strong> Be part of a movement that brings light,
        hope, and possibility to those who need it most.
      </p>
      <div className="mt-10 flex flex-col items-center sm:mt-16">
        <Button
          onClick={() =>
            window.open(
              "https://www.paypal.com/donate/?hosted_button_id=QED7FXY72CW9Q",
              "_blank",
            )
          }
          className="text-md w-full max-w-xs cursor-pointer rounded-none border-3 border-(--background) bg-(--yellow-5) py-5 font-bold text-(--background) uppercase shadow-[4px_4px_0_var(--background)] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:bg-(--yellow-4) hover:shadow-[0px_0px_0_var(--background)] hover:filter sm:max-w-sm md:max-w-md lg:max-w-lg"
        >
          Donate via PayPal
        </Button>
      </div>
    </div>
  );
}
