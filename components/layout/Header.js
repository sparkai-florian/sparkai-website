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
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <header className="w-full py-1">
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
                  ? "font-semibold text-black border-b-2 border-[#2B00FF]"
                  : "text-gray-700 hover:text-black"
              } transition-colors`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: CTA button */}
        <div className="hidden md:flex">
          <Link
            href="#book"
            className="border-2 border-[#2B00FF] text-[#2B00FF] px-5 py-2 rounded-lg font-semibold shadow transition duration-200 hover:bg-[#2B00FF] hover:text-white"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {open && (
        <div className="md:hidden w-full bg-white border-t">
          <nav className="flex flex-col items-start gap-4 p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  pathname === item.href
                    ? "font-semibold text-black"
                    : "text-gray-700 hover:text-black"
                } transition-colors`}
              >
                {item.label}
              </Link>
            ))}

            {/* CTA also in mobile menu */}
            <Link
              href="#book"
              className="mt-4 border-2 border-[#2B00FF] text-[#2B00FF] px-5 py-2 rounded-lg font-semibold shadow transition duration-200 hover:bg-[#2B00FF] hover:text-white"
            >
              Book a Call
            </Link>



          </nav>
        </div>
      )}
    </header>
  );
}
