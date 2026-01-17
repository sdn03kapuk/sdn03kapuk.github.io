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
  title: "SDN Kapuk Muara 03 - Sekolah Dasar Negeri di Jakarta Utara",
  description:
    "SDN Kapuk Muara 03 adalah sekolah dasar negeri di Jakarta Utara yang berkomitmen membentuk generasi cerdas, berkarakter, dan cinta lingkungan. Akreditasi A.",
  keywords: [
    "SDN Kapuk Muara 03",
    "Sekolah Dasar",
    "Jakarta Utara",
    "Penjaringan",
    "PPDB",
    "Pendidikan",
  ],
  authors: [{ name: "SDN Kapuk Muara 03" }],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "SDN Kapuk Muara 03 - Sekolah Dasar Negeri di Jakarta Utara",
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
