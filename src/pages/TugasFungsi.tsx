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
  Search,
  Zap,
  Users,
  Settings,
  FileText,
  Globe,
  Lock,
  AlertTriangle,
  CheckCircle,
  Target,
  Briefcase,
} from "lucide-react";
import { Link } from "react-router-dom";

const TugasFungsi = () => {
  const mainTask = {
    title: "Tugas Pokok BSSN",
    description:
      "BSSN mempunyai tugas melaksanakan tugas pemerintahan di bidang keamanan siber dan sandi untuk membantu Presiden dalam menyelenggarakan pemerintahan.",
    icon: Target,
  };

  const keyFunctions = [
    {
      icon: FileText,
      title: "Perumusan dan Penetapan Kebijakan Teknis",
      description:
        "Merumuskan dan menetapkan kebijakan teknis di bidang keamanan siber dan sandi",
      scope: "Kebijakan",
    },
    {
      icon: Settings,
      title: "Pelaksanaan Kebijakan Teknis",
      description:
        "Melaksanakan kebijakan teknis di bidang keamanan siber dan sandi",
      scope: "Implementasi",
    },
    {
      icon: Globe,
      title: "Penyusunan Norma, Standar, Prosedur, dan Kriteria",
      description:
        "Menyusun norma, standar, prosedur, dan kriteria di bidang persandian",
      scope: "Standardisasi",
    },
    {
      icon: Users,
      title: "Bimbingan Teknis dan Supervisi",
      description:
        "Melaksanakan bimbingan teknis dan supervisi di bidang persandian",
      scope: "Supervisi",
    },
    {
      icon: Briefcase,
      title: "Koordinasi dan Pembinaan Organisasi",
      description:
        "Koordinasi pelaksanaan tugas, pembinaan, dan dukungan administrasi kepada seluruh unsur organisasi di lingkungan BSSN",
      scope: "Koordinasi",
    },
    {
      icon: Lock,
      title: "Pengelolaan Barang Milik Negara",
      description:
        "Pengelolaan barang milik negara yang menjadi tanggung jawab BSSN",
      scope: "Pengelolaan",
    },
    {
      icon: Shield,
      title: "Dukungan Substantif",
      description:
        "Pelaksanaan dukungan yang bersifat substantif kepada seluruh unsur organisasi di lingkungan BSSN",
      scope: "Dukungan",
    },
    {
      icon: Search,
      title: "Pengawasan Pelaksanaan Tugas",
      description: "Pengawasan atas pelaksanaan tugas di lingkungan BSSN",
      scope: "Pengawasan",
    },
  ];

  const legalBasis = [
    {
      title: "Peraturan Presiden No. 53 Tahun 2017",
      description: "Tentang Badan Siber dan Sandi Negara",
      type: "Perpres",
    },
    {
      title: "UU No. 11 Tahun 2008",
      description: "Tentang Informasi dan Transaksi Elektronik",
      type: "UU",
    },
    {
      title: "PP No. 71 Tahun 2019",
      description: "Tentang Penyelenggaraan Sistem dan Transaksi Elektronik",
      type: "PP",
    },
    {
      title: "Perpres No. 82 Tahun 2022",
      description: "Tentang Keamanan Siber Nasional",
      type: "Perpres",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-background to-cyan-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                <Target className="mr-2 h-4 w-4" />
                Tugas & Fungsi BSSN
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Tugas Pokok dan <span className="text-blue-600">Fungsi</span>{" "}
                BSSN
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                BSSN menjalankan tugas pokok dan fungsi berdasarkan kerangka
                kerja keamanan siber yang komprehensif untuk melindungi
                kepentingan nasional di ruang siber.
              </p>
            </div>
          </div>
        </section>

        {/* Main Task */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Tugas Pokok</h2>
                <p className="text-muted-foreground">
                  Tugas utama yang diemban BSSN dalam menyelenggarakan
                  pemerintahan
                </p>
              </div>

              <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <mainTask.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-blue-600">
                        {mainTask.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {mainTask.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Functions */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Fungsi BSSN</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Dalam melaksanakan tugas tersebut, BSSN menyelenggarakan
                fungsi-fungsi berikut
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {keyFunctions.map((func, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors flex-shrink-0">
                        <func.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <CardTitle className="text-lg leading-tight">
                            {func.title}
                          </CardTitle>
                          <Badge variant="outline" className="text-xs ml-2">
                            {func.scope}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {func.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Basis */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Dasar Hukum</h2>
                <p className="text-muted-foreground">
                  Landasan hukum yang menjadi dasar pelaksanaan tugas dan fungsi
                  BSSN
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {legalBasis.map((legal, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Badge className="mt-1 bg-blue-100 text-blue-700">
                          {legal.type}
                        </Badge>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2">
                            {legal.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {legal.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Authority Scope */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Ruang Lingkup Kewenangan
                </h2>
                <p className="text-muted-foreground">
                  Area kewenangan dan tanggung jawab BSSN dalam menjaga keamanan
                  siber nasional
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardHeader>
                    <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle>Infrastruktur Vital</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Melindungi infrastruktur informasi vital nasional di
                      sektor strategis
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Sektor Pemerintahan</li>
                      <li>• Sektor Keuangan</li>
                      <li>• Sektor Energi</li>
                      <li>• Sektor Transportasi</li>
                      <li>• Sektor Telekomunikasi</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <CardTitle>Data Strategis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Mengamankan data dan informasi strategis kepentingan
                      nasional
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Data Pemerintah</li>
                      <li>• Informasi Pertahanan</li>
                      <li>• Data Ekonomi Nasional</li>
                      <li>• Informasi Publik</li>
                      <li>• Data Pribadi Warga</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <CardTitle>Koordinasi Nasional</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Mengkoordinasikan keamanan siber dengan berbagai
                      stakeholder
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Kementerian/Lembaga</li>
                      <li>• Pemerintah Daerah</li>
                      <li>• Sektor Swasta</li>
                      <li>• Perguruan Tinggi</li>
                      <li>• Organisasi Internasional</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold">
                Berpartisipasi dalam Keamanan Siber Nasional
              </h2>
              <p className="text-xl text-blue-100">
                Keamanan siber adalah tanggung jawab bersama. Mari
                berpartisipasi aktif dalam menjaga keamanan siber Indonesia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Laporkan Insiden
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  <Link to="/layanan">Pelajari Layanan Kami</Link>
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

export default TugasFungsi;
