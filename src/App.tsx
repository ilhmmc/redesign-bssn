import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProfilOrganisasi from "./pages/ProfilOrganisasi";
import TugasFungsi from "./pages/TugasFungsi";
import Pimpinan from "./pages/Pimpinan";
import Kontak from "./pages/Kontak";
import Berita from "./pages/Berita";
import EdukasiImbauan from "./pages/EdukasiImbauan";
import CaraMengatasiCyberbullying from "./pages/edukasi/CaraMengatasiCyberbullying";
import TipsGuruResponBullying from "./pages/edukasi/TipsGuruResponBullying";
import BicaraBullyingAnak from "./pages/edukasi/BicaraBullyingAnak";
import DampakGadgetAnak from "./pages/edukasi/DampakGadgetAnak";
import TipsAmanBerinternet from "./pages/edukasi/TipsAmanBerinternet";
import BisnisDisabilitas from "./pages/edukasi/BisnisDisabilitas";
import AplikasiDisabilitas from "./pages/edukasi/AplikasiDisabilitas";
import Sertifikasi from "./pages/Sertifikasi";
import KeamananSiber from "./pages/KeamananSiber";
import Konsultasi from "./pages/Konsultasi";
import PPID from "./pages/PPID";
import StrategiKeamanan from "./pages/StrategiKeamanan";
import NotFound from "./pages/NotFound";
import GovCSIRTIndonesia from "./pages/layanan-aduan/GovCSIRTIndonesia";
import AduanSiber from "./pages/layanan-aduan/AduanSiber";
import SertifikasiAsesmen from "./pages/layanan-aduan/SertifikasiAsesmen";
import AlatDirektoriProfesional from "./pages/layanan-aduan/AlatDirektoriProfesional";
import LayananAduan from "./pages/layanan-aduan/LayananAduan";
import JDIH from "./pages/JDIH";
import Publikasi from "./pages/Publikasi";
import DokumenStrategis from "./pages/publikasi/DokumenStrategis";
import PanduanKeamanan from "./pages/publikasi/PanduanKeamanan";
import GlobalSecurityIndex from "./pages/publikasi/GlobalSecurityIndex";
import BacaanRinganBerisi from "./pages/publikasi/BacaanRinganBerisi";
import AmanBermediaSosial from "./pages/publikasi/AmanBermediaSosial";
import HoneynetProject from "./pages/publikasi/HoneynetProject";
import MonitoringKeamananSiber from "./pages/publikasi/MonitoringKeamananSiber";
import MajalahSanapati from "./pages/publikasi/MajalahSanapati";
import MonitoringKamsiber from "./pages/publikasi/MonitoringKamsiber";
import CyberBlitz from "./pages/publikasi/CyberBlitz";
import BeritaEdukasiSiber from "./pages/publikasi/BeritaEdukasiSiber";
import SiberminJagaRuangSiber from "./pages/publikasi/SiberminJagaRuangSiber";
import PodcastKeamananSiber from "./pages/publikasi/PodcastKeamananSiber";
import WebinarKeamananSiber from "./pages/publikasi/WebinarKeamananSiber";
import VideoLiterasiSiber from "./pages/publikasi/VideoLiterasiSiber";
import AgendaPenghargaan from "./pages/AgendaPenghargaan";
import AkuntabilitasKinerja from "./pages/AkuntabilitasKinerja";
import RencanaStrategis from "./pages/RencanaStrategis";
import PerjanjianKinerja from "./pages/PerjanjianKinerja";
import LaporanKinerja from "./pages/LaporanKinerja";
import LaporanKinerjaUnit2024 from "./pages/LaporanKinerjaUnit2024";
import PerjanjianKinerja2024 from "./pages/PerjanjianKinerja2024";
import PerjanjianKinerja2023 from "./pages/PerjanjianKinerja2023";
import PenerimaanCPNS from "./pages/PenerimaanCPNS";
import PenerimaanPPPK from "./pages/PenerimaanPPPK";
import PenerimaanSSN from "./pages/PenerimaanSSN";
import SeleksiJPT from "./pages/SeleksiJPT";
import SeleksiJPTMadya from "./pages/SeleksiJPTMadya";
import SeleksiJPTPratama from "./pages/SeleksiJPTPratama";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/tentang-bssn/profil-organisasi"
            element={<ProfilOrganisasi />}
          />
          <Route
            path="/perjanjian-kinerja/2024"
            element={<PerjanjianKinerja2024 />}
          />
          <Route
            path="/perjanjian-kinerja/2023"
            element={<PerjanjianKinerja2023 />}
          />
          <Route path="/tentang-bssn/tugas-fungsi" element={<TugasFungsi />} />
          <Route path="/karir/CPNS" element={<PenerimaanCPNS />} />
          <Route path="/karir/pppk" element={<PenerimaanPPPK />} />
          <Route path="/karir/poltek-ssn" element={<PenerimaanSSN />} />
          <Route path="/karir/jpt" element={<SeleksiJPT />} />
          <Route path="/karir/jpt/madya" element={<SeleksiJPTMadya />} />
          <Route path="/karir/jpt/pratama" element={<SeleksiJPTPratama />} />
          <Route
            path="/tentang-bssn/strategi-keamanan"
            element={<StrategiKeamanan />}
          />
          <Route path="/tentang-bssn/pimpinan" element={<Pimpinan />} />
          <Route path="/rencana-strategis" element={<RencanaStrategis />} />
          <Route path="/perjanjian-kinerja" element={<PerjanjianKinerja />} />
          <Route path="/laporan-kinerja" element={<LaporanKinerja />} />
          <Route
            path="/informasi-publik/kinerja"
            element={<AkuntabilitasKinerja />}
          />
          <Route path="/kontak" element={<Kontak />} />
          <Route
            path="/laporan-kinerja/unit-2024"
            element={<LaporanKinerjaUnit2024 />}
          />
          <Route path="/informasi-regulasi/berita" element={<Berita />} />
          <Route
            path="/informasi-regulasi/edukasi-imbauan-keamanan"
            element={<EdukasiImbauan />}
          />
          <Route
            path="/informasi-regulasi/edukasi-imbauan-keamanan/cara-mengatasi-cyberbullying"
            element={<CaraMengatasiCyberbullying />}
          />
          <Route
            path="/informasi-regulasi/edukasi-imbauan-keamanan/tips-guru-respon-bullying"
            element={<TipsGuruResponBullying />}
          />
          <Route
            path="/informasi-regulasi/edukasi-imbauan-keamanan/bicara-bullying-anak"
            element={<BicaraBullyingAnak />}
          />
          <Route
            path="/informasi-regulasi/edukasi-imbauan-keamanan/dampak-gadget-anak"
            element={<DampakGadgetAnak />}
          />
          <Route
            path="/informasi-regulasi/edukasi-imbauan-keamanan/tips-aman-berinternet"
            element={<TipsAmanBerinternet />}
          />
          <Route
            path="/informasi-regulasi/edukasi-imbauan-keamanan/bisnis-disabilitas"
            element={<BisnisDisabilitas />}
          />
          <Route
            path="/informasi-regulasi/edukasi-imbauan-keamanan/aplikasi-disabilitas"
            element={<AplikasiDisabilitas />}
          />
          <Route path="/informasi-regulasi/jdih" element={<JDIH />} />
          <Route path="/informasi-regulasi/publikasi" element={<Publikasi />} />
          <Route
            path="/informasi-regulasi/publikasi/dokumen-strategis"
            element={<DokumenStrategis />}
          />
          <Route
            path="/informasi-regulasi/publikasi/panduan-keamanan"
            element={<PanduanKeamanan />}
          />
          <Route
            path="/informasi-regulasi/publikasi/global-security-index"
            element={<GlobalSecurityIndex />}
          />
          <Route
            path="/informasi-regulasi/publikasi/bacaan-ringan-berisi"
            element={<BacaanRinganBerisi />}
          />
          <Route
            path="/informasi-regulasi/publikasi/aman-bermedia-sosial"
            element={<AmanBermediaSosial />}
          />
          <Route
            path="/informasi-regulasi/publikasi/honeynet-project"
            element={<HoneynetProject />}
          />
          <Route
            path="/informasi-regulasi/publikasi/monitoring-keamanan-siber"
            element={<MonitoringKeamananSiber />}
          />
          <Route
            path="/informasi-regulasi/publikasi/majalah-sanapati"
            element={<MajalahSanapati />}
          />
          <Route
            path="/informasi-regulasi/publikasi/monitoring-kamsiber"
            element={<MonitoringKamsiber />}
          />
          <Route
            path="/informasi-regulasi/publikasi/cyber-blitz"
            element={<CyberBlitz />}
          />
          <Route
            path="/informasi-regulasi/publikasi/berita-edukasi-siber"
            element={<BeritaEdukasiSiber />}
          />
          <Route
            path="/informasi-regulasi/publikasi/sibermin-jagaruangsiber"
            element={<SiberminJagaRuangSiber />}
          />
          <Route
            path="/informasi-regulasi/publikasi/podcast-keamanan-siber"
            element={<PodcastKeamananSiber />}
          />
          <Route
            path="/informasi-regulasi/publikasi/webinar-keamanan-siber"
            element={<WebinarKeamananSiber />}
          />
          <Route
            path="/informasi-regulasi/publikasi/video-literasi-siber"
            element={<VideoLiterasiSiber />}
          />
          <Route
            path="/informasi-regulasi/agenda-penghargaan"
            element={<AgendaPenghargaan />}
          />
          <Route path="/layanan/ppid" element={<PPID />} />
          <Route path="/layanan/sertifikasi" element={<Sertifikasi />} />
          <Route path="/layanan/keamanan-siber" element={<KeamananSiber />} />
          <Route path="/layanan/konsultasi" element={<Konsultasi />} />
          {/* New Layanan & Aduan routes */}
          <Route path="/layanan-aduan" element={<LayananAduan />} />
          <Route
            path="/layanan-aduan/gov-csirt-indonesia"
            element={<GovCSIRTIndonesia />}
          />
          <Route path="/layanan-aduan/aduan-siber" element={<AduanSiber />} />
          <Route
            path="/layanan-aduan/sertifikasi-asesmen"
            element={<SertifikasiAsesmen />}
          />
          <Route
            path="/layanan-aduan/alat-direktori-profesional"
            element={<AlatDirektoriProfesional />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
