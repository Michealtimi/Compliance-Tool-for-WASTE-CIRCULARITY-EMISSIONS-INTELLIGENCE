import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertCircle, Clock, MapPin, TrendingDown } from "lucide-react"

const warningAlerts = [
  {
    id: "WARN-001",
    title: "Approaching Compliance Deadline",
    description: "Q1 2025 EPR report submission due in 15 days",
    location: "Compliance",
    timestamp: "3 hours ago",
    severity: "Warning",
    impact: "Medium",
  },
  {
    id: "WARN-002",
    title: "Hub Performance Declining",
    description: "Surulere Hub collection rates down 12% this week",
    location: "Surulere Hub",
    timestamp: "6 hours ago",
    severity: "Warning",
    impact: "Medium",
  },
  {
    id: "WARN-003",
    title: "Partner Inactivity",
    description: "15 partners have not submitted collections in 7 days",
    location: "Partner Network",
    timestamp: "12 hours ago",
    severity: "Warning",
    impact: "Low",
  },
  {
    id: "WARN-004",
    title: "Payment Processing Delay",
    description: "₦800K in payments pending for more than 10 days",
    location: "Finance",
    timestamp: "1 day ago",
    severity: "Warning",
    impact: "Medium",
  },
  {
    id: "WARN-005",
    title: "Storage Capacity Alert",
    description: "Ikeja Hub approaching 85% storage capacity",
    location: "Ikeja Hub",
    timestamp: "1 day ago",
    severity: "Warning",
    impact: "Medium",
  },
  {
    id: "WARN-006",
    title: "Data Quality Issues",
    description: "Incomplete submission data from 8 partners this week",
    location: "Data Management",
    timestamp: "2 days ago",
    severity: "Warning",
    impact: "Low",
  },
]

export default function WarningAlertsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8 flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl bg-amber-100 flex items-center justify-center">
            <AlertCircle className="h-6 w-6 text-amber-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-800 mb-1">Warning Alerts</h1>
            <p className="text-slate-600">Issues requiring attention before they become critical</p>
          </div>
        </div>

        {/* Alert Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-amber-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-amber-600">Active Warnings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-amber-600">6</div>
              <div className="text-sm text-slate-600">Monitoring required</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600">Escalated This Week</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-red-600">2</div>
              <div className="text-sm text-slate-600">To critical status</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600">Resolved This Week</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-emerald-600">18</div>
              <div className="text-sm text-slate-600">92% resolution rate</div>
            </CardContent>
          </Card>
        </div>

        {/* Warning Alerts List */}
        <div className="space-y-4">
          {warningAlerts.map((alert) => (
            <Card key={alert.id} className="border-l-4 border-l-amber-500">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <AlertCircle className="h-5 w-5 text-amber-600" />
                      <h3 className="text-lg font-semibold text-slate-900">{alert.title}</h3>
                      <Badge variant="secondary" className="bg-amber-100 text-amber-800">
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
                    <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                      Review
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
