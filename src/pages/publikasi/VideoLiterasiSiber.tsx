import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  Calendar,
  Video,
  Search,
  Play,
  Eye,
  Clock,
  Star,
  ThumbsUp,
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

const videoContent = [
  {
    id: 1,
    title: "Dasar-Dasar Keamanan Siber untuk Pemula",
    description:
      "Video edukasi komprehensif yang menjelaskan konsep dasar keamanan siber dengan bahasa yang mudah dipahami",
    category: "Edukasi Dasar",
    targetAudience: "Pemula",
    duration: "15:24",
    date: "2024-02-20",
    views: 45670,
    likes: 3240,
    rating: 4.8,
    thumbnailUrl: "/api/placeholder/320/180",
    videoUrl: "#",
    downloadUrl: "#",
    isPopular: true,
    tags: ["dasar", "pemula", "edukasi"],
  },
  {
    id: 2,
    title: "Cara Membuat Password yang Kuat dan Aman",
    description:
      "Tutorial praktis membuat kata sandi yang kuat dengan teknik yang mudah diingat namun sulit ditebak",
    category: "Tips Praktis",
    targetAudience: "Umum",
    duration: "8:45",
    date: "2024-02-15",
    views: 67890,
    likes: 4890,
    rating: 4.9,
    thumbnailUrl: "/api/placeholder/320/180",
    videoUrl: "#",
    downloadUrl: "#",
    isPopular: true,
    tags: ["password", "tips", "praktis"],
  },
  {
    id: 3,
    title: "Mengenali dan Menghindari Serangan Phishing",
    description:
      "Panduan visual untuk mengidentifikasi email, SMS, dan website phishing yang berbahaya",
    category: "Awareness",
    targetAudience: "Umum",
    duration: "12:30",
    date: "2024-02-10",
    views: 34560,
    likes: 2780,
    rating: 4.7,
    thumbnailUrl: "/api/placeholder/320/180",
    videoUrl: "#",
    downloadUrl: "#",
    isPopular: false,
    tags: ["phishing", "awareness", "deteksi"],
  },
  {
    id: 4,
    title: "Keamanan Media Sosial untuk Remaja",
    description:
      "Video khusus untuk remaja tentang cara menggunakan media sosial dengan aman dan bijak",
    category: "Media Sosial",
    targetAudience: "Remaja",
    duration: "18:12",
    date: "2024-02-05",
    views: 28490,
    likes: 2340,
    rating: 4.6,
    thumbnailUrl: "/api/placeholder/320/180",
    videoUrl: "#",
    downloadUrl: "#",
    isPopular: true,
    tags: ["medsos", "remaja", "safety"],
  },
  {
    id: 5,
    title: "Backup Data: Mengapa Penting dan Bagaimana Caranya",
    description:
      "Penjelasan mengapa backup data penting dan cara mudah melakukan backup untuk pengguna rumahan",
    category: "Data Protection",
    targetAudience: "Umum",
    duration: "10:55",
    date: "2024-01-30",
    views: 19870,
    likes: 1650,
    rating: 4.5,
    thumbnailUrl: "/api/placeholder/320/180",
    videoUrl: "#",
    downloadUrl: "#",
    isPopular: false,
    tags: ["backup", "data", "protection"],
  },
  {
    id: 6,
    title: "WiFi Publik: Risiko dan Cara Aman Menggunakannya",
    description:
      "Tips menggunakan WiFi publik dengan aman tanpa membahayakan data pribadi",
    category: "Network Safety",
    targetAudience: "Umum",
    duration: "9:18",
    date: "2024-01-25",
    views: 42130,
    likes: 3560,
    rating: 4.7,
    thumbnailUrl: "/api/placeholder/320/180",
    videoUrl: "#",
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
  "Media Sosial",
  "Data Protection",
  "Network Safety",
];
const audiences = ["Semua Audiens", "Pemula", "Umum", "Remaja", "Dewasa"];
const durations = [
  "Semua Durasi",
  "Pendek (< 10 menit)",
  "Sedang (10-20 menit)",
  "Panjang (> 20 menit)",
];

const VideoLiterasiSiber = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua Kategori");
  const [selectedAudience, setSelectedAudience] = useState("Semua Audiens");
  const [selectedDuration, setSelectedDuration] = useState("Semua Durasi");

  const filteredVideos = videoContent.filter((video) => {
    const matchesSearch =
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    const matchesCategory =
      selectedCategory === "Semua Kategori" ||
      video.category === selectedCategory;
    const matchesAudience =
      selectedAudience === "Semua Audiens" ||
      video.targetAudience === selectedAudience;

    const durationMinutes = parseInt(video.duration.split(":")[0]);
    const matchesDuration =
      selectedDuration === "Semua Durasi" ||
      (selectedDuration === "Pendek (< 10 menit)" && durationMinutes < 10) ||
      (selectedDuration === "Sedang (10-20 menit)" &&
        durationMinutes >= 10 &&
        durationMinutes <= 20) ||
      (selectedDuration === "Panjang (> 20 menit)" && durationMinutes > 20);

    return (
      matchesSearch && matchesCategory && matchesAudience && matchesDuration
    );
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

  const getAudienceColor = (audience: string) => {
    const colors: { [key: string]: string } = {
      Pemula: "bg-green-100 text-green-700",
      Umum: "bg-blue-100 text-blue-700",
      Remaja: "bg-purple-100 text-purple-700",
      Dewasa: "bg-orange-100 text-orange-700",
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
          <span className="text-foreground">Video Literasi Keamanan Siber</span>
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-lime-100 rounded-full mb-6">
            <Video className="w-8 h-8 text-lime-600" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Video Literasi Keamanan Siber
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Koleksi video edukasi keamanan siber yang dirancang untuk berbagai
            kalangan, dari pemula hingga ahli, dengan konten yang mudah dipahami
            dan aplikatif.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-lime-100 rounded-full mb-4">
                <Video className="w-6 h-6 text-lime-600" />
              </div>
              <div className="text-2xl font-bold text-foreground">92</div>
              <p className="text-sm text-muted-foreground">Video Tersedia</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-foreground">238K+</div>
              <p className="text-sm text-muted-foreground">Total Views</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
                <ThumbsUp className="w-6 h-6 text-red-600" />
              </div>
              <div className="text-2xl font-bold text-foreground">18K+</div>
              <p className="text-sm text-muted-foreground">Total Likes</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-4">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="text-2xl font-bold text-foreground">4.7/5</div>
              <p className="text-sm text-muted-foreground">Rating Rata-rata</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              Cari Video Edukasi
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Cari video berdasarkan judul, kategori, atau topik..."
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
                <label className="text-sm font-medium">Durasi</label>
                <Select
                  value={selectedDuration}
                  onValueChange={setSelectedDuration}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {durations.map((duration) => (
                      <SelectItem key={duration} value={duration}>
                        {duration}
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
            Menampilkan {filteredVideos.length} dari {videoContent.length} video
          </span>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <Card
              key={video.id}
              className="hover:shadow-lg transition-all duration-300"
            >
              <div className="relative">
                {/* Video Thumbnail */}
                <div className="relative bg-gradient-to-br from-lime-100 to-green-200 aspect-video rounded-t-lg flex items-center justify-center">
                  <Play className="w-16 h-16 text-lime-600 opacity-80" />
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                  {video.isPopular && (
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-red-500 text-white">
                        🔥 Popular
                      </Badge>
                    </div>
                  )}
                </div>
              </div>

              <CardContent className="p-4">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge variant="outline">{video.category}</Badge>
                  <Badge className={getAudienceColor(video.targetAudience)}>
                    {video.targetAudience}
                  </Badge>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                  {video.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                  {video.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {video.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs bg-lime-50 text-lime-700"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{formatNumber(video.views)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="w-3 h-3" />
                      <span>{formatNumber(video.likes)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span>{video.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{formatDate(video.date)}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1 bg-lime-600 hover:bg-lime-700"
                    onClick={() => window.open(video.videoUrl, "_blank")}
                  >
                    <Play className="w-4 h-4 mr-1" />
                    Tonton
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(video.downloadUrl, "_blank")}
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <Video className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">
                Tidak ada video ditemukan
              </h3>
              <p className="text-muted-foreground">
                Coba ubah filter pencarian atau kata kunci Anda
              </p>
            </CardContent>
          </Card>
        )}

        {/* Call to Action */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-lime-50 to-green-50">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Berlangganan Channel YouTube BSSN
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Dapatkan notifikasi video edukasi keamanan siber terbaru dan
                konten eksklusif lainnya langsung dari channel resmi BSSN.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Subscribe YouTube
                </Button>
                <Link to="/kontak">
                  <Button variant="outline" size="lg">
                    Request Video Topic
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

export default VideoLiterasiSiber;
