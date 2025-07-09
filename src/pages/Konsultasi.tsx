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
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Users,
  MessageSquare,
  CheckCircle,
  Clock,
  Star,
  Target,
  Shield,
  Building,
  TrendingUp,
  FileText,
  Phone,
  Mail,
  Calendar,
  Award,
  Lightbulb,
  Settings,
  BookOpen,
  Globe,
  Download,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Konsultasi = () => {
  const consultationTypes = [
    {
      title: "Security Risk Assessment",
      description: "Evaluasi menyeluruh risiko keamanan siber organisasi Anda",
      icon: Shield,
      duration: "2-4 minggu",
      price: "Mulai 15 juta",
      features: [
        "Asset Inventory & Classification",
        "Threat Modeling & Analysis",
        "Vulnerability Assessment",
        "Risk Quantification",
        "Mitigation Roadmap",
        "Executive Summary Report",
      ],
      deliverables: [
        "Risk Assessment Report",
        "Security Roadmap",
        "Executive Briefing",
      ],
      color: "red",
      popularity: "Sangat Populer",
    },
    {
      title: "Compliance & Governance",
      description:
        "Bantuan mencapai compliance dengan regulasi dan standar keamanan",
      icon: FileText,
      duration: "3-6 minggu",
      price: "Mulai 20 juta",
      features: [
        "ISO 27001 Gap Analysis",
        "Regulatory Compliance Check",
        "Policy & Procedure Development",
        "Control Implementation",
        "Audit Preparation",
        "Documentation Review",
      ],
      deliverables: [
        "Compliance Report",
        "Policy Documents",
        "Implementation Guide",
      ],
      color: "blue",
      popularity: "Populer",
    },
    {
      title: "Digital Transformation Security",
      description: "Keamanan siber untuk inisiatif transformasi digital",
      icon: Globe,
      duration: "4-8 minggu",
      price: "Mulai 25 juta",
      features: [
        "Cloud Security Architecture",
        "DevSecOps Implementation",
        "Zero Trust Framework",
        "API Security Design",
        "Data Protection Strategy",
        "Security by Design",
      ],
      deliverables: [
        "Security Architecture",
        "Implementation Plan",
        "Best Practices Guide",
      ],
      color: "purple",
      popularity: "Trending",
    },
    {
      title: "Incident Response Planning",
      description: "Pengembangan rencana respons insiden keamanan siber",
      icon: Target,
      duration: "2-3 minggu",
      price: "Mulai 12 juta",
      features: [
        "Incident Response Framework",
        "Playbook Development",
        "Team Structure Design",
        "Communication Plan",
        "Tabletop Exercises",
        "Recovery Procedures",
      ],
      deliverables: [
        "IR Plan Document",
        "Response Playbooks",
        "Training Materials",
      ],
      color: "orange",
      popularity: "Populer",
    },
  ];

  const consultationProcess = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Diskusi kebutuhan dan ekspektasi",
      duration: "1-2 hari",
      activities: [
        "Requirement Gathering",
        "Scope Definition",
        "Timeline Planning",
        "Resource Allocation",
      ],
      icon: MessageSquare,
    },
    {
      step: "2",
      title: "Assessment & Analysis",
      description: "Analisis mendalam sistem dan proses",
      duration: "1-3 minggu",
      activities: [
        "Data Collection",
        "Technical Analysis",
        "Risk Evaluation",
        "Gap Identification",
      ],
      icon: Target,
    },
    {
      step: "3",
      title: "Strategy Development",
      description: "Penyusunan strategi dan rekomendasi",
      duration: "1-2 minggu",
      activities: [
        "Strategy Formulation",
        "Solution Design",
        "Roadmap Creation",
        "Cost-Benefit Analysis",
      ],
      icon: Lightbulb,
    },
    {
      step: "4",
      title: "Implementation Support",
      description: "Dukungan implementasi dan monitoring",
      duration: "Ongoing",
      activities: [
        "Implementation Guidance",
        "Progress Monitoring",
        "Issue Resolution",
        "Knowledge Transfer",
      ],
      icon: Settings,
    },
  ];

  const expertTeam = [
    {
      name: "Dr. Ahmad Setiawan",
      title: "Lead Security Architect",
      expertise: "ISO 27001, Risk Management",
      experience: "15+ tahun",
      certifications: ["CISSP", "CISA", "ISO 27001 LA"],
      avatar: "/placeholder.svg",
    },
    {
      name: "Sari Kusumawati, M.Kom",
      title: "Senior Cybersecurity Consultant",
      expertise: "Cloud Security, DevSecOps",
      experience: "12+ tahun",
      certifications: ["CISSP", "CCSP", "AWS Security"],
      avatar: "/placeholder.svg",
    },
    {
      name: "Budi Raharjo, S.Kom",
      title: "Incident Response Specialist",
      expertise: "Digital Forensics, IR Planning",
      experience: "10+ tahun",
      certifications: ["GCIH", "GCFA", "CISSP"],
      avatar: "/placeholder.svg",
    },
  ];

  const successStories = [
    {
      client: "Bank Nasional Indonesia",
      industry: "Perbankan",
      challenge: "Compliance ISO 27001 untuk digital banking",
      solution: "Implementasi ISMS dan security controls",
      results: [
        "Sertifikasi ISO 27001",
        "30% reduction in security incidents",
        "Improved customer trust",
      ],
      duration: "6 bulan",
      testimonial:
        "BSSN membantu kami mencapai compliance dengan standar internasional secara efisien.",
    },
    {
      client: "PT Telekomunikasi Digital",
      industry: "Telekomunikasi",
      challenge: "Security untuk infrastruktur 5G",
      solution: "Zero Trust Architecture implementation",
      results: [
        "Enhanced network security",
        "99.9% uptime achievement",
        "Regulatory compliance",
      ],
      duration: "8 bulan",
      testimonial:
        "Expertise BSSN dalam teknologi terdepan sangat membantu transformasi digital kami.",
    },
    {
      client: "Kementerian Kesehatan",
      industry: "Pemerintahan",
      challenge: "Proteksi data kesehatan nasional",
      solution: "Comprehensive security framework",
      results: [
        "Data protection compliance",
        "Secure telemedicine platform",
        "Incident response capability",
      ],
      duration: "12 bulan",
      testimonial:
        "Solusi BSSN memberikan perlindungan optimal untuk data sensitif kesehatan masyarakat.",
    },
  ];

  const pricingPlans = [
    {
      name: "Konsultasi Dasar",
      price: "5 juta",
      duration: "1-2 minggu",
      features: [
        "Initial Security Assessment",
        "Risk Identification",
        "Basic Recommendations",
        "Summary Report",
        "2x Follow-up Sessions",
      ],
      ideal: "UKM & Startup",
      popular: false,
    },
    {
      name: "Konsultasi Komprehensif",
      price: "15 juta",
      duration: "3-4 minggu",
      features: [
        "Detailed Security Audit",
        "Risk & Compliance Assessment",
        "Strategic Roadmap",
        "Implementation Guide",
        "6 bulan Support",
        "Executive Presentation",
      ],
      ideal: "Perusahaan Menengah",
      popular: true,
    },
    {
      name: "Konsultasi Enterprise",
      price: "Custom",
      duration: "6-12 minggu",
      features: [
        "End-to-end Security Review",
        "Multi-site Assessment",
        "Custom Framework Development",
        "Team Training Program",
        "12 bulan Ongoing Support",
        "Dedicated Consultant",
      ],
      ideal: "Enterprise & Government",
      popular: false,
    },
  ];

  const stats = [
    {
      icon: Users,
      value: "200+",
      label: "Klien Dilayani",
      description: "Organisasi dari berbagai sektor",
      color: "text-blue-600",
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Rating Kepuasan",
      description: "Berdasarkan feedback klien",
      color: "text-yellow-600",
    },
    {
      icon: Award,
      value: "95%",
      label: "Success Rate",
      description: "Proyek selesai tepat waktu",
      color: "text-green-600",
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Support Tersedia",
      description: "Tim siap membantu Anda",
      color: "text-purple-600",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      red: "bg-red-100 text-red-700 border-red-200",
      blue: "bg-blue-100 text-blue-700 border-blue-200",
      purple: "bg-purple-100 text-purple-700 border-purple-200",
      orange: "bg-orange-100 text-orange-700 border-orange-200",
      green: "bg-green-100 text-green-700 border-green-200",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getPopularityColor = (popularity: string) => {
    const colors = {
      "Sangat Populer": "bg-red-100 text-red-700",
      Populer: "bg-blue-100 text-blue-700",
      Trending: "bg-purple-100 text-purple-700",
    };
    return colors[popularity as keyof typeof colors] || colors["Populer"];
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-background to-purple-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                <Users className="mr-2 h-4 w-4" />
                Konsultasi Keamanan Siber
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Konsultasi <span className="text-blue-600">Expert</span>{" "}
                Keamanan Siber
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Dapatkan panduan strategis dari para ahli keamanan siber BSSN
                untuk mengamankan organisasi Anda dengan solusi yang tepat
                sasaran dan efektif.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Konsultasi Gratis
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="h-5 w-5 mr-2" />
                  Download Brosur
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
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
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="services" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">
                    Layanan Konsultasi Profesional
                  </h2>
                  <p className="text-muted-foreground max-w-3xl mx-auto">
                    Pilih layanan konsultasi yang sesuai dengan kebutuhan dan
                    tingkat kompleksitas organisasi Anda
                  </p>
                </div>

                <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
                  <TabsTrigger value="services">Layanan</TabsTrigger>
                  <TabsTrigger value="process">Proses</TabsTrigger>
                  <TabsTrigger value="team">Tim Ahli</TabsTrigger>
                  <TabsTrigger value="pricing">Harga</TabsTrigger>
                </TabsList>

                {/* Services Tab */}
                <TabsContent value="services" className="space-y-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {consultationTypes.map((service, index) => (
                      <Card
                        key={index}
                        className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l-4 ${getColorClasses(service.color)}`}
                      >
                        <CardHeader>
                          <div className="flex items-start justify-between mb-4">
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
                                <Badge
                                  className={getPopularityColor(
                                    service.popularity,
                                  )}
                                >
                                  {service.popularity}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <CardDescription className="text-sm mb-4">
                            {service.description}
                          </CardDescription>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-3 bg-muted/50 rounded-lg">
                              <div className="text-sm font-medium">Durasi</div>
                              <div className="text-xs text-muted-foreground">
                                {service.duration}
                              </div>
                            </div>
                            <div className="text-center p-3 bg-muted/50 rounded-lg">
                              <div className="text-sm font-medium">
                                Investasi
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {service.price}
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">
                              Fitur Layanan:
                            </h4>
                            <ul className="space-y-1">
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
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">
                              Deliverables:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {service.deliverables.map((item, idx) => (
                                <Badge
                                  key={idx}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {item}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <Button className="w-full group-hover:bg-blue-600 group-hover:text-white transition-all">
                            Konsultasi Sekarang
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Process Tab */}
                <TabsContent value="process" className="space-y-8">
                  <div className="space-y-8">
                    {consultationProcess.map((step, index) => (
                      <Card
                        key={index}
                        className="group hover:shadow-lg transition-all duration-300"
                      >
                        <CardContent className="p-8">
                          <div className="flex items-start space-x-6">
                            <div className="flex-shrink-0">
                              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                                {step.step}
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-4">
                                <div>
                                  <h3 className="text-xl font-bold mb-2 flex items-center">
                                    <step.icon className="h-6 w-6 mr-2 text-blue-600" />
                                    {step.title}
                                  </h3>
                                  <p className="text-muted-foreground">
                                    {step.description}
                                  </p>
                                </div>
                                <Badge variant="outline" className="ml-4">
                                  {step.duration}
                                </Badge>
                              </div>
                              <div>
                                <h4 className="font-semibold mb-2">
                                  Key Activities:
                                </h4>
                                <div className="grid md:grid-cols-2 gap-2">
                                  {step.activities.map((activity, idx) => (
                                    <div
                                      key={idx}
                                      className="text-sm text-muted-foreground flex items-center"
                                    >
                                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                      {activity}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Team Tab */}
                <TabsContent value="team" className="space-y-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {expertTeam.map((expert, index) => (
                      <Card
                        key={index}
                        className="group hover:shadow-xl transition-all duration-300 text-center"
                      >
                        <CardContent className="p-6">
                          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            <span className="text-white font-bold text-2xl">
                              {expert.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <h3 className="font-bold text-lg mb-1">
                            {expert.name}
                          </h3>
                          <p className="text-blue-600 font-medium mb-2">
                            {expert.title}
                          </p>
                          <p className="text-sm text-muted-foreground mb-3">
                            {expert.expertise}
                          </p>
                          <div className="space-y-2">
                            <div className="text-sm">
                              <strong>Experience:</strong> {expert.experience}
                            </div>
                            <div className="text-sm">
                              <strong>Certifications:</strong>
                            </div>
                            <div className="flex flex-wrap gap-1 justify-center">
                              {expert.certifications.map((cert, idx) => (
                                <Badge
                                  key={idx}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {cert}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
                    <CardContent className="p-8 text-center">
                      <h3 className="text-2xl font-bold mb-4">
                        Tim Konsultan Berpengalaman
                      </h3>
                      <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
                        Tim konsultan BSSN terdiri dari para ahli keamanan siber
                        yang memiliki sertifikasi internasional dan pengalaman
                        mendalam di berbagai industri.
                      </p>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-blue-600">
                            50+
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Expert Consultants
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-purple-600">
                            100+
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Certifications
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600">
                            15+
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Years Average Experience
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Pricing Tab */}
                <TabsContent value="pricing" className="space-y-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, index) => (
                      <Card
                        key={index}
                        className={`group hover:shadow-xl transition-all duration-300 text-center ${
                          plan.popular
                            ? "border-blue-500 border-2 scale-105"
                            : ""
                        }`}
                      >
                        {plan.popular && (
                          <div className="bg-blue-600 text-white text-sm font-medium py-2">
                            Most Popular
                          </div>
                        )}
                        <CardHeader>
                          <CardTitle className="text-xl">{plan.name}</CardTitle>
                          <div className="text-3xl font-bold text-blue-600">
                            {plan.price}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Duration: {plan.duration}
                          </div>
                          <Badge variant="outline" className="mt-2">
                            Ideal untuk {plan.ideal}
                          </Badge>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <ul className="space-y-3">
                            {plan.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="text-sm flex items-center"
                              >
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <Button
                            className={`w-full ${
                              plan.popular
                                ? "bg-blue-600 hover:bg-blue-700"
                                : "bg-gray-600 hover:bg-gray-700"
                            }`}
                          >
                            {plan.price === "Custom"
                              ? "Hubungi Kami"
                              : "Pilih Paket"}
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>Custom Enterprise Solutions</CardTitle>
                      <CardDescription>
                        Untuk kebutuhan khusus dan skala enterprise, kami
                        menyediakan solusi konsultasi yang disesuaikan dengan
                        requirement spesifik
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">
                            Enterprise Features:
                          </h4>
                          <ul className="space-y-2">
                            <li className="text-sm flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                              Multi-location assessment
                            </li>
                            <li className="text-sm flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                              Dedicated project manager
                            </li>
                            <li className="text-sm flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                              24/7 support channel
                            </li>
                            <li className="text-sm flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                              Custom framework development
                            </li>
                          </ul>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold mb-2">
                            Hubungi untuk Quote
                          </div>
                          <Button className="bg-purple-600 hover:bg-purple-700">
                            <Phone className="h-4 w-4 mr-2" />
                            Diskusi Kebutuhan
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
              <p className="text-muted-foreground">
                Kisah sukses klien yang telah merasakan manfaat konsultasi BSSN
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {successStories.map((story, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{story.industry}</Badge>
                      <Badge className="bg-green-100 text-green-700">
                        {story.duration}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{story.client}</CardTitle>
                    <CardDescription className="text-sm">
                      <strong>Challenge:</strong> {story.challenge}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Solution:</h4>
                      <p className="text-sm text-muted-foreground">
                        {story.solution}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {story.results.map((result, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-muted-foreground flex items-center"
                          >
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm italic text-blue-700">
                        "{story.testimonial}"
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Mulai Konsultasi Gratis Hari Ini
                </h2>
                <p className="text-xl text-blue-100">
                  Diskusikan kebutuhan keamanan siber organisasi Anda dengan
                  expert consultant kami
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <Card className="bg-white/10 border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">
                      Form Konsultasi
                    </CardTitle>
                    <CardDescription className="text-blue-100">
                      Isi form berikut dan tim kami akan menghubungi Anda dalam
                      24 jam
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white">
                          Nama Lengkap
                        </Label>
                        <Input
                          id="name"
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-white">
                          Perusahaan
                        </Label>
                        <Input
                          id="company"
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="industry" className="text-white">
                          Industri
                        </Label>
                        <Select>
                          <SelectTrigger className="bg-white/20 border-white/30 text-white">
                            <SelectValue placeholder="Pilih industri" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="banking">Perbankan</SelectItem>
                            <SelectItem value="government">
                              Pemerintahan
                            </SelectItem>
                            <SelectItem value="telco">
                              Telekomunikasi
                            </SelectItem>
                            <SelectItem value="healthcare">
                              Kesehatan
                            </SelectItem>
                            <SelectItem value="education">
                              Pendidikan
                            </SelectItem>
                            <SelectItem value="retail">Retail</SelectItem>
                            <SelectItem value="other">Lainnya</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="consultation-type" className="text-white">
                        Jenis Konsultasi
                      </Label>
                      <Select>
                        <SelectTrigger className="bg-white/20 border-white/30 text-white">
                          <SelectValue placeholder="Pilih jenis konsultasi" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="risk-assessment">
                            Security Risk Assessment
                          </SelectItem>
                          <SelectItem value="compliance">
                            Compliance & Governance
                          </SelectItem>
                          <SelectItem value="digital-transformation">
                            Digital Transformation Security
                          </SelectItem>
                          <SelectItem value="incident-response">
                            Incident Response Planning
                          </SelectItem>
                          <SelectItem value="custom">
                            Custom Consultation
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">
                        Deskripsi Kebutuhan
                      </Label>
                      <Textarea
                        id="message"
                        rows={4}
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                        placeholder="Jelaskan kebutuhan konsultasi Anda..."
                      />
                    </div>
                    <Button
                      variant="secondary"
                      className="w-full bg-white text-blue-600 hover:bg-blue-50"
                    >
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Kirim Permintaan Konsultasi
                    </Button>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card className="bg-white/10 border-white/20 text-white">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4 flex items-center">
                        <Phone className="h-5 w-5 mr-2" />
                        Hubungi Langsung
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <div className="font-medium">Hotline Konsultasi</div>
                          <div className="text-blue-200">+6221 77973360</div>
                        </div>
                        <div>
                          <div className="font-medium">Email Konsultasi</div>
                          <div className="text-blue-200">
                            konsultasi@bssn.go.id
                          </div>
                        </div>
                        <div>
                          <div className="font-medium">Jam Operasional</div>
                          <div className="text-blue-200">
                            Senin - Jumat: 08:00 - 17:00 WIB
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/10 border-white/20 text-white">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4">
                        Mengapa Pilih BSSN?
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                          Tim ahli bersertifikat internasional
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                          Pengalaman di berbagai industri
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                          Metodologi terstandarisasi
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                          Support berkelanjutan
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
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

export default Konsultasi;
