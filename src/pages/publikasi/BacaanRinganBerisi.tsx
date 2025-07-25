import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  Calendar,
  BookOpen,
  Search,
  Eye,
  Heart,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const lightReading = [
  {
    id: 1,
    title: "Keamanan Siber untuk Pemula: Langkah Pertama Melindungi Diri",
    description:
      "Panduan sederhana untuk memahami dasar-dasar keamanan siber dalam kehidupan sehari-hari",
    category: "Edukasi Dasar",
    readTime: "5 menit",
    date: "2024-02-15",
    views: 15420,
    likes: 892,
    size: "850 KB",
    downloadUrl: "#",
    isPopular: true,
    tags: ["pemula", "dasar", "edukasi"],
  },
  {
    id: 2,
    title: "Password yang Kuat: Seni Membuat Kata Sandi yang Tidak Terlupakan",
    description:
      "Tips kreatif untuk membuat password yang kuat namun mudah diingat tanpa mengorbankan keamanan",
    category: "Tips Praktis",
    readTime: "7 menit",
    date: "2024-01-20",
    views: 23150,
    likes: 1456,
    size: "1.2 MB",
    downloadUrl: "#",
    isPopular: true,
    tags: ["password", "tips", "praktis"],
  },
  {
    id: 3,
    title: "Phishing: Kenali Sebelum Terjerat",
    description:
      "Cara mudah mengenali dan menghindari serangan phishing yang semakin canggih",
    category: "Awareness",
    readTime: "6 menit",
    date: "2024-01-10",
    views: 18900,
    likes: 743,
    size: "950 KB",
    downloadUrl: "#",
    isPopular: false,
    tags: ["phishing", "awareness", "deteksi"],
  },
  {
    id: 4,
    title: "Backup Data: Investasi Terbaik untuk Masa Depan Digital Anda",
    description:
      "Mengapa backup data penting dan cara mudah melakukannya untuk pengguna rumahan",
    category: "Data Protection",
    readTime: "8 menit",
    date: "2023-12-28",
    views: 12340,
    likes: 567,
    size: "1.1 MB",
    downloadUrl: "#",
    isPopular: false,
    tags: ["backup", "data", "protection"],
  },
  {
    id: 5,
    title: "WiFi Publik: Nyaman tapi Berbahaya?",
    description:
      "Panduan aman menggunakan WiFi publik tanpa membahayakan data pribadi Anda",
    category: "Network Safety",
    readTime: "5 menit",
    date: "2023-12-15",
    views: 16780,
    likes: 823,
    size: "780 KB",
    downloadUrl: "#",
    isPopular: true,
    tags: ["wifi", "publik", "network"],
  },
];

const categories = [
  "Semua Kategori",
  "Edukasi Dasar",
  "Tips Praktis",
  "Awareness",
  "Data Protection",
  "Network Safety",
];
const years = ["Semua Tahun", "2024", "2023", "2022"];

const BacaanRinganBerisi = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua Kategori");
  const [selectedYear, setSelectedYear] = useState("Semua Tahun");

  const filteredReading = lightReading.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    const matchesCategory =
      selectedCategory === "Semua Kategori" ||
      item.category === selectedCategory;
    const matchesYear =
      selectedYear === "Semua Tahun" ||
      new Date(item.date).getFullYear().toString() === selectedYear;

    return matchesSearch && matchesCategory && matchesYear;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link
            to="/informasi-regulasi/publikasi"
            className="hover:text-foreground"
          >
            Publikasi
          </Link>
          <span>/</span>
          <span className="text-foreground">Bacaan Ringan Berisi</span>
        </div>

        {/* Back Button */}
        <div className="mb-6">
          <Link to="/informasi-regulasi/publikasi">
            <Button variant="ghost" className="pl-0">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Publikasi
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
            <BookOpen className="w-8 h-8 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Bacaan Ringan Berisi
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Materi edukatif keamanan siber yang disajikan dengan bahasa
            sederhana dan mudah dipahami. Cocok untuk semua kalangan yang ingin
            belajar keamanan siber.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-foreground">24</div>
              <p className="text-sm text-muted-foreground">Artikel Tersedia</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-foreground">86K+</div>
              <p className="text-sm text-muted-foreground">Total Pembaca</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-100 rounded-full mb-4">
                <Heart className="w-6 h-6 text-pink-600" />
              </div>
              <div className="text-2xl font-bold text-foreground">4.8/5</div>
              <p className="text-sm text-muted-foreground">Rating Rata-rata</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              Cari Bacaan Ringan
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Cari artikel, topik, atau tag..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Kategori</label>
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Tahun</label>
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm text-muted-foreground">
            Menampilkan {filteredReading.length} dari {lightReading.length}{" "}
            artikel
          </span>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {filteredReading.map((article) => (
            <Card
              key={article.id}
              className="hover:shadow-lg transition-all duration-300"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="outline">{article.category}</Badge>
                  {article.isPopular && (
                    <Badge className="bg-orange-100 text-orange-700">
                      🔥 Popular
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg leading-tight line-clamp-2">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 line-clamp-3">
                  {article.description}
                </CardDescription>

                <div className="flex flex-wrap gap-1 mb-4">
                  {article.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs bg-purple-50 text-purple-700"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(article.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{formatNumber(article.views)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      <span>{formatNumber(article.likes)}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(article.downloadUrl, "_blank")}
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Unduh
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredReading.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">
                Tidak ada artikel ditemukan
              </h3>
              <p className="text-muted-foreground">
                Coba ubah filter pencarian atau kata kunci Anda
              </p>
            </CardContent>
          </Card>
        )}

        {/* Call to Action */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Ingin Mendapatkan Update Terbaru?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Dapatkan notifikasi setiap ada artikel baru dari Bacaan Ringan
                Berisi dan tips keamanan siber terbaru lainnya.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/kontak">
                  <Button
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    Subscribe Newsletter
                  </Button>
                </Link>
                <Link to="/informasi-regulasi/publikasi/panduan-keamanan">
                  <Button variant="outline" size="lg">
                    Lihat Panduan Lainnya
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BacaanRinganBerisi;
