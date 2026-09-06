"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Manrope, Allura } from "next/font/google";
import TextLoop from "./TextLoop";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-allura",
});

interface FurnitureItem {
  id: string;
  title: string;
  linkText: string;
  image: string;
}

interface FurnitureData {
  header: {
    titlePart1: string;
    stylishWord: string;
    titlePart2: string;
    description: string;
  };
  items: FurnitureItem[];
}

export default function FurnitureCollection() {
  const [data, setData] = useState<FurnitureData | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHoveringScrollZone, setIsHoveringScrollZone] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetch("/info.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Server returned status ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setData(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleContainerClick = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 360,
        behavior: "smooth",
      });
    }
  };

  if (!data) return null;

  return (
    <section
      className={`${manrope.className} ${manrope.variable} ${allura.variable} bg-[#0c0c0b] text-white w-full overflow-hidden select-none`}
    >
      {/* Top Content Header */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
        {/* Title */}
        <div className="md:col-span-6">
          <h2 className="text-4xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            {data.header.titlePart1}{" "}
            <span className="font-[family-name:var(--font-allura)] font-normal text-5xl sm:text-5xl lg:text-6xl text-amber-100/90 px-1">
              {data.header.stylishWord}
            </span>{" "}
            <br />
            {data.header.titlePart2}{" "}
          </h2>
        </div>

        {/* Decorative slashes & description */}
        <div className="md:col-span-6 flex flex-col gap-3">
          <div className="text-amber-100/30 text-xl tracking-[0.3em] font-mono overflow-hidden whitespace-nowrap">
            ////////////////////////////////////////
          </div>
          <p className="text-sm sm:text-base text-gray-400 max-w-md leading-relaxed">
            {data.header.description}
          </p>
        </div>
      </div>

      {/* Interactive Horizontal Scroll Area */}
      <div
        className="relative cursor-none py-6"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHoveringScrollZone(true)}
        onMouseLeave={() => setIsHoveringScrollZone(false)}
        onClick={handleContainerClick}
      >
        {/* Custom Follow Cursor Circle */}
        {isHoveringScrollZone && (
          <div
            className="pointer-events-none fixed z-50 flex items-center justify-center w-24 h-24 rounded-full bg-amber-100 text-[#0c0c0b] font-bold text-sm tracking-wider shadow-2xl transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${cursorPos.x}px`,
              top: `${cursorPos.y}px`,
              position: "absolute",
            }}
          >
            View →
          </div>
        )}

        {/* Scrollable Row */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto no-scrollbar px-6 md:px-16 scroll-smooth pb-8"
        >
          {data.items.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[280px] sm:w-[340px] bg-[#d9d5cb] text-[#0c0c0b] rounded-3xl p-6 flex flex-col justify-between h-[420px] sm:h-[460px] shadow-lg"
            >
              {/* Product Image from Public Folder */}
              <div className="relative w-full h-[260px] sm:h-[290px] flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 280px, 340px"
                  className="object-contain p-2"
                />
              </div>

              {/* Card Footer */}
              <div className="mt-4 flex items-end justify-between border-t border-black/10 pt-4">
                <p className="text-xs sm:text-sm font-medium max-w-[200px] leading-snug">
                  {item.title}
                </p>
                <span className="text-xs font-bold tracking-tight whitespace-nowrap hover:underline">
                  {item.linkText}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Text Loop Ribbon */}
      <div className="bg-[#d0cbbe]">
        <TextLoop
          text="unique collection"
          shape="line"
          speed={70}
          separator="//"
          fontSize={40}
          fontWeight={800}
          color="#0c0c0b"
          ribbon={false}
        />
      </div>
    </section>
  );
}
