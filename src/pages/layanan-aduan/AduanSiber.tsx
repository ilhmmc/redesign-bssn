import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Shield,
  FileText,
  Mail,
  Phone,
  MessageCircle,
  Clock,
  AlertTriangle,
  CheckCircle,
  Users,
  Globe,
  Shrink,
  ShieldAlert,
} from "lucide-react";
import { Link } from "react-router-dom";

const AduanSiber = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-government-50 via-background to-cyber-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-government-100 text-government-700 border-government-200">
                <ShieldAlert className="mr-2 h-4 w-4" />
                Pusat Kontak Siber Nasional
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                <span className="gradient-text">Aduan Siber</span>
              </h1>

              <p className="text-lg text-muted-foreground">
                Layanan Pusat Kontak Siber Nasional untuk melaporkan insiden
                keamanan siber dan mendapatkan bantuan teknis keamanan informasi
              </p>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Jenis Layanan</h2>
                <p className="text-muted-foreground">
                  Pusat Kontak Siber Nasional menyediakan dua jenis layanan
                  utama
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <Card className="border-2 border-red-200">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <AlertTriangle className="h-6 w-6 text-red-600" />
                      <span>Aduan Siber</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Laporkan insiden keamanan siber, serangan terhadap sistem
                      elektronik, atau aktivitas mencurigakan di dunia maya yang
                      memerlukan penanganan khusus.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-cyber-200">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Globe className="h-6 w-6 text-cyber-600" />
                      <span>Diseminasi Informasi</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Penyebaran informasi keamanan siber, ancaman terbaru, dan
                      rekomendasi keamanan kepada pemangku kepentingan terkait.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Persyaratan
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="h-6 w-6 text-government-600" />
                      <span>Persyaratan Administrasi</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>
                          Identitas Pengguna Layanan (foto kartu identitas:
                          KTP/SIM/paspor/identitas lainnya)
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Form layanan Pusat Kontak Siber Nasional</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Shield className="h-6 w-6 text-cyber-600" />
                      <span>Persyaratan Teknis</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>
                          Informasi aset dan sistem elektronik terdampak
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Topologi jaringan</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Informasi kerentanan</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Dokumen analisa dampak risiko</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Data dukung lain yang diperlukan</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Process Flow Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Sistem, Mekanisme, dan Prosedur
              </h2>

              {/* General Process Flow */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>
                    1. Alur Proses Layanan Pusat Kontak Siber Nasional
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {[
                      "Pengguna Layanan menghubungi Pusat Kontak Siber Nasional melalui kanal yang telah disediakan",
                      "Pusat Kontak Siber Nasional mengakses media layanan dan membuka percakapan dengan Pengguna Layanan",
                      "Pusat Kontak Siber Nasional melakukan konfirmasi yang bersifat teknis kepada Pengguna Layanan terkait layanan yang ingin didapatkan",
                      "Pusat Kontak Siber Nasional melakukan analisis permasalahan yang terjadi dan membuka Tiket layanan",
                      "Pusat Kontak Siber Nasional memberikan respons hasil analisis awal terkait permohonan layanan dari Pengguna Layanan",
                      "Pusat Kontak Siber Nasional membangun komunikasi dan mendiseminasikan informasi dari Pelapor ke Pemangku Kepentingan terkait",
                      "Pengguna Layanan melakukan pengisian survei layanan Pusat Kontak Siber Nasional yang telah disediakan",
                    ].map((step, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-government-100 rounded-full flex items-center justify-center text-government-700 font-semibold text-sm flex-shrink-0">
                          {String.fromCharCode(97 + index)}
                        </div>
                        <p className="text-sm">{step}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Cyber Incident Reporting Mechanism */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>2. Mekanisme Aduan Siber</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {[
                      "Pusat Kontak Siber Nasional menerima Aduan Siber dari Pelapor melalui kanal resmi",
                      "Pusat Kontak Siber Nasional melakukan verifikasi kelengkapan dokumen persyaratan Aduan Siber dari Pelapor",
                      "Pusat Kontak Siber Nasional melakukan analisis awal terkait Aduan Siber yang dilaporkan berdasarkan data/pengetahuan/pengalaman yang dimiliki sesuai dengan fungsi anggota Tim",
                      "Pusat Kontak Siber Nasional melakukan pencatatan dengan memasukkan data Aduan Siber yang diterima dari Pelapor ke dalam Tiket",
                      "Pusat Kontak Siber Nasional memberikan respon awal terhadap Aduan Siber yang disampaikan oleh Pelapor dengan melampirkan nomor Tiket",
                      "Pusat Kontak Siber Nasional melakukan diseminasi informasi yang dinyatakan valid berdasarkan analisis, kepada Pemangku Kepentingan",
                      "Pusat Kontak Siber Nasional melakukan pemantauan penanganan Tiket dan melaporkan perkembangannya kepada ketua tim",
                      "Tim Pusat Kontak Siber Nasional melakukan penutupan Tiket ketika Aduan Siber telah ditangani Pemangku Kepentingan",
                    ].map((step, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-700 font-semibold text-sm flex-shrink-0">
                          {String.fromCharCode(97 + index)}
                        </div>
                        <p className="text-sm">{step}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Information Dissemination Mechanism */}
              <Card>
                <CardHeader>
                  <CardTitle>3. Mekanisme Diseminasi Informasi</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {[
                      "Pusat Kontak Siber Nasional menyusun dokumen diseminasi informasi berdasarkan hasil analisis internal atau dari Pelapor",
                      "Pusat Kontak Siber Nasional melakukan verifikasi kontak Pemangku Kepentingan",
                      "Pusat Kontak Siber Nasional melakukan pengamanan dokumen diseminasi informasi yang memiliki kategori TLP:RED dan TLP:AMBER",
                      "Pusat Kontak Siber Nasional mengirimkan dokumen diseminasi informasi kepada Pemangku Kepentingan dan unit kerja terkait di internal Badan melalui kanal layanan publik",
                      "Pusat Kontak Siber Nasional melakukan pencatatan pengiriman dokumen diseminasi informasi pada sistem Tiket",
                      "Pemangku Kepentingan memberikan respons dan konfirmasi penerimaan dokumen diseminasi informasi",
                      "Pusat Kontak Siber Nasional melakukan pemantauan Tiket dan melaporkan perkembangannya kepada ketua tim",
                      "Tim Pusat Kontak Siber Nasional melakukan penutupan Tiket ketika dokumen diseminasi informasi telah diterima Pemangku Kepentingan",
                    ].map((step, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-cyber-100 rounded-full flex items-center justify-center text-cyber-700 font-semibold text-sm flex-shrink-0">
                          {String.fromCharCode(97 + index)}
                        </div>
                        <p className="text-sm">{step}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Level Agreement */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Waktu Penyelesaian
              </h2>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-6 w-6 text-government-600" />
                    <span>
                      Perjanjian Tingkat Layanan (Service Level Agreement)
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-semibold text-sm flex-shrink-0">
                        24h
                      </div>
                      <p className="text-sm">
                        <strong>Verifikasi persyaratan layanan</strong> Pusat
                        Kontak Siber Nasional dilaksanakan paling lambat
                        <span className="font-semibold text-green-700">
                          {" "}
                          24 (dua puluh empat) jam
                        </span>{" "}
                        sejak dokumen persyaratan diterima
                      </p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-semibold text-sm flex-shrink-0">
                        72h
                      </div>
                      <p className="text-sm">
                        <strong>Respons analisis awal</strong> Pusat Kontak
                        Siber Nasional memberikan respons hasil analisis awal
                        terkait permohonan layanan paling lambat
                        <span className="font-semibold text-blue-700">
                          {" "}
                          72 (tujuh puluh dua) jam
                        </span>{" "}
                        sejak permohonan dinyatakan valid
                      </p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-semibold text-sm flex-shrink-0">
                        72h
                      </div>
                      <p className="text-sm">
                        <strong>Form survei layanan</strong> disampaikan kepada
                        Pengguna Layanan paling lambat
                        <span className="font-semibold text-purple-700">
                          {" "}
                          72 (tujuh puluh dua) jam
                        </span>{" "}
                        sejak Tiket dinyatakan selesai
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Channels */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Layanan Online - Kanal Layanan
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Mail className="h-12 w-12 text-red-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Surat elektronik resmi
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="mailto:bantuan70@bssn.go.id">
                        bantuan70@bssn.go.id
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Telegram</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Pesan instan
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <a
                        href="https://t.me/Id_SIRTII"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @Id_SIRTII
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">WhatsApp</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Pesan instan
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <a
                        href="https://wa.me/6281110652018"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        0811-1065-2018
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Phone className="h-12 w-12 text-government-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Telepon Seluler</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Panggilan langsung
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="tel:081110652018">0811-1065-2018</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Phone className="h-12 w-12 text-cyber-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Saluran Khusus</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Hotline BSSN
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="tel:183">183</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Globe className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Portal Aduan Siber</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Website resmi
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <a
                        href="https://aduansiber.bssn.go.id"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        aduansiber.bssn.go.id
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-12">
                <p className="text-muted-foreground mb-6">
                  Pilih kanal yang paling sesuai dengan kebutuhan Anda untuk
                  melaporkan insiden keamanan siber
                </p>
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700"
                  asChild
                >
                  <Link to="/kontak#report-form">
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    Buat Laporan Aduan Siber
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

export default AduanSiber;
