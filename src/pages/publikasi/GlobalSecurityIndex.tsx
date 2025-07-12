import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  Calendar,
  Globe,
  Search,
  TrendingUp,
  Award,
  BarChart3,
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

const gciReports = [
  {
    id: 1,
    title: "Global Cybersecurity Index 2024",
    description:
      "Laporan terbaru indeks keamanan siber global menunjukkan posisi Indonesia dan benchmark internasional",
    year: "2024",
    date: "2024-10-15",
    rank: "41",
    score: "82.1",
    change: "+3",
    size: "4.2 MB",
    pages: 156,
    downloadUrl: "#",
    isLatest: true,
  },
  {
    id: 2,
    title: "Global Cybersecurity Index 2023",
    description:
      "Analisis komprehensif posisi keamanan siber Indonesia di kancah global tahun 2023",
    year: "2023",
    date: "2023-09-20",
    rank: "44",
    score: "79.8",
    change: "+2",
    size: "3.8 MB",
    pages: 142,
    downloadUrl: "#",
    isLatest: false,
  },
  {
    id: 3,
    title: "Global Cybersecurity Index 2022",
    description:
      "Evaluasi kematangan keamanan siber nasional dan perbandingan regional ASEAN",
    year: "2022",
    date: "2022-11-10",
    rank: "46",
    score: "77.5",
    change: "+1",
    size: "3.5 MB",
    pages: 128,
    downloadUrl: "#",
    isLatest: false,
  },
  {
    id: 4,
    title: "Global Cybersecurity Index 2021",
    description:
      "Laporan indeks keamanan siber global dengan fokus pada resiliensi digital post-pandemi",
    year: "2021",
    date: "2021-12-05",
    rank: "47",
    score: "75.2",
    change: "0",
    size: "3.2 MB",
    pages: 118,
    downloadUrl: "#",
    isLatest: false,
  },
];

const years = ["Semua Tahun", "2024", "2023", "2022", "2021", "2020"];

const GlobalSecurityIndex = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("Semua Tahun");

  const filteredReports = gciReports.filter((report) => {
    const matchesSearch =
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.description.toLowerCase().includes(searchTerm.toLowerCase());
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

  const getChangeColor = (change: string) => {
    if (change.startsWith("+")) return "text-green-600";
    if (change.startsWith("-")) return "text-red-600";
    return "text-gray-600";
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
          <span className="text-foreground">Global Security Index</span>
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <Globe className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Global Security Index
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Indeks keamanan siber global yang menunjukkan posisi Indonesia dan
            perbandingan dengan negara-negara lain dalam implementasi keamanan
            siber nasional.
          </p>
        </div>

        {/* Latest Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center border-green-200">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600">41</div>
              <p className="text-sm text-muted-foreground">
                Peringkat Indonesia 2024
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-blue-200">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600">82.1</div>
              <p className="text-sm text-muted-foreground">Skor GCI 2024</p>
            </CardContent>
          </Card>

          <Card className="text-center border-emerald-200">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-4">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-emerald-600">+3</div>
              <p className="text-sm text-muted-foreground">
                Kenaikan Peringkat
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-purple-200">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600">193</div>
              <p className="text-sm text-muted-foreground">Negara Peserta</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              Pencarian Laporan GCI
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Cari laporan GCI..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            Menampilkan {filteredReports.length} dari {gciReports.length}{" "}
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
                      <Badge variant="outline">GCI {report.year}</Badge>
                      <Badge
                        className={`${
                          report.isLatest
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {report.isLatest ? "Terbaru" : "Arsip"}
                      </Badge>
                      <Badge variant="secondary">
                        Peringkat #{report.rank}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {report.title}
                    </h3>

                    <p className="text-muted-foreground mb-4">
                      {report.description}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-foreground">
                          #{report.rank}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Peringkat
                        </div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-lg font-bold text-blue-600">
                          {report.score}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Skor
                        </div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div
                          className={`text-lg font-bold ${getChangeColor(
                            report.change,
                          )}`}
                        >
                          {report.change}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Perubahan
                        </div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="text-lg font-bold text-purple-600">
                          {report.pages}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Halaman
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
              <Globe className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">
                Tidak ada laporan ditemukan
              </h3>
              <p className="text-muted-foreground">
                Coba ubah filter pencarian atau kata kunci Anda
              </p>
            </CardContent>
          </Card>
        )}

        {/* About GCI Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50">
            <CardContent className="p-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                  Tentang Global Cybersecurity Index
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Apa itu GCI?</h3>
                    <p className="text-muted-foreground mb-4">
                      Global Cybersecurity Index (GCI) adalah indeks yang
                      dikembangkan oleh International Telecommunication Union
                      (ITU) untuk mengukur komitmen negara-negara terhadap
                      keamanan siber dan tingkat pengembangan keamanan siber.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      5 Pilar Penilaian
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Legal Measures (Kebijakan Hukum)</li>
                      <li>• Technical Measures (Kebijakan Teknis)</li>
                      <li>• Organizational Measures (Kebijakan Organisasi)</li>
                      <li>• Capacity Building (Pengembangan Kapasitas)</li>
                      <li>• Cooperation (Kerjasama)</li>
                    </ul>
                  </div>
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

export default GlobalSecurityIndex;
