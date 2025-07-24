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
  Users,
  Settings,
  FileText,
  Globe,
  Lock,
  AlertTriangle,
  Target,
  Briefcase,
  BookCopy,
  Crosshair,
  UserRoundCheck,
  UserRoundPlus,
  UserRoundCog,
} from "lucide-react";
import { Link } from "react-router-dom";

const TugasFungsi = () => {
  const visi =
    "MEMBANGUN DAN MENJAGA KEAMANAN SIBER NASIONAL DENGAN MENSINERGIKAN BERBAGAI PEMANGKU KEPENTINGAN UNTUK IKUT SERTA MEWUJUDKAN KEAMANAN NASIONAL DAN MENINGKATKAN PERTUMBUHAN EKONOMI NASIONAL.";

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
                <UserRoundCog className="mr-2 h-4 w-4" />
                Peran Lembaga
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Tugas, Fungsi & <span className="text-blue-600">Strategi</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Landasan operasional dan strategis BSSN dalam menjaga kedaulatan dan keamanan ruang siber Indonesia.
              </p>
            </div>
          </div>
        </section>

        {/* Tugas Pokok */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Tugas Pokok</h2>
              <p className="text-muted-foreground">
                Tugas utama yang diemban BSSN dalam menyelenggarakan pemerintahan.
              </p>
            </div>
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <mainTask.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-blue-600">{mainTask.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{mainTask.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Fungsi BSSN */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Fungsi BSSN</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Dalam melaksanakan tugas tersebut, BSSN menyelenggarakan fungsi-fungsi berikut:
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {keyFunctions.map((func, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors flex-shrink-0">
                        <func.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <CardTitle className="text-lg leading-tight">{func.title}</CardTitle>
                          <Badge variant="outline" className="text-xs ml-2">{func.scope}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm leading-relaxed">{func.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Dasar Hukum */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Dasar Hukum</h2>
              <p className="text-muted-foreground">
                Landasan hukum yang menjadi dasar pelaksanaan tugas dan fungsi BSSN.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {legalBasis.map((legal, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Badge className="mt-1 bg-blue-100 text-blue-700">{legal.type}</Badge>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{legal.title}</h3>
                        <p className="text-sm text-muted-foreground">{legal.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* --- BAGIAN STRATEGI KEAMANAN SIBER --- */}
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
        
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle>Pengantar Strategi Keamanan Siber Indonesia</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground leading-relaxed text-justify">
                <p>
                  Keamanan siber telah menjadi isu prioritas seluruh negara di dunia semenjak teknologi informasi dan komunikasi dimanfaatkan dalam berbagai aspek kehidupan, baik dalam aspek sosial, ekonomi, hukum, organisasi, kesehatan, pendidikan, budaya, pemerintahan, keamanan, pertahanan, dan lain sebagainya. Berbanding lurus dengan tingginya tingkat pemanfaatan teknologi informasi dan komunikasi tersebut, tingkat risiko dan ancaman penyalahgunaan teknologi informasi dan komunikasi juga semakin tinggi dan semakin kompleks.
Menyikapi fenomena tersebut, untuk menciptakan lingkungan siber strategis dan penyelenggaraan sistem elektronik yang aman, andal dan terpercaya; memajukan dan menumbuhkan ekonomi digital dengan meningkatkan daya saing dan inovasi siber; serta membangun kesadaran dan kepekaan terhadap ketahanan dan keamanan nasional dalam ruang siber, pemerintah melalui Peraturan Presiden Nomor 53 Tahun 2017 tentang Badan Siber dan Sandi Negara (BSSN) dan peraturan perubahannya Peraturan Presiden Nomor 133 Tahun 2017 membentuk BSSN yang bertugas melaksanakan keamanan siber secara efektif dan efisien dengan memanfaatkan, mengembangkan dan mengonsolidasikan semua unsur yang terkait dengan keamanan siber nasional.
BSSN menyusun Strategi Keamanan Siber Indonesia sebagai acuan bersama seluruh pemangku kepentingan keamanan siber nasional dalam menyusun dan mengembangkan kebijakan keamanan siber di instansi masing-masing. Strategi keamanan siber nasional disusun selaras dengan nilai dasar kehidupan berbangsa dan bernegara, yaitu: Kedaulatan, Kemandirian, Keamanan, Kebersamaan, dan Adaptif. Visi Strategi Keamanan Siber Indonesia adalah:
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
                  Tujuan strategis Strategi Keamanan Siber Indonesia adalah tercapainya ketahanan siber, keamanan layanan publik, penegakan hukum siber, budaya keamanan siber dan keamanan siber pada ekonomi digital.  Strategi Keamanan Informasi Indonesia ini diharapkan dapat menjadi salah satu fondasi kepercayaan dunia kepada Indonesia dalam berbagai forum keamanan siber internasional. Strategi Keamanan Siber Indonesia merupakan sumbangsih Bangsa Indonesia dalam mendorong terciptanya perdamaian dunia.
                </p>
                <div className="pt-4 text-right">
                    <p className="font-semibold">Kepala Badan Siber dan Sandi Negara</p>
                    <p className="">Hinsa Siburian</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        {/* --- BAGIAN RUANG LINGKUP KEWENANGAN (DIKEMBALIKAN) --- */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Ruang Lingkup Kewenangan</h2>
                <p className="text-muted-foreground">
                  Area kewenangan dan tanggung jawab BSSN dalam menjaga keamanan siber nasional.
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
                      Melindungi infrastruktur informasi vital nasional di sektor strategis.
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
                      Mengamankan data dan informasi strategis kepentingan nasional.
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
                      Mengkoordinasikan keamanan siber dengan berbagai stakeholder.
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
        
        
      </main>

      <Footer />
    </div>
  );
};

export default TugasFungsi;