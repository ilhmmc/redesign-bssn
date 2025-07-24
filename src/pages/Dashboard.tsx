import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CyberSecurityDashboard from "@/components/CyberSecurityDashboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, BarChart3, TrendingUp, Globe } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold">Dashboard Keamanan Siber</h1>
            </div>
            <Badge className="bg-green-100 text-green-700 border-green-200">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              Live Data
            </Badge>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-3xl">
            Monitoring real-time kondisi keamanan siber Indonesia dengan visualisasi data 
            yang komprehensif dan mudah dipahami.
          </p>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Status Sistem</CardTitle>
              <Shield className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">Operational</div>
              <p className="text-xs text-muted-foreground">
                Semua sistem berjalan normal
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Threat Level</CardTitle>
              <TrendingUp className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">Medium</div>
              <p className="text-xs text-muted-foreground">
                Aktivitas mencurigakan terdeteksi
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-cyan-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Coverage</CardTitle>
              <Globe className="h-4 w-4 text-cyan-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-cyan-600">Nasional</div>
              <p className="text-xs text-muted-foreground">
                34 provinsi terpantau
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard */}
        <CyberSecurityDashboard />

        {/* Additional Information */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Tentang Dashboard</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Sumber Data</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Honeypot Network Indonesia</li>
                  <li>• CSIRT Indonesia</li>
                  <li>• Threat Intelligence Feeds</li>
                  <li>• Government Security Operations Centers</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Update Frequency</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Real-time: Threat detection & alerts</li>
                  <li>• Hourly: Performance metrics</li>
                  <li>• Daily: Statistical summaries</li>
                  <li>• Weekly: Trend analysis</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
