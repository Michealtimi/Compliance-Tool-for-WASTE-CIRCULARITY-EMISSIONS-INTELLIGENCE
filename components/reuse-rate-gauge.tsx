"use client"

import { useEffect, useState } from "react"

interface ReuseRateGaugeProps {
  current: number
  target: number
}

export function ReuseRateGauge({ current, target }: ReuseRateGaugeProps) {
  const [mounted, setMounted] = useState(false)
  const percentage = (current / target) * 100
  const rotation = (percentage / 100) * 180 - 90

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="relative w-64 h-32">
        {/* Background arc */}
        <svg className="w-full h-full" viewBox="0 0 200 100">
          <path d="M 20 80 A 80 80 0 0 1 180 80" fill="none" stroke="#e2e8f0" strokeWidth="16" strokeLinecap="round" />
          {/* Progress arc */}
          <path
            d="M 20 80 A 80 80 0 0 1 180 80"
            fill="none"
            stroke="#059669"
            strokeWidth="16"
            strokeLinecap="round"
            strokeDasharray={`${(percentage / 100) * 251.2} 251.2`}
            className="transition-all duration-1000 ease-out"
            style={{ opacity: mounted ? 1 : 0 }}
          />
        </svg>

        {/* Needle */}
        <div
          className="absolute top-0 left-1/2 w-1 h-20 bg-slate-700 origin-bottom transition-transform duration-1000 ease-out"
          style={{
            transform: mounted ? `translateX(-50%) rotate(${rotation}deg)` : "translateX(-50%) rotate(-90deg)",
          }}
        >
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-700 rounded-full" />
        </div>

        {/* Center dot */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-700 rounded-full" />
      </div>

      <div className="mt-6 text-center">
        <div className="text-4xl font-bold text-slate-900">{current}</div>
        <div className="text-sm text-slate-600 mt-1">cycles / {target} target</div>
        <div className="text-xs text-slate-500 mt-2">Bottle Reuse Rate</div>
      </div>
    </div>
  )
}
