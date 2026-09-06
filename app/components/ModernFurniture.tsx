"use client";

import Image from "next/image";
import Link from "next/link";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export default function ModernFurniture() {
  return (
    <section
      className={`${manrope.className} w-full mt-24 mb-24 bg-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto select-none`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">

        {/* LEFT CARD - WOODEN STOOL */}
        <div className="lg:col-span-4 relative min-h-[420px] sm:min-h-[480px] lg:min-h-[500px] rounded-[28px] overflow-hidden bg-gray-100 flex flex-col justify-end p-6 sm:p-8 group shadow-sm">
          <Image
            src="/chair1.webp"
            alt="Wood metatrail's stool"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent z-10" />

          {/* Card Content */}
          <div className="relative z-20 flex flex-col items-start">
            <span className="inline-block px-3.5 py-1 mb-5 text-[11px] font-medium tracking-wide text-white bg-white/20 backdrop-blur-md border border-white/30 rounded-full">
              Product
            </span>
            <p className="text-xs sm:text-sm font-medium text-white/80 tracking-wider uppercase mb-1">
              Build your Home <br />
              LIKE YOU WANTED
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              Wood metatrail&apos;s <br />
              inside
            </h3>
          </div>
        </div>

        {/* RIGHT AREA - TEXT CONTENT & SOFA SHOWCASE */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#FAF9F6] lg:bg-transparent rounded-[28px] p-6 sm:p-8 lg:p-0 items-stretch">

          {/* CENTER TEXT BLOCK */}
          <div className="md:col-span-5 lg:col-span-5 flex flex-col justify-between py-2 lg:py-4 lg:pr-2">
            <div>
              {/* Badge */}
              <span className="inline-block px-4 py-1.5 mb-6 text-xs sm:text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-full shadow-2xs">
                Modern Furniture
              </span>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-extrabold text-gray-900 tracking-tight leading-[1.12] mb-8">
                When We Create Furniture, We Look For The Best
              </h2>
            </div>

            {/* Customize Yours Button */}
            <div>
              <Link
                href="#customize"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-black text-white hover:bg-zinc-800 transition-all duration-300 rounded-full text-sm font-semibold shadow-md hover:shadow-lg active:scale-95"
              >
                <span>Customize yours</span>
                <span className="text-base leading-none">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* RIGHT SOFA IMAGE */}
          <div className="md:col-span-7 lg:col-span-7 relative min-h-[320px] sm:min-h-[400px] lg:min-h-[500px] rounded-[28px] overflow-hidden bg-[#F3ECE6]">
            <Image
              src="/sofa.jpeg"
              alt="Modern living sofa and side table"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-center"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
