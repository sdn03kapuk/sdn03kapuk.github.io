export const schoolData = {
  name: "SDN 03 Kapuk Muara",
  fullName: "Sekolah Dasar Negeri 03 Kapuk Muara",
  tagline: "Membentuk Generasi Cerdas, Berkarakter, dan Cinta Lingkungan",
  npsn: "20104567",
  accreditation: "A",
  established: "1985",
  address: {
    street: "Jl. Kapuk Muara Raya No. 45",
    district: "Penjaringan",
    city: "Jakarta Utara",
    province: "DKI Jakarta",
    postalCode: "14460",
  },
  contact: {
    phone: "(021) 5555-1234",
    whatsapp: "6281234567890",
    email: "sdn03kapukmuara@jakarta.go.id",
  },
  socialMedia: {
    instagram: "https://instagram.com/sdn03kapukmuara",
    facebook: "https://facebook.com/sdn03kapukmuara",
    youtube: "https://youtube.com/@sdn03kapukmuara",
  },
  stats: {
    students: 450,
    teachers: 24,
    classes: 12,
    extracurriculars: 8,
  },
};

export const visionMission = {
  vision: "Membentuk Generasi Cerdas, Berkarakter, dan Cinta Lingkungan",
  missions: [
    "Mengembangkan pembelajaran aktif, kreatif, dan menyenangkan",
    "Menanamkan nilai-nilai karakter Profil Pelajar Pancasila",
    "Membiasakan perilaku peduli lingkungan sejak dini",
    "Mengembangkan potensi siswa secara holistik",
    "Menjalin kemitraan positif dengan orang tua dan masyarakat",
  ],
};

export const principalData = {
  name: "Dra. Siti Rahayu, M.Pd",
  photo: "/images/principal.jpg",
  message:
    "Selamat datang di SDN 03 Kapuk Muara. Kami berkomitmen untuk memberikan pendidikan berkualitas yang tidak hanya mengembangkan kecerdasan akademik, tetapi juga membentuk karakter peserta didik yang berakhlak mulia dan siap menghadapi tantangan masa depan.",
};

export const teachers = [
  { name: "Dra. Siti Rahayu, M.Pd", role: "Kepala Sekolah", photo: "/images/principal.jpg" },
  { name: "Ahmad Fauzi, S.Pd", role: "Guru Kelas 1", photo: "/images/teacher-1.jpg" },
  { name: "Dewi Lestari, S.Pd", role: "Guru Kelas 2", photo: "/images/teacher-2.jpg" },
];

export const programs = [
  {
    title: "Program Literasi",
    description: "Gerakan membaca 15 menit sebelum belajar untuk membangun kebiasaan membaca sejak dini",
    icon: "book",
  },
  {
    title: "Pembelajaran Berbasis Proyek",
    description: "Metode pembelajaran aktif yang mengembangkan kreativitas dan kemampuan problem solving",
    icon: "lightbulb",
  },
  {
    title: "Pendidikan Karakter",
    description: "Penanaman nilai-nilai Profil Pelajar Pancasila dalam setiap kegiatan pembelajaran",
    icon: "star",
  },
  {
    title: "Green School",
    description: "Program peduli lingkungan dengan kebun sekolah dan pengelolaan sampah",
    icon: "leaf",
  },
];

export const extracurriculars = [
  { name: "Pramuka", category: "Wajib", day: "Jumat" },
  { name: "Pencak Silat", category: "Olahraga", day: "Selasa" },
  { name: "Futsal", category: "Olahraga", day: "Rabu" },
  { name: "Tari Tradisional", category: "Seni", day: "Kamis" },
  { name: "Paduan Suara", category: "Seni", day: "Sabtu" },
  { name: "English Club", category: "Akademik", day: "Senin" },
  { name: "Robotika", category: "Akademik", day: "Sabtu" },
  { name: "Tahfidz", category: "Keagamaan", day: "Jumat" },
];

export const facilities = [
  { name: "Ruang Kelas Ber-AC", count: 12, image: "/images/facility-1.jpg" },
  { name: "Perpustakaan", count: 1, image: "/images/facility-2.jpg" },
  { name: "Lapangan Olahraga", count: 1, image: "/images/facility-3.jpg" },
  { name: "Lab Komputer", count: 1, image: "/images/facility-4.jpg" },
];

export const galleryImages = [
  { src: "/images/activity-1.jpg", alt: "Kegiatan Belajar" },
  { src: "/images/activity-2.jpg", alt: "Pembelajaran Interaktif" },
  { src: "/images/activity-3.jpg", alt: "Kegiatan Olahraga" },
  { src: "/images/activity-4.jpg", alt: "Kegiatan Seni" },
];

export const achievements = [
  {
    title: "Juara 1 Lomba Cerdas Cermat",
    level: "Tingkat Kecamatan",
    year: "2024",
    category: "Akademik",
  },
  {
    title: "Juara 2 Lomba Futsal SD",
    level: "Tingkat Kota Jakarta Barat",
    year: "2024",
    category: "Olahraga",
  },
  {
    title: "Juara 1 Lomba Tari Kreasi",
    level: "Tingkat Provinsi DKI Jakarta",
    year: "2023",
    category: "Seni",
  },
  {
    title: "Sekolah Adiwiyata",
    level: "Tingkat Kota",
    year: "2023",
    category: "Lingkungan",
  },
  {
    title: "Juara 3 Olimpiade Matematika",
    level: "Tingkat Kecamatan",
    year: "2024",
    category: "Akademik",
  },
  {
    title: "Juara 1 Lomba Hafalan Quran",
    level: "Tingkat Kecamatan",
    year: "2024",
    category: "Keagamaan",
  },
];

export const ppdbInfo = {
  year: "2025/2026",
  registrationPeriod: "1 Juni - 30 Juni 2025",
  announcementDate: "10 Juli 2025",
  requirements: [
    "Usia minimal 6 tahun pada 1 Juli 2025",
    "Fotokopi Akta Kelahiran",
    "Fotokopi Kartu Keluarga",
    "Fotokopi KTP Orang Tua",
    "Pas foto 3x4 (4 lembar)",
    "Surat Keterangan Sehat dari Puskesmas",
  ],
  steps: [
    "Daftar online di ppdb.jakarta.go.id",
    "Verifikasi dokumen di sekolah",
    "Pengumuman hasil seleksi",
    "Daftar ulang",
  ],
};

export const news = [
  {
    title: "Peringatan Hari Pendidikan Nasional 2024",
    date: "2 Mei 2024",
    excerpt: "SDN 03 Kapuk Muara mengadakan upacara dan berbagai lomba dalam rangka memperingati Hardiknas.",
  },
  {
    title: "Kunjungan Edukasi ke Museum Nasional",
    date: "15 April 2024",
    excerpt: "Siswa kelas 5 dan 6 mengikuti kunjungan edukasi untuk mengenal sejarah Indonesia.",
  },
  {
    title: "Juara Lomba Cerdas Cermat Tingkat Kecamatan",
    date: "20 Maret 2024",
    excerpt: "Tim SDN 03 Kapuk Muara berhasil meraih juara 1 dalam lomba cerdas cermat antar SD.",
  },
];
