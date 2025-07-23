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
import { Download, UserPlus, ExternalLink } from "lucide-react";

const pengumumanData = [
  {
    no: 1,
    tanggal: "24 Juni 2025",
    nomor: "PUM.01/SU/SPTB/06/2025",
    tentang: "Seleksi Penerimaan Taruna Baru Poltek SSN Tahun 2025",
    link: "https://www.bssn.go.id/wp-content/uploads/2025/06/Pengumuman-Seleksi-Penerimaan-Taruna-Baru-Poltek-SSN-2025.pdf",
  },
];

const PenerimaanSSN = () => {
  return (
    <div className="min-h-screen bg-muted/20">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-50 via-background to-purple-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-indigo-100 text-indigo-700 border-indigo-200">
                <UserPlus className="mr-2 h-4 w-4" />
                Sekolah Kedinasan
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Penerimaan Taruna Baru{" "}
                <span className="gradient-text-indigo">Poltek SSN 2025</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Informasi resmi mengenai Seleksi Penerimaan Taruna Baru (SPTB)
                di Politeknik Siber dan Sandi Negara.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl space-y-8 text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Politeknik Siber dan Sandi Negara (Poltek SSN) adalah Perguruan
              Tinggi Kedinasan yang diselenggarakan oleh Badan Siber dan Sandi
              Negara (BSSN) untuk menghasilkan sumber daya manusia terdidik
              dengan kompetensi khusus di bidang Keamanan Siber dan Persandian.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <a
                  href="https://penerimaan.poltekssn.ac.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Kunjungi Portal Penerimaan
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://www.instagram.com/poltekssn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram Poltek SSN
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Pengumuman Section */}
        <section className="pb-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <Card>
              <CardHeader>
                <CardTitle>Pengumuman Seleksi</CardTitle>
                <CardDescription>
                  Daftar pengumuman terkait proses seleksi penerimaan taruna
                  baru Poltek SSN.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[50px]">No</TableHead>
                      <TableHead className="w-[150px]">Tanggal</TableHead>
                      <TableHead>Tentang</TableHead>
                      <TableHead className="text-center w-[100px]">
                        Lihat
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pengumumanData.map((item) => (
                      <TableRow key={item.no}>
                        <TableCell>{item.no}</TableCell>
                        <TableCell>{item.tanggal}</TableCell>
                        <TableCell className="font-medium">
                          {item.tentang}
                        </TableCell>
                        <TableCell className="text-center">
                          <Button asChild variant="ghost" size="icon">
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
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

export default PenerimaanSSN;