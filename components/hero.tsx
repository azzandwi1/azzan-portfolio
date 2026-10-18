"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail, Download, MapPin, Award, CheckCircle2, TrendingUp, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  const roles = [
    "QSE Coordinator & Data Analyst",
    "Machine Learning & AI Practitioner",
    "Logistics & Operations Specialist",
    "Power BI & Pipeline Engineer",
  ]
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [roles.length])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & Value Prop */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs text-emerald-300 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
              <span className="font-medium">Available for High-Impact Data & AI Roles</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Turning Complex Data into{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  Operational Impact
                </span>{" "}
                & Applied AI.
              </h1>
              <div className="h-9 flex items-center">
                <span className="text-slate-400 text-lg sm:text-xl font-medium mr-2">I am a</span>
                <span className="text-emerald-400 text-lg sm:text-xl font-semibold border-b-2 border-emerald-400/60 pb-0.5">
                  {roles[roleIndex]}
                </span>
              </div>
            </div>

            {/* Bio Paragraph */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Experienced in orchestrating nationwide logistics operations analytics at{" "}
              <span className="text-white font-semibold">PT Satria Antaran Prima Tbk ("SAP Express")</span>. 
              Specializing in executive KPI architecture, nationwide courier compensation modeling across 500+ cities, 
              and production Computer Vision pipelines.
            </p>

            {/* Quick CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button asChild size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-slate-950 font-bold shadow-lg shadow-emerald-500/20 text-sm">
                <Link href="#projects">
                  Explore Featured Work
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-200 hover:text-white text-sm backdrop-blur-md">
                <Link href="#experience">
                  View Experience
                </Link>
              </Button>
            </div>

            {/* Socials & Location */}
            <div className="flex items-center gap-6 pt-3 text-xs text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-1.5 text-slate-400">
                <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                <span>Jakarta / Tangerang, Indonesia</span>
              </div>
              <div className="flex items-center gap-3">
                <Link href="https://github.com/azzandwi1" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <Github className="h-4 w-4" />
                </Link>
                <Link href="https://www.linkedin.com/in/azzandr/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </Link>
                <Link href="mailto:azzandwiriski145@gmail.com" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  <Mail className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Card with Profile & Floating Badges */}
          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Outer Radiant Glow Ring */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-emerald-500/30 via-teal-500/20 to-cyan-500/30 blur-xl opacity-75 animate-pulse" />

              {/* Main Card Frame */}
              <div className="relative w-72 sm:w-80 rounded-2xl bg-slate-900/90 border border-slate-800 p-4 shadow-2xl backdrop-blur-xl">
                {/* Image Container */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-gradient-to-b from-slate-800 to-slate-950 border border-slate-800/80">
                  <Image
                    src="/images/profile.png"
                    alt="Azzan Dwi Riski"
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <p className="text-white font-bold text-sm">Azzan Dwi Riski, S.Kom.</p>
                    <p className="text-emerald-400 text-xs">QSE Coordinator & Data Analyst</p>
                  </div>
                </div>

                {/* Tech Pills underneath avatar */}
                <div className="mt-3.5 flex flex-wrap gap-1.5 justify-center">
                  {["Power BI", "Python", "SQL", "MobileNetV3", "DAX", "TFLite"].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/60 text-[11px] font-medium text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating Badge 1: Promotion / Current Role */}
              <motion.div
                className="absolute -top-4 -left-6 bg-slate-900/90 border border-emerald-500/40 rounded-xl px-3 py-2 shadow-xl backdrop-blur-md flex items-center gap-2"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Promotion</p>
                  <p className="text-xs font-bold text-white">QSE Coordinator</p>
                </div>
              </motion.div>

              {/* Floating Badge 2: Hackathon Award */}
              <motion.div
                className="absolute -bottom-4 -right-6 bg-slate-900/90 border border-amber-500/40 rounded-xl px-3 py-2 shadow-xl backdrop-blur-md flex items-center gap-2"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
              >
                <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
                  <Award className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">National Hackathon</p>
                  <p className="text-xs font-bold text-white">2nd Place: Komdigi x DQLab</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Highlight Stats Strip */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            {
              metric: "1+ Year",
              label: "Enterprise Operations",
              sub: "At PT Satria Antaran Prima Tbk",
            },
            {
              metric: "500+ Cities",
              label: "Compensation Modeling",
              sub: "UMK 2026, Fuel & LDI Factors",
            },
            {
              metric: "3.87 / 4.00",
              label: "CS Honors Graduate",
              sub: "Universitas Mercu Buana",
            },
            {
              metric: "2nd Place 🥈",
              label: "National Data Hackathon",
              sub: "Kemenkomdigi RI x DQLab",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/30 transition-all duration-300 backdrop-blur-md group"
            >
              <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 group-hover:scale-105 transition-transform origin-left">
                {item.metric}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-white mt-1">{item.label}</p>
              <p className="text-[11px] text-slate-400 mt-0.5">{item.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
