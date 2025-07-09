import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  AlertTriangle,
  Clock,
  ArrowRight,
  Shield,
  TrendingUp,
  Users,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";

const securityAlerts = [
  {
    id: 1,
    title: "Peringatan Malware Baru: TrojanX",
    description:
      "Ditemukan varian malware baru yang menargetkan sistem perbankan. Segera update antivirus Anda.",
    severity: "high",
    time: "2 jam yang lalu",
    affected: "Sistem Perbankan",
  },
  {
    id: 2,
    title: "Vulnerability Microsoft Office",
    description:
      "Microsoft merilis patch keamanan untuk Office. Segera lakukan update untuk mencegah eksploitasi.",
    severity: "medium",
    time: "5 jam yang lalu",
    affected: "Microsoft Office",
  },
  {
    id: 3,
    title: "Phishing Campaign Targeting Gov",
    description:
      "Kampanye phishing massal menargetkan email pemerintahan. Waspada email mencurigakan.",
    severity: "high",
    time: "1 hari yang lalu",
    affected: "Instansi Pemerintah",
  },
];

const latestNews = [
  {
    id: 1,
    title: "BSSN Luncurkan Program Sertifikasi Keamanan Siber Baru",
    excerpt:
      "Program sertifikasi ini ditujukan untuk meningkatkan kompetensi profesional keamanan siber di Indonesia.",
    date: "15 Januari 2024",
    category: "Program",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title:
      "Kerjasama BSSN dengan Perguruan Tinggi untuk Penelitian Cyber Security",
    excerpt:
      "Kolaborasi strategis untuk mengembangkan inovasi teknologi keamanan siber dan SDM berkualitas.",
    date: "12 Januari 2024",
    category: "Kerjasama",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Workshop Keamanan Siber untuk UMKM Sukses Digelar",
    excerpt:
      "Lebih dari 500 peserta UMKM mengikuti workshop edukasi keamanan siber tingkat dasar.",
    date: "10 Januari 2024",
    category: "Edukasi",
    image: "/placeholder.svg",
  },
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "high":
      return "bg-destructive text-destructive-foreground";
    case "medium":
      return "bg-orange-500 text-white";
    case "low":
      return "bg-yellow-500 text-white";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const NewsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Security Alerts */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="flex items-center space-x-2 mb-6">
                <AlertTriangle className="h-6 w-6 text-destructive" />
                <h2 className="text-2xl font-bold">Peringatan Keamanan</h2>
              </div>

              <div className="space-y-4">
                {securityAlerts.map((alert) => (
                  <Card
                    key={alert.id}
                    className="border-l-4 border-l-destructive"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <Badge className={getSeverityColor(alert.severity)}>
                          {alert.severity === "high"
                            ? "Tinggi"
                            : alert.severity === "medium"
                              ? "Sedang"
                              : "Rendah"}
                        </Badge>
                        <span className="text-xs text-muted-foreground flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {alert.time}
                        </span>
                      </div>
                      <CardTitle className="text-sm leading-tight">
                        {alert.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-xs mb-2">
                        {alert.description}
                      </CardDescription>
                      <div className="text-xs text-muted-foreground">
                        Target: {alert.affected}
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Button asChild variant="outline" className="w-full">
                  <Link
                    to="/informasi/peringatan-keamanan"
                    className="flex items-center justify-center"
                  >
                    Lihat Semua Peringatan
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* News Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Berita Terkini</h2>
              <Button asChild variant="ghost">
                <Link to="/informasi/berita" className="flex items-center">
                  Lihat Semua
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="space-y-6">
              {latestNews.map((news, index) => (
                <Card
                  key={news.id}
                  className="group hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3">
                        <img
                          src={news.image}
                          alt={news.title}
                          className="w-full h-48 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center space-x-4 mb-3">
                          <Badge variant="secondary">{news.category}</Badge>
                          <span className="text-sm text-muted-foreground flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {news.date}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {news.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {news.excerpt}
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-0 h-auto"
                        >
                          Baca Selengkapnya
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Statistics Cards */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Shield className="h-8 w-8 text-government-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-government-600">
                    1,247
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Ancaman Dihentikan
                  </div>
                  <div className="text-xs text-green-600 flex items-center justify-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12% minggu ini
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-cyber-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-cyber-600">
                    15,890
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Pengguna Terlindungi
                  </div>
                  <div className="text-xs text-green-600 flex items-center justify-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +8% minggu ini
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <AlertTriangle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-orange-600">24</div>
                  <div className="text-sm text-muted-foreground">
                    Insiden Tertangani
                  </div>
                  <div className="text-xs text-green-600 flex items-center justify-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    100% resolved
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
