// components/layouts/Footer.tsx

import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950 text-slate-200">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden="true"></div>
      <div className="container mx-auto px-6 pb-12 pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr,1fr]">
          <div className="space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-100/70">
                Splash App
              </span>
              <h3 className="mt-5 text-3xl font-semibold text-white">Design intuitive AI journeys your customers will love.</h3>
              <p className="mt-3 text-sm text-slate-300">
                We help product teams orchestrate delightful experiences with human-centered guardrails. Join our community and be the first to learn about product drops, playbooks, and design sprints.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/generate-text-ai"
                className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                Explore the studio
              </Link>
              <Link
                href="/counter-app"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-400/20 transition hover:from-sky-600 hover:via-blue-600 hover:to-purple-600"
              >
                Partner with us
              </Link>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Company</h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>
                  <Link href="/about" className="transition hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="transition hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="transition hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Resources</h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>
                  <Link href="/privacy" className="transition hover:text-white">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="transition hover:text-white">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="transition hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sm:col-span-2">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Stay in the loop</h4>
              <p className="mt-3 text-sm text-slate-300">
                Join thousands of builders receiving product updates, curated templates, and our AI design field notes.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-slate-400 focus:border-white/40 focus:outline-none"
                />
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-400/20 transition hover:from-sky-600 hover:to-purple-600"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Splash App. Crafted with care.</p>
          <div className="flex items-center gap-4 text-white/60">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="transition hover:text-white"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="transition hover:text-white"
            >
              <FaFacebook size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition hover:text-white"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition hover:text-white"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
