import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  Calendar,
  Newspaper,
  Search,
  Eye,
  BookOpen,
  Star,
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

const magazineEditions = [
  {
    id: 1,
    title: "Sanapati Edisi 24 - AI & Cybersecurity",
    description:
      "Eksplorasi mendalam tentang peran AI dalam keamanan siber dan tantangan baru yang muncul",
    edition: "24",
    date: "2024-02-15",
    theme: "Artificial Intelligence",
    featured: "Interview dengan Expert AI Security",
    pages: 64,
    size: "8.5 MB",
    readTime: "45 menit",
    downloads: 15420,
    rating: 4.9,
    downloadUrl: "#",
    isLatest: true,
    coverImage: "/api/placeholder/300/400",
  },
  {
    id: 2,
    title: "Sanapati Edisi 23 - Zero Trust Architecture",
    description:
      "Panduan implementasi Zero Trust untuk organisasi pemerintah dan swasta",
    edition: "23",
    date: "2023-11-20",
    theme: "Network Security",
    featured: "Case Study: Implementasi Zero Trust di BUMN",
    pages: 58,
    size: "7.2 MB",
    readTime: "40 menit",
    downloads: 12890,
    rating: 4.8,
    downloadUrl: "#",
    isLatest: false,
    coverImage: "/api/placeholder/300/400",
  },
  {
    id: 3,
    title: "Sanapati Edisi 22 - Cloud Security",
    description:
      "Strategi mengamankan infrastruktur cloud di era transformasi digital",
    edition: "22",
    date: "2023-08-15",
    theme: "Cloud Computing",
    featured: "Best Practices Cloud Security untuk Government",
    pages: 62,
    size: "8.1 MB",
    readTime: "42 menit",
    downloads: 18750,
    rating: 4.7,
    downloadUrl: "#",
    isLatest: false,
    coverImage: "/api/placeholder/300/400",
  },
  {
    id: 4,
    title: "Sanapati Edisi 21 - IoT Security",
    description:
      "Tantangan keamanan Internet of Things dan solusi untuk smart city",
    edition: "21",
    date: "2023-05-10",
    theme: "Internet of Things",
    featured: "Smart City Security Framework",
    pages: 56,
    size: "6.8 MB",
    readTime: "38 menit",
    downloads: 14320,
    rating: 4.6,
    downloadUrl: "#",
    isLatest: false,
    coverImage: "/api/placeholder/300/400",
  },
];

const themes = [
  "Semua Tema",
  "Artificial Intelligence",
  "Network Security",
  "Cloud Computing",
  "Internet of Things",
  "Data Protection",
];
const years = ["Semua Tahun", "2024", "2023", "2022", "2021"];

const MajalahSanapati = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("Semua Tema");
  const [selectedYear, setSelectedYear] = useState("Semua Tahun");

  const filteredEditions = magazineEditions.filter((edition) => {
    const matchesSearch =
      edition.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      edition.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      edition.theme.toLowerCase().includes(searchTerm.toLowerCase()) ||
      edition.featured.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTheme =
      selectedTheme === "Semua Tema" || edition.theme === selectedTheme;
    const matchesYear =
      selectedYear === "Semua Tahun" ||
      new Date(edition.date).getFullYear().toString() === selectedYear;

    return matchesSearch && matchesTheme && matchesYear;
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
          <span className="text-foreground">Majalah Sanapati</span>
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 rounded-full mb-6">
            <Newspaper className="w-8 h-8 text-cyan-600" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Majalah Sanapati
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Majalah resmi BSSN yang menyajikan artikel mendalam tentang keamanan
            siber, teknologi terkini, dan wawasan dari para ahli di bidang
            keamanan informasi dan sandi negara.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-100 rounded-full mb-4">
                <Newspaper className="w-6 h-6 text-cyan-600" />
              </div>
              <div className="text-2xl font-bold text-foreground">24</div>
              <p className="text-sm text-muted-foreground">Edisi Tersedia</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-foreground">61K+</div>
              <p className="text-sm text-muted-foreground">Total Pembaca</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-foreground">240+</div>
              <p className="text-sm text-muted-foreground">Halaman Per Edisi</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-4">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="text-2xl font-bold text-foreground">4.8/5</div>
              <p className="text-sm text-muted-foreground">Rating Pembaca</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              Cari Edisi Majalah
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Cari berdasarkan judul, tema, atau konten..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Tema</label>
                <Select value={selectedTheme} onValueChange={setSelectedTheme}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {themes.map((theme) => (
                      <SelectItem key={theme} value={theme}>
                        {theme}
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
            Menampilkan {filteredEditions.length} dari {magazineEditions.length}{" "}
            edisi
          </span>
        </div>

        {/* Magazine Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredEditions.map((edition) => (
            <Card
              key={edition.id}
              className="hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row">
                {/* Cover Image */}
                <div className="md:w-1/3 p-6 flex items-center justify-center">
                  <div className="w-32 h-40 bg-gradient-to-br from-cyan-100 to-blue-200 rounded-lg flex items-center justify-center shadow-md">
                    <div className="text-center">
                      <Newspaper className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                      <div className="text-sm font-semibold text-cyan-800">
                        Edisi {edition.edition}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-2/3 p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge className="bg-cyan-100 text-cyan-700">
                      Edisi {edition.edition}
                    </Badge>
                    <Badge variant="outline">{edition.theme}</Badge>
                    {edition.isLatest && (
                      <Badge className="bg-green-100 text-green-700">
                        Terbaru
                      </Badge>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                    {edition.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {edition.description}
                  </p>

                  <div className="bg-gray-50 p-3 rounded-lg mb-4">
                    <div className="text-sm font-medium text-foreground mb-1">
                      Artikel Unggulan:
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {edition.featured}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(edition.date)}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <BookOpen className="w-3 h-3" />
                      <span>{edition.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Eye className="w-3 h-3" />
                      <span>{formatNumber(edition.downloads)}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span>{edition.rating}/5</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button
                      variant="default"
                      size="sm"
                      className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700"
                      onClick={() => window.open(edition.downloadUrl, "_blank")}
                    >
                      <Download className="w-4 h-4" />
                      Unduh ({edition.size})
                    </Button>
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredEditions.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <Newspaper className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">
                Tidak ada edisi ditemukan
              </h3>
              <p className="text-muted-foreground">
                Coba ubah filter pencarian atau kata kunci Anda
              </p>
            </CardContent>
          </Card>
        )}

        {/* Subscription CTA */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-cyan-50 to-blue-50">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Berlangganan Majalah Sanapati
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Dapatkan edisi terbaru Majalah Sanapati langsung di email Anda.
                Tetap update dengan perkembangan terbaru di dunia keamanan
                siber.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/kontak">
                  <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                    Subscribe Gratis
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  Lihat Arsip Lengkap
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MajalahSanapati;
