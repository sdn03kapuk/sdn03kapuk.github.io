import Link from "next/link";
import { tppkData } from "@/data/school";

export default function TPPKSection() {
  return (
    <section id="tppk" className="py-24 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-red-500" />
            <span className="text-red-600 text-xs font-medium tracking-[0.15em] uppercase">
              {tppkData.shortTitle}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900 mb-6 tracking-tight">
            {tppkData.title}
          </h2>
          <p className="text-slate-500 font-light leading-relaxed text-lg">
            {tppkData.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Hotline Card */}
          <div className="bg-gradient-to-br from-red-600 to-rose-700 rounded-2xl p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/60 text-sm font-light">Hotline TPPK</p>
                  <p className="text-2xl font-medium">{tppkData.hotline}</p>
                </div>
              </div>
              <p className="text-white/80 font-light mb-6">
                Layanan pengaduan kekerasan di lingkungan sekolah tersedia 24 jam.
                Semua laporan akan ditangani secara rahasia dan profesional.
              </p>
              <Link
                href={`tel:${tppkData.hotline.replace(/-/g, "")}`}
                className="inline-flex items-center gap-3 bg-white hover:bg-white/90 text-red-600 font-medium py-3 px-6 rounded-xl transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Hubungi Sekarang
              </Link>
            </div>
          </div>

          {/* Services & Team */}
          <div className="space-y-6">
            {/* Services */}
            <div className="bg-white rounded-2xl p-8 shadow-elegant">
              <h3 className="text-lg font-medium text-slate-900 mb-6">Layanan TPPK</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tppkData.services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-slate-600 font-light">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Team */}
            <div className="bg-white rounded-2xl p-8 shadow-elegant">
              <h3 className="text-lg font-medium text-slate-900 mb-6">Tim TPPK</h3>
              <div className="space-y-4">
                {tppkData.team.map((member, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-rose-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">{member.name}</p>
                      <p className="text-slate-500 text-sm font-light">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Email Contact */}
        <div className="mt-8 bg-white rounded-2xl p-8 shadow-elegant">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <p className="text-slate-500 text-sm font-light">Email TPPK</p>
                <p className="text-slate-900 font-medium">{tppkData.email}</p>
              </div>
            </div>
            <Link
              href={`mailto:${tppkData.email}`}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300"
            >
              Kirim Email
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-6 bg-amber-50 rounded-xl border border-amber-200">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-amber-800 mb-1">Penting</p>
              <p className="text-amber-700 text-sm font-light">
                Sesuai Permendikbudristek No. 46 Tahun 2023, setiap satuan pendidikan wajib membentuk Tim Pencegahan dan Penanganan Kekerasan (TPPK).
                Semua laporan akan ditangani secara rahasia, cepat, dan tidak diskriminatif.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
