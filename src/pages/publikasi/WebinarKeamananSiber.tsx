import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Search,
  Video,
  Calendar,
  Users,
  Globe,
  Play,
  Clock,
  ExternalLink,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const webinarSeries = [
  {
    id: 1,
    title: "Cita-cita Nyata di Dunia Maya",
    organizer: "Politeknik Siber dan Sandi Negara (Poltek SSN)",
    date: "14 Agustus 2021",
    duration: "2 jam",
    participants: "500+ peserta",
    target: "Siswa dan Guru SMA/SMK se-Indonesia",
    description:
      "Webinar edukatif yang membahas pentingnya pengamanan siber dan peluang karier di bidang keamanan siber untuk generasi muda.",
    topics: [
      "Peluang karier di bidang cybersecurity",
      "Pentingnya pendidikan keamanan siber",
      "Skill yang dibutuhkan di era digital",
      "Program studi cybersecurity di Indonesia",
    ],
    category: "Pendidikan",
    type: "Educational Outreach",
    status: "Recorded",
  },
  {
    id: 2,
    title: "Defend Against APT Attack in OT Virtual Simulated Environment",
    organizer: "BSSN & OIC-CERT",
    date: "18 Desember 2024",
    duration: "3 jam",
    participants: "105 peserta internasional",
    target: "Cybersecurity Professionals",
    description:
      "Workshop teknis yang membahas teknologi Elasticsearch dan tren ancaman siber di sektor industri Operational Technology (OT).",
    topics: [
      "Advanced Persistent Threat (APT) analysis",
      "Operational Technology security",
      "Elasticsearch for security monitoring",
      "Industrial control systems protection",
    ],
    category: "Technical Workshop",
    type: "International Cooperation",
    status: "Recorded",
  },
  {
    id: 3,
    title:
      "Meningkatkan Ketahanan Siber pada Penyelenggaraan Internet di Indonesia",
    organizer: "BSSN & APJII",
    date: "15 Januari 2025",
    duration: "2.5 jam",
    participants: "300+ peserta",
    target: "Internet Service Providers & IT Professionals",
    description:
      "Kolaborasi antara BSSN dan Asosiasi Penyelenggara Jasa Internet Indonesia membahas ketahanan siber nasional.",
    topics: [
      "Kolaborasi stakeholder internet Indonesia",
      "Teknologi keamanan untuk ISP",
      "Kebijakan regulasi internet nasional",
      "Best practices cyber resilience",
    ],
    category: "Secure Net",
    type: "Industry Collaboration",
    status: "Recent",
  },
  {
    id: 4,
    title: "Why (BSSN) Reputation Risk is Important?",
    organizer: "BSSN Pusat Data dan Teknologi Informasi Komunikasi",
    date: "4 Maret 2024",
    duration: "1.5 jam",
    participants: "200+ peserta",
    target: "Government & Corporate",
    description:
      "Webinar Series #1 Bulan Kesadaran Keamanan Informasi BSSN 2024 yang membahas pentingnya risiko reputasi.",
    topics: [
      "Reputation risk management",
      "Information security awareness",
      "Crisis communication strategies",
      "Brand protection in digital era",
    ],
    category: "Awareness Month",
    type: "Risk Management",
    status: "Recorded",
  },
  {
    id: 5,
    title: "The Role of ISACs in Improving Cybersecurity and Resilience",
    organizer: "BSSN & OIC-CERT",
    date: "13 April 2023",
    duration: "2 jam",
    participants: "150+ peserta internasional",
    target: "Cybersecurity Professionals & Policymakers",
    description:
      "OIC-CERT Awareness Webinar 2023 yang membahas peran Information Sharing and Analysis Centers dalam meningkatkan ketahanan siber.",
    topics: [
      "Information Sharing and Analysis Centers (ISACs)",
      "Best practices implementation",
      "Cybersecurity collaboration models",
      "Resilience building strategies",
    ],
    category: "OIC-CERT Awareness",
    type: "International Cooperation",
    status: "Recorded",
  },
];

const upcomingWebinars = [
  {
    title: "AI & Machine Learning dalam Cybersecurity",
    date: "15 Februari 2026",
    registrants: "250+ terdaftar",
    status: "Open Registration",
  },
  {
    title: "Zero Trust Architecture Implementation",
    date: "28 Februari 2026",
    registrants: "180+ terdaftar",
    status: "Open Registration",
  },
  {
    title: "Cloud Security Best Practices",
    date: "12 Maret 2026",
    registrants: "120+ terdaftar",
    status: "Coming Soon",
  },
];

