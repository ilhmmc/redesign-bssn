import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  Calendar,
  Users,
  Search,
  Shield,
  Eye,
  AlertTriangle,
  CheckCircle,
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

const socialMediaGuides = [
  {
    id: 1,
    title: "Panduan Keamanan Facebook untuk Semua Umur",
    description:
      "Pengaturan privasi, mengenali konten berbahaya, dan tips aman berinteraksi di Facebook",
    platform: "Facebook",
    targetAudience: "Semua Umur",
    date: "2024-02-10",
    level: "Beginner",
    downloadCount: 8920,
    size: "2.1 MB",
    downloadUrl: "#",
    isNew: true,
    topics: ["privasi", "konten", "interaksi"],
  },
  {
    id: 2,
    title: "Instagram Safety: Lindungi Diri dari Predator Online",
    description:
      "Cara mengidentifikasi dan menghindari predator online, setting keamanan akun Instagram",
    platform: "Instagram",
    targetAudience: "Remaja",
    date: "2024-01-25",
    level: "Intermediate",
    downloadCount: 12340,
    size: "1.8 MB",
    downloadUrl: "#",
    isNew: true,
    topics: ["predator", "keamanan", "remaja"],
  },
  {
    id: 3,
    title: "TikTok untuk Orang Tua: Mengawasi Anak di Era Digital",
    description:
      "Panduan orang tua untuk memahami TikTok dan mengawasi aktivitas anak dengan bijak",
    platform: "TikTok",
    targetAudience: "Orang Tua",
    date: "2023-12-15",
    level: "Beginner",
    downloadCount: 15670,
    size: "2.5 MB",
    downloadUrl: "#",
    isNew: false,
    topics: ["parenting", "pengawasan", "digital"],
  },
  {
    id: 4,
    title: "WhatsApp Business: Keamanan untuk UMKM",
    description:
      "Mengamankan akun WhatsApp Business, menghindari penipuan, dan melindungi data pelanggan",
    platform: "WhatsApp",
    targetAudience: "UMKM",
    date: "2023-11-20",
    level: "Intermediate",
    downloadCount: 9850,
    size: "1.9 MB",
    downloadUrl: "#",
    isNew: false,
    topics: ["bisnis", "penipuan", "data"],
  },
  {
    id: 5,
    title: "Twitter/X: Menghindari Hoax dan Disinformasi",
    description:
      "Cara memverifikasi informasi, mengenali akun bot, dan berkontribusi positif di Twitter/X",
    platform: "Twitter/X",
    targetAudience: "Dewasa",
    date: "2023-10-30",
    level: "Advanced",
    downloadCount: 7420,
    size: "1.6 MB",
    downloadUrl: "#",
    isNew: false,
    topics: ["hoax", "verifikasi", "informasi"],
  },
];

const platforms = [
  "Semua Platform",
  "Facebook",
  "Instagram",
  "TikTok",
  "WhatsApp",
  "Twitter/X",
  "YouTube",
];
const audiences = [
  "Semua Audiens",
  "Anak-anak",
  "Remaja",
  "Dewasa",
  "Orang Tua",
  "UMKM",
];
const levels = ["Semua Level", "Beginner", "Intermediate", "Advanced"];

