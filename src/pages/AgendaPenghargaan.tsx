import { useState } from "react";
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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  Search,
  Filter,
  Clock,
  MapPin,
  Award,
  Trophy,
  Star,
  Users,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const AgendaPenghargaan = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");

  // Featured Agenda Images for 2024
  const featuredAgenda = [
    {
      id: 1,
      title: "Cyber Security Summit Indonesia 2024",
      date: "15-17 Maret 2024",
      location: "Jakarta Convention Center",
      image: "/agenda/1.png",
      status: "upcoming",
      description: "Summit tahunan keamanan siber terbesar di Indonesia",
    },
    {
      id: 2,
      title: "National Cryptography Conference 2024",
      date: "22-24 Mei 2024",
      location: "Bali International Convention Centre",
      image: "/agenda/2.png",
      status: "ongoing",
      description: "Konferensi nasional teknologi kriptografi dan sandi",
    },
    {
      id: 3,
      title: "ASEAN Cyber Security Forum 2024",
      date: "10-12 September 2024",
      location: "Surabaya Convention Hall",
      image: "/agenda/3.png",
      status: "completed",
      description: "Forum kerjasama keamanan siber tingkat ASEAN",
    },
  ];

  // Past Events (can be scrolled)
  const pastEvents = [
    {
      id: 4,
      title: "Workshop Incident Response Team",
      date: "2024-01-20",
      location: "Hotel Grand Sahid Jakarta",
      category: "Workshop",
      status: "completed",
      participants: 150,
    },
    {
      id: 5,
      title: "Seminar Keamanan Data Nasional",
      date: "2024-02-15",
      location: "Universitas Indonesia",
      category: "Seminar",
      status: "completed",
      participants: 300,
    },
    {
      id: 6,
      title: "Training Ethical Hacking",
      date: "2024-03-10",
      location: "BSSN Training Center",
      category: "Training",
      status: "completed",
      participants: 50,
    },
    {
      id: 7,
      title: "Cyber Defense Exercise",
      date: "2024-04-08",
      location: "BSSN Headquarters",
      category: "Exercise",
      status: "completed",
      participants: 80,
    },
    {
      id: 8,
      title: "Digital Forensics Symposium",
      date: "2024-05-12",
      location: "Bandung Institute of Technology",
      category: "Symposium",
      status: "completed",
      participants: 200,
    },
    {
      id: 9,
      title: "Cybersecurity for Banking Sector",
      date: "2024-06-18",
      location: "Bank Indonesia",
      category: "Workshop",
      status: "completed",
      participants: 120,
    },
  ];

  // Awards and Recognition Data
  const awardsData = [
    {
      id: 1,
      title: "Anugerah Karya Teladan Bidang Keamanan Siber",
      description:
        "Penghargaan untuk pegawai yang menunjukkan dedikasi luar biasa dalam pengembangan keamanan siber nasional",
      criteria: [
        "Inovasi dalam bidang keamanan siber",
        "Kontribusi terhadap pengembangan sistem",
        "Dedikasi dan loyalitas tinggi",
      ],
      icon: Trophy,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      id: 2,
      title: "Penghargaan Khusus Pegawai BSSN",
      description:
        "Pengakuan atas prestasi kerja dan kontribusi khusus dalam melaksanakan tugas pokok dan fungsi",
      criteria: [
        "Kinerja dan produktivitas tinggi",
        "Integritas dalam bekerja",
        "Nilai kompetitif yang menonjol",
      ],
      icon: Award,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: 3,
      title: "Penghargaan Sumber Daya Manusia Bidang Persandian",
      description:
        "Apresiasi untuk kontribusi dalam pengembangan teknologi persandian dan kriptografi nasional",
      criteria: [
        "Keahlian teknis persandian",
        "Penelitian dan pengembangan",
        "Transfer knowledge yang efektif",
      ],
      icon: Star,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  const filteredEvents = pastEvents.filter((event) => {
    const matchesSearch = event.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      event.category.toLowerCase() === selectedCategory;
    const matchesYear =
      selectedYear === "all" || event.date.startsWith(selectedYear);
    return matchesSearch && matchesCategory && matchesYear;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "upcoming":
        return (
          <Badge className="bg-green-100 text-green-700">Akan Datang</Badge>
        );
      case "ongoing":
        return (
          <Badge className="bg-blue-100 text-blue-700">
            Sedang Berlangsung
          </Badge>
        );
      case "completed":
        return <Badge className="bg-gray-100 text-gray-700">Selesai</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const getCategoryBadge = (category: string) => {
    const colors = {
      Workshop: "bg-orange-100 text-orange-700",
      Seminar: "bg-purple-100 text-purple-700",
      Training: "bg-blue-100 text-blue-700",
      Exercise: "bg-red-100 text-red-700",
      Symposium: "bg-green-100 text-green-700",
    };
    return (
      <Badge
        className={
          colors[category as keyof typeof colors] || "bg-gray-100 text-gray-700"
        }
      >
        {category}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-government-100 rounded-full mb-6">
            <Scale className="w-8 h-8 text-government-600" />
          </div>
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Agenda & Penghargaan BSSN
            </h1>
            <p className="text-xl text-muted-foreground">
              Informasi jadwal kegiatan dan penghargaan Badan Siber dan Sandi Negara
            </p>
          </div>
        </div>

        {/* Featured Agenda 2024 */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Calendar className="mr-3 h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Agenda Utama BSSN 2024</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAgenda.map((agenda) => (
              <Card
                key={agenda.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-muted relative">
                  <img
                    src={agenda.image}
                    alt={agenda.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/placeholder.svg";
                    }}
                  />
                  <div className="absolute top-4 right-4">
                    {getStatusBadge(agenda.status)}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{agenda.title}</CardTitle>
                  <CardDescription>{agenda.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-2 h-4 w-4" />
                      {agenda.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-2 h-4 w-4" />
                      {agenda.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Past Events Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Clock className="mr-3 h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">
                Kegiatan yang Telah Berlalu
              </h2>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Cari kegiatan..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger>
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Kategori" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Kategori</SelectItem>
                <SelectItem value="workshop">Workshop</SelectItem>
                <SelectItem value="seminar">Seminar</SelectItem>
                <SelectItem value="training">Training</SelectItem>
                <SelectItem value="exercise">Exercise</SelectItem>
                <SelectItem value="symposium">Symposium</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger>
                <Calendar className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Tahun" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Tahun</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Events List */}
          <div className="max-h-96 overflow-y-auto border rounded-lg">
            <div className="space-y-4 p-4">
              {filteredEvents.map((event) => (
                <Card
                  key={event.id}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold">{event.title}</h3>
                          {getCategoryBadge(event.category)}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="mr-1 h-4 w-4" />
                            {new Date(event.date).toLocaleDateString("id-ID", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="mr-1 h-4 w-4" />
                            {event.location}
                          </div>
                          <div className="flex items-center">
                            <Users className="mr-1 h-4 w-4" />
                            {event.participants} peserta
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Award className="mr-3 h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">
              Anugerah Penghargaan Badan Siber dan Sandi Negara
            </h2>
          </div>

          <div className="bg-government-50 border border-government-200 rounded-lg p-6 mb-8">
            <p className="text-government-800 leading-relaxed">
              Kepala Badan Siber dan Sandi Negara memberikan berbagai anugerah
              dan penghargaan kepada pegawai atau pihak lain yang dinilai
              memiliki peran dalam pengembangan ekosistem keamanan siber dan
              sandi Indonesia untuk meningkatkan semangat pengabdian, motivasi
              dan semangat kerja dalam melaksanakan tugas pokok dan fungsi,
              kinerja dan produktifitas, kualitas integritas dalam bekerja,
              nilai kompetitif dan untuk mendorong pegawai melaksanakan berbagai
              nilai keteladanan, jiwa korsa, dedikasi dan loyalitas pengabdian
              dalam bekerja.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {awardsData.map((award) => {
              const IconComponent = award.icon;
              return (
                <Card
                  key={award.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader className="text-center">
                    <div
                      className={`w-16 h-16 rounded-full ${award.bgColor} flex items-center justify-center mx-auto mb-4`}
                    >
                      <IconComponent className={`h-8 w-8 ${award.color}`} />
                    </div>
                    <CardTitle className="text-lg">{award.title}</CardTitle>
                    <CardDescription className="text-center">
                      {award.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                        Kriteria Penilaian:
                      </h4>
                      <ul className="space-y-1">
                        {award.criteria.map((criterion, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            <span>{criterion}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <h3 className="text-lg font-semibold mb-4">Kategori Penghargaan</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <Card className="p-4">
                <h4 className="font-medium text-government-700 mb-2">
                  Penghargaan terhadap Sumber Daya Manusia di Bidang Keamanan
                  Siber dan Persandian
                </h4>
                <p className="text-sm text-muted-foreground">
                  Pengakuan atas kontribusi dalam pengembangan ekosistem
                  keamanan siber dan teknologi persandian nasional
                </p>
              </Card>
              <Card className="p-4">
                <h4 className="font-medium text-government-700 mb-2">
                  Penghargaan Anugerah Karya Teladan dan Penghargaan Khusus bagi
                  Pegawai di Lingkungan BSSN
                </h4>
                <p className="text-sm text-muted-foreground">
                  Apresiasi terhadap dedikasi, inovasi, dan keteladanan dalam
                  melaksanakan tugas pokok dan fungsi
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AgendaPenghargaan;
