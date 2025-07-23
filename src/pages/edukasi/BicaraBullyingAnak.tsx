import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  ArrowLeft,
  CheckCircle,
  BookOpen,
  Heart,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";

const BicaraBullyingAnak = () => {
  const conversationTips = [
    {
      title: "Ciptakan Suasana yang Aman",
      description:
        "Pastikan anak merasa nyaman untuk berbicara tanpa takut dihakimi",
      tips: [
        "Pilih waktu dan tempat yang tepat",
        "Dengarkan dengan penuh perhatian",
        "Jangan langsung memberikan solusi",
        "Tunjukkan empati dan dukungan",
      ],
    },
    {
      title: "Ajukan Pertanyaan Terbuka",
      description:
        "Gunakan pertanyaan yang mendorong anak untuk bercerita lebih detail",
      tips: [
        "Bagaimana perasaanmu tentang hal ini?",
        "Bisakah kamu ceritakan lebih detail?",
        "Apa yang membuatmu merasa tidak nyaman?",
        "Siapa saja yang terlibat dalam kejadian ini?",
      ],
    },
    {
      title: "Validasi Perasaan Anak",
      description: "Akui dan hargai keberanian anak untuk bercerita",
      tips: [
        "Terima kasih sudah mau bercerita",
        "Perasaanmu sangat wajar",
        "Kamu tidak salah dalam hal ini",
        "Aku bangga dengan keberanianmu",
      ],
    },
    {
      title: "Buat Rencana Bersama",
      description: "Libatkan anak dalam membuat strategi menghadapi bullying",
      tips: [
        "Diskusikan berbagai pilihan solusi",
        "Tanyakan pendapat anak",
        "Buat kesepakatan bersama",
        "Tentukan langkah selanjutnya",
      ],
    },
  ];

  const warningSignsChild = [
    "Perubahan perilaku mendadak",
    "Enggan pergi ke sekolah",
    "Kehilangan teman atau aktivitas sosial",
    "Gangguan pola tidur atau makan",
    "Penurunan prestasi akademik",
    "Keluhan fisik tanpa sebab jelas",
    "Kerusakan atau hilangnya barang pribadi",
    "Meminta uang lebih sering",
    "Menghindari penggunaan teknologi",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="bg-gradient-to-br from-purple-50 via-background to-pink-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center space-x-4 mb-6">
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/informasi-regulasi/edukasi-imbauan-keamanan">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Kembali ke Edukasi & Imbauan
                  </Link>
                </Button>
              </div>
              <div className="text-center space-y-6">
                <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                  <Users className="mr-2 h-4 w-4" />
                  Parenting
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Tips Membicarakan{" "}
                  <span className="text-purple-600">Bullying dengan Anak</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Panduan untuk orangtua dalam berkomunikasi dengan anak tentang
                  bullying dan keamanan online secara efektif dan supportif.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">
                  Strategi Komunikasi Efektif
                </h2>
              </div>
              <div className="space-y-8">
                {conversationTips.map((tip, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="text-purple-600 font-bold text-lg">
                            {index + 1}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-3">
                            {tip.title}
                          </h3>
                          <p className="text-muted-foreground mb-6">
                            {tip.description}
                          </p>
                          <div className="grid md:grid-cols-2 gap-3">
                            {tip.tips.map((tipItem, tipIndex) => (
                              <div
                                key={tipIndex}
                                className="flex items-start space-x-3"
                              >
                                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{tipItem}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Tanda-tanda Anak Mengalami Bullying
                </h2>
              </div>
              <Card>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    {warningSignsChild.map((sign, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{sign}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold">Komunikasi adalah Kunci</h2>
              <p className="text-xl text-purple-100">
                Dengan komunikasi yang tepat, orangtua dapat menjadi tempat
                perlindungan terbaik bagi anak dalam menghadapi bullying.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-purple-50"
                  asChild
                >
                  <Link to="/informasi-regulasi/edukasi-imbauan-keamanan">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Pelajari Topik Lainnya
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BicaraBullyingAnak;
