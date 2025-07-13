import { Link } from "react-router-dom"; // Pastikan Link diimpor di bagian atas
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Users,
  Award,
  BookOpen,
  Download,
  ExternalLink,
  Target,
  Handshake,
} from "lucide-react";

// --- DATA LHKPN (DIEKSTRAK DARI FILE) ---
const lhkpnData = {
  kepala: [
    {
      nama: "NUGROHO SULISTYO BUDI",
      jabatan: "KEPALA BADAN SIBER DAN SANDI NEGARA",
      tanggalLapor: "-",
      totalHarta: "-",
      link: "#",
    },
    {
      nama: "HINSA SIBURIAN",
      jabatan: "KEPALA BADAN SIBER DAN SANDI NEGARA",
      tanggalLapor: "31 Desember 2023",
      totalHarta: "Rp. 9.747.987.337",
      link: "https://www.bssn.go.id/wp-content/uploads/2024/07/Pengumuman_Harta_Kekayaan_LHKPN_216861.pdf",
    },
     {
      nama: "HINSA SIBURIAN",
      jabatan: "KEPALA BADAN SIBER DAN SANDI NEGARA",
      tanggalLapor: "31 Desember 2022",
      totalHarta: "Rp. 9.915.654.171",
      link: "https://cloud.bssn.go.id/s/sHPr96fXcrxFxpx",
    },
  ],
  wakil: [
    {
      nama: "A. RACHMAD WIBOWO",
      jabatan: "WAKIL KEPALA BADAN SIBER DAN SANDI NEGARA",
      tanggalLapor: "31 Desember 2024",
      totalHarta: "Rp. 8.171.081.430",
      link: "#",
    },
  ],
  sesma: [
    {
      nama: "Y.B. SUSILO WIBOWO",
      jabatan: "SEKRETARIS UTAMA",
      tanggalLapor: "31 Desember 2024",
      totalHarta: "Rp. 1.618.388.692",
      link: "#",
    },
     {
      nama: "Y.B. SUSILO WIBOWO",
      jabatan: "SEKRETARIS UTAMA",
      tanggalLapor: "31 Desember 2023",
      totalHarta: "Rp. 1.592.471.191",
      link: "#",
    },
  ],
  deputi: [
      {
          nama: "R. TJAHJO KHURNIAWAN",
          jabatan: "DEPUTI BIDANG STRATEGI DAN KEBIJAKAN",
          tanggalLapor: "31 Desember 2024",
          totalHarta: "Rp. 2.426.649.000",
          link: "#",
      },
      {
          nama: "DOMINGGUS PAKEL",
          jabatan: "DEPUTI BIDANG OPERASI",
          tanggalLapor: "-",
          totalHarta: "-",
          link: "#",
      },
      {
          nama: "SULISTYO",
          jabatan: "DEPUTI BIDANG KEAMANAN PEMERINTAHAN",
          tanggalLapor: "31 Desember 2024",
          totalHarta: "Rp. 2.247.344.501",
          link: "#",
      },
      {
          nama: "SLAMET AJI PAMUNGKAS",
          jabatan: "DEPUTI BIDANG PEREKONOMIAN",
          tanggalLapor: "31 Desember 2023",
          totalHarta: "Rp. 2.680.700.000",
          link: "#",
      }
  ]
};

// --- DATA SURVEI KEPUASAN MASYARAKAT (DIEKSTRAK DARI FILE) ---
const skmData = [
    {
        laporan: "Laporan Survei Kepuasan Masyarakat Semester 1 Tahun 2024",
        link: "https://www.bssn.go.id/wp-content/uploads/2024/07/LAPORAN-SKM_BSSN_2024_signed_sign.pdf",
    },
    {
        laporan: "Laporan Survei Kepuasan Masyarakat Semester 2 Tahun 2023",
        link: "https://www.bssn.go.id/wp-content/uploads/2024/05/LAPORAN-SURVEY-KEPUASAN-MASYARAKAT-SMT-II-2023_sign_signed.pdf",
    },
    {
        laporan: "Laporan Survei Kepuasan Masyarakat Semester 1 Tahun 2023",
        link: "https://www.bssn.go.id/wp-content/uploads/2024/05/LAPORAN-SURVEY-KEPUASAN-MASYARAKAT-SMT-I-2023_sign_signed.pdf",
    },
    {
        laporan: "Laporan Survei Kepuasan Masyarakat Tahun 2021",
        link: "https://cloud.bssn.go.id/s/tjGxSyBWnFxaz27",
    },
    {
        laporan: "Laporan Survei Kepuasan Masyarakat Tahun 2020",
        link: "https://cloud.bssn.go.id/s/abkwSyEfEJRQbHJ",
    },
    {
        laporan: "Laporan Survei Kepuasan Masyarakat Tahun 2019",
        link: "https://cloud.bssn.go.id/s/oNSzy82k3ZdRTcZ",
    }
];

