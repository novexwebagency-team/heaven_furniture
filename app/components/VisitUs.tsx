"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Manrope, Allura } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import info from "@/public/info.json";

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

export default function VisitUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".visit-gsap-reveal",
        {
          y: 60,
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
            once: true, // Animation runs only once and stays permanently visible
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const visitData = info.visit;

  const handleMapRedirect = () => {
    window.open(visitData.mapUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      ref={sectionRef}
      className={`${manrope.className} ${manrope.variable} ${allura.variable} relative min-h-screen bg-[#F4F0E8] px-5 py-16 sm:px-8 lg:px-16 lg:py-24 text-[#172C2A] overflow-hidden`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          {/* =========================================
              LEFT COLUMN: INFORMATION & DETAILS
          ========================================== */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* EYEBROW */}
            <p className="visit-gsap-reveal text-xs font-semibold uppercase tracking-[0.18em] text-[#526361]">
              {visitData.eyebrow}
            </p>

            {/* MAIN TITLE */}
            <h2 className="visit-gsap-reveal mt-2 text-4xl font-bold tracking-tight text-[#172C2A] sm:text-5xl lg:text-[56px] leading-[1.1]">
              {visitData.title.main}{" "}
              <span className="font-[family-name:var(--font-allura)] font-normal text-5xl sm:text-6xl lg:text-[68px] text-[#2C4845] px-1">
                {visitData.title.accent}
              </span>
            </h2>

            {/* LOCATION WITH PIN ICON */}
            <div className="visit-gsap-reveal mt-4 flex items-center gap-2 text-xs font-semibold text-[#172C2A] sm:text-sm">
              <svg
                className="h-4 w-4 shrink-0 text-[#C16240]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{visitData.address}</span>
            </div>

            {/* CARD 1: SHOWROOM HOURS */}
            <div className="visit-gsap-reveal mt-8 rounded-[16px] bg-[#EAE4D8]/80 p-5 sm:p-6 backdrop-blur-sm border border-black/5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#172C2A]">
                SHOWROOM HOURS
              </h3>
              <p className="mt-2 text-xs font-normal italic text-[#4A5755] sm:text-sm">
                {visitData.hours}
              </p>
            </div>

            {/* CARD 2: GET IN TOUCH */}
            <div className="visit-gsap-reveal mt-4 rounded-[16px] bg-[#EAE4D8]/80 p-5 sm:p-6 backdrop-blur-sm border border-black/5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#172C2A]">
                GET IN TOUCH
              </h3>
              <div className="mt-3 space-y-2 text-xs sm:text-sm text-[#172C2A]">
                {/* Phone */}
                <div className="flex items-center gap-2.5">
                  <svg
                    className="h-4 w-4 shrink-0 text-[#172C2A]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href={`tel:${visitData.phone}`}
                    className="hover:underline font-medium"
                  >
                    {visitData.phone}
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-2.5">
                  <svg
                    className="h-4 w-4 shrink-0 text-[#172C2A]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href={`mailto:${visitData.email}`}
                    className="hover:underline font-medium"
                  >
                    {visitData.email}
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 3: DARK AMENITIES CARD */}
            <div className="visit-gsap-reveal mt-4 rounded-[16px] bg-[#221A15] p-5 sm:p-6 text-white shadow-lg">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#D5C2B1]">
                SHOWROOM FEATURES & AMENITIES
              </h3>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 text-[12px] sm:text-[13px] text-[#E0D8D0]">
                {visitData.features.map((feature: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#D5C2B1]/40 text-[9px]">
                      ✓
                    </span>
                    <span className="italic font-light">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* =========================================
              RIGHT COLUMN: SHOWROOM IMAGE & MAP BUTTON
          ========================================== */}
          <div className="visit-gsap-reveal lg:col-span-6">
            <div className="relative h-[400px] sm:h-[500px] lg:h-[560px] w-full overflow-hidden rounded-[24px] shadow-xl border border-black/10">
              <Image
                src={visitData.image}
                alt="Heaven Furniture Mart Showroom Storefront"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />

              {/* FLOATING MAP BUTTON */}
              <button
                type="button"
                onClick={handleMapRedirect}
                className="absolute bottom-5 right-5 z-20 flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-[#172C2A] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#F4F0E8] active:scale-95"
              >
                <svg
                  className="h-3.5 w-3.5 transform -rotate-45"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                <span>MAP</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
