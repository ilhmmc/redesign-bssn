import { Link } from "react-router-dom";
import {
  BookOpen,
  FileText,
  Globe,
  Shield,
  Users,
  TrendingUp,
  Newspaper,
  Video,
  Headphones,
  Monitor,
  MessageSquare,
  Download,
  ChevronRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const publicationCategories = [
  {
    id: "dokumen-strategis",
    title: "Dokumen Strategis",
    description: "Dokumen strategis keamanan siber nasional dan kebijakan BSSN",
    icon: FileText,
    color: "bg-blue-100 text-blue-700",
    href: "/informasi-regulasi/publikasi/dokumen-strategis",
    count: "12 Dokumen",
  },
  {
    id: "global-security-index",
    title: "Global Security Index",
    description: "Indeks keamanan siber global dan posisi Indonesia",
    icon: Globe,
    color: "bg-green-100 text-green-700",
    href: "/informasi-regulasi/publikasi/global-security-index",
    count: "5 Laporan",
  },
  {
    id: "bacaan-ringan-berisi",
    title: "Bacaan Ringan Berisi",
    description: "Materi edukatif keamanan siber yang mudah dipahami",
    icon: BookOpen,
    color: "bg-purple-100 text-purple-700",
    href: "/informasi-regulasi/publikasi/bacaan-ringan-berisi",
    count: "24 Artikel",
  },
  {
    id: "aman-bermedia-sosial",
    title: "Aman Bermedia Sosial",
    description: "Panduan keamanan dalam menggunakan media sosial",
    icon: Users,
    color: "bg-pink-100 text-pink-700",
    href: "/informasi-regulasi/publikasi/aman-bermedia-sosial",
    count: "18 Panduan",
  },
  {
    id: "panduan-keamanan",
    title: "Panduan Keamanan",
    description: "Panduan teknis dan praktis keamanan siber",
    icon: Shield,
    color: "bg-red-100 text-red-700",
    href: "/informasi-regulasi/publikasi/panduan-keamanan",
    count: "32 Panduan",
  },
  {
    id: "honeynet-project",
    title: "Honeynet Project",
    description: "Laporan dan analisis dari proyek honeynet BSSN",
    icon: TrendingUp,
    color: "bg-orange-100 text-orange-700",
    href: "/informasi-regulasi/publikasi/honeynet-project",
    count: "8 Laporan",
  },
  {
    id: "monitoring-keamanan-siber",
    title: "Laporan Tahunan Monitoring Keamanan Siber",
    description: "Laporan tahunan kondisi keamanan siber Indonesia",
    icon: FileText,
    color: "bg-indigo-100 text-indigo-700",
    href: "/informasi-regulasi/publikasi/monitoring-keamanan-siber",
    count: "7 Laporan",
  },
  {
    id: "majalah-sanapati",
    title: "Majalah Sanapati",
    description: "Majalah resmi BSSN tentang keamanan siber dan sandi",
    icon: Newspaper,
    color: "bg-cyan-100 text-cyan-700",
    href: "/informasi-regulasi/publikasi/majalah-sanapati",
    count: "24 Edisi",
  },
  {
    id: "monitoring-kamsiber",
    title: "Monitoring Keamanan Siber",
    description: "Data dan statistik monitoring keamanan siber real-time",
    icon: Monitor,
    color: "bg-yellow-100 text-yellow-700",
    href: "/informasi-regulasi/publikasi/monitoring-kamsiber",
    count: "52 Laporan",
  },
  {
    id: "cyber-blitz",
    title: "Cyber Blitz",
    description: "Buletin kilat informasi ancaman dan insiden siber terkini",
    icon: TrendingUp,
    color: "bg-emerald-100 text-emerald-700",
    href: "/informasi-regulasi/publikasi/cyber-blitz",
    count: "36 Buletin",
  },
  {
    id: "berita-edukasi-siber",
    title: "Berita Edukasi Siber Sosial Terkini",
    description: "Berita dan edukasi terbaru seputar keamanan siber sosial",
    icon: Newspaper,
    color: "bg-teal-100 text-teal-700",
    href: "/informasi-regulasi/publikasi/berita-edukasi-siber",
    count: "128 Berita",
  },
  {
    id: "sibermin-jagaruangsiber",
    title: "Sibermin Bawa Pesan Siber #JagaRuangSiber",
    description: "Kampanye edukasi keamanan siber melalui karakter Sibermin",
    icon: MessageSquare,
    color: "bg-violet-100 text-violet-700",
    href: "/informasi-regulasi/publikasi/sibermin-jagaruangsiber",
    count: "45 Konten",
  },
  {
    id: "podcast-keamanan-siber",
    title: "Podcast Keamanan Siber untuk Masyarakat",
    description:
      "Podcast edukatif tentang keamanan siber untuk masyarakat umum",
    icon: Headphones,
    color: "bg-rose-100 text-rose-700",
    href: "/informasi-regulasi/publikasi/podcast-keamanan-siber",
    count: "28 Episode",
  },
  {
    id: "webinar-keamanan-siber",
    title: "Webinar Keamanan Siber",
    description: "Rekaman webinar dan seminar online keamanan siber",
    icon: Video,
    color: "bg-amber-100 text-amber-700",
    href: "/informasi-regulasi/publikasi/webinar-keamanan-siber",
    count: "64 Webinar",
  },
  {
    id: "video-literasi-siber",
    title: "Video Literasi Keamanan Siber",
    description:
      "Video edukasi literasi keamanan siber untuk berbagai kalangan",
    icon: Video,
    color: "bg-lime-100 text-lime-700",
    href: "/informasi-regulasi/publikasi/video-literasi-siber",
    count: "92 Video",
  },
];

const Publikasi = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-government-100 rounded-full mb-6">
            <BookOpen className="w-8 h-8 text-government-600" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">PUBLIKASI</h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              BSSN berkomitmen memberikan/menyediakan bahan literasi budaya
              keamanan siber dan berbagai informasi terbaru terkait perkembangan
              aspek keamanan siber kepada para pemangku kepentingan keamanan
              siber dan masyarakat luas.
            </p>
            <p className="text-base text-muted-foreground">
              Berikut berbagai seri publikasi yang telah disusun dan diterbitkan
              oleh Badan Siber dan Sandi Negara dan beberapa dokumen terkait
              keamanan siber yang bebas diunduh, disimpan, digunakan dan
              dibagikan.
            </p>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-foreground">15</div>
              <p className="text-sm text-muted-foreground">
                Kategori Publikasi
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <Download className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-foreground">500+</div>
              <p className="text-sm text-muted-foreground">Dokumen Tersedia</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-foreground">50K+</div>
              <p className="text-sm text-muted-foreground">Unduhan Bulan Ini</p>
            </CardContent>
          </Card>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publicationCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.id}
                className="group hover:shadow-lg transition-all duration-300 border hover:border-government-300"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${category.color} mb-3`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-government-600 transition-colors">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm mb-4 line-clamp-2">
                    {category.description}
                  </CardDescription>

                  <Link to={category.href}>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-government-50 group-hover:border-government-300 transition-all"
                    >
                      Lihat Publikasi
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-government-50 to-cyber-50 border-0">
            <CardContent className="py-12">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Butuh Bantuan Menemukan Publikasi?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Tim kami siap membantu Anda menemukan dokumen atau publikasi
                  yang sesuai dengan kebutuhan Anda.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/kontak">
                    <Button
                      size="lg"
                      className="bg-government-600 hover:bg-government-700"
                    >
                      Hubungi Kami
                    </Button>
                  </Link>
                  <Link to="/informasi-regulasi/panduan-tips">
                    <Button variant="outline" size="lg">
                      Lihat Panduan
                    </Button>
                  </Link>
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

export default Publikasi;
