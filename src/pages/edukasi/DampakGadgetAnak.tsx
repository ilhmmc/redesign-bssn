import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Smartphone,
  ArrowLeft,
  CheckCircle,
  BookOpen,
  AlertTriangle,
  Clock,
  Eye,
  Brain,
} from "lucide-react";
import { Link } from "react-router-dom";

const DampakGadgetAnak = () => {
  const negativeImpacts = [
    {
      title: "Gangguan Kesehatan Fisik",
      icon: Eye,
      effects: [
        "Gangguan penglihatan",
        "Postur tubuh buruk",
        "Kurang aktivitas fisik",
        "Gangguan tidur",
      ],
    },
    {
      title: "Dampak Psikologis",
      icon: Brain,
      effects: [
        "Ketergantungan gadget",
        "Penurunan kemampuan bersosialisasi",
        "Gangguan konsentrasi",
        "Perubahan mood",
      ],
    },
    {
      title: "Risiko Keamanan Online",
      icon: AlertTriangle,
      effects: [
        "Akses konten tidak pantas",
        "Cyberbullying",
        "Berbagi informasi pribadi",
        "Penipuan online",
      ],
    },
  ];

  const preventionTips = [
    "Batasi waktu penggunaan gadget sesuai usia",
    "Dampingi anak saat menggunakan internet",
    "Gunakan parental control",
    "Ciptakan zona bebas gadget",
    "Ajarkan digital etiquette",
    "Berikan alternatif aktivitas menarik",
    "Jadilah role model penggunaan gadget",
    "Komunikasi terbuka tentang risiko online",
  ];

  const ageRecommendations = [
    {
      age: "0-2 tahun",
      recommendation: "Hindari screen time kecuali video call",
    },
    {
      age: "2-5 tahun",
      recommendation: "Maksimal 1 jam per hari dengan konten berkualitas",
    },
    {
      age: "6+ tahun",
      recommendation:
        "Batasan konsisten dengan prioritas tidur, aktivitas fisik, dan sosialisasi",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="bg-gradient-to-br from-orange-50 via-background to-red-50 py-16">
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
                <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                  <Smartphone className="mr-2 h-4 w-4" />
                  Kesehatan Digital
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Waspada Dampak Buruk{" "}
                  <span className="text-orange-600">Gadget pada Anak</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Informasi tentang risiko penggunaan gadget berlebihan dan cara
                  melindungi anak dari dampak negatifnya.
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
                  Dampak Negatif Gadget pada Anak
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {negativeImpacts.map((impact, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300 text-center"
                  >
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <impact.icon className="h-8 w-8 text-red-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">{impact.title}</h3>
                      <div className="space-y-2">
                        {impact.effects.map((effect, effectIndex) => (
                          <div
                            key={effectIndex}
                            className="flex items-center space-x-2 text-left"
                          >
                            <AlertTriangle className="h-4 w-4 text-orange-500 flex-shrink-0" />
                            <span className="text-sm">{effect}</span>
                          </div>
                        ))}
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
                  Rekomendasi Waktu Screen Time
                </h2>
              </div>
              <div className="space-y-4">
                {ageRecommendations.map((rec, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Clock className="h-6 w-6 text-blue-600" />
                          <span className="font-semibold text-lg">
                            {rec.age}
                          </span>
                        </div>
                        <span className="text-muted-foreground">
                          {rec.recommendation}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Tips Pencegahan</h2>
              </div>
              <Card>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {preventionTips.map((tip, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{tip}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold">
                Keseimbangan Digital untuk Anak
              </h2>
              <p className="text-xl text-orange-100">
                Gadget dapat bermanfaat jika digunakan dengan bijak. Peran
                orangtua sangat penting dalam membimbing penggunaan teknologi
                yang sehat.
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-orange-600 hover:bg-orange-50"
                asChild
              >
                <Link to="/informasi-regulasi/edukasi-imbauan-keamanan">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Pelajari Topik Lainnya
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DampakGadgetAnak;
