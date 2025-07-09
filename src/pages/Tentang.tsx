import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Users,
  Target,
  Award,
  ArrowRight,
  Building,
  Calendar,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Tentang = () => {
  const sections = [
    {
      title: "Profil Organisasi",
      description: "Sejarah, visi, misi, dan struktur organisasi BSSN",
      href: "/tentang/profil",
      icon: Building,
      color: "government",
    },
    {
      title: "Tugas & Fungsi",
      description: "Tugas pokok dan fungsi BSSN dalam keamanan siber",
      href: "/tentang/tugas-fungsi",
      icon: Target,
      color: "cyber",
    },
    {
      title: "Pimpinan",
      description: "Struktur kepemimpinan dan jajaran direksi",
      href: "/tentang/pimpinan",
      icon: Users,
      color: "primary",
    },
  ];

  const achievements = [
    {
      title: "Penghargaan Keamanan Siber Terbaik 2023",
      year: "2023",
      description:
        "Pengakuan internasional atas kontribusi dalam keamanan siber regional",
    },
    {
      title: "Sertifikasi ISO 27001",
      year: "2022",
      description: "Standar internasional manajemen keamanan informasi",
    },
    {
      title: "Kemitraan Strategis ASEAN",
      year: "2021",
      description: "Kerjasama keamanan siber dengan negara-negara ASEAN",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-government-50 via-background to-cyber-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge className="bg-government-100 text-government-700 border-government-200">
                Tentang BSSN
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Melindungi Indonesia di{" "}
                <span className="gradient-text">Era Digital</span>
              </h1>

              <p className="text-xl text-muted-foreground">
                Badan Siber dan Sandi Negara (BSSN) adalah lembaga pemerintah
                non-kementerian yang bertanggung jawab atas keamanan siber dan
                persandian nasional Indonesia.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Overview */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Visi & Misi BSSN</h2>

                <Card className="border-l-4 border-l-government-500">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="h-5 w-5 mr-2 text-government-600" />
                      Visi
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Terwujudnya keamanan siber nasional untuk mendukung
                      kedaulatan negara dan kemajuan peradaban bangsa Indonesia
                      di dunia digital.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-cyber-500">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="h-5 w-5 mr-2 text-cyber-600" />
                      Misi
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-cyber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Melindungi infrastruktur informasi vital nasional
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-cyber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Mengembangkan kapasitas keamanan siber nasional
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-cyber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Membangun ekosistem keamanan siber yang tangguh
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Pencapaian Terkini</h3>

                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-lg transition-all duration-300"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <Award className="h-5 w-5 text-government-600" />
                            <Badge variant="outline">{achievement.year}</Badge>
                          </div>
                        </div>
                        <h4 className="font-semibold mb-2">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {achievement.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sections Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold">Pelajari Lebih Lanjut</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Jelajahi informasi lengkap tentang organisasi, struktur, dan
                kepemimpinan BSSN
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {sections.map((section, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-lg bg-${section.color}-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <section.icon
                        className={`h-6 w-6 text-${section.color}-600`}
                      />
                    </div>
                    <CardTitle>{section.title}</CardTitle>
                    <CardDescription>{section.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      asChild
                      variant="ghost"
                      className="w-full group-hover:bg-government-50"
                    >
                      <Link
                        to={section.href}
                        className="flex items-center justify-between"
                      >
                        Selengkapnya
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 bg-gradient-to-r from-government-50 to-cyber-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Kunjungi BSSN</h2>
                <p className="text-muted-foreground">
                  Informasi kontak dan lokasi kantor pusat BSSN
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-government-600" />
                      Alamat Kantor
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground">
                      Jl. Harsono RM No. 70
                      <br />
                      Ragunan, Pasar Minggu
                      <br />
                      Jakarta Selatan 12550
                      <br />
                      Indonesia
                    </p>
                    <Button variant="outline" size="sm">
                      Lihat di Peta
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-cyber-600" />
                      Jam Operasional
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Senin - Jumat:
                      </span>
                      <span>08:00 - 17:00 WIB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Sabtu - Minggu:
                      </span>
                      <span>Tutup</span>
                    </div>
                    <div className="flex justify-between font-medium text-destructive">
                      <span>Hotline Darurat:</span>
                      <span>24/7</span>
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

export default Tentang;
