"use client"

import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts"

const data = [
  { month: "Jul", sentOut: 8200, returned: 6150 },
  { month: "Aug", sentOut: 8500, returned: 6400 },
  { month: "Sep", sentOut: 8100, returned: 6200 },
  { month: "Oct", sentOut: 8800, returned: 6700 },
  { month: "Nov", sentOut: 9200, returned: 7100 },
  { month: "Dec", sentOut: 9500, returned: 7400 },
]

export function BottlesTrendChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorSent" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#64748b" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#64748b" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorReturned" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#059669" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#059669" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="month" stroke="#64748b" style={{ fontSize: "12px" }} />
        <YAxis
          stroke="#64748b"
          style={{ fontSize: "12px" }}
          tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            fontSize: "12px",
          }}
          formatter={(value: number) => [`${(value / 1000).toFixed(1)}K bottles`, ""]}
        />
        <Legend wrapperStyle={{ fontSize: "12px" }} iconType="line" />
        <Area
          type="monotone"
          dataKey="sentOut"
          stroke="#64748b"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorSent)"
          name="Bottles Sent Out"
        />
        <Area
          type="monotone"
          dataKey="returned"
          stroke="#059669"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorReturned)"
          name="Bottles Returned"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
