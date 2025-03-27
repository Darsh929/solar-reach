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
          className="text-md w-full max-w-xs cursor-pointer rounded-none border-3 border-(--background) bg-(--yellow-5) py-5 font-bold text-(--background) uppercase shadow-[4px_4px_0_var(--background)] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:bg-(--yellow-4) hover:shadow-[0px_0px_0_var(--background)] sm:max-w-sm md:max-w-md lg:max-w-lg [&_svg]:size-auto"
          aria-label="Donate via PayPal"
        >
          Donate via
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="20"
            className="-mx-1"
            aria-hidden="true"
          >
            <path d="M20.0673 8.47768C20.5591 9.35823 20.6237 10.4924 20.3676 11.8053C19.627 15.6107 17.0916 16.9253 13.8536 16.9253H13.3536C12.9583 16.9253 12.6216 17.214 12.5596 17.6047L12.519 17.8253L11.8896 21.818L11.857 21.988C11.795 22.3787 11.4583 22.6667 11.063 22.6667H7.72031C7.42365 22.6667 7.19698 22.402 7.24298 22.1093L7.41807 21H8.9367L9.88603 14.9793H11.2716C15.9496 14.9793 19.0209 12.7768 20.0673 8.47768ZM17.1066 3.38784C17.8693 4.25635 18.0908 5.19891 17.8597 6.67324C17.8405 6.79594 17.82 6.91391 17.7973 7.03253C17.0621 10.8057 14.7087 12.4793 10.8417 12.4793H8.95703C8.32647 12.4793 7.78368 12.8928 7.60372 13.4811L7.58913 13.4788L6.65969 19.3733H3.12169C3.08991 19.3733 3.06598 19.3454 3.07097 19.3136L5.66905 2.80233C5.74174 2.34036 6.13984 2 6.6075 2H12.583C14.7658 2 16.2998 2.46869 17.1066 3.38784Z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 135 48"
            width="45"
            className="-mb-1"
            aria-hidden="true"
          >
            <path d="M133 2.02v32.83h-7.47V2.02H133zM122.78 13.1v21.81h-6.64v-1.88c-.84.82-1.8 1.44-2.86 1.88-1.07.46-2.23.7-3.47.7-1.56 0-3.01-.29-4.34-.87-1.33-.61-2.49-1.44-3.47-2.48-.99-1.05-1.77-2.27-2.35-3.66-.55-1.42-.82-2.95-.82-4.58s.27-3.14.82-4.53c.58-1.42 1.36-2.66 2.35-3.71a10.45 10.45 0 0 1 3.47-2.44c1.33-.61 2.78-.92 4.34-.92 1.24 0 2.4.23 3.47.7 1.07.44 2.03 1.06 2.86 1.88v-1.88h6.64v-.02zm-11.77 15.87c1.36 0 2.47-.46 3.34-1.4.9-.93 1.35-2.12 1.35-3.57 0-1.45-.45-2.65-1.35-3.57-.87-.93-1.99-1.4-3.34-1.4-1.35 0-2.49.46-3.39 1.4-.87.93-1.31 2.12-1.31 3.57 0 1.45.44 2.65 1.31 3.57.9.93 2.03 1.4 3.39 1.4zM88.17 2.02c1.97 0 3.65.28 5.04.83 1.39.55 2.56 1.32 3.52 2.31.98 1.02 1.75 2.18 2.3 3.49.55 1.31.82 2.72.82 4.23 0 1.51-.27 2.92-.82 4.23a11.15 11.15 0 0 1-2.3 3.49c-.95.99-2.13 1.76-3.52 2.31-1.39.55-3.07.83-5.04.83h-3.6V34.9h-7.6V2.02h11.2zm-1.09 14.96c1.02 0 1.79-.1 2.35-.31.58-.23 1.06-.53 1.43-.87.78-.73 1.17-1.7 1.17-2.92s-.39-2.19-1.17-2.92c-.38-.35-.85-.63-1.43-.83-.55-.23-1.33-.35-2.35-.35h-2.52v8.2h2.52zM48.97 13.1h8.25l5.6 10.46h.09L67.9 13.1h7.64L59.17 45.98h-7.6l7.47-15.04L48.97 13.1zm-1.47 0v21.81h-6.64v-1.88c-.84.82-1.8 1.44-2.86 1.88-1.07.46-2.23.7-3.47.7-1.56 0-3.01-.29-4.34-.87-1.33-.61-2.49-1.44-3.47-2.48-.99-1.05-1.77-2.27-2.35-3.66-.55-1.42-.82-2.95-.82-4.58s.27-3.14.82-4.53c.58-1.42 1.36-2.66 2.35-3.71a10.35 10.35 0 0 1 3.47-2.44c1.33-.61 2.78-.92 4.34-.92 1.24 0 2.4.23 3.47.7 1.07.44 2.03 1.06 2.86 1.88v-1.88h6.64v-.02zM35.73 28.97c1.36 0 2.47-.46 3.35-1.4.9-.93 1.35-2.12 1.35-3.57 0-1.45-.45-2.65-1.35-3.57-.87-.93-1.99-1.4-3.35-1.4s-2.49.46-3.39 1.4c-.87.93-1.3 2.12-1.3 3.57 0 1.45.44 2.65 1.3 3.57.9.93 2.03 1.4 3.39 1.4zM13.2 2.02c1.97 0 3.65.28 5.04.83 1.39.55 2.56 1.32 3.52 2.31.98 1.02 1.75 2.18 2.3 3.49.55 1.31.82 2.72.82 4.23 0 1.51-.27 2.92-.82 4.23a11.15 11.15 0 0 1-2.3 3.49c-.95.99-2.13 1.76-3.52 2.31-1.39.55-3.07.83-5.04.83H9.6V34.9H2V2.02h11.2zm-1.08 14.96c1.02 0 1.79-.1 2.35-.31.58-.23 1.06-.53 1.43-.87.78-.73 1.17-1.7 1.17-2.92s-.39-2.19-1.17-2.92c-.38-.35-.85-.63-1.43-.83-.55-.23-1.33-.35-2.35-.35H9.6v8.2h2.52z" />
          </svg>
        </Button>
      </div>
    </div>
  );
}
