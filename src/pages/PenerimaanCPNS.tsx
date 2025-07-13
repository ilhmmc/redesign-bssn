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
import { Download, UserPlus } from "lucide-react";

// Data lengkap diekstrak dari file HTML
const pengumumanData = [
  {
    no: 13,
    tanggal: "9 April 2025",
    nomor: "PENG.41/BSSN/SU/KP.02.01/04/2025",
    tentang: "Pembatalan Kelulusan Peserta Seleksi Pengadaan Calon Pegawai Negeri Sipil Badan Siber dan Sandi Negara Tahun Anggaran 2024",
    link: "https://www.bssn.go.id/wp-content/uploads/2025/04/PUM-Pembatalan-Kelulusan-CPNS.pdf",
  },
  {
    no: 12,
    tanggal: "24 Februari 2025",
    nomor: "PENG.24/BSSN/SU/KP.02.01/02/2025",
    tentang: "Pembatalan Kelulusan Peserta Seleksi Pengadaan Calon Pegawai Negeri Sipil Badan Siber dan Sandi Negara Tahun Anggaran 2024",
    link: "https://www.bssn.go.id/wp-content/uploads/2025/02/Pengumuman-Pembatalan-Kelulusan-Peserta-Seleksi-CPNS-TA.-2024_sign_signed.pdf",
  },
  {
    no: 11,
    tanggal: "20 Januari 2025",
    nomor: "PENG.5/BSSN/SU/KP.02.01/01/2025",
    tentang: "Hasil Akhir Pasca Sanggah Seleksi Pengadaan Calon Pegawai Negeri Sipil Badan Siber dan Sandi Negara Tahun Anggaran 2024",
    link: "https://www.bssn.go.id/wp-content/uploads/2025/01/Pengumuman-Hasil-Pasca-Sanggah-Seleksi-Pengadaan-CPNS-BSSN_sign_signed.pdf",
  },
  {
    no: 10,
    tanggal: "9 Januari 2025",
    nomor: "PENG.3/BSSN/SU/KP.02.01/01/2025",
    tentang: "Hasil Akhir Seleksi Pengadaan Calon Pegawai Negeri Sipil Badan Siber dan Sandi Negara Tahun Anggaran 2024",
    link: "https://www.bssn.go.id/wp-content/uploads/2025/01/Pengumuman-Hasil-Akhir-Seleksi-Pengadaan-CPNS-BSSN_sign_signed.pdf",
  },
  {
    no: 9,
    tanggal: "9 Desember 2024",
    nomor: "PENG.131/BSSN/SU/KP.02.01/12/2024",
    tentang: "Pelaksanaan Seleksi Kompetensi Bidang Metode CAT di Lokasi Yogyakarta, Lampung, dan Semarang",
    link: "https://www.bssn.go.id/wp-content/uploads/2024/12/Pengumuman-Jadwal-SKB-CAT-Lokasi-Yogya-Lampung-Semarang_sign_signed.pdf",
  },
  {
    no: 8,
    tanggal: "5 Desember 2024",
    nomor: "PENG.129/BSSN/SU/KP.02.01/12/2024",
    tentang: "Pelaksanaan Seleksi Kompetensi Bidang Metode Computer Assisted Test (CAT)",
    link: "https://www.bssn.go.id/wp-content/uploads/2024/12/Pengumuman-Pelaksanaan-SKB-CAT-Seleksi-CPNS-BSSN_sign_signed.pdf",
  },
  {
    no: 7,
    tanggal: "3 Desember 2024",
    nomor: "PENG.127/BSSN/SU/KP.02.01/12/2024",
    tentang: "Jadwal Pelaksanaan Seleksi Wawancara, Litpers, dan Kompetensi Teknis",
    link: "https://www.bssn.go.id/wp-content/uploads/2024/12/Pengumuman-Jadwal-Seleksi-Wawancara-Litpers-dan-Kompetensi_sign_signed.pdf",
  },
  {
    no: 6,
    tanggal: "18 November 2024",
    nomor: "PENG.123/BSSN/SU/KP.02.01/11/2024",
    tentang: "Hasil Seleksi Kompetensi Dasar dan Pelaksanaan Seleksi Kompetensi Bidang",
    link: "https://www.bssn.go.id/wp-content/uploads/2024/11/Pengumuman-Hasil-SKD-dan-Pelaksanaan-SKB-Seleksi-CPNS-BSSN_sign_signed.pdf",
  },
  {
    no: 5,
    tanggal: "13 Oktober 2024",
    nomor: "PENG.104/BSSN/SU/KP.02.01/10/2024",
    tentang: "Pelaksanaan Seleksi Kompetensi Dasar pada Seleksi Pengadaan CPNS BSSN",
    link: "https://www.bssn.go.id/wp-content/uploads/2024/10/Pengumuman-Jadwal-SKD-Seleksi-Pengadaan-CPNS-BSSN-TA-2024_sign_signed.pdf",
  },
  {
    no: 4,
    tanggal: "27 September 2024",
    nomor: "PENG.95/BSSN/SU/KP.02.01/09/2024",
    tentang: "Hasil Seleksi Administrasi (Pasca Sanggah) Seleksi Pengadaan CPNS BSSN",
    link: "https://www.bssn.go.id/wp-content/uploads/2024/09/Pengumuman-Hasil-Seleksi-Administrasi-Seleksi-Pengadaan-CPNS-BSSN-2024-Pasca-Sanggah_sign_signed.pdf",
  },
  {
    no: 3,
    tanggal: "18 September 2024",
    nomor: "PENG.91/BSSN/SU/KP.02.01/09/2024",
    tentang: "Hasil Seleksi Administrasi (Pra Sanggah) Seleksi Pengadaan CPNS BSSN",
    link: "https://www.bssn.go.id/wp-content/uploads/2024/09/Pengumuman-Hasil-Seleksi-Administrasi-Seleksi-Pengadaan-CPNS-BSSN-2024.pdf",
  },
  {
    no: 2,
    tanggal: "6 September 2024",
    nomor: "PENG.87/BSSN/SU/KP.02.01/09/2024",
    tentang: "Penyesuaian Jadwal dan Penggunaan Meterai Seleksi CPNS BSSN",
    link: "https://www.bssn.go.id/wp-content/uploads/2024/09/PUM-Penyesuaian-Jadwal-Penggunaan-Meterai-Seleksi-CPNS-2024.pdf",
  },
  {
    no: 1,
    tanggal: "20 Agustus 2024",
    nomor: "PENG.80/BSSN/SU/KP.02.01/08/2024",
    tentang: "Seleksi Pengadaan Calon Pegawai Negeri Sipil (CPNS) BSSN TA 2024",
    link: "https://www.bssn.go.id/wp-content/uploads/2024/08/Pengumuman-Seleksi-Pengadaan-CPNS-BSSN-TA-2024.pdf",
  },
];

