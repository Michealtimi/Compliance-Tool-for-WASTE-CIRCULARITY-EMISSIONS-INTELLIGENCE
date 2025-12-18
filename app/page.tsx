"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Recycle, Leaf, TrendingUp, Users } from "lucide-react"

export default function LandingPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleGetCompliance = async () => {
    setIsLoading(true)
    // Simulate loading
    await new Promise((resolve) => setTimeout(resolve, 1500))
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Logo at top */}
      <div className="bg-white border-b border-slate-200 py-6 px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <div className="h-14 w-14 rounded-xl bg-[#059669] flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-2xl">NB</span>
          </div>
          <div className="text-left">
            <h1 className="text-xl font-bold text-slate-900">Nigerian Breweries Plc</h1>
            <p className="text-sm text-slate-600">Extended Producer Responsibility</p>
          </div>
        </div>
      </div>

      {/* Main content centered */}
      <div className="flex-1 flex items-center justify-center px-8 py-12">
        <div className="max-w-6xl w-full">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left side - Image */}
              <div className="relative h-[500px]">
                <img
                  src="/nigerian-bottle-recycling-and-sustainability-envir.jpg"
                  alt="EPR Compliance and Sustainability"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#059669]/90 via-[#059669]/40 to-transparent flex items-end p-10">
                  <div className="text-white">
                    <h2 className="text-3xl font-bold mb-2 text-balance">Sustainable Packaging Solutions</h2>
                    <p className="text-emerald-50 text-pretty">
                      Monitoring our environmental impact and regulatory compliance
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="p-10 flex flex-col justify-center bg-slate-50">
                <h2 className="text-4xl font-bold text-slate-900 mb-4 text-balance">EPR Compliance Dashboard</h2>
                <p className="text-base text-slate-700 mb-8 text-pretty leading-relaxed">
                  Comprehensive monitoring and management of Extended Producer Responsibility compliance, tracking
                  packaging lifecycle, partner incentives, and environmental impact metrics.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <div className="h-10 w-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Recycle className="h-5 w-5 text-[#059669]" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">4.2M Units</div>
                      <div className="text-sm text-slate-600">Total Returns</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">78% Score</div>
                      <div className="text-sm text-slate-600">Compliance</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <Users className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">450 Partners</div>
                      <div className="text-sm text-slate-600">Active Network</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Leaf className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">1,250T CO₂</div>
                      <div className="text-sm text-slate-600">Avoided</div>
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  onClick={handleGetCompliance}
                  disabled={isLoading}
                  className="w-full bg-[#059669] hover:bg-[#047857] text-white text-lg h-14 rounded-xl shadow-lg"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-3">
                      <div className="h-5 w-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                      Loading Dashboard...
                    </div>
                  ) : (
                    "Get Compliance Dashboard"
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-50 border-t border-slate-200 py-6 text-center text-sm text-slate-600">
        Powered by Nigerian Breweries Plc Sustainability Team
      </div>
    </div>
  )
}
