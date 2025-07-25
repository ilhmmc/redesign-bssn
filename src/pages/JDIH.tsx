import { useState } from "react";
import {
  Search,
  Download,
  Calendar,
  FileText,
  Scale,
  BookOpen,
  Filter,
  SortAsc,
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
import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Sample legal documents data
const legalDocuments = [
  {
    id: 1,
    title:
      "Peraturan BSSN No. 6 Tahun 2025 tentang Tata Cara Penyelesaian Ganti Kerugian Negara",
    type: "Peraturan BSSN",
    number: "6/2025",
    year: "2025",
    date: "2025-01-15",
    status: "Berlaku",
    category: "Keuangan",
    description:
      "Mengatur tata cara penyelesaian ganti kerugian negara terhadap pegawai negeri bukan bendahara atau pejabat lain di lingkungan BSSN",
    downloadUrl: "#",
  },
  {
    id: 2,
    title:
      "Peraturan BSSN No. 5 Tahun 2024 tentang Standar Keamanan Siber Sektor Pemerintah",
    type: "Peraturan BSSN",
    number: "5/2024",
    year: "2024",
    date: "2024-12-20",
    status: "Berlaku",
    category: "Keamanan Siber",
    description:
      "Penetapan standar keamanan siber yang harus diterapkan oleh instansi pemerintah",
    downloadUrl: "#",
  },
  {
    id: 3,
    title:
      "Peraturan BSSN No. 4 Tahun 2024 tentang Sertifikasi Personel Keamanan Siber",
    type: "Peraturan BSSN",
    number: "4/2024",
    year: "2024",
    date: "2024-11-10",
    status: "Berlaku",
    category: "Sertifikasi",
    description:
      "Mengatur tata cara sertifikasi personel di bidang keamanan siber",
    downloadUrl: "#",
  },
  {
    id: 4,
    title: "Peraturan BSSN No. 3 Tahun 2024 tentang Penanganan Insiden Siber",
    type: "Peraturan BSSN",
    number: "3/2024",
    year: "2024",
    date: "2024-09-05",
    status: "Berlaku",
    category: "Insiden Siber",
    description:
      "Pedoman penanganan insiden keamanan siber di lingkungan pemerintah",
    downloadUrl: "#",
  },
  {
    id: 5,
    title: "Undang-Undang No. 27 Tahun 2022 tentang Pelindungan Data Pribadi",
    type: "Undang-Undang",
    number: "27/2022",
    year: "2022",
    date: "2022-10-17",
    status: "Berlaku",
    category: "Data Pribadi",
    description:
      "Undang-undang yang mengatur pelindungan data pribadi di Indonesia",
    downloadUrl: "#",
  },
];

const documentTypes = [
  "Semua Jenis",
  "Undang-Undang",
  "Peraturan Pemerintah",
  "Peraturan BSSN",
  "Keputusan BSSN",
];
const categories = [
  "Semua Kategori",
  "Keamanan Siber",
  "Data Pribadi",
  "Sertifikasi",
  "Keuangan",
  "Insiden Siber",
];
const years = ["Semua Tahun", "2025", "2024", "2023", "2022", "2021"];

const JDIH = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("Semua Jenis");
  const [selectedCategory, setSelectedCategory] = useState("Semua Kategori");
  const [selectedYear, setSelectedYear] = useState("Semua Tahun");
  const [sortBy, setSortBy] = useState("date");

  const filteredDocuments = legalDocuments
    .filter((doc) => {
      const matchesSearch =
        doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType =
        selectedType === "Semua Jenis" || doc.type === selectedType;
      const matchesCategory =
        selectedCategory === "Semua Kategori" ||
        doc.category === selectedCategory;
      const matchesYear =
        selectedYear === "Semua Tahun" || doc.year === selectedYear;

      return matchesSearch && matchesType && matchesCategory && matchesYear;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "Berlaku":
        return "default";
      case "Dicabut":
        return "destructive";
      case "Draft":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-government-100 rounded-full mb-6">
            <Scale className="w-8 h-8 text-government-600" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Pusat Informasi Hukum (JDIH)
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Jaringan Dokumentasi dan Informasi Hukum BSSN menyediakan akses
            mudah terhadap peraturan perundang-undangan dan dokumen hukum
            terkait keamanan siber dan sandi negara.
          </p>
        </div>

        {/* Search and Filter Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              Pencarian Dokumen Hukum
            </CardTitle>
            <CardDescription>
              Gunakan filter di bawah untuk mencari dokumen hukum sesuai
              kebutuhan Anda
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Cari berdasarkan judul atau kata kunci..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Jenis Dokumen</label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {documentTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

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

              <div className="space-y-2">
                <label className="text-sm font-medium">Urutkan</label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date">Tanggal Terbaru</SelectItem>
                    <SelectItem value="title">Judul A-Z</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Menampilkan {filteredDocuments.length} dari{" "}
              {legalDocuments.length} dokumen
            </span>
          </div>
        </div>

        {/* Document List */}
        <div className="space-y-4">
          {filteredDocuments.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">
                  Tidak ada dokumen ditemukan
                </h3>
                <p className="text-muted-foreground">
                  Coba ubah filter pencarian atau kata kunci Anda
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredDocuments.map((doc) => (
              <Card key={doc.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge variant="outline">{doc.type}</Badge>
                        <Badge variant="secondary">{doc.category}</Badge>
                        <Badge variant={getStatusBadgeVariant(doc.status)}>
                          {doc.status}
                        </Badge>
                      </div>

                      <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                        {doc.title}
                      </h3>

                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {doc.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <FileText className="w-4 h-4" />
                          <span>No. {doc.number}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(doc.date)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 lg:ml-6">
                      <Badge variant="secondary" className="w-fit">
                        <FileText className="w-3 h-3 mr-1" />
                        Dokumen PDF
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Information Section */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="w-5 h-5" />
                Tentang JDIH BSSN
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Jaringan Dokumentasi dan Informasi Hukum (JDIH) BSSN merupakan
                sistem pengelolaan dokumen dan informasi hukum yang terpadu
                untuk memberikan akses kepada masyarakat terhadap dokumen hukum
                yang dikelola oleh BSSN.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Undang-undang terkait keamanan siber</li>
                <li>• Peraturan pemerintah dan peraturan BSSN</li>
                <li>• Keputusan dan instruksi teknis</li>
                <li>• Panduan dan standar operasional</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Informasi Kontak
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div>
                  <strong>Alamat:</strong>
                  <p className="text-muted-foreground">
                    Jl. Raya Muchtar No.70, Bojongsari Lama, Kec. Bojongsari, Kota Depok, Jawa Barat 16516
                  </p>
                </div>
                <div>
                  <strong>Email:</strong>
                  <p className="text-muted-foreground">
                    jdih@bssn.go.id
                  </p>
                </div>
                <div>
                  <strong>Telepon:</strong>
                  <p className="text-muted-foreground">(021) 7805814</p>
                  <p className="text-muted-foreground">(021) 78844104</p>
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

export default JDIH;
