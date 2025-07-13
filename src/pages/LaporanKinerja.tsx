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
import { FileText, Download, ArrowRight } from "lucide-react"; // Menambahkan ikon ArrowRight
import { Link } from "react-router-dom"; // Pastikan Link sudah di-import

// Menambahkan properti 'isInternal' untuk membedakan jenis tautan
const laporanData = [
  {
    judul: "Laporan Kinerja Badan Siber dan Sandi Negara Tahun 2024",
    link: "https://www.bssn.go.id/wp-content/uploads/2025/03/LKj-BSSN-2024.pdf",
    tanggal: "2 Maret 2025",
    isInternal: false, // Ini adalah link eksternal (PDF)
  },
  {
    judul: "Laporan Kinerja Unit Kerja di Lingkungan BSSN Tahun 2024",
    link: "/laporan-kinerja/unit-2024", // Ini adalah link internal
    tanggal: "13 Januari 2025",
    isInternal: true,
  },
  {
    judul: "Laporan Kinerja Badan Siber dan Sandi Negara Tahun 2023",
    link: "https://www.bssn.go.id/wp-content/uploads/2024/07/LKJ-BSSN-2023_Sign.pdf",
    tanggal: "19 Maret 2024",
    isInternal: false, // Ini adalah link eksternal (PDF)
  },
];

const LaporanKinerja = () => {
  return (
    <div className="min-h-screen bg-muted/20">
      <Navigation />
      <main>
        <section className="bg-gradient-to-br from-orange-50 via-background to-government-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                <FileText className="mr-2 h-4 w-4" />
                Pelaporan
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Laporan Kinerja (LAKIP)
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Wujud pertanggungjawaban atas pencapaian kinerja BSSN dalam satu
                tahun anggaran.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle>Dokumen Laporan Kinerja Tahunan</CardTitle>
                <CardDescription>
                  Kumpulan Laporan Kinerja Instansi Pemerintah (LAKIP) yang
                  dipublikasikan oleh BSSN.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Judul Laporan</TableHead>
                      <TableHead>Tanggal Publikasi</TableHead>
                      <TableHead className="text-center w-[130px]">
                        Aksi
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {laporanData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          {item.judul}
                        </TableCell>
                        <TableCell>{item.tanggal}</TableCell>
                        <TableCell className="text-center">
                          {/* ### BAGIAN YANG DIUBAH ### */}
                          <Button asChild variant="outline" size="sm">
                            {item.isInternal ? (
                              <Link to={item.link}>
                                Lihat Detail
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            ) : (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Download className="h-4 w-4" />
                              </a>
                            )}
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
      </main>
      <Footer />
    </div>
  );
};

export default LaporanKinerja;