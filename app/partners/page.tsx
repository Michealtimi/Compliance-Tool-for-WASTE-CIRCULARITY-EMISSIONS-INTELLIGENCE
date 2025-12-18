import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, UserPlus } from "lucide-react"
import { PartnerPerformanceChart } from "@/components/partner-performance-chart"
import Link from "next/link"

const partners = [
  {
    name: "ABC Distributors Ltd",
    type: "Distributor",
    location: "Apapa Hub",
    status: "Active",
    lastSubmission: "2 hours ago",
    returns: "45K",
    quality: 95,
    earned: 225000,
  },
  {
    name: "Lagos Waste Pickers Cooperative",
    type: "Collector",
    location: "Lagos Mainland",
    status: "Active",
    lastSubmission: "1 day ago",
    returns: "12K",
    quality: 88,
    earned: 60000,
  },
  {
    name: "EcoRecycle Partners",
    type: "Recycler",
    location: "Ikeja",
    status: "Active",
    lastSubmission: "3 hours ago",
    returns: "8 tons",
    quality: 92,
    earned: 1200000,
  },
  {
    name: "Ikorodu Collection Network",
    type: "Collector",
    location: "Ikorodu Hub",
    status: "Active",
    lastSubmission: "5 hours ago",
    returns: "28K",
    quality: 90,
    earned: 140000,
  },
  {
    name: "Mainland Distributors Ltd",
    type: "Distributor",
    location: "Lagos Mainland",
    status: "Active",
    lastSubmission: "4 hours ago",
    returns: "38K",
    quality: 93,
    earned: 190000,
  },
  {
    name: "Oshodi Waste Management",
    type: "Collector",
    location: "Oshodi Hub",
    status: "Active",
    lastSubmission: "1 day ago",
    returns: "15K",
    quality: 82,
    earned: 75000,
  },
  {
    name: "Festac Recyclers Co-op",
    type: "Cooperative",
    location: "Festac Zone",
    status: "Active",
    lastSubmission: "8 hours ago",
    returns: "10K",
    quality: 87,
    earned: 50000,
  },
  {
    name: "Victoria Island Distributors",
    type: "Distributor",
    location: "Lagos Island",
    status: "Active",
    lastSubmission: "12 hours ago",
    returns: "32K",
    quality: 91,
    earned: 160000,
  },
  {
    name: "Surulere Collection Hub",
    type: "Collector",
    location: "Surulere Zone",
    status: "Active",
    lastSubmission: "2 days ago",
    returns: "18K",
    quality: 85,
    earned: 90000,
  },
  {
    name: "GreenCycle Nigeria",
    type: "Recycler",
    location: "Apapa",
    status: "Active",
    lastSubmission: "6 hours ago",
    returns: "6 tons",
    quality: 94,
    earned: 900000,
  },
]

const topPartners = [
  { name: "ABC Distributors Ltd", returns: 45000 },
  { name: "Mainland Distributors Ltd", returns: 38000 },
  { name: "Victoria Island Distributors", returns: 32000 },
  { name: "Ikorodu Collection Network", returns: 28000 },
  { name: "Surulere Collection Hub", returns: 18000 },
]

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">Partner Management</h1>
            <p className="text-slate-600">Manage collection partners and track performance</p>
          </div>
          <Link href="/partners/add">
            <Button>
              <UserPlus className="h-4 w-4 mr-2" />
              Add New Partner
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Partners Table */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Partner Directory</CardTitle>
                    <CardDescription>All registered collection partners</CardDescription>
                  </div>
                  <div className="relative w-64">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input placeholder="Search partners..." className="pl-9" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2 text-xs font-semibold text-slate-700">Partner</th>
                        <th className="text-left py-3 px-2 text-xs font-semibold text-slate-700">Type</th>
                        <th className="text-left py-3 px-2 text-xs font-semibold text-slate-700">Location</th>
                        <th className="text-left py-3 px-2 text-xs font-semibold text-slate-700">Returns</th>
                        <th className="text-left py-3 px-2 text-xs font-semibold text-slate-700">Quality</th>
                        <th className="text-left py-3 px-2 text-xs font-semibold text-slate-700">Earned</th>
                        <th className="text-left py-3 px-2 text-xs font-semibold text-slate-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {partners.map((partner) => (
                        <tr key={partner.name} className="border-b hover:bg-slate-50">
                          <td className="py-3 px-2">
                            <div className="text-sm font-medium text-slate-900">{partner.name}</div>
                            <div className="text-xs text-slate-500">{partner.lastSubmission}</div>
                          </td>
                          <td className="py-3 px-2">
                            <Badge
                              variant="secondary"
                              className={
                                partner.type === "Distributor"
                                  ? "bg-blue-100 text-blue-800"
                                  : partner.type === "Collector"
                                    ? "bg-slate-100 text-slate-800"
                                    : partner.type === "Recycler"
                                      ? "bg-emerald-100 text-emerald-800"
                                      : "bg-purple-100 text-purple-800"
                              }
                            >
                              {partner.type}
                            </Badge>
                          </td>
                          <td className="py-3 px-2 text-sm text-slate-700">{partner.location}</td>
                          <td className="py-3 px-2 text-sm font-medium text-slate-900">{partner.returns}</td>
                          <td className="py-3 px-2 text-sm text-slate-700">{partner.quality}/100</td>
                          <td className="py-3 px-2 text-sm font-medium text-emerald-600">
                            ₦{partner.earned.toLocaleString()}
                          </td>
                          <td className="py-3 px-2">
                            <Button variant="ghost" size="sm">
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
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Payment Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm text-slate-600 mb-1">Total Pending Payments</div>
                  <div className="text-2xl font-bold text-amber-600">₦2.4M</div>
                  <div className="text-xs text-slate-500">127 partners awaiting payment</div>
                </div>
                <div>
                  <div className="text-sm text-slate-600 mb-1">Processed This Month</div>
                  <div className="text-2xl font-bold text-emerald-600">₦8.7M</div>
                  <div className="text-xs text-slate-500">450 partners paid</div>
                </div>
                <div>
                  <div className="text-sm text-slate-600 mb-1">Next Payment Date</div>
                  <div className="text-lg font-semibold text-slate-900">Dec 25, 2024</div>
                </div>
                <Button className="w-full">Process Payments</Button>
              </CardContent>
            </Card>

            {/* Top Partners */}
            <Card>
              <CardHeader>
                <CardTitle>Top Partners</CardTitle>
                <CardDescription>By monthly returns</CardDescription>
              </CardHeader>
              <CardContent>
                <PartnerPerformanceChart data={topPartners} />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
