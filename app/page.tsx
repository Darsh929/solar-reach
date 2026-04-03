"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isLightOn, setIsLightOn] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#1F2025"); // DARK START

  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // AUTO TURN ON after 1.5s
    const timer = setTimeout(() => {
      animate();
    }, 1500);

    return () => clearTimeout(timer);
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
      }, index * 200); // stagger for solid blocks
    });

    // Background transition to final color
    setTimeout(() => setBackgroundColor("#2E3240"), 300);
    setTimeout(() => setBackgroundColor("#3B4355"), 700);
    setTimeout(() => setBackgroundColor("#47516B"), 1200);
    setTimeout(() => setBackgroundColor("#4D5669"), 1800); // FINAL COLOR
  }

  return (
    <div
      className="flex min-h-screen min-w-screen flex-col items-center justify-center gap-16 overflow-hidden p-8 pb-20 font-[Cantarell] transition-colors duration-1000 sm:p-20"
      onClick={animate}
      style={{ backgroundColor, color: "#000000" }}
    >
      <div className="hidden sm:block">
        <div className="flex items-center justify-center">
          <svg
            ref={svgRef}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="size-156"
          >
            {/* BULB */}
            <rect x="176" y="120" width="160" height="160" fill="#333">
              <animate
                data-group="bulb"
                attributeName="fill"
                values="#333;#f5c211"
                begin="indefinite"
                dur="0.4s"
                fill="freeze"
              />
            </rect>

            {/* HALO / LIGHT SQUARES */}
            {[0, 1, 2].map((i) => (
              <rect
                key={i}
                x={120 - i * 20}
                y={60 - i * 20}
                width={272 + i * 40}
                height={272 + i * 40}
                fill="#f5c211"
                opacity="0"
              >
                <animate
                  data-group="halo"
                  attributeName="opacity"
                  values="0;1"
                  begin="indefinite"
                  dur="0.3s"
                  fill="freeze"
                />
              </rect>
            ))}

            {/* BASE */}
            <rect x="220" y="280" width="70" height="60" fill="#777">
              <animate
                data-group="bulb"
                attributeName="fill"
                values="#777;#ccc"
                begin="indefinite"
                dur="0.4s"
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
                dur="0.4s"
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
