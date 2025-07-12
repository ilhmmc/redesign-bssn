import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  Calendar,
  TrendingUp,
  Search,
  Database,
  Activity,
  Target,
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

const honeynetReports = [
  {
    id: 1,
    title: "Analisis Serangan Malware Q4 2023",
    description:
      "Laporan komprehensif tentang tren malware yang terdeteksi melalui jaringan honeypot BSSN",
    period: "Q4 2023",
    date: "2024-01-15",
    attacksDetected: 45678,
    malwareFamilies: 234,
    topThreat: "Ransomware",
    size: "8.5 MB",
    downloadUrl: "#",
    isLatest: true,
    threatLevel: "High",
  },
  {
    id: 2,
    title: "Laporan Aktivitas Botnet Indonesia 2023",
    description:
      "Analisis mendalam tentang aktivitas botnet yang menargetkan infrastruktur Indonesia",
    period: "2023",
    date: "2023-12-20",
    attacksDetected: 123456,
    malwareFamilies: 189,
    topThreat: "Botnet",
    size: "12.3 MB",
    downloadUrl: "#",
    isLatest: false,
    threatLevel: "Critical",
  },
  {
    id: 3,
    title: "Trend Phishing Attack Q3 2023",
    description:
      "Dokumentasi serangan phishing yang berhasil dideteksi dan dianalisis oleh sistem honeypot",
    period: "Q3 2023",
    date: "2023-10-15",
    attacksDetected: 78901,
    malwareFamilies: 156,
    topThreat: "Phishing",
    size: "6.7 MB",
    downloadUrl: "#",
    isLatest: false,
    threatLevel: "Medium",
  },
  {
    id: 4,
    title: "IoT Security Threats Analysis 2023",
    description:
      "Penelitian khusus tentang ancaman keamanan yang menargetkan perangkat IoT",
    period: "2023",
    date: "2023-09-10",
    attacksDetected: 34567,
    malwareFamilies: 98,
    topThreat: "IoT Malware",
    size: "5.2 MB",
    downloadUrl: "#",
    isLatest: false,
    threatLevel: "High",
  },
];

const periods = ["Semua Periode", "Q4 2023", "Q3 2023", "Q2 2023", "2023"];
const threatLevels = ["Semua Level", "Critical", "High", "Medium", "Low"];

const HoneynetProject = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("Semua Periode");
  const [selectedThreatLevel, setSelectedThreatLevel] = useState("Semua Level");

  const filteredReports = honeynetReports.filter((report) => {
    const matchesSearch =
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.topThreat.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPeriod =
      selectedPeriod === "Semua Periode" || report.period === selectedPeriod;
    const matchesThreatLevel =
      selectedThreatLevel === "Semua Level" ||
      report.threatLevel === selectedThreatLevel;

    return matchesSearch && matchesPeriod && matchesThreatLevel;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const getThreatLevelColor = (level: string) => {
    switch (level) {
      case "Critical":
        return "bg-red-100 text-red-700";
      case "High":
        return "bg-orange-100 text-orange-700";
      case "Medium":
        return "bg-yellow-100 text-yellow-700";
      case "Low":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString();
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
          <span className="text-foreground">Honeynet Project</span>
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
            <TrendingUp className="w-8 h-8 text-orange-600" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Honeynet Project
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Laporan dan analisis hasil penelitian dari jaringan honeypot BSSN
            yang memantau ancaman siber secara real-time untuk melindungi
            infrastruktur kritikal Indonesia.
          </p>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center border-orange-200">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                <Target className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-orange-600">45K+</div>
              <p className="text-sm text-muted-foreground">
                Serangan Terdeteksi
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-red-200">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
                <Database className="w-6 h-6 text-red-600" />
              </div>
              <div className="text-3xl font-bold text-red-600">234</div>
              <p className="text-sm text-muted-foreground">Keluarga Malware</p>
            </CardContent>
          </Card>

          <Card className="text-center border-blue-200">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Activity className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <p className="text-sm text-muted-foreground">Monitoring Aktif</p>
            </CardContent>
          </Card>

          <Card className="text-center border-green-200">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600">8</div>
              <p className="text-sm text-muted-foreground">Laporan Tersedia</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              Cari Laporan Honeynet
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Cari berdasarkan periode, jenis ancaman, atau kata kunci..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Periode</label>
                <Select
                  value={selectedPeriod}
                  onValueChange={setSelectedPeriod}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {periods.map((period) => (
                      <SelectItem key={period} value={period}>
                        {period}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Level Ancaman</label>
                <Select
                  value={selectedThreatLevel}
                  onValueChange={setSelectedThreatLevel}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {threatLevels.map((level) => (
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
            Menampilkan {filteredReports.length} dari {honeynetReports.length}{" "}
            laporan
          </span>
        </div>

        {/* Reports List */}
        <div className="space-y-6">
          {filteredReports.map((report) => (
            <Card key={report.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Badge variant="outline">{report.period}</Badge>
                      <Badge
                        className={getThreatLevelColor(report.threatLevel)}
                      >
                        {report.threatLevel} Risk
                      </Badge>
                      <Badge variant="secondary">{report.topThreat}</Badge>
                      {report.isLatest && (
                        <Badge className="bg-green-100 text-green-700">
                          Terbaru
                        </Badge>
                      )}
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {report.title}
                    </h3>

                    <p className="text-muted-foreground mb-4">
                      {report.description}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-gray-50 p-3 rounded-lg text-center">
                        <div className="text-lg font-bold text-foreground">
                          {formatNumber(report.attacksDetected)}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Serangan Terdeteksi
                        </div>
                      </div>
                      <div className="bg-red-50 p-3 rounded-lg text-center">
                        <div className="text-lg font-bold text-red-600">
                          {report.malwareFamilies}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Malware Families
                        </div>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg text-center">
                        <div className="text-lg font-bold text-orange-600">
                          {report.topThreat}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Top Threat
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(report.date)}</span>
                      </div>
                      <span>{report.size}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 lg:ml-6">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                      onClick={() => window.open(report.downloadUrl, "_blank")}
                    >
                      <Download className="w-4 h-4" />
                      Unduh Laporan
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredReports.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">
                Tidak ada laporan ditemukan
              </h3>
              <p className="text-muted-foreground">
                Coba ubah filter pencarian atau kata kunci Anda
              </p>
            </CardContent>
          </Card>
        )}

        {/* About Honeynet */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-orange-50 to-red-50">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                Tentang BSSN Honeynet Project
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Apa itu Honeynet?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Honeynet adalah jaringan sistem honeypot yang dirancang
                    untuk menarik dan menganalisis aktivitas penyerang. BSSN
                    mengoperasikan honeynet untuk memahami taktik, teknik, dan
                    prosedur (TTP) para pelaku ancaman siber.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Manfaat Penelitian
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Early warning system untuk ancaman baru</li>
                    <li>• Analisis malware dan teknik serangan</li>
                    <li>• Pengembangan signature detection</li>
                    <li>• Threat intelligence untuk industri</li>
                  </ul>
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

export default HoneynetProject;
