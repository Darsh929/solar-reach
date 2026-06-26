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
            className="h-[430px] w-[430px] md:h-[500px] md:w-[500px]"
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

            {/* Bulb */}
            <ellipse cx="350" cy="360" rx="100" ry="120" fill="#333">
              <animate
                data-group="bulb"
                attributeName="fill"
                values="#333;#FFD700"
                begin="indefinite"
                dur="0.4s"
                fill="freeze"
              />
            </ellipse>

            {/* Neck */}
            <rect
              x="330"
              y="240"
              width="40"
              height="60"
              rx="6"
              fill="#777"
            >
              <animate
                data-group="bulb"
                attributeName="fill"
                values="#777;#CCC"
                begin="indefinite"
                dur="0.4s"
                fill="freeze"
              />
            </rect>

            {/* Wire */}
            <line
              x1="350"
              y1="240"
              x2="350"
              y2="0"
              stroke="#888"
              strokeWidth="8"
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
          <div className="flex aspect-[4/3] items-center justify-center rounded-3xl border-4 border-dashed border-white/30 bg-white/10 shadow-2xl transition duration-300 hover:scale-[1.02]">
            <p className="text-3xl font-bold text-white/60">
              Enter Image Here
            </p>
          </div>

          <div className="flex aspect-[4/3] items-center justify-center rounded-3xl border-4 border-dashed border-white/30 bg-white/10 shadow-2xl transition duration-300 hover:scale-[1.02]">
            <p className="text-3xl font-bold text-white/60">
              Enter Image Here
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