const WebinarKeamananSiber = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredWebinars = webinarSeries.filter(
    (webinar) =>
      webinar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      webinar.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      webinar.topics.some((topic) =>
        topic.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Recorded":
        return "bg-green-100 text-green-800 border-green-200";
      case "Recent":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Live":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "International Cooperation":
        return "bg-purple-100 text-purple-800";
      case "Industry Collaboration":
        return "bg-blue-100 text-blue-800";
      case "Educational Outreach":
        return "bg-green-100 text-green-800";
      case "Risk Management":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link
            to="/informasi-regulasi/publikasi"
            className="hover:text-foreground"
          >
            Publikasi
          </Link>
          <span>/</span>
          <span className="text-foreground">Webinar Keamanan Siber</span>
        </div>

        <div className="mb-6">
          <Link to="/informasi-regulasi/publikasi">
            <Button variant="ghost" className="pl-0">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Publikasi
            </Button>
          </Link>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
            <Video className="w-8 h-8 text-amber-600" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Webinar Keamanan Siber
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Koleksi webinar dan seminar online keamanan siber yang
            diselenggarakan BSSN bersama berbagai mitra nasional dan
            internasional dengan pembicara ahli terkemuka.
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Cari webinar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Webinar Tersedia</h2>
          {filteredWebinars.length > 0 ? (
            filteredWebinars.map((webinar) => (
              <Card
                key={webinar.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">
                        {webinar.title}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {webinar.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {webinar.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {webinar.participants}
                        </div>
                      </div>
                      <div className="flex gap-2 mb-3 flex-wrap">
                        <Badge variant="outline">{webinar.category}</Badge>
                        <Badge className={getTypeColor(webinar.type)}>
                          {webinar.type}
                        </Badge>
                        <Badge className={getStatusColor(webinar.status)}>
                          {webinar.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-3">
                        {webinar.description}
                      </p>
                      <div className="text-sm">
                        <span className="font-medium">Penyelenggara: </span>
                        <span className="text-muted-foreground">
                          {webinar.organizer}
                        </span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Target Audiens: </span>
                        <span className="text-muted-foreground">
                          {webinar.target}
                        </span>
                      </div>
                    </div>
                    <Button size="sm" className="ml-4">
                      <Play className="w-4 h-4 mr-2" />
                      Tonton
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Topik Pembahasan:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {webinar.topics.map((topic, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 text-sm"
                      >
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <p className="text-muted-foreground">
                  Tidak ditemukan webinar yang sesuai dengan pencarian "
                  {searchTerm}"
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-6 h-6 text-amber-600" />
                Webinar Mendatang
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingWebinars.map((upcoming, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg border">
                    <h4 className="font-medium mb-2">{upcoming.title}</h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {upcoming.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {upcoming.registrants}
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {upcoming.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-6 h-6 text-blue-600" />
                Kemitraan Internasional
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                BSSN secara aktif berkolaborasi dengan organisasi internasional
                untuk menghadirkan konten webinar berkualitas tinggi.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    🌍
                  </div>
                  <div>
                    <h4 className="font-medium">OIC-CERT</h4>
                    <p className="text-sm text-muted-foreground">
                      Organization of Islamic Cooperation CERT
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    🏢
                  </div>
                  <div>
                    <h4 className="font-medium">APJII</h4>
                    <p className="text-sm text-muted-foreground">
                      Asosiasi Penyelenggara Jasa Internet Indonesia
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    🎓
                  </div>
                  <div>
                    <h4 className="font-medium">Poltek SSN</h4>
                    <p className="text-sm text-muted-foreground">
                      Politeknik Siber dan Sandi Negara
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-cyan-50 to-teal-50 border-cyan-200">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Video className="w-8 h-8 text-cyan-600" />
                <h3 className="text-xl font-semibold">Akses Semua Webinar</h3>
              </div>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Dapatkan akses ke seluruh koleksi webinar keamanan siber BSSN
                dan tingkatkan pengetahuan cybersecurity Anda bersama para ahli
                terbaik.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-cyan-600 hover:bg-cyan-700">
                  <Play className="w-4 h-4 mr-2" />
                  Tonton Semua Webinar
                </Button>
                <Button variant="outline">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Daftar Newsletter
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default WebinarKeamananSiber;
