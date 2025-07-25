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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  AlertTriangle,
  FileText,
  Send,
  Building,
  Globe,
  Shield,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  reportType: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  organization?: string;
  reportType?: string;
  subject?: string;
  message?: string;
}

const Kontak = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    organization: "",
    reportType: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [showModal, setShowModal] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = {
    name: "BADAN SIBER DAN SANDI NEGARA",
    address: "Jalan Raya Muchtar 70, Bojong Sari, Depok, Jawa Barat – 16516",
    phone: "+6221 77973360",
    email: "humas@bssn.go.id",
    emergencyHotline: "1500-567",
  };

  const officeHours = [
    { day: "Senin - Jumat", hours: "08:00 - 17:00 WIB" },
    { day: "Sabtu - Minggu", hours: "Tutup" },
    { day: "Hotline Darurat", hours: "24/7", highlight: true },
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Telepon",
      description: "Hubungi kami langsung",
      value: contactInfo.phone,
      action: `tel:${contactInfo.phone}`,
      color: "blue",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Kirim email untuk pertanyaan umum",
      value: contactInfo.email,
      action: `mailto:${contactInfo.email}`,
      color: "green",
    },
    {
      icon: AlertTriangle,
      title: "Hotline Darurat",
      description: "Laporan insiden keamanan siber",
      value: contactInfo.emergencyHotline,
      action: `tel:${contactInfo.emergencyHotline}`,
      color: "red",
    },
  ];

  const reportTypes = [
    "Insiden Keamanan Siber",
    "Serangan Malware",
    "Phishing/Penipuan Online",
    "Pelanggaran Data",
    "Website Diretas",
    "Ancaman Siber Lainnya",
    "Pertanyaan Umum",
    "Permintaan Informasi",
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-700 border-blue-200",
      green: "bg-green-100 text-green-700 border-green-200",
      red: "bg-red-100 text-red-700 border-red-200",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    let isValid = true;

    // Validate name
    if (!formData.name.trim()) {
      errors.name = "Nama lengkap harus diisi";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      errors.name = "Nama minimal harus 2 karakter";
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Email harus diisi";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Format email tidak valid";
      isValid = false;
    }

    // Validate phone
    const phoneRegex =
      /^(\+62|62|0)[\s\-]?\d{3,4}[\s\-]?\d{3,4}[\s\-]?\d{3,4}$/;
    if (!formData.phone.trim()) {
      errors.phone = "Nomor telepon harus diisi";
      isValid = false;
    } else if (!phoneRegex.test(formData.phone.replace(/[\s\-]/g, ""))) {
      errors.phone = "Format nomor telepon tidak valid";
      isValid = false;
    }

    // Validate organization
    if (!formData.organization.trim()) {
      errors.organization = "Organisasi/Instansi harus diisi";
      isValid = false;
    }

    // Validate report type
    if (!formData.reportType) {
      errors.reportType = "Jenis laporan harus dipilih";
      isValid = false;
    }

    // Validate subject
    if (!formData.subject.trim()) {
      errors.subject = "Subjek harus diisi";
      isValid = false;
    } else if (formData.subject.trim().length < 5) {
      errors.subject = "Subjek harus minimal 5 karakter";
      isValid = false;
    }

    // Validate message
    if (!formData.message.trim()) {
      errors.message = "Deskripsi detail harus diisi";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      errors.message = "Deskripsi harus minimal 10 karakter";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setShowModal(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        reportType: "",
        subject: "",
        message: "",
      });
    } else {
      setSubmitStatus("error");
      setShowModal(true);
    }

    setIsSubmitting(false);
  };

  const closeModal = () => {
    setShowModal(false);
    setSubmitStatus(null);
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
                <Phone className="mr-2 h-4 w-4" />
                Hubungi Kami
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                <span className="text-blue-600">Hubungi</span> BSSN
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Tim BSSN siap membantu Anda dalam hal keamanan siber. Hubungi
                kami untuk konsultasi, pelaporan insiden, atau informasi layanan
                kami.
              </p>
            </div>
          </div>
        </section>

        {/* Emergency Banner */}
        <section className="py-6 bg-red-600 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-6 w-6 animate-pulse" />
                <span className="font-semibold">
                  Darurat Keamanan Siber 24/7
                </span>
              </div>
              <Button
                variant="secondary"
                size="lg"
                asChild
                className="bg-white text-red-600 hover:bg-red-50"
              >
                <a href={`tel:${contactInfo.emergencyHotline}`}>
                  <Phone className="h-5 w-5 mr-2" />
                  {contactInfo.emergencyHotline}
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Cara Menghubungi Kami</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Pilih metode komunikasi yang paling sesuai dengan kebutuhan Anda
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 ${getColorClasses(method.color)}`}
                >
                  <CardHeader className="text-center">
                    <div
                      className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${getColorClasses(method.color)}`}
                    >
                      <method.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div className="text-lg font-bold">{method.value}</div>
                    <Button
                      asChild
                      className={`w-full ${
                        method.color === "red"
                          ? "bg-red-600 hover:bg-red-700"
                          : method.color === "green"
                            ? "bg-green-600 hover:bg-green-700"
                            : "bg-blue-600 hover:bg-blue-700"
                      }`}
                    >
                      <a href={method.action}>
                        <method.icon className="h-4 w-4 mr-2" />
                        {method.color === "red"
                          ? "Hubungi Darurat"
                          : method.color === "green"
                            ? "Kirim Email"
                            : "Telepon Sekarang"}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Office Information */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Office Details */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Kantor Pusat</h2>
                    <p className="text-muted-foreground">
                      Kunjungi kantor pusat BSSN untuk konsultasi langsung atau
                      layanan yang memerlukan pertemuan tatap muka.
                    </p>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Building className="h-5 w-5 mr-2 text-blue-600" />
                        Informasi Alamat
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-lg mb-2">
                          {contactInfo.name}
                        </h3>
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {contactInfo.address}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                        <div className="flex items-center space-x-3">
                          <Phone className="h-4 w-4 text-blue-600" />
                          <span className="text-sm">{contactInfo.phone}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="h-4 w-4 text-blue-600" />
                          <span className="text-sm">{contactInfo.email}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Clock className="h-5 w-5 mr-2 text-green-600" />
                        Jam Operasional
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {officeHours.map((schedule, index) => (
                          <div
                            key={index}
                            className={`flex justify-between items-center p-3 rounded-lg ${
                              schedule.highlight
                                ? "bg-red-50 border border-red-200"
                                : "bg-muted/50"
                            }`}
                          >
                            <span
                              className={`font-medium ${
                                schedule.highlight ? "text-red-700" : ""
                              }`}
                            >
                              {schedule.day}
                            </span>
                            <span
                              className={`${
                                schedule.highlight
                                  ? "text-red-600 font-bold"
                                  : "text-muted-foreground"
                              }`}
                            >
                              {schedule.hours}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Site Map */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                        Peta Lokasi
                      </CardTitle>
                      <CardDescription>
                        Lokasi kantor pusat BSSN untuk memudahkan kunjungan Anda
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="w-full h-[400px] rounded-lg overflow-hidden border border-border">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.896447731362!2d106.74241101057056!3d-6.4073393935566285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e89508d65a39%3A0xdb839ef71e638af0!2sBadan%20Siber%20dan%20Sandi%20Negara%20(BSSN)!5e0!3m2!1sen!2sid!4v1753261220289!5m2!1sen!2sid"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Lokasi Kantor Pusat BSSN"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Report Form */}
                <div id="report-form" className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Buat Laporan</h2>
                    <p className="text-muted-foreground">
                      Laporkan insiden keamanan siber atau ajukan pertanyaan
                      melalui formulir di bawah ini.
                    </p>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <FileText className="h-5 w-5 mr-2 text-orange-600" />
                        Formulir Laporan
                      </CardTitle>
                      <CardDescription>
                        Isi formulir ini untuk membuat laporan atau mengajukan
                        pertanyaan
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Nama Lengkap</Label>
                            <Input
                              id="name"
                              value={formData.name}
                              onChange={(e) =>
                                handleInputChange("name", e.target.value)
                              }
                              placeholder="Masukkan nama lengkap"
                              className={
                                formErrors.name ? "border-red-500" : ""
                              }
                            />
                            {formErrors.name && (
                              <p className="text-sm text-red-600 flex items-center">
                                <XCircle className="h-4 w-4 mr-1" />
                                {formErrors.name}
                              </p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) =>
                                handleInputChange("email", e.target.value)
                              }
                              placeholder="nama@contoh.com"
                              className={
                                formErrors.email ? "border-red-500" : ""
                              }
                            />
                            {formErrors.email && (
                              <p className="text-sm text-red-600 flex items-center">
                                <XCircle className="h-4 w-4 mr-1" />
                                {formErrors.email}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="phone">Nomor Telepon</Label>
                            <Input
                              id="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={(e) =>
                                handleInputChange("phone", e.target.value)
                              }
                              placeholder="+62 xxx-xxxx-xxxx"
                              className={
                                formErrors.phone ? "border-red-500" : ""
                              }
                            />
                            {formErrors.phone && (
                              <p className="text-sm text-red-600 flex items-center">
                                <XCircle className="h-4 w-4 mr-1" />
                                {formErrors.phone}
                              </p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="organization">
                              Organisasi/Instansi
                            </Label>
                            <Input
                              id="organization"
                              value={formData.organization}
                              onChange={(e) =>
                                handleInputChange(
                                  "organization",
                                  e.target.value,
                                )
                              }
                              placeholder="Nama organisasi"
                              className={
                                formErrors.organization ? "border-red-500" : ""
                              }
                            />
                            {formErrors.organization && (
                              <p className="text-sm text-red-600 flex items-center">
                                <XCircle className="h-4 w-4 mr-1" />
                                {formErrors.organization}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="report-type">Jenis Laporan</Label>
                          <Select
                            value={formData.reportType}
                            onValueChange={(value) =>
                              handleInputChange("reportType", value)
                            }
                          >
                            <SelectTrigger
                              className={
                                formErrors.reportType ? "border-red-500" : ""
                              }
                            >
                              <SelectValue placeholder="Pilih jenis laporan" />
                            </SelectTrigger>
                            <SelectContent>
                              {reportTypes.map((type, index) => (
                                <SelectItem
                                  key={index}
                                  value={type.toLowerCase().replace(/ /g, "-")}
                                >
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {formErrors.reportType && (
                            <p className="text-sm text-red-600 flex items-center">
                              <XCircle className="h-4 w-4 mr-1" />
                              {formErrors.reportType}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject">Subjek</Label>
                          <Input
                            id="subject"
                            value={formData.subject}
                            onChange={(e) =>
                              handleInputChange("subject", e.target.value)
                            }
                            placeholder="Ringkasan singkat masalah atau pertanyaan"
                            className={
                              formErrors.subject ? "border-red-500" : ""
                            }
                          />
                          {formErrors.subject && (
                            <p className="text-sm text-red-600 flex items-center">
                              <XCircle className="h-4 w-4 mr-1" />
                              {formErrors.subject}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Deskripsi Detail</Label>
                          <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) =>
                              handleInputChange("message", e.target.value)
                            }
                            placeholder="Jelaskan secara detail masalah, insiden, atau pertanyaan Anda..."
                            rows={6}
                            className={
                              formErrors.message ? "border-red-500" : ""
                            }
                          />
                          {formErrors.message && (
                            <p className="text-sm text-red-600 flex items-center">
                              <XCircle className="h-4 w-4 mr-1" />
                              {formErrors.message}
                            </p>
                          )}
                        </div>

                        <div className="space-y-4">
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <div className="flex items-start space-x-3">
                              <AlertTriangle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                              <div className="text-sm text-blue-700">
                                <strong>Untuk Insiden Darurat:</strong> Jika ini
                                adalah insiden keamanan siber yang sedang
                                terjadi, segera hubungi hotline darurat{" "}
                                <strong>{contactInfo.emergencyHotline}</strong>{" "}
                                untuk respons cepat.
                              </div>
                            </div>
                          </div>

                          <Button
                            type="submit"
                            className="w-full bg-orange-600 hover:bg-orange-700"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                Mengirim...
                              </>
                            ) : (
                              <>
                                <Send className="h-4 w-4 mr-2" />
                                Kirim Laporan
                              </>
                            )}
                          </Button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold">Layanan Lainnya</h2>
              <p className="text-xl text-muted-foreground">
                Jelajahi layanan BSSN lainnya yang mungkin Anda butuhkan
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <Shield className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Gov-CSIRT Indonesia</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Tim Tanggap Insiden Siber Sektor Administrasi Pemerintahan
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/layanan-aduan/gov-csirt-indonesia">Pelajari</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="text-center group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <Globe className="h-8 w-8 text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Berita & Informasi</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Berita dan edukasi keamanan siber
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/informasi-regulasi/berita">Baca</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="text-center group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <Building className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Tentang BSSN</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Profil dan struktur organisasi
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/profil/tentang-bssn">Jelajahi</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Success/Error Modal */}
      <Dialog open={showModal} onOpenChange={closeModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              {submitStatus === "success" ? (
                <>
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span>Laporan Berhasil Dikirim</span>
                </>
              ) : (
                <>
                  <XCircle className="h-6 w-6 text-red-600" />
                  <span>Laporan Gagal Dikirim</span>
                </>
              )}
            </DialogTitle>
            <DialogDescription>
              {submitStatus === "success" ? (
                <div className="space-y-3">
                  <p>
                    Laporan Anda telah berhasil dikirim ke tim BSSN. Kami akan
                    segera menindaklanjuti laporan Anda.
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="text-sm text-green-700">
                      <strong>Langkah Selanjutnya:</strong>
                    </p>
                    <ul className="text-sm text-green-600 mt-1 space-y-1">
                      <li>• Tim kami akan meninjau laporan dalam 1x24 jam</li>
                      <li>• Anda akan menerima konfirmasi melalui email</li>
                      <li>
                        • Untuk insiden mendesak, hubungi{" "}
                        {contactInfo.emergencyHotline}
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <p>
                    Terdapat kesalahan dalam pengisian formulir. Mohon periksa
                    kembali data yang Anda masukkan:
                  </p>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-sm text-red-700 font-medium mb-2">
                      Kesalahan yang ditemukan:
                    </p>
                    <ul className="text-sm text-red-600 space-y-1">
                      {Object.entries(formErrors).map(([field, error]) => (
                        <li key={field} className="flex items-center">
                          <XCircle className="h-3 w-3 mr-1 flex-shrink-0" />
                          <span className="capitalize">
                            {field === "reportType"
                              ? "Jenis Laporan"
                              : field === "name"
                                ? "Nama Lengkap"
                                : field === "email"
                                  ? "Email"
                                  : field === "phone"
                                    ? "Nomor Telepon"
                                    : field === "organization"
                                      ? "Organisasi/Instansi"
                                      : field === "subject"
                                        ? "Subjek"
                                        : field === "message"
                                          ? "Deskripsi Detail"
                                          : field}
                          </span>
                          : {error}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end">
            <Button
              onClick={closeModal}
              className={
                submitStatus === "success"
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-red-600 hover:bg-red-700"
              }
            >
              {submitStatus === "success" ? "Tutup" : "Perbaiki Form"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Kontak;
