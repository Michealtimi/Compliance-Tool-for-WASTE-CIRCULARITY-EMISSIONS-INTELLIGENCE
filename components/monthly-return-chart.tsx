"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts"

const data = [
  { month: "Jul", actual: 68, target: 80 },
  { month: "Aug", actual: 72, target: 80 },
  { month: "Sep", actual: 74, target: 80 },
  { month: "Oct", actual: 76, target: 80 },
  { month: "Nov", actual: 75, target: 80 },
  { month: "Dec", actual: 78, target: 80 },
]

export function MonthlyReturnChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
        <YAxis stroke="#64748b" fontSize={12} unit="%" />
        <Tooltip
          contentStyle={{ backgroundColor: "#fff", border: "1px solid #e2e8f0", borderRadius: "8px" }}
          labelStyle={{ color: "#334155", fontWeight: 600 }}
        />
        <Legend />
        <ReferenceLine y={80} stroke="#dc2626" strokeDasharray="3 3" label="Target" />
        <Line
          type="monotone"
          dataKey="actual"
          stroke="#3b82f6"
          strokeWidth={3}
          name="Actual Returns"
          dot={{ fill: "#3b82f6", r: 5 }}
          activeDot={{ r: 7 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
