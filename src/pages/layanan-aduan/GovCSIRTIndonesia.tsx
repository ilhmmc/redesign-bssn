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
  Mail,
  MessageSquare,
  ExternalLink,
  AlertTriangle,
  Users,
  MonitorSpeaker,
  Search,
  BookOpen,
  FileText,
  Eye,
  Lock,
  Zap,
  Target,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const GovCSIRTIndonesia = () => {
  const services = [
    {
      icon: MonitorSpeaker,
      title: "Layanan Monitoring dan Aksi",
      items: [
        "Menyelenggarakan fungsi monitoring keamanan siber",
        "Menyelenggarakan fungsi tanggap insiden siber",
        "Menyelenggarakan fungsi uji penetrasi",
      ],
    },
    {
      icon: Search,
      title: "Layanan Penanganan Kerentanan",
      items: [
        "Menyelenggarakan fungsi peneliti dan penerima laporan kerentanan",
        "Menyelenggarakan fungsi analisis kerentanan",
        "Menyelenggarakan fungsi koordinasi dan pengungkapan kerentanan",
        "Menyelenggarakan fungsi respon kerentanan",
      ],
    },
    {
      icon: BookOpen,
      title: "Layanan Pembinaan dan Publikasi",
      items: [
        "Menyelenggarakan fungsi berbagi informasi",
        "Menyelenggarakan fungsi peningkatan kesadaran keamanan siber",
        "Menyelenggarakan fungsi pelatihan keamanan siber",
      ],
    },
  ];

  const panduan = [
    {
      title: "PANDUAN PELAPORAN INSIDEN",
      icon: FileText,
      filename: "Panduan_Pelaporan_Insiden.pdf",
    },
    {
      title: "PANDUAN PENANGANAN INSIDEN WEB DEFACEMENT",
      icon: Eye,
      filename: "Panduan_Penanganan_Insiden_Web_Defacement.pdf",
    },
    {
      title: "PANDUAN PENANGANAN INSIDEN SERANGAN DDOS",
      icon: Zap,
      filename: "Panduan_Penanganan_Insiden_Serangan_DDoS.pdf",
    },
    {
      title: "PANDUAN PENANGANAN INSIDEN SERANGAN PHISHING",
      icon: AlertTriangle,
      filename: "Panduan_Penanganan_Insiden_Serangan_Phishing.pdf",
    },
    {
      title: "PANDUAN PENANGANAN INSIDEN SERANGAN SQL INJECTION",
      icon: Target,
      filename: "Panduan_Penanganan_Insiden_Serangan_SQL_Injecton.pdf",
    },
    {
      title: "PANDUAN PENANGANAN INSIDEN MALWARE",
      icon: Shield,
      filename: "Panduan_Penanganan_Insiden_Malware.pdf",
    },
    {
      title: "PANDUAN PENANGANAN INSIDEN RANSOMWARE",
      icon: Lock,
      filename: "Panduan_Penanganan_Insiden_Ransomware.pdf",
    },
    {
      title: "PANDUAN PENGGUNAAN OPEN PGP",
      icon: Lock,
      filename: "PANDUAN-PENGGUNAAN-OPENPGP.pdf",
    },
    {
      title: "RFC 2350 Gov-CSIRT Indonesia",
      icon: FileText,
      filename: "RFC2350-gov-csirt.pdf",
    },
  ];

  const handleViewDocument = (filename: string) => {
    const fileUrl = `/gov-csirt/${filename}`;
    window.open(fileUrl, "_blank");
  };

  const missionItems = [
    "Mengkoordinasikan serta mengolaborasikan layanan keamanan siber pada sektor pemerintah",
    "Mengkoordinasikan serta mengolaborasikan tanggap insiden siber pada sektor pemerintah",
    "Membangun kapasitas sumber daya keamanan siber pada sektor pemerintah",
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
                Gov-CSIRT Indonesia
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Government <span className="gradient-text">CSIRT</span>{" "}
                Indonesia
              </h1>

              <p className="text-lg text-muted-foreground">
                Tim Tanggap Insiden Siber Sektor Administrasi Pemerintahan
              </p>

              <div className="flex items-center justify-center">
                <img
                  src="/gov-csirt-logo.png"
                  alt="Gov-CSIRT Indonesia Logo"
                  className="h-32 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div className="text-sm text-muted-foreground">
                <div className="flex items-center justify-center space-x-4">
                  <span>Mar 18, 2020</span>
                  <span>•</span>
                  <Badge variant="outline">Security Advisory</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-6 w-6 text-government-600" />
                    <span>Deskripsi</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    Government – Computer Security Incident Response Team
                    (CSIRT) Indonesia, disingkat{" "}
                    <strong>Gov-CSIRT Indonesia</strong> merupakan Tim Tanggap
                    Insiden Siber Sektor Administrasi Pemerintahan yang
                    ditetapkan dalam Keputusan Kepala BSSN Nomor 722 Tahun 2024
                    tentang Tim Tanggap Insiden Siber Sektor Administrasi
                    Pemerintahan (Gov-CSIRT).
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-government-50 border-government-200">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-government-700 mb-3">
                          Ketua Tim
                        </h3>
                        <p className="text-sm">
                          Deputi Bidang Keamanan Siber dan Sandi Pemerintahan
                          dan Pembangunan Manusia, BSSN
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-cyber-50 border-cyber-200">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-cyber-700 mb-3">
                          Anggota Tim
                        </h3>
                        <p className="text-sm">
                          Personel pada Deputi Bidang Keamanan Siber dan Sandi
                          Pemerintahan dan Pembangunan Manusia
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>

              {/* Vision & Mission */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-government-600">Visi</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg">
                      Terwujudnya ketahanan siber pada sektor pemerintah yang
                      andal dan profesional.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-cyber-600">Misi</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {missionItems.map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-cyber-100 text-cyber-600 rounded-full flex items-center justify-center text-sm font-semibold">
                            {index + 1}
                          </span>
                          <p className="text-sm">{item}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl font-bold">Layanan</h2>
                <p className="text-xl text-muted-foreground">
                  Layanan yang disediakan oleh Gov-CSIRT Indonesia
                </p>
              </div>

              <div className="space-y-8">
                {services.map((service, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300"
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-government-500 to-cyber-500 rounded-lg flex items-center justify-center">
                          <service.icon className="h-6 w-6 text-white" />
                        </div>
                        <span>{service.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {service.items.map((item, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Constituents Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-6 w-6 text-government-600" />
                    <span>Konstituen</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    Konstituen Gov-CSIRT Indonesia meliputi Tim Tanggap Insiden
                    Siber baik Pemerintah Pusat maupun Pemerintah Daerah.
                  </p>
                </CardContent>
              </Card>

              {/* Contact Section */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Mail className="h-6 w-6 text-cyber-600" />
                    <span>Kontak</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-government-600" />
                      <div>
                        <div className="font-medium">Email</div>
                        <a
                          href="mailto:govcsirt@bssn.go.id"
                          className="text-government-600 hover:underline"
                        >
                          govcsirt@bssn.go.id
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <MessageSquare className="h-5 w-5 text-cyber-600" />
                      <div>
                        <div className="font-medium">Telegram</div>
                        <a
                          href="https://t.me/GovCSIRT_ID"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyber-600 hover:underline"
                        >
                          t.me/GovCSIRT_ID
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Guidelines Section */}
        <section className="py-20 bg-gradient-to-br from-government-50 to-cyber-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl font-bold">Panduan & Dokumen</h2>
                <p className="text-xl text-muted-foreground">
                  Dokumen panduan penanganan insiden keamanan siber
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {panduan.map((item, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-government-500 to-cyber-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-medium text-sm mb-3">{item.title}</h3>
                      <Button variant="outline" size="sm" className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold">
                Butuh Bantuan Keamanan Siber?
              </h2>
              <p className="text-xl text-muted-foreground">
                Tim Gov-CSIRT Indonesia siap membantu menangani insiden keamanan
                siber pada sektor pemerintahan. Hubungi kami segera untuk respon
                cepat.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-government-600 hover:bg-government-700"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Laporkan Insiden
                </Button>
                <Button variant="outline" size="lg">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Hubungi via Telegram
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

export default GovCSIRTIndonesia;
