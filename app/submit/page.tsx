"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Upload, AlertTriangle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const partners = [
  "ABC Distributors Ltd",
  "Lagos Collectors Association",
  "EcoRecycle Nigeria",
  "Ikorodu Waste Hub",
  "Apapa Collection Partners",
  "Festac Collectors Co-op",
  "Victoria Island Distributors",
  "Surulere Waste Management",
  "Mainland Recyclers Ltd",
  "Island Collectors Network",
]

const hubs = [
  "Apapa Hub",
  "Ikeja Hub",
  "Oshodi Hub",
  "Ikorodu Hub",
  "Badagry Hub",
  "Lagos Island Zone",
  "Lagos Mainland Zone",
  "Surulere Zone",
  "Mushin Zone",
  "Festac Zone",
]

const materials = [
  "RGB Bottles - Star Lager",
  "RGB Bottles - Gulder",
  "RGB Bottles - Amstel Malta",
  "RGB Bottles - Heineken",
  "RGB Bottles - Mixed Brands",
  "Plastic Crates",
  "PET Bottles (by weight)",
]

export default function SubmitPage() {
  const [quantity, setQuantity] = useState("")
  const [material, setMaterial] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)
  const { toast } = useToast()

  const calculateIncentive = () => {
    const qty = Number.parseFloat(quantity) || 0
    if (material.includes("Crates")) return qty * 200
    if (material.includes("PET")) return qty * 150
    return qty * 5
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSuccess(true)
    toast({
      title: "Collection submitted successfully",
      description: "Your submission has been received and is being processed.",
    })
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gray-50">
        <main className="container mx-auto px-6 py-8">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6 text-center">
              <div className="mb-6 flex justify-center">
                <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-emerald-600" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Submission Successful!</h2>
              <p className="text-slate-600 mb-6">Your collection data has been recorded</p>

              <div className="bg-slate-50 rounded-lg p-6 mb-6 text-left">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-slate-600">Confirmation Number</div>
                    <div className="text-lg font-semibold text-slate-900">COL-2024-00234</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-600">Expected Payment</div>
                    <div className="text-lg font-semibold text-slate-900">Dec 25, 2024</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-600">Amount Due</div>
                    <div className="text-lg font-semibold text-emerald-600">
                      ₦{calculateIncentive().toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-600">Status</div>
                    <div className="text-lg font-semibold text-amber-600">Pending Processing</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button onClick={() => setShowSuccess(false)} className="flex-1">
                  Submit Another Collection
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  View My Submissions
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Submit Collection Data</h1>
          <p className="text-slate-600">For Distributors and Collection Partners</p>
        </div>

        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Collection Details</CardTitle>
            <CardDescription>
              Please provide accurate information for proper tracking and incentive calculation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Partner Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-800">Partner Information</h3>

                <div className="space-y-2">
                  <Label htmlFor="partner">Partner Name</Label>
                  <Select required>
                    <SelectTrigger id="partner">
                      <SelectValue placeholder="Select partner" />
                    </SelectTrigger>
                    <SelectContent>
                      {partners.map((partner) => (
                        <SelectItem key={partner} value={partner}>
                          {partner}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type">Partner Type</Label>
                  <Select required>
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="distributor">Authorized Distributor</SelectItem>
                      <SelectItem value="collector">Informal Collector</SelectItem>
                      <SelectItem value="recycler">Recycling Partner</SelectItem>
                      <SelectItem value="cooperative">Community Cooperative</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location/Hub</Label>
                  <Select required>
                    <SelectTrigger id="location">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      {hubs.map((hub) => (
                        <SelectItem key={hub} value={hub}>
                          {hub}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Collection Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-800">Collection Details</h3>

                <div className="space-y-2">
                  <Label htmlFor="material">Material Type</Label>
                  <Select required onValueChange={setMaterial}>
                    <SelectTrigger id="material">
                      <SelectValue placeholder="Select material type" />
                    </SelectTrigger>
                    <SelectContent>
                      {materials.map((mat) => (
                        <SelectItem key={mat} value={mat}>
                          {mat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input
                      id="quantity"
                      type="number"
                      placeholder="Enter quantity"
                      required
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">Collection Date</Label>
                    <Input id="date" type="date" required />
                  </div>
                </div>
              </div>

              {/* Quality Assessment */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-800">Quality Assessment</h3>

                <div className="space-y-2">
                  <Label>Quality Check</Label>
                  <div className="grid grid-cols-3 gap-3">
                    <label className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-slate-50">
                      <input type="radio" name="quality" value="pass" required />
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">Pass - Ready for reuse</span>
                    </label>
                    <label className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-slate-50">
                      <input type="radio" name="quality" value="minor" />
                      <AlertTriangle className="h-4 w-4 text-amber-600" />
                      <span className="text-sm">Minor Damage</span>
                    </label>
                    <label className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-slate-50">
                      <input type="radio" name="quality" value="fail" />
                      <span className="text-red-600 text-lg">✕</span>
                      <span className="text-sm">Fail - Crushed</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Quality Notes (Optional)</Label>
                  <Textarea id="notes" placeholder="Additional observations..." rows={3} />
                </div>

                <div className="space-y-2">
                  <Label>Photo Upload</Label>
                  <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-slate-400 cursor-pointer">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-slate-400" />
                    <p className="text-sm text-slate-600">Upload up to 3 photos</p>
                    <p className="text-xs text-slate-500 mt-1">PNG, JPG up to 10MB each</p>
                  </div>
                </div>
              </div>

              {/* Incentive Calculation */}
              <div className="bg-slate-50 rounded-lg p-6 space-y-3">
                <h3 className="text-lg font-semibold text-slate-800">Incentive Calculation</h3>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-slate-600 mb-1">Rate per unit</div>
                    <div className="font-semibold text-slate-900">
                      {material.includes("Crates") ? "₦200/crate" : material.includes("PET") ? "₦150/kg" : "₦5/bottle"}
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-600 mb-1">Total Amount</div>
                    <div className="font-semibold text-emerald-600 text-lg">
                      ₦{calculateIncentive().toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-600 mb-1">Payment Status</div>
                    <div className="font-semibold text-amber-600">Pending Processing</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button type="submit" className="flex-1">
                  Submit Collection
                </Button>
                <Button type="button" variant="outline" className="flex-1 bg-transparent">
                  Save as Draft
                </Button>
                <Button type="button" variant="ghost">
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
