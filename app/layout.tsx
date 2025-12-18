import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ClientLayout } from "@/components/client-layout"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nigerian Breweries EPR Compliance Dashboard",
  description:
    "Extended Producer Responsibility compliance monitoring and partner management for Nigerian Breweries Plc",
  generator: '',
  icons: {
    icon: [
      {
        url: "/icon-li-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/n-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/ic.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/applecon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-slate-50">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
