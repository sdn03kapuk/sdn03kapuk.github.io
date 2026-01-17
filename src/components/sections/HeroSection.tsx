"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  schoolData,
  visionMission,
  announcements,
  dutyTeachers,
  principalData,
  tppkData,
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

// Card data configuration
const cardData = [
  { id: "vision", title: "Visi & Misi", icon: "eye", href: "#tentang" },
  { id: "announcement", title: "Pengumuman", icon: "megaphone", href: "#ppdb" },
  { id: "profile", title: "Profil Sekolah", icon: "building", href: "#tentang" },
  { id: "tppk", title: "TPPK", icon: "shield", href: "#tppk" },
  { id: "duty", title: "Guru Piket", icon: "calendar", href: "#kontak" },
];

// Icon components
const Icons = {
  eye: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  megaphone: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
    </svg>
  ),
  user: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  ),
  building: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
    </svg>
  ),
  calendar: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  ),
  shield: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
};

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(1); // Start with announcement (center)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const todayTeacher = getTodayDutyTeacher();

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % cardData.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + cardData.length) % cardData.length);
  }, []);

  const handleCardClick = (index: number, href: string) => {
    if (index === activeIndex) {
      // If already active, scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Otherwise, just select the card
      setActiveIndex(index);
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 15000);
    }
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Calculate card positions
  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const normalizedDiff = ((diff + cardData.length + Math.floor(cardData.length / 2)) % cardData.length) - Math.floor(cardData.length / 2);

    const isActive = normalizedDiff === 0;
    const isAdjacent = Math.abs(normalizedDiff) === 1;
    const isSecondary = Math.abs(normalizedDiff) === 2;

    let translateX = normalizedDiff * 320;
    let scale = 1;
    let zIndex = 10;
    let opacity = 1;
    let rotateY = 0;

    if (isActive) {
      scale = 1;
      zIndex = 50;
      translateX = 0;
    } else if (isAdjacent) {
      scale = 0.85;
      zIndex = 40;
      translateX = normalizedDiff * 300;
      rotateY = normalizedDiff * -8;
      opacity = 0.9;
    } else if (isSecondary) {
      scale = 0.7;
      zIndex = 30;
      translateX = normalizedDiff * 280;
      rotateY = normalizedDiff * -12;
      opacity = 0.6;
    } else {
      scale = 0.5;
      zIndex = 20;
      opacity = 0;
    }

    return {
      transform: `translateX(${translateX}px) scale(${scale}) perspective(1000px) rotateY(${rotateY}deg)`,
      zIndex,
      opacity,
    };
  };

  // Render card content based on type
  const renderCardContent = (cardId: string, isActive: boolean) => {
    switch (cardId) {
      case "vision":
        return (
          <div className="h-full flex flex-col">
            <div className="mb-4">
              <span className="text-amber-400 text-sm font-medium uppercase tracking-wider">Visi</span>
              <p className="text-white text-lg font-light mt-2 leading-relaxed">
                &ldquo;{visionMission.vision}&rdquo;
              </p>
            </div>
            {isActive && (
              <div className="mt-auto">
                <span className="text-amber-400 text-sm font-medium uppercase tracking-wider">Misi</span>
                <ul className="mt-2 space-y-1">
                  {visionMission.missions.slice(0, 3).map((m, i) => (
                    <li key={i} className="text-white/70 text-xs font-light flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5">-</span>
                      <span className="line-clamp-1">{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );

      case "announcement":
        return (
          <div className="h-full flex flex-col">
            <div className="space-y-3">
              {announcements.slice(0, isActive ? 2 : 1).map((item, i) => (
                <div key={i} className="bg-white/5 rounded-lg p-3 border border-white/10">
                  <span className="text-amber-400 text-xs">{item.date}</span>
                  <h4 className="text-white text-sm font-medium mt-1">{item.title}</h4>
                  {isActive && (
                    <p className="text-white/60 text-xs mt-1 line-clamp-2">{item.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case "profile":
        return (
          <div className="h-full flex flex-col">
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-xl p-3 text-center border border-amber-500/20">
                <div className="text-2xl font-medium text-amber-400">{schoolData.stats.students}+</div>
                <div className="text-xs text-white/60">Siswa</div>
              </div>
              <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 rounded-xl p-3 text-center border border-emerald-500/20">
                <div className="text-2xl font-medium text-emerald-400">{schoolData.stats.teachers}</div>
                <div className="text-xs text-white/60">Guru</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl p-3 text-center border border-blue-500/20">
                <div className="text-2xl font-medium text-blue-400">{schoolData.stats.classes}</div>
                <div className="text-xs text-white/60">Kelas</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-xl p-3 text-center border border-purple-500/20">
                <div className="text-2xl font-medium text-purple-400">{schoolData.stats.extracurriculars}</div>
                <div className="text-xs text-white/60">Ekskul</div>
              </div>
            </div>
            {isActive && (
              <div className="mt-auto space-y-3">
                <div className="flex items-center gap-2 text-white/60 text-xs">
                  <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span>{schoolData.address.district}, {schoolData.address.city}</span>
                </div>
                <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                  <div className="text-amber-400 text-xs font-medium mb-1">Kepala Sekolah</div>
                  <div className="text-white text-sm">{principalData.name}</div>
                </div>
              </div>
            )}
          </div>
        );

      case "tppk":
        return (
          <div className="h-full flex flex-col">
            <div className="bg-gradient-to-br from-red-500/20 to-rose-500/10 rounded-xl p-4 mb-3 border border-red-500/30">
              <span className="text-red-400 text-xs font-medium uppercase tracking-wider">Hotline</span>
              <div className="text-white font-medium mt-1">{tppkData.hotline}</div>
              <div className="text-white/60 text-xs mt-1">24 Jam</div>
            </div>
            {isActive && (
              <>
                <div className="mb-3">
                  <p className="text-white/70 text-xs font-light leading-relaxed">
                    {tppkData.description}
                  </p>
                </div>
                <div className="mt-auto space-y-2">
                  {tppkData.services.slice(0, 3).map((service, i) => (
                    <div key={i} className="flex items-start gap-2 text-white/70 text-xs">
                      <svg className="w-3 h-3 text-amber-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        );

      case "duty":
        return (
          <div className="h-full flex flex-col">
            {todayTeacher && (
              <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/10 rounded-xl p-4 mb-3 border border-amber-500/30">
                <span className="text-amber-400 text-xs font-medium">Hari Ini - {todayTeacher.day}</span>
                <div className="text-white font-medium mt-1">{todayTeacher.name}</div>
                <div className="text-white/60 text-xs mt-1">{todayTeacher.phone}</div>
              </div>
            )}
            {isActive && (
              <div className="grid grid-cols-2 gap-2 mt-auto">
                {Object.entries(dutyTeachers).slice(0, 4).map(([day, teacher]) => (
                  <div key={day} className="bg-white/5 rounded-lg p-2 border border-white/10">
                    <span className="text-amber-400 text-[10px]">{dayNames[day]}</span>
                    <div className="text-white text-xs truncate">{teacher.name.split(',')[0]}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/50 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Header Text */}
      <div className="absolute top-28 left-0 right-0 text-center z-[70]">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 p-2">
            <Image
              src="/images/logo-sd.png"
              alt="Logo"
              width={40}
              height={40}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-medium text-white mb-2">
          {schoolData.name}
        </h1>
        <p className="text-white/50 font-light text-sm md:text-base">
          {schoolData.tagline}
        </p>
      </div>

      {/* Card Carousel */}
      <div className="container mx-auto px-6 relative z-10 pt-72 pb-32">
        <div className="relative h-[400px] flex items-center justify-center">
          {/* Cards */}
          {cardData.map((card, index) => {
            const style = getCardStyle(index);
            const isActive = index === activeIndex;
            const IconComponent = Icons[card.icon as keyof typeof Icons];

            return (
              <div
                key={card.id}
                onClick={() => handleCardClick(index, card.href)}
                className="absolute w-[280px] h-[380px] cursor-pointer transition-all duration-500 ease-out"
                style={{
                  transform: style.transform,
                  zIndex: style.zIndex,
                  opacity: style.opacity,
                }}
              >
                <div
                  className={`
                    w-full h-full rounded-2xl p-6
                    bg-gradient-to-br from-white/10 to-white/5
                    backdrop-blur-xl border border-white/20
                    shadow-2xl shadow-black/20
                    transition-all duration-500
                    ${isActive ? 'border-amber-500/30 shadow-amber-500/10' : 'hover:border-white/30'}
                  `}
                >
                  {/* Card Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`
                      w-12 h-12 rounded-xl flex items-center justify-center
                      ${isActive
                        ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-slate-900'
                        : 'bg-white/10 text-amber-400'}
                      transition-all duration-500
                    `}>
                      <IconComponent />
                    </div>
                    <h3 className={`
                      font-medium uppercase tracking-wider text-sm
                      ${isActive ? 'text-amber-400' : 'text-white/80'}
                      transition-colors duration-500
                    `}>
                      {card.title}
                    </h3>
                  </div>

                  {/* Card Content */}
                  <div className="h-[calc(100%-80px)]">
                    {renderCardContent(card.id, isActive)}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[60] w-14 h-14 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 group"
          >
            <svg className="w-6 h-6 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[60] w-14 h-14 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 group"
          >
            <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {cardData.map((card, index) => (
            <button
              key={card.id}
              onClick={() => handleCardClick(index, card.href)}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === activeIndex
                  ? 'w-8 bg-amber-500'
                  : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="absolute bottom-12 left-0 right-0 text-center z-20">
        <a
          href="#ppdb"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40"
        >
          <span>Info PPDB 2026/2027</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
