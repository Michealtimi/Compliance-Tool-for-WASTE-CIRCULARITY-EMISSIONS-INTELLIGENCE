"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts"

interface RegionData {
  name: string
  compliance: number
  status: string
}

export function RegionalComparisonChart({ data }: { data: RegionData[] }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} layout="horizontal" margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis type="number" stroke="#64748b" fontSize={12} unit="%" domain={[0, 100]} />
        <YAxis type="category" dataKey="name" stroke="#64748b" fontSize={11} width={90} />
        <Tooltip
          contentStyle={{ backgroundColor: "#fff", border: "1px solid #e2e8f0", borderRadius: "8px" }}
          formatter={(value: number) => [`${value}%`, "Compliance"]}
        />
        <ReferenceLine x={80} stroke="#dc2626" strokeDasharray="3 3" label="Target 80%" />
        <Bar
          dataKey="compliance"
          fill="#059669"
          radius={[0, 8, 8, 0]}
          shape={(props: any) => {
            const fill = props.compliance >= 80 ? "#059669" : "#f59e0b"
            return <rect {...props} fill={fill} />
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
