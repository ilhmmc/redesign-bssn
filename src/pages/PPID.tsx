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
  FileText,
  Clock,
  Users,
  Target,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

const PPID = () => {
  const submenus = [
    {
      title: "Struktur Organisasi PID BSSN",
      href: "/layanan/ppid/struktur-organisasi",
      description:
        "Struktur organisasi Pejabat Pengelola Informasi dan Dokumentasi BSSN",
    },
    {
      title: "Maklumat Layanan PID BSSN",
      href: "/layanan/ppid/maklumat-layanan",
      description: "Komitmen layanan informasi publik BSSN",
    },
    {
      title: "Standar Biaya Layanan PID BSSN",
      href: "/layanan/ppid/standar-biaya",
      description: "Rincian biaya layanan informasi publik",
    },
    {
      title: "Survei Kepuasan Masyarakat PID",
      href: "/layanan/ppid/survei-kepuasan",
      description: "Survei untuk mengukur kepuasan layanan informasi",
    },
    {
      title: "Tata Cara Permohonan Informasi",
      href: "/layanan/ppid/tata-cara-permohonan",
      description: "Prosedur mengajukan permohonan informasi publik",
    },
    {
      title: "Tata Cara Pengajuan Keberatan",
      href: "/layanan/ppid/tata-cara-keberatan",
      description: "Prosedur mengajukan keberatan atas layanan informasi",
    },
    {
      title: "Tata Cara Penanganan Sengketa Informasi",
      href: "/layanan/ppid/penanganan-sengketa",
      description: "Prosedur penanganan sengketa informasi publik",
    },
  ];

  const visiMisi = [
    {
      title: "Visi",
      content:
        "Terwujudnya pengelolaan dan pelayanan informasi yang SMART dalam memenuhi hak pemohon informasi sesuai dengan ketentuan peraturan perundang-undangan.",
      icon: Target,
    },
    {
      title: "Misi",
      content: [
        "Meningkatkan pengelolaan dan pelayanan informasi yang berkualitas",
        "Membangun dan mengembangkan system penyediaan dan layanan informasi",
        "Meningkatkan kompetensi dan profesionalisme SDM layanan informasi publik",
        "Penguatan koordinasi dengan unit kerja terkait dalam pengelolaan dan pelayanan informasi",
      ],
      icon: CheckCircle,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-government-50 via-background to-cyber-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-government-100 text-government-700 border-government-200">
                PPID BSSN
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Pejabat Pengelola{" "}
                <span className="gradient-text">Informasi dan Dokumentasi</span>{" "}
                BSSN
              </h1>

              <p className="text-xl text-muted-foreground">
                Selamat datang di laman Pengelola Informasi dan Dokumentasi
                Badan Siber dan Sandi Negara. Laman ini merupakan sarana layanan
                dalam jaringan bagi pemohon informasi publik sebagai salah satu
                wujud pelaksanaan keterbukaan informasi publik di Badan Siber
                dan Sandi Negara.
              </p>
            </div>
          </div>
        </section>

        {/* Profile Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-12">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-government-100 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-government-600" />
                    </div>
                    <CardTitle className="text-2xl">PROFIL</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    Sebagai badan publik, BSSN memiliki tanggung jawab dan
                    amanah keterbukaan terhadap seluruh pemangku kepentingan
                    kebijakan keamanan siber termasuk masyarakat yang merupakan
                    unsur utama dari setiap kebijakan yang dilaksanakan oleh
                    BSSN. Dengan diberlakukannya Undang-Undang Nomor 14 Tahun
                    2008 tentang Keterbukaan Informasi Publik, maka BSSN
                    berkewajiban untuk memberikan layanan informasi publik
                    kepada masyarakat, menciptakan dan menjamin kelancaraan
                    dalam pelayanan informasi publik.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Layanan informasi publik harus dapat diakses dengan mudah
                    sehingga perlu dilakukan pengelolaan informasi publik dan
                    dokumentasi yang menjamin penyediaan informasi yang mudah,
                    cermat, cepat, dan akurat dengan memanfaatkan teknologi
                    informasi dan komunikasi. Untuk mewujudkan hak tersebut,
                    BSSN membentuk PPID yang berada di kawah Biro Hukum dan
                    Komunikasi Publik.
                  </p>
                </CardContent>
              </Card>

              {/* Visi & Misi */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {visiMisi.map((item, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-cyber-100 flex items-center justify-center">
                          <item.icon className="h-6 w-6 text-cyber-600" />
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {typeof item.content === "string" ? (
                        <p className="text-muted-foreground leading-relaxed">
                          {item.content}
                        </p>
                      ) : (
                        <ul className="space-y-3">
                          {item.content.map((misi, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-3"
                            >
                              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">
                                {misi}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Jadwal Pelayanan */}
              <Card className="mb-12">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">JADWAL PELAYANAN</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-r from-government-50 to-cyber-50 p-6 rounded-lg">
                    <p className="text-lg font-medium text-center">
                      Layanan informasi dilaksanakan setiap hari kerja dari{" "}
                      <span className="font-bold text-government-600">
                        Senin hingga Jumat
                      </span>{" "}
                      mulai pukul{" "}
                      <span className="font-bold text-cyber-600">
                        09.00 – 15.00 WIB
                      </span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* YouTube Video */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">
                    Video Informasi PPID BSSN
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/fAaRZsvchDM"
                      title="Video Informasi PPID BSSN"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Submenu Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl font-bold">Layanan PPID Lainnya</h2>
                <p className="text-xl text-muted-foreground">
                  Akses informasi lebih detail mengenai layanan PPID BSSN
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {submenus.map((submenu, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-government-500"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="w-12 h-12 rounded-lg bg-government-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <FileText className="h-6 w-6 text-government-600" />
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-government-600 transition-colors" />
                      </div>
                      <CardTitle className="text-lg leading-tight">
                        {submenu.title}
                      </CardTitle>
                      <CardDescription>{submenu.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full group-hover:bg-government-50 group-hover:border-government-200"
                      >
                        <Link to={submenu.href}>Selengkapnya</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PPID;
