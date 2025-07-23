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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { useState, useMemo } from "react";

const Berita = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedNews, setSelectedNews] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredNews = {
    id: 1,
    title:
      "BSSN Resmikan 43 TTIS Bentuk Sinergi Penguatan Keamanan Siber Nasional",
    excerpt:
      "Badan Siber dan Sandi Negara (BSSN) meresmikan 43 Tim Tanggap Insiden Siber (TTIS/CSIRT) yang terdiri dari 3 TTIS Sektoral, 10 TTIS Pemerintah Pusat, 24 TTIS Pemerintah Daerah, dan 6 Pembangunan Manusia sebagai bentuk sinergi penguatan keamanan siber nasional.",
    content:
      "Depok, BSSN.go.id – Badan Siber dan Sandi Negara (BSSN) meresmikan 43 Tim Tanggap Insiden Siber (TTIS/CSIRT) yang terdiri dari 3 TTIS Sektoral, 10 TTIS Pemerintah Pusat, 24 TTIS Pemerintah Daerah, dan 6 Pembangunan Manusia sebagai bentuk sinergi penguatan keamanan siber nasional di Kantor BSSN Sawangan, Depok, Jawa Barat, Selasa (22/07/2025). Kepala BSSN Letjen TNI (Purn) Drs. Nugroho Sulistyo Budi, M.M., M.Han secara simbolis meresmikan pembentukan TTIS tersebut.",
    category: "Info Terkini",
    date: "2025-07-22",
    author: "Tim Humas BSSN",
    image: "/berita/ttis-peresmian.jpg",
    featured: true,
    views: 3540,
  };

  const newsArticles = [
    {
      id: 2,
      title: "BSSN Berkomitmen Perkuat Implementasi Pendataan Keluarga 2025",
      excerpt:
        "Badan Siber dan Sandi Negara (BSSN) Republik Indonesia menegaskan komitmennya memberikan dukungan teknis dan asistensi pengamanan dalam ruang lingkup tugas dan kewenangannya, guna memperkuat kesiapan serta ketahanan infrastruktur teknologi informasi yang digunakan dalam pelaksanaan Pendataan Keluarga Tahun 2025 (PK-25).",
      category: "Info Terkini",
      date: "2025-07-22",
      author: "Tim Humas BSSN",
      image: "/berita/pendataan-keluarga.jpg",
      views: 2890,
    },
    {
      id: 3,
      title:
        "BSSN Gelar Workshop Identifikasi IIV dan Penyelenggara IIV Sektor Keuangan",
      excerpt:
        "Badan Siber dan Sandi Negara (BSSN) melalui Direktorat Keamanan Siber dan Sandi Keuangan, Perdagangan dan Pariwisata menggelar Workshop Identifikasi Infrastruktur Informasi Vital (IIV) dan Penyelenggara IIV di Jakarta selama dua hari pada tanggal 17-18 Juli 2025.",
      category: "Info Terkini",
      date: "2025-07-19",
      author: "Tim Humas BSSN",
      image: "/berita/workshop-iiv.jpg",
      views: 2420,
    },
    {
      id: 4,
      title: "BSSN Hadir pada CYDES 2025 di Putrajaya Malaysia",
      excerpt:
        "Badan Siber dan Sandi Negara Republik Indonesia (BSSN RI) mengikuti kegiatan Cyber Defence and Security Exhibition and Conference (CYDES) 2025 yang dilaksanakan di Putrajaya Internasional Convention Center (PICC), Putrajaya, Malaysia pada tanggal 1-3 Juli 2025.",
      category: "Info Terkini",
      date: "2025-07-18",
      author: "Tim Humas BSSN",
      image: "/berita/cydes-2025.jpg",
      views: 1850,
    },
    {
      id: 5,
      title:
        "Forum Kolaborasi Pelindungan IIV Sektor ESDA, BSSN: Sinergi Keamanan Siber Harus Berjalan Optimal",
      excerpt:
        "Badan Siber dan Sandi Negara (BSSN) melalui Direktorat Keamanan Siber dan Sandi Energi dan Sumber Daya Alam, Deputi Bidang Keamanan Siber dan Sandi Perekonomian BSSN menyelenggarakan Forum Kolaborasi Pelimdungan Inmfrastruktur Informasi Vital Sektor ESDA Tahun 2025 di Jakarta selama 3 hari pada tanggal 15-17 Juli 2025.",
      category: "Info Terkini",
      date: "2025-07-18",
      author: "Tim Humas BSSN",
      image: "/berita/forum-esda.jpg",
      views: 1920,
    },
    {
      id: 6,
      title: "BSSN Terima Audiensi Kementerian Imigrasi dan Pemasyarakatan",
      excerpt:
        "Pusat Data dan Teknologi Informasi Komunikasi Badan Siber dan Sandi Negara (Pusdatik BSSN) menerima kunjungan audiensi Direktorat Teknologi Informasi Keimigrasian Kementerian Imigrasi dan Pemasyarakatan (Kemenimipas), guna membahas keamanan transformasi digital.",
      category: "Info Terkini",
      date: "2025-07-16",
      author: "Tim Humas BSSN",
      image: "/berita/audiensi-imigrasi.jpg",
      views: 1650,
    },
    {
      id: 7,
      title:
        "Pusbang SDM BSSN Canangkan Pembangunan Zona Integritas Menuju Wilayah Bebas Korupsi",
      excerpt:
        "Pusat Pengembangan Sumber Daya Manusia Badan Siber dan Sandi Negara (Pusbang SDM BSSN) mencanangkan Pembangunan Zona Integritas Menuju Wilayah Bebas dari Korupsi (WBK), dari Aula dr. Roebiono Kertopati Kantor BSSN Sawangan, Depok, Jawa Barat pada Selasa (15/07/2025).",
      category: "Info Terkini",
      date: "2025-07-16",
      author: "Tim Humas BSSN",
      image: "/berita/zona-integritas.jpg",
      views: 1480,
    },
    {
      id: 8,
      title:
        "BSSN Literasi Keamanan Siber dalam Forum Komunikasi Sosial Bersama Masyarakat",
      excerpt:
        "Badan Siber dan Sandi Negara (BSSN) menegaskan pentingnya literasi keamanan siber dalam kehidupan masyarakat di era digital saat ini. Penegasan tersebut disampaikan dalam kegiatan Komunikasi Sosial Bersama Komponen Masyarakat di Wilayah Jajaran Satkowil Korem 052/Wijayakrama yang digelar di kampus Universitas Pelita Harapan (UPH), Karawaci, Tangerang.",
      category: "Info Terkini",
      date: "2025-07-16",
      author: "Tim Humas BSSN",
      image: "/berita/literasi-siber.jpg",
      views: 2150,
    },
    {
      id: 9,
      title:
        "BSSN Terima Kunjungan HIMATIF ULBI, Bekali Mahasiswa Keamanan Siber Sosial",
      excerpt:
        "Badan Siber dan Sandi Negara (BSSN) terus menunjukkan komitmennya dalam memperkuat literasi keamanan siber di kalangan generasi muda. Kali ini BSSN menerima kunjungan edukatif dari Himpunan Mahasiswa Teknik Informatika (HIMATIF) Universitas Logistik dan Bisnis Internasional (ULBI) Bandung di Ruang Teater Lantai 2 Aula dr. Roebiono Kertopati Kantor BSSN Sawangan, Depok, jawa Barat.",
      category: "Info Terkini",
      date: "2025-07-15",
      author: "Tim Humas BSSN",
      image: "/berita/kunjungan-himatif.jpg",
      views: 1320,
    },
    {
      id: 10,
      title:
        "Cyber Security Awareness Webinar BSSN 2025 Serie #1: Kenalan Sama AI, Teman atau Ancaman?",
      excerpt:
        "Pusat Data dan Teknologi Informasi Komunikasi Badan Siber dan Sandi Negara (Pusdatik BSSN) menyelenggarakan webinar bertajuk Kenalan Sama AI: Teman atau Ancaman? sebagai bagian dari rangkaian kegiatan Cyber Security Awareness atau Bulan Kesadaran Keamanan Informasi 2025 untuk seluruh pegawai.",
      category: "Info Terkini",
      date: "2025-07-15",
      author: "Tim Humas BSSN",
      image: "/berita/webinar-ai.jpg",
      views: 2840,
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Info Terkini": "bg-cyan-100 text-cyan-700",
      Program: "bg-blue-100 text-blue-700",
      Kerjasama: "bg-green-100 text-green-700",
      Keamanan: "bg-red-100 text-red-700",
      Edukasi: "bg-purple-100 text-purple-700",
      Workshop: "bg-orange-100 text-orange-700",
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

  // Filter news articles based on search query
  const filteredNewsArticles = useMemo(() => {
    if (!searchQuery.trim()) return newsArticles;

    const query = searchQuery.toLowerCase().trim();
    return newsArticles.filter(article =>
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Check if featured news matches search query
  const showFeaturedNews = useMemo(() => {
    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase().trim();
    return featuredNews.title.toLowerCase().includes(query) ||
           featuredNews.excerpt.toLowerCase().includes(query) ||
           featuredNews.content.toLowerCase().includes(query);
  }, [searchQuery]);

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
                  <Input
                    placeholder="Cari berita berdasarkan judul atau konten..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured News */}
        {showFeaturedNews && (
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
        )}

        {/* News Grid */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold">Berita Terbaru</h2>
                {searchQuery && (
                  <p className="text-muted-foreground mt-2">
                    {filteredNewsArticles.length} berita ditemukan untuk "{searchQuery}"
                  </p>
                )}
              </div>
              <div className="flex items-center space-x-4">
              </div>
            </div>

            {filteredNewsArticles.length > 0 ? (
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                {filteredNewsArticles.map((article) => (
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
                          Baca Selengkapnya
                          <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <Search className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Tidak ada berita ditemukan</h3>
                  <p className="text-muted-foreground mb-6">
                    Tidak ada berita yang cocok dengan pencarian "{searchQuery}". Coba gunakan kata kunci yang berbeda.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSearchQuery("")}
                  >
                    Hapus Pencarian
                  </Button>
                </div>
              </div>
            )}

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Muat Lebih Banyak Berita
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Berita;
