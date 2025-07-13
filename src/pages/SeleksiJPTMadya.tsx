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
import { Briefcase, Download } from "lucide-react";

const SeleksiJPTMadya = () => {
  const jabatan = [
    "Jabatan Sekretaris Utama",
    "Jabatan Deputi Bidang Keamanan Siber dan Sandi Pemerintahan dan Pembangunan Manusia",
    "Jabatan Deputi Bidang Keamanan Siber dan Sandi Perekonomian",
  ];

  return (
    <div className="min-h-screen bg-muted/20">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-50 via-background to-orange-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-red-100 text-red-700 border-red-200">
                <Briefcase className="mr-2 h-4 w-4" />
                Jabatan Pimpinan Tinggi
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Seleksi JPT Madya
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Informasi lengkap mengenai seleksi terbuka untuk pengisian
                Jabatan Pimpinan Tinggi Madya di lingkungan BSSN.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl space-y-12">
            {/* Jabatan yang Dibuka */}
            <Card>
              <CardHeader>
                <CardTitle>Jabatan yang Dibuka</CardTitle>
                <CardDescription>
                  Posisi Jabatan Pimpinan Tinggi Madya yang dibuka untuk seleksi.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-decimal list-inside space-y-2 text-lg">
                  {jabatan.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Tahapan Seleksi */}
            <Card>
              <CardHeader>
                <CardTitle>Tahapan dan Jadwal Seleksi</CardTitle>
                <CardDescription>
                  Jadwal seleksi sewaktu-waktu dapat berubah. Perubahan akan
                  diberitahukan melalui laman ini.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="https://www.bssn.go.id/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-15-at-11.51.36.jpeg"
                  alt="Tahapan Seleksi JPT Madya"
                  className="w-full h-auto rounded-lg border"
                />
                <Button asChild className="mt-6 w-full">
                  <a
                    href="https://cloud.bssn.go.id/s/fTcjXpFpr34TbRy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Unduh Pengumuman Lengkap
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Hasil Seleksi Administrasi */}
            <Card>
              <CardHeader>
                <CardTitle>Hasil Seleksi Administrasi</CardTitle>
                <CardDescription>
                  Informasi lengkap mengenai hasil seleksi administrasi dapat
                  diunduh{" "}
                  <a
                    href="https://cloud.bssn.go.id/s/jWr9n8g8tppATej"
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    di sini
                  </a>
                  .
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">
                    a. Jabatan Sekretaris Utama
                  </h4>
                  <img
                    src="https://www.bssn.go.id/wp-content/uploads/2023/01/1.jpg"
                    alt="Hasil Seleksi Sekretaris Utama"
                    className="w-full h-auto rounded-md border"
                  />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">
                    b. Deputi Bidang Keamanan Siber dan Sandi Pemerintahan dan Pembangunan Manusia
                  </h4>
                  <img
                    src="https://www.bssn.go.id/wp-content/uploads/2023/01/2.jpg"
                    alt="Hasil Seleksi Deputi Pemerintahan"
                    className="w-full h-auto rounded-md border"
                  />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">
                    c. Jabatan Deputi Bidang Keamanan Siber dan Sandi Perekonomian
                  </h4>
                  <img
                    src="https://www.bssn.go.id/wp-content/uploads/2023/01/3.jpg"
                    alt="Hasil Seleksi Deputi Perekonomian"
                    className="w-full h-auto rounded-md border"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Hasil Akhir Seleksi */}
            <Card>
              <CardHeader>
                <CardTitle>Hasil Akhir Seleksi Terbuka</CardTitle>
                <CardDescription>
                  Pengumuman lengkap hasil seleksi terbuka dapat diunduh{" "}
                  <a
                    href="https://cloud.bssn.go.id/s/z4ey3RaAXP3zN2L"
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    di sini
                  </a>
                  .
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">a. Sekretaris Utama</h4>
                  <img
                    src="https://www.bssn.go.id/wp-content/uploads/2023/02/image-1.jpg"
                    alt="Hasil Akhir Sekretaris Utama"
                    className="w-full h-auto rounded-md border"
                  />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">
                    b. Deputi Bidang Keamanan Siber dan Sandi Pemerintahan dan Pembangunan Manusia
                  </h4>
                  <img
                    src="https://www.bssn.go.id/wp-content/uploads/2023/02/image-2.jpg"
                    alt="Hasil Akhir Deputi Pemerintahan"
                    className="w-full h-auto rounded-md border"
                  />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">
                    c. Deputi Bidang Keamanan Siber dan Sandi Perekonomian
                  </h4>
                  <img
                    src="https://www.bssn.go.id/wp-content/uploads/2023/02/image-3.jpg"
                    alt="Hasil Akhir Deputi Perekonomian"
                    className="w-full h-auto rounded-md border"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SeleksiJPTMadya;