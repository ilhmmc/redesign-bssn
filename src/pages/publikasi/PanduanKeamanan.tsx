import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  Calendar,
  Shield,
  Search,
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

const securityGuides = [
  {
    id: 1,
    title: "Panduan Keamanan Endpoint untuk Institusi Pemerintah",
    description:
      "Panduan komprehensif untuk mengamankan endpoint dalam lingkungan pemerintahan",
    category: "Endpoint Security",
    difficulty: "Intermediate",
    year: "2024",
    date: "2024-01-15",
    size: "1.8 MB",
    downloads: 1250,
    rating: 4.8,
    downloadUrl: "#",
    isPopular: true,
  },
  {
    id: 2,
    title: "Implementasi Zero Trust Architecture",
    description: "Panduan implementasi arsitektur zero trust untuk organisasi",
    category: "Network Security",
    difficulty: "Advanced",
    year: "2023",
    date: "2023-11-20",
    size: "2.1 MB",
    downloads: 890,
    rating: 4.9,
    downloadUrl: "#",
    isPopular: true,
  },
  {
    id: 3,
    title: "Keamanan Cloud Computing untuk UMKM",
    description:
      "Panduan praktis keamanan cloud untuk usaha mikro, kecil, dan menengah",
    category: "Cloud Security",
    difficulty: "Beginner",
    year: "2024",
    date: "2024-02-10",
    size: "1.2 MB",
    downloads: 2100,
    rating: 4.7,
    downloadUrl: "#",
    isPopular: true,
  },
  {
    id: 4,
    title: "Incident Response Playbook",
    description: "Buku panduan tanggap insiden siber untuk tim keamanan IT",
    category: "Incident Response",
    difficulty: "Intermediate",
    year: "2023",
    date: "2023-09-15",
    size: "3.2 MB",
    downloads: 1560,
    rating: 4.6,
    downloadUrl: "#",
    isPopular: false,
  },
];

const categories = [
  "Semua Kategori",
  "Endpoint Security",
  "Network Security",
  "Cloud Security",
  "Incident Response",
  "Web Security",
];
const difficulties = ["Semua Level", "Beginner", "Intermediate", "Advanced"];
const years = ["Semua Tahun", "2024", "2023", "2022"];

const PanduanKeamanan = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua Kategori");
  const [selectedDifficulty, setSelectedDifficulty] = useState("Semua Level");
  const [selectedYear, setSelectedYear] = useState("Semua Tahun");

  const filteredGuides = securityGuides.filter((guide) => {
    const matchesSearch =
      guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Semua Kategori" ||
      guide.category === selectedCategory;
    const matchesDifficulty =
      selectedDifficulty === "Semua Level" ||
      guide.difficulty === selectedDifficulty;
    const matchesYear =
      selectedYear === "Semua Tahun" || guide.year === selectedYear;

    return matchesSearch && matchesCategory && matchesDifficulty && matchesYear;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-700";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-700";
      case "Advanced":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
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
          <span className="text-foreground">Panduan Keamanan</span>
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
            <Shield className="w-8 h-8 text-red-600" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Panduan Keamanan
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kumpulan panduan teknis dan praktis untuk mengimplementasikan
            keamanan siber yang efektif di berbagai lingkungan organisasi.
          </p>
        </div>

        {/* Search and Filter */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              Pencarian Panduan
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Cari panduan keamanan..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                <label className="text-sm font-medium">Level Kesulitan</label>
                <Select
                  value={selectedDifficulty}
                  onValueChange={setSelectedDifficulty}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {difficulties.map((difficulty) => (
                      <SelectItem key={difficulty} value={difficulty}>
                        {difficulty}
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
            Menampilkan {filteredGuides.length} dari {securityGuides.length}{" "}
            panduan
          </span>
        </div>

        {/* Guides List */}
        <div className="space-y-6">
          {filteredGuides.map((guide) => (
            <Card key={guide.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Badge variant="outline">{guide.category}</Badge>
                      <Badge className={getDifficultyColor(guide.difficulty)}>
                        {guide.difficulty}
                      </Badge>
                      <Badge variant="secondary">{guide.year}</Badge>
                      {guide.isPopular && (
                        <Badge className="bg-orange-100 text-orange-700">
                          ⭐ Popular
                        </Badge>
                      )}
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {guide.title}
                    </h3>

                    <p className="text-muted-foreground mb-4">
                      {guide.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(guide.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        <span>{guide.downloads.toLocaleString()} unduhan</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{guide.rating}/5</span>
                      </div>
                      <span>{guide.size}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 lg:ml-6">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                      onClick={() => window.open(guide.downloadUrl, "_blank")}
                    >
                      <Download className="w-4 h-4" />
                      Unduh
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredGuides.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <Shield className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">
                Tidak ada panduan ditemukan
              </h3>
              <p className="text-muted-foreground">
                Coba ubah filter pencarian atau kata kunci Anda
              </p>
            </CardContent>
          </Card>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default PanduanKeamanan;
