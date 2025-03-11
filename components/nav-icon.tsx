"use client";

import React, { useEffect, useRef } from "react";

export default function NavIcon({
  width,
  height,
  isHovered,
  className,
}: {
  width: number;
  height: number;
  isHovered: boolean;
  className?: string;
}) {
  const svgRef = useRef<SVGSVGElement>(null);

  function animate(group: string) {
    const animates = svgRef.current?.querySelectorAll(
      `animate[data-group="${group}"], animateTransform[data-group="${group}"]`,
    );
    animates?.forEach((animate) => {
      (animate as SVGAnimateElement).beginElement();
    });
  }

  useEffect(() => {
    if (isHovered) {
      animate("to_chevron");
    } else {
      animate("to_hamburger");
    }
  }, [isHovered]);

  return (
    <svg
      className={className}
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#241f31"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g style={{ transformOrigin: "12px 12px" }}>
        <line
          x1="4"
          x2="20"
          y1="12"
          y2="12"
          style={{ transformOrigin: "12px 12px" }}
        >
          <animate
            data-group="to_chevron"
            attributeName="x2"
            values="20;9"
            begin="indefinite"
            dur="0.2s"
            fill="freeze"
            keyTimes="0; 1"
            calcMode="spline"
            keySplines="0.87 0 0.13 1"
          />
          <animate
            data-group="to_hamburger"
            attributeName="x2"
            values="9;20"
            begin="indefinite"
            dur="0.2s"
            fill="freeze"
            keyTimes="0; 1"
            calcMode="spline"
            keySplines="0.87 0 0.13 1"
          />
          <animate
            data-group="to_chevron"
            attributeName="opacity"
            values="1;0"
            begin="indefinite"
            dur="0.2s"
            fill="freeze"
            keyTimes="0; 1"
            calcMode="spline"
            keySplines="0.42 0 1 1"
          />
          <animate
            data-group="to_hamburger"
            attributeName="opacity"
            values="0;1"
            begin="indefinite"
            dur="0.2s"
            fill="freeze"
            keyTimes="0; 1"
            calcMode="spline"
            keySplines="0 0 0.58 1"
          />
          <animate
            data-group="to_chevron"
            attributeName="x1"
            values="4;9"
            begin="indefinite"
            dur="0.2s"
            fill="freeze"
            keyTimes="0; 1"
            calcMode="spline"
            keySplines="0.87 0 0.13 1"
          />
          <animate
            data-group="to_hamburger"
            attributeName="x1"
            values="9;4"
            begin="indefinite"
            dur="0.2s"
            fill="freeze"
            keyTimes="0; 1"
            calcMode="spline"
            keySplines="0.87 0 0.13 1"
          />
        </line>
        <line
          x1="4"
          x2="20"
          y1="6"
          y2="6"
          style={{ transformOrigin: "12px 6px" }}
        >
          <animate
            data-group="to_chevron"
            attributeName="x1"
            values="4;9"
            begin="indefinite"
            dur="0.2s"
            fill="freeze"
            keyTimes="0; 1"
            calcMode="spline"
            keySplines="0.87 0 0.13 1"
          />
          <animate
            data-group="to_hamburger"
            attributeName="x1"
            values="9;4"
            begin="indefinite"
            dur="0.2s"
            fill="freeze"
            keyTimes="0; 1"
            calcMode="spline"
            keySplines="0.87 0 0.13 1"
          />
          <animate
            data-group="to_chevron"
            attributeName="y1"
            values="6;12"
            begin="indefinite"
            dur="0.2s"
            fill="freeze"
            keyTimes="0; 1"
            calcMode="spline"
            keySplines="0.87 0 0.13 1"
          />
          <animate
            data-group="to_hamburger"
            attributeName="y1"
            values="12;6"
            begin="indefinite"
            dur="0.2s"
            fill="freeze"
            keyTimes="0; 1"
            calcMode="spline"
            keySplines="0.87 0 0.13 1"
          />
          <animate
            data-group="to_chevron"
            attributeName="x2"
            values="20;15"
            begin="indefinite"
            dur="0.2s"
            fill="freeze"
            keyTimes="0; 1"
            calcMode="spline"
            keySplines="0.87 0 0.13 1"
          />
          <animate
            data-group="to_hamburger"
            attributeName="x2"
            values="15;20"
            begin="indefinite"
            dur="0.2s"
            fill="freeze"
            keyTimes="0; 1"
            calcMode="spline"
            keySplines="0.87 0 0.13 1"
          />
        </line>
        <line
          x1="4"
          x2="20"
          y1="18"
          y2="18"
          style={{ transformOrigin: "12px 18px" }}
        >
          <animate
            data-group="to_chevron"
            attributeName="x1"
            values="4;9"
            begin="indefinite"
            dur="0.2s"
            fill="freeze"
            keyTimes="0; 1"
            calcMode="spline"
            keySplines="0.87 0 0.13 1"
          />
          <animate
            data-group="to_hamburger"
            attributeName="x1"
            values="9;4"
            begin="indefinite"
            dur="0.2s"
            fill="freeze"
            keyTimes="0; 1"
            calcMode="spline"
            keySplines="0.87 0 0.13 1"
          />
          <animate
            data-group="to_chevron"
            attributeName="y1"
            values="18;12"
            begin="indefinite"
            dur="0.2s"
            fill="freeze"
            keyTimes="0; 1"
            calcMode="spline"
            keySplines="0.87 0 0.13 1"
          />
          <animate
            data-group="to_hamburger"
            attributeName="y1"
            values="12;18"
            begin="indefinite"
            dur="0.2s"
            fill="freeze"
            keyTimes="0; 1"
            calcMode="spline"
            keySplines="0.87 0 0.13 1"
          />
          <animate
            data-group="to_chevron"
            attributeName="x2"
            values="20;15"
            begin="indefinite"
            dur="0.2s"
            fill="freeze"
            keyTimes="0; 1"
            calcMode="spline"
            keySplines="0.87 0 0.13 1"
          />
          <animate
            data-group="to_hamburger"
            attributeName="x2"
            values="15;20"
            begin="indefinite"
            dur="0.2s"
            fill="freeze"
            keyTimes="0; 1"
            calcMode="spline"
            keySplines="0.87 0 0.13 1"
          />
        </line>
        <animateTransform
          data-group="to_chevron"
          type="rotate"
          attributeName="transform"
          values="0;-90"
          begin="indefinite"
          dur="0.2s"
          keyTimes="0; 1"
          calcMode="spline"
          keySplines="0.42 0 0.58 1"
          fill="freeze"
        />
        <animateTransform
          data-group="to_hamburger"
          type="rotate"
          attributeName="transform"
          values="-90;0"
          begin="indefinite"
          dur="0.2s"
          keyTimes="0; 1"
          calcMode="spline"
          keySplines="0.42 0 0.58 1"
          fill="freeze"
        />
      </g>
    </svg>
  );
}
