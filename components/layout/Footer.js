import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';
import {
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="w-[85%] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
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
          <div className="text-gray-300 mt-4 text-sm max-w-md leading-relaxed">
            <p className="font-semibold text-white mb-1 font-headline">
              SparkAI delivers <span className="text-[#d4ff00] font-bold">professional, personalized</span>
            </p>
            <p className="text-gray-400 font-paragraph">
              customer service automation that helps businesses grow while reducing costs.
            </p>
          </div>

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
          <h4 className="text-sm font-bold uppercase mb-4 text-gray-300 font-headline">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services" className="hover:text-[#2139ff] transition-colors duration-300 font-paragraph">Services</Link></li>
            <li><Link href="/solutions" className="hover:text-[#2139ff] transition-colors duration-300 font-paragraph">Solutions</Link></li>
            <li><Link href="/pricing" className="hover:text-[#2139ff] transition-colors duration-300 font-paragraph">Pricing</Link></li>
            <li><Link href="/about" className="hover:text-[#2139ff] transition-colors duration-300 font-paragraph">About</Link></li>
            <li><Link href="/contact" className="hover:text-[#2139ff] transition-colors duration-300 font-paragraph">Contact</Link></li>
            <li><Link href="/blog" className="hover:text-[#2139ff] transition-colors duration-300 font-paragraph">Blog</Link></li>
          </ul>
        </div>

        {/* Resources + People */}
        <div>
          <h4 className="text-sm font-bold uppercase mb-4 text-gray-300 font-headline">Resources</h4>
          <ul className="space-y-2 text-sm mb-6">
            <li><Link href="/blog" className="hover:text-[#2139ff] transition-colors duration-300 font-paragraph">Blog</Link></li>
            <li><Link href="/newsletter" className="hover:text-[#2139ff] transition-colors duration-300 font-paragraph">Newsletter</Link></li>
            <li><Link href="/docs" className="hover:text-[#2139ff] transition-colors duration-300 font-paragraph">Docs</Link></li>
          </ul>
          
          <h4 className="text-sm font-bold uppercase mb-4 text-gray-300 font-headline">People</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/partners" className="hover:text-[#2139ff] transition-colors duration-300 font-paragraph">Partners</Link></li>
            <li><Link href="/careers" className="hover:text-[#2139ff] transition-colors duration-300 font-paragraph">Careers</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-sm font-bold uppercase mb-4 text-gray-300 font-headline">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <svg className="w-4 h-4 text-white mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="font-paragraph">Republic of Kosova</span>
            </li>
            <li className="flex items-start gap-3">
              <PhoneIcon className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
              <span className="font-paragraph">+383 49 453 595</span>
            </li>
            <li className="flex items-start gap-3">
              <EnvelopeIcon className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
              <span className="font-paragraph">hi@sparkai-rks.com</span>
            </li>
            <li className="flex items-start gap-3">
              <ClockIcon className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
              <span className="font-paragraph">24/7 Support Available</span>
            </li>
          </ul>

          {/* Newsletter Section */}
          <div className="mt-8">
            <h4 className="text-sm font-bold uppercase mb-4 text-gray-300 font-headline">Join Our Newsletter</h4>
            <p className="text-xs text-gray-400 mb-3 font-paragraph">Stay updated with the latest AI insights and business tips.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-xs placeholder-gray-500 focus:outline-none focus:border-[#2139ff] focus:ring-1 focus:ring-[#2139ff]"
              />
              <button className="bg-[#2139ff] hover:bg-[#2139ff]/90 text-white px-4 py-2 rounded-lg text-xs font-semibold transition-colors duration-200 font-subheadline">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-left text-xs text-gray-500">
        <p className="font-paragraph">© {new Date().getFullYear()} Spark Martech L.L.C. All rights reserved.</p>
      </div>
      </div>
    </footer>
  );
}
