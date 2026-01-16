"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  schoolData,
  visionMission,
  announcements,
  dutyTeachers,
} from "@/data/school";

const dayNames: Record<string, string> = {
  monday: "Senin",
  tuesday: "Selasa",
  wednesday: "Rabu",
  thursday: "Kamis",
  friday: "Jumat",
  saturday: "Sabtu",
};

function getTodayDutyTeacher() {
  const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  const today = days[new Date().getDay()];
  if (today === "sunday") return null;
  return {
    day: dayNames[today] || today,
    ...dutyTeachers[today as keyof typeof dutyTeachers],
  };
}

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const todayTeacher = getTodayDutyTeacher();

  const slides = [
    { id: "welcome", title: "Selamat Datang" },
    { id: "profile", title: "Profil Sekolah" },
    { id: "vision", title: "Visi & Misi" },
    { id: "announcement", title: "Pengumuman" },
    { id: "duty", title: "Guru Piket" },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

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

      <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-32 pb-40 lg:pt-40 lg:pb-48">
        <div className="max-w-4xl">
          {/* Carousel Content - Fixed Height */}
          <div className="relative h-[480px] md:h-[420px] lg:h-[400px]">
            {/* Slide 0: Welcome */}
            <div
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                currentSlide === 0
                  ? "opacity-100 translate-x-0"
                  : currentSlide > 0
                  ? "opacity-0 -translate-x-12 pointer-events-none"
                  : "opacity-0 translate-x-12 pointer-events-none"
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-px bg-amber-500" />
                <span className="text-amber-500 text-xs font-medium tracking-[0.2em] uppercase">
                  Terakreditasi {schoolData.accreditation}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-5 leading-[1.1] tracking-tight">
                Selamat Datang di
                <br />
                <span className="text-amber-400">{schoolData.name}</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-8 max-w-xl">
                {schoolData.tagline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#ppdb"
                  className="group inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-medium py-4 px-8 rounded-xl transition-all duration-300"
                >
                  <span>Info PPDB 2026/2027</span>
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
            </div>

            {/* Slide 1: Profile */}
            <div
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                currentSlide === 1
                  ? "opacity-100 translate-x-0"
                  : currentSlide > 1
                  ? "opacity-0 -translate-x-12 pointer-events-none"
                  : "opacity-0 translate-x-12 pointer-events-none"
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-px bg-amber-500" />
                <span className="text-amber-500 text-xs font-medium tracking-[0.2em] uppercase">
                  Profil Sekolah
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6 leading-tight tracking-tight">
                {schoolData.fullName}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl md:text-3xl font-medium text-amber-400">{schoolData.stats.students}+</div>
                  <div className="text-sm text-white/60 font-light">Siswa Aktif</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl md:text-3xl font-medium text-amber-400">{schoolData.stats.teachers}</div>
                  <div className="text-sm text-white/60 font-light">Tenaga Pendidik</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl md:text-3xl font-medium text-amber-400">{schoolData.stats.classes}</div>
                  <div className="text-sm text-white/60 font-light">Rombel</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl md:text-3xl font-medium text-amber-400">{schoolData.stats.extracurriculars}</div>
                  <div className="text-sm text-white/60 font-light">Ekstrakurikuler</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white/70 font-light">
                <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>{schoolData.address.street}, {schoolData.address.district}, {schoolData.address.city}</span>
              </div>
            </div>

            {/* Slide 2: Vision & Mission */}
            <div
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                currentSlide === 2
                  ? "opacity-100 translate-x-0"
                  : currentSlide > 2
                  ? "opacity-0 -translate-x-12 pointer-events-none"
                  : "opacity-0 translate-x-12 pointer-events-none"
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-px bg-amber-500" />
                <span className="text-amber-500 text-xs font-medium tracking-[0.2em] uppercase">
                  Visi & Misi
                </span>
              </div>
              <div className="mb-6">
                <h3 className="text-base text-amber-400 font-medium mb-2">Visi</h3>
                <p className="text-2xl md:text-3xl text-white font-light leading-relaxed">
                  &ldquo;{visionMission.vision}&rdquo;
                </p>
              </div>
              <div>
                <h3 className="text-base text-amber-400 font-medium mb-3">Misi</h3>
                <ul className="space-y-2">
                  {visionMission.missions.slice(0, 4).map((mission, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/80 font-light">
                      <span className="w-6 h-6 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-amber-400 text-xs">{index + 1}</span>
                      </span>
                      <span className="text-sm md:text-base">{mission}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Slide 3: Announcements */}
            <div
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                currentSlide === 3
                  ? "opacity-100 translate-x-0"
                  : currentSlide > 3
                  ? "opacity-0 -translate-x-12 pointer-events-none"
                  : "opacity-0 translate-x-12 pointer-events-none"
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-px bg-amber-500" />
                <span className="text-amber-500 text-xs font-medium tracking-[0.2em] uppercase">
                  Pengumuman
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 tracking-tight">
                Informasi Terbaru
              </h2>
              <div className="space-y-4">
                {announcements.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                      </svg>
                      <span className="text-xs text-white/50">{item.date}</span>
                    </div>
                    <h4 className="text-lg text-white font-medium mb-1">{item.title}</h4>
                    <p className="text-white/70 font-light text-sm">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide 4: Duty Teacher */}
            <div
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                currentSlide === 4
                  ? "opacity-100 translate-x-0"
                  : currentSlide > 4
                  ? "opacity-0 -translate-x-12 pointer-events-none"
                  : "opacity-0 translate-x-12 pointer-events-none"
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-px bg-amber-500" />
                <span className="text-amber-500 text-xs font-medium tracking-[0.2em] uppercase">
                  Guru Piket
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 tracking-tight">
                Jadwal Guru Piket
              </h2>

              {todayTeacher && (
                <div className="bg-amber-500/20 backdrop-blur-sm rounded-xl p-5 border border-amber-500/30 mb-5">
                  <div className="text-amber-400 text-sm font-medium mb-1">Hari Ini ({todayTeacher.day})</div>
                  <div className="text-xl text-white font-medium mb-1">{todayTeacher.name}</div>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <span className="font-light">{todayTeacher.phone}</span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {Object.entries(dutyTeachers).map(([day, teacher]) => (
                  <div
                    key={day}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10"
                  >
                    <div className="text-amber-400 text-xs font-medium mb-0.5">{dayNames[day]}</div>
                    <div className="text-white text-sm font-light truncate">{teacher.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Carousel Navigation - Fixed Position */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  className={`group flex items-center gap-2 transition-all duration-300 ${
                    currentSlide === index ? "opacity-100" : "opacity-50 hover:opacity-75"
                  }`}
                  aria-label={`Go to ${slide.title}`}
                >
                  <span
                    className={`h-2 rounded-full transition-all duration-500 ${
                      currentSlide === index
                        ? "w-8 bg-amber-500"
                        : "w-2 bg-white/50 group-hover:bg-white/70"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Prev/Next Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                aria-label="Next slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
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
