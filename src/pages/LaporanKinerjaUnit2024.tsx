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
import { FileText, Download } from "lucide-react";

// Data diekstrak dari file HTML Laporan Kinerja Unit Kerja
const laporanUnitData = [
  { unit: "Sekretariat Utama", link: "https://www.bssn.go.id/wp-content/uploads/2025/01/LKj-SU-2024.pdf" },
  { unit: "Deputi Bidang Strategi dan Kebijakan", link: "https://www.bssn.go.id/wp-content/uploads/2025/02/LKj-D1-2024_.pdf" },
  { unit: "Deputi Bidang Operasi", link: "https://www.bssn.go.id/wp-content/uploads/2025/02/LKj-D2-2024_.pdf" },
  { unit: "Deputi Bidang Keamanan Pemerintahan dan Pembangunan Manusia", link: "https://www.bssn.go.id/wp-content/uploads/2025/06/LKj-D3-2024_.pdf" },
  { unit: "Deputi Bidang Perekonomian", link: "https://www.bssn.go.id/wp-content/uploads/2025/01/LKj_D4_2024.pdf" },
  { unit: "Biro Perencanaan dan Keuangan", link: "https://www.bssn.go.id/wp-content/uploads/2025/01/LKj-S1-2024.pdf" },
  { unit: "Biro Organisasi dan SDM", link: "https://www.bssn.go.id/wp-content/uploads/2025/01/LKj-S2-2024.pdf" },
  { unit: "Biro Hukum dan Komunikasi Publik", link: "https://www.bssn.go.id/wp-content/uploads/2025/01/LKj-S3-2024.pdf" },
  { unit: "Biro Umum", link: "https://www.bssn.go.id/wp-content/uploads/2025/01/LKj-S4-2024.pdf" },
  { unit: "Inspektorat", link: "https://www.bssn.go.id/wp-content/uploads/2025/01/LKj-IR-2024.pdf" },
  { unit: "Pusat Sertifikasi Teknologi Keamanan Siber dan Sandi", link: "https://www.bssn.go.id/wp-content/uploads/2025/02/LKj-P1-2024_.pdf" },
  { unit: "Pusat Data dan TIK", link: "https://www.bssn.go.id/wp-content/uploads/2025/01/LKj-P2-2024.pdf" },
  { unit: "Pusat Pengembangan SDM", link: "https://www.bssn.go.id/wp-content/uploads/2025/01/LKj-P3-2024.pdf" },
  { unit: "Politeknik Siber dan Sandi Negara", link: "https://www.bssn.go.id/wp-content/uploads/2025/02/LKj-PSSN-2024.pdf" },
  { unit: "Balai Besar Sertifikasi Elektronik", link: "https://www.bssn.go.id/wp-content/uploads/2025/01/LKj_BSrE_2024.pdf" },
];

const LaporanKinerjaUnit = () => {
  return (
    <div className="min-h-screen bg-muted/20">
      <Navigation />
      <main>
        <section className="bg-gradient-to-br from-orange-50 via-background to-government-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                <FileText className="mr-2 h-4 w-4" />
                Pelaporan per Unit
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Laporan Kinerja Unit Kerja
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Rincian pertanggungjawaban pelaksanaan tugas dan fungsi yang dipercayakan kepada setiap Unit Kerja di lingkungan BSSN untuk Tahun 2024.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle>Dokumen Laporan Kinerja per Unit Kerja Tahun 2024</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>No.</TableHead>
                      <TableHead>Nama Unit Kerja</TableHead>
                      <TableHead className="text-center w-[120px]">Tautan Unduh</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {laporanUnitData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell className="font-medium">{item.unit}</TableCell>
                        <TableCell className="text-center">
                          <Button asChild variant="outline" size="sm">
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
      </main>
      <Footer />
    </div>
  );
};

export default LaporanKinerjaUnit;