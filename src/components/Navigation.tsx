import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Shield,
  Info,
  Newspaper,
  Briefcase,
  Contact,
  Home,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

// =======================================================================
// STRUKTUR NAVIGASI BARU (DENGAN KOREKSI)
// =======================================================================
const navigationItems = [
  {
    title: "Profil",
    icon: Info,
    children: [
      {
        title: "Tentang BSSN",
        href: "/tentang-bssn/profil-organisasi",
        description: "Visi, Misi, Sejarah, dan informasi dasar lembaga.",
      },
      {
        title: "Struktur & Pejabat",
        href: "/tentang-bssn/pimpinan",
        description: "Bagan organisasi dan profil pimpinan BSSN.",
      },
      {
        title: "Tugas, Fungsi & Strategi",
        href: "/tentang-bssn/tugas-fungsi",
        description: "Tugas pokok, fungsi, dan arah kebijakan siber nasional.",
      },
      {
        title: "Akuntabilitas & Kinerja",
        href: "/informasi-publik/kinerja", // Halaman baru
        description: "Laporan kinerja, E-LHKPN, dan survei kepuasan.",
      },
    ],
  },
  {
    title: "Layanan & Aduan",
    icon: Shield,
    children: [
      {
        title: "Gov-CSIRT Indonesia",
        href: "/layanan-aduan/gov-csirt-indonesia",
        description: "Pusat Tanggap Insiden Siber Sektor Pemerintah.",
      },
      {
        title: "Sertifikasi & Asesmen",
        href: "/layanan-aduan/sertifikasi-asesmen",
        description:
          "Layanan Sertifikat Elektronik, LSPro, dan IT Security Assessment.",
      },
      {
        title: "Aduan Siber",
        href: "/layanan-aduan/aduan-siber",
        description:
          "Laporkan insiden keamanan siber dan dapatkan bantuan teknis.",
      },
      {
        title: "Alat & Direktori Profesional",
        href: "/layanan-aduan/alat-direktori-profesional",
        description:
          "Daftar auditor, lembaga konsultan, dan instrumen kematangan siber.",
      },
    ],
  },
  {
    title: "Informasi & Regulasi",
    icon: Newspaper,
    children: [
      {
        title: "Berita & Siaran Pers",
        href: "/informasi-regulasi/berita",
        description: "Informasi kegiatan dan pernyataan resmi untuk media.",
      },
      {
        title: "Publikasi",
        href: "/informasi-regulasi/publikasi",
        description: "Berbagai publikasi dan dokumen keamanan siber BSSN.",
      },
      {
        title: "Edukasi & Imbauan Keamanan",
        href: "/informasi-regulasi/panduan-tips",
        description:
          "Panduan praktis, tips, dan peringatan keamanan untuk publik.",
      },
      {
        title: "Pusat Informasi Hukum (JDIH)",
        href: "/informasi-regulasi/jdih",
        description:
          "Jaringan Dokumentasi dan Informasi Hukum terkait keamanan siber.",
      },
      {
        title: "Agenda & Penghargaan", // <-- ITEM YANG DIPERBAIKI/DITAMBAHKAN
        href: "/pusat-media/agenda", // Halaman baru
        description:
          "Informasi jadwal kegiatan dan penghargaan yang diterima BSSN.",
      },
    ],
  },
  {
    title: "Karir & Pengadaan",
    icon: Briefcase,
    children: [
      {
        title: "Penerimaan ASN (CPNS & PPPK)",
        href: "/partisipasi/karir", // Halaman baru
        description: "Informasi seleksi aparatur sipil negara.",
      },
      {
        title: "Penerimaan Poltek SSN",
        href: "/partisipasi/karir/poltek-ssn", // Halaman baru
        description: "Seleksi Penerimaan Taruna Baru Poltek SSN.",
      },
      {
        title: "Seleksi Jabatan Pimpinan (JPT)",
        href: "/partisipasi/karir/jpt", // Halaman baru
        description: "Informasi seleksi Jabatan Pimpinan Tinggi.",
      },
      {
        title: "LPSE (Layanan Pengadaan)",
        href: "/partisipasi/lpse", // Halaman baru
        description:
          "Pusat informasi untuk semua proses pengadaan barang dan jasa.",
      },
    ],
  },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="relative">
            <img
              src="/Logo_BSSN_new.png"
              alt="Logo BSSN"
              className="h-10 w-10 object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-primary">BSSN</span>
            <span className="text-xs text-muted-foreground hidden sm:block">
              Badan Siber & Sandi Negara
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger className="h-10">
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {item.children.map((child) => (
                      <li key={child.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={child.href}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                              location.pathname === child.href &&
                                "bg-accent text-accent-foreground",
                            )}
                          >
                            <div className="text-sm font-medium leading-none">
                              {child.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {child.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/kontak"
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                    location.pathname === "/kontak" &&
                      "bg-accent text-accent-foreground",
                  )}
                >
                  <Contact className="mr-2 h-4 w-4" />
                  Hubungi Kami
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] overflow-y-auto"
          >
            <div className="flex flex-col space-y-2 py-4">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium text-foreground">
                    <item.icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </div>
                  <div className="ml-6 mt-2 flex flex-col space-y-1 border-l pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.title}
                        to={child.href}
                        className={cn(
                          "block rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                          location.pathname === child.href
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground",
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <Link
                to="/kontak"
                className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsOpen(false)}
              >
                <Contact className="h-5 w-5" />
                <span>Hubungi Kami</span>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navigation;
