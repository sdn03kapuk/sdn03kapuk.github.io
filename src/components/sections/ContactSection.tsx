import Link from "next/link";
import { schoolData, news } from "@/data/school";

export default function ContactSection() {
  return (
    <section id="kontak" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-amber-500" />
            <span className="text-amber-600 text-xs font-medium tracking-[0.15em] uppercase">
              Hubungi Kami
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900 mb-6 tracking-tight">
            Informasi Kontak
          </h2>
          <p className="text-slate-500 font-light leading-relaxed text-lg">
            Kami siap membantu menjawab pertanyaan Anda seputar SDN Kapuk Muara 03.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <div className="bg-slate-50 rounded-2xl p-10 mb-6">
              <h3 className="text-xl font-medium text-slate-900 mb-8">Alamat & Kontak</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-elegant">
                    <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 mb-1">Alamat</p>
                    <p className="text-slate-500 font-light leading-relaxed">
                      {schoolData.address.street}<br />
                      {schoolData.address.district}, {schoolData.address.city}<br />
                      {schoolData.address.province} {schoolData.address.postalCode}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-elegant">
                    <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 mb-1">Telepon</p>
                    <p className="text-slate-500 font-light">{schoolData.contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-elegant">
                    <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 mb-1">Email</p>
                    <p className="text-slate-500 font-light">{schoolData.contact.email}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200 mt-8 pt-8">
                <p className="font-medium text-slate-900 mb-2">Jam Operasional</p>
                <p className="text-slate-500 font-light">
                  Senin - Jumat: 07.00 - 15.00 WIB<br />
                  Sabtu: 07.00 - 12.00 WIB
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-slate-100 rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-12 h-12 mx-auto mb-3 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>
                <p className="text-slate-400 font-light">Google Maps</p>
              </div>
            </div>
          </div>

          {/* News Section */}
          <div>
            <div className="bg-slate-50 rounded-2xl p-10">
              <h3 className="text-xl font-medium text-slate-900 mb-8">Berita & Pengumuman</h3>

              <div className="space-y-6">
                {news.map((item, index) => (
                  <div
                    key={index}
                    className="group pb-6 border-b border-slate-200 last:border-0 last:pb-0"
                  >
                    <p className="text-amber-600 text-sm font-medium mb-2">{item.date}</p>
                    <h4 className="font-medium text-slate-900 text-lg mb-2 group-hover:text-amber-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 font-light leading-relaxed">{item.excerpt}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact CTA */}
            <div className="bg-slate-900 rounded-2xl p-10 mt-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />
              <div className="relative">
                <h3 className="text-xl font-medium text-white mb-4">Ada Pertanyaan?</h3>
                <p className="text-white/60 font-light mb-6">
                  Tim kami siap membantu Anda. Hubungi kami melalui WhatsApp untuk respon cepat.
                </p>
                <Link
                  href={`https://wa.me/${schoolData.contact.whatsapp}?text=Halo, saya ingin bertanya tentang SDN Kapuk Muara 03`}
                  target="_blank"
                  className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-medium py-4 px-6 rounded-xl transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat via WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
