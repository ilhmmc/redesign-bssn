import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const MaklumatLayanan = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        <section className="bg-gradient-to-br from-government-50 via-background to-cyber-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <Button variant="ghost" asChild className="mb-4">
                  <Link to="/layanan/ppid">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Kembali ke PPID
                  </Link>
                </Button>
              </div>

              <div className="text-center space-y-6 mb-12">
                <Badge className="bg-government-100 text-government-700 border-government-200">
                  Maklumat Layanan
                </Badge>

                <h1 className="text-4xl font-bold tracking-tight">
                  Maklumat Layanan{" "}
                  <span className="gradient-text">PID BSSN</span>
                </h1>

                <p className="text-xl text-muted-foreground">
                  Komitmen layanan informasi publik Badan Siber dan Sandi Negara
                </p>
              </div>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-lg bg-government-100 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-government-600" />
                    </div>
                    <CardTitle className="text-2xl">
                      Maklumat Layanan PID BSSN
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground">
                      Halaman ini akan menampilkan maklumat layanan lengkap dari
                      Pejabat Pengelola Informasi dan Dokumentasi BSSN. Konten
                      sedang dalam tahap pengembangan.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MaklumatLayanan;
