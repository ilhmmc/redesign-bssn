import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  Calendar,
  FileText,
  Search,
  Filter,
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

const strategicDocuments = [
  {
    id: 1,
    title: "Strategi Keamanan Siber Nasional 2024-2029",
    description:
      "Dokumen strategis yang menguraikan arah dan kebijakan keamanan siber Indonesia untuk periode 2024-2029",
    category: "Strategi Nasional",
    year: "2024",
    date: "2024-03-15",
    size: "2.3 MB",
    format: "PDF",
    downloadUrl: "#",
    isNew: true,
  },
  {
    id: 2,
    title: "Rencana Induk Pengembangan Keamanan Siber 2020-2024",
    description: "Master plan pengembangan ekosistem keamanan siber Indonesia",
    category: "Rencana Induk",
    year: "2020",
    date: "2020-12-10",
    size: "3.1 MB",
    format: "PDF",
    downloadUrl: "#",
    isNew: false,
  },
  {
    id: 3,
    title: "Roadmap Transformasi Digital Keamanan Siber",
    description:
      "Peta jalan transformasi digital dalam sektor keamanan siber nasional",
    category: "Roadmap",
    year: "2023",
    date: "2023-08-20",
    size: "1.8 MB",
    format: "PDF",
    downloadUrl: "#",
    isNew: false,
  },
  {
    id: 4,
    title: "Framework Tata Kelola Keamanan Siber Sektor Pemerintah",
    description:
      "Kerangka kerja tata kelola keamanan siber untuk instansi pemerintah",
    category: "Framework",
    year: "2023",
    date: "2023-11-05",
    size: "2.7 MB",
    format: "PDF",
    downloadUrl: "#",
    isNew: false,
  },
];

const categories = [
  "Semua Kategori",
  "Strategi Nasional",
  "Rencana Induk",
  "Roadmap",
  "Framework",
];
const years = ["Semua Tahun", "2024", "2023", "2022", "2021", "2020"];

const DokumenStrategis = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua Kategori");
  const [selectedYear, setSelectedYear] = useState("Semua Tahun");

  const filteredDocuments = strategicDocuments.filter((doc) => {
    const matchesSearch =
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Semua Kategori" ||
      doc.category === selectedCategory;
    const matchesYear =
      selectedYear === "Semua Tahun" || doc.year === selectedYear;

    return matchesSearch && matchesCategory && matchesYear;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
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
          <span className="text-foreground">Dokumen Strategis</span>
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Dokumen Strategis
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kumpulan dokumen strategis keamanan siber nasional yang menjadi
            acuan kebijakan dan pengembangan keamanan siber Indonesia.
          </p>
        </div>

        {/* Search and Filter */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              Pencarian Dokumen
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Cari dokumen strategis..."
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
            Menampilkan {filteredDocuments.length} dari{" "}
            {strategicDocuments.length} dokumen
          </span>
        </div>

        {/* Documents List */}
        <div className="space-y-6">
          {filteredDocuments.map((doc) => (
            <Card key={doc.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Badge variant="outline">{doc.category}</Badge>
                      <Badge variant="secondary">{doc.year}</Badge>
                      <Badge variant="outline">{doc.format}</Badge>
                      {doc.isNew && (
                        <Badge className="bg-green-100 text-green-700">
                          Baru
                        </Badge>
                      )}
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {doc.title}
                    </h3>

                    <p className="text-muted-foreground mb-4">
                      {doc.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(doc.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText className="w-4 h-4" />
                        <span>{doc.size}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 lg:ml-6">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                      onClick={() => window.open(doc.downloadUrl, "_blank")}
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

        {filteredDocuments.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">
                Tidak ada dokumen ditemukan
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

export default DokumenStrategis;
