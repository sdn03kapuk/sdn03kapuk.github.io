"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { schoolData } from "@/data/school";

const navLinks = [
  { href: "#tentang", label: "Tentang" },
  { href: "#program", label: "Program" },
  { href: "#fasilitas", label: "Fasilitas" },
  { href: "#prestasi", label: "Prestasi" },
  { href: "#ppdb", label: "PPDB" },
  { href: "#kontak", label: "Kontak" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-lg shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center overflow-hidden transition-all duration-500 ${
                isScrolled
                  ? "bg-slate-100"
                  : "bg-white/15 backdrop-blur-sm border border-white/20"
              }`}
            >
              <Image
                src="/images/logo-sd.png"
                alt="Logo SDN Kapuk Muara 03"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1
                className={`font-medium text-base tracking-tight transition-all duration-500 ${
                  isScrolled ? "text-slate-900" : "text-white"
                }`}
              >
                {schoolData.name}
              </h1>
              <p
                className={`text-xs font-light tracking-wide transition-all duration-500 ${
                  isScrolled ? "text-slate-500" : "text-white/60"
                }`}
              >
                Jakarta Barat
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-light tracking-wide transition-all duration-300 hover:text-amber-500 group ${
                  isScrolled ? "text-slate-600" : "text-white/80"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link
              href="#ppdb"
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-medium py-2.5 px-6 rounded-lg transition-all duration-300 text-sm tracking-wide"
            >
              Daftar Sekarang
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled ? "text-slate-900" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-6 border-t border-slate-200/50 bg-white/98 backdrop-blur-lg -mx-6 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-slate-600 hover:text-slate-900 font-light tracking-wide transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#ppdb"
              className="block mt-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-medium py-3 px-5 rounded-lg transition-colors text-center tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              Daftar Sekarang
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
