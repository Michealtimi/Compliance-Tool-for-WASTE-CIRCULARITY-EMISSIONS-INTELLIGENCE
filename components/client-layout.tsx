"use client"

import type React from "react"
import { Analytics } from "@vercel/analytics/next"
import { Navigation } from "@/components/navigation"
import { usePathname } from "next/navigation"

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const showNavigation = pathname !== "/"

  return (
    <>
      {showNavigation && <Navigation />}
      <div className={showNavigation ? "ml-64" : ""}>{children}</div>
      <Analytics />
    </>
  )
}
