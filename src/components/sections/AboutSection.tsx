import Image from "next/image";
import { visionMission, principalData, schoolData } from "@/data/school";

export default function AboutSection() {
  return (
    <section id="tentang" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-amber-500" />
            <span className="text-amber-600 text-xs font-medium tracking-[0.15em] uppercase">
              Mengenal Kami
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900 mb-6 tracking-tight">
            Tentang Sekolah
          </h2>
          <p className="text-slate-500 font-light leading-relaxed text-lg">
            Mengenal lebih dekat SDN 03 Kapuk Muara, sekolah dasar negeri yang berkomitmen
            mencetak generasi berkualitas di Jakarta Utara.
          </p>
        </div>

        {/* School Identity */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 rounded-2xl overflow-hidden mb-20">
          {[
            { label: "NPSN", value: schoolData.npsn },
            { label: "Akreditasi", value: schoolData.accreditation },
            { label: "Tahun Berdiri", value: schoolData.established },
            { label: "Status", value: "Negeri" },
          ].map((item, index) => (
            <div key={index} className="bg-slate-50 p-8 text-center">
              <div className="text-slate-400 text-xs font-light tracking-widest uppercase mb-2">
                {item.label}
              </div>
              <div className="text-2xl font-medium text-slate-900">{item.value}</div>
            </div>
          ))}
        </div>

        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Vision */}
          <div className="bg-slate-900 rounded-2xl p-10 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-medium text-white">Visi</h3>
              </div>
              <p className="text-xl text-white/80 font-light leading-relaxed italic">
                &ldquo;{visionMission.vision}&rdquo;
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-slate-50 rounded-2xl p-10 lg:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-slate-900">Misi</h3>
            </div>
            <ul className="space-y-4">
              {visionMission.missions.map((mission, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="w-6 h-6 bg-slate-200 rounded-md flex items-center justify-center text-slate-600 text-sm font-medium flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-slate-600 font-light leading-relaxed">{mission}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Principal Message */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-10 lg:p-16">
          <div className="grid lg:grid-cols-4 gap-10 items-center">
            <div className="lg:col-span-1 text-center">
              <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto rounded-2xl overflow-hidden mb-4 relative">
                <Image
                  src={principalData.photo}
                  alt={principalData.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-medium text-slate-900 text-lg">{principalData.name}</h4>
              <p className="text-slate-500 font-light text-sm">Kepala Sekolah</p>
            </div>
            <div className="lg:col-span-3">
              <svg className="w-10 h-10 text-amber-300 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className="text-slate-700 text-lg lg:text-xl font-light leading-relaxed">
                {principalData.message}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
