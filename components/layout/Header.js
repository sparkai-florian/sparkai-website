'use client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    // Solutions is handled separately as a dropdown
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '/blog' },
  ];

  const solutions = [
    { label: 'Healthcare',    href: '/solutions/healthcare' },
    { label: 'Restaurant',    href: '/solutions/restaurant' },
    { label: 'Retail Store',  href: '/solutions/retail_store' },
    { label: 'E-commerce',    href: '/solutions/e_commerce' },
    { label: 'Travel Agency', href: '/solutions/travel_agency' },
    { label: 'Finance',       href: '/solutions/finance' },
    { label: 'Fashion Store', href: '/solutions/fashion_store' },
  ];

  const isActive = (href) => router.asPath === href;
  const isSolutionsActive = router.asPath.startsWith('/solutions');

  // Place Solutions dropdown right after "Services"
  const servicesIndex = navItems.findIndex((i) => i.href === '/services');
  const beforeItems = servicesIndex >= 0 ? navItems.slice(0, servicesIndex + 1) : navItems;
  const afterItems  = servicesIndex >= 0 ? navItems.slice(servicesIndex + 1) : [];

  return (
    <header className="w-full bg-black text-white px-6 py-4 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#d4ff00]">
          SparkAI
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium items-center">
          {/* Items before/including Services */}
          {beforeItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`transition hover:text-[#2B00FF] ${
                isActive(href) ? 'text-[#2B00FF] font-semibold' : 'text-white'
              }`}
            >
              {label}
            </Link>
          ))}

          {/* Solutions dropdown (non-clickable parent) */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
            }}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={open}
              className={`flex items-center gap-1 rounded-md px-1 py-0.5 transition ${
                isSolutionsActive ? 'text-[#2B00FF] font-semibold' : 'text-white hover:text-[#2B00FF]'
              }`}
            >
              Solutions
              <svg
                className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
                viewBox="0 0 20 20" fill="currentColor"
              >
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"/>
              </svg>
            </button>

            {/* Dropdown panel */}
            <div
              className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 ${
                open ? 'pointer-events-auto' : 'pointer-events-none'
              }`}
            >
              <div
                className={`min-w-[260px] rounded-2xl border border-white/10 bg-neutral-900/90 p-2 shadow-2xl ring-1 ring-white/10 backdrop-blur transition duration-200 ${
                  open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                }`}
              >
                <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 bg-neutral-900/90 border-l border-t border-white/10" />
                <ul className="grid gap-1">
                  {solutions.map(({ label, href }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="flex items-center justify-between rounded-xl px-4 py-3 text-sm text-white/90 hover:text-[#d4ff00] hover:bg-white/5 transition shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
                      >
                        <span>{label}</span>
                        <span className="text-xs opacity-60">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Items after Services */}
          {afterItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`transition hover:text-[#2B00FF] ${
                isActive(href) ? 'text-[#2B00FF] font-semibold' : 'text-white'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/book">
            <button className="bg-[#2B00FF] text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:opacity-90 transition">
              Book a Call
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
