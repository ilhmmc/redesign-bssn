import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Search,
  Users,
  Building2,
  CheckCircle,
  Star,
  MapPin,
  Phone,
  Mail,
  Award,
  Tool,
} from "lucide-react";

const AlatDirektoriProfesional = () => {
  const professionalCategories = [
    {
      title: "Auditor Keamanan Siber",
      count: "125+",
      description: "Auditor bersertifikat untuk assessment keamanan IT",
      icon: CheckCircle,
    },
    {
      title: "Lembaga Konsultan",
      count: "48+",
      description: "Konsultan keamanan siber dan sandi terpercaya",
      icon: Building2,
    },
    {
      title: "Instrumen Kematangan",
      count: "15+",
      description: "Tools untuk mengukur tingkat kematangan cyber security",
      icon: Tool,
    },
  ];

  const featuredProfessionals = [
    {
      name: "PT. Cyber Security Indonesia",
      type: "Lembaga Konsultan",
      location: "Jakarta",
      rating: 4.8,
      specialization: "ISO 27001, Risk Assessment",
      verified: true,
    },
    {
      name: "John Doe, CISSP",
      type: "Auditor Individual",
      location: "Bandung",
      rating: 4.9,
      specialization: "Penetration Testing, Compliance Audit",
      verified: true,
    },
    {
      name: "CV. SecureIT Solutions",
      type: "Lembaga Konsultan",
      location: "Surabaya",
      rating: 4.7,
      specialization: "CSIRT Implementation, SOC Design",
      verified: true,
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
                Direktori Profesional
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Alat & <span className="gradient-text">Direktori</span>{" "}
                Profesional
              </h1>

              <p className="text-lg text-muted-foreground">
                Daftar auditor, lembaga konsultan, dan instrumen kematangan
                siber yang terpercaya
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input
                    placeholder="Cari auditor, konsultan, atau lembaga..."
                    className="pl-10 h-12 text-lg"
                  />
                  <Button className="absolute right-2 top-1 h-10">Cari</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl font-bold">Kategori Profesional</h2>
                <p className="text-xl text-muted-foreground">
                  Temukan profesional dan alat yang sesuai kebutuhan Anda
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {professionalCategories.map((category, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-government-500 to-cyber-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <category.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl">
                        {category.title}
                      </CardTitle>
                      <div className="text-3xl font-bold text-government-600">
                        {category.count}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-center text-muted-foreground">
                        {category.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Professionals Section */}
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl font-bold">Profesional Unggulan</h2>
                <p className="text-xl text-muted-foreground">
                  Auditor dan konsultan terpercaya dengan rating tertinggi
                </p>
              </div>

              <div className="space-y-6">
                {featuredProfessionals.map((professional, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-semibold">
                              {professional.name}
                            </h3>
                            {professional.verified && (
                              <Badge className="bg-green-100 text-green-700">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                Terverifikasi
                              </Badge>
                            )}
                          </div>

                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                            <span className="flex items-center">
                              <Building2 className="h-4 w-4 mr-1" />
                              {professional.type}
                            </span>
                            <span className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {professional.location}
                            </span>
                            <span className="flex items-center">
                              <Star className="h-4 w-4 mr-1 text-yellow-500" />
                              {professional.rating}
                            </span>
                          </div>

                          <p className="text-sm mb-4">
                            <span className="font-medium">Spesialisasi:</span>{" "}
                            {professional.specialization}
                          </p>

                          <div className="flex space-x-3">
                            <Button size="sm" variant="outline">
                              <Phone className="h-4 w-4 mr-2" />
                              Kontak
                            </Button>
                            <Button size="sm" variant="outline">
                              <Mail className="h-4 w-4 mr-2" />
                              Email
                            </Button>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="w-16 h-16 bg-gradient-to-br from-government-500 to-cyber-500 rounded-full flex items-center justify-center mb-2">
                            <Users className="h-8 w-8 text-white" />
                          </div>
                          <Button size="sm">Lihat Detail</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl font-bold">Instrumen Kematangan</h2>
                <p className="text-xl text-muted-foreground">
                  Tools untuk mengukur dan meningkatkan kematangan keamanan
                  siber
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Tool className="h-6 w-6 text-government-600" />
                      <span>Cyber Security Maturity Model</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Framework untuk mengevaluasi tingkat kematangan keamanan
                      siber organisasi
                    </p>
                    <Button className="w-full" variant="outline">
                      Download Tool
                    </Button>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Award className="h-6 w-6 text-cyber-600" />
                      <span>Risk Assessment Toolkit</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Alat untuk mengidentifikasi dan menilai risiko keamanan
                      informasi
                    </p>
                    <Button className="w-full" variant="outline">
                      Download Tool
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-government-50 to-cyber-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold">
                Daftarkan Diri Sebagai Profesional
              </h2>
              <p className="text-xl text-muted-foreground">
                Bergabunglah dengan direktori profesional keamanan siber BSSN
                dan tingkatkan visibilitas bisnis Anda
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-government-600 hover:bg-government-700"
                >
                  <Users className="h-5 w-5 mr-2" />
                  Daftar Sebagai Profesional
                </Button>
                <Button variant="outline" size="lg">
                  Panduan Pendaftaran
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

export default AlatDirektoriProfesional;
