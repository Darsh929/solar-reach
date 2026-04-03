"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isLightOn, setIsLightOn] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#4D5669");

  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 640px)").matches;
    if (isMobile || window.location.href.includes("#")) {
      setBackgroundColor("#4D5669");
    }
  }, []);

  function animate() {
    if (isLightOn) return;
    setIsLightOn(true);
    const animatesBulb = svgRef.current?.querySelectorAll(
      `animate[data-group="bulb"]`
    );
    const animatesHalo = svgRef.current?.querySelectorAll(
      `animate[data-group="halo"]`
    );

    animatesBulb?.forEach((animate) => {
      (animate as SVGAnimateElement).beginElement();
    });

    animatesHalo?.forEach((animate, index) => {
      setTimeout(() => {
        (animate as SVGAnimateElement).beginElement();
      }, (animatesHalo.length - index) * 500);
    });

    // Keep background #4D5669 after animation
    setTimeout(() => setBackgroundColor("#4D5669"), 1750);
  }

  return (
    <>
      <div
        className="flex min-h-screen min-w-screen flex-col items-center justify-center gap-16 overflow-hidden p-8 pb-20 font-[Cantarell] transition-colors duration-1000 sm:p-20"
        onClick={animate}
        style={{ backgroundColor, color: "#000000" }}
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
            {/* ...rest of the SVG... */}
          </svg>
        </div>

        <div className="hidden sm:block">
          {!isLightOn && (
            <div className="absolute inset-0 z-50 cursor-pointer"></div>
          )}
          <div className="-mt-20 flex min-h-screen min-w-screen flex-col items-start justify-center sm:items-start">
            <div className="relative flex h-full w-full items-center justify-center">
              <svg
                ref={svgRef}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                overflow="visible"
                className="size-156"
              >
                {/* Halo and bulb animation SVG paths */}
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center gap-8 text-center sm:-mt-[70px]">
          <h2 className="max-w-(--breakpoint-md) text-2xl font-extrabold sm:text-3xl">
            Brightening futures with solar
          </h2>
          <p className="max-w-(--breakpoint-md) text-lg font-medium sm:text-xl">
            At Solar Reach, we’re committed to bringing sustainable,
            solar-powered light to areas where energy resources are scarce.
          </p>
        </div>
      </div>
    </>
  );
}
