import { type LucideIcon, TrendingUp, TrendingDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface KpiCardProps {
  title: string
  value: string
  icon: LucideIcon
  trend?: {
    value: number
    isPositive: boolean
  }
  subtitle?: string
}

export function KpiCard({ title, value, icon: Icon, trend, subtitle }: KpiCardProps) {
  return (
    <Card className="border-slate-200">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-slate-600">{title}</CardTitle>
          <Icon className="h-5 w-5 text-emerald-700" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold text-slate-900 mb-2">{value}</div>
        {subtitle && <div className="text-sm text-slate-600 mb-3">{subtitle}</div>}
        {trend && (
          <div
            className={`flex items-center text-sm font-medium ${trend.isPositive ? "text-emerald-600" : "text-red-600"}`}
          >
            {trend.isPositive ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
            {trend.isPositive ? "+" : ""}
            {trend.value}%
          </div>
        )}
      </CardContent>
    </Card>
  )
}
