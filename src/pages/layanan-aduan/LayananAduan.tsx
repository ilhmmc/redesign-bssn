import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  AlertTriangle,
  Award,
  Users,
  ArrowRight,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

const LayananAduan = () => {
  const services = [
    {
      icon: Shield,
      title: "Gov-CSIRT Indonesia",
      description:
        "Tim Tanggap Insiden Siber Sektor Administrasi Pemerintahan untuk monitoring dan respon keamanan siber 24/7.",
      features: [
        "Monitoring Keamanan Siber",
        "Tanggap Insiden Siber",
        "Penanganan Kerentanan",
        "Pembinaan & Publikasi",
      ],
      href: "/layanan-aduan/gov-csirt-indonesia",
      color: "government",
      badge: "Terpercaya",
    },
    {
      icon: Award,
      title: "Sertifikasi & Asesmen",
      description:
        "Layanan Sertifikat Elektronik, LSPro, dan IT Security Assessment yang diakui secara nasional dan internasional.",
      features: [
        "Sertifikat Elektronik",
        "LSPro Certification",
        "IT Security Assessment",
        "Audit Compliance",
      ],
      href: "/layanan-aduan/sertifikasi-asesmen",
      color: "cyber",
      badge: "Tersertifikasi",
    },
    {
      icon: AlertTriangle,
      title: "Aduan Siber",
      description:
        "Layanan Pusat Kontak Siber Nasional untuk melaporkan insiden keamanan siber dan mendapatkan bantuan teknis keamanan informasi.",
      features: [
        "Laporan Insiden Siber",
        "Diseminasi Informasi",
        "Analisis Kerentanan",
        "Dukungan Teknis 24/7",
      ],
      href: "/layanan-aduan/aduan-siber",
      color: "destructive",
      badge: "Terpercaya",
    },
    {
      icon: Users,
      title: "Alat & Direktori Profesional",
      description:
        "Daftar auditor, lembaga konsultan, dan instrumen kematangan siber yang terpercaya dan terverifikasi.",
      features: [
        "Direktori Auditor",
        "Lembaga Konsultan",
        "Instrumen Kematangan",
        "Tools Keamanan",
      ],
      href: "/layanan-aduan/alat-direktori-profesional",
      color: "primary",
      badge: "Terverifikasi",
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
                Layanan & Aduan BSSN
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Layanan & <span className="gradient-text">Aduan</span> Keamanan
                Siber
              </h1>

              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Portal terpadu untuk mengakses layanan keamanan siber,
                melaporkan insiden, dan menemukan profesional terpercaya di
                bidang keamanan informasi.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-government-600 hover:bg-government-700"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Hubungi Tim Ahli
                </Button>
                <Button variant="outline" size="lg">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Laporkan Insiden
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold">Pilihan Layanan & Aduan</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Akses berbagai layanan keamanan siber dan sistem pelaporan yang
                kami sediakan
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-government-500"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div
                        className={`w-14 h-14 rounded-xl bg-${service.color}-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <service.icon
                          className={`h-7 w-7 text-${service.color}-600`}
                        />
                      </div>
                      <Badge
                        variant="outline"
                        className={`bg-${service.color}-50 text-${service.color}-700 border-${service.color}-200`}
                      >
                        {service.badge}
                      </Badge>
                    </div>

                    <CardTitle className="text-xl mb-2">
                      {service.title}
                    </CardTitle>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-3">Fitur Utama:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-government-500 rounded-full mr-2 flex-shrink-0" />
                            <span className="text-muted-foreground">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-3 pt-4">
                      <Button
                        asChild
                        className="flex-1 bg-government-600 hover:bg-government-700"
                      >
                        <Link to={service.href}>
                          Akses Layanan
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Contact Section */}
        <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-red-200 bg-white/80 backdrop-blur">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="h-8 w-8 text-red-600" />
                  </div>
                  <CardTitle className="text-2xl text-red-700">
                    Insiden Darurat?
                  </CardTitle>
                  <p className="text-red-600">
                    Untuk insiden keamanan siber yang memerlukan penanganan
                    segera
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-center">
                      <Mail className="h-8 w-8 text-red-600 mx-auto mb-2" />
                      <h3 className="font-semibold mb-1">Email Darurat</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        govcsirt@bssn.go.id
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Kirim Email
                      </Button>
                    </div>
                    <div className="text-center">
                      <Phone className="h-8 w-8 text-red-600 mx-auto mb-2" />
                      <h3 className="font-semibold mb-1">Hotline 24/7</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        +62 21 8754 0000
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        <Phone className="h-4 w-4 mr-2" />
                        Hubungi Sekarang
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold">Statistik Layanan</h2>
              <p className="text-xl text-muted-foreground">
                Kepercayaan yang telah diberikan kepada BSSN
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Shield className="h-8 w-8 text-government-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-government-600">
                    500+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Insiden Ditangani
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Award className="h-8 w-8 text-cyber-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-cyber-600">
                    1,200+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Sertifikat Diterbitkan
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-red-600">300+</div>
                  <div className="text-sm text-muted-foreground">
                    Aduan Diproses
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-3xl font-bold text-primary">150+</div>
                  <div className="text-sm text-muted-foreground">
                    Profesional Terdaftar
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

export default LayananAduan;
