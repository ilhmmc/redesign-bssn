import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  Shield,
  AlertTriangle,
  TrendingUp,
  Users,
  Globe,
  Lock,
  Activity,
  Target,
} from "lucide-react";

// Sample data - dalam implementasi real, ini akan dari API
const threatData = [
  { month: "Jan", malware: 1200, phishing: 800, ddos: 300, resolved: 2100 },
  { month: "Feb", malware: 1500, phishing: 950, ddos: 420, resolved: 2650 },
  { month: "Mar", malware: 1100, phishing: 1200, ddos: 380, resolved: 2480 },
  { month: "Apr", malware: 1800, phishing: 1100, ddos: 560, resolved: 3200 },
  { month: "May", malware: 1600, phishing: 1350, ddos: 480, resolved: 3180 },
  { month: "Jun", malware: 1400, phishing: 1150, ddos: 520, resolved: 2890 },
];

const serviceUsageData = [
  { name: "Sertifikasi", value: 35, color: "#1e40af" },
  { name: "Konsultasi", value: 28, color: "#0891b2" },
  { name: "Pelatihan", value: 22, color: "#0d9488" },
  { name: "Monitoring", value: 15, color: "#059669" },
];

const responseTimeData = [
  { time: "00:00", critical: 2, high: 8, medium: 15, low: 25 },
  { time: "04:00", critical: 1, high: 5, medium: 12, low: 20 },
  { time: "08:00", critical: 4, high: 12, medium: 18, low: 30 },
  { time: "12:00", critical: 3, high: 10, medium: 16, low: 28 },
  { time: "16:00", critical: 5, high: 15, medium: 22, low: 35 },
  { time: "20:00", critical: 2, high: 8, medium: 14, low: 26 },
];

const regionalData = [
  { region: "Jawa", incidents: 450, protected: 320 },
  { region: "Sumatra", incidents: 280, protected: 180 },
  { region: "Kalimantan", incidents: 150, protected: 95 },
  { region: "Sulawesi", incidents: 120, protected: 85 },
  { region: "Papua", incidents: 80, protected: 45 },
  { region: "Bali & NT", incidents: 90, protected: 55 },
];

const CyberSecurityDashboard = () => {
  const stats = [
    {
      title: "Ancaman Terdeteksi",
      value: "15.2K",
      change: "+12%",
      trend: "up",
      icon: AlertTriangle,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      title: "Sistem Terproteksi",
      value: "1,847",
      change: "+8%",
      trend: "up",
      icon: Shield,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Insiden Diselesaikan",
      value: "98.7%",
      change: "+2.3%",
      trend: "up",
      icon: Target,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Response Time",
      value: "4.2m",
      change: "-15%",
      trend: "down",
      icon: Activity,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p
                    className={`text-xs ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}
                  >
                    {stat.change} dari bulan lalu
                  </p>
                </div>
                <div
                  className={`${stat.bgColor} ${stat.color} p-3 rounded-full`}
                >
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Threat Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Tren Ancaman Siber</CardTitle>
            <CardDescription>
              Perbandingan jenis ancaman dan tingkat penyelesaian
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={threatData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="malware"
                  stackId="1"
                  stroke="#ef4444"
                  fill="#ef4444"
                  fillOpacity={0.8}
                />
                <Area
                  type="monotone"
                  dataKey="phishing"
                  stackId="1"
                  stroke="#f97316"
                  fill="#f97316"
                  fillOpacity={0.8}
                />
                <Area
                  type="monotone"
                  dataKey="ddos"
                  stackId="1"
                  stroke="#eab308"
                  fill="#eab308"
                  fillOpacity={0.8}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Service Usage Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Distribusi Penggunaan Layanan</CardTitle>
            <CardDescription>
              Persentase penggunaan layanan BSSN
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={serviceUsageData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={(entry) => `${entry.name}: ${entry.value}%`}
                >
                  {serviceUsageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Response Time by Priority */}
        <Card>
          <CardHeader>
            <CardTitle>Waktu Respons Berdasarkan Prioritas</CardTitle>
            <CardDescription>
              Average response time sepanjang hari
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={responseTimeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="critical"
                  stroke="#dc2626"
                  strokeWidth={3}
                  name="Critical"
                />
                <Line
                  type="monotone"
                  dataKey="high"
                  stroke="#ea580c"
                  strokeWidth={2}
                  name="High"
                />
                <Line
                  type="monotone"
                  dataKey="medium"
                  stroke="#ca8a04"
                  strokeWidth={2}
                  name="Medium"
                />
                <Line
                  type="monotone"
                  dataKey="low"
                  stroke="#16a34a"
                  strokeWidth={2}
                  name="Low"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Regional Security Coverage */}
        <Card>
          <CardHeader>
            <CardTitle>Cakupan Keamanan Regional</CardTitle>
            <CardDescription>
              Insiden vs sistem terproteksi per wilayah
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={regionalData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="region" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="incidents" fill="#ef4444" name="Insiden" />
                <Bar dataKey="protected" fill="#10b981" name="Terproteksi" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Real-time Activity Feed */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Aktivitas Real-time
          </CardTitle>
          <CardDescription>
            Update terbaru sistem keamanan siber
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                time: "10:45",
                type: "threat",
                message: "Blocked 15 phishing attempts from suspicious IP",
                severity: "high",
              },
              {
                time: "10:42",
                type: "alert",
                message:
                  "New CVE-2024-XXX vulnerability detected in Java framework",
                severity: "critical",
              },
              {
                time: "10:38",
                type: "success",
                message: "Successfully patched 25 systems in Jakarta region",
                severity: "low",
              },
              {
                time: "10:35",
                type: "info",
                message:
                  "Monthly security training completed by 150 participants",
                severity: "low",
              },
              {
                time: "10:30",
                type: "threat",
                message: "DDoS attack mitigated on government portal",
                severity: "medium",
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 rounded-lg bg-gray-50"
              >
                <div
                  className={`w-2 h-2 rounded-full mt-2 ${
                    activity.severity === "critical"
                      ? "bg-red-500"
                      : activity.severity === "high"
                        ? "bg-orange-500"
                        : activity.severity === "medium"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                  }`}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{activity.message}</p>
                    <span className="text-xs text-muted-foreground">
                      {activity.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CyberSecurityDashboard;
