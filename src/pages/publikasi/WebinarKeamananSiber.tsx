import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const WebinarKeamananSiber = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link
            to="/informasi-regulasi/publikasi"
            className="hover:text-foreground"
          >
            Publikasi
          </Link>
          <span>/</span>
          <span className="text-foreground">Webinar Keamanan Siber</span>
        </div>

        <div className="mb-6">
          <Link to="/informasi-regulasi/publikasi">
            <Button variant="ghost" className="pl-0">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Publikasi
            </Button>
          </Link>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
            <Video className="w-8 h-8 text-amber-600" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Webinar Keamanan Siber
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Rekaman webinar dan seminar online keamanan siber dengan pembicara
            ahli dari dalam dan luar negeri.
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Cari webinar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        <div className="text-center py-12">
          <p className="text-muted-foreground">
            Konten akan segera tersedia...
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WebinarKeamananSiber;
