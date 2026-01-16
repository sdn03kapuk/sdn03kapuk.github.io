import Image from "next/image";
import Link from "next/link";
import { schoolData } from "@/data/school";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-school.jpg"
          alt="SDN 03 Kapuk Muara"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10 py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-12 h-px bg-amber-500" />
            <span className="text-amber-500 text-xs font-medium tracking-[0.2em] uppercase">
              Terakreditasi {schoolData.accreditation}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white mb-6 leading-[1.1] tracking-tight">
            Selamat Datang di
            <br />
            <span className="text-amber-400">{schoolData.name}</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-10 max-w-xl">
            {schoolData.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="#ppdb"
              className="group inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-medium py-4 px-8 rounded-xl transition-all duration-300"
            >
              <span>Info PPDB 2025/2026</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="#tentang"
              className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/30 hover:border-white/60 hover:bg-white/5 text-white font-light py-4 px-8 rounded-xl transition-all duration-300"
            >
              Pelajari Lebih Lanjut
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: `${schoolData.stats.students}+`, label: "Siswa Aktif" },
              { value: schoolData.stats.teachers, label: "Tenaga Pendidik" },
              { value: schoolData.stats.extracurriculars, label: "Ekstrakurikuler" },
              { value: schoolData.established, label: "Tahun Berdiri" },
            ].map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-medium text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/50 font-light tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-3">
          <span className="text-white/40 text-xs tracking-[0.3em] uppercase font-light">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
