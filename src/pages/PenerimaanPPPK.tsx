import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Eye, UserPlus, UserRoundCheck } from "lucide-react";

// Data diekstrak dari file HTML PPPK 2024
const pengumumanData = [
  {
    no: 1,
    tanggal: "30 September 2024",
    nomor: "PENG.97/BSSN/SU/KP.02.01/09/2024",
    tentang: "Seleksi Pengadaan Pegawai Pemerintah dengan Perjanjian Kerja (PPPK) BSSN TA 2024",
    link: "https://www.bssn.go.id/wp-content/uploads/2024/10/Pengumuman-Seleksi-Pengadaan-PPPK-BSSN-TA-2024-3009_sign_signed.pdf",
  },
  {
    no: 2,
    tanggal: "30 Oktober 2024",
    nomor: "PENG.114/BSSN/SU/KP.02.01/10/2024",
    tentang: "Hasil Seleksi Administrasi (Pra Sanggah) Seleksi PPPK (Periode I)",
    link: "https://www.bssn.go.id/wp-content/uploads/2024/10/Pengumuman-Hasil-Seleksi-Administrasi-Seleksi-Pengadaan-PPPK-BSSN-2024-I_sign_signed.pdf",
  },
  {
    no: 3,
    tanggal: "7 November 2024",
    nomor: "PENG.119/BSSN/SU/KP.02.01/11/2024",
    tentang: "Hasil Seleksi Administrasi (Pasca Sanggah) Seleksi PPPK (Periode I)",
    link: "https://www.bssn.go.id/wp-content/uploads/2024/11/Pengumuman-Hasil-Seleksi-Administrasi-PPPK-Pasca-Sanggah_sign_signed.pdf",
  },
  {
    no: 4,
    tanggal: "28 November 2024",
    nomor: "PENG.126/BSSN/SU/KP.02.01/11/2024",
    tentang: "Pelaksanaan Seleksi Kompetensi pada Seleksi PPPK (Periode I)",
    link: "https://www.bssn.go.id/wp-content/uploads/2024/11/Pengumuman-Pelaksanaan-Selkom-Seleksi-Pengadaan-PPPK-Periode-I_sign_signed.pdf",
  },
  {
    no: 5,
    tanggal: "27 Desember 2024",
    nomor: "PENG.140/BSSN/SU/KP.02.01/12/2024",
    tentang: "Hasil Akhir Seleksi PPPK (Periode I)",
    link: "https://www.bssn.go.id/wp-content/uploads/2024/12/Pengumuman-Hasil-Akhir-Seleksi-Pengadaan-PPPK-Periode-I_sign_signed.pdf",
  },
  {
    no: 6,
    tanggal: "30 Desember 2024",
    nomor: "PENG.142/BSSN/SU/KP.02.01/12/2024",
    tentang: "Penyesuaian Jadwal Seleksi PPPK (Periode II)",
    link: "https://www.bssn.go.id/wp-content/uploads/2024/12/Pengumuman-Penyesuaian-Jadwal-Seleksi-PPPK-TA-2024-Periode-II_sign_signed.pdf",
  },
  {
    no: 7,
    tanggal: "7 Januari 2025",
    nomor: "PENG.2/BSSN/SU/KP.02.01/01/2025",
    tentang: "Penyesuaian Kembali Jadwal Seleksi PPPK (Periode II)",
    link: "https://www.bssn.go.id/wp-content/uploads/2025/01/Pengumuman-Penyesuaian-Kembali-Jadwal-Seleksi-PPPK-Periode-II-2024_sign_signed.pdf",
  },
  {
    no: 8,
    tanggal: "3 Februari 2025",
    nomor: "PENG.10/BSSN/SU/KP.02.01/02/2025",
    tentang: "Pembatalan Kelulusan Peserta Seleksi PPPK (Periode I)",
    link: "https://www.bssn.go.id/wp-content/uploads/2025/02/PUM-Pembatalan-PPPK-Formasi-2024_sign_signed.pdf",
  },
  {
    no: 9,
    tanggal: "13 Februari 2025",
    nomor: "PENG.20/BSSN/SU/KP.02.01/02/2025",
    tentang: "Hasil Seleksi Administrasi (Pra Sanggah) Seleksi PPPK (Periode II)",
    link: "https://www.bssn.go.id/wp-content/uploads/2025/02/Pengumuman-Hasil-Seleksi-Administrasi-PPPK-Periode-II.pdf",
  },
  {
    no: 10,
    tanggal: "28 Februari 2025",
    nomor: "PENG.28/BSSN/SU/KP.02.01/02/2025",
    tentang: "Hasil Seleksi Administrasi (Pasca Sanggah) Seleksi PPPK (Periode II)",
    link: "https://www.bssn.go.id/wp-content/uploads/2025/03/Pengumuman-Hasil-Seleksi-Administrasi-PPPK-Periode-II-Pasca_sign_signed.pdf",
  },
  {
    no: 11,
    tanggal: "2 Mei 2025",
    nomor: "PENG.53/BSSN/SU/KP.02.01/05/2025",
    tentang: "Pelaksanaan Seleksi Kompetensi pada Seleksi Pengadaan PPPK (Periode II)",
    link: "https://www.bssn.go.id/wp-content/uploads/2025/05/Pengumuman-Jadwal-Selkom-Seleksi-Pengadaan-PPPK-Periode-II.pdf",
  },
];


