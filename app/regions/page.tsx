import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, CheckCircle, Info } from "lucide-react"
import { RegionalComparisonChart } from "@/components/regional-comparison-chart"

const regions = [
  { name: "Apapa Hub", returns: "850K", compliance: 92, quality: 95, status: "green", alert: null },
  { name: "Ikeja Hub", returns: "720K", compliance: 88, quality: 91, status: "green", alert: null },
  { name: "Oshodi Hub", returns: "650K", compliance: 75, quality: 82, status: "amber", alert: "High breakage" },
  { name: "Lagos Island Zone", returns: "580K", compliance: 68, quality: 88, status: "amber", alert: "Below target" },
  { name: "Ikorodu Hub", returns: "490K", compliance: 91, quality: 93, status: "green", alert: null },
  { name: "Lagos Mainland Zone", returns: "470K", compliance: 84, quality: 89, status: "green", alert: null },
  { name: "Badagry Hub", returns: "380K", compliance: 76, quality: 86, status: "amber", alert: null },
  { name: "Surulere Zone", returns: "360K", compliance: 82, quality: 90, status: "green", alert: null },
  { name: "Mushin Zone", returns: "290K", compliance: 73, quality: 85, status: "amber", alert: null },
  { name: "Festac Zone", returns: "210K", compliance: 79, quality: 87, status: "amber", alert: null },
]

const alerts = [
  {
    severity: "critical",
    message: "Oshodi Hub breakage rate 18% (threshold: 10%)",
    icon: AlertTriangle,
    color: "text-red-600",
  },
  {
    severity: "warning",
    message: "Lagos Island returns down 15% vs last month",
    icon: AlertTriangle,
    color: "text-amber-600",
  },
  { severity: "warning", message: "PET collection gap in Badagry zone", icon: AlertTriangle, color: "text-amber-600" },
  { severity: "info", message: "New collection partner activated in Festac", icon: Info, color: "text-blue-600" },
  {
    severity: "success",
    message: "Apapa Hub exceeded monthly target by 22%",
    icon: CheckCircle,
    color: "text-emerald-600",
  },
]

export default function RegionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Regional Performance</h1>
          <p className="text-slate-600">Monitor compliance and collection metrics across all hubs</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Regions Table */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Regional Performance Overview</CardTitle>
                <CardDescription>All Lagos hubs and zones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2 text-sm font-semibold text-slate-700">Region/Hub</th>
                        <th className="text-left py-3 px-2 text-sm font-semibold text-slate-700">Monthly Returns</th>
                        <th className="text-left py-3 px-2 text-sm font-semibold text-slate-700">Compliance</th>
                        <th className="text-left py-3 px-2 text-sm font-semibold text-slate-700">Quality</th>
                        <th className="text-left py-3 px-2 text-sm font-semibold text-slate-700">Alert</th>
                        <th className="text-left py-3 px-2 text-sm font-semibold text-slate-700">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {regions.map((region) => (
                        <tr key={region.name} className="border-b hover:bg-slate-50">
                          <td className="py-3 px-2 text-sm font-medium text-slate-900">{region.name}</td>
                          <td className="py-3 px-2 text-sm text-slate-700">{region.returns}</td>
                          <td className="py-3 px-2">
                            <Badge
                              variant={region.status === "green" ? "default" : "secondary"}
                              className={
                                region.status === "green"
                                  ? "bg-emerald-100 text-emerald-800"
                                  : "bg-amber-100 text-amber-800"
                              }
                            >
                              {region.compliance}%
                            </Badge>
                          </td>
                          <td className="py-3 px-2 text-sm text-slate-700">{region.quality}%</td>
                          <td className="py-3 px-2">
                            {region.alert ? (
                              <span className="text-xs text-amber-700 flex items-center gap-1">
                                <AlertTriangle className="h-3 w-3" />
                                {region.alert}
                              </span>
                            ) : (
                              <span className="text-xs text-slate-400">—</span>
                            )}
                          </td>
                          <td className="py-3 px-2">
                            <Button variant="ghost" size="sm">
                              View Details
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Regional Comparison Chart */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Regional Compliance Comparison</CardTitle>
                <CardDescription>Performance across all hubs</CardDescription>
              </CardHeader>
              <CardContent>
                <RegionalComparisonChart data={regions} />
              </CardContent>
            </Card>
          </div>

          {/* Alerts Sidebar */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Regional Alerts</CardTitle>
                <div className="flex gap-2 mt-3">
                  <Button variant="outline" size="sm">
                    All
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-600 border-red-200 bg-transparent">
                    Critical
                  </Button>
                  <Button variant="outline" size="sm" className="text-amber-600 border-amber-200 bg-transparent">
                    Warning
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {alerts.map((alert, index) => {
                  const Icon = alert.icon
                  return (
                    <div key={index} className="flex gap-3 pb-4 border-b last:border-0 last:pb-0">
                      <Icon className={`h-5 w-5 ${alert.color} flex-shrink-0 mt-0.5`} />
                      <div className="flex-1">
                        <p className="text-sm text-slate-700">{alert.message}</p>
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
