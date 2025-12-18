"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

const data = [
  { name: "RGB Bottles (Glass)", value: 3800, percentage: 60.3 },
  { name: "Plastic Crates", value: 1920, percentage: 30.5 },
  { name: "PET Bottles", value: 580, percentage: 9.2 },
]

const COLORS = ["#059669", "#475569", "#94a3b8"]

export function AssetCompositionChart() {
  return (
    <div className="w-full h-[320px] flex flex-col items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={70} outerRadius={100} paddingAngle={2} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              fontSize: "12px",
            }}
            formatter={(value: number, name: string, props: any) => [
              `${(value / 1000).toFixed(1)}K units (${props.payload.percentage}%)`,
              "",
            ]}
          />
          <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontSize: "12px" }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
