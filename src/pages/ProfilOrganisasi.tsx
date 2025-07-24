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
  Users,
  Target,
  Award,
  Calendar,
  MapPin,
  Building,
  TrendingUp,
  Globe,
  Lock,
  Briefcase,
} from "lucide-react";
import { Link } from "react-router-dom";

const ProfilOrganisasi = () => {
  const keyStats = [
    {
      icon: Users,
      value: "1,200+",
      label: "Pegawai",
      description: "Profesional keamanan siber",
    },
    {
      icon: Building,
      value: "3",
      label: "Kantor Regional",
      description: "Di seluruh Indonesia",
    },
    {
      icon: Shield,
      value: "24/7",
      label: "Monitoring",
      description: "Keamanan siber nasional",
    },
    {
      icon: Award,
      value: "50+",
      label: "Sertifikasi",
      description: "Standar internasional",
    },
  ];

  const timeline = [
    {
      year: "2017",
      title: "Pendirian BSSN",
      description:
        "Dibentuk melalui Peraturan Presiden No. 53 Tahun 2017 sebagai lembaga pemerintah non-kementerian.",
    },
    {
      year: "2018",
      title: "Operasional Penuh",
      description:
        "Mulai beroperasi penuh dengan struktur organisasi lengkap dan sistem monitoring nasional.",
    },
    {
      year: "2020",
      title: "Ekspansi Digital",
      description:
        "Pengembangan sistem keamanan siber untuk mendukung transformasi digital nasional.",
    },
    {
      year: "2024",
      title: "Era Inovasi",
      description:
        "Implementasi AI dan machine learning untuk deteksi ancaman cyber yang lebih canggih.",
    },
  ];

  const organizationStructure = [
    {
      title: "Kepala BSSN",
      description: "Pimpinan tertinggi organisasi",
      icon: Briefcase,
    },
    {
      title: "Deputi Bidang Identifikasi",
      description: "Pengelolaan identitas digital",
      icon: Users,
    },
    {
      title: "Deputi Bidang Proteksi",
      description: "Perlindungan infrastruktur siber",
      icon: Shield,
    },
    {
      title: "Deputi Bidang Deteksi",
      description: "Deteksi dan analisis ancaman",
      icon: Target,
    },
    {
      title: "Deputi Bidang Respons",
      description: "Tanggap darurat siber",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-government-50 via-background to-cyber-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                  <Users className="mr-2 h-4 w-4" />
                  Profil Organisasi
                </Badge>
                <Badge variant="outline">Est. 1946</Badge>
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Badan Siber dan{" "}
                <span className="gradient-text">Sandi Negara</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Lembaga pemerintah non-kementerian yang bertanggung jawab atas
                keamanan siber dan persandian nasional Indonesia sejak 1946.
              </p>
            </div>
          </div>
        </section>

        {/* Key Statistics */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {keyStats.map((stat, index) => (
                <Card
                  key={index}
                  className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-government-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-government-200 transition-colors">
                      <stat.icon className="h-6 w-6 text-government-600" />
                    </div>
                    <div className="text-3xl font-bold text-government-600 mb-1">
                      {stat.value}
                    </div>
                    <div className="font-medium mb-1">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Visi & Misi</h2>
                <p className="text-muted-foreground">
                  Fondasi yang mengarahkan setiap langkah BSSN
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="border-l-4 border-l-government-500">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Target className="h-6 w-6 mr-3 text-government-600" />
                      Visi
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      "Terwujudnya keamanan siber nasional untuk mendukung
                      kedaulatan negara dan kemajuan peradaban bangsa Indonesia
                      di dunia digital."
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-cyber-500">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Shield className="h-6 w-6 mr-3 text-cyber-600" />
                      Misi
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-cyber-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                        Melindungi infrastruktur informasi vital nasional dari
                        ancaman siber
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-cyber-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                        Mengembangkan kapasitas keamanan siber nasional secara
                        berkelanjutan
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-cyber-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                        Membangun ekosistem keamanan siber yang tangguh dan
                        terintegrasi
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Organization Structure */}
        <section className="py-16 bg-gradient-to-r from-government-50/50 to-cyber-50/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Struktur Organisasi</h2>
                <p className="text-muted-foreground">
                  Organisasi yang efektif untuk menjaga keamanan siber nasional
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {organizationStructure.map((unit, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 bg-gradient-to-br from-government-500 to-cyber-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <unit.icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">
                        {unit.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {unit.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Sejarah Perjalanan</h2>
                <p className="text-muted-foreground">
                  Milestone penting dalam pengembangan keamanan siber Indonesia
                </p>
              </div>

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-government-500 to-cyber-500 rounded-full flex items-center justify-center text-white font-bold">
                        {item.year.slice(-2)}
                      </div>
                    </div>
                    <Card className="flex-1">
                      <CardHeader className="pb-3">
                        <div className="flex items-center space-x-3">
                          <Badge variant="outline">{item.year}</Badge>
                          <CardTitle className="text-lg">
                            {item.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-gradient-to-r from-government-50 to-cyber-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Informasi Kontak</h2>
                <p className="text-muted-foreground">
                  Hubungi kami untuk informasi lebih lanjut
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-government-600" />
                      Kantor Pusat
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="font-medium">Alamat:</p>
                      <p className="text-muted-foreground">
                        Jl. Harsono RM No. 70, Ragunan
                        <br />
                        Pasar Minggu, Jakarta Selatan 12550
                        <br />
                        Indonesia
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Telepon:</p>
                      <p className="text-muted-foreground">(021) 781-8444</p>
                    </div>
                    <div>
                      <p className="font-medium">Email:</p>
                      <p className="text-muted-foreground">kontak@bssn.go.id</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Globe className="h-5 w-5 mr-2 text-cyber-600" />
                      Informasi Umum
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="font-medium">Website Resmi:</p>
                      <p className="text-muted-foreground">www.bssn.go.id</p>
                    </div>
                    <div>
                      <p className="font-medium">Hotline Darurat:</p>
                      <p className="text-destructive font-semibold">1500-567</p>
                      <p className="text-xs text-muted-foreground">
                        (24 jam, 7 hari seminggu)
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Media Sosial:</p>
                      <div className="text-muted-foreground text-sm space-y-1">
                        <p>@bssn_ri (Instagram)</p>
                        <p>@bssn_ri (Twitter)</p>
                        <p>Badan Siber dan Sandi Negara (Facebook)</p>
                      </div>
                    </div>
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

export default ProfilOrganisasi;
