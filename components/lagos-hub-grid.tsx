const hubs = [
  { name: "Apapa Hub", compliance: 92, color: "bg-emerald-700" },
  { name: "Ikeja Hub", compliance: 88, color: "bg-emerald-600" },
  { name: "Victoria Island Hub", compliance: 85, color: "bg-emerald-500" },
  { name: "Surulere Hub", compliance: 78, color: "bg-yellow-500" },
  { name: "Ikorodu Hub", compliance: 72, color: "bg-yellow-600" },
  { name: "Lekki Hub", compliance: 68, color: "bg-orange-500" },
  { name: "Yaba Hub", compliance: 55, color: "bg-orange-600" },
  { name: "Festac Hub", compliance: 48, color: "bg-red-500" },
  { name: "Badagry Hub", compliance: 42, color: "bg-red-600" },
  { name: "Epe Hub", compliance: 38, color: "bg-red-700" },
]

export function LagosHubGrid() {
  return (
    <div className="space-y-4">
      {hubs.map((hub) => (
        <div key={hub.name} className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-700">{hub.name}</span>
            <span className="text-sm font-bold text-slate-900">{hub.compliance}%</span>
          </div>
          <div className="relative h-3 bg-slate-100 rounded-full overflow-hidden">
            <div
              className={`absolute top-0 left-0 h-full ${hub.color} transition-all duration-300`}
              style={{ width: `${hub.compliance}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
