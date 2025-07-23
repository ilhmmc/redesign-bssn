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
  GraduationCap,
  Eye,
  MessageSquare,
  Users,
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  BookOpen,
  Phone,
  Shield,
  FileText,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";

const TipsGuruResponBullying = () => {
  const identificationSigns = [
    {
      category: "Tanda-tanda pada Korban",
      signs: [
        "Perubahan perilaku mendadak (menjadi pendiam, agresif, atau menghindari sekolah)",
        "Penurunan prestasi akademik yang signifikan",
        "Keengganan menggunakan komputer atau gadget",
        "Menunjukkan kecemasan atau ketakutan saat menerima pesan",
        "Keluhan fisik tanpa sebab medis yang jelas (sakit kepala, sakit perut)",
        "Kehilangan teman atau isolasi sosial"
      ]
    },
    {
      category: "Tanda-tanda pada Pelaku",
      signs: [
        "Perilaku agresif atau dominatif terhadap teman sebaya",
        "Kurangnya empati terhadap perasaan orang lain",
        "Menggunakan teknologi secara berlebihan atau sembunyi-sembunyi",
        "Menunjukkan kegembiraan saat melihat orang lain dalam kesulitan",
        "Memiliki banyak akun media sosial atau akun anonim",
        "Riwayat perilaku bullying di kehidupan nyata"
      ]
    }
  ];

  const responseStrategies = [
    {
      title: "Respon Segera",
      description: "Langkah-langkah yang harus diambil segera setelah mengetahui insiden cyberbullying",
      icon: Clock,
      steps: [
        "Dengarkan laporan siswa dengan seksama tanpa menghakimi",
        "Dokumentasikan semua bukti yang dilaporkan",
        "Berikan dukungan emosional kepada korban",
        "Jangan menyalahkan korban atas kejadian yang dialami",
        "Pastikan keamanan siswa secara langsung",
        "Laporkan ke kepala sekolah dan orangtua"
      ]
    },
    {
      title: "Investigasi dan Dokumentasi",
      description: "Proses investigasi yang terstruktur untuk mengumpulkan fakta dan bukti",
      icon: FileText,
      steps: [
        "Kumpulkan bukti digital (screenshot, log chat, dll)",
        "Wawancarai semua pihak yang terlibat secara terpisah",
        "Catat waktu, tempat, dan detail kejadian",
        "Identifikasi saksi dan dapatkan kesaksian mereka",
        "Simpan semua dokumentasi dengan aman",
        "Buat laporan tertulis yang komprehensif"
      ]
    },
    {
      title: "Intervensi dan Mediasi",
      description: "Proses penyelesaian yang melibatkan semua pihak untuk mencapai resolusi",
      icon: Users,
      steps: [
        "Adakan pertemuan dengan pelaku untuk membahas dampak tindakannya",
        "Fasilitasi proses permintaan maaf yang tulus jika memungkinkan",
        "Buat rencana tindakan untuk mencegah pengulangan",
        "Berikan konseling atau dukungan psikologis",
        "Monitor perkembangan situasi secara berkala",
        "Libatkan orangtua dalam proses penyelesaian"
      ]
    },
    {
      title: "Dukungan dan Pemulihan",
      description: "Memberikan dukungan berkelanjutan untuk pemulihan korban",
      icon: Shield,
      steps: [
        "Berikan dukungan emosional dan psikologis berkelanjutan",
        "Bantu korban membangun kembali kepercayaan diri",
        "Ajarkan strategi coping dan resiliensi",
        "Monitor prestasi akademik dan sosial",
        "Hubungkan dengan layanan konseling profesional jika diperlukan",
        "Ciptakan lingkungan yang mendukung dan aman"
      ]
    }
  ];

  const preventionStrategies = [
    "Integrasikan pendidikan digital citizenship dalam kurikulum",
    "Buat kebijakan sekolah yang jelas tentang penggunaan teknologi",
    "Adakan workshop tentang keamanan online secara berkala",
    "Ciptakan budaya sekolah yang menghargai keberagaman",
    "Latih guru untuk mengenali tanda-tanda cyberbullying",
    "Buat sistem pelaporan yang mudah diakses siswa",
    "Kolaborasi dengan orangtua dalam pengawasan digital",
    "Gunakan teknologi untuk monitoring aktivitas online siswa di sekolah"
  ];

  const emergencyContacts = [
    {
      service: "Polisi",
      number: "110",
      description: "Untuk kasus cyberbullying yang melibatkan ancaman serius"
    },
    {
      service: "Komisi Perlindungan Anak Indonesia (KPAI)",
      number: "021-319-015-56",
      description: "Untuk konsultasi dan pelaporan kasus bullying anak"
    },
    {
      service: "Sejiwa (Yayasan Semai Jiwa Amini)",
      number: "119 ext 8",
      description: "Layanan konseling dan dukungan psikologis"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-background to-purple-50 py-16">
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
                <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Pendidikan
                </Badge>

                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Tips untuk Guru dalam <span className="text-blue-600">Merespon Bullying</span>
                </h1>

                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Strategi praktis bagi pendidik untuk mengenali, menangani, dan mencegah bullying 
                  di lingkungan sekolah, baik yang terjadi secara langsung maupun di dunia digital.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pengenalan Tanda-tanda */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Mengenali Tanda-tanda Bullying</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Penting bagi guru untuk dapat mengidentifikasi tanda-tanda bullying pada siswa, 
                  baik pada korban maupun pelaku
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {identificationSigns.map((category, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                      <CardTitle className="text-xl flex items-center space-x-3">
                        <Eye className="h-6 w-6 text-blue-600" />
                        <span>{category.category}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        {category.signs.map((sign, signIndex) => (
                          <div key={signIndex} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
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

        {/* Strategi Respon */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Strategi Respon Terstruktur</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Panduan langkah demi langkah untuk merespon kasus bullying dengan efektif dan profesional
                </p>
              </div>

              <div className="space-y-8">
                {responseStrategies.map((strategy, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                        <div className="flex items-center space-x-4 mb-6 lg:mb-0">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <div className="text-blue-600 font-bold text-lg">{index + 1}</div>
                          </div>
                          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <strategy.icon className="h-6 w-6 text-purple-600" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                            {strategy.title}
                          </h3>
                          <p className="text-muted-foreground mb-6">{strategy.description}</p>
                          <div className="grid md:grid-cols-2 gap-3">
                            {strategy.steps.map((step, stepIndex) => (
                              <div key={stepIndex} className="flex items-start space-x-3">
                                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{step}</span>
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

        {/* Strategi Pencegahan */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Strategi Pencegahan</h2>
                <p className="text-muted-foreground">
                  Langkah-langkah proaktif untuk mencegah terjadinya bullying di lingkungan sekolah
                </p>
              </div>

              <Card>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {preventionStrategies.map((strategy, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{strategy}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Kontak Darurat */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Kontak Darurat</h2>
                <p className="text-muted-foreground">
                  Nomor penting yang dapat dihubungi untuk mendapatkan bantuan profesional
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {emergencyContacts.map((contact, index) => (
                  <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-lg font-bold mb-2">{contact.service}</h3>
                      <div className="text-2xl font-bold text-blue-600 mb-3">{contact.number}</div>
                      <p className="text-sm text-muted-foreground">{contact.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold">
                Guru sebagai Garda Depan Perlindungan Anak
              </h2>
              <p className="text-xl text-blue-100">
                Peran guru sangat penting dalam menciptakan lingkungan belajar yang aman dan mendukung. 
                Dengan pengetahuan dan strategi yang tepat, kita dapat melindungi setiap siswa dari bullying.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50"
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
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                  asChild
                >
                  <Link to="/kontak">
                    <Phone className="h-5 w-5 mr-2" />
                    Konsultasi dengan Ahli
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

export default TipsGuruResponBullying;
