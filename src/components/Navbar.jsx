import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">

      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <a href="#home" className="text-2xl font-bold tracking-tight text-white">
          Rifthan<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-blue-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Resume Button */}
        <a
          href="/images/resume/SeyedMohamedRifthan.pdf"
          download
          className="hidden items-center gap-2 rounded-full border border-blue-500/50 px-5 py-2.5 text-sm font-semibold text-blue-400 transition hover:bg-blue-600 hover:text-white md:inline-flex"
        >
          Resume
          <ArrowUpRight size={16} />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950 px-6 py-5 md:hidden">

          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-sm font-medium text-slate-300 transition hover:text-blue-400"
            >
              {link.label}
            </a>
          ))}

          <a
            href="/resume.pdf"
            download
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-400"
          >
            Download Resume
            <ArrowUpRight size={16} />
          </a>

        </div>
      )}

    </header>
  );
}