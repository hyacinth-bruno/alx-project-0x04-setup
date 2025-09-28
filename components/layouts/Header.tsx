// components/layouts/Header.tsx

import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../common/Button";

const navLinks = [
  { label: "Text Studio", href: "/generate-text-ai" },
  { label: "Visual Lab", href: "/text-to-image" },
  { label: "Counter", href: "/counter-app" },
];

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-white"
        >
          <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
            Splash
          </span>
          <span className="hidden rounded-full border border-white/20 px-2 py-0.5 text-xs uppercase tracking-[0.2em] text-white/70 sm:inline-flex">
            App
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
          {navLinks.map((link) => {
            const isActive = router.pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition hover:text-white ${
                  isActive ? "text-white" : ""
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-gradient-to-r from-sky-400 to-purple-400"></span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button buttonLabel="Sign In" buttonBackgroundColor="slate" buttonSize="px-5 py-2 text-sm" />
          <Button buttonLabel="Get Started" buttonBackgroundColor="blue" buttonSize="px-5 py-2 text-sm" />
        </div>
      </div>
    </header>
  );
};

export default Header;
