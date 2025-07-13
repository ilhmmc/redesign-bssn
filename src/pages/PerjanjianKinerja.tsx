import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
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
import { Handshake, ArrowRight } from "lucide-react"; // Mengganti Download dengan ArrowRight
import { Link } from "react-router-dom";

// Data diperbarui untuk navigasi internal
const perjanjianData = [
  {
    tahun: "2024",
    link: "/perjanjian-kinerja/2024", // Tautan internal
    isInternal: true,
  },
  {
    tahun: "2023",
    link: "/perjanjian-kinerja/2023", // Tautan internal
    isInternal: true,
  },
];

const PerjanjianKinerja = () => {
  return (
    <div className="min-h-screen bg-muted/20">
      <Navigation />
      <main>
        <section className="bg-gradient-to-br from-purple-50 via-background to-government-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                <Handshake className="mr-2 h-4 w-4" />
                Komitmen
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Perjanjian Kinerja
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Dokumen kesepakatan untuk mencapai target kinerja tertentu
                berdasarkan sumber daya yang ada.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle>Dokumen Perjanjian Kinerja Tahunan</CardTitle>
                <CardDescription>
                  Pilih tahun untuk melihat rincian dokumen Perjanjian Kinerja
                  (PK) BSSN.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tahun</TableHead>
                      <TableHead className="text-center w-[120px]">
                        Aksi
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {perjanjianData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          Perjanjian Kinerja Tahun {item.tahun}
                        </TableCell>
                        <TableCell className="text-center">
                          <Button asChild variant="outline" size="sm">
                            <Link to={item.link}>
                              Lihat Detail
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
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

export default PerjanjianKinerja;