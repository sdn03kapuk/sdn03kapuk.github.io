import { achievements } from "@/data/school";

const IconTrophy = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
  </svg>
);

export default function AchievementsSection() {
  const getCategoryStyle = (category: string) => {
    const styles: Record<string, { bg: string; text: string; border: string }> = {
      Akademik: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
      Olahraga: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
      Seni: { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
      Lingkungan: { bg: "bg-green-50", text: "text-green-700", border: "border-green-200" },
      Keagamaan: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
    };
    return styles[category] || { bg: "bg-slate-50", text: "text-slate-700", border: "border-slate-200" };
  };

  return (
    <section id="prestasi" className="py-24 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-amber-500" />
            <span className="text-amber-600 text-xs font-medium tracking-[0.15em] uppercase">
              Pencapaian Kami
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900 mb-6 tracking-tight">
            Prestasi Membanggakan
          </h2>
          <p className="text-slate-500 font-light leading-relaxed text-lg">
            Berbagai pencapaian dari siswa dan sekolah dalam bidang
            akademik maupun non-akademik.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const style = getCategoryStyle(achievement.category);
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 transition-all duration-500 hover:shadow-elegant-hover hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-6">
                  <span
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border ${style.bg} ${style.text} ${style.border}`}
                  >
                    {achievement.category}
                  </span>
                  <span className="text-slate-400 text-sm font-light">{achievement.year}</span>
                </div>
                <div className="text-amber-500 mb-4">
                  <IconTrophy />
                </div>
                <h3 className="font-medium text-slate-900 text-xl mb-2 tracking-tight">
                  {achievement.title}
                </h3>
                <p className="text-slate-500 font-light">{achievement.level}</p>
              </div>
            );
          })}
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-4 mt-16">
          <span className="w-16 h-px bg-slate-200" />
          <span className="text-slate-400 text-sm font-light">Dan masih banyak lagi</span>
          <span className="w-16 h-px bg-slate-200" />
        </div>
      </div>
    </section>
  );
}
