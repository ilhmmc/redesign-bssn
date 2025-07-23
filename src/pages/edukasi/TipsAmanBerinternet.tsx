import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Shield,
  Lock,
  Eye,
  Wifi,
  Smartphone,
  CreditCard,
  Mail,
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  BookOpen,
  Download,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const TipsAmanBerinternet = () => {
  const basicSafetyTips = [
    {
      title: "Gunakan Password yang Kuat",
      description: "Buat password unik dengan kombinasi huruf, angka, dan simbol",
      icon: Lock,
      tips: [
        "Minimal 12 karakter dengan kombinasi huruf besar, kecil, angka, dan simbol",
        "Hindari menggunakan informasi pribadi seperti nama atau tanggal lahir",
        "Gunakan password yang berbeda untuk setiap akun",
        "Aktifkan two-factor authentication (2FA) jika tersedia",
        "Gunakan password manager untuk mengelola password"
      ]
    },
    {
      title: "Berhati-hati dengan Email dan Pesan",
      description: "Waspadai email phishing dan pesan mencurigakan",
      icon: Mail,
      tips: [
        "Jangan klik link dari pengirim yang tidak dikenal",
        "Verifikasi identitas pengirim sebelum memberikan informasi",
        "Waspadai email yang meminta informasi pribadi atau finansial",
        "Periksa alamat email pengirim dengan teliti",
        "Jangan download attachment dari sumber yang mencurigakan"
      ]
    },
    {
      title: "Amankan Transaksi Online",
      description: "Lindungi informasi finansial saat berbelanja online",
      icon: CreditCard,
      tips: [
        "Hanya berbelanja di situs yang memiliki sertifikat SSL (https://)",
        "Gunakan metode pembayaran yang aman seperti e-wallet atau virtual account",
        "Jangan simpan informasi kartu kredit di browser atau situs web",
        "Periksa statement bank secara rutin",
        "Hindari berbelanja di Wi-Fi publik"
      ]
    },
    {
      title: "Jaga Privasi di Media Sosial",
      description: "Atur pengaturan privasi untuk melindungi informasi pribadi",
      icon: Users,
      tips: [
        "Atur profil menjadi private atau terbatas",
        "Hati-hati membagikan lokasi atau informasi pribadi",
        "Selektif dalam menerima permintaan pertemanan",
        "Jangan posting informasi yang terlalu detail tentang aktivitas harian",
        "Periksa dan update pengaturan privasi secara berkala"
      ]
    }
  ];

  const wifiSafetyTips = [
    "Hindari mengakses akun penting di Wi-Fi publik",
    "Gunakan VPN saat terhubung ke Wi-Fi publik",
    "Pastikan Wi-Fi rumah dilindungi dengan password yang kuat",
    "Nonaktifkan auto-connect ke Wi-Fi",
    "Logout dari semua akun setelah menggunakan Wi-Fi publik",
    "Update firmware router secara berkala"
  ];

  const deviceSafetyTips = [
    "Install antivirus dan selalu update definisi virus",
    "Update sistem operasi dan aplikasi secara berkala",
    "Aktifkan firewall pada perangkat",
    "Backup data penting secara rutin",
    "Gunakan screen lock pada perangkat mobile",
    "Jangan install aplikasi dari sumber yang tidak terpercaya"
  ];

  const childSafetyTips = [
    {
      title: "Pendampingan Orang Tua",
      items: [
        "Dampingi anak saat menggunakan internet",
        "Ajarkan anak untuk tidak membagikan informasi pribadi",
        "Buat aturan waktu penggunaan internet",
        "Gunakan parental control pada perangkat"
      ]
    },
    {
      title: "Edukasi untuk Anak",
      items: [
        "Ajarkan anak tentang cyberbullying dan cara menghadapinya",
        "Jelaskan risiko bertemu dengan orang asing dari internet",
        "Beri tahu anak untuk segera lapor jika mengalami hal yang tidak nyaman",
        "Ajarkan anak untuk berpikir sebelum posting atau sharing"
      ]
    }
  ];

  const warningSignsData = [
    {
      category: "Tanda-tanda Akun Diretas",
      signs: [
        "Email atau pesan yang tidak Anda kirim",
        "Perubahan password tanpa sepengetahuan Anda",
        "Aktivitas login dari lokasi yang tidak familiar",
        "Teman melaporkan menerima pesan aneh dari akun Anda",
        "Postingan atau komentar yang tidak Anda buat"
      ]
    },
    {
      category: "Tanda-tanda Malware",
      signs: [
        "Komputer atau ponsel menjadi lambat",
        "Pop-up iklan yang berlebihan",
        "Browser homepage berubah sendiri",
        "File-file penting hilang atau terenkripsi",
        "Konsumsi data internet meningkat drastis"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 via-background to-blue-50 py-16">
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
                <Badge className="bg-green-100 text-green-700 border-green-200">
                  <Globe className="mr-2 h-4 w-4" />
                  Keamanan Online
                </Badge>

                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Tips <span className="text-green-600">Aman Berinternet</span>
                </h1>

                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Panduan praktis untuk browsing yang aman, melindungi data pribadi, dan menghindari 
                  berbagai ancaman online dalam aktivitas digital sehari-hari.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tips Keamanan Dasar */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Tips Keamanan Dasar</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Langkah-langkah fundamental yang harus diterapkan setiap pengguna internet
                </p>
              </div>

              <div className="space-y-8">
                {basicSafetyTips.map((tip, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                        <div className="flex items-start space-x-4 mb-6 lg:mb-0">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <div className="text-green-600 font-bold text-lg">{index + 1}</div>
                          </div>
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <tip.icon className="h-6 w-6 text-blue-600" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-3 group-hover:text-green-600 transition-colors">
                            {tip.title}
                          </h3>
                          <p className="text-muted-foreground mb-6">{tip.description}</p>
                          <div className="grid md:grid-cols-1 gap-3">
                            {tip.tips.map((tipItem, tipIndex) => (
                              <div key={tipIndex} className="flex items-start space-x-3">
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

        {/* Keamanan Wi-Fi dan Perangkat */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Keamanan Wi-Fi dan Perangkat</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Lindungi perangkat dan koneksi internet Anda dari berbagai ancaman
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                    <CardTitle className="text-xl flex items-center space-x-3">
                      <Wifi className="h-6 w-6 text-blue-600" />
                      <span>Keamanan Wi-Fi</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      {wifiSafetyTips.map((tip, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
                    <CardTitle className="text-xl flex items-center space-x-3">
                      <Smartphone className="h-6 w-6 text-green-600" />
                      <span>Keamanan Perangkat</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      {deviceSafetyTips.map((tip, index) => (
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
          </div>
        </section>

        {/* Keamanan Anak */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Keamanan Internet untuk Anak</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Panduan khusus untuk melindungi anak-anak dalam berinternet
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {childSafetyTips.map((category, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
                      <CardTitle className="text-xl flex items-center space-x-3">
                        <Shield className="h-6 w-6 text-orange-600" />
                        <span>{category.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
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

        {/* Tanda-tanda Bahaya */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Tanda-tanda Bahaya</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Kenali tanda-tanda jika akun atau perangkat Anda bermasalah
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {warningSignsData.map((category, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-red-500">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center space-x-3">
                        <AlertTriangle className="h-6 w-6 text-red-600" />
                        <span>{category.category}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        {category.signs.map((sign, signIndex) => (
                          <div key={signIndex} className="flex items-start space-x-3">
                            <Eye className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{sign}</span>
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

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold">
                Internet Aman untuk Semua
              </h2>
              <p className="text-xl text-green-100">
                Dengan menerapkan tips keamanan ini, Anda dapat menikmati internet dengan lebih aman 
                dan melindungi diri dari berbagai ancaman online.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-green-600 hover:bg-green-50"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Panduan PDF
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-green-600"
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

export default TipsAmanBerinternet;
