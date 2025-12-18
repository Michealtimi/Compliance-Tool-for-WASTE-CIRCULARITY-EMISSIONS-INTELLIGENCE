"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "RGB Bottles", value: 3800000, display: "3.8M" },
  { name: "Crates", value: 320000, display: "320K" },
  { name: "PET (tons)", value: 80, display: "80" },
]

export function MaterialTypeChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="name" stroke="#64748b" fontSize={12} />
        <YAxis stroke="#64748b" fontSize={12} />
        <Tooltip
          contentStyle={{ backgroundColor: "#fff", border: "1px solid #e2e8f0", borderRadius: "8px" }}
          formatter={(value: number, name: string) => {
            const item = data.find((d) => d.value === value)
            return [item?.display || value, "Units"]
          }}
        />
        <Bar dataKey="value" fill="#059669" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
