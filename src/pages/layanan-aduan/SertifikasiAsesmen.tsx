import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Award,
  CheckCircle,
  FileCheck,
  Shield,
  Users,
  Clock,
  Building,
  Book,
  Download,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  AlertCircle,
  TicketCheck,
  LaptopMinimalCheck,
  MonitorCheck,
} from "lucide-react";

const SertifikasiAsesmen = () => {
  const services = [
    {
      id: "sertifikat-elektronik",
      title: "Sertifikat Elektronik",
      description:
        "Layanan penerbitan dan verifikasi sertifikat elektronik untuk otentikasi digital",
      icon: FileCheck,
      color: "from-blue-500 to-blue-600",
      features: [
        "Digital Signature Certificate",
        "SSL/TLS Certificate",
        "Code Signing Certificate",
        "Email Certificate",
      ],
    },
    {
      id: "itsa",
      title: "ITSA (IT Security Assessment)",
      description:
        "Pengujian kerentanan dan asesmen keamanan sistem informasi pemerintah",
      icon: Shield,
      color: "from-green-500 to-green-600",
      features: [
        "Vulnerability Assessment",
        "Penetration Testing",
        "Security Audit",
        "Compliance Check",
      ],
    },
    {
      id: "lsp-bssn",
      title: "LSP BSSN",
      description:
        "Sertifikasi kompetensi profesi di bidang keamanan siber dan persandian",
      icon: Award,
      color: "from-purple-500 to-purple-600",
      features: [
        "Asisten Auditor Keamanan Informasi (AAKI)",
        "L1 SOC Analyst",
        "Junior Penetration Tester (JPT)",
        "L2 SOC Analyst",
      ],
    },
    {
      id: "lspro",
      title: "LSPro BSSN",
      description:
        "Sertifikasi produk untuk memastikan kesesuaian dengan standar keamanan",
      icon: Building,
      color: "from-orange-500 to-orange-600",
      features: [
        "Product Security Testing",
        "Compliance Verification",
        "Quality Assurance",
        "Standard Certification",
      ],
    },
    {
      id: "sni",
      title: "SNI Keamanan Siber",
      description:
        "Daftar Standar Nasional Indonesia terkait keamanan siber dan sandi",
      icon: Book,
      color: "from-red-500 to-red-600",
      features: [
        "SNI ISO/IEC TS 27100:2020",
        "SNI ISO/IEC 27036-2:2022",
        "SNI ISO/IEC 27002:2022",
        "SNI IEC 62443 Series",
      ],
    },
  ];

  const certificationProcess = [
    {
      step: 1,
      title: "Pendaftaran",
      description: "Submit dokumen dan persyaratan sesuai jenis layanan",
      icon: FileCheck,
      color: "government",
    },
    {
      step: 2,
      title: "Verifikasi",
      description: "Verifikasi dokumen dan kelengkapan administratif",
      icon: CheckCircle,
      color: "cyber",
    },
    {
      step: 3,
      title: "Asesmen/Testing",
      description: "Pelaksanaan ujian, audit, atau pengujian teknis",
      icon: Shield,
      color: "yellow",
    },
    {
      step: 4,
      title: "Sertifikat",
      description: "Penerbitan sertifikat atau laporan hasil",
      icon: Award,
      color: "green",
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
                <MonitorCheck className="mr-2 h-4 w-4" />
                Sertifikasi & Asesmen
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Pusat Sertifikasi &{" "}
                <span className="gradient-text">Asesmen Keamanan Siber</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Layanan komprehensif untuk sertifikasi elektronik, asesmen
                keamanan IT, sertifikasi profesi, sertifikasi produk, dan
                standar nasional keamanan siber
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="flex items-center space-x-2 bg-white/80 rounded-lg px-4 py-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm font-medium">5 Layanan Utama</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 rounded-lg px-4 py-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium">
                    Standar Internasional
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 rounded-lg px-4 py-2">
                  <Shield className="h-5 w-5 text-blue-500" />
                  <span className="text-sm font-medium">Resmi BSSN</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl font-bold">
                  Layanan Sertifikasi & Asesmen
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Pilih layanan yang sesuai dengan kebutuhan organisasi atau
                  individu Anda
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {services.map((service, index) => (
                  <Card
                    key={service.id}
                    className="group hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
                  >
                    <CardHeader>
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      <div className="space-y-2 mb-4">
                        {service.features.slice(0, 2).map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-xs text-muted-foreground">
                              {feature}
                            </span>
                          </div>
                        ))}
                        {service.features.length > 2 && (
                          <span className="text-xs text-muted-foreground italic">
                            +{service.features.length - 2} layanan lainnya
                          </span>
                        )}
                      </div>
                      <Button className="w-full" variant="outline" size="sm">
                        Pelajari Lebih Lanjut
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Services Tabs */}
        <section className="py-20 bg-gray-50/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl font-bold">Detail Layanan</h2>
                <p className="text-lg text-muted-foreground">
                  Informasi lengkap untuk setiap layanan sertifikasi dan asesmen
                </p>
              </div>

              <Tabs defaultValue="sertifikat-elektronik" className="w-full">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 h-auto p-1">
                  {services.map((service) => (
                    <TabsTrigger
                      key={service.id}
                      value={service.id}
                      className="text-xs lg:text-sm py-3 px-2 lg:px-4 data-[state=active]:bg-white data-[state=active]:shadow-md"
                    >
                      <service.icon className="h-4 w-4 mr-1 lg:mr-2" />
                      <span className="hidden lg:inline">{service.title}</span>
                      <span className="lg:hidden">
                        {service.title.split(" ")[0]}
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>

                {/* Sertifikat Elektronik */}
                <TabsContent
                  value="sertifikat-elektronik"
                  className="space-y-6"
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <FileCheck className="h-6 w-6 text-blue-600" />
                        <span>Sertifikat Elektronik</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground">
                        Layanan penerbitan sertifikat elektronik untuk
                        otentikasi digital, tanda tangan digital, dan enkripsi
                        komunikasi. Mendukung kebutuhan transformasi digital
                        dengan keamanan tinggi.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">
                            Jenis Sertifikat:
                          </h4>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-sm">
                                Digital Signature Certificate
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-sm">
                                SSL/TLS Certificate
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-sm">
                                Code Signing Certificate
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-sm">
                                Email Certificate (S/MIME)
                              </span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Keunggulan:</h4>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Shield className="h-4 w-4 text-blue-500" />
                              <span className="text-sm">
                                Standar internasional X.509
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="h-4 w-4 text-blue-500" />
                              <span className="text-sm">
                                Proses cepat 1-2 minggu
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Building className="h-4 w-4 text-blue-500" />
                              <span className="text-sm">
                                Resmi pemerintah Indonesia
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Users className="h-4 w-4 text-blue-500" />
                              <span className="text-sm">Support 24/7</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 flex items-center space-x-2">
                          <AlertCircle className="h-5 w-5 text-blue-600" />
                          <span>Persyaratan Pendaftaran:</span>
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Dokumen identitas yang valid (KTP/Passport)</li>
                          <li>• Surat kuasa bermaterai (untuk perusahaan)</li>
                          <li>• Formulir pendaftaran lengkap</li>
                          <li>• Bukti pembayaran biaya administrasi</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* ITSA */}
                <TabsContent value="itsa" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Shield className="h-6 w-6 text-green-600" />
                        <span>
                          Information Technology Security Assessment (ITSA)
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground">
                        Layanan asesmen keamanan teknologi informasi untuk
                        mengidentifikasi dan mengatasi celah keamanan dalam
                        sistem informasi pemerintah dan organisasi.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Layanan ITSA:</h4>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-sm">
                                Vulnerability Assessment
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-sm">
                                Penetration Testing
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-sm">
                                Security Configuration Review
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-sm">
                                Compliance Assessment
                              </span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Manfaat:</h4>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Shield className="h-4 w-4 text-green-500" />
                              <span className="text-sm">
                                Identifikasi kerentanan sistem
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <TrendingUp className="h-4 w-4 text-green-500" />
                              <span className="text-sm">
                                Rekomendasi perbaikan
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Award className="h-4 w-4 text-green-500" />
                              <span className="text-sm">
                                Sertifikat keamanan
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Book className="h-4 w-4 text-green-500" />
                              <span className="text-sm">Laporan detail</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Kontak ITSA:</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-green-600" />
                            <span>itsa@bssn.go.id</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-green-600" />
                            <span>+62 856-789-1754</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <ExternalLink className="h-4 w-4 text-green-600" />
                            <a
                              href="https://s.id/itsa-bssn"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-green-700 hover:underline"
                            >
                              s.id/itsa-bssn
                            </a>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* LSP BSSN */}
                <TabsContent value="lsp-bssn" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Award className="h-6 w-6 text-purple-600" />
                        <span>Lembaga Sertifikasi Profesi BSSN</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground">
                        LSP BSSN melaksanakan sertifikasi kompetensi di bidang
                        keamanan siber dan persandian berdasarkan lisensi BNSP
                        dengan nomor BNSP-LSP-2224-ID.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">
                            Skema Sertifikasi 2024:
                          </h4>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-purple-500" />
                              <span className="text-sm">
                                Asisten Auditor Keamanan Informasi (AAKI)
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-purple-500" />
                              <span className="text-sm">
                                L1 Security Operations Center Analyst
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-purple-500" />
                              <span className="text-sm">
                                Junior Penetration Tester (JPT)
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-purple-500" />
                              <span className="text-sm">
                                L2 Security Operations Center Analyst
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-purple-500" />
                              <span className="text-sm">
                                Cryptographic Analyst
                              </span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">
                            Skema Tambahan:
                          </h4>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-purple-500" />
                              <span className="text-sm">
                                Cryptographic Module Analyst
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-purple-500" />
                              <span className="text-sm">
                                Penetration Tester
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-purple-500" />
                              <span className="text-sm">
                                Associate Digital Evidence First Responder
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Users className="h-4 w-4 text-purple-500" />
                              <span className="text-sm">
                                24 Asesor Teregistrasi BNSP
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">
                          Validasi & Lisensi:
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          LSP BSSN beroperasi berdasarkan Surat Keputusan Ketua
                          BNSP Nomor KEP.2575/BNSP/XII/2022 dengan Sertifikat
                          Lisensi BNSP-LSP-2224-ID yang sah hingga tahun 2027.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* LSPro BSSN */}
                <TabsContent value="lspro" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Building className="h-6 w-6 text-orange-600" />
                        <span>Lembaga Sertifikasi Produk BSSN</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground">
                        LSPro BSSN berperan dalam memastikan mutu dan kualitas
                        produk keamanan siber melalui pengujian dan sertifikasi
                        sesuai Standar Nasional Indonesia (SNI).
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">
                            Layanan Sertifikasi:
                          </h4>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-orange-500" />
                              <span className="text-sm">
                                Sertifikasi Produk Keamanan Siber
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-orange-500" />
                              <span className="text-sm">
                                Pengujian Kesesuaian SNI
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-orange-500" />
                              <span className="text-sm">Audit Sistem Mutu</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-orange-500" />
                              <span className="text-sm">
                                Verifikasi Compliance
                              </span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">
                            Proses Sertifikasi:
                          </h4>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <FileCheck className="h-4 w-4 text-orange-500" />
                              <span className="text-sm">
                                Pengajuan permohonan
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Shield className="h-4 w-4 text-orange-500" />
                              <span className="text-sm">
                                Evaluasi dokumen & audit
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Award className="h-4 w-4 text-orange-500" />
                              <span className="text-sm">Pengujian produk</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-orange-500" />
                              <span className="text-sm">
                                Penerbitan sertifikat
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Akreditasi:</h4>
                        <p className="text-sm text-muted-foreground">
                          LSPro BSSN beroperasi berdasarkan akreditasi dari
                          Komite Akreditasi Nasional (KAN) dan penunjukkan dari
                          Badan Standardisasi Nasional (BSN) sesuai Peraturan
                          Kepala BSN Nomor 11 Tahun 2018.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* SNI */}
                <TabsContent value="sni" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Book className="h-6 w-6 text-red-600" />
                        <span>
                          Standar Nasional Indonesia (SNI) Keamanan Siber
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground">
                        Kumpulan standar nasional yang telah diadopsi dari
                        standar internasional untuk mendukung implementasi
                        keamanan siber di Indonesia.
                      </p>

                      <div className="grid gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">
                            SNI Keamanan Siber Utama:
                          </h4>
                          <div className="space-y-3">
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <div className="flex items-start space-x-3">
                                <Badge variant="outline" className="mt-1">
                                  SNI
                                </Badge>
                                <div>
                                  <h5 className="font-medium text-sm">
                                    SNI ISO/IEC TS 27100:2020
                                  </h5>
                                  <p className="text-xs text-muted-foreground">
                                    Teknologi informasi - Keamanan siber -
                                    Gambaran umum dan konsep
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="bg-gray-50 p-3 rounded-lg">
                              <div className="flex items-start space-x-3">
                                <Badge variant="outline" className="mt-1">
                                  SNI
                                </Badge>
                                <div>
                                  <h5 className="font-medium text-sm">
                                    SNI ISO/IEC 27036-2:2022
                                  </h5>
                                  <p className="text-xs text-muted-foreground">
                                    Keamanan siber - Hubungan pemasok - Bagian
                                    2: Persyaratan
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="bg-gray-50 p-3 rounded-lg">
                              <div className="flex items-start space-x-3">
                                <Badge variant="outline" className="mt-1">
                                  SNI
                                </Badge>
                                <div>
                                  <h5 className="font-medium text-sm">
                                    SNI ISO/IEC 27002:2022
                                  </h5>
                                  <p className="text-xs text-muted-foreground">
                                    Keamanan informasi, keamanan siber, dan
                                    perlindungan privasi - Kontrol keamanan
                                    informasi
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="bg-gray-50 p-3 rounded-lg">
                              <div className="flex items-start space-x-3">
                                <Badge variant="outline" className="mt-1">
                                  SNI
                                </Badge>
                                <div>
                                  <h5 className="font-medium text-sm">
                                    SNI IEC 62443 Series
                                  </h5>
                                  <p className="text-xs text-muted-foreground">
                                    Keamanan siber untuk otomasi industri dan
                                    sistem kontrol
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2 flex items-center space-x-2">
                              <Download className="h-5 w-5 text-red-600" />
                              <span>Akses Standar</span>
                            </h4>
                            <p className="text-sm text-muted-foreground mb-3">
                              Standar dapat diakses melalui website resmi BSN
                            </p>
                            <Button
                              size="sm"
                              variant="outline"
                              className="w-full"
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              pesta.bsn.go.id
                            </Button>
                          </div>

                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2 flex items-center space-x-2">
                              <AlertCircle className="h-5 w-5 text-blue-600" />
                              <span>Implementasi</span>
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Standar ini mendukung implementasi keamanan siber
                              sesuai praktik terbaik internasional
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl font-bold">
                  Proses Sertifikasi & Asesmen
                </h2>
                <p className="text-xl text-muted-foreground">
                  Tahapan standar untuk semua layanan sertifikasi dan asesmen
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8 mb-12">
                {certificationProcess.map((step, index) => (
                  <Card key={index} className="text-center relative">
                    <CardContent className="pt-6">
                      <div
                        className={`w-16 h-16 bg-${step.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}
                      >
                        <span
                          className={`text-2xl font-bold text-${step.color}-600`}
                        >
                          {step.step}
                        </span>
                      </div>
                      <step.icon
                        className={`h-8 w-8 text-${step.color}-600 mx-auto mb-3`}
                      />
                      <h3 className="font-semibold mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </CardContent>
                    {index < certificationProcess.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gray-300" />
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact & CTA Section */}
        <section className="py-20 bg-gradient-to-br from-government-50 to-cyber-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-8 mb-12">
                <h2 className="text-3xl font-bold">
                  Siap Mendapatkan Sertifikasi?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Tingkatkan kredibilitas dan keahlian dengan sertifikasi resmi
                  dari BSSN
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Phone className="h-6 w-6 text-government-600" />
                      <span>Kontak Layanan</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm">info@bssn.go.id</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm">+62 21 8754 0120</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm">Jakarta, Indonesia</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Download className="h-6 w-6 text-cyber-600" />
                      <span>Dokumen Pendukung</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <FileCheck className="h-4 w-4 mr-2" />
                      Formulir Pendaftaran
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Book className="h-4 w-4 mr-2" />
                      Panduan Sertifikasi
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Shield className="h-4 w-4 mr-2" />
                      Persyaratan Teknis
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-government-600 hover:bg-government-700"
                  >
                    <Award className="h-5 w-5 mr-2" />
                    Daftar Sekarang
                  </Button>
                  <Button variant="outline" size="lg">
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Konsultasi Online
                  </Button>
                </div>
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
