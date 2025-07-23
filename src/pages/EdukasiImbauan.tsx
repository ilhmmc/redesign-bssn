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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Search,
  Filter,
  Shield,
  Lock,
  Smartphone,
  Wifi,
  Mail,
  CreditCard,
  Globe,
  Users,
  Download,
  PlayCircle,
  FileText,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Target,
  Eye,
  Calendar,
  Clock,
  Bug,
  Database,
  Server,
  ExternalLink,
  Phone,
  TrendingUp,
  Award,
  GraduationCap,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

const EdukasiImbauan = () => {
  // Konten Utama Budaya Keamanan Informasi
  const mainContent = {
    title: "Budaya Keamanan Informasi",
    content: `Pemanfaatan internet telah mengubah pola hidup dan budaya manusia dalam belajar, bekerja, berkomunikasi, berbelanja dan aspek lainnya. Saat ini masyarakat lebih banyak menggunakan internet dalam berkomunikasi seperti surat elektronik (e-mail) serta jejaring sosial (social networking) yang dianggap lebih efektif dan efisien. Kini kita berkomunikasi di dunia maya sama seperti halnya ketika berkomunikasi di dunia nyata. Informasi yang didapatkan semakin terbuka baik konten positif maupun negatif.

Pengaruh konten negatif sudah sering diberitakan di berbagai media berupa pemuatan gambar porno, perjudian, penipuan, pelecehan, pencemaran nama baik dan berita bohong. Selain itu penggunaan jejaring sosial juga memiliki dampak negatif, salah satunya adalah cyberbullying yang biasanya menimpa anak-anak dan sesama remaja. Bahkan kejahatan dunia maya yang dikenal sebagai cybercrime sudah sampai pada peretasan situs-situs penting dalam negeri.

Untuk menghindari kejahatan di dunia maya, selalu ditekankan prinsip dasar yang harus diketahui dalam menggunakan internet. Prinsip dasar di dunia nyata berlaku pula di dunia maya. Penggunaan internet secara sehat dan aman perlu ditanamkan semenjak dini melalui pembelajaran etika berinternet secara sehat (cyber ethics). Hal ini perlu disampaikan untuk menghindari kebiasaan jelek di dunia nyata akan terbawa di dunia maya dan menimbulkan kembali efek negatif di dunia nyata.

Internet sehat dan aman perlu disosialisasikan kepada pelajar, orangtua, guru, kaum lanjut usia, penyandang disabilitas serta seluruh lapisan masyarakat lain yang kemungkinan rentan kejahatan siber sehingga pemanfaatan internet dapat tetap aman dan dilakukan dengan penuh tanggung jawab. Kesadaran generasi muda akan potensi sekaligus risiko internet harus terus ditumbuhkan begitu pula dengan kepedulian orangtua untuk terus mendampingi dan mengawasi putra-putrinya agar terhindar dari konten negatif dan mendorong untuk lebih cerdas dalam menciptakan kreativitas.`,
  };

  // Data Edukasi dan Tips berdasarkan konten BSSN
  const edukasiTopics = [
    {
      id: 1,
      title: "Cara Mengatasi Cyberbullying",
      description:
        "Panduan lengkap untuk mengidentifikasi, mengatasi, dan mencegah cyberbullying di berbagai platform digital.",
      category: "Perlindungan Anak",
      icon: Shield,
      path: "/informasi-regulasi/edukasi-imbauan-keamanan/cara-mengatasi-cyberbullying",
      featured: true,
    },
    {
      id: 2,
      title: "Tips untuk Guru dalam Merespon Bullying",
      description:
        "Strategi praktis bagi pendidik untuk mengenali, menangani, dan mencegah bullying di lingkungan sekolah.",
      category: "Pendidikan",
      icon: GraduationCap,
      path: "/informasi-regulasi/edukasi-imbauan-keamanan/tips-guru-respon-bullying",
      featured: true,
    },
    {
      id: 3,
      title: "Tips Membicarakan Bullying dengan Anak",
      description:
        "Panduan untuk orangtua dalam berkomunikasi dengan anak tentang bullying dan keamanan online.",
      category: "Parenting",
      icon: Users,
      path: "/informasi-regulasi/edukasi-imbauan-keamanan/bicara-bullying-anak",
      featured: false,
    },
    {
      id: 4,
      title: "Waspada Dampak Buruk Gadget pada Anak",
      description:
        "Informasi tentang risiko penggunaan gadget berlebihan dan cara melindungi anak dari dampak negatifnya.",
      category: "Kesehatan Digital",
      icon: Smartphone,
      path: "/informasi-regulasi/edukasi-imbauan-keamanan/dampak-gadget-anak",
      featured: false,
    },
    {
      id: 5,
      title: "Tips Aman Berinternet",
      description:
        "Panduan praktis untuk browsing yang aman, melindungi data pribadi, dan menghindari ancaman online.",
      category: "Keamanan Online",
      icon: Globe,
      path: "/informasi-regulasi/edukasi-imbauan-keamanan/tips-aman-berinternet",
      featured: true,
    },
    {
      id: 6,
      title: "Tips Memulai Bisnis untuk Penyandang Disabilitas",
      description:
        "Panduan khusus untuk penyandang disabilitas dalam memulai bisnis online dengan aman dan sukses.",
      category: "Inklusi Digital",
      icon: Award,
      path: "/informasi-regulasi/edukasi-imbauan-keamanan/bisnis-disabilitas",
      featured: false,
    },
    {
      id: 7,
      title: "Aplikasi Bantu Penyandang Disabilitas",
      description:
        "Kumpulan aplikasi dan tools digital yang dapat membantu penyandang disabilitas dalam aktivitas sehari-hari.",
      category: "Aksesibilitas",
      icon: Smartphone,
      path: "/informasi-regulasi/edukasi-imbauan-keamanan/aplikasi-disabilitas",
      featured: false,
    },
  ];

  // Data Imbauan Keamanan dari security advisory content
  const imauanKeamananData = [
    {
      id: 1,
      title: "Imbauan Keamanan Bahaya Malware APK Atas Nama Pemilu 2024",
      author: "Admin Website",
      date: "10 February 2024",
      categories: ["Info Terkini", "Security Advisory"],
      content: `Tiga malware yang teridentifikasi berkaitan dengan Pemilu 2024 dengan ekstensi APK menghadirkan ancaman serius terhadap keamanan dan privasi pengguna. Malware tersebut berfungsi untuk mengambil informasi dan kredensial dari perangkat yang terinfeksi. Mirip dengan malware undangan pernikahan.apk, salah satu penyebaran ketiga malware tersebut adalah melalui pesan Whatsapp. Serangan ini mencoba mengelabui pengguna untuk mengunduh dokumen palsu yang sebenarnya bertujuan meretas perangkat pribadi. Perlu memastikan untuk tidak mengunduh atau membuka dokumen dari sumber yang tidak dikenal guna melindungi keamanan pribadi dan perangkat pribadi dari potensi serangan malware atau pencurian data.`,
      pdfFile: "SA-CVE-2024-APK-PEMILU-2024-2_signed.pdf",
      comments: 0,
    },
    {
      id: 2,
      title:
        "Langkah-langkah Penanggulangan Insiden Web Defacement: Judi Online",
      author: "Admin Website",
      date: "Jul 28, 2023",
      categories: ["Info Terkini", "Security Advisory"],
      content: `Beberapa waktu ini banyak ditemukan insiden serangan siber yang terjadi di Indonesia. Salah satu insiden siber tersebut yaitu insiden web defacement yang terjadi pada situs pemerintahan dan pendidikan. Web defacement yang sangat marak belakangan ini tentang "Web Defacement Slot Gacor atau Judi Online" di mana penyerang melakukan perubahan tampilan pada situs dengan mengganti tampilan menjadi judi online.

Dokumen ini disusun atas maraknya insiden yang terjadi. Dokumen berisikan tentang bagaimana alur serangan web defacement terjadi dan bagaimana cara melakukan penanggulangan dan pemulihan atas insiden yang terjadi serta bagaimana cara mitigasi untuk meminimalisir kemungkinan terkena serangan web defacement pada sebuah situs website.`,
      pdfFile: "Panduan-Penanganan-Insiden-Web-Defacement-Judi-Online.pdf",
      comments: 0,
    },
    {
      id: 3,
      title: "Imbauan Keamanan Modus Penipuan Perbankan",
      author: "Admin Website",
      date: "Jul 21, 2023",
      categories: ["Security Advisory"],
      content: `Serangan phishing pada nasabah bank sering dilakukan dengan modus penipu berpura-pura menjadi bank dan mengirim pesan palsu yang meminta data pribadi atau keuangan nasabah. Biasanya korban akan terkecoh dan memberikan info sensitifnya, sehingga penipu dapat mencuri uang atau data pribadi milik korban. Penipu biasa melancarkan aksinya melalui pesan palsu, seperti email, Pesan WhatsApp, atau SMS.

Tujuan dari penyerangan ini adalah untuk memperoleh informasi pribadi, seperti kata sandi atau nomor kartu kredit, dengan mengarahkan nasabah ke situs palsu yang tampak sah.`,
      pdfFile: "Phising-Modus-Peninpuan-Perbankan.pdf",
      comments: 0,
    },
    {
      id: 4,
      title:
        "Imbauan Keamanan Modus Penipuan Menggunakan Undangan Pernikahan Elektronik .APK",
      author: "Admin Website",
      date: "Jan 29, 2023",
      categories: ["Security Advisory"],
      content: `Waspadai modus penipuan menggunakan berkas Android Package Kit (.apk) undangan pernikahan elektronik. Berkas .apk tersebut dikirimkan melalui aplikasi perpesanan WhatsApp. Jika penerima pesan mengakses berkas .apk tersebut maka penjahat akan mendapatkan akses terhadap SMS korban termasuk token SMS-banking.

Cara kerja dari modus kejahatan siber ini adalah sebagai berikut. Jika diklik aplikasi tersebut akan meminta akses untuk melakukan aktivitas Baca SMS atau MMS. Jika diizinkan maka SMS yang tersimpan di HP atau kartu SIM akan dapat dibaca oleh aktor jahat.

Akses selanjutnya yang diminta adalah untuk melakukan aktivitas Terima SMS juga akan diminta. Jika diizinkan maka aktor jahat dapat memonitor dan atau menghapus pesan tanpa sepengetahuan korban.

Akses selanjutnya yang diminta adalah untuk melakukan aktivitas Kirim SMS. Jika diizinkan maka aktor jahat dapat mengirimkan SMS berbayar tanpa perlu melakuan konfirmasi terlenih dahulu kepada korban.

Ketika seluruh permintaan tersebut diberikan maka aplikasi tersebut terpasang di perangkat android milik korban, aktor jahat memiliki kemungkinan untuk mengakses riwayat informasi SMS-Banking seperti kode pin dari riwayat SMS yang biasanya tidak dihapus oleh korban. Berbekal informasi tersebut aktor jahat dapat melakukan pengiriman uang dari rekening korban.

Panduan mitigasi yang disarankan untuk meminimalisasi risiko keamanan dari modus penipuan menggunakan berkas .apk undangan pernikahan elektronik adalah tidak asal membuka tautan atau executable file.Modus pengiriman file .apk merupakan media paling sering yang digunakan oleh aktor jahat untuk menjebak korban. Selain itu gunakan hanya mengunduh dan menginstal aplikasi dari sumber aplikasi resmi (Play Store atau iOS App Store). Teliti dalam memberikan izin akses terhadap aplikasi yang diinstal.

Untuk meningkatkan keamanan, perbarui sistem operasi, aplikasi/software, firmware, dan web browser secara berkala untuk meningkatkan keamanan perangkat dari kerawanan yang ada. Perbarui juga kata sandi secara berkala. Gunakan antivirus dan perangkat keamanan yang terkini serta lakukan pemindaian baik terhadap storage maupun memory secara berkala.`,
      pdfFile: "Kerentanan-file-dot-apk-undangan-pernikahan.pdf",
      comments: 0,
    },
    {
      id: 5,
      title:
        "Imbauan Keamanan CVE-2022-42821 Kerentanan Mekanisme Gatekeeper MacOS Monterey 12.6.2, MacOS Big Sur 11.7.2, dan MacOS Ventura 13",
      author: "Admin Website",
      date: "Jan 6, 2023",
      categories: ["Security Advisory"],
      content: `Gatekeeper merupakan teknologi yang dirancang untuk memastikan hanya perangkat lunak tepercaya yang dapat dijalankan di lingkungan MacOS saat pengguna mengunduh dan membuka aplikasi, plug–in, atau paket penginstal dari luar App Store.

Gatekeeper memverifikasi perangkat lunak tersebut tidak diubah sejak dirilis oleh pengembang dan bebas dari konten berbahaya. Gatekeeper juga memberikan notifikasi dan meminta izin kepada pengguna sebelum unduhan perangkat lunak untuk pertama kalinya dibuka untuk memastikan pengguna menyadari dan tidak tertipu file yang mereka unduh dan jalankan tersebut merupakan kode yang dapat dieksekusi dan bukan sekadar file data semata.

Berdasarkan nilai CVSS yang dikeluarkan oleh NVD, CVE–2022–42821 dikategorikan sebagai kerentanan dengan kategori medium dengan skor 5.5. Kerentanan tersebut dapat menyebabkan penyerang bisa mengakses dan modifikasi informasi.

Pengguna dengan versi MacOS yang terdampak dapat meng-update ke MacOS versi terbaru untuk memitigasi risiko ancaman tersebut.`,
      pdfFile: "CVE-2022-42821.pdf",
      comments: 0,
    },
  ];

  // Helper function for date formatting
  const formatImauanDate = (dateString: string) => {
    // Handle different date formats
    if (dateString.includes("February")) {
      return dateString;
    }

    const monthMap: { [key: string]: string } = {
      Jan: "Januari",
      Jul: "Juli",
    };

    const parts = dateString.split(" ");
    if (parts.length === 3) {
      const month = monthMap[parts[0]] || parts[0];
      return `${parts[1]} ${month} ${parts[2]}`;
    }

    return dateString;
  };

  // Data Imbauan Keamanan dari security advisory
  const securityAdvisories = [
    {
      id: "BSSN-2025-001",
      title: "Kerentanan SQL Injection pada Zabbix Frontend (CVE-2024-42327)",
      description:
        "Kerentanan SQL Injection ditemukan pada frontend Zabbix, khususnya dalam kelas CUser pada fungsi addRelatedObjects. Segera lakukan update ke versi terbaru.",
      severity: "critical",
      category: "Vulnerability",
      date: "2025-01-15",
      affected: "Zabbix Frontend",
      cvss: "9.1",
      status: "Patch Available",
      cve: "CVE-2024-42327",
    },
    {
      id: "BSSN-2025-002",
      title:
        "OS Command Injection pada Palo Alto Networks Expedition (CVE-2025-0107)",
      description:
        "Kerentanan command injection yang memungkinkan penyerang tanpa autentikasi menjalankan perintah sistem operasi secara arbitrer pada Palo Alto Networks Expedition.",
      severity: "critical",
      category: "Network Security",
      date: "2025-01-14",
      affected: "Palo Alto Networks",
      cvss: "9.8",
      status: "Vendor Notified",
      cve: "CVE-2025-0107",
    },
    {
      id: "BSSN-2025-003",
      title: "Remote Code Execution pada Wazuh (CVE-2025-24016)",
      description:
        "Kerentanan remote code execution pada Wazuh versi 4.4.0 hingga sebelum 4.9.1 yang disebabkan oleh deserialisasi tidak aman dalam API server.",
      severity: "high",
      category: "Security Platform",
      date: "2025-01-12",
      affected: "Wazuh 4.4.0-4.9.0",
      cvss: "8.8",
      status: "Patch Available",
      cve: "CVE-2025-24016",
    },
    {
      id: "BSSN-2025-004",
      title: "Privilege Escalation pada Grafana (CVE-2023-4822)",
      description:
        "Kerentanan privilege escalation ditemukan pada produk Grafana yang dapat dieksploitasi untuk mendapatkan akses administrator.",
      severity: "high",
      category: "Monitoring Tool",
      date: "2025-01-10",
      affected: "Grafana",
      cvss: "7.8",
      status: "Mitigating",
      cve: "CVE-2023-4822",
    },
    {
      id: "BSSN-2025-005",
      title: "Aktivitas Kelompok Ancaman Siber Menargetkan Pemerintah",
      description:
        "Terdeteksi indikasi aktivitas siber yang memanfaatkan teknik serangan seperti SQL Injection, Bruteforce Attack, XSS Exploit, Mail Phishing, dan DDoS terhadap instansi pemerintah.",
      severity: "high",
      category: "Threat Intelligence",
      date: "2025-01-08",
      affected: "Instansi Pemerintah",
      cvss: "8.0",
      status: "Active Monitoring",
    },
  ];

  const quickTips = [
    {
      title: "Gunakan Two-Factor Authentication (2FA)",
      description: "Aktifkan 2FA di semua akun penting untuk keamanan berlapis",
      icon: Lock,
      priority: "high",
    },
    {
      title: "Update Software Secara Berkala",
      description: "Selalu update sistem operasi dan aplikasi ke versi terbaru",
      icon: Shield,
      priority: "high",
    },
    {
      title: "Waspada Email Phishing",
      description:
        "Jangan klik link dari email yang mencurigakan atau tidak dikenal",
      icon: Mail,
      priority: "high",
    },
    {
      title: "Backup Data Penting",
      description:
        "Lakukan backup rutin data penting ke cloud atau storage eksternal",
      icon: FileText,
      priority: "medium",
    },
    {
      title: "Gunakan Password yang Kuat",
      description:
        "Buat password unik minimal 12 karakter dengan kombinasi huruf, angka, dan simbol",
      icon: Lock,
      priority: "high",
    },
    {
      title: "Hati-hati di Wi-Fi Publik",
      description: "Hindari akses data sensitif saat menggunakan Wi-Fi publik",
      icon: Wifi,
      priority: "medium",
    },
  ];

  const interactiveContent = [
    {
      title: "Simulator Phishing Email",
      description:
        "Latih kemampuan mengenali email phishing dengan simulator interaktif kami",
      type: "Interactive",
      duration: "10 menit",
      icon: Target,
      action: "Mulai Simulasi",
    },
    {
      title: "Password Strength Checker",
      description: "Cek kekuatan password Anda dengan tool online kami",
      type: "Tool",
      duration: "2 menit",
      icon: Eye,
      action: "Cek Password",
    },
    {
      title: "Video Tutorial Keamanan",
      description:
        "Koleksi video tutorial keamanan siber dalam Bahasa Indonesia",
      type: "Video Series",
      duration: "45 menit",
      icon: PlayCircle,
      action: "Tonton Sekarang",
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
      Vulnerability: Bug,
      "Network Security": Wifi,
      "Security Platform": Server,
      "Monitoring Tool": Database,
      "Threat Intelligence": Globe,
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
        <section className="bg-gradient-to-br from-blue-50 via-background to-green-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                <BookOpen className="mr-2 h-4 w-4" />
                Edukasi & Imbauan Keamanan
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Edukasi & <span className="text-blue-600">Imbauan</span>{" "}
                Keamanan Siber
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Pelajari keamanan siber melalui program edukasi BSSN dan
                dapatkan informasi terkini tentang ancaman keamanan siber serta
                panduan mitigasinya.
              </p>

            </div>
          </div>
        </section>

        {/* Main Content Tabs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="edukasi" className="max-w-7xl mx-auto">
              <div className="flex justify-center mb-12">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger
                    value="edukasi"
                    className="flex items-center space-x-2"
                  >
                    <GraduationCap className="h-4 w-4" />
                    <span>Program Edukasi</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="imbauan"
                    className="flex items-center space-x-2"
                  >
                    <AlertTriangle className="h-4 w-4" />
                    <span>Imbauan Keamanan</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="edukasi" className="space-y-12">
                {/* Budaya Keamanan Informasi - Konten Utama */}
                <div>
                  <Card className="overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50 border-b">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                          <Shield className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">
                            {mainContent.title}
                          </CardTitle>
                          <CardDescription className="text-blue-700">
                            Membangun Kesadaran Keamanan Siber untuk Seluruh
                            Masyarakat Indonesia
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-8">
                      <div className="prose prose-lg max-w-none">
                        {mainContent.content
                          .split("\n\n")
                          .map((paragraph, index) => (
                            <p
                              key={index}
                              className="text-muted-foreground leading-relaxed mb-6"
                            >
                              {paragraph}
                            </p>
                          ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Tips dan Panduan Unggulan */}
                <div>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">
                      Tips dan Panduan Unggulan
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Panduan praktis untuk keamanan siber yang dapat diterapkan
                      dalam kehidupan sehari-hari
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-8">
                    {edukasiTopics
                      .filter((topic) => topic.featured)
                      .map((topic) => (
                        <Card
                          key={topic.id}
                          className="group hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                        >
                          <CardContent className="p-8 text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                              <topic.icon className="h-8 w-8 text-white" />
                            </div>
                            <div className="mb-4">
                              <Badge className="bg-blue-100 text-blue-700 mb-3">
                                {topic.category}
                              </Badge>
                            </div>
                            <CardTitle className="text-lg mb-3 group-hover:text-blue-600 transition-colors">
                              {topic.title}
                            </CardTitle>
                            <CardDescription className="mb-6">
                              {topic.description}
                            </CardDescription>
                            <Button
                              className="w-full bg-blue-600 hover:bg-blue-700"
                              asChild
                            >
                              <Link to={topic.path}>
                                <BookOpen className="h-4 w-4 mr-2" />
                                Pelajari Selengkapnya
                              </Link>
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>

                {/* Topik Edukasi Lainnya */}
                <div>
                  <h3 className="text-2xl font-bold mb-8">
                    Topik Edukasi Lainnya
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {edukasiTopics
                      .filter((topic) => !topic.featured)
                      .map((topic) => (
                        <Card
                          key={topic.id}
                          className="group hover:shadow-lg transition-all duration-300"
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <topic.icon className="h-6 w-6 text-blue-600" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-2">
                                  <Badge variant="outline">
                                    {topic.category}
                                  </Badge>
                                </div>
                                <h4 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                                  {topic.title}
                                </h4>
                                <p className="text-sm text-muted-foreground mb-4">
                                  {topic.description}
                                </p>
                                <Button variant="ghost" size="sm" asChild>
                                  <Link to={topic.path}>
                                    Baca Selengkapnya
                                    <ExternalLink className="h-3 w-3 ml-1" />
                                  </Link>
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>

                {/* Tips Keamanan Cepat */}
                <div className="bg-gradient-to-b from-background to-muted/30 py-16 -mx-4 px-4">
                  <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                      <h2 className="text-3xl font-bold mb-4">
                        Tips Keamanan Cepat
                      </h2>
                      <p className="text-muted-foreground">
                        Tips penting yang bisa langsung Anda terapkan hari ini
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {quickTips.map((tip, index) => (
                        <Card
                          key={index}
                          className="group hover:shadow-lg transition-all duration-300"
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <tip.icon className="h-5 w-5 text-blue-600" />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold mb-2">
                                  {tip.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  {tip.description}
                                </p>
                                <div className="mt-3">
                                  <Badge
                                    className={
                                      tip.priority === "high"
                                        ? "bg-red-100 text-red-700"
                                        : "bg-yellow-100 text-yellow-700"
                                    }
                                  >
                                    {tip.priority === "high"
                                      ? "Prioritas Tinggi"
                                      : "Penting"}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="imbauan" className="space-y-12">
                {/* Featured Imbauan Section */}
                <div>
                  <Card className="overflow-hidden border-l-4 border-l-red-500">
                    <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50 border-b">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                          <AlertTriangle className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">
                            Imbauan Keamanan
                          </CardTitle>
                          <CardDescription className="text-red-700">
                            Kumpulan Imbauan Keamanan Siber untuk Melindungi
                            Anda dari Ancaman Digital
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <p className="text-muted-foreground leading-relaxed">
                          Dapatkan informasi terkini tentang berbagai ancaman
                          keamanan siber seperti malware APK, serangan phishing,
                          web defacement, dan kerentanan sistem. Setiap imbauan
                          dilengkapi dengan panduan mitigasi dan file PDF yang
                          dapat diunduh.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="flex items-center space-x-3 p-4 bg-red-50 rounded-lg">
                            <Shield className="h-8 w-8 text-red-600" />
                            <div>
                              <h4 className="font-semibold">5 Imbauan Aktif</h4>
                              <p className="text-sm text-muted-foreground">
                                Ancaman keamanan terkini
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                            <Download className="h-8 w-8 text-blue-600" />
                            <div>
                              <h4 className="font-semibold">Panduan PDF</h4>
                              <p className="text-sm text-muted-foreground">
                                Mitigasi dan penanganan
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="text-center pt-4">
                          <p className="text-sm text-muted-foreground">
                            Scroll ke bawah untuk melihat semua imbauan keamanan lengkap
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Security Advisories Content */}
                <div className="space-y-12">
                  {imauanKeamananData.map((advisory, index) => (
                    <Card
                      key={advisory.id}
                      className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-red-500"
                    >
                      <CardHeader className="pb-4">
                        <div className="flex flex-col space-y-4">
                          <div className="flex flex-wrap items-center gap-2">
                            {advisory.categories.map((category, idx) => (
                              <Badge
                                key={idx}
                                variant="outline"
                                className="bg-red-50 text-red-700 border-red-200"
                              >
                                {category}
                              </Badge>
                            ))}
                          </div>

                          <CardTitle className="text-2xl leading-tight group-hover:text-red-600 transition-colors">
                            {advisory.title}
                          </CardTitle>

                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <User className="h-4 w-4 mr-1" />
                              by {advisory.author}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {formatImauanDate(advisory.date)}
                            </div>
                            <div className="flex items-center">
                              <Shield className="h-4 w-4 mr-1" />
                              {advisory.comments} Comments
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-6">
                        <div className="prose prose-lg max-w-none">
                          {advisory.content.split("\n\n").map((paragraph, idx) => (
                            <p
                              key={idx}
                              className="text-muted-foreground leading-relaxed mb-4"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>

                        {/* Download Section */}
                        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border">
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
                            <div className="flex items-center space-x-3">
                              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                                <FileText className="h-6 w-6 text-red-600" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-lg">
                                  Informasi Lengkap
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  Lihat panduan lengkap untuk informasi detail
                                </p>
                              </div>
                            </div>
                            <Button
                              className="bg-red-600 hover:bg-red-700 w-full sm:w-auto"
                              asChild
                            >
                              <a
                                href={`/imbauan-keamanan/${advisory.pdfFile}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Eye className="h-4 w-4 mr-2" />
                                Lihat Imbauan
                              </a>
                            </Button>
                          </div>
                        </div>

                        {index < imauanKeamananData.length - 1 && (
                          <hr className="border-muted my-8" />
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EdukasiImbauan;
