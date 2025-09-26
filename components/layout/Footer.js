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
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
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
          <p className="text-gray-400 mt-4 text-sm max-w-md">
            SparkAI delivers professional, personalized customer service automation that helps businesses grow while reducing costs.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-lg text-white">
            <a href="https://www.facebook.com/sparkai.rks" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-[#2139ff] transition-colors duration-300" />
            </a>
            <a href="https://www.instagram.com/sparkai.rks" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-[#2139ff] transition-colors duration-300" />
            </a>
            <a href="https://www.youtube.com/@sparkairks" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="hover:text-[#2139ff] transition-colors duration-300" />
            </a>
            <a href="https://www.linkedin.com/company/sparkai-rks" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-[#2139ff] transition-colors duration-300" />
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-sm font-bold uppercase mb-4 text-gray-300">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services" className="hover:text-[#2139ff] transition-colors duration-300">Services</Link></li>
            <li><Link href="/solutions" className="hover:text-[#2139ff] transition-colors duration-300">Solutions</Link></li>
            <li><Link href="/pricing" className="hover:text-[#2139ff] transition-colors duration-300">Pricing</Link></li>
            <li><Link href="/about" className="hover:text-[#2139ff] transition-colors duration-300">About</Link></li>
            <li><Link href="/contact" className="hover:text-[#2139ff] transition-colors duration-300">Contact</Link></li>
            <li><Link href="/blog" className="hover:text-[#2139ff] transition-colors duration-300">Blog</Link></li>
          </ul>
        </div>

        {/* Resources + People */}
        <div>
          <h4 className="text-sm font-bold uppercase mb-4 text-gray-300">Resources</h4>
          <ul className="space-y-2 text-sm mb-6">
            <li><Link href="/blog" className="hover:text-[#2139ff] transition-colors duration-300">Blog</Link></li>
            <li><Link href="/newsletter" className="hover:text-[#2139ff] transition-colors duration-300">Newsletter</Link></li>
            <li><Link href="/docs" className="hover:text-[#2139ff] transition-colors duration-300">Docs</Link></li>
          </ul>
          
          <h4 className="text-sm font-bold uppercase mb-4 text-gray-300">People</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/partners" className="hover:text-[#2139ff] transition-colors duration-300">Partners</Link></li>
            <li><Link href="/careers" className="hover:text-[#2139ff] transition-colors duration-300">Careers</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-sm font-bold uppercase mb-4 text-gray-300">Get in Touch</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-white">📍</span>
              <span>Prishtina, Republic of Kosova</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white">📞</span>
              <span>+383 44 123 456</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white">✉️</span>
              <span>support@sparkai.com</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white">🕒</span>
              <span>24/7 Support Available</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-left text-xs text-gray-500 max-w-7xl mx-auto">
        <p>© {new Date().getFullYear()} Spark Martech L.L.C. All rights reserved.</p>
      </div>
    </footer>
  );
}
