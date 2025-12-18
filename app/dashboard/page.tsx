import { Recycle, Target, Coins, Leaf } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { KpiCard } from "@/components/kpi-card"
import { BottlesTrendChart } from "@/components/bottles-trend-chart"
import { AssetCompositionChart } from "@/components/asset-composition-chart"
import { LagosHubGrid } from "@/components/lagos-hub-grid"
import { ReuseRateGauge } from "@/components/reuse-rate-gauge"
import { OperationalLogTable } from "@/components/operational-log-table"
import { SocialImpactChart } from "@/components/social-impact-chart"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">EPR Compliance Dashboard</h1>
          <p className="text-slate-600">360-degree view of the packaging lifecycle and sustainability impact</p>
        </div>

        {/* Top Row - Key Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <KpiCard
            title="Total Returns (Units)"
            value="4.2M"
            icon={Recycle}
            trend={{ value: 12, isPositive: true }}
            subtitle="Bottles + Crates + PET"
          />
          <KpiCard
            title="Compliance Score"
            value="78%"
            icon={Target}
            trend={{ value: 3, isPositive: true }}
            subtitle="NESREA Target: 80%"
          />
          <KpiCard
            title="Incentives Paid"
            value="₦12.5M"
            icon={Coins}
            trend={{ value: 8, isPositive: true }}
            subtitle="450 partners this month"
          />
          <KpiCard
            title="CO₂ Avoided"
            value="1,250T"
            icon={Leaf}
            trend={{ value: 15, isPositive: true }}
            subtitle="Environmental impact"
          />
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Bottles Sent Out vs. Bottles Returned</CardTitle>
            <CardDescription>6-month trend analysis of packaging flow</CardDescription>
          </CardHeader>
          <CardContent>
            <BottlesTrendChart />
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Asset Composition</CardTitle>
              <CardDescription>Current recovery breakdown by material type</CardDescription>
            </CardHeader>
            <CardContent>
              <AssetCompositionChart />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Geospatial Performance</CardTitle>
              <CardDescription>Lagos Hub compliance heat map</CardDescription>
            </CardHeader>
            <CardContent>
              <LagosHubGrid />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Circular Efficiency</CardTitle>
              <CardDescription>Bottle reuse rate speedometer</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <ReuseRateGauge current={12.3} target={15} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Social Impact</CardTitle>
              <CardDescription>Top 5 collection partners by volume</CardDescription>
            </CardHeader>
            <CardContent>
              <SocialImpactChart />
            </CardContent>
          </Card>
        </div>

        <OperationalLogTable />
      </main>
    </div>
  )
}
