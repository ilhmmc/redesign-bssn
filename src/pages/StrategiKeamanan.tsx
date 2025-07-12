import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookCopy, Target } from "lucide-react";

const StrategiKeamanan = () => {
  const visi =
    "MEMBANGUN DAN MENJAGA KEAMANAN SIBER NASIONAL DENGAN MENSINERGIKAN BERBAGAI PEMANGKU KEPENTINGAN UNTUK IKUT SERTA MEWUJUDKAN KEAMANAN NASIONAL DAN MENINGKATKAN PERTUMBUHAN EKONOMI NASIONAL.";
  const tujuanStrategis = [
    "Tercapainya ketahanan siber",
    "Keamanan layanan publik",
    "Penegakan hukum siber",
    "Budaya keamanan siber",
    "Keamanan siber pada ekonomi digital",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-government-50 via-background to-cyber-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-government-100 text-government-700 border-government-200">
                <BookCopy className="mr-2 h-4 w-4" />
                Dokumen Strategis
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Strategi Keamanan <span className="gradient-text">Siber Indonesia</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Acuan bersama seluruh pemangku kepentingan dalam menyusun dan mengembangkan kebijakan keamanan siber di Indonesia.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle>Pengantar Strategi Keamanan Siber Indonesia</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground leading-relaxed text-justify">
                <p>
                  Keamanan siber telah menjadi isu prioritas seluruh negara di dunia semenjak teknologi informasi dan komunikasi dimanfaatkan dalam berbagai aspek kehidupan, baik dalam aspek sosial, ekonomi, hukum, organisasi, kesehatan, pendidikan, budaya, pemerintahan, keamanan, pertahanan, dan lain sebagainya. Berbanding lurus dengan tingginya tingkat pemanfaatan teknologi informasi dan komunikasi tersebut, tingkat risiko dan ancaman penyalahgunaan teknologi informasi dan komunikasi juga semakin tinggi dan semakin kompleks.
                </p>
                <p>
                  Menyikapi fenomena tersebut, untuk menciptakan lingkungan siber strategis dan penyelenggaraan sistem elektronik yang aman, andal dan terpercaya; memajukan dan menumbuhkan ekonomi digital dengan meningkatkan daya saing dan inovasi siber; serta membangun kesadaran dan kepekaan terhadap ketahanan dan keamanan nasional dalam ruang siber, pemerintah melalui Peraturan Presiden Nomor 53 Tahun 2017 tentang Badan Siber dan Sandi Negara (BSSN) dan peraturan perubahannya Peraturan Presiden Nomor 133 Tahun 2017 membentuk BSSN yang bertugas melaksanakan keamanan siber secara efektif dan efisien dengan memanfaatkan, mengembangkan dan mengonsolidasikan semua unsur yang terkait dengan keamanan siber nasional.
                </p>
                
                <Card className="bg-government-50 border-government-200">
                  <CardHeader>
                    <CardTitle className="text-xl text-government-700 flex items-center">
                        <Target className="mr-3 h-6 w-6"/>
                        Visi Strategi Keamanan Siber
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="border-l-4 border-government-500 pl-4 italic text-government-800">
                      "{visi}"
                    </blockquote>
                  </CardContent>
                </Card>

                <p>
                  Tujuan strategis Strategi Keamanan Siber Indonesia adalah tercapainya ketahanan siber, keamanan layanan publik, penegakan hukum siber, budaya keamanan siber dan keamanan siber pada ekonomi digital. Strategi Keamanan Informasi Indonesia ini diharapkan dapat menjadi salah satu fondasi kepercayaan dunia kepada Indonesia dalam berbagai forum keamanan siber internasional. Strategi Keamanan Siber Indonesia merupakan sumbangsih Bangsa Indonesia dalam mendorong terciptanya perdamaian dunia.
                </p>

                <div className="pt-4 text-right">
                    <p className="font-semibold">Hinsa Siburian</p>
                    <p className="text-sm">Kepala Badan Siber dan Sandi Negara</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StrategiKeamanan;