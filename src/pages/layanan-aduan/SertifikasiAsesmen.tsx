import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  CheckCircle,
  FileCheck,
  Shield,
  Users,
  Clock,
} from "lucide-react";

const SertifikasiAsesmen = () => {
  const certificationTypes = [
    {
      title: "Sertifikat Elektronik",
      description:
        "Layanan penerbitan dan verifikasi sertifikat elektronik untuk otentikasi digital",
      icon: FileCheck,
    },
    {
      title: "LSPro Certification",
      description:
        "Sertifikasi profesi keamanan informasi melalui Lembaga Sertifikasi Profesi",
      icon: Award,
    },
    {
      title: "IT Security Assessment",
      description:
        "Layanan asesmen keamanan teknologi informasi dan audit compliance",
      icon: Shield,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-government-50 via-background to-cyber-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-government-100 text-government-700 border-government-200">
                Sertifikasi & Asesmen
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Sertifikasi & <span className="gradient-text">Asesmen</span>
              </h1>

              <p className="text-lg text-muted-foreground">
                Layanan Sertifikat Elektronik, LSPro, dan IT Security Assessment
                yang terpercaya
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl font-bold">Layanan Sertifikasi</h2>
                <p className="text-xl text-muted-foreground">
                  Pilihan layanan sertifikasi dan asesmen keamanan informasi
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {certificationTypes.map((cert, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300"
                  >
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-br from-government-500 to-cyber-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <cert.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{cert.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        {cert.description}
                      </p>
                      <Button className="w-full" variant="outline">
                        Pelajari Lebih Lanjut
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Process Section */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span>Proses Sertifikasi</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-government-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-lg font-bold text-government-600">
                          1
                        </span>
                      </div>
                      <h3 className="font-semibold mb-2">Pendaftaran</h3>
                      <p className="text-sm text-muted-foreground">
                        Submit dokumen dan persyaratan
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-cyber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-lg font-bold text-cyber-600">
                          2
                        </span>
                      </div>
                      <h3 className="font-semibold mb-2">Verifikasi</h3>
                      <p className="text-sm text-muted-foreground">
                        Verifikasi dokumen dan kelengkapan
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-lg font-bold text-yellow-600">
                          3
                        </span>
                      </div>
                      <h3 className="font-semibold mb-2">Asesmen</h3>
                      <p className="text-sm text-muted-foreground">
                        Pelaksanaan ujian atau audit
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-lg font-bold text-green-600">
                          4
                        </span>
                      </div>
                      <h3 className="font-semibold mb-2">Sertifikat</h3>
                      <p className="text-sm text-muted-foreground">
                        Penerbitan sertifikat digital
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Requirements Section */}
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="h-6 w-6 text-government-600" />
                      <span>Persyaratan Umum</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">
                          Dokumen identitas yang valid
                        </span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">
                          Bukti keahlian atau pengalaman
                        </span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">
                          Formulir pendaftaran lengkap
                        </span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Biaya administrasi</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Clock className="h-6 w-6 text-cyber-600" />
                      <span>Estimasi Waktu</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Sertifikat Elektronik</span>
                        <Badge variant="outline">1-2 minggu</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">LSPro Certification</span>
                        <Badge variant="outline">2-4 minggu</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">IT Security Assessment</span>
                        <Badge variant="outline">3-6 minggu</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-government-50 to-cyber-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold">
                Siap Mendapatkan Sertifikasi?
              </h2>
              <p className="text-xl text-muted-foreground">
                Tingkatkan kredibilitas dan keahlian Anda dengan sertifikasi
                resmi dari BSSN
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-government-600 hover:bg-government-700"
                >
                  <Award className="h-5 w-5 mr-2" />
                  Daftar Sekarang
                </Button>
                <Button variant="outline" size="lg">
                  Download Panduan
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SertifikasiAsesmen;
