"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DollarSign, Clock, CheckCircle, Calendar } from "lucide-react"

const initialPaymentQueue = [
  {
    id: 1,
    partner: "ABC Distributors Ltd",
    collections: 1200,
    amount: 225000,
    method: "Bank Transfer",
    account: "0123456789 GTB",
    status: "Pending",
  },
  {
    id: 2,
    partner: "Lagos Waste Pickers Cooperative",
    collections: 380,
    amount: 60000,
    method: "Mobile Money",
    account: "0811234567",
    status: "Pending",
  },
  {
    id: 3,
    partner: "EcoRecycle Partners",
    collections: 8,
    amount: 1200000,
    method: "Bank Transfer",
    account: "9876543210 Access",
    status: "Pending",
  },
  {
    id: 4,
    partner: "Ikorodu Collection Network",
    collections: 890,
    amount: 140000,
    method: "Bank Transfer",
    account: "5555666677 UBA",
    status: "Pending",
  },
  {
    id: 5,
    partner: "Mainland Distributors Ltd",
    collections: 1050,
    amount: 190000,
    method: "Bank Transfer",
    account: "3333222211 Zenith",
    status: "Pending",
  },
]

const paymentHistory = [
  { date: "Nov 25, 2024", partners: 450, amount: 8700000, status: "Completed" },
  { date: "Oct 25, 2024", partners: 428, amount: 8200000, status: "Completed" },
  { date: "Sep 25, 2024", partners: 412, amount: 7800000, status: "Completed" },
  { date: "Aug 25, 2024", partners: 395, amount: 7500000, status: "Completed" },
]

export default function PaymentsPage() {
  const [paymentQueue, setPaymentQueue] = useState(initialPaymentQueue)

  const handleMarkAsPaid = (id: number) => {
    setPaymentQueue((prev) => prev.map((payment) => (payment.id === id ? { ...payment, status: "Paid" } : payment)))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Incentive Payments</h1>
          <p className="text-slate-600">Manage partner incentive payments and track payment history</p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-slate-600">Pending Payments</CardTitle>
                <Clock className="h-5 w-5 text-amber-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-amber-600 mb-1">₦2.4M</div>
              <div className="text-sm text-slate-600">127 partners</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-slate-600">Processed This Month</CardTitle>
                <CheckCircle className="h-5 w-5 text-emerald-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-emerald-600 mb-1">₦8.7M</div>
              <div className="text-sm text-slate-600">450 partners</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-slate-600">Average Payment</CardTitle>
                <DollarSign className="h-5 w-5 text-slate-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-900 mb-1">₦27,778</div>
              <div className="text-sm text-slate-600">per partner</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-slate-600">Next Payment Cycle</CardTitle>
                <Calendar className="h-5 w-5 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900 mb-1">Dec 25, 2024</div>
              <div className="text-sm text-slate-600">In 8 days</div>
            </CardContent>
          </Card>
        </div>

        {/* Payment Queue */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Payment Queue</CardTitle>
                <CardDescription>Partners awaiting payment this cycle</CardDescription>
              </div>
              <Button>Process All Payments</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2 text-sm font-semibold text-slate-700">Partner Name</th>
                    <th className="text-left py-3 px-2 text-sm font-semibold text-slate-700">Collections</th>
                    <th className="text-left py-3 px-2 text-sm font-semibold text-slate-700">Amount Due</th>
                    <th className="text-left py-3 px-2 text-sm font-semibold text-slate-700">Payment Method</th>
                    <th className="text-left py-3 px-2 text-sm font-semibold text-slate-700">Account Details</th>
                    <th className="text-left py-3 px-2 text-sm font-semibold text-slate-700">Status</th>
                    <th className="text-left py-3 px-2 text-sm font-semibold text-slate-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentQueue.map((payment) => (
                    <tr key={payment.id} className="border-b hover:bg-slate-50">
                      <td className="py-3 px-2 text-sm font-medium text-slate-900">{payment.partner}</td>
                      <td className="py-3 px-2 text-sm text-slate-700">{payment.collections}</td>
                      <td className="py-3 px-2 text-sm font-semibold text-emerald-600">
                        ₦{payment.amount.toLocaleString()}
                      </td>
                      <td className="py-3 px-2 text-sm text-slate-700">{payment.method}</td>
                      <td className="py-3 px-2 text-sm text-slate-600 font-mono text-xs">{payment.account}</td>
                      <td className="py-3 px-2">
                        <Badge
                          variant="secondary"
                          className={
                            payment.status === "Paid"
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-amber-100 text-amber-800"
                          }
                        >
                          {payment.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleMarkAsPaid(payment.id)}
                          disabled={payment.status === "Paid"}
                        >
                          {payment.status === "Paid" ? "Paid" : "Mark as Paid"}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Payment History */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Payment History</CardTitle>
                <CardDescription>Previous payment cycles</CardDescription>
              </div>
              <Button variant="outline">Export to Excel</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2 text-sm font-semibold text-slate-700">Payment Date</th>
                    <th className="text-left py-3 px-2 text-sm font-semibold text-slate-700">Partners Paid</th>
                    <th className="text-left py-3 px-2 text-sm font-semibold text-slate-700">Total Amount</th>
                    <th className="text-left py-3 px-2 text-sm font-semibold text-slate-700">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentHistory.map((history, index) => (
                    <tr key={index} className="border-b hover:bg-slate-50">
                      <td className="py-3 px-2 text-sm font-medium text-slate-900">{history.date}</td>
                      <td className="py-3 px-2 text-sm text-slate-700">{history.partners}</td>
                      <td className="py-3 px-2 text-sm font-semibold text-slate-900">
                        ₦{history.amount.toLocaleString()}
                      </td>
                      <td className="py-3 px-2">
                        <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          {history.status}
                        </Badge>
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
