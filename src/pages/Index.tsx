import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Users, AlertTriangle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const stats = [
    {
      icon: Shield,
      value: "24/7",
      label: "Monitoring Keamanan",
      color: "text-blue-600",
    },
    {
      icon: Lock,
      value: "1000+",
      label: "Sistem Terproteksi",
      color: "text-cyan-600",
    },
    {
      icon: Users,
      value: "50K+",
      label: "Masyarakat Terlayani",
      color: "text-primary",
    },
    {
      icon: AlertTriangle,
      value: "99.9%",
      label: "Tingkat Keberhasilan",
      color: "text-green-600",
    },
  ];

  const services = [
    {
      title: "Keamanan Siber",
      description:
        "Monitoring dan proteksi 24/7 untuk infrastruktur digital Indonesia",
      href: "/layanan/keamanan-siber",
    },
    {
      title: "Sertifikasi",
      description:
        "Program sertifikasi keamanan informasi standar nasional dan internasional",
      href: "/layanan/sertifikasi",
    },
    {
      title: "Konsultasi",
      description:
        "Layanan konsultasi keamanan siber untuk institusi dan perusahaan",
      href: "/layanan/konsultasi",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Carousel Section */}
        <section className="relative">
          <HeroCarousel />
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Layanan <span className="text-blue-600">BSSN</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Kami menyediakan layanan komprehensif untuk melindungi dan
                meningkatkan keamanan siber di seluruh Indonesia
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      asChild
                      variant="ghost"
                      className="w-full group-hover:bg-blue-50"
                    >
                      <Link
                        to={service.href}
                        className="flex items-center justify-between"
                      >
                        Pelajari Lebih Lanjut
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold">
                Butuh Bantuan Keamanan Siber?
              </h2>
              <p className="text-xl text-muted-foreground">
                Tim ahli BSSN siap membantu Anda dengan layanan konsultasi dan
                dukungan teknis untuk mengatasi tantangan keamanan siber
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Hubungi Kami
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/tentang-bssn/profil-organisasi">
                    Pelajari Tentang BSSN
                  </Link>
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

export default Index;
