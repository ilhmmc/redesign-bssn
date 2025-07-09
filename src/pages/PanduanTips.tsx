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
} from "lucide-react";
import { Link } from "react-router-dom";

const PanduanTips = () => {
  const featuredGuides = [
    {
      id: 1,
      title: "Panduan Lengkap Keamanan Password",
      description:
        "Pelajari cara membuat, mengelola, dan melindungi password yang kuat untuk semua akun digital Anda.",
      category: "Password Security",
      difficulty: "Pemula",
      readTime: "15 menit",
      downloadCount: 1240,
      type: "PDF Guide",
      image: "/placeholder.svg",
      icon: Lock,
      featured: true,
    },
    {
      id: 2,
      title: "Tips Menghindari Penipuan Online",
      description:
        "Kenali modus penipuan online terbaru dan pelajari cara melindungi diri dari berbagai jenis scam digital.",
      category: "Online Safety",
      difficulty: "Pemula",
      readTime: "12 menit",
      downloadCount: 980,
      type: "Interactive Guide",
      image: "/placeholder.svg",
      icon: Shield,
      featured: true,
    },
  ];

  const guideCategories = [
    {
      title: "Keamanan Personal",
      icon: Users,
      description: "Tips keamanan siber untuk individu dan keluarga",
      count: 12,
      color: "blue",
      guides: [
        {
          title: "Cara Mengamankan Media Sosial",
          description:
            "Panduan mengatur privasi di Facebook, Instagram, Twitter, dan platform lainnya",
          difficulty: "Pemula",
          readTime: "8 menit",
          type: "Tutorial",
        },
        {
          title: "Keamanan Saat Berbelanja Online",
          description: "Tips aman bertransaksi di e-commerce dan marketplace",
          difficulty: "Pemula",
          readTime: "10 menit",
          type: "Checklist",
        },
        {
          title: "Melindungi Data Pribadi",
          description:
            "Cara melindungi informasi sensitif dari pencurian identitas",
          difficulty: "Menengah",
          readTime: "15 menit",
          type: "Guide",
        },
      ],
    },
    {
      title: "Keamanan Mobile",
      icon: Smartphone,
      description: "Panduan keamanan untuk perangkat mobile",
      count: 8,
      color: "green",
      guides: [
        {
          title: "Mengamankan Smartphone Android",
          description: "Setting keamanan penting untuk pengguna Android",
          difficulty: "Pemula",
          readTime: "12 menit",
          type: "Tutorial",
        },
        {
          title: "Tips Aman Download Aplikasi",
          description: "Cara memilih dan mengunduh aplikasi dengan aman",
          difficulty: "Pemula",
          readTime: "6 menit",
          type: "Tips",
        },
        {
          title: "Banking Mobile yang Aman",
          description: "Panduan menggunakan aplikasi perbankan dengan aman",
          difficulty: "Menengah",
          readTime: "18 menit",
          type: "Guide",
        },
      ],
    },
    {
      title: "Keamanan Email",
      icon: Mail,
      description: "Melindungi komunikasi email dari ancaman",
      count: 6,
      color: "purple",
      guides: [
        {
          title: "Mengenali Email Phishing",
          description: "Cara mengidentifikasi dan menghindari email palsu",
          difficulty: "Pemula",
          readTime: "10 menit",
          type: "Tutorial",
        },
        {
          title: "Enkripsi Email untuk Pemula",
          description: "Panduan dasar mengamankan email dengan enkripsi",
          difficulty: "Lanjutan",
          readTime: "25 menit",
          type: "Guide",
        },
      ],
    },
    {
      title: "Keamanan Wi-Fi",
      icon: Wifi,
      description: "Tips menggunakan internet dengan aman",
      count: 5,
      color: "orange",
      guides: [
        {
          title: "Aman Menggunakan Wi-Fi Publik",
          description: "Tips browsing aman di hotspot umum",
          difficulty: "Pemula",
          readTime: "8 menit",
          type: "Tips",
        },
        {
          title: "Mengamankan Router Wi-Fi Rumah",
          description: "Setting keamanan optimal untuk router pribadi",
          difficulty: "Menengah",
          readTime: "20 menit",
          type: "Tutorial",
        },
      ],
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
      title: "Backup Data Penting",
      description:
        "Lakukan backup rutin data penting ke cloud atau storage eksternal",
      icon: FileText,
      priority: "medium",
    },
    {
      title: "Hati-hati dengan Link Mencurigakan",
      description: "Jangan klik link dari sumber yang tidak terpercaya",
      icon: AlertTriangle,
      priority: "high",
    },
    {
      title: "Gunakan VPN di Wi-Fi Publik",
      description: "Selalu gunakan VPN saat browsing di hotspot umum",
      icon: Wifi,
      priority: "medium",
    },
    {
      title: "Monitor Rekening Bank Rutin",
      description:
        "Cek mutasi rekening secara berkala untuk mendeteksi aktivitas mencurigakan",
      icon: CreditCard,
      priority: "high",
    },
  ];

  const interactiveContent = [
    {
      title: "Simulator Phishing Email",
      description:
        "Latih kemampuan mengenali email phishing dengan simulator interaktif",
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

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-700 border-blue-200",
      green: "bg-green-100 text-green-700 border-green-200",
      purple: "bg-purple-100 text-purple-700 border-purple-200",
      orange: "bg-orange-100 text-orange-700 border-orange-200",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      Pemula: "bg-green-100 text-green-700",
      Menengah: "bg-yellow-100 text-yellow-700",
      Lanjutan: "bg-red-100 text-red-700",
    };
    return colors[difficulty as keyof typeof colors] || colors.Pemula;
  };

  const getPriorityColor = (priority: string) => {
    const colors = {
      high: "border-red-200 bg-red-50",
      medium: "border-yellow-200 bg-yellow-50",
      low: "border-green-200 bg-green-50",
    };
    return colors[priority as keyof typeof colors] || colors.medium;
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
                Panduan & Tips
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Panduan dan <span className="text-blue-600">Tips</span> Keamanan
                Siber
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Pelajari cara melindungi diri Anda di dunia digital dengan
                panduan praktis, tips keamanan, dan tools interaktif dari ahli
                BSSN.
              </p>

              {/* Search Bar */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto pt-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Cari panduan atau tips..."
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
                    <SelectItem value="personal">Keamanan Personal</SelectItem>
                    <SelectItem value="mobile">Keamanan Mobile</SelectItem>
                    <SelectItem value="email">Keamanan Email</SelectItem>
                    <SelectItem value="wifi">Keamanan Wi-Fi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Guides */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Panduan Unggulan</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Panduan paling populer dan penting untuk keamanan siber Anda
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {featuredGuides.map((guide) => (
                <Card
                  key={guide.id}
                  className="group hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-48">
                    <img
                      src={guide.image}
                      alt={guide.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600 text-white">
                        <guide.icon className="h-3 w-3 mr-1" />
                        Unggulan
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className={getDifficultyColor(guide.difficulty)}>
                        {guide.difficulty}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{guide.category}</Badge>
                      <div className="text-sm text-muted-foreground">
                        {guide.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {guide.title}
                    </CardTitle>
                    <CardDescription>{guide.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Download className="h-4 w-4 mr-1" />
                          {guide.downloadCount.toLocaleString()}
                        </div>
                        <div className="flex items-center">
                          <FileText className="h-4 w-4 mr-1" />
                          {guide.type}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                        <Download className="h-4 w-4 mr-2" />
                        Download Panduan
                      </Button>
                      <Button variant="outline">
                        <PlayCircle className="h-4 w-4 mr-2" />
                        Preview
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Tips */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Tips Cepat Keamanan</h2>
              <p className="text-muted-foreground">
                Tips penting yang bisa langsung Anda terapkan hari ini
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {quickTips.map((tip, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-lg transition-all duration-300 border-l-4 ${getPriorityColor(tip.priority)}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <tip.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">
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
        </section>

        {/* Guide Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Panduan Berdasarkan Kategori
              </h2>
              <p className="text-muted-foreground">
                Pilih kategori sesuai kebutuhan keamanan siber Anda
              </p>
            </div>

            <div className="space-y-12">
              {guideCategories.map((category, index) => (
                <div key={index} className="max-w-6xl mx-auto">
                  <Card className="overflow-hidden">
                    <CardHeader
                      className={`${getColorClasses(category.color)} border-b`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                            <category.icon className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">
                              {category.title}
                            </CardTitle>
                            <CardDescription className="text-current/80">
                              {category.description} • {category.count} panduan
                            </CardDescription>
                          </div>
                        </div>
                        <Button
                          variant="secondary"
                          className="bg-white/20 hover:bg-white/30"
                        >
                          Lihat Semua
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-3 gap-6">
                        {category.guides.map((guide, idx) => (
                          <Card
                            key={idx}
                            className="group hover:shadow-md transition-all duration-300"
                          >
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between mb-3">
                                <Badge
                                  className={getDifficultyColor(
                                    guide.difficulty,
                                  )}
                                >
                                  {guide.difficulty}
                                </Badge>
                                <div className="text-xs text-muted-foreground">
                                  {guide.readTime}
                                </div>
                              </div>
                              <h4 className="font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                                {guide.title}
                              </h4>
                              <p className="text-sm text-muted-foreground mb-3">
                                {guide.description}
                              </p>
                              <div className="flex items-center justify-between">
                                <Badge variant="outline" className="text-xs">
                                  {guide.type}
                                </Badge>
                                <Button variant="ghost" size="sm">
                                  Baca
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Content */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Konten Interaktif</h2>
              <p className="text-muted-foreground">
                Belajar keamanan siber dengan cara yang menyenangkan dan
                interaktif
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {interactiveContent.map((content, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 text-center"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <content.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{content.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {content.description}
                    </p>
                    <div className="flex items-center justify-center space-x-4 mb-6">
                      <Badge variant="outline">{content.type}</Badge>
                      <div className="text-sm text-muted-foreground">
                        {content.duration}
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <Lightbulb className="h-4 w-4 mr-2" />
                      {content.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold">
                Jadi Pahlawan Keamanan Siber!
              </h2>
              <p className="text-xl text-blue-100">
                Terapkan pengetahuan yang Anda pelajari dan bantu orang lain
                untuk lebih aman di dunia digital. Bagikan tips keamanan ke
                keluarga dan teman-teman Anda.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Panduan Lengkap
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                  asChild
                >
                  <Link to="/kontak">
                    <Mail className="h-5 w-5 mr-2" />
                    Hubungi Tim Edukasi
                  </Link>
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold">50K+</div>
                  <div className="text-blue-200">Panduan Diunduh</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-blue-200">Tingkat Kepuasan</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-blue-200">Dukungan Online</div>
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

export default PanduanTips;
