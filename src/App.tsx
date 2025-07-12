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
          <Route path="/tentang-bssn/strategi-keamanan" element={<StrategiKeamanan />} />
          <Route path="/tentang-bssn/pimpinan" element={<Pimpinan />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/informasi/berita" element={<Berita />} /><Route path="/informasi/berita" element={<Berita />} />
          <Route
            path="/informasi/peringatan-keamanan"
            element={<PeringatanKeamanan />}
          />
          <Route path="/informasi/panduan-tips" element={<PanduanTips />} />
          <Route path="/layanan/ppid" element={<PPID />} />
          <Route path="/layanan/sertifikasi" element={<Sertifikasi />} />
          <Route path="/layanan/keamanan-siber" element={<KeamananSiber />} />
          <Route path="/layanan/konsultasi" element={<Konsultasi />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
