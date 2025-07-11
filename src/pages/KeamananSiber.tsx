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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Shield,
  Zap,
  Eye,
  Lock,
  AlertTriangle,
  Monitor,
  Clock,
  CheckCircle,
  Users,
  Globe,
  Server,
  Database,
  Network,
  Bug,
  Phone,
  Mail,
  Target,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const KeamananSiber = () => {
  const coreServices = [
    {
      title: "Monitoring & Detection",
      description: "Pemantauan keamanan siber 24/7 dengan teknologi AI",
      icon: Monitor,
      features: [
        "Security Operations Center (SOC)",
        "Threat Intelligence",
        "Real-time Monitoring",
        "Anomaly Detection",
        "SIEM Integration",
      ],
      color: "blue",
      coverage: "24/7",
      responseTime: "< 15 menit",
    },
    {
      title: "Incident Response",
      description: "Respons cepat dan efektif terhadap insiden keamanan",
      icon: Zap,
      features: [
        "Emergency Response Team",
        "Forensik Digital",
        "Damage Assessment",
        "Recovery Planning",
        "Lesson Learned",
      ],
      color: "red",
      coverage: "24/7",
      responseTime: "< 5 menit",
    },
    {
      title: "Vulnerability Assessment",
      description: "Identifikasi dan evaluasi kerentanan sistem",
      icon: Bug,
      features: [
        "Penetration Testing",
        "Security Scanning",
        "Code Review",
        "Configuration Audit",
        "Risk Assessment",
      ],
      color: "orange",
      coverage: "Scheduled",
      responseTime: "1-3 hari",
    },
    {
      title: "Security Architecture",
      description: "Desain dan implementasi arsitektur keamanan",
      icon: Network,
      features: [
        "Security Framework",
        "Zero Trust Architecture",
        "Network Segmentation",
        "Access Control",
        "Security Policies",
      ],
      color: "green",
      coverage: "Konsultasi",
      responseTime: "2-4 minggu",
    },
  ];

  const stats = [
    {
      icon: Shield,
      value: "1,247",
      label: "Ancaman Ditangkal",
      period: "Bulan ini",
      trend: "+12%",
      color: "text-green-600",
    },
    {
      icon: Clock,
      value: "99.8%",
      label: "Uptime Monitoring",
      period: "Tahun ini",
      trend: "+0.2%",
      color: "text-blue-600",
    },
    {
      icon: Users,
      value: "500+",
      label: "Organisasi Terlindungi",
      period: "Aktif",
      trend: "+25%",
      color: "text-purple-600",
    },
    {
      icon: Zap,
      value: "< 5 min",
      label: "Response Time",
      period: "Rata-rata",
      trend: "-30%",
      color: "text-orange-600",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-700 border-blue-200",
      red: "bg-red-100 text-red-700 border-red-200",
      orange: "bg-orange-100 text-orange-700 border-orange-200",
      green: "bg-green-100 text-green-700 border-green-200",
      purple: "bg-purple-100 text-purple-700 border-purple-200",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-background to-red-50 py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-red-100 text-red-700 border-red-200">
                <Shield className="mr-2 h-4 w-4" />
                Keamanan BELA 24/7
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                I <span className="text-red-600">Love</span> Bela
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Melindungi Bela dengan teknologi canggih, tim ahli
                berpengalaman, dan respons 24/7 terhadap ancaman cowo lain.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Laporkan Insiden
                </Button>
                <Button variant="outline" size="lg">
                  <Monitor className="h-5 w-5 mr-2" />
                  Status Monitoring
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Real-time Stats */}
        <section className="py-12 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="text-center group hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <stat.icon
                      className={`h-8 w-8 mx-auto mb-2 ${stat.color}`}
                    />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.period}
                    </div>
                    <div className={`text-xs font-medium ${stat.color} mt-1`}>
                      {stat.trend}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Layanan Keamanan Siber
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Solusi keamanan siber komprehensif yang dirancang untuk
                melindungi aset digital dari berbagai ancaman cyber
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {coreServices.map((service, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l-4 ${getColorClasses(service.color)}`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${getColorClasses(service.color)}`}
                        >
                          <service.icon className="h-7 w-7" />
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-2">
                            {service.title}
                          </CardTitle>
                          <CardDescription className="text-sm">
                            {service.description}
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="text-sm font-medium">Coverage</div>
                        <div className="text-xs text-muted-foreground">
                          {service.coverage}
                        </div>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="text-sm font-medium">Response</div>
                        <div className="text-xs text-muted-foreground">
                          {service.responseTime}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">Fitur Layanan:</h4>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground flex items-center"
                        >
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full group-hover:bg-red-600 group-hover:text-white transition-all">
                      Pelajari Lebih Lanjut
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <AlertTriangle className="h-12 w-12 animate-pulse" />
                <h2 className="text-3xl font-bold">
                  Emergency Response Center
                </h2>
              </div>

              <p className="text-xl text-red-100">
                Tim respons darurat BSSN siap membantu Anda 24/7 untuk menangani
                insiden keamanan siber yang kritial dan urgent.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <Card className="bg-white/10 border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <Phone className="h-8 w-8 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Hotline Darurat</h3>
                    <div className="text-2xl font-bold">1500-567</div>
                    <div className="text-sm text-red-200">24/7 Available</div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <Mail className="h-8 w-8 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Email Darurat</h3>
                    <div className="text-lg font-bold">soc@bssn.go.id</div>
                    <div className="text-sm text-red-200">
                      Response &lt; 15 min
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <Monitor className="h-8 w-8 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Portal SOC</h3>
                    <div className="text-lg font-bold">soc.bssn.go.id</div>
                    <div className="text-sm text-red-200">Real-time Status</div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-red-600 hover:bg-red-50"
                >
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Laporkan Insiden Sekarang
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-red-600"
                  asChild
                >
                  <Link to="/kontak">
                    <Phone className="h-5 w-5 mr-2" />
                    Hubungi Tim SOC
                  </Link>
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

export default KeamananSiber;
