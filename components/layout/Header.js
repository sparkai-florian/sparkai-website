// components/Header.js
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
    { label: "Blogs", href: "/blog" },
  ];

  return (
    <header className="w-full py-4 bg-black sticky top-0 z-50">
      {/* Container matches HeroSection */}
      <div className="w-[85%] mx-auto flex items-center justify-between px-6 md:px-12">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="SparkAI Logo"
            width={140}
            height={40}
            priority
          />
        </Link>

        {/* Center: Navigation (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${
                pathname === item.href
                  ? "font-semibold text-white relative font-headline"
                  : "text-gray-300 hover:text-white font-paragraph"
              } transition-colors`}
              style={pathname === item.href ? {
                borderBottom: '2px solid',
                borderImage: 'linear-gradient(to right, #2B00FF, #00D4FF) 1'
              } : {}}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: CTA button */}
        <div className="hidden md:flex">
          <Link
            href="#book"
            className="bg-[#ec3481] text-white px-5 py-2 rounded-lg font-semibold shadow transition-all duration-200 hover:bg-[#ec3481]/90 font-subheadline group overflow-hidden"
          >
            <span className="block transition-transform duration-200 group-hover:scale-110">
              Book a Call
            </span>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {open && (
        <div className="md:hidden w-full bg-gray-900 border-t border-gray-800">
          <nav className="flex flex-col items-start gap-4 p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  pathname === item.href
                    ? "font-semibold text-white font-headline"
                    : "text-gray-300 hover:text-white font-paragraph"
                } transition-colors`}
              >
                {item.label}
              </Link>
            ))}

            {/* CTA also in mobile menu */}
            <Link
              href="#book"
              className="mt-4 bg-[#ec3481] text-white px-5 py-2 rounded-lg font-semibold shadow transition-all duration-200 hover:bg-[#ec3481]/90 font-subheadline group overflow-hidden"
            >
              <span className="block transition-transform duration-200 group-hover:scale-110">
                Book a Call
              </span>
            </Link>



          </nav>
        </div>
      )}
    </header>
  );
}
