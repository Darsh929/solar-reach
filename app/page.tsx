"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isLightOn, setIsLightOn] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#1F2025"); // DARK START

  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      animate();
    }, 1500); // Auto-turn on after 1.5s
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
      }, index * 200);
    });

    // Gradual background transition
    setTimeout(() => setBackgroundColor("#2E3240"), 300);
    setTimeout(() => setBackgroundColor("#3B4355"), 700);
    setTimeout(() => setBackgroundColor("#47516B"), 1200);
    setTimeout(() => setBackgroundColor("#4D5669"), 1800);
  }

  return (
    <div
      className="flex min-h-screen min-w-screen flex-col items-center justify-center gap-16 overflow-hidden p-8 pb-20 font-[Cantarell] transition-colors duration-1000 sm:p-20"
      onClick={animate}
      style={{ backgroundColor, color: "#000000" }}
    >
      <div className="flex items-center justify-center">
        <svg
          ref={svgRef}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-[300px] h-[300px]"
        >
          {/* HALO: concentric circles */}
          {[1, 2, 3].map((i) => (
            <circle
              key={i}
              cx="256"
              cy="256"
              r={50 + i * 40}
              fill={["#FFD700", "#FFC107", "#FFEB3B"][i - 1]}
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
            </circle>
          ))}

          {/* BULB */}
          <circle cx="256" cy="256" r="50" fill="#333">
            <animate
              data-group="bulb"
              attributeName="fill"
              values="#333;#FFD700"
              begin="indefinite"
              dur="0.4s"
              fill="freeze"
            />
          </circle>

          {/* BULB BASE */}
          <rect x="230" y="310" width="50" height="40" fill="#777">
            <animate
              data-group="bulb"
              attributeName="fill"
              values="#777;#CCC"
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
            y2="206"
            stroke="#888"
            strokeWidth="6"
          >
            <animate
              data-group="bulb"
              attributeName="stroke"
              values="#888;#DDD"
              begin="indefinite"
              dur="0.4s"
              fill="freeze"
            />
          </line>
        </svg>
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
