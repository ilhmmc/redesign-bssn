import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Search,
  Newspaper,
  GraduationCap,
  Users,
  BookOpen,
  Calendar,
  MapPin,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const bestiPrograms = [
  {
    id: 1,
    title: "Gerakan Literasi Keamanan Siber (GELITIKS)",
    date: "20 Agustus 2024",
    location: "SMA 17 Jakarta",
    category: "Program Edukasi",
    description:
      "Kegiatan edukasi dengan tema 'Peran Generasi Z dalam Membentuk Budaya Kesadaran Keamanan Siber' untuk meningkatkan pengetahuan pelajar tentang ancaman siber dan pentingnya etika berinternet.",
    target: "Pelajar SMA",
    status: "Terlaksana",
  },
  {
    id: 2,
    title: "Konten Komik Komunika - Tipu-tipu Digital",
    date: "2024",
    location: "Kolaborasi dengan Kominfo",
    category: "Konten Edukasi",
    description:
      "Penyusunan konten bersama dengan Kementerian Komunikasi dan Informatika berupa komik bertemakan 'Tipu-tipu Digital' untuk mengedukasi masyarakat tentang ancaman siber sosial.",
    target: "Masyarakat Umum",
    status: "Ongoing",
  },
  {
    id: 3,
    title: "Kampanye #JagaRuangSiber",
    date: "2024",
    location: "Media Sosial Nasional",
    category: "Kampanye Digital",
    description:
      "Program kampanye nasional untuk meningkatkan kesadaran masyarakat dalam mencegah kejahatan siber melalui platform media sosial.",
    target: "Generasi Digital",
    status: "Aktif",
  },
];

const educationTopics = [
  {
    title: "Ancaman Siber Sosial",
    description:
      "Pemahaman tentang berbagai jenis ancaman yang ada di media sosial dan cara mengidentifikasinya",
    icon: "🛡️",
  },
  {
    title: "Etika Berinternet",
    description:
      "Panduan berperilaku yang baik dan bertanggung jawab di dunia maya",
    icon: "🤝",
  },
  {
    title: "Literasi Digital",
    description:
      "Kemampuan menggunakan teknologi digital secara cerdas, aman, dan bertanggung jawab",
    icon: "📱",
  },
  {
    title: "Perlindungan Data Pribadi",
    description:
      "Cara melindungi informasi pribadi dari penyalahgunaan di dunia digital",
    icon: "🔒",
  },
];

const BeritaEdukasiSiber = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPrograms = bestiPrograms.filter(
    (program) =>
      program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Terlaksana":
        return "bg-green-100 text-green-800 border-green-200";
      case "Ongoing":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Aktif":
        return "bg-orange-100 text-orange-800 border-orange-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link
            to="/informasi-regulasi/publikasi"
            className="hover:text-foreground"
          >
            Publikasi
          </Link>
          <span>/</span>
          <span className="text-foreground">Berita Edukasi Siber</span>
        </div>

        <div className="mb-6">
          <Link to="/informasi-regulasi/publikasi">
            <Button variant="ghost" className="pl-0">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Publikasi
            </Button>
          </Link>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-6">
            <Newspaper className="w-8 h-8 text-teal-600" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Berita Edukasi Siber Sosial Terkini (BESTI)
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Program BSSN untuk meningkatkan kesadaran masyarakat terhadap
            ancaman siber, terutama di kalangan pelajar dan generasi digital
            melalui berbagai inisiatif edukasi.
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Cari program edukasi..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Program dan Kegiatan BESTI
          </h2>
          {filteredPrograms.length > 0 ? (
            filteredPrograms.map((program) => (
              <Card
                key={program.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">
                        {program.title}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {program.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {program.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Target className="w-4 h-4" />
                          {program.target}
                        </div>
                      </div>
                      <div className="flex gap-2 mb-3">
                        <Badge variant="outline">{program.category}</Badge>
                        <Badge className={getStatusColor(program.status)}>
                          {program.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">
                        {program.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <p className="text-muted-foreground">
                  Tidak ditemukan program yang sesuai dengan pencarian "
                  {searchTerm}"
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-teal-50 to-blue-50 border-teal-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-teal-600" />
                Tentang Program BESTI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Berita Edukasi Siber Sosial Terkini (BESTI) adalah program
                komprehensif BSSN yang dirancang untuk meningkatkan literasi
                keamanan siber di masyarakat.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  Edukasi ancaman siber kepada pelajar
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  Kolaborasi dengan institusi pendidikan
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  Konten edukasi yang mudah dipahami
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  Kampanye kesadaran digital
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-6 h-6 text-blue-600" />
                Target Audiens
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    🎓
                  </div>
                  <div>
                    <h4 className="font-medium">Pelajar & Mahasiswa</h4>
                    <p className="text-sm text-muted-foreground">
                      Generasi Z yang aktif di dunia digital
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    👨‍🏫
                  </div>
                  <div>
                    <h4 className="font-medium">Pendidik</h4>
                    <p className="text-sm text-muted-foreground">
                      Guru dan tenaga pendidik
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    👥
                  </div>
                  <div>
                    <h4 className="font-medium">Masyarakat Umum</h4>
                    <p className="text-sm text-muted-foreground">
                      Pengguna media sosial dan teknologi
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-indigo-600" />
              Topik Edukasi Utama
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {educationTopics.map((topic, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="text-2xl">{topic.icon}</div>
                  <div>
                    <h4 className="font-semibold mb-2">{topic.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {topic.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default BeritaEdukasiSiber;
