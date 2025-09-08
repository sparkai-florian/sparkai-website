import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#FAFAF7] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Brand + Tagline */}
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="SparkAI Logo"
            width={140}
            height={40}
            priority
          />
        </Link>
          <p className="text-gray-400 mt-4 text-sm max-w-xs">
            Powerful AI chatbots that answer instantly — and never sleep.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-lg text-white">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-[#2B00FF]" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-[#2B00FF]" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="hover:text-[#2B00FF]" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-[#2B00FF]" />
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-sm font-semibold uppercase mb-4 text-gray-300">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services" className="hover:text-[#2B00FF]">Services</Link></li>
            <li><Link href="/solutions" className="hover:text-[#2B00FF]">Solutions</Link></li>
            <li><Link href="/pricing" className="hover:text-[#2B00FF]">Pricing</Link></li>
            <li><Link href="/about" className="hover:text-[#2B00FF]">About</Link></li>
            <li><Link href="/contact" className="hover:text-[#2B00FF]">Contact</Link></li>
            <li><Link href="/blog" className="hover:text-[#2B00FF]">Blog</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-sm font-semibold uppercase mb-4 text-gray-300">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/blog" className="hover:text-[#2B00FF]">Blog</Link></li>
            <li><Link href="/newsletter" className="hover:text-[#2B00FF]">Newsletter</Link></li>
            <li><Link href="/docs" className="hover:text-[#2B00FF]">Docs</Link></li>
          </ul>
        </div>

        {/* People */}
        <div>
          <h4 className="text-sm font-semibold uppercase mb-4 text-gray-300">People</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/partners" className="hover:text-[#2B00FF]">Partners</Link></li>
            <li><Link href="/careers" className="hover:text-[#2B00FF]">Careers</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 max-w-7xl mx-auto">
        <p>© {new Date().getFullYear()} Spark Martech L.L.C. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <button className="hover:text-white">🇦🇱 Albanian</button>
          <button className="hover:text-white">🇬🇧 English</button>
        </div>
      </div>
    </footer>
  );
}
