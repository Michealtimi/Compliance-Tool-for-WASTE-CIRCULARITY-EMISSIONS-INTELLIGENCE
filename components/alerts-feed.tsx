import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, CheckCircle, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

const alerts = [
  {
    type: "warning",
    message: "High bottle breakage (18%) at Oshodi Hub",
    time: "2 hours ago",
  },
  {
    type: "success",
    message: "Apapa Hub exceeded target - 92% returns",
    time: "3 hours ago",
  },
  {
    type: "warning",
    message: "PET collection down 12% in Ikorodu zone",
    time: "5 hours ago",
  },
  {
    type: "info",
    message: "New partner onboarded: Lagos Waste Pickers Coop",
    time: "1 day ago",
  },
]

export function AlertsFeed() {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Recent Alerts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert, index) => (
          <div key={index} className="flex gap-3 pb-4 border-b last:border-0 last:pb-0">
            {alert.type === "warning" && <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />}
            {alert.type === "success" && <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />}
            {alert.type === "info" && <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />}
            <div className="flex-1">
              <p className="text-sm text-slate-700">{alert.message}</p>
              <p className="text-xs text-slate-500 mt-1">{alert.time}</p>
            </div>
          </div>
        ))}
        <Button variant="outline" className="w-full bg-transparent">
          View All Alerts
        </Button>
      </CardContent>
    </Card>
  )
}
