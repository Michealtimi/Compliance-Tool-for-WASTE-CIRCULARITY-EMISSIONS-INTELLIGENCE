"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  FileUp,
  FileText,
  MapPin,
  Users,
  CreditCard,
  AlertTriangle,
  AlertCircle,
  Eye,
} from "lucide-react"

const routes = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/submit", label: "Submit", icon: FileUp },
  { href: "/submissions", label: "View Submissions", icon: Eye },
  { href: "/reports", label: "Reports", icon: FileText },
  { href: "/regions", label: "Regions", icon: MapPin },
  { href: "/partners", label: "Partners", icon: Users },
  { href: "/payments", label: "Payments", icon: CreditCard },
  { href: "/alerts/critical", label: "Critical", icon: AlertTriangle, blink: true },
  { href: "/alerts/warning", label: "Warnings", icon: AlertCircle },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 z-50 h-screen w-64 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex flex-col">
      {/* Logo Section */}
      <div className="p-6 pb-8">
        <Link href="/dashboard" className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-lg bg-[#059669] flex items-center justify-center flex-shrink-0 shadow-lg">
            <span className="text-white font-bold text-base">NB</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white text-sm leading-tight">Nigerian Breweries</span>
            <span className="text-xs text-slate-400">EPR Dashboard</span>
          </div>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 overflow-y-auto">
        <div className="flex flex-col space-y-1">
          {routes.map((route) => {
            const Icon = route.icon
            const isActive = pathname === route.href

            return (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all",
                  isActive
                    ? "bg-[#059669] text-white shadow-lg shadow-[#059669]/20"
                    : "text-slate-300 hover:bg-slate-700/50 hover:text-white",
                )}
              >
                <Icon className={cn("h-5 w-5 flex-shrink-0", route.blink && "animate-pulse text-red-500")} />
                <span>{route.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>

      {/* User Profile Section */}
      <div className="p-4 pb-6">
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-800/50">
          <div className="h-9 w-9 rounded-full bg-[#059669] flex items-center justify-center flex-shrink-0">
            <span className="text-white font-semibold text-sm">AD</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white">Admin</span>
            <span className="text-xs text-slate-400">administrator</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
