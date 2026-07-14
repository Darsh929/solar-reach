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
    <main
      className="space-y-20 transition-colors duration-1000"
      style={{ backgroundColor, color: "#fff" }}
    >
      {/* HERO */}
      <section
        className="flex min-h-[85vh] flex-col items-center justify-center gap-8 overflow-hidden px-8 pt-16 pb-12 font-[Cantarell] sm:px-20"
        onClick={animate}
      >
        <div className="relative flex items-center justify-center">
<svg
  ref={svgRef}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 700 700"
  className="h-[430px] w-[430px] rotate-180 md:h-[500px] md:w-[500px]"
>
            {/* Halo */}
            {[
              { r: 180, fill: "#FFEB3B", opacity: 0.3 },
              { r: 230, fill: "#FFC107", opacity: 0.25 },
              { r: 280, fill: "#FFD700", opacity: 0.2 },
            ].map((halo, i) => (
              <circle
                key={i}
                cx="350"
                cy="350"
                r={halo.r}
                fill={halo.fill}
                opacity={0}
              >
                <animate
                  data-group="halo"
                  attributeName="opacity"
                  values={`0;${halo.opacity}`}
                  begin="indefinite"
                  dur="0.5s"
                  fill="freeze"
                />
              </circle>
            ))}
            {/* Hanging Wire */}
            <line
              x1="350"
              y1="0"
              x2="350"
              y2="155"
              stroke="#8A8A8A"
              strokeWidth="8"
            >
              <animate
                data-group="bulb"
                attributeName="stroke"
                values="#8A8A8A;#E8E8E8"
                begin="indefinite"
                dur="0.4s"
                fill="freeze"
              />
            </line>

            {/* Socket Cap */}
            <rect
              x="334"
              y="155"
              width="32"
              height="22"
              rx="3"
              fill="#777"
            >
              <animate
                data-group="bulb"
                attributeName="fill"
                values="#777;#CFCFCF"
                begin="indefinite"
                dur="0.4s"
                fill="freeze"
              />
            </rect>

            {/* Glass Bulb */}
            <path
              d="
                M350 180
                C288 180 240 228 240 292
                C240 340 262 378 292 405
                C312 424 322 442 322 466
                L322 486
                L378 486
                L378 466
                C378 442 388 424 408 405
                C438 378 460 340 460 292
                C460 228 412 180 350 180
                Z
              "
              fill="#2E2E2E"
              stroke="#707070"
              strokeWidth="5"
            >
              <animate
                data-group="bulb"
                attributeName="fill"
                values="#2E2E2E;#FFD84D"
                begin="indefinite"
                dur="0.4s"
                fill="freeze"
              />
              <animate
                data-group="bulb"
                attributeName="stroke"
                values="#707070;#FFF4AF"
                begin="indefinite"
                dur="0.4s"
                fill="freeze"
              />
            </path>

            {/* Glass Highlight */}
            <path
              d="
                M300 230
                C280 250 270 285 276 325
              "
              fill="none"
              stroke="rgba(255,255,255,.45)"
              strokeWidth="10"
              strokeLinecap="round"
            />

            {/* Filament Supports */}
            <line
              x1="332"
              y1="360"
              x2="332"
              y2="315"
              stroke="#777"
              strokeWidth="4"
            >
              <animate
                data-group="bulb"
                attributeName="stroke"
                values="#777;#FFF2A6"
                begin="indefinite"
                dur="0.4s"
                fill="freeze"
              />
            </line>

            <line
              x1="368"
              y1="360"
              x2="368"
              y2="315"
              stroke="#777"
              strokeWidth="4"
            >
              <animate
                data-group="bulb"
                attributeName="stroke"
                values="#777;#FFF2A6"
                begin="indefinite"
                dur="0.4s"
                fill="freeze"
              />
            </line>

            {/* Filament */}
            <path
              d="M332 315 Q350 295 368 315"
              fill="none"
              stroke="#888"
              strokeWidth="4"
              strokeLinecap="round"
            >
              <animate
                data-group="bulb"
                attributeName="stroke"
                values="#888;#FFF176"
                begin="indefinite"
                dur="0.4s"
                fill="freeze"
              />
            </path>

            {/* Metal Screw Base */}
            <rect
              x="322"
              y="486"
              width="56"
              height="58"
              rx="6"
              fill="#8A8A8A"
            >
              <animate
                data-group="bulb"
                attributeName="fill"
                values="#8A8A8A;#D7D7D7"
                begin="indefinite"
                dur="0.4s"
                fill="freeze"
              />
            </rect>

            {[498, 510, 522, 534].map((y) => (
              <line
                key={y}
                x1="322"
                y1={y}
                x2="378"
                y2={y}
                stroke="#5D5D5D"
                strokeWidth="3"
              >
                <animate
                  data-group="bulb"
                  attributeName="stroke"
                  values="#5D5D5D;#F0F0F0"
                  begin="indefinite"
                  dur="0.4s"
                  fill="freeze"
                />
              </line>
            ))}

            {/* Bottom Contact */}
            <rect
              x="340"
              y="544"
              width="20"
              height="10"
              rx="2"
              fill="#999"
            >
              <animate
                data-group="bulb"
                attributeName="fill"
                values="#999;#EEE"
                begin="indefinite"
                dur="0.4s"
                fill="freeze"
              />
            </rect>
          </svg>
        </div>

        <div className="max-w-4xl text-center">
          <h2 className="text-4xl font-extrabold">
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
      </section>
       {/* IMPACT */}
      <section className="flex flex-col items-center px-8 py-20">
        <h2 className="mb-14 text-5xl font-extrabold">
          Our Impact
        </h2>

        <div className="grid w-full max-w-4xl gap-10 md:grid-cols-2">
          <div className="rounded-3xl bg-white/15 p-10 text-center shadow-xl backdrop-blur transition duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-white/20">
            <p className="text-lg font-semibold uppercase tracking-wide text-white/80">
              Money Donated
            </p>

            <h3 className="mt-4 text-6xl font-extrabold">
              $0
            </h3>
          </div>

          <div className="rounded-3xl bg-white/15 p-10 text-center shadow-xl backdrop-blur transition duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-white/20">
            <p className="text-lg font-semibold uppercase tracking-wide text-white/80">
              Homes Brightened
            </p>

            <h3 className="mt-4 text-6xl font-extrabold">
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
        <h2 className="mb-14 text-5xl font-extrabold">
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
    </main>
  );
}
            