// --- DATA AKUNTABILITAS (DIEKSTRAK DARI FILE) ---
const accountabilityDocs = [
    {
        title: "Rencana Strategis",
        icon: Target,
        link: "/rencana-strategis", // Diubah ke route internal
        color: "blue"
    },
    {
        title: "Perjanjian Kinerja",
        icon: Handshake,
        link: "/perjanjian-kinerja", // Diubah ke route internal
        color: "purple"
    },
    {
        title: "Laporan Kinerja",
        icon: FileText,
        link: "/laporan-kinerja", // Diubah ke route internal
        color: "orange"
    }
]

const LhkpnTable = ({ data }: { data: (typeof lhkpnData.kepala[0])[] }) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Nama</TableHead>
        <TableHead>Jabatan</TableHead>
        <TableHead>Tanggal Lapor</TableHead>
        <TableHead className="text-right">Total Harta</TableHead>
        <TableHead className="text-center w-[100px]">Aksi</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.map((item, index) => (
        <TableRow key={index}>
          <TableCell className="font-medium">{item.nama}</TableCell>
          <TableCell>{item.jabatan}</TableCell>
          <TableCell>{item.tanggalLapor}</TableCell>
          <TableCell className="text-right">{item.totalHarta}</TableCell>
          <TableCell className="text-center">
            {item.link !== "#" ? (
              <Button asChild variant="ghost" size="icon">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4"/>
                </a>
              </Button>
            ) : (
              "-"
            )}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);


const AkuntabilitasKinerja = () => {
  return (
    <div className="min-h-screen bg-muted/20">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-government-50 via-background to-cyber-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-government-100 text-government-700 border-government-200">
                <BookOpen className="mr-2 h-4 w-4" />
                Tata Kelola & Transparansi
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Akuntabilitas & <span className="gradient-text">Kinerja</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Komitmen BSSN dalam mewujudkan tata kelola pemerintahan yang
                baik melalui transparansi kinerja, pelaporan, dan partisipasi
                publik.
              </p>
            </div>
          </div>
        </section>

        {/* Combined Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl space-y-12">
            
            {/* 1. Akuntabilitas Kinerja Section */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <FileText className="h-8 w-8 text-blue-600 flex-shrink-0" />
                  <div className="flex-grow">
                    <CardTitle className="text-2xl">Dokumen Kinerja</CardTitle>
                    <CardDescription className="pt-2 text-base">
                      Dokumen perencanaan, perjanjian, dan pelaporan kinerja BSSN sebagai landasan akuntabilitas lembaga.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {accountabilityDocs.map((doc) => (
                        <Button asChild key={doc.title} variant="outline" className="justify-start text-base p-6 h-auto">
                             <Link to={doc.link} className="flex items-center">
                                <doc.icon className={`mr-3 h-5 w-5 text-${doc.color}-600`} />
                                {doc.title}
                            </Link>
                        </Button>
                    ))}
                </div>
              </CardContent>
            </Card>

            {/* 2. Laporan Harta Kekayaan (LHKPN) Section */}
            <Card>
              <CardHeader>
                 <div className="flex items-center space-x-4">
                  <Award className="h-8 w-8 text-purple-600 flex-shrink-0" />
                  <div className="flex-grow">
                    <CardTitle className="text-2xl">Laporan Harta Kekayaan (LHKPN)</CardTitle>
                    <CardDescription className="pt-2 text-base">
                      Informasi pengumuman harta kekayaan pejabat di lingkungan BSSN sebagai bentuk transparansi.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Kepala dan Wakil Kepala BSSN</AccordionTrigger>
                    <AccordionContent>
                      <LhkpnTable
                        data={[...lhkpnData.kepala, ...lhkpnData.wakil]}
                      />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Pejabat Tinggi Madya (Eselon I)</AccordionTrigger>
                    <AccordionContent>
                      <LhkpnTable data={[...lhkpnData.sesma, ...lhkpnData.deputi]} />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                 <div className="mt-6 flex justify-center">
                    <Button asChild>
                        <a href="https://elhkpn.kpk.go.id/portal/user/pengumuman_lhkpn/ZW5OR1psQlZRVlJQYUZaUFQybGhXVTgzVDI5c2FIbE9Sekl4YlZac1N6TnhSbE5XVlRGSFJqVTRMMGQ2YnpCbFpEUnZiR3QxT1ZOUU5EQnRNV2xyTmc9PQ==" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Kunjungi Portal Resmi e-LHKPN
                        </a>
                    </Button>
                </div>
              </CardContent>
            </Card>

            {/* 3. Survei Kepuasan Masyarakat (SKM) Section */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Users className="h-8 w-8 text-green-600 flex-shrink-0" />
                  <CardTitle className="text-2xl">Survei Kepuasan Masyarakat (SKM)</CardTitle>
                </div>
                <CardDescription className="pt-2 text-base">
                  Hasil pengukuran tingkat kepuasan publik terhadap kualitas layanan yang diselenggarakan oleh BSSN.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Nama Laporan</TableHead>
                            <TableHead className="text-center w-[120px]">Tautan</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {skmData.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.laporan}</TableCell>
                                <TableCell className="text-center">
                                    <Button asChild variant="outline" size="sm">
                                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                                            <Download className="h-4 w-4"/>
                                        </a>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
              </CardContent>
            </Card>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AkuntabilitasKinerja;