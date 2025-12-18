import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Clock, MapPin, TrendingDown } from "lucide-react"

const criticalAlerts = [
  {
    id: "CRIT-001",
    title: "Compliance Threshold Breach",
    description: "Overall compliance score dropped below 75% threshold",
    location: "National",
    timestamp: "2 hours ago",
    severity: "Critical",
    impact: "High",
  },
  {
    id: "CRIT-002",
    title: "Hub Collection Failure",
    description: "Apapa Hub has not reported collections for 3 consecutive days",
    location: "Apapa Hub",
    timestamp: "5 hours ago",
    severity: "Critical",
    impact: "High",
  },
  {
    id: "CRIT-003",
    title: "Payment Delay Critical",
    description: "₦4.5M in payments overdue by more than 30 days",
    location: "Finance",
    timestamp: "8 hours ago",
    severity: "Critical",
    impact: "High",
  },
  {
    id: "CRIT-004",
    title: "Recovery Rate Plummeting",
    description: "Bottle recovery rate down 25% compared to last month",
    location: "Operations",
    timestamp: "1 day ago",
    severity: "Critical",
    impact: "Very High",
  },
]

export default function CriticalAlertsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8 flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl bg-red-100 flex items-center justify-center">
            <AlertTriangle className="h-6 w-6 text-red-600 animate-pulse" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-800 mb-1">Critical Alerts</h1>
            <p className="text-slate-600">Urgent issues requiring immediate attention</p>
          </div>
        </div>

        {/* Alert Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-red-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-red-600">Active Critical Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-red-600">4</div>
              <div className="text-sm text-slate-600">Require immediate action</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600">Average Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-slate-900">2.4h</div>
              <div className="text-sm text-slate-600">Last 30 days</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600">Resolved This Week</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-emerald-600">12</div>
              <div className="text-sm text-slate-600">85% resolution rate</div>
            </CardContent>
          </Card>
        </div>

        {/* Critical Alerts List */}
        <div className="space-y-4">
          {criticalAlerts.map((alert) => (
            <Card key={alert.id} className="border-l-4 border-l-red-600">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                      <h3 className="text-lg font-semibold text-slate-900">{alert.title}</h3>
                      <Badge variant="secondary" className="bg-red-100 text-red-800">
                        {alert.severity}
                      </Badge>
                    </div>
                    <p className="text-slate-700 mb-4">{alert.description}</p>
                    <div className="flex items-center gap-6 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {alert.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {alert.timestamp}
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingDown className="h-4 w-4" />
                        Impact: {alert.impact}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button size="sm" className="bg-red-600 hover:bg-red-700">
                      Take Action
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
