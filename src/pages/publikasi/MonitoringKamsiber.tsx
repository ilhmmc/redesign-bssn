import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  Calendar,
  Monitor,
  Search,
  Activity,
  AlertTriangle,
  TrendingUp,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const monitoringReports = [
  {
    id: 1,
    title: "Monitoring Keamanan Siber Februari 2024",
    description:
      "Laporan real-time kondisi keamanan siber Indonesia bulan Februari 2024",
    period: "Februari 2024",
    date: "2024-03-01",
    incidents: 12450,
    blockedAttacks: 45670,
    criticalAlerts: 89,
    size: "3.2 MB",
    downloadUrl: "#",
    status: "Terbaru",
    threatLevel: "Medium",
  },
  {
    id: 2,
    title: "Monitoring Keamanan Siber Januari 2024",
    description:
      "Data monitoring dan analisis tren serangan siber selama Januari 2024",
    period: "Januari 2024",
    date: "2024-02-01",
    incidents: 11890,
    blockedAttacks: 42340,
    criticalAlerts: 76,
    size: "3.1 MB",
    downloadUrl: "#",
    status: "Arsip",
    threatLevel: "Medium",
  },
  // Add more reports...
];

const periods = [
  "Semua Periode",
  "Februari 2024",
  "Januari 2024",
  "Desember 2023",
];

const MonitoringKamsiber = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("Semua Periode");

  const filteredReports = monitoringReports.filter((report) => {
    const matchesSearch = report.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesPeriod =
      selectedPeriod === "Semua Periode" || report.period === selectedPeriod;
    return matchesSearch && matchesPeriod;
  });

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
          <span className="text-foreground">Monitoring Keamanan Siber</span>
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6">
            <Monitor className="w-8 h-8 text-yellow-600" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Monitoring Keamanan Siber
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Data dan statistik monitoring keamanan siber real-time yang
            memberikan gambaran kondisi terkini ancaman siber di Indonesia.
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="space-y-4 pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Cari laporan monitoring..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {filteredReports.map((report) => (
            <Card key={report.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {report.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {report.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(report.downloadUrl, "_blank")}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Unduh
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MonitoringKamsiber;
