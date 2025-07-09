import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Award,
  Users,
  GraduationCap,
  ArrowRight,
  Monitor,
  FileCheck,
  Headphones,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Shield,
    title: "Keamanan Siber",
    description:
      "Layanan proteksi dan monitoring keamanan siber 24/7 untuk melindungi infrastruktur digital Indonesia.",
    features: [
      "Monitoring Real-time",
      "Threat Detection",
      "Incident Response",
      "Vulnerability Assessment",
    ],
    href: "/layanan/keamanan-siber",
    color: "government",
  },
  {
    icon: Award,
    title: "Sertifikasi",
    description:
      "Program sertifikasi keamanan informasi yang diakui secara nasional dan internasional.",
    features: [
      "ISO 27001",
      "SNI ISO/IEC 27001",
      "Sertifikasi CSIRT",
      "Audit Keamanan",
    ],
    href: "/layanan/sertifikasi",
    color: "cyber",
  },
  {
    icon: Headphones,
    title: "Konsultasi",
    description:
      "Layanan konsultasi keamanan siber profesional untuk institusi pemerintah dan swasta.",
    features: [
      "Assessment Risiko",
      "Strategy Planning",
      "Policy Development",
      "Compliance Check",
    ],
    href: "/layanan/konsultasi",
    color: "primary",
  },
  {
    icon: GraduationCap,
    title: "Pelatihan",
    description:
      "Program pelatihan dan edukasi keamanan siber untuk meningkatkan kapasitas SDM Indonesia.",
    features: ["Training Bersertifikat", "Workshop", "Webinar", "E-Learning"],
    href: "/layanan/pelatihan",
    color: "government",
  },
];

const quickAccess = [
  {
    icon: Monitor,
    title: "Cek Status Sistem",
    description: "Monitor status real-time sistem keamanan siber Indonesia",
    href: "/status",
  },
  {
    icon: FileCheck,
    title: "Lapor Insiden",
    description: "Laporkan insiden keamanan siber yang Anda alami",
    href: "/lapor",
  },
  {
    icon: BookOpen,
    title: "Panduan Keamanan",
    description: "Panduan praktis keamanan siber untuk berbagai kebutuhan",
    href: "/informasi/panduan-tips",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Layanan <span className="gradient-text">BSSN</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kami menyediakan layanan komprehensif untuk melindungi dan
            meningkatkan keamanan siber di seluruh Indonesia
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-government-500"
            >
              <CardHeader className="pb-3">
                <div
                  className={`w-12 h-12 rounded-lg bg-${service.color}-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon
                    className={`h-6 w-6 text-${service.color}-600`}
                  />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <CardDescription className="text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-muted-foreground flex items-center"
                    >
                      <div className="w-1.5 h-1.5 bg-government-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="ghost"
                  className="w-full group-hover:bg-government-50 group-hover:text-government-700"
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

        {/* Quick Access Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Akses Cepat</h3>
            <p className="text-muted-foreground">
              Layanan yang sering digunakan masyarakat
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {quickAccess.map((item, index) => (
              <Link key={index} to={item.href}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:border-government-300 cursor-pointer">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-government-100 flex items-center justify-center group-hover:bg-government-200 transition-colors">
                      <item.icon className="h-6 w-6 text-government-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-government-600 group-hover:translate-x-1 transition-all" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-government-50 to-cyber-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            Butuh Bantuan Keamanan Siber?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Tim ahli BSSN siap membantu Anda dengan layanan konsultasi dan
            dukungan teknis untuk mengatasi tantangan keamanan siber
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-government-600 hover:bg-government-700"
            >
              <Link to="/kontak">Hubungi Kami</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/layanan/konsultasi">Konsultasi Gratis</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
