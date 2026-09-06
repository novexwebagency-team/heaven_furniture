"use client";

import { useState } from "react";
import Link from "next/link";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
    setEmail("");
  };

  return (
    <footer
      className={`${manrope.className} w-full bg-[#f5f1eb] p-3 sm:p-5 lg:p-8 select-none`}
    >
      {/* Dark Main Container with Rounded Corners */}
      <div className="mx-auto max-w-7xl rounded-[24px] sm:rounded-[32px] bg-[#140c0a] px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16 text-white shadow-2xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 items-start">

          {/* ==================== 1. NEWSLETTER ==================== */}
          <div className="lg:col-span-4">
            <h3 className="text-base sm:text-lg font-medium tracking-tight text-white mb-4">
              Subscribe to our newsletter.
            </h3>
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 max-w-md"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="hello@gmail.com"
                required
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white/20 transition-colors"
              />
              <button
                type="submit"
                className="rounded-xl bg-[#f8dfcb] px-5 py-2.5 text-xs font-semibold text-[#140c0a] hover:bg-[#f2d1b7] transition-all duration-200 shrink-0 cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>

          {/* ==================== 2. NAVIGATION ==================== */}
          <div className="lg:col-span-2">
            <span className="block text-[11px] font-semibold tracking-wider text-neutral-400 uppercase mb-4">
              Navigation
            </span>
            <ul className="space-y-3">
              {["Portfolio", "Blog", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-normal text-neutral-200 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ==================== 3. LEGAL ==================== */}
          <div className="lg:col-span-2">
            <span className="block text-[11px] font-semibold tracking-wider text-neutral-400 uppercase mb-4">
              Legal
            </span>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#privacy"
                  className="text-sm font-normal text-neutral-200 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#terms"
                  className="text-sm font-normal text-neutral-200 hover:text-white transition-colors"
                >
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* ==================== 4. SOCIALS & CONTACT ==================== */}
          <div className="lg:col-span-4 space-y-6">

            {/* Social Icons */}
            <div>
              <span className="block text-[11px] font-semibold tracking-wider text-neutral-400 uppercase mb-3">
                Socials
              </span>
              <div className="flex items-center gap-2">
                {/* Facebook Icon */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-neutral-300 hover:bg-white/10 hover:text-white transition-all"
                >
                  <svg
                    className="h-4 w-4 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Instagram Icon */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-neutral-300 hover:bg-white/10 hover:text-white transition-all"
                >
                  <svg
                    className="h-4 w-4 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* YouTube Icon */}
                <a
                  href="#"
                  aria-label="YouTube"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-neutral-300 hover:bg-white/10 hover:text-white transition-all"
                >
                  <svg
                    className="h-4 w-4 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Email Address */}
            <div>
              <span className="block text-[11px] font-semibold tracking-wider text-neutral-400 uppercase mb-1">
                Email
              </span>
              <a
                href="mailto:heavenfurnituremart@gmail.com"
                className="text-base sm:text-lg font-medium text-white hover:underline decoration-neutral-500 underline-offset-4 transition-all"
              >
                heavenfurnituremart@gmail.com
              </a>
            </div>

            {/* Phone Number */}
            <div>
              <span className="block text-[11px] font-semibold tracking-wider text-neutral-400 uppercase mb-1">
                Phone
              </span>
              <a
                href="tel:+8801960481983"
                className="text-lg sm:text-xl font-normal tracking-tight text-white hover:underline decoration-neutral-500 underline-offset-4 transition-all"
              >
                +880 1960-481983
              </a>
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}
