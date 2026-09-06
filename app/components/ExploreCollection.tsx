"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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

interface SubCategory {
  id: string;
  name: string;
  image: string;
}

interface Category {
  id: string;
  title: string;
  count: string;
  bgImage: string;
  subCategories: SubCategory[];
}

const CATEGORIES: Category[] = [
  {
    id: "living-room",
    title: "LIVING ROOM",
    count: "35 Items",
    bgImage: "/living-room.jpeg",
    subCategories: [
      { id: "sofa", name: "Sofa Sets", image: "/sofa.jpeg" },
      { id: "center-table", name: "Center Tables", image: "/sofa.jpeg" },
      { id: "tv-unit", name: "TV Units", image: "/sofa.jpeg" },
      { id: "divan", name: "Divans", image: "/sofa.jpeg" },
    ],
  },
  {
    id: "bedroom",
    title: "BEDROOM",
    count: "35 Items",
    bgImage: "/bedroom.png",
    subCategories: [
      { id: "beds", name: "Luxury Beds", image: "/beds.jpeg" },
      { id: "wardrobes", name: "Wardrobes", image: "/beds.jpeg" },
      { id: "dressing", name: "Dressing Tables", image: "/beds.jpeg" },
      { id: "bedside", name: "Bedside Tables", image: "/beds.jpeg" },
    ],
  },
  {
    id: "dining",
    title: "DINING",
    count: "35 Items",
    bgImage: "/dining.jpeg",
    subCategories: [
      { id: "dining-set", name: "Dining Sets", image: "/categories/dining-set.webp" },
      { id: "chairs", name: "Dining Chairs", image: "/categories/chairs.webp" },
      { id: "cabinets", name: "Crockery Cabinets", image: "/categories/cabinets.webp" },
      { id: "buffet", name: "Buffet Tables", image: "/categories/buffet.webp" },
    ],
  },
  {
    id: "office-study",
    title: "OFFICE & STUDY",
    count: "35 Items",
    bgImage: "/office.jpeg",
    subCategories: [
      { id: "executive-desk", name: "Executive Desks", image: "/categories/executive-desk.webp" },
      { id: "office-chair", name: "Office Chairs", image: "/categories/office-chair.webp" },
      { id: "bookcases", name: "Bookcases", image: "/categories/bookcases.webp" },
      { id: "file-cabinets", name: "File Cabinets", image: "/categories/file-cabinets.webp" },
    ],
  },
];

const WHATSAPP_NUMBER = "8801700000000";

