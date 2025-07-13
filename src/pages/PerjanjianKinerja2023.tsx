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
import { Handshake, Download } from "lucide-react";

// Data diekstrak dari file HTML Perjanjian Kinerja 2023
const pkUnitKerja2023 = [
  { unit: "SEKRETARIAT UTAMA", link: "https://www.bssn.go.id/wp-content/uploads/2024/07/PERKIN-SU-1.pdf" },
  { unit: "BIRO PERENCANAAN DAN KEUANGAN", link: "https://www.bssn.go.id/wp-content/uploads/2024/07/PERKIN-S1-1.pdf" },
  { unit: "BIRO ORGANISASI DAN SUMBER DAYA MANUSIA", link: "https://www.bssn.go.id/wp-content/uploads/2024/07/PERKIN-S2-1.pdf" },
  { unit: "BIRO HUKUM DAN KOMUNIKASI PUBLIK", link: "https://www.bssn.go.id/wp-content/uploads/2024/07/PERKIN-S3-1.pdf" },
  { unit: "BIRO UMUM", link: "https://www.bssn.go.id/wp-content/uploads/2024/07/PERKIN-S4-1.pdf" },
  { unit: "DEPUTI BIDANG STRATEGI DAN KEBIJAKAN", link: "https://www.bssn.go.id/wp-content/uploads/2024/07/PERKIN-D1-1.pdf" },
  { unit: "DIREKTORAT KEBIJAKAN TATA KELOLA", link: "https://www.bssn.go.id/wp-content/uploads/2024/07/PERKIN-D12-1.pdf" },
  { unit: "DIREKTORAT KEBIJAKAN TEKNOLOGI", link: "https://www.bssn.go.id/wp-content/uploads/2024/07/PERKIN-D13-2023.pdf" },
  { unit: "DIREKTORAT KEBIJAKAN SDM", link: "https://www.bssn.go.id/wp-content/uploads/2024/07/PERKIN-D14-1.pdf" },
  { unit: "DEPUTI BIDANG OPERASI", link: "https://www.bssn.go.id/wp-content/uploads/2024/07/PERKIN-D2-1.pdf" },
  { unit: "DIREKTORAT OPERASI KEAMANAN SIBER", link: "https://www.bssn.go.id/wp-content/uploads/2024/07/PERKIN-D21-1.pdf" },
  { unit: "DIREKTORAT OPERASI KEAMANAN DAN PENGENDALIAN INFORMASI", link: "https://www.bssn.go.id/wp-content/uploads/2024/07/PERKIN-D22-1.pdf" },
  { unit: "DIREKTORAT OPERASI SANDI", link: "https://www.bssn.go.id/wp-content/uploads/2024/07/PERKIN-D23-1.pdf" },
];

const PerjanjianKinerja2023 = () => {
  return (
    <div className="min-h-screen bg-muted/20">
      <Navigation />
      <main>
        <section className="bg-gradient-to-br from-purple-50 via-background to-government-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                <Handshake className="mr-2 h-4 w-4" />
                Komitmen Kinerja
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Perjanjian Kinerja Tahun 2023
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Rincian dokumen Perjanjian Kinerja (PK) untuk setiap unit kerja di lingkungan BSSN untuk tahun anggaran 2023.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle>Dokumen Perjanjian Kinerja per Unit Kerja</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>No.</TableHead>
                      <TableHead>Nama Unit Kerja</TableHead>
                      <TableHead className="text-center w-[120px]">Tautan</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pkUnitKerja2023.map((item, index) => (
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

export default PerjanjianKinerja2023;