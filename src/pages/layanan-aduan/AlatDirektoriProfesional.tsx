import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Search,
  Users,
  Building2,
  CheckCircle,
  Star,
  MapPin,
  Phone,
  Mail,
  Award,
  Wrench,
  FileText,
  Download,
  ExternalLink,
  Shield,
  BarChart3,
  Target,
  Clipboard,
  UserCheck,
  TrendingUp,
  Layers,
  AlertTriangle,
  BookOpen,
  Globe,
  Database,
} from "lucide-react";

const AlatDirektoriProfesional = () => {
  const mainServices = [
    {
      id: "indeks-kami",
      title: "Indeks KAMI",
      subtitle: "Kesiapan Pengamanan Informasi",
      description:
        "Alat evaluasi untuk menganalisis tingkat kesiapan pengamanan informasi organisasi berdasarkan SNI ISO/IEC 27001",
      icon: Shield,
      color: "government",
      features: [
        "Kategori Sistem Elektronik",
        "Tata Kelola Keamanan Informasi",
        "Pengelolaan Risiko",
        "Kerangka Kerja Keamanan",
        "Pengelolaan Aset Informasi",
        "Teknologi dan Keamanan",
        "Aspek Suplemen (Cloud, Data Pribadi)",
      ],
    },
    {
      id: "peta-okupasi",
      title: "Peta Okupasi Nasional",
      subtitle: "Keamanan Siber",
      description:
        "Rujukan strategis pembangunan SDM Indonesia di bidang keamanan siber dengan standar kompetensi nasional",
      icon: TrendingUp,
      color: "cyber",
      features: [
        "Profesi Berbasis Keahlian",
        "Standar Kompetensi Nasional",
        "Level Kualifikasi",
        "Lingkup Tugas & Karier",
        "Sertifikasi Nasional",
        "Kebutuhan SDM 18.054 orang",
      ],
    },
    {
      id: "ikas",
      title: "IKAS",
      subtitle: "Instrumen Penilaian Kematangan Keamanan Siber",
      description:
        "Alat mengukur tingkat kematangan pengelolaan keamanan siber berdasarkan Peraturan BSSN No. 10 Tahun 2023",
      icon: BarChart3,
      color: "primary",
      features: [
        "Identifikasi Aset & Risiko",
        "Proteksi Sistem",
        "Deteksi Ancaman",
        "Penanggulangan Insiden",
        "Pemulihan Sistem",
        "Self Assessment Tools",
      ],
    },
    {
      id: "auditor",
      title: "Daftar Auditor",
      subtitle: "Keamanan Informasi & Implementor SMPI",
      description:
        "Direktori resmi Auditor Keamanan Informasi (ArKI) dan Implementor Sistem Manajemen Pengamanan Informasi",
      icon: UserCheck,
      color: "destructive",
      features: [
        "Auditor Bersertifikat ArKI",
        "Implementor SMPI Terdaftar",
        "Surat Tanda Register (STR)",
        "Pengalaman Terverifikasi",
        "Kode Etik Profesi",
        "Pengembangan Kompetensi",
      ],
    },
    {
      id: "lembaga",
      title: "Daftar Lembaga",
      subtitle: "Konsultan & Sertifikasi",
      description:
        "Daftar resmi lembaga konsultan dan lembaga sertifikasi SMPI yang telah diverifikasi dan terdaftar di BSSN",
      icon: Building2,
      color: "secondary",
      features: [
        "Lembaga Konsultan Terakreditasi",
        "Lembaga Sertifikasi SMPI",
        "Perizinan Peraturan BSSN",
        "Whitelist Resmi",
        "Verifikasi Dokumen",
        "Sertifikat Pengakuan",
      ],
    },
  ];

  const toolsAndResources = [
    {
      title: "Unduh Indeks KAMI",
      description:
        "Tool evaluasi kesiapan pengamanan informasi untuk organisasi",
      type: "Spreadsheet",
      size: "2.5 MB",
      icon: FileText,
    },
    {
      title: "Panduan Peta Okupasi",
      description: "Dokumentasi lengkap okupasi keamanan siber nasional",
      type: "PDF",
      size: "5.1 MB",
      icon: BookOpen,
    },
    {
      title: "IKAS Assessment Tool",
      description: "Instrumen penilaian kematangan keamanan siber mandiri",
      type: "Excel",
      size: "3.8 MB",
      icon: Clipboard,
    },
    {
      title: "Template Aplikasi Auditor",
      description: "Formulir pendaftaran Auditor Keamanan Informasi",
      type: "PDF",
      size: "1.2 MB",
      icon: UserCheck,
    },
  ];

  const featuredProfessionals = [
    {
      name: "PT. Cyber Security Indonesia",
      type: "Lembaga Konsultan",
      location: "Jakarta",
      rating: 4.8,
      specialization: "ISO 27001, Risk Assessment, CSIRT Implementation",
      verified: true,
      category: "Lembaga Konsultan",
    },
    {
      name: "Dr. Ahmad Sutanto, CISSP, CISA",
      type: "Auditor Individual ArKI",
      location: "Bandung",
      rating: 4.9,
      specialization:
        "Penetration Testing, Compliance Audit, SMPI Implementation",
      verified: true,
      category: "Auditor Keamanan Informasi",
    },
    {
      name: "CV. SecureIT Solutions",
      type: "Lembaga Konsultan & Sertifikasi",
      location: "Surabaya",
      rating: 4.7,
      specialization: "SOC Design, Incident Response, Security Training",
      verified: true,
      category: "Lembaga Konsultan",
    },
    {
      name: "Ir. Sari Wijayanti, CISM",
      type: "Implementor SMPI",
      location: "Yogyakarta",
      rating: 4.8,
      specialization: "Information Security Management, Risk Management",
      verified: true,
      category: "Implementor SMPI",
    },
  ];

  const statistics = [
    { label: "Auditor Terdaftar", value: "125+", icon: UserCheck },
    { label: "Lembaga Konsultan", value: "48+", icon: Building2 },
    { label: "Tools & Instrumen", value: "15+", icon: Wrench },
    { label: "SDM Kebutuhan Nasional", value: "18K+", icon: Users },
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
                <Wrench className="mr-2 h-4 w-4" />
                Ekosistem Keamanan Siber Nasional
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Alat & <span className="gradient-text">Direktori</span>{" "}
                Profesional
              </h1>

              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Portal terpadu untuk mengakses tools evaluasi keamanan siber,
                direktori profesional terpercaya, dan sumber daya pengembangan
                kompetensi keamanan informasi nasional
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input
                    placeholder="Cari tools, auditor, konsultan, atau lembaga..."
                    className="pl-10 h-12 text-lg"
                  />
                  <Button className="absolute right-2 top-1 h-10">Cari</Button>
                </div>
              </div>

              {/* Statistics Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                {statistics.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm">
                      <stat.icon className="h-6 w-6 text-government-600" />
                    </div>
                    <div className="text-2xl font-bold text-government-700">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl font-bold">
                  Layanan & Tools Keamanan Siber
                </h2>
                <p className="text-xl text-muted-foreground">
                  Akses lengkap tools evaluasi, direktori profesional, dan
                  sumber daya keamanan siber nasional
                </p>
              </div>

              <Tabs defaultValue="indeks-kami" className="space-y-8">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 h-auto">
                  {mainServices.map((service) => (
                    <TabsTrigger
                      key={service.id}
                      value={service.id}
                      className="flex flex-col items-center space-y-2 p-4 h-auto"
                    >
                      <service.icon className="h-5 w-5" />
                      <div className="text-center">
                        <div className="font-medium text-xs">
                          {service.title}
                        </div>
                        <div className="text-[10px] text-muted-foreground hidden lg:block">
                          {service.subtitle}
                        </div>
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>

                {mainServices.map((service) => (
                  <TabsContent key={service.id} value={service.id}>
                    <Card className="overflow-hidden">
                      <CardHeader className="bg-gradient-to-r from-government-50 to-cyber-50">
                        <div className="flex items-start space-x-4">
                          <div
                            className={`w-16 h-16 bg-${service.color}-100 rounded-xl flex items-center justify-center`}
                          >
                            <service.icon
                              className={`h-8 w-8 text-${service.color}-600`}
                            />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-2xl mb-2">
                              {service.title}
                              <span className="block text-lg font-normal text-muted-foreground">
                                {service.subtitle}
                              </span>
                            </CardTitle>
                            <p className="text-muted-foreground">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="font-semibold mb-4 flex items-center">
                              <Layers className="h-5 w-5 mr-2 text-government-600" />
                              Fitur Utama
                            </h4>
                            <div className="space-y-3">
                              {service.features.map((feature, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start space-x-3"
                                >
                                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div className="bg-muted/30 rounded-lg p-4">
                              <h5 className="font-medium mb-3">Akses Cepat</h5>
                              <div className="space-y-2">
                                <Button className="w-full" size="sm">
                                  <Download className="h-4 w-4 mr-2" />
                                  Download Tool
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="w-full"
                                >
                                  <FileText className="h-4 w-4 mr-2" />
                                  Panduan Penggunaan
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="w-full"
                                >
                                  <ExternalLink className="h-4 w-4 mr-2" />
                                  Portal Resmi
                                </Button>
                              </div>
                            </div>
                            {service.id === "ikas" && (
                              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                <h5 className="font-medium text-blue-900 mb-2">
                                  Informasi Kontak
                                </h5>
                                <div className="text-sm text-blue-800 space-y-1">
                                  <div>Email: d41.kamsisankpp@bssn.go.id</div>
                                  <div>Konsultasi: +62 856-7581-942</div>
                                  <div className="text-xs mt-2">
                                    *Kirim hasil IKAS sebelum akhir Juni 2025
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>

        {/* Tools & Resources Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl font-bold">Tools & Sumber Daya</h2>
                <p className="text-xl text-muted-foreground">
                  Download tools evaluasi dan dokumentasi resmi BSSN
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {toolsAndResources.map((tool, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-government-500 to-cyber-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <tool.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-semibold mb-2">{tool.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {tool.description}
                      </p>
                      <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground mb-4">
                        <Badge variant="outline">{tool.type}</Badge>
                        <span>{tool.size}</span>
                      </div>
                      <Button size="sm" className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Professionals Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl font-bold">Profesional Unggulan</h2>
                <p className="text-xl text-muted-foreground">
                  Auditor, implementor, dan konsultan terpercaya yang terdaftar
                  di BSSN
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                {featuredProfessionals.map((professional, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-semibold">
                              {professional.name}
                            </h3>
                            {professional.verified && (
                              <Badge className="bg-green-100 text-green-700">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                Terverifikasi
                              </Badge>
                            )}
                          </div>

                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                            <span className="flex items-center">
                              <Building2 className="h-4 w-4 mr-1" />
                              {professional.type}
                            </span>
                            <span className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {professional.location}
                            </span>
                            <span className="flex items-center">
                              <Star className="h-4 w-4 mr-1 text-yellow-500" />
                              {professional.rating}
                            </span>
                          </div>

                          <Badge variant="outline" className="mb-3">
                            {professional.category}
                          </Badge>

                          <p className="text-sm mb-4">
                            <span className="font-medium">Spesialisasi:</span>{" "}
                            {professional.specialization}
                          </p>

                          <div className="flex space-x-3">
                            <Button size="sm" variant="outline">
                              <Phone className="h-4 w-4 mr-2" />
                              Kontak
                            </Button>
                            <Button size="sm" variant="outline">
                              <Mail className="h-4 w-4 mr-2" />
                              Email
                            </Button>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="w-16 h-16 bg-gradient-to-br from-government-500 to-cyber-500 rounded-full flex items-center justify-center mb-2">
                            <Users className="h-8 w-8 text-white" />
                          </div>
                          <Button size="sm">Lihat Detail</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button
                  size="lg"
                  className="bg-government-600 hover:bg-government-700"
                >
                  <Users className="h-5 w-5 mr-2" />
                  Lihat Semua Profesional
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Registration CTA Section */}
        <section className="py-20 bg-gradient-to-br from-government-50 to-cyber-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-8 mb-12">
                <h2 className="text-3xl font-bold">
                  Bergabung dengan Ekosistem BSSN
                </h2>
                <p className="text-xl text-muted-foreground">
                  Daftarkan diri atau lembaga Anda untuk menjadi bagian dari
                  ekosistem keamanan siber nasional
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-2 border-government-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <UserCheck className="h-6 w-6 text-government-600" />
                      <span>Daftar Sebagai Profesional</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Bergabunglah sebagai Auditor Keamanan Informasi atau
                      Implementor SMPI yang terdaftar resmi
                    </p>
                    <div className="space-y-2">
                      <Button className="w-full bg-government-600 hover:bg-government-700">
                        <UserCheck className="h-4 w-4 mr-2" />
                        Daftar Auditor ArKI
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Shield className="h-4 w-4 mr-2" />
                        Daftar Implementor SMPI
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-cyber-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Building2 className="h-6 w-6 text-cyber-600" />
                      <span>Daftar Lembaga</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Daftarkan lembaga konsultan atau sertifikasi untuk masuk
                      whitelist resmi BSSN
                    </p>
                    <div className="space-y-2">
                      <Button className="w-full bg-cyber-600 hover:bg-cyber-700">
                        <Building2 className="h-4 w-4 mr-2" />
                        Daftar Lembaga Konsultan
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Award className="h-4 w-4 mr-2" />
                        Daftar Lembaga Sertifikasi
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  <FileText className="h-5 w-5 mr-2" />
                  Panduan Pendaftaran Lengkap
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-6">
                Butuh Bantuan atau Konsultasi?
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Mail className="h-8 w-8 text-government-600 mx-auto mb-2" />
                    <h4 className="font-semibold mb-1">Email Konsultasi</h4>
                    <p className="text-sm text-muted-foreground">
                      d41.kamsisankpp@bssn.go.id
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Phone className="h-8 w-8 text-cyber-600 mx-auto mb-2" />
                    <h4 className="font-semibold mb-1">WhatsApp Support</h4>
                    <p className="text-sm text-muted-foreground">
                      +62 856-7581-942
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold mb-1">Portal Resmi</h4>
                    <p className="text-sm text-muted-foreground">
                      www.bssn.go.id
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AlatDirektoriProfesional;
