'use client';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '/blog' },
  ];

  return (
    <header className="w-full bg-black text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#d4ff00]">
          SparkAI
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`transition hover:text-[#2B00FF] ${
                router.pathname === href ? 'text-[#2B00FF] font-semibold' : 'text-white'
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
