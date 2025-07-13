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
import { UserCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Data menggunakan rute internal untuk navigasi dalam aplikasi
const jptSelections = [
  {
    title: "Seleksi Terbuka Jabatan Pimpinan Tinggi Madya",
    link: "/karir/jpt/madya",
  },
  {
    title: "Seleksi Terbuka Jabatan Pimpinan Tinggi Pratama",
    link: "/karir/jpt/pratama",
  },
];

const SeleksiJPT = () => {
  return (
    <div className="min-h-screen bg-muted/20">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-50 via-background to-orange-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-green-100 text-green-700 border-green-200">
                <UserCheck className="mr-2 h-4 w-4" />
                Karir
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Seleksi Jabatan Pimpinan Tinggi (JPT)
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Informasi mengenai seleksi terbuka untuk pengisian Jabatan
                Pimpinan Tinggi Madya dan Pratama di lingkungan Badan Siber dan
                Sandi Negara.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle>Daftar Seleksi Terbuka</CardTitle>
                <CardDescription>
                  Pilih salah satu tautan di bawah ini untuk melihat informasi
                  detail mengenai seleksi yang sedang berlangsung.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {jptSelections.map((selection, index) => (
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-between p-6 h-auto"
                    key={index}
                  >
                    {/* Menggunakan komponen Link untuk semua tombol */}
                    <Link to={selection.link}>
                      <span className="text-base font-medium">
                        {selection.title}
                      </span>
                      <ArrowRight className="h-5 w-5 text-muted-foreground" />
                    </Link>
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

export default SeleksiJPT;