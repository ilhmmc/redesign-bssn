import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Users, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  {
    icon: Shield,
    value: "24/7",
    label: "Monitoring Keamanan",
    color: "text-government-600",
  },
  {
    icon: Lock,
    value: "1000+",
    label: "Sistem Terproteksi",
    color: "text-cyber-600",
  },
  {
    icon: Users,
    value: "50K+",
    label: "Masyarakat Terlayani",
    color: "text-primary",
  },
  {
    icon: AlertTriangle,
    value: "99.9%",
    label: "Tingkat Keberhasilan",
    color: "text-government-700",
  },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-government-50 via-background to-cyber-50 py-20 cyber-grid">
      <div className="absolute inset-0 bg-gradient-to-r from-government-500/5 to-cyber-500/5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm bg-government-50 text-government-700 border-government-200">
                <Shield className="mr-2 h-4 w-4" />
                Badan Siber dan Sandi Negara
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                Melindungi <span className="gradient-text">Indonesia</span>
                <br />
                di Era Digital
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl">
                BSSN berkomitmen menjaga keamanan siber Indonesia dengan layanan
                proteksi, monitoring, dan edukasi untuk masyarakat, pemerintah,
                dan dunia usaha.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                <Link to="/layanan">Jelajahi Layanan</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/informasi/peringatan-keamanan">
                  Peringatan Keamanan
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
              {stats.map((stat, index) => (
                <Card key={index} className="glass border-white/20">
                  <CardContent className="p-4 text-center">
                    <stat.icon
                      className={`h-6 w-6 mx-auto mb-2 ${stat.color}`}
                    />
                    <div className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-fade-in-up animation-delay-200">
            <div className="relative mx-auto w-full max-w-lg">
              {/* Main Shield */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-government-500 to-cyber-500 rounded-full opacity-20 blur-3xl animate-pulse-glow"></div>
                <div className="relative bg-gradient-to-br from-government-100 to-cyber-100 rounded-3xl p-8 shadow-2xl">
                  <div className="flex items-center justify-center">
                    <Shield className="h-32 w-32 text-primary" />
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute -top-4 -left-4 bg-government-500 text-white p-3 rounded-full shadow-lg animate-bounce">
                    <Lock className="h-6 w-6" />
                  </div>

                  <div className="absolute -top-4 -right-4 bg-cyber-500 text-white p-3 rounded-full shadow-lg animate-bounce animation-delay-500">
                    <Users className="h-6 w-6" />
                  </div>

                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-primary text-white p-3 rounded-full shadow-lg animate-bounce animation-delay-1000">
                    <AlertTriangle className="h-6 w-6" />
                  </div>
                </div>
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-government-200 rounded-full opacity-50 -z-10 animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-cyber-200 rounded-full opacity-50 -z-10 animate-pulse animation-delay-700"></div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-primary/20 rounded-full opacity-50 -z-10 animate-pulse animation-delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
