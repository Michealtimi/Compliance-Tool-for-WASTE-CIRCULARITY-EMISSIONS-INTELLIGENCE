import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const submissions = [
  {
    timestamp: "2024-12-17 14:32",
    partner: "Green Lagos Collectors",
    hub: "Apapa",
    assetType: "RGB Bottles",
    quantity: "12,500",
    status: "Verified",
  },
  {
    timestamp: "2024-12-17 14:18",
    partner: "EcoPartners Ltd",
    hub: "Ikeja",
    assetType: "Plastic Crates",
    quantity: "850",
    status: "Verified",
  },
  {
    timestamp: "2024-12-17 13:55",
    partner: "Community Recyclers",
    hub: "VI",
    assetType: "PET Bottles",
    quantity: "2.3 tons",
    status: "Pending",
  },
  {
    timestamp: "2024-12-17 13:42",
    partner: "Lagos Waste Solutions",
    hub: "Surulere",
    assetType: "RGB Bottles",
    quantity: "8,200",
    status: "Verified",
  },
  {
    timestamp: "2024-12-17 13:15",
    partner: "Recycle4Life",
    hub: "Lekki",
    assetType: "Plastic Crates",
    quantity: "320",
    status: "Rejected",
  },
  {
    timestamp: "2024-12-17 12:58",
    partner: "Green Initiative NG",
    hub: "Yaba",
    assetType: "RGB Bottles",
    quantity: "5,800",
    status: "Pending",
  },
  {
    timestamp: "2024-12-17 12:30",
    partner: "EcoHub Collectors",
    hub: "Ikorodu",
    assetType: "PET Bottles",
    quantity: "1.8 tons",
    status: "Verified",
  },
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Verified":
      return <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">Verified</Badge>
    case "Pending":
      return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Pending</Badge>
    case "Rejected":
      return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Rejected</Badge>
    default:
      return <Badge variant="secondary">{status}</Badge>
  }
}

export function OperationalLogTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Submissions</CardTitle>
        <CardDescription>Real-time operational log of partner activities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-2 font-semibold text-slate-700">Timestamp</th>
                <th className="text-left py-3 px-2 font-semibold text-slate-700">Partner</th>
                <th className="text-left py-3 px-2 font-semibold text-slate-700">Hub</th>
                <th className="text-left py-3 px-2 font-semibold text-slate-700">Asset Type</th>
                <th className="text-right py-3 px-2 font-semibold text-slate-700">Quantity</th>
                <th className="text-center py-3 px-2 font-semibold text-slate-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((submission, index) => (
                <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-2 text-slate-600 font-mono text-xs">{submission.timestamp}</td>
                  <td className="py-3 px-2 text-slate-900">{submission.partner}</td>
                  <td className="py-3 px-2 text-slate-700">{submission.hub}</td>
                  <td className="py-3 px-2 text-slate-700">{submission.assetType}</td>
                  <td className="py-3 px-2 text-right font-semibold text-slate-900">{submission.quantity}</td>
                  <td className="py-3 px-2 text-center">{getStatusBadge(submission.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
