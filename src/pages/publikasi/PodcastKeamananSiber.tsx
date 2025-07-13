import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Search,
  Headphones,
  Play,
  Clock,
  Users,
  Calendar,
  Mic,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const podcastEpisodes = [
  {
    id: 1,
    title: "Cyber Security Awareness: Tangguh Menghadapi Ancaman Siber",
    host: "PT Asuransi Asei Indonesia x BSSN",
    guest: "Ishak Farid, S.ST., M.Han. (BSSN)",
    duration: "45 menit",
    date: "2024",
    description:
      "Diskusi mendalam mengenai upaya menghadapi ancaman siber dan strategi membangun ketahanan cyber security di era digital.",
    topics: [
      "Identifikasi ancaman siber terkini",
      "Strategi defense dalam cyber security",
      "Best practices untuk organisasi",
      "Peran masyarakat dalam cyber awareness",
    ],
    category: "Kolaborasi",
    status: "Available",
  },
  {
    id: 2,
    title: "Membangun Budaya Keamanan Siber di Workplace",
    host: "BSSN Official",
    guest: "Tim Ahli BSSN",
    duration: "35 menit",
    date: "2024",
    description:
      "Pembahasan tentang pentingnya membangun budaya keamanan siber di lingkungan kerja dan organisasi.",
    topics: [
      "Security awareness training",
      "Policy dan procedure keamanan",
      "Human factor dalam cybersecurity",
      "Incident response di workplace",
    ],
    category: "Edukasi Korporat",
    status: "Available",
  },
  {
    id: 3,
    title: "Cybersecurity untuk UMKM: Panduan Praktis",
    host: "BSSN Official",
    guest: "Praktisi Cyber Security",
    duration: "40 menit",
    date: "2024",
    description:
      "Tips dan strategi keamanan siber yang terjangkau dan praktis untuk usaha mikro, kecil, dan menengah.",
    topics: [
      "Keamanan website dan e-commerce",
      "Perlindungan data pelanggan",
      "Email security untuk bisnis",
      "Budget-friendly security solutions",
    ],
    category: "UMKM",
    status: "Coming Soon",
  },
];

const collaborations = [
  {
    partner: "PT Asuransi Asei Indonesia",
    topic: "Cyber Security Awareness",
    type: "Corporate Partnership",
    description:
      "Kolaborasi dalam menggelar podcast untuk meningkatkan kesadaran cyber security di sektor asuransi",
  },
  {
    partner: "Kejaksaan Agung RI",
    topic: "Cybercrime Law Enforcement",
    type: "Government Partnership",
    description:
      "Kerjasama dalam edukasi aspek hukum dan penegakan hukum terkait kejahatan siber",
  },
  {
    partner: "Politeknik SSN",
    topic: "Academic Cybersecurity",
    type: "Educational Partnership",
    description:
      "Kemitraan dalam pengembangan konten edukasi cybersecurity untuk dunia akademis",
  },
];

const PodcastKeamananSiber = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEpisodes = podcastEpisodes.filter(
    (episode) =>
      episode.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      episode.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      episode.topics.some((topic) =>
        topic.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-800 border-green-200";
      case "Coming Soon":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Live":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
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
          <span className="text-foreground">Podcast Keamanan Siber</span>
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-6">
            <Headphones className="w-8 h-8 text-rose-600" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Podcast Keamanan Siber untuk Masyarakat
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Program podcast edukasi keamanan siber melalui kolaborasi BSSN
            dengan berbagai institusi untuk memberikan wawasan mendalam tentang
            cybersecurity kepada masyarakat luas.
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Cari episode podcast..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Episode Podcast Tersedia</h2>
          {filteredEpisodes.length > 0 ? (
            filteredEpisodes.map((episode) => (
              <Card
                key={episode.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">
                        {episode.title}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Mic className="w-4 h-4" />
                          {episode.host}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {episode.guest}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {episode.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {episode.date}
                        </div>
                      </div>
                      <div className="flex gap-2 mb-3">
                        <Badge variant="outline">{episode.category}</Badge>
                        <Badge className={getStatusColor(episode.status)}>
                          {episode.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">
                        {episode.description}
                      </p>
                    </div>
                    <Button size="sm" className="ml-4">
                      <Play className="w-4 h-4 mr-2" />
                      {episode.status === "Available" ? "Dengar" : "Segera"}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Topik Pembahasan:</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {episode.topics.map((topic, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
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
                  Tidak ditemukan episode yang sesuai dengan pencarian "
                  {searchTerm}"
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card className="bg-gradient-to-r from-rose-50 to-pink-50 border-rose-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Headphones className="w-6 h-6 text-rose-600" />
                Tentang Program Podcast
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                BSSN berkolaborasi dengan berbagai institusi untuk menghadirkan
                konten podcast yang berkualitas dan mudah dipahami oleh
                masyarakat umum.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                  Diskusi dengan ahli cyber security terpercaya
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                  Bahasa yang mudah dipahami untuk semua kalangan
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                  Tips praktis yang bisa diterapkan sehari-hari
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                  Update tren dan ancaman cyber terkini
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-6 h-6 text-blue-600" />
                Mitra Kolaborasi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {collaborations.map((collab, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg border">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium">{collab.partner}</h4>
                      <Badge variant="outline" className="text-xs">
                        {collab.type}
                      </Badge>
                    </div>
                    <p className="text-sm font-medium text-blue-600 mb-1">
                      {collab.topic}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {collab.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Mic className="w-8 h-8 text-orange-600" />
                <h3 className="text-xl font-semibold">Ingin Berkolaborasi?</h3>
              </div>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                BSSN terbuka untuk kolaborasi dalam mengembangkan konten podcast
                keamanan siber. Mari bersama-sama meningkatkan kesadaran
                cybersecurity di Indonesia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-orange-600 hover:bg-orange-700">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Hubungi BSSN
                </Button>
                <Button variant="outline">
                  <Headphones className="w-4 h-4 mr-2" />
                  Lihat Semua Episode
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

export default PodcastKeamananSiber;
