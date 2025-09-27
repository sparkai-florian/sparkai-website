import Link from "next/link";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/sparkai.rks", icon: FaInstagram },
  { label: "Facebook", href: "https://www.facebook.com/sparkai.rks", icon: FaFacebook },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/sparkai-rks", icon: FaLinkedin },
  { label: "YouTube", href: "https://www.youtube.com/@sparkairks", icon: FaYoutube },
];

export default function SocialLinks() {
  return (
    <section className="py-12">
      <div className="w-[85%] mx-auto px-6 md:px-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Connect with us</h2>
        <ul className="flex flex-wrap gap-4">
          {SOCIALS.map((social) => {
            const IconComponent = social.icon;
            return (
              <li key={social.label}>
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm text-white hover:bg-white/10 transition-all duration-300"
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{social.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
    