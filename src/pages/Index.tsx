import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import CyberSecurityDashboard from "@/components/CyberSecurityDashboard";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Shield,
  Lock,
  Users,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Search,
  FileText,
  BookOpen,
  HelpCircle,
  Award,
  UserCheck,
  Briefcase,
  Globe,
  Settings,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

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

  const allServices = [
    // Profil & Organisasi
    {
      title: "Profil Organisasi",
      description: "Informasi lengkap tentang BSSN dan strukturnya",
      href: "/profil/tentang-bssn",
      category: "Profil",
      icon: Users,
    },
    {
      title: "Struktur Pejabat",
      description: "Pimpinan dan struktur organisasi BSSN",
      href: "/profil/struktur-pejabat",
      category: "Profil",
      icon: UserCheck,
    },
    {
      title: "Tugas & Fungsi",
      description: "Tugas, fungsi, dan strategi BSSN",
      href: "/profil/tugas-fungsi-strategi",
      category: "Profil",
      icon: Briefcase,
    },
    {
      title: "Strategi Keamanan",
      description: "Strategi keamanan siber nasional",
      href: "/profil/strategi-keamanan",
      category: "Profil",
      icon: Shield,
    },
    {
      title: "Akuntabilitas Kinerja",
      description: "Laporan akuntabilitas kinerja organisasi",
      href: "/profil/akuntabilitas-kinerja",
      category: "Profil",
      icon: BarChart3,
    },

    // Layanan & Aduan
    {
      title: "Keamanan Siber",
      description: "Monitoring dan proteksi 24/7 untuk infrastruktur digital Indonesia",
      href: "/layanan/keamanan-siber",
      category: "Layanan",
      icon: Shield,
    },
    {
      title: "Sertifikasi",
      description: "Program sertifikasi keamanan informasi standar nasional dan internasional",
      href: "/layanan/sertifikasi",
      category: "Layanan",
      icon: Award,
    },
    {
      title: "Konsultasi",
      description: "Layanan konsultasi keamanan siber untuk institusi dan perusahaan",
      href: "/layanan/konsultasi",
      category: "Layanan",
      icon: HelpCircle,
    },
    {
      title: "PPID",
      description: "Pejabat Pengelola Informasi dan Dokumentasi",
      href: "/layanan/ppid",
      category: "Layanan",
      icon: FileText,
    },
    {
      title: "Gov-CSIRT Indonesia",
      description: "Computer Security Incident Response Team pemerintah",
      href: "/layanan-aduan/gov-csirt-indonesia",
      category: "Layanan",
      icon: AlertTriangle,
    },
    {
      title: "Aduan Siber",
      description: "Layanan pengaduan insiden keamanan siber",
      href: "/layanan-aduan/aduan-siber",
      category: "Layanan",
      icon: MessageCircle,
    },
    {
      title: "Sertifikasi & Asesmen",
      description: "Program sertifikasi dan asesmen keamanan informasi",
      href: "/layanan-aduan/sertifikasi-asesmen",
      category: "Layanan",
      icon: Award,
    },
    {
      title: "Alat & Direktori Profesional",
      description: "Tools dan direktori profesional keamanan siber",
      href: "/layanan-aduan/alat-direktori-profesional",
      category: "Layanan",
      icon: Settings,
    },

    // Informasi & Regulasi
    {
      title: "Berita",
      description: "Berita terbaru seputar keamanan siber dan BSSN",
      href: "/informasi-regulasi/berita",
      category: "Informasi",
      icon: Globe,
    },
    {
      title: "Edukasi & Imbauan",
      description: "Materi edukasi dan imbauan keamanan siber",
      href: "/informasi-regulasi/edukasi-imbauan-keamanan",
      category: "Informasi",
      icon: BookOpen,
    },
    {
      title: "JDIH",
      description: "Jaringan Dokumentasi dan Informasi Hukum",
      href: "/informasi-regulasi/jdih",
      category: "Informasi",
      icon: FileText,
    },
    {
      title: "Publikasi",
      description: "Dokumen publikasi dan materi keamanan siber",
      href: "/informasi-regulasi/publikasi",
      category: "Informasi",
      icon: BookOpen,
    },
    {
      title: "Agenda & Penghargaan",
      description: "Agenda kegiatan dan penghargaan BSSN",
      href: "/informasi-regulasi/agenda-penghargaan",
      category: "Informasi",
      icon: Award,
    },

    // Karir
    {
      title: "Penerimaan CPNS",
      description: "Rekrutmen Calon Pegawai Negeri Sipil",
      href: "/karir/cpns",
      category: "Karir",
      icon: UserCheck,
    },
    {
      title: "Penerimaan PPPK",
      description: "Rekrutmen Pegawai Pemerintah dengan Perjanjian Kerja",
      href: "/karir/pppk",
      category: "Karir",
      icon: UserCheck,
    },
    {
      title: "Poltek SSN",
      description: "Penerimaan mahasiswa Politeknik SSN",
      href: "/karir/poltek-ssn",
      category: "Karir",
      icon: BookOpen,
    },
    {
      title: "Seleksi JPT",
      description: "Seleksi Jabatan Pimpinan Tinggi",
      href: "/karir/jpt",
      category: "Karir",
      icon: UserCheck,
    },
    {
      title: "Seleksi JPT Madya",
      description: "Seleksi Jabatan Pimpinan Tinggi Madya",
      href: "/karir/jpt/madya",
      category: "Karir",
      icon: UserCheck,
    },

    // Perencanaan & Kinerja
    {
      title: "Rencana Strategis",
      description: "Dokumen rencana strategis organisasi",
      href: "/rencana-strategis",
      category: "Perencanaan",
      icon: BarChart3,
    },
    {
      title: "Perjanjian Kinerja",
      description: "Perjanjian kinerja tahunan organisasi",
      href: "/perjanjian-kinerja",
      category: "Perencanaan",
      icon: FileText,
    },
    {
      title: "Laporan Kinerja",
      description: "Laporan capaian kinerja organisasi",
      href: "/laporan-kinerja",
      category: "Perencanaan",
      icon: BarChart3,
    },
  ];

  const filteredServices = useMemo(() => {
    if (!searchQuery) return allServices;
    
    return allServices.filter(service =>
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const serviceCategories = useMemo(() => {
    const categories = {};
    filteredServices.forEach(service => {
      if (!categories[service.category]) {
        categories[service.category] = [];
      }
      categories[service.category].push(service);
    });
    return categories;
  }, [filteredServices]);

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Carousel Section */}
        <section className="relative">
          <HeroCarousel />
        </section>

        {/* Content Section */}
        <section className="relative bg-gradient-to-br from-blue-50 via-background to-cyan-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                  <Shield className="mr-2 h-4 w-4" />
                  Badan Siber dan Sandi Negara
                </Badge>

                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Melindungi <span className="text-blue-600">Indonesia</span>
                  <br />
                  di Era Digital
                </h1>

                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  BSSN berkomitmen menjaga keamanan siber Indonesia dengan
                  layanan proteksi, monitoring, dan edukasi untuk masyarakat,
                  pemerintah, dan dunia usaha.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Link to="/layanan-aduan/aduan-siber">Layanan Pengaduan</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/profil/tentang-bssn">
                    Profil Organisasi
                  </Link>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
                {stats.map((stat, index) => (
                  <Card key={index} className="border-white/20">
                    <CardContent className="p-4 text-center">
                      <stat.icon
                        className={`h-6 w-6 mx-auto mb-2 ${stat.color}`}
                      />
                      <div className="text-2xl font-bold text-foreground">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Section */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                <BarChart3 className="mr-2 h-4 w-4" />
                Dashboard Keamanan Siber
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Monitoring <span className="text-blue-600">Real-Time</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Pantau kondisi keamanan siber Indonesia secara langsung dengan
                visualisasi data yang komprehensif dan mudah dipahami
              </p>
            </div>

            <CyberSecurityDashboard />
          </div>
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

            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Cari layanan..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Services Grid by Category */}
            <div className="space-y-12">
              {Object.entries(serviceCategories).map(([category, services]) => (
                <div key={category}>
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    {category}
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                      <Card
                        key={index}
                        className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                      >
                        <CardHeader>
                          <div className="flex items-start gap-3">
                            <service.icon className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                            <div className="flex-1">
                              <CardTitle className="text-lg">{service.title}</CardTitle>
                              <CardDescription className="mt-2">{service.description}</CardDescription>
                            </div>
                          </div>
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
              ))}
            </div>

            {/* No Results Message */}
            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Layanan tidak ditemukan</h3>
                <p className="text-muted-foreground">
                  Coba gunakan kata kunci yang berbeda atau hapus pencarian untuk melihat semua layanan.
                </p>
              </div>
            )}
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
                  <Link to="/kontak">Hubungi Kami</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/profil/tentang-bssn">
                    Pelajari Tentang BSSN
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* YouTube Channel Section */}
        <section className="py-20 bg-gradient-to-b from-background to-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <Badge className="bg-red-100 text-red-700 border-red-200">
                  <Globe className="mr-2 h-4 w-4" />
                  Channel YouTube BSSN
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Ikuti <span className="text-red-600">Channel YouTube</span> Kami
                </h2>
                <p className="text-xl text-muted-foreground">
                  Dapatkan informasi terbaru, edukasi keamanan siber, dan konten edukatif
                  lainnya melalui channel YouTube resmi BSSN
                </p>
              </div>

              <div className="relative max-w-2xl mx-auto">
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center space-x-4 mb-6">
                      <div className="bg-red-600 p-3 rounded-full">
                        <Globe className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold">
                          Badan Siber dan Sandi Negara RI
                        </h3>
                        <p className="text-muted-foreground">
                          Channel YouTube Resmi BSSN
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-center">
                      <div>
                        <div className="text-2xl font-bold text-red-600">100+</div>
                        <div className="text-sm text-muted-foreground">Video</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-red-600">10K+</div>
                        <div className="text-sm text-muted-foreground">Subscriber</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-red-600">500K+</div>
                        <div className="text-sm text-muted-foreground">Views</div>
                      </div>
                    </div>

                    <Button
                      asChild
                      size="lg"
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                    >
                      <a
                        href="https://www.youtube.com/@badansiberdansandinegara_ri"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Globe className="h-5 w-5" />
                        Kunjungi Channel YouTube
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">Edukasi Keamanan</h4>
                    <p className="text-sm text-muted-foreground">
                      Video edukasi dan tips keamanan siber untuk masyarakat
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Globe className="h-8 w-8 text-green-600 mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">Berita Terkini</h4>
                    <p className="text-sm text-muted-foreground">
                      Update terbaru tentang keamanan siber dan kegiatan BSSN
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Users className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">Webinar & Event</h4>
                    <p className="text-sm text-muted-foreground">
                      Liputan webinar, seminar, dan acara keamanan siber
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

export default Index;