const formatDokumen = [
  { nama: "Surat Lamaran", link: "https://www.bssn.go.id/wp-content/uploads/2024/10/Lampiran-I-Surat-Lamaran-2024-BSSN.docx" },
  { nama: "Surat Pernyataan 5 Poin", link: "https://www.bssn.go.id/wp-content/uploads/2024/10/Lampiran-II-Surat-Pernyataan-5-Poin-1.docx" },
  { nama: "Surat Pengunduran Diri", link: "https://www.bssn.go.id/wp-content/uploads/2024/12/Lampiran-III-Surat-Permohonan-Mengundurkan-Diri-Apabila-Peserta-Mengundurkan-Diri-1.docx" },
];

const PenerimaanPPPK = () => {
  return (
    <div className="min-h-screen bg-muted/20">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-50 via-background to-indigo-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-teal-100 text-teal-700 border-teal-200">
                <UserRoundCheck className="mr-2 h-4 w-4" />
                Penerimaan PPPK
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Seleksi Penerimaan <span className="gradient-text-teal">PPPK BSSN 2024</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Informasi resmi mengenai proses seleksi Pegawai Pemerintah dengan Perjanjian Kerja di lingkungan Badan Siber dan Sandi Negara.
              </p>
            </div>
          </div>
        </section>

        {/* Pengumuman Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <Card>
              <CardHeader>
                <CardTitle>Pengumuman Seleksi PPPK BSSN Tahun 2024</CardTitle>
                <CardDescription>
                  Daftar pengumuman terkait proses seleksi pengadaan PPPK BSSN.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[50px]">No</TableHead>
                      <TableHead className="w-[150px]">Tanggal</TableHead>
                      <TableHead>Tentang</TableHead>
                      <TableHead className="text-center w-[100px]">Lihat</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pengumumanData.map((item) => (
                      <TableRow key={item.no}>
                        <TableCell>{item.no}</TableCell>
                        <TableCell>{item.tanggal}</TableCell>
                        <TableCell className="font-medium">{item.tentang}</TableCell>
                        <TableCell className="text-center">
                          <Button asChild variant="ghost" size="icon">
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                              <Eye className="h-4 w-4" />
                            </a>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Format Dokumen Section */}
        <section className="pb-20">
            <div className="container mx-auto px-4 max-w-6xl">
                <Card>
                    <CardHeader>
                        <CardTitle>Format Dokumen Pendukung</CardTitle>
                        <CardDescription>Unduh format dokumen yang diperlukan untuk pendaftaran.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {formatDokumen.map((doc, index) => (
                             <Button asChild variant="outline" className="justify-start" key={index}>
                                <a href={doc.link} target="_blank" rel="noopener noreferrer">
                                    <Download className="mr-2 h-4 w-4" />
                                    {doc.nama}
                                </a>
                            </Button>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default PenerimaanPPPK;