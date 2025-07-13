import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, Download } from "lucide-react";

const SeleksiJPTPratama = () => {
  const jabatan =
    "Direktur Kebijakan Sumber Daya Manusia Keamanan Siber dan Sandi, Direktur Keamanan Siber dan Sandi Pemerintah Daerah, Direktur Keamanan Siber dan Sandi Pembangunan Manusia, Direktur Keamanan Siber dan Sandi Energi dan Sumber Daya Alam, Direktur Keamanan Siber dan Sandi Teknologi Informasi dan Komunikasi, Media, dan Transportasi, dan Direktur Keamanan Siber dan Sandi Industri.";

  const announcements = [
    {
      no: 6,
      tanggal: "21 Maret 2024",
      nomor: "PENG.31/BSSN/SU/KP.04.12/03/2024",
      tentang:
        "Pengumuman Hasil Akhir Seleksi Terbuka Pengisian Jabatan Pimpinan Tinggi Pratama Badan Siber dan Sandi Negara Tahun 2024",
      link: "https://www.bssn.go.id/wp-content/uploads/2024/03/PENGUMUMAN-HASIL-AKHIR-SELEKSI-TERBUKA-JPT-PRATAMA-BSSN_sign_sign_signed.pdf",
    },
    {
      no: 5,
      tanggal: "5 Maret 2024",
      nomor: "PENG.23/BSSN/SU/KP.04.12/03/2024",
      tentang:
        "Pelaksanaan Wawancara Seleksi Terbuka Pengisian Jabatan Pimpinan Tinggi Pratama Badan Siber dan Sandi Negara Tahun 2024",
      link: "https://www.bssn.go.id/wp-content/uploads/2024/03/PENGUMUMAN-PELAKSANAAN-SELEKSI-WAWANCARA_sign_signed.pdf.pdf",
    },
    {
      no: 4,
      tanggal: "27 Februari 2024",
      nomor: "PENG.20/BSSN/SU/KP.04.12/02/2024",
      tentang:
        "Hasil Assessment Center Seleksi Terbuka Pengisian Jabatan Pimpinan Tinggi Pratama Badan Siber dan Sandi Negara Tahun 2024",
      link: "https://www.bssn.go.id/wp-content/uploads/2024/02/PENGUMUMAN-HASIL-ASSESSMENT-CENTER-SELTER-JPTP-BSSN-TAHUN-2024_sign_signed.pdf",
    },
    {
      no: 3,
      tanggal: "15 Februari 2024",
      nomor: "PENG.19/BSSN/SU/KP.04.12/02/2024",
      tentang:
        "Hasil Seleksi Penulisan Makalah Seleksi Terbuka Pengisian Jabatan Pimpinan Tinggi Pratama Badan Siber dan Sandi Negara",
      link: "https://www.bssn.go.id/wp-content/uploads/2024/02/PENGUMUMAN-HASIL-SELEKSI-PENULISAN-MAKALAH-JPTP-BSSN-2024_sign_sign_signed.pdf",
    },
    {
      no: 2,
      tanggal: "7 Februari 2024",
      nomor: "PENG.14/BSSN/SU/KP.04.12/02/2024",
      tentang:
        "Hasil Seleksi Administrasi Seleksi Terbuka Pengisian Jabatan Pimpinan Tinggi Pratama Badan Siber dan Sandi Negara",
      link: "https://www.bssn.go.id/wp-content/uploads/2024/02/PENGUMUMAN-ADMINISTRASI-JPT-PRATAMA-2024_sign_signed.pdf",
    },
    {
      no: 1,
      tanggal: "22 Januari 2024",
      nomor: "PENG.6/BSSN/SU/KP.03.03/01/2024",
      tentang:
        "Seleksi Terbuka Pengisian Jabatan Pimpinan Tinggi Pratama Badan Siber dan Sandi Negara Tahun 2024",
      link: "https://www.bssn.go.id/wp-content/uploads/2024/01/PUM-Seleksi-Terbuka-JPT-Pratama-1_sign.pdf",
    },
  ];

  return (
    <div className="min-h-screen bg-muted/20">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 via-background to-red-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                <Briefcase className="mr-2 h-4 w-4" />
                Jabatan Pimpinan Tinggi
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Seleksi JPT Pratama BSSN Tahun 2024
              </h1>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl space-y-12">
            <Card>
              <CardHeader>
                <CardTitle>Pengumuman Umum</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Dalam rangka pengisian Jabatan Pimpinan Tinggi Pratama di
                  lingkungan BSSN tahun 2024, dengan ini diumumkan kepada PNS
                  yang memenuhi persyaratan untuk mengikuti seleksi terbuka pada
                  jabatan: <strong>{jabatan}</strong>
                </p>
              </CardContent>
            </Card>

            {/* Tahapan Seleksi */}
            <Card>
              <CardHeader>
                <CardTitle>Tahapan dan Jadwal Seleksi</CardTitle>
                <CardDescription>
                  Jadwal seleksi sewaktu-waktu dapat berubah dan setiap
                  perubahan akan diberitahukan melalui laman ini.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="https://www.bssn.go.id/wp-content/uploads/2024/01/Picture3.png"
                  alt="Tahapan Seleksi JPT Pratama"
                  className="w-full h-auto rounded-lg border"
                />
              </CardContent>
            </Card>

            {/* Announcements List */}
            <Card>
              <CardHeader>
                <CardTitle>Daftar Pengumuman</CardTitle>
                <CardDescription>
                  Semua pengumuman terkait proses seleksi JPT Pratama dapat
                  diunduh di bawah ini.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {announcements.map((item, index) => (
                    <li
                      key={index}
                      className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg hover:bg-muted/50"
                    >
                      <div className="flex-1 mb-3 sm:mb-0">
                        <p className="font-semibold">{item.tentang}</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          No: {item.nomor} • Tanggal: {item.tanggal}
                        </p>
                      </div>
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Unduh
                        </a>
                      </Button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SeleksiJPTPratama;