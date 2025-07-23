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
  Shield,
  AlertTriangle,
  Eye,
  MessageSquare,
  Lock,
  ArrowLeft,
  CheckCircle,
  Users,
  Phone,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";

const CaraMengatasiCyberbullying = () => {
  const stepsPrevention = [
    {
      title: "Kenali Tanda-tanda Cyberbullying",
      description: "Pelajari berbagai bentuk cyberbullying seperti pelecehan online, penyebaran rumor, ancaman, dan pengucilan di media sosial.",
      icon: Eye,
      tips: [
        "Komentar atau pesan yang menyakitkan secara berulang",
        "Penyebaran foto atau video tanpa izin",
        "Pembuatan akun palsu untuk melecehkan",
        "Pengucilan dari grup online atau game"
      ]
    },
    {
      title: "Jangan Merespons dengan Emosi",
      description: "Hindari membalas dengan kemarahan atau melakukan serangan balik yang dapat memperburuk situasi.",
      icon: MessageSquare,
      tips: [
        "Ambil waktu untuk tenang sebelum merespons",
        "Jangan membalas dengan kata-kata kasar",
        "Hindari menyebarkan konten yang memprovokasi",
        "Minta bantuan orang dewasa atau teman yang dipercaya"
      ]
    },
    {
      title: "Dokumentasikan Bukti",
      description: "Simpan semua bukti cyberbullying untuk keperluan pelaporan ke pihak berwenang.",
      icon: Lock,
      tips: [
        "Screenshot pesan, komentar, atau postingan yang menyakitkan",
        "Catat tanggal, waktu, dan platform dimana kejadian terjadi",
        "Simpan URL atau link ke konten yang bermasalah",
        "Backup semua bukti ke penyimpanan yang aman"
      ]
    },
    {
      title: "Laporkan dan Blokir Pelaku",
      description: "Gunakan fitur report dan block yang tersedia di platform media sosial untuk melindungi diri.",
      icon: Shield,
      tips: [
        "Laporkan akun pelaku ke administrator platform",
        "Blokir atau batasi akses pelaku ke profil Anda",
        "Atur privasi akun untuk membatasi siapa yang bisa menghubungi",
        "Laporkan ke pihak sekolah jika pelaku adalah teman sekelas"
      ]
    }
  ];

  const emergencySteps = [
    {
      title: "Hubungi Orang Dewasa yang Dipercaya",
      description: "Segera beritahu orangtua, guru, atau konselor tentang situasi yang dialami.",
      icon: Users
    },
    {
      title: "Laporkan ke Pihak Berwenang",
      description: "Jika cyberbullying melibatkan ancaman serius, segera hubungi polisi atau layanan darurat.",
      icon: Phone
    },
    {
      title: "Cari Dukungan Psikologis",
      description: "Jangan ragu untuk mencari bantuan profesional jika cyberbullying berdampak pada kesehatan mental.",
      icon: Shield
    }
  ];

  const preventionTips = [
    "Jaga privasi akun media sosial dengan pengaturan yang tepat",
    "Hati-hati dalam berbagi informasi pribadi di internet",
    "Berpikir dua kali sebelum memposting atau mengirim sesuatu",
    "Laporkan konten yang tidak pantas atau menyakitkan",
    "Jadilah bystander yang positif - bela korban cyberbullying",
    "Edukasi diri tentang etika digital dan komunikasi online yang sehat"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-50 via-background to-orange-50 py-16">
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
                <Badge className="bg-red-100 text-red-700 border-red-200">
                  <Shield className="mr-2 h-4 w-4" />
                  Perlindungan Anak
                </Badge>

                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Cara Mengatasi <span className="text-red-600">Cyberbullying</span>
                </h1>

                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Panduan lengkap untuk mengidentifikasi, mengatasi, dan mencegah cyberbullying 
                  di berbagai platform digital. Lindungi diri dan orang terdekat dari ancaman online.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Warning Alert */}
        <section className="py-8 bg-red-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex items-center justify-center space-x-4">
              <AlertTriangle className="h-6 w-6" />
              <p className="text-center font-semibold">
                Jika Anda atau seseorang yang Anda kenal sedang mengalami cyberbullying yang serius, 
                segera hubungi nomor darurat atau layanan konseling
              </p>
            </div>
          </div>
        </section>

        {/* Langkah-langkah Mengatasi */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Langkah-langkah Mengatasi Cyberbullying</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Ikuti panduan ini secara berurutan untuk menangani cyberbullying dengan efektif dan aman
                </p>
              </div>

              <div className="space-y-8">
                {stepsPrevention.map((step, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                        <div className="flex items-start space-x-4 mb-6 lg:mb-0">
                          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <div className="text-red-600 font-bold text-lg">{index + 1}</div>
                          </div>
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <step.icon className="h-6 w-6 text-blue-600" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-3 group-hover:text-red-600 transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground mb-6">{step.description}</p>
                          <div className="grid md:grid-cols-2 gap-3">
                            {step.tips.map((tip, tipIndex) => (
                              <div key={tipIndex} className="flex items-start space-x-3">
                                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{tip}</span>
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

        {/* Langkah Darurat */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Langkah Darurat</h2>
                <p className="text-muted-foreground">
                  Jika cyberbullying melibatkan ancaman serius atau berdampak berat pada kesehatan mental
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {emergencySteps.map((step, index) => (
                  <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <step.icon className="h-8 w-8 text-red-600" />
                      </div>
                      <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Nomor darurat yang dapat dihubungi:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700">
                      <Phone className="h-5 w-5 mr-2" />
                      Polisi: 110
                    </Button>
                    <Button variant="outline" size="lg">
                      <Phone className="h-5 w-5 mr-2" />
                      Sejiwa: 119 ext 8
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tips Pencegahan */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Tips Pencegahan</h2>
                <p className="text-muted-foreground">
                  Langkah-langkah proaktif untuk mencegah menjadi korban cyberbullying
                </p>
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

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold">
                Bersama Ciptakan Internet yang Aman
              </h2>
              <p className="text-xl text-red-100">
                Cyberbullying adalah masalah serius yang membutuhkan perhatian kita bersama. 
                Mari berperan aktif dalam menciptakan lingkungan digital yang aman dan positif.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-red-600 hover:bg-red-50"
                  asChild
                >
                  <Link to="/informasi-regulasi/edukasi-imbauan-keamanan">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Pelajari Topik Lainnya
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-red-600"
                  asChild
                >
                  <Link to="/kontak">
                    <Phone className="h-5 w-5 mr-2" />
                    Laporkan Insiden
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

export default CaraMengatasiCyberbullying;
