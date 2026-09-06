"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
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

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-gsap-text",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className={`${manrope.className} ${manrope.variable} ${allura.variable} relative min-h-screen bg-[#F4F0E8] p-3 sm:p-4 lg:p-5`}
    >
      {/* HERO CONTAINER */}
      <div className="relative min-h-[calc(100vh-24px)] overflow-hidden rounded-[20px] sm:min-h-[calc(100vh-32px)] sm:rounded-[22px] lg:min-h-[calc(100vh-40px)] lg:rounded-[24px]">
        {/* BACKGROUND IMAGE */}
        <Image
          src="/hero.webp"
          alt="Luxury living room furniture by Heaven Furniture Mart"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* OVERLAYS */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-x-0 bottom-0 h-[75%] bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* =========================================
            DESKTOP SIDEBAR NAVIGATION
        ========================================== */}
        <aside className="absolute right-0 top-0 z-30 hidden w-[250px] rounded-bl-[32px] bg-[#F4F0E8] px-7 pb-8 pt-7 lg:block xl:w-[270px] xl:px-8 xl:pb-9 xl:pt-8">
          {/* TOP-LEFT INVERTED CORNER */}
          <div
            className="pointer-events-none absolute -left-8 top-0 h-8 w-8"
            style={{
              background:
                "radial-gradient(circle at 0% 100%, transparent 30px, #F4F0E8 32.5px)",
            }}
          />

          {/* BOTTOM-RIGHT INVERTED CORNER */}
          <div
            className="pointer-events-none absolute -bottom-8 right-0 h-8 w-8"
            style={{
              background:
                "radial-gradient(circle at 0% 100%, transparent 30px, #F4F0E8 32.5px)",
            }}
          />

          {/* LOGO */}
          <Link
            href="/"
            className="hero-gsap-text relative z-10 inline-block transition-opacity duration-300 hover:opacity-80"
          >
            <Image
              src="/logo.webp"
              alt="Heaven Furniture Mart"
              width={180}
              height={70}
              priority
              className="h-auto w-[145px] xl:w-[165px]"
            />
          </Link>

          {/* NAVIGATION LINKS */}
          <nav className="relative z-10 mt-8">
            <ul className="space-y-4">
              {info.navigation.map((item) => (
                <li key={item.href} className="hero-gsap-text">
                  <Link
                    href={item.href}
                    className="group flex items-center text-[15px] font-medium tracking-tight text-[#172C2A] transition-colors duration-300 hover:text-[#315653]"
                  >
                    {/* Arrow icon reveals smoothly on hover */}
                    <span className="mr-2 inline-block -translate-x-2 opacity-0 text-[16px] transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100">
                      →
                    </span>
                    <span className="relative">
                      {item.label}
                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#315653] transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CONSULTATION BUTTON */}
          <div className="hero-gsap-text mt-8">
            <Link
              href="#consultation"
              className="relative z-10 inline-flex w-full items-center justify-center rounded-[10px] bg-[#315653] px-5 py-3 text-[14px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#214442] active:translate-y-0"
            >
              <span>Consultation</span>
              <span className="ml-2 text-base transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </aside>

        {/* =========================================
            MOBILE HEADER
        ========================================== */}
        <header className="absolute left-3 right-3 top-3 z-30 flex items-center justify-between rounded-[14px] bg-[#F4F0E8]/95 px-4 py-3 shadow-sm backdrop-blur-md lg:hidden">
          <Link href="/" className="transition-opacity hover:opacity-80">
            <Image
              src="/logo.webp"
              alt="Heaven Furniture Mart"
              width={150}
              height={60}
              priority
              className="h-auto w-[115px] sm:w-[130px]"
            />
          </Link>
          <Link
            href="#consultation"
            className="rounded-[8px] bg-[#315653] px-3.5 py-2 text-[11px] font-medium text-white hover:bg-[#214442] sm:px-4 sm:py-2.5 sm:text-sm"
          >
            Consultation →
          </Link>
        </header>

        {/* =========================================
            HERO CONTENT
        ========================================== */}
        <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-8 sm:px-8 sm:pb-10 md:px-10 md:pb-12 lg:max-w-[820px] lg:px-12 lg:pb-14 xl:max-w-[950px] xl:px-14 xl:pb-16 ">
          {/* Eyebrow */}
          <p className="hero-gsap-text mb-5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/90 sm:text-sm">
            {info.hero.eyebrow || "HEAVEN FURNITURE MART · CHITTAGONG"}
          </p>

          {/* Title */}
          <h1 className="hero-gsap-text max-w-[900px] text-[42px] font-bold leading-[0.8] tracking-tight text-white sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px]">
            Where Your{" "}
            <span className="font-[family-name:var(--font-allura)] font-normal tracking-normal text-white px-1 lg:text-[105px]">
              Space
            </span>
            <br />
            Finds Its{" "}
            <span className="font-[family-name:var(--font-allura)] font-normal tracking-normal text-white px-1 lg:text-[105px]">
              Character.
            </span>
          </h1>

          {/* Description */}
          <p className="hero-gsap-text mt-2 max-w-[620px] text-[13px] leading-[1.65] text-white/90 sm:text-sm md:text-[17px]">
            {info.hero.description ||
              "From timeless living spaces to one-of-a-kind pieces, we design and craft furniture around your space, your taste, and the way you live. With premium materials, skilled craftsmanship, and a showroom in Agrabad, every piece is made to feel truly yours."}
          </p>

          {/* CTA Button */}
          <div className="hero-gsap-text mt-6 sm:mt-7">
            <Link
              href="#consultation"
              className="inline-flex items-center rounded-[8px] bg-[#315653] px-5 py-3 text-[13px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#214442] sm:px-6 sm:py-3.5 sm:text-sm"
            >
              <span>
                {info.hero.cta || "Request a Free Consultation"}
              </span>
              <span className="ml-2 text-base">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
