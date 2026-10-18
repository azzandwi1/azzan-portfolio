import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Azzan Dwi Riski | QSE Coordinator & Data Analyst | AI & Operations Specialist",
  description:
    "Portfolio of Azzan Dwi Riski — QSE Coordinator & Data Analyst at SAP Express, Computer Science honors graduate (3.87 GPA), and Komdigi Hackathon winner specializing in operations analytics, machine learning, and computer vision.",
  keywords: [
    "Azzan Dwi Riski",
    "Data Analyst",
    "Operations Analyst",
    "QSE Coordinator",
    "SAP Express",
    "Machine Learning",
    "Computer Vision",
    "Power BI",
    "Python",
    "SQL",
  ],
  authors: [{ name: "Azzan Dwi Riski" }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body className="font-sans antialiased bg-slate-950 text-slate-100 min-h-screen selection:bg-emerald-500/30 selection:text-emerald-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <div className="relative min-h-screen bg-slate-950 bg-grid-pattern overflow-hidden">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
