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
import {
  AlertTriangle,
  Shield,
  Download,
  Calendar,
  User,
  ArrowLeft,
  ExternalLink,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";

const ImauanKeamanan = () => {
  const securityAdvisories = [
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

  const formatDate = (dateString: string) => {
    // Handle different date formats
    if (dateString.includes("February")) {
      return dateString;
    }
    
    const monthMap: { [key: string]: string } = {
      "Jan": "Januari",
      "Jul": "Juli"
    };
    
    const parts = dateString.split(" ");
    if (parts.length === 3) {
      const month = monthMap[parts[0]] || parts[0];
      return `${parts[1]} ${month} ${parts[2]}`;
    }
    
    return dateString;
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-50 via-background to-orange-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Back Navigation */}
              <div className="mb-8">
                <Button variant="ghost" asChild className="mb-4">
                  <Link to="/informasi-regulasi/edukasi-imbauan-keamanan">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    KEMBALI
                  </Link>
                </Button>
              </div>

              <div className="text-center space-y-6">
                <Badge className="bg-red-100 text-red-700 border-red-200">
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  Imbauan Keamanan
                </Badge>

                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  <span className="text-red-600">Imbauan</span> Keamanan
                </h1>

                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Kumpulan imbauan keamanan siber terkini untuk melindungi Anda
                  dari berbagai ancaman keamanan digital
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Advisories Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {securityAdvisories.map((advisory, index) => (
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
                          {formatDate(advisory.date)}
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
                              Download panduan lengkap untuk informasi detail
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
                            <Download className="h-4 w-4 mr-2" />
                            Download PDF
                          </a>
                        </Button>
                      </div>
                    </div>

                    {index < securityAdvisories.length - 1 && (
                      <hr className="border-muted my-8" />
                    )}
                  </CardContent>
                </Card>
              ))}

              {/* Back Button */}
              <div className="text-center pt-12">
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-red-200 text-red-600 hover:bg-red-50"
                >
                  <Link to="/informasi-regulasi/edukasi-imbauan-keamanan">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    &lt;&lt;&lt; KEMBALI
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

export default ImauanKeamanan;
