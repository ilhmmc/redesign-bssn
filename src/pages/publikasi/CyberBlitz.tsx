import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  Search,
  TrendingUp,
  Calendar,
  Shield,
  AlertTriangle,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const cyberBlitzEditions = [
  {
    id: 121,
    title: "Cyber Blitz Edisi 121",
    date: "12 Juli 2024",
    summary: "Berbagai ancaman dan insiden siber terbaru",
    topics: [
      "FishXProxy Phishing Kit - Toolkit phishing baru di Dark Web",
      "Peringatan Apple tentang Mercenary Spyware di India",
      "Upaya Phishing yang Menargetkan Pengguna Authy",
      "ARRL Konfirmasi Ransomware Mencuri Data Karyawan",
      "VMware Perbaiki SQL-Injection Critical pada Aria Automation",
      "Peningkatan Malware ViperSoftX Melalui eBook",
    ],
    category: "Ancaman Terkini",
    severity: "High",
  },
  {
    id: 120,
    title: "Cyber Blitz Edisi 120",
    date: "11 Juli 2024",
    summary: "Update keamanan siber dan ancaman ransomware",
    topics: [
      "Analisis ransomware terbaru",
      "Kerentanan sistem operasi",
      "Update patch keamanan",
      "Trend serangan phishing",
    ],
    category: "Keamanan Sistem",
    severity: "Medium",
  },
  {
    id: 119,
    title: "Cyber Blitz Edisi 119",
    date: "10 Juli 2024",
    summary: "Laporan insiden siber nasional dan internasional",
    topics: [
      "Serangan DDoS terhadap infrastruktur kritikat",
      "Malware targeting mobile devices",
      "Social engineering attacks",
      "Zero-day exploits",
    ],
    category: "Insiden Siber",
    severity: "High",
  },
];

const CyberBlitz = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEditions = cyberBlitzEditions.filter(
    (edition) =>
      edition.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      edition.topics.some((topic) =>
        topic.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "High":
        return "bg-red-100 text-red-800 border-red-200";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Low":
        return "bg-green-100 text-green-800 border-green-200";
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
          <span className="text-foreground">Cyber Blitz</span>
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
            <TrendingUp className="w-8 h-8 text-emerald-600" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Cyber Blitz
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Publikasi rutin yang dirilis oleh BSSN berisi informasi terkini
            mengenai ancaman dan insiden siber. Buletin kilat yang memberikan
            update cepat tentang kondisi keamanan siber nasional dan
            internasional.
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Cari buletin Cyber Blitz..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 mb-8">
          {filteredEditions.length > 0 ? (
            filteredEditions.map((edition) => (
              <Card
                key={edition.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">
                        {edition.title}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edition.date}
                        </div>
                        <Badge variant="outline">{edition.category}</Badge>
                        <Badge className={getSeverityColor(edition.severity)}>
                          {edition.severity} Priority
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{edition.summary}</p>
                    </div>
                    <Button size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Topik Pembahasan:
                  </h4>
                  <ul className="space-y-2">
                    {edition.topics.map((topic, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm"
                      >
                        <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <p className="text-muted-foreground">
                  Tidak ditemukan buletin yang sesuai dengan pencarian "
                  {searchTerm}"
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        <Card className="bg-gradient-to-r from-emerald-50 to-cyan-50 border-emerald-200">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Tentang Cyber Blitz
                </h3>
                <p className="text-muted-foreground mb-4">
                  Cyber Blitz adalah publikasi rutin BSSN yang memberikan
                  informasi cepat dan akurat tentang:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    Ancaman siber terbaru dan emerging threats
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    Insiden keamanan siber nasional dan internasional
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    Update kerentanan dan patch keamanan
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    Analisis trend dan pola serangan siber
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default CyberBlitz;
