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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Search,
  Filter,
  Shield,
  Lock,
  Smartphone,
  Wifi,
  Mail,
  CreditCard,
  Globe,
  Users,
  Download,
  PlayCircle,
  FileText,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Target,
  Eye,
  Calendar,
  Clock,
  Bug,
  Database,
  Server,
  ExternalLink,
  Phone,
  TrendingUp,
  Award,
  GraduationCap,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

const EdukasiImbauan = () => {
  // Konten Utama Budaya Keamanan Informasi
  const mainContent = {
    title: "Budaya Keamanan Informasi",
    content: `Pemanfaatan internet telah mengubah pola hidup dan budaya manusia dalam belajar, bekerja, berkomunikasi, berbelanja dan aspek lainnya. Saat ini masyarakat lebih banyak menggunakan internet dalam berkomunikasi seperti surat elektronik (e-mail) serta jejaring sosial (social networking) yang dianggap lebih efektif dan efisien. Kini kita berkomunikasi di dunia maya sama seperti halnya ketika berkomunikasi di dunia nyata. Informasi yang didapatkan semakin terbuka baik konten positif maupun negatif.

Pengaruh konten negatif sudah sering diberitakan di berbagai media berupa pemuatan gambar porno, perjudian, penipuan, pelecehan, pencemaran nama baik dan berita bohong. Selain itu penggunaan jejaring sosial juga memiliki dampak negatif, salah satunya adalah cyberbullying yang biasanya menimpa anak-anak dan sesama remaja. Bahkan kejahatan dunia maya yang dikenal sebagai cybercrime sudah sampai pada peretasan situs-situs penting dalam negeri.

Untuk menghindari kejahatan di dunia maya, selalu ditekankan prinsip dasar yang harus diketahui dalam menggunakan internet. Prinsip dasar di dunia nyata berlaku pula di dunia maya. Penggunaan internet secara sehat dan aman perlu ditanamkan semenjak dini melalui pembelajaran etika berinternet secara sehat (cyber ethics). Hal ini perlu disampaikan untuk menghindari kebiasaan jelek di dunia nyata akan terbawa di dunia maya dan menimbulkan kembali efek negatif di dunia nyata.

Internet sehat dan aman perlu disosialisasikan kepada pelajar, orangtua, guru, kaum lanjut usia, penyandang disabilitas serta seluruh lapisan masyarakat lain yang kemungkinan rentan kejahatan siber sehingga pemanfaatan internet dapat tetap aman dan dilakukan dengan penuh tanggung jawab. Kesadaran generasi muda akan potensi sekaligus risiko internet harus terus ditumbuhkan begitu pula dengan kepedulian orangtua untuk terus mendampingi dan mengawasi putra-putrinya agar terhindar dari konten negatif dan mendorong untuk lebih cerdas dalam menciptakan kreativitas.`,
  };

  // Data Edukasi dan Tips berdasarkan konten BSSN
  const edukasiTopics = [
    {
      id: 1,
      title: "Cara Mengatasi Cyberbullying",
      description:
        "Panduan lengkap untuk mengidentifikasi, mengatasi, dan mencegah cyberbullying di berbagai platform digital.",
      category: "Perlindungan Anak",
      icon: Shield,
      path: "/informasi-regulasi/edukasi-imbauan-keamanan/cara-mengatasi-cyberbullying",
      featured: true,
    },
    {
      id: 2,
      title: "Tips untuk Guru dalam Merespon Bullying",
      description:
        "Strategi praktis bagi pendidik untuk mengenali, menangani, dan mencegah bullying di lingkungan sekolah.",
      category: "Pendidikan",
      icon: GraduationCap,
      path: "/informasi-regulasi/edukasi-imbauan-keamanan/tips-guru-respon-bullying",
      featured: true,
    },
    {
      id: 3,
      title: "Tips Membicarakan Bullying dengan Anak",
      description:
        "Panduan untuk orangtua dalam berkomunikasi dengan anak tentang bullying dan keamanan online.",
      category: "Parenting",
      icon: Users,
      path: "/informasi-regulasi/edukasi-imbauan-keamanan/bicara-bullying-anak",
      featured: false,
    },
    {
      id: 4,
      title: "Waspada Dampak Buruk Gadget pada Anak",
      description:
        "Informasi tentang risiko penggunaan gadget berlebihan dan cara melindungi anak dari dampak negatifnya.",
      category: "Kesehatan Digital",
      icon: Smartphone,
      path: "/informasi-regulasi/edukasi-imbauan-keamanan/dampak-gadget-anak",
      featured: false,
    },
    {
      id: 5,
      title: "Tips Aman Berinternet",
      description:
        "Panduan praktis untuk browsing yang aman, melindungi data pribadi, dan menghindari ancaman online.",
      category: "Keamanan Online",
      icon: Globe,
      path: "/informasi-regulasi/edukasi-imbauan-keamanan/tips-aman-berinternet",
      featured: true,
    },
    {
      id: 6,
      title: "Tips Memulai Bisnis untuk Penyandang Disabilitas",
      description:
        "Panduan khusus untuk penyandang disabilitas dalam memulai bisnis online dengan aman dan sukses.",
      category: "Inklusi Digital",
      icon: Award,
      path: "/informasi-regulasi/edukasi-imbauan-keamanan/bisnis-disabilitas",
      featured: false,
    },
    {
      id: 7,
      title: "Aplikasi Bantu Penyandang Disabilitas",
      description:
        "Kumpulan aplikasi dan tools digital yang dapat membantu penyandang disabilitas dalam aktivitas sehari-hari.",
      category: "Aksesibilitas",
      icon: Smartphone,
      path: "/informasi-regulasi/edukasi-imbauan-keamanan/aplikasi-disabilitas",
      featured: false,
    },
  ];

  // Data Imbauan Keamanan dari security advisory
  const securityAdvisories = [
    {
      id: "BSSN-2025-001",
      title: "Kerentanan SQL Injection pada Zabbix Frontend (CVE-2024-42327)",
      description:
        "Kerentanan SQL Injection ditemukan pada frontend Zabbix, khususnya dalam kelas CUser pada fungsi addRelatedObjects. Segera lakukan update ke versi terbaru.",
      severity: "critical",
      category: "Vulnerability",
      date: "2025-01-15",
      affected: "Zabbix Frontend",
      cvss: "9.1",
      status: "Patch Available",
      cve: "CVE-2024-42327",
    },
    {
      id: "BSSN-2025-002",
      title:
        "OS Command Injection pada Palo Alto Networks Expedition (CVE-2025-0107)",
      description:
        "Kerentanan command injection yang memungkinkan penyerang tanpa autentikasi menjalankan perintah sistem operasi secara arbitrer pada Palo Alto Networks Expedition.",
      severity: "critical",
      category: "Network Security",
      date: "2025-01-14",
      affected: "Palo Alto Networks",
      cvss: "9.8",
      status: "Vendor Notified",
      cve: "CVE-2025-0107",
    },
    {
      id: "BSSN-2025-003",
      title: "Remote Code Execution pada Wazuh (CVE-2025-24016)",
      description:
        "Kerentanan remote code execution pada Wazuh versi 4.4.0 hingga sebelum 4.9.1 yang disebabkan oleh deserialisasi tidak aman dalam API server.",
      severity: "high",
      category: "Security Platform",
      date: "2025-01-12",
      affected: "Wazuh 4.4.0-4.9.0",
      cvss: "8.8",
      status: "Patch Available",
      cve: "CVE-2025-24016",
    },
    {
      id: "BSSN-2025-004",
      title: "Privilege Escalation pada Grafana (CVE-2023-4822)",
      description:
        "Kerentanan privilege escalation ditemukan pada produk Grafana yang dapat dieksploitasi untuk mendapatkan akses administrator.",
      severity: "high",
      category: "Monitoring Tool",
      date: "2025-01-10",
      affected: "Grafana",
      cvss: "7.8",
      status: "Mitigating",
      cve: "CVE-2023-4822",
    },
    {
      id: "BSSN-2025-005",
      title: "Aktivitas Kelompok Ancaman Siber Menargetkan Pemerintah",
      description:
        "Terdeteksi indikasi aktivitas siber yang memanfaatkan teknik serangan seperti SQL Injection, Bruteforce Attack, XSS Exploit, Mail Phishing, dan DDoS terhadap instansi pemerintah.",
      severity: "high",
      category: "Threat Intelligence",
      date: "2025-01-08",
      affected: "Instansi Pemerintah",
      cvss: "8.0",
      status: "Active Monitoring",
    },
  ];

  const quickTips = [
    {
      title: "Gunakan Two-Factor Authentication (2FA)",
      description: "Aktifkan 2FA di semua akun penting untuk keamanan berlapis",
      icon: Lock,
      priority: "high",
    },
    {
      title: "Update Software Secara Berkala",
      description: "Selalu update sistem operasi dan aplikasi ke versi terbaru",
      icon: Shield,
      priority: "high",
    },
    {
      title: "Waspada Email Phishing",
      description:
        "Jangan klik link dari email yang mencurigakan atau tidak dikenal",
      icon: Mail,
      priority: "high",
    },
    {
      title: "Backup Data Penting",
      description:
        "Lakukan backup rutin data penting ke cloud atau storage eksternal",
      icon: FileText,
      priority: "medium",
    },
    {
      title: "Gunakan Password yang Kuat",
      description:
        "Buat password unik minimal 12 karakter dengan kombinasi huruf, angka, dan simbol",
      icon: Lock,
      priority: "high",
    },
    {
      title: "Hati-hati di Wi-Fi Publik",
      description: "Hindari akses data sensitif saat menggunakan Wi-Fi publik",
      icon: Wifi,
      priority: "medium",
    },
  ];

  const interactiveContent = [
    {
      title: "Simulator Phishing Email",
      description:
        "Latih kemampuan mengenali email phishing dengan simulator interaktif kami",
      type: "Interactive",
      duration: "10 menit",
      icon: Target,
      action: "Mulai Simulasi",
    },
    {
      title: "Password Strength Checker",
      description: "Cek kekuatan password Anda dengan tool online kami",
      type: "Tool",
      duration: "2 menit",
      icon: Eye,
      action: "Cek Password",
    },
    {
      title: "Video Tutorial Keamanan",
      description:
        "Koleksi video tutorial keamanan siber dalam Bahasa Indonesia",
      type: "Video Series",
      duration: "45 menit",
      icon: PlayCircle,
      action: "Tonton Sekarang",
    },
  ];

  const getSeverityColor = (severity: string) => {
    const colors = {
      critical: "bg-red-100 text-red-700 border-red-200",
      high: "bg-orange-100 text-orange-700 border-orange-200",
      medium: "bg-yellow-100 text-yellow-700 border-yellow-200",
      low: "bg-green-100 text-green-700 border-green-200",
    };
    return colors[severity as keyof typeof colors] || colors.medium;
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "critical":
        return <AlertTriangle className="h-4 w-4" />;
      case "high":
        return <Shield className="h-4 w-4" />;
      case "medium":
        return <Bug className="h-4 w-4" />;
      default:
        return <AlertTriangle className="h-4 w-4" />;
    }
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      Vulnerability: Bug,
      "Network Security": Wifi,
      "Security Platform": Server,
      "Monitoring Tool": Database,
      "Threat Intelligence": Globe,
    };
    const Icon = icons[category as keyof typeof icons] || Server;
    return <Icon className="h-4 w-4" />;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-background to-green-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                <BookOpen className="mr-2 h-4 w-4" />
                Edukasi & Imbauan Keamanan
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Edukasi & <span className="text-blue-600">Imbauan</span>{" "}
                Keamanan Siber
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Pelajari keamanan siber melalui program edukasi BSSN dan
                dapatkan informasi terkini tentang ancaman keamanan siber serta
                panduan mitigasinya.
              </p>

              {/* Search Bar */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto pt-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Cari edukasi atau imbauan keamanan..."
                    className="pl-10"
                  />
                </div>
                <Select>
                  <SelectTrigger className="w-full sm:w-48">
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua Kategori</SelectItem>
                    <SelectItem value="education">Program Edukasi</SelectItem>
                    <SelectItem value="advisory">Imbauan Keamanan</SelectItem>
                    <SelectItem value="vulnerability">Kerentanan</SelectItem>
                    <SelectItem value="awareness">
                      Kampanye Kesadaran
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Tabs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="edukasi" className="max-w-7xl mx-auto">
              <div className="flex justify-center mb-12">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger
                    value="edukasi"
                    className="flex items-center space-x-2"
                  >
                    <GraduationCap className="h-4 w-4" />
                    <span>Program Edukasi</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="imbauan"
                    className="flex items-center space-x-2"
                  >
                    <AlertTriangle className="h-4 w-4" />
                    <span>Imbauan Keamanan</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="edukasi" className="space-y-12">
                {/* Budaya Keamanan Informasi - Konten Utama */}
                <div>
                  <Card className="overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50 border-b">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                          <Shield className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">
                            {mainContent.title}
                          </CardTitle>
                          <CardDescription className="text-blue-700">
                            Membangun Kesadaran Keamanan Siber untuk Seluruh
                            Masyarakat Indonesia
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-8">
                      <div className="prose prose-lg max-w-none">
                        {mainContent.content
                          .split("\n\n")
                          .map((paragraph, index) => (
                            <p
                              key={index}
                              className="text-muted-foreground leading-relaxed mb-6"
                            >
                              {paragraph}
                            </p>
                          ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Tips dan Panduan Unggulan */}
                <div>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">
                      Tips dan Panduan Unggulan
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Panduan praktis untuk keamanan siber yang dapat diterapkan
                      dalam kehidupan sehari-hari
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-8">
                    {edukasiTopics
                      .filter((topic) => topic.featured)
                      .map((topic) => (
                        <Card
                          key={topic.id}
                          className="group hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                        >
                          <CardContent className="p-8 text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                              <topic.icon className="h-8 w-8 text-white" />
                            </div>
                            <div className="mb-4">
                              <Badge className="bg-blue-100 text-blue-700 mb-3">
                                {topic.category}
                              </Badge>
                            </div>
                            <CardTitle className="text-lg mb-3 group-hover:text-blue-600 transition-colors">
                              {topic.title}
                            </CardTitle>
                            <CardDescription className="mb-6">
                              {topic.description}
                            </CardDescription>
                            <Button
                              className="w-full bg-blue-600 hover:bg-blue-700"
                              asChild
                            >
                              <Link to={topic.path}>
                                <BookOpen className="h-4 w-4 mr-2" />
                                Pelajari Selengkapnya
                              </Link>
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>

                {/* Topik Edukasi Lainnya */}
                <div>
                  <h3 className="text-2xl font-bold mb-8">
                    Topik Edukasi Lainnya
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {edukasiTopics
                      .filter((topic) => !topic.featured)
                      .map((topic) => (
                        <Card
                          key={topic.id}
                          className="group hover:shadow-lg transition-all duration-300"
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <topic.icon className="h-6 w-6 text-blue-600" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-2">
                                  <Badge variant="outline">
                                    {topic.category}
                                  </Badge>
                                </div>
                                <h4 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                                  {topic.title}
                                </h4>
                                <p className="text-sm text-muted-foreground mb-4">
                                  {topic.description}
                                </p>
                                <Button variant="ghost" size="sm" asChild>
                                  <Link to={topic.path}>
                                    Baca Selengkapnya
                                    <ExternalLink className="h-3 w-3 ml-1" />
                                  </Link>
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>

                {/* Tips Keamanan Cepat */}
                <div className="bg-gradient-to-b from-background to-muted/30 py-16 -mx-4 px-4">
                  <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                      <h2 className="text-3xl font-bold mb-4">
                        Tips Keamanan Cepat
                      </h2>
                      <p className="text-muted-foreground">
                        Tips penting yang bisa langsung Anda terapkan hari ini
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {quickTips.map((tip, index) => (
                        <Card
                          key={index}
                          className="group hover:shadow-lg transition-all duration-300"
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <tip.icon className="h-5 w-5 text-blue-600" />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold mb-2">
                                  {tip.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  {tip.description}
                                </p>
                                <div className="mt-3">
                                  <Badge
                                    className={
                                      tip.priority === "high"
                                        ? "bg-red-100 text-red-700"
                                        : "bg-yellow-100 text-yellow-700"
                                    }
                                  >
                                    {tip.priority === "high"
                                      ? "Prioritas Tinggi"
                                      : "Penting"}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="imbauan" className="space-y-12">
                {/* Featured Imbauan Section */}
                <div>
                  <Card className="overflow-hidden border-l-4 border-l-red-500">
                    <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50 border-b">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                          <AlertTriangle className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">
                            Imbauan Keamanan
                          </CardTitle>
                          <CardDescription className="text-red-700">
                            Kumpulan Imbauan Keamanan Siber untuk Melindungi
                            Anda dari Ancaman Digital
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <p className="text-muted-foreground leading-relaxed">
                          Dapatkan informasi terkini tentang berbagai ancaman
                          keamanan siber seperti malware APK, serangan phishing,
                          web defacement, dan kerentanan sistem. Setiap imbauan
                          dilengkapi dengan panduan mitigasi dan file PDF yang
                          dapat diunduh.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="flex items-center space-x-3 p-4 bg-red-50 rounded-lg">
                            <Shield className="h-8 w-8 text-red-600" />
                            <div>
                              <h4 className="font-semibold">5 Imbauan Aktif</h4>
                              <p className="text-sm text-muted-foreground">
                                Ancaman keamanan terkini
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                            <Download className="h-8 w-8 text-blue-600" />
                            <div>
                              <h4 className="font-semibold">Panduan PDF</h4>
                              <p className="text-sm text-muted-foreground">
                                Mitigasi dan penanganan
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-center pt-4">
                          <Button
                            size="lg"
                            className="bg-red-600 hover:bg-red-700"
                            asChild
                          >
                            <Link to="/informasi-regulasi/edukasi-imbauan-keamanan/imbauan-keamanan">
                              <AlertTriangle className="h-4 w-4 mr-2" />
                              Lihat Semua Imbauan Keamanan
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Emergency Alert Banner */}
                <div className="bg-red-600 text-white rounded-lg p-6">
                  <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-3">
                      <AlertTriangle className="h-6 w-6 animate-pulse" />
                      <span className="font-semibold">
                        {
                          securityAdvisories.filter(
                            (alert) => alert.severity === "critical",
                          ).length
                        }{" "}
                        Imbauan Kritis Aktif
                      </span>
                    </div>
                    <Button
                      variant="secondary"
                      size="lg"
                      className="bg-white text-red-600 hover:bg-red-50"
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      Hotline: 1500-567
                    </Button>
                  </div>
                </div>

                {/* Imbauan Keamanan Kritis */}
                <div>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">
                      Imbauan Keamanan Kritis
                    </h2>
                    <p className="text-muted-foreground">
                      Ancaman keamanan siber tingkat tinggi yang memerlukan
                      perhatian segera
                    </p>
                  </div>

                  <div className="space-y-6">
                    {securityAdvisories
                      .filter((alert) => alert.severity === "critical")
                      .map((alert) => (
                        <Card
                          key={alert.id}
                          className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-red-500"
                        >
                          <CardContent className="p-8">
                            <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                              <div className="flex-1">
                                <div className="flex items-start justify-between mb-4">
                                  <div className="flex items-center space-x-3">
                                    <Badge
                                      className={getSeverityColor(
                                        alert.severity,
                                      )}
                                    >
                                      {getSeverityIcon(alert.severity)}
                                      <span className="ml-1 uppercase">
                                        {alert.severity}
                                      </span>
                                    </Badge>
                                    <Badge variant="outline">{alert.id}</Badge>
                                    <Badge className="bg-blue-100 text-blue-700">
                                      {getCategoryIcon(alert.category)}
                                      <span className="ml-1">
                                        {alert.category}
                                      </span>
                                    </Badge>
                                  </div>
                                  <div className="text-right text-sm text-muted-foreground">
                                    <div className="flex items-center">
                                      <Calendar className="h-4 w-4 mr-1" />
                                      {formatDate(alert.date)}
                                    </div>
                                  </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-3 group-hover:text-red-600 transition-colors">
                                  {alert.title}
                                </h3>

                                <p className="text-muted-foreground mb-4">
                                  {alert.description}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                  <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                    <span className="text-sm">
                                      <strong>Target:</strong> {alert.affected}
                                    </span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                    <span className="text-sm">
                                      <strong>CVSS:</strong> {alert.cvss}/10
                                    </span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span className="text-sm">
                                      <strong>Status:</strong> {alert.status}
                                    </span>
                                  </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3">
                                  <Button className="bg-red-600 hover:bg-red-700">
                                    <Download className="h-4 w-4 mr-2" />
                                    Download Panduan Mitigasi
                                  </Button>
                                  <Button variant="outline">
                                    <ExternalLink className="h-4 w-4 mr-2" />
                                    Detail Teknis
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>

                {/* Imbauan Keamanan Lainnya */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold">
                      Imbauan Keamanan Lainnya
                    </h2>
                    <Select>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Urutkan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="latest">Terbaru</SelectItem>
                        <SelectItem value="severity">Tingkat Risiko</SelectItem>
                        <SelectItem value="category">Kategori</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-6">
                    {securityAdvisories
                      .filter((alert) => alert.severity !== "critical")
                      .map((alert) => (
                        <Card
                          key={alert.id}
                          className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                          <CardHeader>
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center space-x-2">
                                <Badge
                                  className={getSeverityColor(alert.severity)}
                                >
                                  {getSeverityIcon(alert.severity)}
                                  <span className="ml-1 uppercase text-xs">
                                    {alert.severity}
                                  </span>
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  {alert.id}
                                </Badge>
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {formatDate(alert.date)}
                              </div>
                            </div>

                            <div className="flex items-center space-x-2 mb-3">
                              <Badge className="bg-blue-100 text-blue-700">
                                {getCategoryIcon(alert.category)}
                                <span className="ml-1">{alert.category}</span>
                              </Badge>
                            </div>

                            <CardTitle className="text-lg leading-tight group-hover:text-red-600 transition-colors">
                              {alert.title}
                            </CardTitle>
                          </CardHeader>

                          <CardContent>
                            <p className="text-sm text-muted-foreground mb-4">
                              {alert.description}
                            </p>

                            <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                              <div>
                                <strong>Target:</strong> {alert.affected}
                              </div>
                              <div>
                                <strong>CVSS:</strong> {alert.cvss}/10
                              </div>
                              {alert.cve && (
                                <div>
                                  <strong>CVE:</strong> {alert.cve}
                                </div>
                              )}
                            </div>

                            <div className="flex items-center justify-between">
                              <Badge
                                variant="outline"
                                className={
                                  alert.status === "Patch Available"
                                    ? "border-green-200 text-green-700"
                                    : alert.status === "Active Monitoring"
                                      ? "border-red-200 text-red-700"
                                      : "border-yellow-200 text-yellow-700"
                                }
                              >
                                {alert.status}
                              </Badge>
                              <Button variant="ghost" size="sm">
                                Detail
                                <ExternalLink className="h-3 w-3 ml-1" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>

                {/* Panduan Respons */}
                <div className="bg-gradient-to-b from-background to-muted/30 py-16 -mx-4 px-4">
                  <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                      <h2 className="text-3xl font-bold mb-4">
                        Panduan Respons Keamanan
                      </h2>
                      <p className="text-muted-foreground">
                        Langkah-langkah yang harus diambil ketika menghadapi
                        ancaman keamanan siber
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <Card className="text-center">
                        <CardContent className="p-6">
                          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <AlertTriangle className="h-6 w-6 text-red-600" />
                          </div>
                          <h3 className="font-semibold mb-2">Identifikasi</h3>
                          <p className="text-sm text-muted-foreground">
                            Identifikasi jenis ancaman dan tingkat dampaknya
                            pada sistem Anda
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="text-center">
                        <CardContent className="p-6">
                          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Shield className="h-6 w-6 text-orange-600" />
                          </div>
                          <h3 className="font-semibold mb-2">Mitigasi</h3>
                          <p className="text-sm text-muted-foreground">
                            Terapkan langkah mitigasi sesuai panduan untuk
                            mencegah penyebaran ancaman
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="text-center">
                        <CardContent className="p-6">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Phone className="h-6 w-6 text-blue-600" />
                          </div>
                          <h3 className="font-semibold mb-2">Lapor</h3>
                          <p className="text-sm text-muted-foreground">
                            Laporkan insiden ke BSSN melalui hotline 1500-567
                            atau email
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EdukasiImbauan;
