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
  FileText,
  Calendar,
  Search,
  Filter,
  Clock,
  User,
  ArrowRight,
  TrendingUp,
  Shield,
  Globe,
  AlertTriangle,
} from "lucide-react";
import { Link } from "react-router-dom";

const Berita = () => {
  const featuredNews = {
    id: 1,
    title: "BSSN Luncurkan Program Sertifikasi Keamanan Siber Nasional 2024",
    excerpt:
      "Program sertifikasi terbaru ini ditujukan untuk meningkatkan kompetensi profesional keamanan siber di Indonesia dengan standar internasional.",
    content:
      "Jakarta - Badan Siber dan Sandi Negara (BSSN) resmi meluncurkan Program Sertifikasi Keamanan Siber Nasional 2024 yang dirancang khusus untuk meningkatkan kapasitas dan kompetensi para profesional keamanan siber di Indonesia...",
    category: "Program",
    date: "2024-01-15",
    author: "Tim Humas BSSN",
    image: "/placeholder.svg",
    featured: true,
    views: 2540,
  };

  const newsArticles = [
    {
      id: 2,
      title:
        "Kerjasama BSSN dengan Perguruan Tinggi untuk Penelitian Cyber Security",
      excerpt:
        "Kolaborasi strategis untuk mengembangkan inovasi teknologi keamanan siber dan SDM berkualitas melalui program penelitian bersama.",
      category: "Kerjasama",
      date: "2024-01-12",
      author: "Tim Humas BSSN",
      image: "/placeholder.svg",
      views: 1890,
    },
    {
      id: 3,
      title:
        "BSSN Berhasil Menggagalkan 1,247 Serangan Siber pada Desember 2023",
      excerpt:
        "Upaya proteksi infrastruktur vital nasional menunjukkan hasil positif dengan tingkat keberhasilan mencapai 99.2% dalam menangkal ancaman siber.",
      category: "Keamanan",
      date: "2024-01-10",
      author: "Tim Operasi BSSN",
      image: "/placeholder.svg",
      views: 3420,
    },
    {
      id: 4,
      title: "Workshop Keamanan Siber untuk UMKM Sukses Digelar di 5 Kota",
      excerpt:
        "Lebih dari 2,500 peserta UMKM mengikuti workshop edukasi keamanan siber tingkat dasar yang diselenggarakan secara serentak.",
      category: "Edukasi",
      date: "2024-01-08",
      author: "Tim Edukasi BSSN",
      image: "/placeholder.svg",
      views: 1650,
    },
    {
      id: 5,
      title:
        "Peringatan: Meningkatnya Serangan Phishing Menggunakan AI di Indonesia",
      excerpt:
        "BSSN memperingatkan masyarakat tentang meningkatnya serangan phishing yang menggunakan teknologi AI untuk menyamar sebagai institusi resmi.",
      category: "Peringatan",
      date: "2024-01-05",
      author: "Tim Deteksi BSSN",
      image: "/placeholder.svg",
      views: 4120,
      urgent: true,
    },
    {
      id: 6,
      title:
        "BSSN Raih Penghargaan Best Cyber Security Agency Asia Pacific 2023",
      excerpt:
        "Pengakuan internasional atas kontribusi BSSN dalam menjaga keamanan siber regional dan kerjasama multilateral di kawasan Asia Pasifik.",
      category: "Penghargaan",
      date: "2024-01-03",
      author: "Tim Humas BSSN",
      image: "/placeholder.svg",
      views: 2890,
    },
    {
      id: 7,
      title: "Implementasi Standar Keamanan Siber Baru untuk Sektor Keuangan",
      excerpt:
        "Sektor perbankan dan fintech diwajibkan menerapkan standar keamanan siber terbaru mulai Q2 2024 untuk melindungi data nasabah.",
      category: "Regulasi",
      date: "2024-01-01",
      author: "Tim Regulasi BSSN",
      image: "/placeholder.svg",
      views: 2140,
    },
  ];

  const categories = [
    { name: "Semua", value: "all", count: newsArticles.length + 1 },
    { name: "Keamanan", value: "keamanan", count: 1 },
    { name: "Program", value: "program", count: 1 },
    { name: "Kerjasama", value: "kerjasama", count: 1 },
    { name: "Edukasi", value: "edukasi", count: 1 },
    { name: "Peringatan", value: "peringatan", count: 1 },
    { name: "Penghargaan", value: "penghargaan", count: 1 },
    { name: "Regulasi", value: "regulasi", count: 1 },
  ];

  const stats = [
    {
      icon: FileText,
      value: "150+",
      label: "Berita Bulan Ini",
      color: "text-blue-600",
    },
    {
      icon: TrendingUp,
      value: "50K+",
      label: "Total Pembaca",
      color: "text-green-600",
    },
    {
      icon: Shield,
      value: "24/7",
      label: "Update Keamanan",
      color: "text-orange-600",
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Program: "bg-blue-100 text-blue-700",
      Kerjasama: "bg-green-100 text-green-700",
      Keamanan: "bg-red-100 text-red-700",
      Edukasi: "bg-purple-100 text-purple-700",
      Peringatan: "bg-orange-100 text-orange-700",
      Penghargaan: "bg-yellow-100 text-yellow-700",
      Regulasi: "bg-indigo-100 text-indigo-700",
    };
    return (
      colors[category as keyof typeof colors] || "bg-gray-100 text-gray-700"
    );
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
        <section className="bg-gradient-to-br from-blue-50 via-background to-cyan-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                <FileText className="mr-2 h-4 w-4" />
                Berita BSSN
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Berita dan <span className="text-blue-600">Informasi</span>{" "}
                Terkini
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Dapatkan informasi terbaru seputar keamanan siber Indonesia,
                program BSSN, dan perkembangan teknologi keamanan digital.
              </p>

              {/* Search Bar */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto pt-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Cari berita..." className="pl-10" />
                </div>
                <Select>
                  <SelectTrigger className="w-full sm:w-48">
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.name} ({category.count})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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

        {/* Featured News */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Berita Utama</h2>
              <p className="text-muted-foreground">
                Berita terpenting dan terbaru dari BSSN
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={featuredNews.image}
                      alt={featuredNews.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge
                        className={getCategoryColor(featuredNews.category)}
                      >
                        {featuredNews.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(featuredNews.date)}
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {featuredNews.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredNews.views.toLocaleString()} views
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                      {featuredNews.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 line-clamp-3">
                      {featuredNews.excerpt}
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Baca Selengkapnya
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold">Berita Terbaru</h2>
              <div className="flex items-center space-x-4">
                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Urutkan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="latest">Terbaru</SelectItem>
                    <SelectItem value="popular">Terpopuler</SelectItem>
                    <SelectItem value="oldest">Terlama</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {newsArticles.map((article) => (
                <Card
                  key={article.id}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                >
                  <div className="relative h-48">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className={getCategoryColor(article.category)}>
                        {article.category}
                      </Badge>
                    </div>
                    {article.urgent && (
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-red-600 text-white">
                          <AlertTriangle className="h-3 w-3 mr-1" />
                          Urgent
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-2">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(article.date)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.views.toLocaleString()}
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {article.author}
                      </span>
                      <Button variant="ghost" size="sm">
                        Baca
                        <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Muat Lebih Banyak Berita
              </Button>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Kategori Berita</h2>
              <p className="text-muted-foreground">
                Jelajahi berita berdasarkan kategori yang Anda minati
              </p>
            </div>

            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {categories.slice(1).map((category, index) => (
                <Card
                  key={index}
                  className="text-center group hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold mb-2">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {category.count} artikel
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold">
                Dapatkan Update Berita Terbaru
              </h2>
              <p className="text-xl text-blue-100">
                Berlangganan newsletter kami untuk mendapatkan berita keamanan
                siber terbaru langsung di email Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <Input
                  placeholder="Masukkan email Anda"
                  className="flex-1 bg-white text-gray-900"
                />
                <Button variant="secondary" size="lg">
                  Berlangganan
                </Button>
              </div>
              <p className="text-sm text-blue-200">
                Kami menghormati privasi Anda. Tidak ada spam, hanya update
                penting.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Berita;
