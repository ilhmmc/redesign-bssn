import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ExternalLink,
} from "lucide-react";

const footerLinks = {
  tentang: [
    { title: "Profil Organisasi", href: "/tentang-bssn/profil-organisasi" },
    { title: "Tugas & Fungsi", href: "/tentang-bssn/tugas-fungsi" },
    { title: "Pimpinan", href: "/tentang-bssn/pimpinan" },
  ],
  layanan: [
    { title: "Keamanan Siber", href: "/layanan/keamanan-siber" },
    { title: "Sertifikasi", href: "/layanan/sertifikasi" },
    { title: "Konsultasi", href: "/layanan/konsultasi" },
  ],
  informasi: [
    { title: "Berita", href: "/informasi/berita" },
    { title: "Peringatan Keamanan", href: "/informasi/peringatan-keamanan" },
    { title: "Panduan & Tips", href: "/informasi/panduan-tips" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/bssn.ri", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com/bssn_ri", label: "Twitter" },
  {
    icon: Instagram,
    href: "https://instagram.com/bssn.ri",
    label: "Instagram",
  },
  { icon: Youtube, href: "https://youtube.com/@bssnri", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/Logo_BSSN_new.png"
                alt="Logo BSSN"
                className="h-10 w-10 object-contain"
              />
              <div>
                <div className="font-bold text-xl">BSSN</div>
                <div className="text-sm text-slate-300">
                  Badan Siber & Sandi Negara
                </div>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              BSSN bertugas melaksanakan keamanan siber secara efektif dan
              efisien dengan memanfaatkan, mengembangkan, dan memelihara
              kapasitas keamanan siber nasional.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center text-sm text-slate-300">
                <MapPin className="h-4 w-4 mr-2 text-blue-400" />
                Jalan Raya Muchtar 70, Bojong Sari, Depok, Jawa Barat – 16516
              </div>
              <div className="flex items-center text-sm text-slate-300">
                <Phone className="h-4 w-4 mr-2 text-blue-400" />
                +6221 77973360
              </div>
              <div className="flex items-center text-sm text-slate-300">
                <Mail className="h-4 w-4 mr-2 text-blue-400" />
                humas@bssn.go.id
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="text-slate-300 hover:text-blue-400 hover:bg-slate-800"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="font-semibold text-white mb-4">Tentang BSSN</h3>
            <ul className="space-y-2">
              {footerLinks.tentang.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Layanan</h3>
            <ul className="space-y-2">
              {footerLinks.layanan.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Informasi</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.informasi.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-red-900/20 border-t border-slate-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-2 md:mb-0">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">
                Hotline Keamanan Siber 24/7
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="destructive" size="sm" asChild>
                <a href="tel:1500567">
                  <Phone className="h-4 w-4 mr-2" />
                  1500-567
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-slate-700 text-slate-300 hover:bg-slate-800"
              >
                <Link to="/lapor">
                  Lapor Insiden
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-slate-400 mb-2 md:mb-0">
              © 2025 Badan Siber dan Sandi Negara. Hak cipta dilindungi.
            </div>
            <div className="flex space-x-4">
              <Link
                to="/kebijakan-privasi"
                className="text-xs text-slate-400 hover:text-blue-400 transition-colors"
              >
                Kebijakan Privasi
              </Link>
              <Link
                to="/syarat-ketentuan"
                className="text-xs text-slate-400 hover:text-blue-400 transition-colors"
              >
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
