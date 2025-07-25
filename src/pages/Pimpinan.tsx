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
  Users,
  Crown,
  User,
  FileText,
  Shield,
  Settings,
  Building,
  TrendingUp,
  CircleUser,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Pimpinan = () => {
  const [imageErrors, setImageErrors] = useState(new Set());

  const handleImageError = (leaderId) => {
    setImageErrors(prev => new Set(prev).add(leaderId));
  };
  const leadership = [
    {
      id: 1,
      name: "NUGROHO SULISTYO BUDI",
      position: "Kepala Badan Siber dan Sandi Negara",
      icon: Crown,
      level: "Kepala",
      image: "/pimpinan/KA-BSSN-.jpg",
      description:
        "Memimpin pelaksanaan tugas dan fungsi BSSN secara keseluruhan",
      color: "blue",
    },
    {
      id: 2,
      name: "A. RACHMAD WIBOWO",
      position: "Wakil Kepala Badan Siber dan Sandi Negara",
      icon: User,
      level: "Wakil Kepala",
      image: "/pimpinan/WAKA-ACMAD-3-1.jpg",
      description:
        "Membantu Kepala BSSN dalam pelaksanaan tugas dan fungsi organisasi",
      color: "cyan",
    },
    {
      id: 3,
      name: "Y.B. SUSILO WIBOWO",
      position: "Sekretaris Utama Badan Siber dan Sandi Negara",
      icon: FileText,
      level: "Sekretaris Utama",
      image: "/pimpinan/YBSES-scaled.jpg",
      description:
        "Mengkoordinasikan penyelenggaraan tugas dan administrasi BSSN",
      color: "green",
    },
    {
      id: 4,
      name: "R. TJAHJO KHURNIAWAN",
      position: "Deputi Bidang Strategi dan Kebijakan Keamanan Siber dan Sandi",
      icon: Settings,
      level: "Deputi",
      image: "/pimpinan/Pejabat-BSSN-01_REV.jpg",
      description: "Mengelola strategi dan kebijakan keamanan siber dan sandi",
      color: "purple",
    },
    {
      id: 5,
      name: "DOMINGGUS PAKEL",
      position: "Deputi Bidang Operasi Keamanan Siber dan Sandi",
      icon: Shield,
      level: "Deputi",
      image: "/pimpinan/BW.jpg",
      description: "Mengawasi operasional keamanan siber dan sandi",
      color: "red",
    },
    {
      id: 6,
      name: "SULISTYO",
      position:
        "Deputi Bidang Keamanan Siber dan Sandi Pemerintahan dan Pembangunan Manusia",
      icon: Building,
      level: "Deputi",
      image: "/pimpinan/D3-BG-Putih.jpg",
      description:
        "Mengelola keamanan siber untuk sektor pemerintahan dan pembangunan manusia",
      color: "orange",
    },
    {
      id: 7,
      name: "SLAMET AJI PAMUNGKAS",
      position: "Deputi Bidang Keamanan Siber dan Sandi Perekonomian",
      icon: TrendingUp,
      level: "Deputi",
      image: "/pimpinan/DEP-4-scaled.jpg",
      description: "Mengelola keamanan siber untuk sektor perekonomian",
      color: "indigo",
    },
  ];

  const organizationLevels = [
    {
      level: "Pimpinan Utama",
      description: "Kepala dan Wakil Kepala BSSN",
      count: leadership.filter(
        (l) => l.level === "Kepala" || l.level === "Wakil Kepala",
      ).length,
      icon: Crown,
    },
    {
      level: "Sekretariat",
      description: "Sekretaris Utama BSSN",
      count: leadership.filter((l) => l.level === "Sekretaris Utama").length,
      icon: FileText,
    },
    {
      level: "Deputi",
      description: "Para Deputi Bidang",
      count: leadership.filter((l) => l.level === "Deputi").length,
      icon: Users,
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-700 border-blue-200",
      cyan: "bg-cyan-100 text-cyan-700 border-cyan-200",
      green: "bg-green-100 text-green-700 border-green-200",
      purple: "bg-purple-100 text-purple-700 border-purple-200",
      red: "bg-red-100 text-red-700 border-red-200",
      orange: "bg-orange-100 text-orange-700 border-orange-200",
      indigo: "bg-indigo-100 text-indigo-700 border-indigo-200",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getImageColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      cyan: "from-cyan-500 to-cyan-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600",
      red: "from-red-500 to-red-600",
      orange: "from-orange-500 to-orange-600",
      indigo: "from-indigo-500 to-indigo-600",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-background to-cyan-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                <CircleUser className="mr-2 h-4 w-4" />
                Pimpinan BSSN
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Struktur <span className="text-blue-600">Kepemimpinan</span>{" "}
                BSSN
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Para pemimpin yang bertanggung jawab dalam menjalankan tugas dan
                fungsi Badan Siber dan Sandi Negara untuk menjaga keamanan siber
                Indonesia.
              </p>
            </div>
          </div>
        </section>

        {/* Organization Overview */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Struktur Organisasi</h2>
              <p className="text-muted-foreground">
                Hirarki kepemimpinan BSSN yang efektif dan terstruktur
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {organizationLevels.map((level, index) => (
                <Card
                  key={index}
                  className="text-center group hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                      <level.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{level.level}</CardTitle>
                    <CardDescription>{level.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {level.count}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {level.count === 1 ? "Posisi" : "Posisi"}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Jajaran Pimpinan</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Para pemimpin yang berpengalaman dan berdedikasi dalam bidang
                keamanan siber dan sandi negara
              </p>
            </div>

            <div className="space-y-8">
              {/* Top Leadership */}
              <div className="grid lg:grid-cols-2 gap-8">
                {leadership.slice(0, 2).map((leader, index) => {
                  const IconComponent = leader.icon;
                  return (
                    <Card
                      key={index}
                      className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 ${getColorClasses(leader.color)}`}
                    >
                      <CardContent className="p-8">
                        <div className="flex items-start space-x-6">
                          <div className="relative flex-shrink-0">
                            <div className="w-24 h-24 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300 ring-2 ring-offset-2 ring-gray-200">
                              {!imageErrors.has(leader.id) ? (
                                <img
                                  src={leader.image}
                                  alt={leader.name}
                                  className="w-full h-full object-cover"
                                  onError={() => handleImageError(leader.id)}
                                />
                              ) : (
                                <div
                                  className={`w-full h-full rounded-full bg-gradient-to-br ${getImageColorClasses(leader.color)} flex items-center justify-center text-white font-bold text-2xl`}
                                >
                                  {leader.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")
                                    .slice(0, 2)}
                                </div>
                              )}
                            </div>
                            <div
                              className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full ${getColorClasses(leader.color)} flex items-center justify-center`}
                            >
                              <IconComponent className="h-4 w-4" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <Badge
                              className={`mb-3 ${getColorClasses(leader.color)}`}
                            >
                              {leader.level}
                            </Badge>
                            <h3 className="text-xl font-bold mb-2">
                              {leader.name}
                            </h3>
                            <p className="text-muted-foreground font-medium mb-3">
                              {leader.position}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {leader.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Secretary */}
              <div className="flex justify-center">
                <div className="w-full max-w-2xl">
                  {(() => {
                    const leader = leadership[2];
                    const IconComponent = leader.icon;
                    return (
                      <Card
                        className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 ${getColorClasses(leader.color)}`}
                      >
                        <CardContent className="p-8">
                          <div className="flex items-start space-x-6">
                            <div className="relative flex-shrink-0">
                              <div className="w-24 h-24 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300 ring-2 ring-offset-2 ring-gray-200">
                                {!imageErrors.has(leader.id) ? (
                                  <img
                                    src={leader.image}
                                    alt={leader.name}
                                    className="w-full h-full object-cover"
                                    onError={() => handleImageError(leader.id)}
                                  />
                                ) : (
                                  <div
                                    className={`w-full h-full rounded-full bg-gradient-to-br ${getImageColorClasses(leader.color)} flex items-center justify-center text-white font-bold text-2xl`}
                                  >
                                    {leader.name
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")
                                      .slice(0, 2)}
                                  </div>
                                )}
                              </div>
                              <div
                                className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full ${getColorClasses(leader.color)} flex items-center justify-center`}
                              >
                                <IconComponent className="h-4 w-4" />
                              </div>
                            </div>
                            <div className="flex-1">
                              <Badge
                                className={`mb-3 ${getColorClasses(leader.color)}`}
                              >
                                {leader.level}
                              </Badge>
                              <h3 className="text-xl font-bold mb-2">
                                {leader.name}
                              </h3>
                              <p className="text-muted-foreground font-medium mb-3">
                                {leader.position}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {leader.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })()}
                </div>
              </div>

              {/* Deputies */}
              <div>
                <h3 className="text-2xl font-bold text-center mb-8">
                  Para Deputi
                </h3>
                <div className="grid lg:grid-cols-2 gap-6">
                  {leadership.slice(3).map((leader, index) => {
                    const IconComponent = leader.icon;
                    return (
                      <Card
                        key={index + 3}
                        className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 ${getColorClasses(leader.color)}`}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="relative flex-shrink-0">
                              <div className="w-16 h-16 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300 ring-2 ring-offset-2 ring-gray-200">
                                {!imageErrors.has(leader.id) ? (
                                  <img
                                    src={leader.image}
                                    alt={leader.name}
                                    className="w-full h-full object-cover"
                                    onError={() => handleImageError(leader.id)}
                                  />
                                ) : (
                                  <div
                                    className={`w-full h-full rounded-full bg-gradient-to-br ${getImageColorClasses(leader.color)} flex items-center justify-center text-white font-bold text-lg`}
                                  >
                                    {leader.name
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")
                                      .slice(0, 2)}
                                  </div>
                                )}
                              </div>
                              <div
                                className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full ${getColorClasses(leader.color)} flex items-center justify-center`}
                              >
                                <IconComponent className="h-3 w-3" />
                              </div>
                            </div>
                            <div className="flex-1">
                              <Badge
                                className={`mb-2 text-xs ${getColorClasses(leader.color)}`}
                              >
                                {leader.level}
                              </Badge>
                              <h3 className="text-lg font-bold mb-2">
                                {leader.name}
                              </h3>
                              <p className="text-sm text-muted-foreground font-medium mb-2">
                                {leader.position}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {leader.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Organizational Chart Info */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold">
                Kepemimpinan yang Berpengalaman
              </h2>
              <p className="text-xl text-muted-foreground">
                Para pemimpin BSSN memiliki pengalaman luas di bidang keamanan
                siber, teknologi informasi, dan administrasi pemerintahan untuk
                menjaga keamanan siber nasional.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold">25+</div>
                    <div className="text-sm text-muted-foreground">
                      Tahun Pengalaman Rata-rata
                    </div>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Users className="h-8 w-8 text-cyan-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold">1200+</div>
                    <div className="text-sm text-muted-foreground">
                      Pegawai yang Dipimpin
                    </div>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Building className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold">3</div>
                    <div className="text-sm text-muted-foreground">
                      Kantor Regional
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Link to="/profil/tentang-bssn">
                    Profil Organisasi
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/profil/tugas-fungsi-strategi">Tugas & Fungsi</Link>
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

export default Pimpinan;
