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
  AlertTriangle,
  Calendar,
  Search,
  Filter,
  Clock,
  Shield,
  Bug,
  Mail,
  Globe,
  Lock,
  Smartphone,
  Wifi,
  Database,
  Server,
  Download,
  ExternalLink,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

const PeringatanKeamanan = () => {
  const urgentAlerts = [
    {
      id: "BSSN-2024-001",
      title: "Serangan Ransomware LockBit 3.0 Menyasar Infrastruktur Kritis",
      description:
        "Terdeteksi serangan ransomware LockBit 3.0 yang menargetkan sistem informasi infrastruktur kritis Indonesia. Segera lakukan update patch keamanan.",
      severity: "critical",
      category: "Ransomware",
      date: "2024-01-15",
      affected: "Semua Sektor",
      cvss: "9.8",
      status: "Active",
    },
    {
      id: "BSSN-2024-002",
      title: "Kampanye Phishing Massal Mengatasnamakan Bank Indonesia",
      description:
        "Kampanye phishing skala besar menggunakan domain palsu yang menyerupai situs resmi Bank Indonesia. Waspada email mencurigakan.",
      severity: "high",
      category: "Phishing",
      date: "2024-01-14",
      affected: "Sektor Keuangan",
      cvss: "7.5",
      status: "Active",
    },
  ];

  const securityAlerts = [
    {
      id: "BSSN-2024-003",
      title: "Kerentanan Kritis Microsoft Exchange Server (CVE-2024-21410)",
      description:
        "Microsoft merilis patch untuk kerentanan kritis di Exchange Server yang dapat dieksploitasi untuk Remote Code Execution.",
      severity: "critical",
      category: "Vulnerability",
      date: "2024-01-12",
      affected: "Microsoft Exchange",
      cvss: "9.1",
      status: "Patch Available",
      vendor: "Microsoft",
      cve: "CVE-2024-21410",
    },
    {
      id: "BSSN-2024-004",
      title: "Malware Android FakeBank Menyasar Aplikasi Perbankan Mobile",
      description:
        "Ditemukan malware Android bernama FakeBank yang menyamar sebagai aplikasi perbankan resmi untuk mencuri kredensial login.",
      severity: "high",
      category: "Mobile Malware",
      date: "2024-01-10",
      affected: "Android Users",
      cvss: "8.2",
      status: "Investigating",
    },
    {
      id: "BSSN-2024-005",
      title: "Serangan DDoS Terhadap Situs Pemerintah Daerah",
      description:
        "Terdeteksi serangan DDoS koordinat terhadap beberapa situs web pemerintah daerah. Tim BSSN sedang melakukan mitigasi.",
      severity: "medium",
      category: "DDoS",
      date: "2024-01-08",
      affected: "Pemda",
      cvss: "6.5",
      status: "Mitigating",
    },
    {
      id: "BSSN-2024-006",
      title: "Kerentanan Wi-Fi WPA3 Dapat Dibajak oleh Penyerang Lokal",
      description:
        "Peneliti keamanan menemukan kerentanan pada protokol WPA3 yang memungkinkan penyerang dalam jangkauan Wi-Fi untuk memperoleh akses tidak sah.",
      severity: "medium",
      category: "Network Security",
      date: "2024-01-05",
      affected: "Wi-Fi WPA3",
      cvss: "6.8",
      status: "Vendor Notified",
    },
    {
      id: "BSSN-2024-007",
      title: "Botnet Mirai Varian Baru Menargetkan Perangkat IoT Indonesia",
      description:
        "Varian baru botnet Mirai terdeteksi menargetkan perangkat IoT dengan kredensial default di Indonesia. Segera ubah password default.",
      severity: "high",
      category: "IoT Security",
      date: "2024-01-03",
      affected: "IoT Devices",
      cvss: "7.8",
      status: "Active",
    },
  ];

  const categories = [
    {
      name: "Semua",
      value: "all",
      count: urgentAlerts.length + securityAlerts.length,
    },
    { name: "Critical", value: "critical", count: 2 },
    { name: "High", value: "high", count: 3 },
    { name: "Medium", value: "medium", count: 2 },
    { name: "Ransomware", value: "ransomware", count: 1 },
    { name: "Phishing", value: "phishing", count: 1 },
    { name: "Malware", value: "malware", count: 2 },
    { name: "Vulnerability", value: "vulnerability", count: 1 },
  ];

  const stats = [
    {
      icon: AlertTriangle,
      value: "47",
      label: "Peringatan Aktif",
      color: "text-red-600",
    },
    {
      icon: Shield,
      value: "1,247",
      label: "Ancaman Ditangkal",
      color: "text-green-600",
    },
    {
      icon: Clock,
      value: "< 2h",
      label: "Rata-rata Respons",
      color: "text-blue-600",
    },
  ];

  const getSeverityColor = (severity: string) => {
    const colors = {
      critical: "bg-red-100 text-red-700 border-red-200",
      high: "bg-orange-100 text-orange-700 border-orange-200",
      medium: "bg-yellow-100 text-yellow-700 border-yellow-200",
      low: "bg-green-100 text-green-700 border-green-200",
    };
    return colors[severity as keyof typeof colors] || colors.medium;
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "critical":
        return <AlertTriangle className="h-4 w-4" />;
      case "high":
        return <Shield className="h-4 w-4" />;
      case "medium":
        return <Bug className="h-4 w-4" />;
      default:
        return <AlertTriangle className="h-4 w-4" />;
    }
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      Ransomware: Lock,
      Phishing: Mail,
      Vulnerability: Bug,
      "Mobile Malware": Smartphone,
      DDoS: Globe,
      "Network Security": Wifi,
      "IoT Security": Database,
    };
    const Icon = icons[category as keyof typeof icons] || Server;
    return <Icon className="h-4 w-4" />;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-50 via-background to-orange-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-red-100 text-red-700 border-red-200">
                <AlertTriangle className="mr-2 h-4 w-4" />
                Peringatan Keamanan
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Peringatan <span className="text-red-600">Keamanan Siber</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Informasi terkini tentang ancaman keamanan siber, kerentanan
                sistem, dan panduan mitigasi untuk melindungi infrastruktur
                digital Indonesia.
              </p>

              {/* Search Bar */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto pt-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Cari peringatan keamanan..."
                    className="pl-10"
                  />
                </div>
                <Select>
                  <SelectTrigger className="w-full sm:w-48">
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Tingkat Risiko" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.name} ({category.count})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Alert Banner */}
        <section className="py-4 bg-red-600 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-6 w-6 animate-pulse" />
                <span className="font-semibold">
                  {urgentAlerts.length} Peringatan Kritis Aktif
                </span>
              </div>
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-red-600 hover:bg-red-50"
              >
                <Phone className="h-5 w-5 mr-2" />
                Hotline: 1500-567
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <stat.icon
                      className={`h-8 w-8 mx-auto mb-2 ${stat.color}`}
                    />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Urgent Alerts */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Peringatan Kritis</h2>
              <p className="text-muted-foreground">
                Ancaman keamanan siber tingkat tinggi yang memerlukan perhatian
                segera
              </p>
            </div>

            <div className="space-y-6 max-w-6xl mx-auto">
              {urgentAlerts.map((alert) => (
                <Card
                  key={alert.id}
                  className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-red-500"
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <Badge className={getSeverityColor(alert.severity)}>
                              {getSeverityIcon(alert.severity)}
                              <span className="ml-1 uppercase">
                                {alert.severity}
                              </span>
                            </Badge>
                            <Badge variant="outline">{alert.id}</Badge>
                            <Badge className="bg-blue-100 text-blue-700">
                              {getCategoryIcon(alert.category)}
                              <span className="ml-1">{alert.category}</span>
                            </Badge>
                          </div>
                          <div className="text-right text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {formatDate(alert.date)}
                            </div>
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-3 group-hover:text-red-600 transition-colors">
                          {alert.title}
                        </h3>

                        <p className="text-muted-foreground mb-4">
                          {alert.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-sm">
                              <strong>Target:</strong> {alert.affected}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            <span className="text-sm">
                              <strong>CVSS:</strong> {alert.cvss}/10
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-sm">
                              <strong>Status:</strong> {alert.status}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button className="bg-red-600 hover:bg-red-700">
                            <Download className="h-4 w-4 mr-2" />
                            Download Panduan Mitigasi
                          </Button>
                          <Button variant="outline">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Detail Teknis
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Security Alerts Grid */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold">
                Peringatan Keamanan Lainnya
              </h2>
              <div className="flex items-center space-x-4">
                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Urutkan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="latest">Terbaru</SelectItem>
                    <SelectItem value="severity">Tingkat Risiko</SelectItem>
                    <SelectItem value="category">Kategori</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {securityAlerts.map((alert) => (
                <Card
                  key={alert.id}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Badge className={getSeverityColor(alert.severity)}>
                          {getSeverityIcon(alert.severity)}
                          <span className="ml-1 uppercase text-xs">
                            {alert.severity}
                          </span>
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {alert.id}
                        </Badge>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {formatDate(alert.date)}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 mb-3">
                      <Badge className="bg-blue-100 text-blue-700">
                        {getCategoryIcon(alert.category)}
                        <span className="ml-1">{alert.category}</span>
                      </Badge>
                    </div>

                    <CardTitle className="text-lg leading-tight group-hover:text-red-600 transition-colors">
                      {alert.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {alert.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                      <div>
                        <strong>Target:</strong> {alert.affected}
                      </div>
                      <div>
                        <strong>CVSS:</strong> {alert.cvss}/10
                      </div>
                      {alert.cve && (
                        <div>
                          <strong>CVE:</strong> {alert.cve}
                        </div>
                      )}
                      {alert.vendor && (
                        <div>
                          <strong>Vendor:</strong> {alert.vendor}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <Badge
                        variant="outline"
                        className={
                          alert.status === "Patch Available"
                            ? "border-green-200 text-green-700"
                            : alert.status === "Active"
                              ? "border-red-200 text-red-700"
                              : "border-yellow-200 text-yellow-700"
                        }
                      >
                        {alert.status}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        Detail
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Muat Lebih Banyak Peringatan
              </Button>
            </div>
          </div>
        </section>

        {/* Response Guidelines */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Panduan Respons Keamanan
                </h2>
                <p className="text-muted-foreground">
                  Langkah-langkah yang harus diambil ketika menghadapi ancaman
                  keamanan siber
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <AlertTriangle className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Identifikasi</h3>
                    <p className="text-sm text-muted-foreground">
                      Identifikasi jenis ancaman dan tingkat dampaknya pada
                      sistem Anda
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Mitigasi</h3>
                    <p className="text-sm text-muted-foreground">
                      Terapkan langkah mitigasi sesuai panduan untuk mencegah
                      penyebaran ancaman
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Lapor</h3>
                    <p className="text-sm text-muted-foreground">
                      Laporkan insiden ke BSSN melalui hotline 1500-567 atau
                      email humas@bssn.go.id
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-12">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Butuh bantuan segera? Tim respons darurat BSSN siap membantu
                    24/7
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-red-600 hover:bg-red-700"
                      asChild
                    >
                      <a href="tel:1500567">
                        <Phone className="h-5 w-5 mr-2" />
                        Hotline Darurat
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link to="/kontak">Hubungi BSSN</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PeringatanKeamanan;
