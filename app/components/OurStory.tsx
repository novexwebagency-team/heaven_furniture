"use client";

import { useEffect, useRef } from "react";
import { Manrope, Allura } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-allura",
});

export default function OurStory() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gsap-reveal",
        {
          y: 45,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true, // Triggers animation once upon first scroll and kills trigger
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${manrope.className} ${allura.variable} relative min-h-screen bg-[#F4F0E8] px-6 py-16 sm:px-10 lg:px-20 lg:py-24 text-[#172C2A] overflow-hidden`}
    >
      <div className="mx-auto max-w-7xl">
        {/* =========================================
            TOP HEADER & QUOTE SECTION
        ========================================== */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          {/* Eyebrow Label */}
          <div className="lg:col-span-3">
            <div className="gsap-reveal flex items-center gap-3 text-md font-semibold uppercase tracking-widest text-[#172C2A]/80">
              <span>OUR STORY</span>
              <span className="tracking-[0.2em] text-[#172C2A]">------</span>
            </div>
          </div>

          {/* Main Quote & Description Block */}
          <div className="lg:col-span-9 lg:text-right">
            <h2 className="gsap-reveal text-3xl font-semibold leading-[1.5] tracking-tight sm:text-4xl md:text-4xl lg:text-[40px]">
              “Furniture is more than function; it is a reflection of{" "}
              <span className="font-[family-name:var(--font-allura)] font-normal text-4xl sm:text-5xl md:text-6xl text-[#172C2A] px-1 inline-block">
                lifestyle,
              </span>
              <span className="font-[family-name:var(--font-allura)] font-normal text-4xl sm:text-5xl md:text-6xl text-[#172C2A] px-1 inline-block">
                taste,
              </span>{" "}
              and{" "}
              <span className="font-[family-name:var(--font-allura)] font-normal text-4xl sm:text-5xl md:text-6xl text-[#172C2A] px-1 inline-block">
                comfort.”
              </span>
            </h2>

            <p className="gsap-reveal mt-6 max-w-3xl text-sm leading-relaxed text-[#3B4D4B] sm:text-base md:text-lg lg:ml-auto">
              Since 2020, Heaven Furniture Mart has been crafting bespoke
              furniture in Chattogram, combining thoughtful design, premium
              materials, and skilled craftsmanship to create pieces made around
              the way you live.
            </p>
          </div>
        </div>

        {/* =========================================
            MIDDLE STATS GRID
        ========================================== */}
        <div className="mt-16 grid grid-cols-1 gap-10 sm:mt-20 md:grid-cols-3 lg:gap-12">
          {/* Stat 1 */}
          <div className="gsap-reveal flex flex-col">
            <span className="text-4xl font-bold tracking-tight text-[#172C2A] sm:text-5xl">
              2020
            </span>
            <h3 className="mt-3 text-lg font-bold text-[#172C2A] sm:text-xl ">
              Founded in Chattogram
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[#526361] sm:text-sm md:text-[19px]">
              Heaven Furniture Mart began with a vision to create furniture
              shaped around individual spaces and lifestyles.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="gsap-reveal flex flex-col">
            <span className="text-4xl font-bold tracking-tight text-[#172C2A] sm:text-5xl">
              100s
            </span>
            <h3 className="mt-3 text-lg font-bold text-[#172C2A] sm:text-xl">
              Happy Homeowners
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[#526361] sm:text-sm md:text-[19.5px]">
              Trusted by hundreds of customers who have chosen Heaven for their
              homes and spaces.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="gsap-reveal flex flex-col">
            <span className="text-4xl font-bold tracking-tight text-[#172C2A] sm:text-5xl">
              5+
            </span>
            <h3 className="mt-3 text-lg font-bold text-[#172C2A] sm:text-xl">
              Years of Craftsmanship
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[#526361] sm:text-sm md:text-[19px]">
              From bespoke sofas and beds to dining and office furniture,
              crafted with attention to detail.
            </p>
          </div>
        </div>

        {/* =========================================
            BOTTOM TIMELINE BAR
        ========================================== */}
        <div className="gsap-reveal mt-16 rounded-[24px] bg-white p-6 shadow-sm sm:mt-20 sm:p-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-5 md:gap-4 md:items-center">
            {/* Year Item 1 */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl font-[900] text-[#000]">2020</span>
                <span className="hidden md:inline-block flex-1 text-center font-mono text-md tracking-widest text-[#000]">
                  - - - - - -
                </span>
              </div>
              <span className="mt-1 text-xs font-semibold text-[#172C2A] sm:text-sm md:text-[18px]">
                Founded <br />
                .
              </span>
            </div>

            {/* Year Item 2 */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl font-[900] text-[#000]">2021</span>
                <span className="hidden md:inline-block flex-1 text-center font-mono text-md tracking-widest text-[#000]">
                  - - - - - -
                </span>
              </div>
              <span className="mt-1 text-xs font-semibold text-[#172C2A] sm:text-sm md:text-[18px]">
                Agrabad <br /> Showroom
              </span>
            </div>

            {/* Year Item 3 */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl font-[900] text-[#000]">
                  2024–25
                </span>
                <span className="hidden md:inline-block flex-1 text-center font-mono text-md tracking-widest text-[#000]">
                  - - - - - -
                </span>
              </div>
              <span className="mt-1 text-xs font-semibold text-[#172C2A] sm:text-sm md:text-[18px]">
                Furniture <br /> Fair
              </span>
            </div>

            {/* Year Item 4 */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl font-[900] text-[#000]">2025</span>
                <span className="hidden md:inline-block flex-1 text-center font-mono text-md tracking-widest text-[#000]">
                  - - - - - -
                </span>
              </div>
              <span className="mt-1 text-xs font-semibold text-[#172C2A] sm:text-sm md:text-[18px]">
                Chamber of <br /> Commerce
              </span>
            </div>

            {/* Year Item 5 */}
            <div className="flex flex-col">
              <span className="text-xl font-[900] text-[#000]">2026</span>
              <span className="mt-1 text-xs font-semibold text-[#172C2A] sm:text-sm md:text-[18px]">
                BFIOA <br /> Recognition
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
