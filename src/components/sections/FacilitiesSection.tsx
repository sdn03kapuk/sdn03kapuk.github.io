import Image from "next/image";
import { facilities, galleryImages } from "@/data/school";

export default function FacilitiesSection() {
  return (
    <section id="fasilitas" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-amber-500" />
            <span className="text-amber-600 text-xs font-medium tracking-[0.15em] uppercase">
              Sarana Prasarana
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900 mb-6 tracking-tight">
            Fasilitas Sekolah
          </h2>
          <p className="text-slate-500 font-light leading-relaxed text-lg">
            Fasilitas lengkap dan nyaman untuk mendukung proses pembelajaran
            yang optimal.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <Image
                src={facility.image}
                alt={facility.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-medium text-white text-lg mb-1">{facility.name}</h3>
                <p className="text-white/60 text-sm font-light">
                  {facility.count > 1 ? `${facility.count} unit` : "Tersedia"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Photo Gallery */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-medium text-slate-900 tracking-tight">
              Galeri Kegiatan
            </h3>
            <span className="w-24 h-px bg-slate-200" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden aspect-square"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-sm font-light tracking-wide">
                    {image.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
