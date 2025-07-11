import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Shield,
  Home,
  Info,
  Settings,
  FileText,
  Phone,
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

const navigationItems = [
  {
    title: "Beranda",
    href: "/",
    icon: Home,
  },
  {
    title: "Tentang BSSN",
    href: "/tentang-bssn",
    icon: Info,
    children: [
      {
        title: "Profil Organisasi",
        href: "/tentang-bssn/profil-organisasi",
        description: "Sejarah, visi, misi, dan struktur organisasi BSSN",
      },
      {
        title: "Tugas & Fungsi",
        href: "/tentang-bssn/tugas-fungsi",
        description: "Tugas pokok dan fungsi BSSN dalam keamanan siber",
      },
      {
        title: "Pimpinan",
        href: "/tentang-bssn/pimpinan",
        description: "Struktur kepemimpinan dan jajaran direksi",
      },
    ],
  },
  {
    title: "Layanan",
    href: "/layanan",
    icon: Settings,
    children: [
      {
        title: "Keamanan Siber",
        href: "/layanan/keamanan-siber",
        description: "Layanan proteksi dan monitoring keamanan siber",
      },
      {
        title: "Sertifikasi",
        href: "/layanan/sertifikasi",
        description: "Program sertifikasi keamanan informasi",
      },
      {
        title: "Konsultasi",
        href: "/layanan/konsultasi",
        description: "Layanan konsultasi keamanan siber untuk institusi",
      },
    ],
  },
  {
    title: "Informasi",
    href: "/informasi",
    icon: FileText,
    children: [
      {
        title: "Berita",
        href: "/informasi/berita",
        description: "Berita terkini seputar keamanan siber Indonesia",
      },
      {
        title: "Peringatan Keamanan",
        href: "/informasi/peringatan-keamanan",
        description: "Alert dan peringatan ancaman keamanan siber",
      },
      {
        title: "Panduan & Tips",
        href: "/informasi/panduan-tips",
        description: "Panduan praktis keamanan siber untuk masyarakat",
      },
    ],
  },
  {
    title: "Kontak",
    href: "/kontak",
    icon: Phone,
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
              Bela Selamanya & SelamaNya
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                {item.children ? (
                  <>
                    <NavigationMenuTrigger className="h-10">
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                        {item.children.map((child) => (
                          <li key={child.href}>
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
                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link
                      to={item.href}
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                        location.pathname === item.href &&
                          "bg-accent text-accent-foreground",
                      )}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
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
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-4 py-4">
              {navigationItems.map((item) => (
                <div key={item.href}>
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                      location.pathname === item.href &&
                        "bg-accent text-accent-foreground",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </Link>
                  {item.children && (
                    <div className="ml-8 mt-2 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className={cn(
                            "block rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                            location.pathname === child.href &&
                              "bg-accent text-accent-foreground",
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navigation;