const formatDokumen = [
    { nama: "Surat Pernyataan", link: "https://www.bssn.go.id/wp-content/uploads/2024/08/Format-Surat-Pernyataan.docx" },
    { nama: "Surat Lamaran Formasi Umum", link: "https://www.bssn.go.id/wp-content/uploads/2024/08/Surat-Lamaran-CPNS-2024-BSSN_Formasi-Umum.docx" },
    { nama: "Surat Lamaran Lulusan Terbaik", link: "https://www.bssn.go.id/wp-content/uploads/2024/08/Surat-Lamaran-CPNS-2024-BSSN_Lulusan-Terbaik.docx" },
    { nama: "Surat Lamaran Formasi Kalimantan", link: "https://www.bssn.go.id/wp-content/uploads/2024/08/Surat-Lamaran-CPNS-2024-BSSN_Formasi-Kalimantan.docx" },
    { nama: "Surat Lamaran Formasi Disabilitas", link: "https://www.bssn.go.id/wp-content/uploads/2024/08/Surat-Lamaran-CPNS-2024-BSSN_Disabilitas.docx" },
    { nama: "Surat Keterangan Disabilitas", link: "https://www.bssn.go.id/wp-content/uploads/2024/08/Surat-Keterangan-Disabilitas-2024-BSSN.docx" },
    { nama: "Surat Pernyataan Tidak Mengajukan Mutasi", link: "https://www.bssn.go.id/wp-content/uploads/2025/01/Format-Surat-Pernyataan-Tidak-Mengajukan-Mutasi.docx" },
    { nama: "Surat Pernyataan 5 Poin", link: "https://www.bssn.go.id/wp-content/uploads/2025/01/Lampiran-Surat-Pernyataan-5-Poin.docx" },
    { nama: "Surat Permohonan Mengundurkan Diri", link: "https://www.bssn.go.id/wp-content/uploads/2025/01/Lampiran-Surat-Permohonan-Mengundurkan-Diri-Apabila-Peserta-Mengundurkan-Diri.docx" },
];

const PenerimaanCPNS = () => {
  return (
    <div className="min-h-screen bg-muted/20">
      <Navigation />
      <main>
        <section className="bg-gradient-to-br from-green-50 via-background to-cyan-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-green-100 text-green-700 border-green-200">
                <UserPlus className="mr-2 h-4 w-4" />
                Karir
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Seleksi Penerimaan <span className="gradient-text-green">CPNS BSSN 2024</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Informasi resmi mengenai proses seleksi Calon Pegawai Negeri Sipil di lingkungan Badan Siber dan Sandi Negara.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <Card>
              <CardHeader>
                <CardTitle>Pengumuman Seleksi CPNS BSSN Tahun 2024</CardTitle>
                <CardDescription>
                  Daftar pengumuman terkait proses seleksi pengadaan CPNS BSSN.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[50px]">No</TableHead>
                      <TableHead className="w-[150px]">Tanggal</TableHead>
                      <TableHead>Tentang</TableHead>
                      <TableHead className="text-center w-[100px]">Aksi</TableHead>
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
                              <Download className="h-4 w-4" />
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

export default PenerimaanCPNS;