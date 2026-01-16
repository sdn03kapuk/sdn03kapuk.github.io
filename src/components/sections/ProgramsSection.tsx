import { programs, extracurriculars } from "@/data/school";

const IconBook = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

const IconLightbulb = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
  </svg>
);

const IconStar = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
);

const IconLeaf = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
);

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "book":
      return <IconBook />;
    case "lightbulb":
      return <IconLightbulb />;
    case "star":
      return <IconStar />;
    case "leaf":
      return <IconLeaf />;
    default:
      return <IconBook />;
  }
};

export default function ProgramsSection() {
  const categories = [...new Set(extracurriculars.map((e) => e.category))];

  return (
    <section id="program" className="py-24 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-amber-500" />
            <span className="text-amber-600 text-xs font-medium tracking-[0.15em] uppercase">
              Kurikulum Kami
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900 mb-6 tracking-tight">
            Program Unggulan
          </h2>
          <p className="text-slate-500 font-light leading-relaxed text-lg">
            Program-program inovatif yang dirancang untuk mengembangkan potensi
            peserta didik secara holistik.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 transition-all duration-500 hover:shadow-elegant-hover hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-slate-100 group-hover:bg-amber-500 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 text-slate-600 group-hover:text-slate-900">
                {getIcon(program.icon)}
              </div>
              <h3 className="font-medium text-slate-900 text-xl mb-3 tracking-tight">
                {program.title}
              </h3>
              <p className="text-slate-500 font-light leading-relaxed">{program.description}</p>
            </div>
          ))}
        </div>

        {/* Extracurricular Section */}
        <div className="bg-white rounded-2xl p-10 lg:p-14">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-medium text-slate-900 mb-3 tracking-tight">
              Kegiatan Ekstrakurikuler
            </h3>
            <p className="text-slate-500 font-light text-lg">
              Wadah pengembangan bakat dan minat siswa di luar jam pelajaran
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div key={category} className="bg-slate-50 rounded-xl p-6">
                <h4 className="font-medium text-slate-900 mb-4 text-sm tracking-wide uppercase">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {extracurriculars
                    .filter((e) => e.category === category)
                    .map((ekskul, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-slate-200 last:border-0"
                      >
                        <span className="text-slate-700 font-light">{ekskul.name}</span>
                        <span className="text-slate-400 text-sm font-light">{ekskul.day}</span>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