const AmanBermediaSosial = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("Semua Platform");
  const [selectedAudience, setSelectedAudience] = useState("Semua Audiens");
  const [selectedLevel, setSelectedLevel] = useState("Semua Level");

  const filteredGuides = socialMediaGuides.filter((guide) => {
    const matchesSearch =
      guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.topics.some((topic) =>
        topic.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    const matchesPlatform =
      selectedPlatform === "Semua Platform" ||
      guide.platform === selectedPlatform;
    const matchesAudience =
      selectedAudience === "Semua Audiens" ||
      guide.targetAudience === selectedAudience;
    const matchesLevel =
      selectedLevel === "Semua Level" || guide.level === selectedLevel;

    return matchesSearch && matchesPlatform && matchesAudience && matchesLevel;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const getPlatformColor = (platform: string) => {
    const colors: { [key: string]: string } = {
      Facebook: "bg-blue-100 text-blue-700",
      Instagram: "bg-pink-100 text-pink-700",
      TikTok: "bg-black text-white",
      WhatsApp: "bg-green-100 text-green-700",
      "Twitter/X": "bg-gray-100 text-gray-700",
      YouTube: "bg-red-100 text-red-700",
    };
    return colors[platform] || "bg-gray-100 text-gray-700";
  };

  const getAudienceColor = (audience: string) => {
    const colors: { [key: string]: string } = {
      "Anak-anak": "bg-yellow-100 text-yellow-700",
      Remaja: "bg-purple-100 text-purple-700",
      Dewasa: "bg-blue-100 text-blue-700",
      "Orang Tua": "bg-green-100 text-green-700",
      UMKM: "bg-orange-100 text-orange-700",
    };
    return colors[audience] || "bg-gray-100 text-gray-700";
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
          <span className="text-foreground">Aman Bermedia Sosial</span>
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-6">
            <Users className="w-8 h-8 text-pink-600" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Aman Bermedia Sosial
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Panduan komprehensif untuk menggunakan media sosial dengan aman dan
            bertanggung jawab. Pelajari cara melindungi diri dan keluarga dari
            berbagai ancaman di dunia maya.
          </p>
        </div>

        {/* Alert Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <Card className="border-red-200 bg-red-50">
            <CardContent className="pt-6 text-center">
              <AlertTriangle className="w-8 h-8 text-red-600 mx-auto mb-3" />
              <h3 className="font-semibold text-red-800 mb-2">Waspadai</h3>
              <p className="text-sm text-red-700">
                Penipuan online, phishing, dan konten tidak pantas
              </p>
            </CardContent>
          </Card>

          <Card className="border-yellow-200 bg-yellow-50">
            <CardContent className="pt-6 text-center">
              <Eye className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
              <h3 className="font-semibold text-yellow-800 mb-2">Periksa</h3>
              <p className="text-sm text-yellow-700">
                Setting privasi dan keamanan akun secara berkala
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardContent className="pt-6 text-center">
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-green-800 mb-2">Lindungi</h3>
              <p className="text-sm text-green-700">
                Data pribadi dan informasi sensitif dari akses yang tidak sah
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              Cari Panduan Media Sosial
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Cari panduan berdasarkan platform, topik, atau audiens..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Platform</label>
                <Select
                  value={selectedPlatform}
                  onValueChange={setSelectedPlatform}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {platforms.map((platform) => (
                      <SelectItem key={platform} value={platform}>
                        {platform}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Target Audiens</label>
                <Select
                  value={selectedAudience}
                  onValueChange={setSelectedAudience}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {audiences.map((audience) => (
                      <SelectItem key={audience} value={audience}>
                        {audience}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Level Kesulitan</label>
                <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {levels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
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
            Menampilkan {filteredGuides.length} dari {socialMediaGuides.length}{" "}
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
                      <Badge className={getPlatformColor(guide.platform)}>
                        {guide.platform}
                      </Badge>
                      <Badge className={getAudienceColor(guide.targetAudience)}>
                        {guide.targetAudience}
                      </Badge>
                      <Badge variant="outline">{guide.level}</Badge>
                      {guide.isNew && (
                        <Badge className="bg-green-100 text-green-700">
                          Baru
                        </Badge>
                      )}
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {guide.title}
                    </h3>

                    <p className="text-muted-foreground mb-4">
                      {guide.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {guide.topics.map((topic) => (
                        <Badge
                          key={topic}
                          variant="secondary"
                          className="text-xs bg-pink-50 text-pink-700"
                        >
                          #{topic}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(guide.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        <span>
                          {guide.downloadCount.toLocaleString()} unduhan
                        </span>
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
                      Unduh Panduan
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
              <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">
                Tidak ada panduan ditemukan
              </h3>
              <p className="text-muted-foreground">
                Coba ubah filter pencarian atau kata kunci Anda
              </p>
            </CardContent>
          </Card>
        )}

        {/* Tips Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-pink-50 to-purple-50">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                Tips Cepat Aman Bermedia Sosial
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <Shield className="w-8 h-8 text-pink-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Setting Privasi</h3>
                  <p className="text-sm text-muted-foreground">
                    Periksa dan atur pengaturan privasi secara berkala
                  </p>
                </div>
                <div className="text-center">
                  <AlertTriangle className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Waspadai Penipuan</h3>
                  <p className="text-sm text-muted-foreground">
                    Jangan mudah percaya pada tawaran yang terlalu bagus
                  </p>
                </div>
                <div className="text-center">
                  <Eye className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Verifikasi Informasi</h3>
                  <p className="text-sm text-muted-foreground">
                    Selalu cek kebenaran informasi sebelum membagikan
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AmanBermediaSosial;
