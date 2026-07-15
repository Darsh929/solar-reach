"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isLightOn, setIsLightOn] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#1F2025");

  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      animate();
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  function animate() {
    if (isLightOn) return;
    setIsLightOn(true);

    const animatesBulb =
      svgRef.current?.querySelectorAll(`animate[data-group="bulb"]`);
    const animatesHalo =
      svgRef.current?.querySelectorAll(`animate[data-group="halo"]`);

    animatesBulb?.forEach((animate) =>
      (animate as SVGAnimateElement).beginElement()
    );

    animatesHalo?.forEach((animate, index) => {
      setTimeout(
        () => (animate as SVGAnimateElement).beginElement(),
        index * 200
      );
    });

    setTimeout(() => setBackgroundColor("#2E3240"), 300);
    setTimeout(() => setBackgroundColor("#3B4355"), 700);
    setTimeout(() => setBackgroundColor("#47516B"), 1200);
    setTimeout(() => setBackgroundColor("#4D5669"), 1800);
  }

  return (
    <>
      <div
        className="text-foreground flex min-h-screen min-w-screen flex-col items-center justify-center gap-16 overflow-hidden p-8 pb-20 font-[Cantarell] transition-colors duration-1000 sm:p-20"
        onClick={animate}
        style={{ backgroundColor }}
      >
        <div className="mt-28 sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            overflow="visible"
            className="size-81"
          >
            <ellipse
              className="fill-yellow-4"
              cx="256"
              cy="256"
              rx="256"
              ry="256"
            />
            <ellipse
              className="fill-yellow-3"
              cx="256"
              cy="256"
              rx="197.33"
              ry="197.33"
            />
            <ellipse
              className="fill-yellow-2"
              cx="256"
              cy="256"
              rx="138.67"
              ry="138.67"
            />
            <g transform="matrix(1, 0, 0, 1, 1.174431, -3.807872)">
              <g transform="matrix(-0.47639, 0, 0, -0.47639, 376.781921, 341.327789)">
                <path
                  className="fill-yellow-4"
                  d="M422.841,152.717C414.014,73.269,350.455,9.71,271.007,0.883C265.71,0.883,261.297,0,256,0 c-5.297,0-9.71,0-15.007,0.883C161.545,9.71,97.986,74.152,89.159,152.717c-6.179,56.497,15.007,107.697,52.083,143.007 c21.186,20.303,38.841,46.786,44.138,75.034h141.241c5.297-28.248,22.952-54.731,44.138-75.034 C407.834,260.414,429.021,209.214,422.841,152.717"
                />
                <path
                  className="fill-yellow-5"
                  d="M203.034,176.552c-9.71,0-17.655,7.945-17.655,17.655c0,9.71,7.945,17.655,17.655,17.655h17.655 v-17.655C220.69,184.497,212.745,176.552,203.034,176.552L203.034,176.552z M291.31,211.862h17.655 c9.71,0,17.655-7.945,17.655-17.655c0-9.71-7.945-17.655-17.655-17.655s-17.655,7.945-17.655,17.655V211.862z M282.483,379.586 c-5.297,0-8.828-3.531-8.828-8.828V229.517h-35.31v141.241c0,5.297-3.531,8.828-8.828,8.828s-8.828-3.531-8.828-8.828V229.517 h-17.655c-19.421,0-35.31-15.89-35.31-35.31s15.89-35.31,35.31-35.31s35.31,15.89,35.31,35.31v17.655h35.31v-17.655 c0-19.421,15.89-35.31,35.31-35.31s35.31,15.89,35.31,35.31s-15.89,35.31-35.31,35.31H291.31v141.241 C291.31,376.055,287.779,379.586,282.483,379.586L282.483,379.586z"
                />
                <path
                  className="fill-light-3"
                  d="M185.379,370.759V476.69h141.241v-70.621v-35.31H185.379z"
                />
                <g className="fill-light-4">
                  <path d="M269.241,512h-26.483c-7.945,0-15.89-3.531-21.186-10.593l-18.538-24.717h105.931l-18.538,24.717 C285.131,508.469,277.186,512,269.241,512" />
                  <path d="M247.172,414.897c5.297,0,8.828-3.531,8.828-8.828s-3.531-8.828-8.828-8.828h-61.793v17.655H247.172 z" />
                  <path d="M220.69,450.207c5.297,0,8.828-3.531,8.828-8.828s-3.531-8.828-8.828-8.828h-35.31v17.655H220.69z" />
                  <path d="M326.621,397.241h-35.31c-5.297,0-8.828,3.531-8.828,8.828s3.531,8.828,8.828,8.828h35.31v-8.828 V397.241z" />
                  <path d="M264.828,432.552c-5.297,0-8.828,3.531-8.828,8.828s3.531,8.828,8.828,8.828h61.793v-17.655H264.828 z" />
                </g>
              </g>
            </g>
            <path className="stroke-light-4 stroke-12" d="M 256 94 l 0 -2000" />
          </svg>
        </div>

        <div className="hidden sm:block">
          {!isLightOn && (
            <div className="absolute inset-0 z-50 cursor-pointer"></div>
          )}
         <div className="-mt-20 flex h-auto min-w-screen flex-col items-start justify-center sm:items-start">
            <div className="relative flex h-full w-full items-center justify-center">
              <svg
                ref={svgRef}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                overflow="visible"
                className="size-156"
              >
                <ellipse
                  cx="256"
                  cy="256"
                  rx="256"
                  ry="256"
                  className="fill-yellow-4 opacity-0"
                >
                  <animate
                    data-group="halo"
                    attributeName="opacity"
                    values="0;1"
                    begin="indefinite"
                    dur="0.5s"
                    fill="freeze"
                    keyTimes="0;1"
                  />
                </ellipse>
                <ellipse
                  cx="256"
                  cy="256"
                  rx="197.33"
                  ry="197.33"
                  className="fill-yellow-3 opacity-0"
                >
                  <animate
                    data-group="halo"
                    attributeName="opacity"
                    values="0;1"
                    begin="indefinite"
                    dur="0.5s"
                    fill="freeze"
                    keyTimes="0;1"
                  />
                </ellipse>
                <ellipse
                  cx="256"
                  cy="256"
                  rx="138.67"
                  ry="138.67"
                  className="fill-yellow-2 opacity-0"
                >
                  <animate
                    data-group="halo"
                    attributeName="opacity"
                    values="0;1"
                    begin="indefinite"
                    dur="0.5s"
                    fill="freeze"
                    keyTimes="0;1"
                  />
                </ellipse>
                <g transform="matrix(1, 0, 0, 1, 1.174431, -3.807872)">
                  <g transform="matrix(-0.47639, 0, 0, -0.47639, 376.781921, 341.327789)">
                    <path
                      className="fill-dark-3"
                      d="M422.841,152.717C414.014,73.269,350.455,9.71,271.007,0.883C265.71,0.883,261.297,0,256,0 c-5.297,0-9.71,0-15.007,0.883C161.545,9.71,97.986,74.152,89.159,152.717c-6.179,56.497,15.007,107.697,52.083,143.007 c21.186,20.303,38.841,46.786,44.138,75.034h141.241c5.297-28.248,22.952-54.731,44.138-75.034 C407.834,260.414,429.021,209.214,422.841,152.717"
                    >
                      <animate
                        data-group="bulb"
                        attributeName="fill"
                        values="#3d3846;#f5c211"
                        begin="indefinite"
                        dur="0.2s"
                        fill="freeze"
                        keyTimes="0;1"
                      />
                    </path>
                    <path
                      className="fill-dark-4"
                      d="M203.034,176.552c-9.71,0-17.655,7.945-17.655,17.655c0,9.71,7.945,17.655,17.655,17.655h17.655 v-17.655C220.69,184.497,212.745,176.552,203.034,176.552L203.034,176.552z M291.31,211.862h17.655 c9.71,0,17.655-7.945,17.655-17.655c0-9.71-7.945-17.655-17.655-17.655s-17.655,7.945-17.655,17.655V211.862z M282.483,379.586 c-5.297,0-8.828-3.531-8.828-8.828V229.517h-35.31v141.241c0,5.297-3.531,8.828-8.828,8.828s-8.828-3.531-8.828-8.828V229.517 h-17.655c-19.421,0-35.31-15.89-35.31-35.31s15.89-35.31,35.31-35.31s35.31,15.89,35.31,35.31v17.655h35.31v-17.655 c0-19.421,15.89-35.31,35.31-35.31s35.31,15.89,35.31,35.31s-15.89,35.31-35.31,35.31H291.31v141.241 C291.31,376.055,287.779,379.586,282.483,379.586L282.483,379.586z"
                    >
                      <animate
                        data-group="bulb"
                        attributeName="fill"
                        values="#241f31;#e5a50a"
                        begin="indefinite"
                        dur="0.2s"
                        fill="freeze"
                        keyTimes="0;1"
                      />
                    </path>
                    <path
                      className="fill-dark-1"
                      d="M185.379,370.759V476.69h141.241v-70.621v-35.31H185.379z"
                    >
                      <animate
                        data-group="bulb"
                        attributeName="fill"
                        values="#77767b;#deddda"
                        begin="indefinite"
                        dur="0.2s"
                        fill="freeze"
                        keyTimes="0;1"
                      />
                    </path>
                    <g className="fill-dark-2">
                      <path d="M269.241,512h-26.483c-7.945,0-15.89-3.531-21.186-10.593l-18.538-24.717h105.931l-18.538,24.717 C285.131,508.469,277.186,512,269.241,512" />
                      <path d="M247.172,414.897c5.297,0,8.828-3.531,8.828-8.828s-3.531-8.828-8.828-8.828h-61.793v17.655H247.172 z" />
                      <path d="M220.69,450.207c5.297,0,8.828-3.531,8.828-8.828s-3.531-8.828-8.828-8.828h-35.31v17.655H220.69z" />
                      <path d="M326.621,397.241h-35.31c-5.297,0-8.828,3.531-8.828,8.828s3.531,8.828,8.828,8.828h35.31v-8.828 V397.241z" />
                      <path d="M264.828,432.552c-5.297,0-8.828,3.531-8.828,8.828s3.531,8.828,8.828,8.828h61.793v-17.655H264.828 z" />
                      <animate
                        data-group="bulb"
                        attributeName="fill"
                        values="#5e5c64;#c0bfbc"
                        begin="indefinite"
                        dur="0.2s"
                        fill="freeze"
                        keyTimes="0;1"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="stroke-dark-2 stroke-12"
                  d="M 256 94 l 0 -2000"
                >
                  <animate
                    data-group="bulb"
                    attributeName="stroke"
                    values="#5e5c64;#c0bfbc"
                    begin="indefinite"
                    dur="0.2s"
                    fill="freeze"
                   keyTimes="0;1"
                  />
                </path>
             </svg>
            </div>
          </div>
        </div>

        <div className="max-w-4xl text-center">
          <h2 className="text-4xl font-extrabold text-white">
            Brightening Futures with Solar
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/90">
            At Solar Reach, we are a high school student-led nonprofit dedicated
            to expanding access to clean, reliable solar lighting for
            communities where electricity is limited or unavailable. We believe
            that something as simple as light can create opportunities for
            students to study after sunset, families to feel safer in their
            homes, and communities to become more self-sufficient. By raising
            funds and partnering with organizations that share our mission, we
            work to provide sustainable solar-powered solutions that have a
            lasting impact. Every donation helps bring renewable energy to
            people who need it most while reducing dependence on costly and
            polluting fuel sources. Our team is passionate about combining
            innovation, service, and environmental responsibility to make a
            meaningful difference. Together, we are working to brighten homes,
            empower communities, and create a more sustainable future—one solar
            light at a time.
          </p>

          <div className="mt-8 animate-bounce text-4xl text-white/70">
            ↓
         </div>
        </div>
      </div>
       {/* IMPACT */}
      <section className="flex flex-col items-center px-8 py-20">
        <h2 className="mb-14 text-5xl font-extrabold text-white">
          Our Impact
        </h2>

        <div className="grid w-full max-w-4xl gap-10 md:grid-cols-2">
          <div className="rounded-3xl bg-white/15 p-10 text-center shadow-xl backdrop-blur transition duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-white/20">
            <p className="text-lg font-semibold uppercase tracking-wide text-white/80">
              Money Donated
            </p>

           <h3 className="mt-4 text-6xl font-extrabold text-white">
              $0
            </h3>
          </div>

          <div className="rounded-3xl bg-white/15 p-10 text-center shadow-xl backdrop-blur transition duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-white/20">
            <p className="text-lg font-semibold uppercase tracking-wide text-white/80">
              Homes Brightened
            </p>

           <h3 className="mt-4 text-6xl font-extrabold text-white">
              0
            </h3>
          </div>
        </div>

        <Link
          href="/donate"
          className="mt-14 rounded-full bg-yellow-400 px-10 py-4 text-xl font-bold text-black shadow-xl transition-all duration-300 hover:scale-105 hover:bg-yellow-300"
        >
          Donate Now
        </Link>
      </section>

      {/* GALLERY */}
      <section className="flex flex-col items-center px-8 py-20">
       <h2 className="mb-14 text-5xl font-extrabold text-white">
          Our Work
        </h2>

        <div className="grid w-full max-w-7xl gap-12 md:grid-cols-2">
         <img
            src="/team/works1.jpg"
            alt="Our work"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl transition duration-300 hover:scale-[1.02]"
/>

          <img
            src="/team/works2.JPG"
            alt="Our work"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl transition duration-300 hover:scale-[1.02]"
/>
        </div>
      </section>
    </>
  );
}
            
