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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Award,
  Building,
  Target,
  FileText,
  Download,
  Shield,
  CheckCircle,
  Users,
  Globe,
  Clock,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Calendar,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";

const Sertifikasi = () => {
  const certificationServices = [
    {
      title: "Sertifikat Digital",
      description: "Sertifikat digital untuk keamanan transaksi elektronik",
      features: [
        "SSL/TLS Certificate",
        "Code Signing Certificate",
        "Email Certificate",
        "Personal Digital Certificate",
      ],
      icon: Shield,
      color: "blue",
    },
    {
      title: "Audit Keamanan",
      description: "Layanan audit dan assessment keamanan informasi",
      features: [
        "ISO 27001 Assessment",
        "Security Audit",
        "Vulnerability Assessment",
        "Compliance Check",
      ],
      icon: CheckCircle,
      color: "green",
    },
    {
      title: "Sertifikasi Organisasi",
      description: "Sertifikasi keamanan informasi untuk organisasi",
      features: [
        "SNI ISO/IEC 27001",
        "Management System Certification",
        "CSIRT Certification",
        "Security Framework",
      ],
      icon: Building,
      color: "purple",
    },
  ];

  const timeline = [
    {
      year: "2001",
      title: "Pendirian Awal",
      description:
        "Dimulai sebagai bagian dari upaya pemerintah untuk mengembangkan infrastruktur kunci publik nasional (PKI).",
    },
    {
      year: "2008",
      title: "Regulasi UU ITE",
      description:
        "Pengesahan UU No. 11 Tahun 2008 tentang ITE yang mengatur tentang sertifikat elektronik di Indonesia.",
    },
    {
      year: "2017",
      title: "Integrasi ke BSSN",
      description:
        "Balai Sertifikasi Elektronik diintegrasikan ke dalam struktur BSSN sebagai bagian dari konsolidasi keamanan siber.",
    },
    {
      year: "2024",
      title: "Era Digital Trust",
      description:
        "Pengembangan layanan sertifikasi untuk mendukung transformasi digital nasional dan kepercayaan digital.",
    },
  ];

  const visiMisi = {
    visi: "Menjadi lembaga sertifikasi elektronik terpercaya yang mendukung transformasi digital Indonesia dengan standar keamanan tertinggi.",
    misi: [
      "Menyediakan layanan sertifikasi elektronik yang aman dan terpercaya",
      "Mengembangkan infrastruktur kunci publik nasional yang robust",
      "Memberikan jaminan identitas dan integritas dalam transaksi elektronik",
      "Meningkatkan kepercayaan masyarakat terhadap layanan digital",
      "Mendukung pengembangan ekonomi digital Indonesia",
    ],
  };

  const tugasFungsi = [
    {
      title: "Penerbitan Sertifikat Digital",
      description:
        "Menerbitkan berbagai jenis sertifikat digital untuk individu, organisasi, dan aplikasi.",
      icon: Award,
      details: [
        "Certificate Authority (CA) operations",
        "Registration Authority (RA) services",
        "Certificate lifecycle management",
        "Key management services",
      ],
    },
    {
      title: "Validasi dan Verifikasi",
      description:
        "Melakukan validasi identitas dan verifikasi keaslian dokumen elektronik.",
      icon: CheckCircle,
      details: [
        "Identity verification process",
        "Document authentication",
        "Digital signature validation",
        "Certificate status checking",
      ],
    },
    {
      title: "Audit dan Compliance",
      description:
        "Melaksanakan audit keamanan dan memastikan compliance terhadap standar internasional.",
      icon: FileText,
      details: [
        "ISO 27001 compliance audit",
        "PKI infrastructure assessment",
        "Security policy review",
        "Risk assessment and mitigation",
      ],
    },
    {
      title: "Edukasi dan Konsultasi",
      description:
        "Memberikan edukasi dan konsultasi mengenai penggunaan sertifikat digital.",
      icon: Users,
      details: [
        "Training and workshop programs",
        "Technical consultation services",
        "Best practices guidance",
        "Implementation support",
      ],
    },
  ];

  const brochures = [
    {
      title: "Panduan Sertifikat Digital",
      description:
        "Panduan lengkap tentang sertifikat digital dan penggunaannya",
      type: "PDF",
      size: "2.5 MB",
      pages: "24 halaman",
      date: "Januari 2024",
      downloadCount: 1847,
      cover: "/placeholder.svg",
    },
    {
      title: "Layanan Balai Sertifikasi",
      description: "Informasi detail tentang layanan yang tersedia",
      type: "PDF",
      size: "1.8 MB",
      pages: "16 halaman",
      date: "Desember 2023",
      downloadCount: 1205,
      cover: "/placeholder.svg",
    },
    {
      title: "Prosedur Sertifikasi Organisasi",
      description: "Langkah-langkah untuk mendapatkan sertifikasi organisasi",
      type: "PDF",
      size: "3.2 MB",
      pages: "32 halaman",
      date: "November 2023",
      downloadCount: 923,
      cover: "/placeholder.svg",
    },
  ];

  const stats = [
    {
      icon: Award,
      value: "15,000+",
      label: "Sertifikat Diterbitkan",
      color: "text-blue-600",
    },
    {
      icon: Building,
      value: "500+",
      label: "Organisasi Tersertifikasi",
      color: "text-green-600",
    },
    {
      icon: Globe,
      value: "99.9%",
      label: "Tingkat Kepercayaan",
      color: "text-purple-600",
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Dukungan Teknis",
      color: "text-orange-600",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-700 border-blue-200",
      green: "bg-green-100 text-green-700 border-green-200",
      purple: "bg-purple-100 text-purple-700 border-purple-200",
      orange: "bg-orange-100 text-orange-700 border-orange-200",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-background to-purple-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                <Award className="mr-2 h-4 w-4" />
                Layanan Sertifikasi
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Balai Besar <span className="text-blue-600">Sertifikasi</span>{" "}
                Elektronik
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Lembaga sertifikasi elektronik terpercaya yang menyediakan
                layanan sertifikat digital, audit keamanan, dan konsultasi untuk
                mendukung transformasi digital Indonesia.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Award className="h-5 w-5 mr-2" />
                  Ajukan Sertifikasi
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="h-5 w-5 mr-2" />
                  Download Brosur
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <stat.icon
                      className={`h-8 w-8 mx-auto mb-2 ${stat.color}`}
                    />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content Tabs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="sejarah" className="space-y-8">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="sejarah">Sejarah</TabsTrigger>
                  <TabsTrigger value="balai">Balai Sertifikasi</TabsTrigger>
                  <TabsTrigger value="visi-misi">Visi & Misi</TabsTrigger>
                  <TabsTrigger value="tugas-fungsi">Tugas & Fungsi</TabsTrigger>
                  <TabsTrigger value="brosur">Brosur</TabsTrigger>
                </TabsList>

                {/* Sejarah Tab */}
                <TabsContent value="sejarah" className="space-y-8">
                  <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold">
                      Sejarah Sertifikasi Elektronik di Indonesia
                    </h2>
                    <p className="text-muted-foreground max-w-3xl mx-auto">
                      Perjalanan pengembangan infrastruktur sertifikasi
                      elektronik Indonesia dari masa ke masa
                    </p>
                  </div>

                  <div className="space-y-8">
                    {timeline.map((item, index) => (
                      <div key={index} className="flex items-start space-x-6">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                            {item.year.slice(-2)}
                          </div>
                        </div>
                        <Card className="flex-1">
                          <CardHeader className="pb-3">
                            <div className="flex items-center space-x-3">
                              <Badge variant="outline">{item.year}</Badge>
                              <CardTitle className="text-lg">
                                {item.title}
                              </CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground">
                              {item.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>

                  <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                    <CardContent className="p-8">
                      <div className="text-center space-y-4">
                        <h3 className="text-2xl font-bold text-blue-900">
                          Komitmen Berkelanjutan
                        </h3>
                        <p className="text-blue-700 max-w-3xl mx-auto">
                          Balai Besar Sertifikasi Elektronik BSSN terus
                          berkomitmen untuk mengembangkan infrastruktur
                          kepercayaan digital yang aman, handal, dan sesuai
                          dengan standar internasional untuk mendukung
                          transformasi digital Indonesia.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Balai Sertifikasi Tab */}
                <TabsContent value="balai" className="space-y-8">
                  <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold">
                      Balai Besar Sertifikasi Elektronik
                    </h2>
                    <p className="text-muted-foreground max-w-3xl mx-auto">
                      Pusat layanan sertifikasi elektronik terpercaya dengan
                      teknologi dan standar keamanan tertinggi
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-8">
                    {certificationServices.map((service, index) => (
                      <Card
                        key={index}
                        className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 ${getColorClasses(service.color)}`}
                      >
                        <CardHeader>
                          <div
                            className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${getColorClasses(service.color)}`}
                          >
                            <service.icon className="h-6 w-6" />
                          </div>
                          <CardTitle className="text-lg">
                            {service.title}
                          </CardTitle>
                          <CardDescription>
                            {service.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-muted-foreground flex items-center"
                              >
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <Button className="w-full mt-4" variant="outline">
                            Pelajari Lebih Lanjut
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Building className="h-6 w-6 mr-2 text-blue-600" />
                        Fasilitas dan Infrastruktur
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">
                            Infrastruktur Teknologi
                          </h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                              Hardware Security Modules (HSM)
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                              Secure Certificate Authority System
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                              Redundant Data Centers
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                              24/7 Monitoring System
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">
                            Standar dan Sertifikasi
                          </h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                              ISO 27001:2013 Certified
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                              Common Criteria EAL4+
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                              WebTrust for CAs
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                              ETSI EN 319 411 Compliant
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Visi Misi Tab */}
                <TabsContent value="visi-misi" className="space-y-8">
                  <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold">Visi & Misi</h2>
                    <p className="text-muted-foreground max-w-3xl mx-auto">
                      Arah dan tujuan Balai Besar Sertifikasi Elektronik dalam
                      mendukung transformasi digital Indonesia
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <Card className="border-l-4 border-l-blue-500">
                      <CardHeader>
                        <CardTitle className="flex items-center text-xl">
                          <Target className="h-6 w-6 mr-3 text-blue-600" />
                          Visi
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                          "{visiMisi.visi}"
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-purple-500">
                      <CardHeader>
                        <CardTitle className="flex items-center text-xl">
                          <Shield className="h-6 w-6 mr-3 text-purple-600" />
                          Misi
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3 text-muted-foreground">
                          {visiMisi.misi.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
                    <CardContent className="p-8">
                      <div className="text-center space-y-6">
                        <h3 className="text-2xl font-bold">
                          Komitmen Kepada Masyarakat
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="text-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                              <Shield className="h-6 w-6 text-blue-600" />
                            </div>
                            <h4 className="font-semibold mb-2">Keamanan</h4>
                            <p className="text-sm text-muted-foreground">
                              Jaminan keamanan tertinggi dalam setiap layanan
                              sertifikasi
                            </p>
                          </div>
                          <div className="text-center">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                              <CheckCircle className="h-6 w-6 text-purple-600" />
                            </div>
                            <h4 className="font-semibold mb-2">Kepercayaan</h4>
                            <p className="text-sm text-muted-foreground">
                              Membangun kepercayaan digital yang berkelanjutan
                            </p>
                          </div>
                          <div className="text-center">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                              <Globe className="h-6 w-6 text-green-600" />
                            </div>
                            <h4 className="font-semibold mb-2">Inovasi</h4>
                            <p className="text-sm text-muted-foreground">
                              Menghadirkan solusi inovatif untuk masa depan
                              digital
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Tugas Fungsi Tab */}
                <TabsContent value="tugas-fungsi" className="space-y-8">
                  <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold">Tugas & Fungsi</h2>
                    <p className="text-muted-foreground max-w-3xl mx-auto">
                      Tugas pokok dan fungsi Balai Besar Sertifikasi Elektronik
                      dalam mendukung ekosistem digital Indonesia
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    {tugasFungsi.map((tugas, index) => (
                      <Card
                        key={index}
                        className="group hover:shadow-lg transition-all duration-300"
                      >
                        <CardHeader>
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                              <tugas.icon className="h-6 w-6 text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-lg mb-2">
                                {tugas.title}
                              </CardTitle>
                              <CardDescription>
                                {tugas.description}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <h4 className="font-semibold mb-3">Detail Fungsi:</h4>
                          <ul className="space-y-2">
                            {tugas.details.map((detail, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-muted-foreground flex items-center"
                              >
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>Alur Proses Sertifikasi</CardTitle>
                      <CardDescription>
                        Tahapan standar dalam proses penerbitan sertifikat
                        digital
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-4 gap-6">
                        {[
                          "Pengajuan Permohonan",
                          "Verifikasi Identitas",
                          "Penerbitan Sertifikat",
                          "Distribusi & Support",
                        ].map((step, index) => (
                          <div key={index} className="text-center">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                              {index + 1}
                            </div>
                            <h4 className="font-semibold text-sm">{step}</h4>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Brosur Tab */}
                <TabsContent value="brosur" className="space-y-8">
                  <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold">Brosur dan Dokumen</h2>
                    <p className="text-muted-foreground max-w-3xl mx-auto">
                      Download brosur, panduan, dan dokumen informatif tentang
                      layanan sertifikasi elektronik
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-8">
                    {brochures.map((brochure, index) => (
                      <Card
                        key={index}
                        className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
                      >
                        <div className="relative h-48">
                          <img
                            src={brochure.cover}
                            alt={brochure.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-blue-600 text-white">
                              {brochure.type}
                            </Badge>
                          </div>
                          <div className="absolute top-4 right-4">
                            <Badge variant="secondary">{brochure.size}</Badge>
                          </div>
                        </div>
                        <CardHeader>
                          <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                            {brochure.title}
                          </CardTitle>
                          <CardDescription>
                            {brochure.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <FileText className="h-4 w-4 mr-1" />
                                {brochure.pages}
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {brochure.date}
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">
                                {brochure.downloadCount.toLocaleString()}{" "}
                                downloads
                              </span>
                            </div>
                            <Button className="w-full bg-blue-600 hover:bg-blue-700">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
                    <CardContent className="p-8">
                      <div className="text-center space-y-6">
                        <h3 className="text-2xl font-bold">
                          Butuh Informasi Lebih Lanjut?
                        </h3>
                        <p className="text-muted-foreground">
                          Tim kami siap membantu Anda dengan informasi detail
                          tentang layanan sertifikasi
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="text-center">
                            <Phone className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                            <div className="font-semibold">Hotline</div>
                            <div className="text-sm text-muted-foreground">
                              (021) 77973360
                            </div>
                          </div>
                          <div className="text-center">
                            <Mail className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                            <div className="font-semibold">Email</div>
                            <div className="text-sm text-muted-foreground">
                              sertifikasi@bssn.go.id
                            </div>
                          </div>
                          <div className="text-center">
                            <MapPin className="h-8 w-8 text-green-600 mx-auto mb-2" />
                            <div className="font-semibold">Kunjungi</div>
                            <div className="text-sm text-muted-foreground">
                              Kantor Pusat BSSN
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                          <Button
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-700"
                            asChild
                          >
                            <Link to="/kontak">
                              <Phone className="h-5 w-5 mr-2" />
                              Hubungi Kami
                            </Link>
                          </Button>
                          <Button variant="outline" size="lg">
                            <ExternalLink className="h-5 w-5 mr-2" />
                            Portal Sertifikasi
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sertifikasi;
