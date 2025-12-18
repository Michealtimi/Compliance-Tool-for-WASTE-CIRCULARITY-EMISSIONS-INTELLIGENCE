"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts"

const data = [
  { partner: "Green Lagos Collectors", volume: 285, color: "#059669" },
  { partner: "EcoPartners Ltd", volume: 242, color: "#10b981" },
  { partner: "Community Recyclers", volume: 198, color: "#34d399" },
  { partner: "Lagos Waste Solutions", volume: 176, color: "#6ee7b7" },
  { partner: "Recycle4Life", volume: 152, color: "#a7f3d0" },
]

export function SocialImpactChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" horizontal={true} vertical={false} />
        <XAxis type="number" stroke="#64748b" style={{ fontSize: "12px" }} tickFormatter={(value) => `${value}K`} />
        <YAxis dataKey="partner" type="category" stroke="#64748b" style={{ fontSize: "11px" }} width={150} />
        <Tooltip
          contentStyle={{
            backgroundColor: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            fontSize: "12px",
          }}
          formatter={(value: number) => [`${value}K units`, "Volume"]}
        />
        <Bar dataKey="volume" radius={[0, 4, 4, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
