import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Smartphone, ArrowLeft, BookOpen, Eye, Ear, Brain, Users } from "lucide-react";
import { Link } from "react-router-dom";

const AplikasiDisabilitas = () => {
  const appCategories = [
    {
      title: "Untuk Tunanetra",
      icon: Eye,
      apps: [
        { name: "TalkBack (Android)", desc: "Screen reader built-in untuk navigasi dengan suara" },
        { name: "VoiceOver (iOS)", desc: "Pembaca layar terintegrasi di perangkat Apple" },
        { name: "NVDA", desc: "Screen reader gratis untuk komputer Windows" },
        { name: "Be My Eyes", desc: "Aplikasi yang menghubungkan dengan volunteer untuk bantuan visual" }
      ]
    },
    {
      title: "Untuk Tunarungu",
      icon: Ear,
      apps: [
        { name: "Live Caption", desc: "Subtitle real-time untuk video dan audio" },
        { name: "Sound Amplifier", desc: "Penguat suara untuk pendengaran yang lebih baik" },
        { name: "Ava", desc: "Aplikasi untuk percakapan grup dengan subtitle" },
        { name: "Spread Signs", desc: "Kamus bahasa isyarat internasional" }
      ]
    },
    {
      title: "Untuk Disabilitas Kognitif",
      icon: Brain,
      apps: [
        { name: "Proloquo2Go", desc: "Aplikasi komunikasi untuk yang kesulitan berbicara" },
        { name: "CogniFit", desc: "Latihan kognitif untuk meningkatkan daya ingat" },
        { name: "Google Assistant", desc: "Asisten suara untuk membantu aktivitas sehari-hari" },
        { name: "Todoist", desc: "Pengingat tugas dengan interface yang sederhana" }
      ]
    },
    {
      title: "Untuk Disabilitas Fisik",
      icon: Users,
      apps: [
        { name: "Switch Access", desc: "Kontrol perangkat dengan switch eksternal" },
        { name: "Dragon Speech", desc: "Voice recognition untuk input text" },
        { name: "Eye Control", desc: "Kontrol perangkat dengan gerakan mata" },
        { name: "Voice Access", desc: "Kontrol Android dengan perintah suara" }
      ]
    }
  ];

  const safetyTips = [
    "Download aplikasi hanya dari Google Play Store atau App Store resmi",
    "Baca review dan rating aplikasi sebelum menginstall",
    "Periksa permission yang diminta aplikasi",
    "Update aplikasi secara berkala untuk keamanan",
    "Gunakan antivirus di perangkat mobile",
    "Backup data penting secara rutin"
  ];

  const accessibilityFeatures = [
    { platform: "Android", features: ["TalkBack", "Select to Speak", "Live Caption", "Sound Amplifier", "Switch Access"] },
    { platform: "iOS", features: ["VoiceOver", "Voice Control", "Switch Control", "Magnifier", "Live Listen"] },
    { platform: "Windows", features: ["Narrator", "Magnifier", "On-Screen Keyboard", "Speech Recognition", "Eye Control"] }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="bg-gradient-to-br from-blue-50 via-background to-purple-50 py-16">
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
                <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                  <Smartphone className="mr-2 h-4 w-4" />Aksesibilitas
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  <span className="text-blue-600">Aplikasi Bantu</span> Penyandang Disabilitas
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Kumpulan aplikasi dan tools digital yang dapat membantu penyandang disabilitas dalam aktivitas sehari-hari.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Aplikasi Berdasarkan Jenis Disabilitas</h2>
              </div>
              <div className="space-y-12">
                {appCategories.map((category, index) => (
                  <div key={index}>
                    <Card className="overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 border-b">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                            <category.icon className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold">{category.title}</h3>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          {category.apps.map((app, appIndex) => (
                            <div key={appIndex} className="border rounded-lg p-4">
                              <h4 className="font-semibold text-lg mb-2">{app.name}</h4>
                              <p className="text-sm text-muted-foreground">{app.desc}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Fitur Aksesibilitas Built-in</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {accessibilityFeatures.map((platform, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">{platform.platform}</h3>
                      <div className="space-y-2">
                        {platform.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="text-sm">• {feature}</div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold">Teknologi untuk Semua</h2>
              <p className="text-xl text-blue-100">
                Dengan aplikasi dan tools yang tepat, teknologi dapat menjadi jembatan untuk kehidupan yang lebih mandiri dan produktif.
              </p>
              <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
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

export default AplikasiDisabilitas;
