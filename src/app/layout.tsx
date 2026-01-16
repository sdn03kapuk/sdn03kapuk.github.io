import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "SDN 03 Kapuk Muara - Sekolah Dasar Negeri di Jakarta Utara",
  description:
    "SDN 03 Kapuk Muara adalah sekolah dasar negeri di Jakarta Utara yang berkomitmen membentuk generasi cerdas, berkarakter, dan cinta lingkungan. Akreditasi A.",
  keywords: [
    "SDN 03 Kapuk Muara",
    "Sekolah Dasar",
    "Jakarta Utara",
    "Penjaringan",
    "PPDB",
    "Pendidikan",
  ],
  authors: [{ name: "SDN 03 Kapuk Muara" }],
  openGraph: {
    title: "SDN 03 Kapuk Muara - Sekolah Dasar Negeri di Jakarta Utara",
    description:
      "Membentuk Generasi Cerdas, Berkarakter, dan Cinta Lingkungan",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${ubuntu.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
