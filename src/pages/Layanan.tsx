import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Award,
  Users,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Clock,
  Star,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

const Layanan = () => {
  const services = [
    {
      icon: Shield,
      title: "Keamanan Siber",
      description:
        "Layanan proteksi dan monitoring keamanan siber 24/7 untuk melindungi infrastruktur digital Indonesia.",
      features: [
        "Monitoring Real-time 24/7",
        "Threat Detection & Analysis",
        "Incident Response Team",
        "Vulnerability Assessment",
        "Penetration Testing",
        "Security Architecture Review",
      ],
      href: "/layanan/keamanan-siber",
      color: "government",
      price: "Konsultasi",
      duration: "Berkelanjutan",
      rating: 4.9,
    },
    {
      icon: Award,
      title: "Sertifikasi",
      description:
        "Program sertifikasi keamanan informasi yang diakui secara nasional dan internasional.",
      features: [
        "Sertifikasi ISO 27001",
        "SNI ISO/IEC 27001",
        "Sertifikasi CSIRT",
        "Audit Keamanan",
        "Compliance Assessment",
        "Risk Management Certification",
      ],
      href: "/layanan/sertifikasi",
      color: "cyber",
      price: "Mulai 15 Juta",
      duration: "3-6 Bulan",
      rating: 4.8,
    },
    {
      icon: Users,
      title: "Konsultasi",
      description:
        "Layanan konsultasi keamanan siber profesional untuk institusi pemerintah dan swasta.",
      features: [
        "Security Risk Assessment",
        "Strategic Planning",
        "Policy Development",
        "Compliance Consulting",
        "Digital Transformation Security",
        "Incident Recovery Planning",
      ],
      href: "/layanan/konsultasi",
      color: "primary",
      price: "Mulai 5 Juta",
      duration: "1-3 Bulan",
      rating: 4.9,
    },
    {
      icon: GraduationCap,
      title: "Pelatihan",
      description:
        "Program pelatihan dan edukasi keamanan siber untuk meningkatkan kapasitas SDM Indonesia.",
      features: [
        "Training Bersertifikat",
        "Workshop Praktis",
        "Webinar Berkala",
        "E-Learning Platform",
        "Custom Corporate Training",
        "Certification Preparation",
      ],
      href: "/layanan/pelatihan",
      color: "government",
      price: "Mulai 2 Juta",
      duration: "1-4 Minggu",
      rating: 4.7,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Konsultasi Awal",
      description:
        "Tim ahli kami akan melakukan analisis kebutuhan dan assessment awal sistem Anda.",
    },
    {
      step: "02",
      title: "Proposal & Planning",
      description:
        "Kami menyusun proposal detail dengan timeline dan metodologi yang sesuai kebutuhan.",
    },
    {
      step: "03",
      title: "Implementasi",
      description:
        "Pelaksanaan layanan sesuai dengan standar dan best practices keamanan siber.",
    },
    {
      step: "04",
      title: "Monitoring & Support",
      description:
        "Dukungan berkelanjutan dan monitoring untuk memastikan keamanan optimal.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-government-50 via-background to-cyber-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge className="bg-government-100 text-government-700 border-government-200">
                Layanan BSSN
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Layanan <span className="gradient-text">Keamanan Siber</span>{" "}
                Terpercaya
              </h1>

              <p className="text-xl text-muted-foreground">
                Solusi komprehensif keamanan siber untuk melindungi aset digital
                Anda dengan standar internasional dan dukungan ahli
                berpengalaman.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-government-600 hover:bg-government-700"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Konsultasi Gratis
                </Button>
                <Button variant="outline" size="lg">
                  Lihat Portfolio
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold">Pilihan Layanan</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Layanan keamanan siber yang disesuaikan dengan kebutuhan
                spesifik organisasi Anda
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
                      <div className="text-right">
                        <div className="flex items-center space-x-1 text-yellow-500 mb-1">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="text-sm font-medium">
                            {service.rating}
                          </span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {service.duration}
                        </Badge>
                      </div>
                    </div>

                    <CardTitle className="text-xl mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="mb-4">
                      {service.description}
                    </CardDescription>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-bold text-government-600">
                        {service.price}
                      </span>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {service.duration}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-3">Fitur Layanan:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
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
                        <Link to={service.href}>Selengkapnya</Link>
                      </Button>
                      <Button variant="outline" size="icon">
                        <Phone className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold">Proses Layanan</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Metodologi terstruktur untuk memastikan hasil optimal dan
                kepuasan klien
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="text-center group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-government-500 to-cyber-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        {step.step}
                      </div>
                      <h3 className="font-semibold text-lg mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>

                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-government-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-government-50 to-cyber-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold">
                Siap Meningkatkan Keamanan Siber Anda?
              </h2>
              <p className="text-xl text-muted-foreground">
                Konsultasikan kebutuhan keamanan siber organisasi Anda dengan
                tim ahli BSSN. Kami siap membantu menganalisis risiko dan
                memberikan solusi terbaik.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Shield className="h-8 w-8 text-government-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-muted-foreground">
                      Klien Terlayani
                    </div>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Award className="h-8 w-8 text-cyber-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold">99.5%</div>
                    <div className="text-sm text-muted-foreground">
                      Tingkat Kepuasan
                    </div>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm text-muted-foreground">
                      Support Tim Ahli
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-government-600 hover:bg-government-700"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Hubungi Sekarang
                </Button>
                <Button variant="outline" size="lg">
                  Download Brosur
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

export default Layanan;
