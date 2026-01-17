import Link from "next/link";
import { ppdbInfo, schoolData } from "@/data/school";

export default function PPDBSection() {
  return (
    <section id="ppdb" className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-amber-500" />
            <span className="text-amber-500 text-xs font-medium tracking-[0.15em] uppercase">
              PPDB {ppdbInfo.year}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6 tracking-tight">
            Penerimaan Peserta Didik Baru
          </h2>
          <p className="text-white/60 font-light leading-relaxed text-lg">
            Segera daftarkan putra-putri Anda untuk menjadi bagian dari keluarga besar
            SDN Kapuk Muara 03.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Timeline */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
            <h3 className="text-xl font-medium text-white mb-8">Jadwal Pendaftaran</h3>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/50 text-sm font-light">Periode Pendaftaran</p>
                  <p className="text-white font-medium text-lg">{ppdbInfo.registrationPeriod}</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/50 text-sm font-light">Pengumuman Hasil</p>
                  <p className="text-white font-medium text-lg">{ppdbInfo.announcementDate}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h4 className="text-white font-medium mb-5">Alur Pendaftaran</h4>
              <div className="space-y-4">
                {ppdbInfo.steps.map((step, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-amber-500 text-sm font-medium">
                      {index + 1}
                    </div>
                    <span className="text-white/70 font-light">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-white rounded-2xl p-10">
            <h3 className="text-xl font-medium text-slate-900 mb-8">
              Persyaratan Pendaftaran
            </h3>
            <ul className="space-y-4 mb-10">
              {ppdbInfo.requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-5 h-5 bg-emerald-100 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-600 font-light">{req}</span>
                </li>
              ))}
            </ul>

            <div className="bg-slate-50 rounded-xl p-6">
              <h4 className="font-medium text-slate-900 mb-3">Informasi Lebih Lanjut</h4>
              <p className="text-slate-500 text-sm font-light mb-5">
                Untuk pertanyaan seputar PPDB, silakan hubungi kami:
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={`https://wa.me/${schoolData.contact.whatsapp}`}
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-5 rounded-xl transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </Link>
                <Link
                  href={`tel:${schoolData.contact.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 px-5 rounded-xl transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Telepon
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
