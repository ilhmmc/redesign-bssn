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
import { Target, Download } from "lucide-react";

// Data diekstrak dari bssn.go.id/rencana-strategis
const renstraData = [
  {
    unit: "SEKRETARIAT UTAMA",
    link: "https://www.bssn.go.id/wp-content/uploads/2024/07/RENSTRA-SU.pdf",
  },
  {
    unit: "BIRO PERENCANAAN DAN KEUANGAN",
    link: "https://www.bssn.go.id/wp-content/uploads/2024/07/RENSTRA-S1.pdf",
  },
  {
    unit: "BIRO ORGANISASI DAN SUMBER DAYA MANUSIA",
    link: "https://www.bssn.go.id/wp-content/uploads/2024/07/RENSTRA-S2.pdf",
  },
  {
    unit: "BIRO HUKUM DAN KOMUNIKASI PUBLIK",
    link: "https://www.bssn.go.id/wp-content/uploads/2024/07/RENSTRA-S3.pdf",
  },
  {
    unit: "BIRO UMUM",
    link: "https://www.bssn.go.id/wp-content/uploads/2024/07/RENSTRA-S4.pdf",
  },
  {
    unit: "DEPUTI BIDANG STRATEGI DAN KEBIJAKAN",
    link: "https://www.bssn.go.id/wp-content/uploads/2024/07/RENSTRA-D1.pdf",
  },
  {
    unit: "DEPUTI BIDANG OPERASI",
    link: "https://www.bssn.go.id/wp-content/uploads/2024/07/RENSTRA-D2.pdf",
  },
  {
    unit: "DEPUTI BIDANG PEMERINTAHAN DAN PEMBANGUNAN MANUSIA",
    link: "https://www.bssn.go.id/wp-content/uploads/2024/07/RENSTRA-D3.pdf",
  },
  {
    unit: "DEPUTI BIDANG PEREKONOMIAN",
    link: "https://www.bssn.go.id/wp-content/uploads/2024/07/RENSTRA-D4.pdf",
  },
  {
    unit: "PUSAT DATA DAN TIK",
    link: "https://www.bssn.go.id/wp-content/uploads/2024/07/RENSTRA-PUSDATIK.pdf",
  },
  {
    unit: "PUSAT PENGEMBANGAN SDM",
    link: "https://www.bssn.go.id/wp-content/uploads/2024/07/RENSTRA-P3.pdf",
  },
  {
    unit: "INSPEKTORAT",
    link: "https://www.bssn.go.id/wp-content/uploads/2024/07/RENSTRA-IR.pdf",
  },
  {
    unit: "BALAI SERTIFIKASI ELEKTRONIK",
    link: "https://www.bssn.go.id/wp-content/uploads/2024/07/RENSTRA-BSE.pdf",
  },
];

const RencanaStrategis = () => {
  return (
    <div className="min-h-screen bg-muted/20">
      <Navigation />
      <main>
        <section className="bg-gradient-to-br from-blue-50 via-background to-government-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                <Target className="mr-2 h-4 w-4" />
                Perencanaan
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Rencana Strategis (Renstra)
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Dokumen perencanaan jangka menengah yang menjadi pedoman BSSN dalam mencapai tujuan dan sasaran strategis untuk periode 2021-2024.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle>Dokumen Rencana Strategis per Unit Kerja</CardTitle>
                <CardDescription>
                  Rencana strategis untuk setiap unit kerja di lingkungan Badan Siber dan Sandi Negara.
                </CardDescription>
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
                    {renstraData.map((item, index) => (
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

export default RencanaStrategis;