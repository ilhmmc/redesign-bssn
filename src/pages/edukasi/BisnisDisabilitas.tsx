import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ArrowLeft, CheckCircle, BookOpen, Lightbulb, Shield, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const BisnisDisabilitas = () => {
  const businessIdeas = [
    { title: "Jasa Konsultasi Online", desc: "Manfaatkan keahlian untuk memberikan konsultasi via video call" },
    { title: "Content Creation", desc: "Buat konten edukatif, blog, atau video sesuai passion" },
    { title: "E-commerce", desc: "Jual produk handmade atau dropshipping melalui platform online" },
    { title: "Freelance Services", desc: "Tawarkan jasa desain, writing, programming, atau translasi" }
  ];

  const securityTips = [
    "Gunakan platform bisnis online yang terpercaya", "Verifikasi identitas calon klien atau partner bisnis",
    "Jangan bagikan informasi pribadi atau finansial secara sembarangan", "Gunakan kontrak tertulis untuk setiap transaksi",
    "Simpan bukti komunikasi dan transaksi dengan aman", "Manfaatkan sistem pembayaran online yang secure"
  ];

  const digitalTools = [
    { name: "Platform E-commerce", tools: ["Shopee", "Tokopedia", "Bukalapak", "WooCommerce"] },
    { name: "Payment Gateway", tools: ["GoPay", "OVO", "DANA", "Midtrans"] },
    { name: "Communication Tools", tools: ["WhatsApp Business", "Zoom", "Google Meet", "Telegram"] },
    { name: "Design & Productivity", tools: ["Canva", "Google Workspace", "Trello", "Notion"] }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="bg-gradient-to-br from-green-50 via-background to-blue-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center space-x-4 mb-6">
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/informasi-regulasi/edukasi-imbauan-keamanan">
                    <ArrowLeft className="h-4 w-4 mr-2" />Kembali ke Edukasi & Imbauan
                  </Link>
                </Button>
              </div>
              <div className="text-center space-y-6">
                <Badge className="bg-green-100 text-green-700 border-green-200">
                  <Award className="mr-2 h-4 w-4" />Inklusi Digital
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Tips Memulai <span className="text-green-600">Bisnis untuk Penyandang Disabilitas</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Panduan khusus untuk penyandang disabilitas dalam memulai bisnis online dengan aman dan sukses.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Ide Bisnis Online</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {businessIdeas.map((idea, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Lightbulb className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{idea.title}</h3>
                          <p className="text-muted-foreground">{idea.desc}</p>
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
                <h2 className="text-3xl font-bold mb-4">Keamanan Bisnis Online</h2>
              </div>
              <Card className="border-l-4 border-l-orange-500">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Shield className="h-6 w-6 text-orange-600" />
                    <h3 className="text-xl font-bold">Tips Keamanan Penting</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {securityTips.map((tip, index) => (
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

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Tools Digital yang Berguna</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {digitalTools.map((category, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <Globe className="h-8 w-8 text-blue-600 mb-4" />
                      <h3 className="font-bold mb-4">{category.name}</h3>
                      <div className="space-y-2">
                        {category.tools.map((tool, toolIndex) => (
                          <div key={toolIndex} className="text-sm text-muted-foreground">• {tool}</div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold">Wujudkan Impian Bisnis Anda</h2>
              <p className="text-xl text-green-100">
                Dengan teknologi yang tepat dan strategi keamanan yang baik, penyandang disabilitas dapat sukses berbisnis online.
              </p>
              <Button variant="secondary" size="lg" className="bg-white text-green-600 hover:bg-green-50" asChild>
                <Link to="/informasi-regulasi/edukasi-imbauan-keamanan"><BookOpen className="h-5 w-5 mr-2" />Pelajari Topik Lainnya</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BisnisDisabilitas;