export default function ExploreCollection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>(null);
  const [hoveredSubCat, setHoveredSubCat] = useState<{
    id: string;
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".collection-reveal",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleWhatsAppRedirect = (catTitle: string, subName: string) => {
    const text = encodeURIComponent(
      `Hello! I am interested in exploring ${subName} under ${catTitle} from Heaven Furniture Mart.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  const handleMouseMove = (e: React.MouseEvent, subId: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoveredSubCat({
      id: subId,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      ref={sectionRef}
      className={`${manrope.className} ${manrope.variable} ${allura.variable} relative min-h-screen bg-[#F4F0E8] px-5 py-16 sm:px-8 lg:px-16 lg:py-24 text-[#172C2A] overflow-hidden`}
    >
      <div className="mx-auto max-w-7xl">
        {/* =========================================
            HEADER SECTION
        ========================================== */}
        <div className="max-w-3xl">
          <p className="collection-reveal mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#172C2A]/70 sm:text-sm">
            EXPLORE OUR COLLECTION
          </p>

          <h2 className="collection-reveal text-3xl font-bold tracking-tight text-[#172C2A] sm:text-5xl lg:text-[54px] leading-[1.15]">
            Made to Belong in Your{" "}
            <span className="font-[family-name:var(--font-allura)] font-normal text-4xl sm:text-6xl lg:text-[68px] text-[#2C4845] px-1">
              Space
            </span>
          </h2>

          <p className="collection-reveal mt-4 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed text-[#3B4D4B]">
            Explore thoughtfully crafted pieces for living, dining, sleeping, and
            working, each designed to complement the way you live.
          </p>
        </div>

        {/* =========================================
            CATEGORIES GRID
        ========================================== */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {CATEGORIES.map((category) => {
            const isHovered = hoveredCardId === category.id;
            const isMobileExpanded = expandedMobileId === category.id;
            const showSubGrid = isHovered || isMobileExpanded;

            return (
              <div
                key={category.id}
                className="collection-reveal group relative h-[450px] w-full overflow-hidden rounded-[24px] bg-[#2C332D] shadow-md transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl"
                onMouseEnter={() => setHoveredCardId(category.id)}
                onMouseLeave={() => {
                  setHoveredCardId(null);
                  setHoveredSubCat(null);
                }}
              >
                {/* DEFAULT BACKGROUND IMAGE */}
                <Image
                  src={category.bgImage}
                  alt={category.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={`object-cover object-center transition-transform duration-700 ease-out ${
                    showSubGrid ? "scale-105 blur-sm opacity-30" : "group-hover:scale-105"
                  }`}
                />

                {/* OVERLAY GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* MAIN CATEGORY DEFAULT CONTENT */}
                <div
                  className={`absolute inset-0 flex flex-col justify-between p-6 transition-all duration-500 ${
                    showSubGrid ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
                >
                  <div />
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                        {category.title}
                      </h3>
                      <p className="mt-1 text-md text-white/80">{category.count}</p>
                    </div>

                    {/* MOBILE / DESKTOP TRIGGER BUTTON */}
                    <button
                      type="button"
                      aria-label="Expand Subcategories"
                      onClick={() =>
                        setExpandedMobileId(isMobileExpanded ? null : category.id)
                      }
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#172C2A] backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white active:scale-95"
                    >
                      <span className="text-lg leading-none font-semibold">↗</span>
                    </button>
                  </div>
                </div>

                {/* SUB-CATEGORIES OVERLAY GRID (4-Card View) */}
                <div
                  className={`absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-[#8C6748]/10 to-[#3B1E06]/30 p-5 backdrop-blur-sm transition-all duration-500 ${
                    showSubGrid ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                  }`}
                >
                  {/* Category Title Header */}
                  <div className="flex items-center justify-between pb-2">
                    <h4 className="mt-4 text-xl font-bold tracking-wider text-white uppercase">
                      {category.title}
                    </h4>
                    {/* Mobile Collapse Button */}
                    <button
                      type="button"
                      onClick={() => setExpandedMobileId(null)}
                      className="block text-xs text-white/70 hover:text-white lg:hidden"
                    >
                      ✕ Close
                    </button>
                  </div>

                  {/* 2x2 Sub-Category Cards */}
                  <div className="grid grid-cols-2 gap-3 my-auto z-[10]">
                    {category.subCategories.map((sub) => (
                      <div
                        key={sub.id}
                        className="relative h-30 w-30 cursor-pointer overflow-hidden rounded-[14px] border border-white/20 transition-all duration-300 hover:scale-105 hover:border-white/50 hover:shadow-lg border-[3px]"
                        onMouseMove={(e) => handleMouseMove(e, sub.id)}
                        onMouseLeave={() => setHoveredSubCat(null)}
                        onClick={() =>
                          handleWhatsAppRedirect(category.title, sub.name)
                        }
                      >
                        <Image
                          src={sub.image}
                          alt={sub.name}
                          fill
                          sizes="150px"
                          className="object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 transition-opacity hover:bg-black/20" />
                        <span className="absolute bottom-2 left-2 right-2 text-[11px] font-semibold text-white drop-shadow-md">
                          {sub.name}
                        </span>

                      </div>
                    ))}
                  </div>

                  {/* Bottom Sub-Category Helper Note */}
                  <p className="text-center text-[11px] text-white/60">
                    Click any item to chat on WhatsApp
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
