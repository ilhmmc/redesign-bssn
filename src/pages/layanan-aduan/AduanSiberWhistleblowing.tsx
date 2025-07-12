import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  AlertTriangle,
  Shield,
  FileText,
  Mail,
  Phone,
  Users,
} from "lucide-react";

const AduanSiberWhistleblowing = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-government-50 via-background to-cyber-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-government-100 text-government-700 border-government-200">
                Aduan & Whistleblowing
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Aduan Siber &{" "}
                <span className="gradient-text">Whistleblowing</span>
              </h1>

              <p className="text-lg text-muted-foreground">
                Laporkan konten negatif, insiden keamanan siber, atau
                pelanggaran yang Anda ketahui
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <AlertTriangle className="h-6 w-6 text-red-600" />
                      <span>Aduan Siber</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Laporkan insiden keamanan siber, konten negatif, atau
                      aktivitas mencurigakan di dunia maya.
                    </p>
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      <Mail className="h-4 w-4 mr-2" />
                      Buat Laporan Aduan
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="h-6 w-6 text-government-600" />
                      <span>Whistleblowing System</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Laporkan dugaan pelanggaran, penyalahgunaan wewenang, atau
                      tindakan tidak etis secara anonim.
                    </p>
                    <Button className="w-full bg-government-600 hover:bg-government-700">
                      <Shield className="h-4 w-4 mr-2" />
                      Whistleblowing Report
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Panduan Pelaporan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-government-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FileText className="h-6 w-6 text-government-600" />
                      </div>
                      <h3 className="font-semibold mb-2">1. Siapkan Dokumen</h3>
                      <p className="text-sm text-muted-foreground">
                        Kumpulkan bukti dan informasi yang relevan
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-cyber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mail className="h-6 w-6 text-cyber-600" />
                      </div>
                      <h3 className="font-semibold mb-2">2. Buat Laporan</h3>
                      <p className="text-sm text-muted-foreground">
                        Isi formulir dengan lengkap dan jelas
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Phone className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="font-semibold mb-2">3. Tindak Lanjut</h3>
                      <p className="text-sm text-muted-foreground">
                        Tim kami akan menindaklanjuti laporan Anda
                      </p>
                    </div>
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

export default AduanSiberWhistleblowing;
