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
import PeringatanKeamanan from "./pages/PeringatanKeamanan";
import PanduanTips from "./pages/PanduanTips";
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
          <Route path="/tentang-bssn/tugas-fungsi" element={<TugasFungsi />} />
          <Route
            path="/tentang-bssn/strategi-keamanan"
            element={<StrategiKeamanan />}
          />
          <Route path="/tentang-bssn/pimpinan" element={<Pimpinan />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/informasi-regulasi/berita" element={<Berita />} />
          <Route
            path="/informasi-regulasi/peringatan-keamanan"
            element={<PeringatanKeamanan />}
          />
          <Route
            path="/informasi-regulasi/panduan-tips"
            element={<PanduanTips />}
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
