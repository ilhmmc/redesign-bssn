import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Search,
  MessageSquare,
  Shield,
  Lock,
  BookOpen,
  Smartphone,
  Wifi,
  Key,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const siapCampaigns = [
  {
    id: "simpan",
    title: "SIMPAN Datamu",
    icon: "💾",
    description:
      "Mengamankan data pribadi dengan berbagai strategi perlindungan",
    tips: [
      "Membuat salinan data penting secara berkala",
      "Mengenkripsi data sensitif dengan tools yang aman",
      "Menghapus data dengan aman saat tidak diperlukan",
      "Menjaga perangkat agar tidak tertinggal di tempat umum",
    ],
    color: "bg-blue-50 border-blue-200",
  },
  {
    id: "ikuti",
    title: "IKUTI Literasi",
    icon: "📚",
    description:
      "Memperkuat pemahaman tentang ruang siber dan keamanan digital",
    tips: [
      "Memahami isu terkait perlindungan data pribadi",
      "Mengenali berbagai jenis serangan siber",
      "Memahami risiko keuangan di dunia digital",
      "Mempelajari keamanan sistem di perusahaan",
    ],
    color: "bg-green-50 border-green-200",
  },
  {
    id: "amankan",
    title: "AMANKAN Gadget-mu",
    icon: "📱",
    description: "Melindungi perangkat digital dari berbagai ancaman siber",
    tips: [
      "Mengaktifkan kunci layar dengan pola/PIN/biometrik",
      "Melindungi jaringan Wi-Fi dengan enkripsi WPA3",
      "Memperbarui sistem operasi secara rutin",
      "Berhati-hati saat mengunduh aplikasi dari sumber tidak resmi",
    ],
    color: "bg-purple-50 border-purple-200",
  },
  {
    id: "perkuat",
    title: "PERKUAT Password",
    icon: "🔐",
    description: "Membuat dan mengelola kata sandi yang kuat dan aman",
    tips: [
      "Membuat kata sandi yang kuat dan unik untuk setiap akun",
      "Menggunakan kombinasi huruf, angka, dan simbol",
      "Menghindari kata sandi yang mudah ditebak",
      "Mengganti kata sandi secara rutin setiap 3 bulan",
    ],
    color: "bg-orange-50 border-orange-200",
  },
];

const socialMediaContent = [
  {
    platform: "Instagram",
    content: "Konten visual menarik dengan tips keamanan siber harian",
    followers: "125K+",
    engagement: "High",
  },
  {
    platform: "TikTok",
    content: "Video edukasi singkat dan viral tentang cybersecurity",
    followers: "89K+",
    engagement: "Very High",
  },
  {
    platform: "YouTube",
    content: "Tutorial lengkap dan webinar keamanan siber",
    followers: "67K+",
    engagement: "Medium",
  },
];

const SiberminJagaRuangSiber = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCampaigns = siapCampaigns.filter(
    (campaign) =>
      campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      campaign.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      campaign.tips.some((tip) =>
        tip.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

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
          <span className="text-foreground">
            Sibermin Bawa Pesan Siber #JagaRuangSiber
          </span>
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-violet-100 rounded-full mb-6">
            <MessageSquare className="w-8 h-8 text-violet-600" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Sibermin Bawa Pesan Siber #JagaRuangSiber
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kampanye nasional SIAP #JagaRuangSiber untuk meningkatkan kesadaran
            masyarakat dalam mencegah kejahatan siber melalui konten edukasi
            yang menarik dan mudah dipahami.
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Cari konten SIAP..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Kampanye SIAP #JagaRuangSiber
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {filteredCampaigns.length > 0 ? (
              filteredCampaigns.map((campaign) => (
                <Card
                  key={campaign.id}
                  className={`${campaign.color} hover:shadow-lg transition-all`}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{campaign.icon}</div>
                      <div>
                        <CardTitle className="text-xl">
                          {campaign.title}
                        </CardTitle>
                        <p className="text-muted-foreground text-sm mt-1">
                          {campaign.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">Tips Praktis:</h4>
                    <ul className="space-y-2">
                      {campaign.tips.map((tip, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm"
                        >
                          <div className="w-2 h-2 bg-current rounded-full mt-2 flex-shrink-0"></div>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-2">
                <Card>
                  <CardContent className="text-center py-12">
                    <p className="text-muted-foreground">
                      Tidak ditemukan konten yang sesuai dengan pencarian "
                      {searchTerm}"
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card className="bg-gradient-to-r from-violet-50 to-purple-50 border-violet-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-violet-600" />
                Tentang Kampanye SIAP
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                SIAP merupakan akronim dari empat pilar utama keamanan siber
                yang mudah diingat dan diterapkan oleh masyarakat dalam
                kehidupan digital sehari-hari.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center">
                    💾
                  </div>
                  <span className="font-medium">Simpan</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center">
                    📚
                  </div>
                  <span className="font-medium">Ikuti</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center">
                    📱
                  </div>
                  <span className="font-medium">Amankan</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center">
                    🔐
                  </div>
                  <span className="font-medium">Perkuat</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-blue-600" />
                Platform Media Sosial
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Kampanye #JagaRuangSiber disebarkan melalui berbagai platform
                media sosial dengan konten yang disesuaikan untuk setiap
                platform.
              </p>
              <div className="space-y-4">
                {socialMediaContent.map((platform, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-white rounded-lg"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-semibold text-blue-600">
                      {platform.platform.slice(0, 2)}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{platform.platform}</h4>
                      <p className="text-sm text-muted-foreground">
                        {platform.content}
                      </p>
                      <div className="flex gap-4 mt-2">
                        <Badge variant="outline" className="text-xs">
                          {platform.followers} followers
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {platform.engagement} engagement
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-cyan-50 to-teal-50 border-cyan-200">
          <CardHeader>
            <CardTitle className="text-center">
              Mengapa #JagaRuangSiber Penting?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-cyan-600" />
                </div>
                <h4 className="font-semibold mb-2">Perlindungan Proaktif</h4>
                <p className="text-sm text-muted-foreground">
                  Mencegah lebih baik daripada mengobati. Edukasi membantu
                  masyarakat terhindar dari serangan siber.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="w-6 h-6 text-cyan-600" />
                </div>
                <h4 className="font-semibold mb-2">Literasi Digital</h4>
                <p className="text-sm text-muted-foreground">
                  Meningkatkan pemahaman masyarakat tentang risiko dan cara aman
                  berinteraksi di dunia digital.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageSquare className="w-6 h-6 text-cyan-600" />
                </div>
                <h4 className="font-semibold mb-2">Kesadaran Kolektif</h4>
                <p className="text-sm text-muted-foreground">
                  Membangun budaya keamanan siber yang kuat melalui partisipasi
                  aktif seluruh masyarakat.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default SiberminJagaRuangSiber;
