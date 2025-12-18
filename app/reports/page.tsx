"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, Mail } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const complianceData = [
  { month: "Jan 2024", score: 72, status: "amber" },
  { month: "Feb 2024", score: 75, status: "amber" },
  { month: "Mar 2024", score: 78, status: "amber" },
  { month: "Apr 2024", score: 81, status: "green" },
  { month: "May 2024", score: 79, status: "amber" },
  { month: "Jun 2024", score: 82, status: "green" },
]

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Compliance & Reporting</h1>
          <p className="text-slate-600">Generate reports for NESREA and internal stakeholders</p>
        </div>

        {/* Report Generator Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardHeader>
              <FileText className="h-10 w-10 text-emerald-600 mb-3" />
              <CardTitle className="text-lg">Monthly EPR Report</CardTitle>
              <CardDescription>For NESREA Submission</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-4">Required data: Returns, recovery rates, partner payments</p>
              <Button className="w-full">Generate Report</Button>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardHeader>
              <FileText className="h-10 w-10 text-blue-600 mb-3" />
              <CardTitle className="text-lg">Quarterly Sustainability Report</CardTitle>
              <CardDescription>For Internal Stakeholders</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-4">Circular economy metrics, environmental impact</p>
              <Button className="w-full">Generate Report</Button>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardHeader>
              <FileText className="h-10 w-10 text-slate-600 mb-3" />
              <CardTitle className="text-lg">Annual Compliance Summary</CardTitle>
              <CardDescription>Full Year Overview</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-4">Trend analysis, year-over-year comparison</p>
              <Button className="w-full">Generate Report</Button>
            </CardContent>
          </Card>
        </div>

        {/* Date Range Picker */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Custom Report Parameters</CardTitle>
            <CardDescription>Select date range and report options</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="start">Start Date</Label>
                <Input id="start" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="end">End Date</Label>
                <Input id="end" type="date" />
              </div>
              <div className="space-y-2">
                <Label>Quick Select</Label>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    This Month
                  </Button>
                  <Button variant="outline" size="sm">
                    Last Quarter
                  </Button>
                  <Button variant="outline" size="sm">
                    YTD
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <Button>
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
              <Button variant="outline">
                <Mail className="h-4 w-4 mr-2" />
                Share via Email
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Compliance Timeline */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Compliance Timeline</CardTitle>
            <CardDescription>Monthly performance against NESREA requirements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {complianceData.map((item) => (
                <div key={item.month} className="flex items-center gap-4">
                  <div className="w-24 text-sm font-medium text-slate-700">{item.month}</div>
                  <div className="flex-1 bg-slate-100 rounded-full h-10 relative overflow-hidden">
                    <div
                      className={`h-full flex items-center px-4 ${
                        item.status === "green" ? "bg-emerald-500" : "bg-amber-500"
                      }`}
                      style={{ width: `${item.score}%` }}
                    >
                      <span className="text-white font-semibold text-sm">{item.score}%</span>
                    </div>
                  </div>
                  <div className="w-32">
                    {item.status === "green" ? (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                        Compliant
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                        Nearly Compliant
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm text-slate-600 mb-1">YTD Average Compliance</div>
              <div className="text-3xl font-bold text-slate-900">78%</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm text-slate-600 mb-1">Months Compliant</div>
              <div className="text-3xl font-bold text-emerald-600">4/6</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm text-slate-600 mb-1">Total Returns YTD</div>
              <div className="text-3xl font-bold text-slate-900">24M</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm text-slate-600 mb-1">Total Incentives Paid</div>
              <div className="text-3xl font-bold text-emerald-600">₦68M</div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
