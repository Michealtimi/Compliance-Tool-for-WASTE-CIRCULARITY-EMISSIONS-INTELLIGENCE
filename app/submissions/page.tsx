import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Eye, Calendar, MapPin } from "lucide-react"

const submissions = [
  {
    id: "SUB-2024-001",
    date: "Dec 15, 2024",
    partner: "ABC Distributors Ltd",
    location: "Ikeja Hub",
    bottles: 12500,
    crates: 3200,
    pet: 450,
    status: "Verified",
  },
  {
    id: "SUB-2024-002",
    date: "Dec 15, 2024",
    partner: "Lagos Waste Pickers Cooperative",
    location: "Surulere Hub",
    bottles: 8700,
    crates: 2100,
    pet: 890,
    status: "Pending",
  },
  {
    id: "SUB-2024-003",
    date: "Dec 14, 2024",
    partner: "EcoRecycle Partners",
    location: "Victoria Island Hub",
    bottles: 15600,
    crates: 4200,
    pet: 1200,
    status: "Verified",
  },
  {
    id: "SUB-2024-004",
    date: "Dec 14, 2024",
    partner: "Ikorodu Collection Network",
    location: "Ikorodu Hub",
    bottles: 9400,
    crates: 2800,
    pet: 670,
    status: "Rejected",
  },
  {
    id: "SUB-2024-005",
    date: "Dec 13, 2024",
    partner: "Mainland Distributors Ltd",
    location: "Yaba Hub",
    bottles: 11200,
    crates: 3500,
    pet: 520,
    status: "Verified",
  },
]

export default function SubmissionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">View Submissions</h1>
          <p className="text-slate-600">Review and verify all partner submissions</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600">Total Submissions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-900">127</div>
              <div className="text-sm text-slate-600">This month</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600">Verified</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-emerald-600">95</div>
              <div className="text-sm text-slate-600">74.8% approval rate</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600">Pending Review</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-amber-600">28</div>
              <div className="text-sm text-slate-600">Awaiting verification</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600">Rejected</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-600">4</div>
              <div className="text-sm text-slate-600">3.1% rejection rate</div>
            </CardContent>
          </Card>
        </div>

        {/* Submissions Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Submissions</CardTitle>
                <CardDescription>All partner submissions for review</CardDescription>
              </div>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2 text-sm font-semibold text-slate-700">Submission ID</th>
                    <th className="text-left py-3 px-2 text-sm font-semibold text-slate-700">Date</th>
                    <th className="text-left py-3 px-2 text-sm font-semibold text-slate-700">Partner</th>
                    <th className="text-left py-3 px-2 text-sm font-semibold text-slate-700">Location</th>
                    <th className="text-left py-3 px-2 text-sm font-semibold text-slate-700">Bottles</th>
                    <th className="text-left py-3 px-2 text-sm font-semibold text-slate-700">Crates</th>
                    <th className="text-left py-3 px-2 text-sm font-semibold text-slate-700">PET</th>
                    <th className="text-left py-3 px-2 text-sm font-semibold text-slate-700">Status</th>
                    <th className="text-left py-3 px-2 text-sm font-semibold text-slate-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((submission) => (
                    <tr key={submission.id} className="border-b hover:bg-slate-50">
                      <td className="py-3 px-2 text-sm font-mono text-slate-900">{submission.id}</td>
                      <td className="py-3 px-2 text-sm text-slate-700">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-slate-400" />
                          {submission.date}
                        </div>
                      </td>
                      <td className="py-3 px-2 text-sm font-medium text-slate-900">{submission.partner}</td>
                      <td className="py-3 px-2 text-sm text-slate-700">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-slate-400" />
                          {submission.location}
                        </div>
                      </td>
                      <td className="py-3 px-2 text-sm text-slate-700">{submission.bottles.toLocaleString()}</td>
                      <td className="py-3 px-2 text-sm text-slate-700">{submission.crates.toLocaleString()}</td>
                      <td className="py-3 px-2 text-sm text-slate-700">{submission.pet.toLocaleString()}</td>
                      <td className="py-3 px-2">
                        <Badge
                          variant="secondary"
                          className={
                            submission.status === "Verified"
                              ? "bg-emerald-100 text-emerald-800"
                              : submission.status === "Pending"
                                ? "bg-amber-100 text-amber-800"
                                : "bg-red-100 text-red-800"
                          }
                        >
                          {submission.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
