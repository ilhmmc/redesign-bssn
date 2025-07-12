import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  Calendar,
  FileText,
  Search,
  BarChart3,
  TrendingUp,
  Shield,
  AlertCircle,
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

const annualReports = [
  {
    id: 1,
    title: "Laporan Tahunan Monitoring Keamanan Siber 2023",
    description:
      "Kondisi keamanan siber Indonesia tahun 2023, statistik serangan, dan respons mitigasi",
    year: "2023",
    date: "2024-03-15",
    totalIncidents: 128765,
    criticalThreats: 1234,
    sectorsAffected: 12,
    pages: 248,
    size: "15.2 MB",
    downloadUrl: "#",
    isLatest: true,
    highlights: [
      "Peningkatan 23% serangan ransomware",
      "Sektor finansial paling banyak diserang",
      "42% serangan berasal dari luar negeri",
    ],
  },
  {
    id: 2,
    title: "Laporan Tahunan Monitoring Keamanan Siber 2022",
    description:
      "Evaluasi komprehensif landscape keamanan siber nasional dan regional tahun 2022",
    year: "2022",
    date: "2023-03-20",
    totalIncidents: 95432,
    criticalThreats: 987,
    sectorsAffected: 11,
    pages: 232,
    size: "13.8 MB",
    downloadUrl: "#",
    isLatest: false,
    highlights: [
      "Kenaikan signifikan serangan supply chain",
      "Infrastruktur kritikal jadi target utama",
      "Peningkatan awareness di sektor publik",
    ],
  },
  {
    id: 3,
    title: "Laporan Tahunan Monitoring Keamanan Siber 2021",
    description:
      "Analisis mendalam tentang adaptasi ancaman siber di era pandemi COVID-19",
    year: "2021",
    date: "2022-03-10",
    totalIncidents: 76543,
    criticalThreats: 856,
    sectorsAffected: 10,
    pages: 198,
    size: "11.5 MB",
    downloadUrl: "#",
    isLatest: false,
    highlights: [
      "Remote work meningkatkan risiko",
      "Serangan phishing naik 45%",
      "Digitalisasi percepat vulnerabilities",
    ],
  },
  {
    id: 4,
    title: "Laporan Tahunan Monitoring Keamanan Siber 2020",
    description:
      "Transformasi digital dan dampaknya terhadap landscape keamanan siber Indonesia",
    year: "2020",
    date: "2021-03-15",
    totalIncidents: 54321,
    criticalThreats: 723,
    sectorsAffected: 9,
    pages: 176,
    size: "9.8 MB",
    downloadUrl: "#",
    isLatest: false,
    highlights: [
      "Work from home vulnerabilities",
      "IoT attacks meningkat drastis",
      "Cloud security challenges",
    ],
  },
];

const years = ["Semua Tahun", "2023", "2022", "2021", "2020", "2019"];

const MonitoringKeamananSiber = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("Semua Tahun");

  const filteredReports = annualReports.filter((report) => {
    const matchesSearch =
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.highlights.some((highlight) =>
        highlight.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    const matchesYear =
      selectedYear === "Semua Tahun" || report.year === selectedYear;

    return matchesSearch && matchesYear;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
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
          <span className="text-foreground">
            Laporan Tahunan Monitoring Keamanan Siber
          </span>
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-6">
            <BarChart3 className="w-8 h-8 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Laporan Tahunan Monitoring Keamanan Siber
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Laporan komprehensif kondisi keamanan siber Indonesia yang disusun
            berdasarkan data monitoring sepanjang tahun dan analisis mendalam
            terhadap trend ancaman siber.
          </p>
        </div>

        {/* Key Stats from Latest Report */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center border-indigo-200">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mb-4">
                <AlertCircle className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="text-3xl font-bold text-indigo-600">128K+</div>
              <p className="text-sm text-muted-foreground">
                Total Insiden 2023
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-red-200">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <div className="text-3xl font-bold text-red-600">1,234</div>
              <p className="text-sm text-muted-foreground">Ancaman Kritikal</p>
            </CardContent>
          </Card>

          <Card className="text-center border-green-200">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600">+23%</div>
              <p className="text-sm text-muted-foreground">
                Kenaikan dari 2022
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-purple-200">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600">7</div>
              <p className="text-sm text-muted-foreground">Laporan Tersedia</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              Cari Laporan Tahunan
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Cari berdasarkan tahun, topik, atau highlight..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Tahun Laporan</label>
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
            Menampilkan {filteredReports.length} dari {annualReports.length}{" "}
            laporan
          </span>
        </div>

        {/* Reports List */}
        <div className="space-y-8">
          {filteredReports.map((report) => (
            <Card key={report.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <Badge className="bg-indigo-100 text-indigo-700">
                        Laporan {report.year}
                      </Badge>
                      {report.isLatest && (
                        <Badge className="bg-green-100 text-green-700">
                          Terbaru
                        </Badge>
                      )}
                      <Badge variant="outline">{report.pages} Halaman</Badge>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {report.title}
                    </h3>

                    <p className="text-muted-foreground text-lg mb-6">
                      {report.description}
                    </p>

                    {/* Key Statistics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-foreground">
                          {formatNumber(report.totalIncidents)}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Total Insiden
                        </div>
                      </div>
                      <div className="bg-red-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-red-600">
                          {formatNumber(report.criticalThreats)}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Ancaman Kritikal
                        </div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600">
                          {report.sectorsAffected}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Sektor Terdampak
                        </div>
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">
                        Highlight Utama:
                      </h4>
                      <ul className="space-y-2">
                        {report.highlights.map((highlight, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-muted-foreground"
                          >
                            <span className="text-indigo-600 mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(report.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText className="w-4 h-4" />
                        <span>{report.size}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 lg:ml-6 lg:min-w-[200px]">
                    <Button
                      variant="default"
                      size="lg"
                      className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700"
                      onClick={() => window.open(report.downloadUrl, "_blank")}
                    >
                      <Download className="w-5 h-5" />
                      Unduh Laporan
                    </Button>
                    <div className="text-center text-sm text-muted-foreground">
                      PDF • {report.size}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredReports.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">
                Tidak ada laporan ditemukan
              </h3>
              <p className="text-muted-foreground">
                Coba ubah filter pencarian atau kata kunci Anda
              </p>
            </CardContent>
          </Card>
        )}

        {/* Information Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-indigo-50 to-blue-50">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                Tentang Laporan Monitoring Keamanan Siber
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Metodologi Monitoring
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Laporan disusun berdasarkan data yang dikumpulkan dari
                    berbagai sumber including honeypot networks, SIEM systems,
                    threat intelligence feeds, dan laporan insiden dari berbagai
                    sektor.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Cakupan Analisis
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Analisis tren dan pola serangan</li>
                    <li>• Klasifikasi berdasarkan sektor dan geografis</li>
                    <li>• Evaluasi efektivitas mitigasi</li>
                    <li>• Rekomendasi strategis untuk tahun berikutnya</li>
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

export default MonitoringKeamananSiber;
