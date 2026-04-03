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
      }, (animatesHalo.length - index) * 400);
    });
  }

  return (
    <div
      className="flex min-h-screen min-w-screen flex-col items-center justify-center gap-16 overflow-hidden p-8 pb-20 font-[Cantarell] transition-colors duration-1000 sm:p-20"
      onClick={animate}
      style={{ backgroundColor, color: "#000000" }}
    >
      <div className="hidden sm:block">
        {!isLightOn && (
          <div className="absolute inset-0 z-50 cursor-pointer"></div>
        )}

        <div className="flex items-center justify-center">
          <svg
            ref={svgRef}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="size-156"
          >
            {/* BLUR FILTER */}
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="25" result="coloredBlur" />
              </filter>
            </defs>

            {/* SOFT GLOW (blurred halos) */}
            <circle
              cx="256"
              cy="200"
              r="120"
              fill="#f5c211"
              opacity="0"
              filter="url(#glow)"
            >
              <animate
                data-group="halo"
                attributeName="opacity"
                values="0;0.6"
                begin="indefinite"
                dur="0.6s"
                fill="freeze"
              />
            </circle>

            <circle
              cx="256"
              cy="200"
              r="180"
              fill="#f5c211"
              opacity="0"
              filter="url(#glow)"
            >
              <animate
                data-group="halo"
                attributeName="opacity"
                values="0;0.3"
                begin="indefinite"
                dur="0.8s"
                fill="freeze"
              />
            </circle>

            {/* BULB */}
            <circle cx="256" cy="200" r="80" fill="#333">
              <animate
                data-group="bulb"
                attributeName="fill"
                values="#333;#f5c211"
                begin="indefinite"
                dur="0.3s"
                fill="freeze"
              />
            </circle>

            {/* BASE */}
            <rect x="220" y="280" width="70" height="60" fill="#777">
              <animate
                data-group="bulb"
                attributeName="fill"
                values="#777;#ccc"
                begin="indefinite"
                dur="0.3s"
                fill="freeze"
              />
            </rect>

            {/* WIRE */}
            <line
              x1="256"
              y1="0"
              x2="256"
              y2="120"
              stroke="#888"
              strokeWidth="6"
            >
              <animate
                data-group="bulb"
                attributeName="stroke"
                values="#888;#ddd"
                begin="indefinite"
                dur="0.3s"
                fill="freeze"
              />
            </line>
          </svg>
        </div>
      </div>

      {/* TEXT */}
      <div className="text-center">
        <h2 className="text-3xl font-extrabold">
          Brightening futures with solar
        </h2>
        <p className="mt-4 text-lg">
          At Solar Reach, we’re committed to bringing sustainable,
          solar-powered light to areas where energy resources are scarce.
        </p>
      </div>
    </div>
  );
}
