"use client"

import { motion } from "framer-motion"
import { Truck, Brain, BarChart3, GraduationCap, ArrowUpRight, ShieldCheck, Cpu, Database } from "lucide-react"

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-emerald-400 font-medium">
            <Cpu className="h-3.5 w-3.5" />
            <span>Core Pillars</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Bridging Operational Reality with{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Advanced Analytics
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            A blend of enterprise operational analytics, computer vision engineering, and business intelligence.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Card 1: Enterprise Logistics (Col Span 2) */}
          <motion.div
            variants={fadeIn}
            className="md:col-span-2 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 p-7 transition-all duration-300 backdrop-blur-xl group hover:shadow-2xl hover:shadow-emerald-950/20"
          >
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform">
                <Truck className="h-6 w-6" />
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Enterprise Logistics
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
              Nationwide Operations & QSE Leadership
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Leading Quality & Service Excellence (QSE) analytics at <strong className="text-white">PT Satria Antaran Prima Tbk ("SAP Express")</strong>. 
              Architecting executive KPI tracking (NOS GM/RM Visibility, SULTIM), monitoring SLA & On-Time Performance (OTP) 
              across hundreds of hubs, and designing nationwide courier compensation models incorporating UMK 2026 across 500+ cities/regencies.
            </p>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
              {["SLA & OTP Audits", "Courier Wage Modeling (UMK 2026)", "NOS GM/RM Visibility", "LDI Factor Analysis", "Hub & Sub-Hub Compliance"].map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-lg bg-slate-800/60 text-slate-300 border border-slate-700/50">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Computer Vision & Edge AI (Col Span 1) */}
          <motion.div
            variants={fadeIn}
            className="md:col-span-1 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 p-7 transition-all duration-300 backdrop-blur-xl group hover:shadow-2xl hover:shadow-cyan-950/20"
          >
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition-transform">
                <Brain className="h-6 w-6" />
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                Edge AI
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
              Applied Computer Vision
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Trained and optimized lightweight MobileNetV3 architectures deployed via TensorFlow Lite directly on courier mobile applications 
              to automate Proof of Delivery (POD) validation and prevent package disputes.
            </p>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
              {["MobileNetV3", "TensorFlow Lite", "Image Classification", "Edge Inference"].map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-lg bg-slate-800/60 text-slate-300 border border-slate-700/50">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 3: Modern BI & Pipelines (Col Span 1) */}
          <motion.div
            variants={fadeIn}
            className="md:col-span-1 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-teal-500/40 p-7 transition-all duration-300 backdrop-blur-xl group hover:shadow-2xl hover:shadow-teal-950/20"
          >
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-5 group-hover:scale-110 transition-transform">
                <BarChart3 className="h-6 w-6" />
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-teal-500/10 text-teal-400 border border-teal-500/20">
                ETL & BI
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
              High-Scale Data Pipelines
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Handling millions of rows with Power Query M-Code, DAX Studio, Python, and Google Apps Script. 
              Streamlining data consolidation across enterprise core systems (CoreSys) into automated executive dashboards.
            </p>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
              {["Power BI / DAX", "Power Query (M)", "SQL / BigQuery", "Apps Script"].map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-lg bg-slate-800/60 text-slate-300 border border-slate-700/50">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 4: Academic Honors & Leadership (Col Span 2) */}
          <motion.div
            variants={fadeIn}
            className="md:col-span-2 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-indigo-500/40 p-7 transition-all duration-300 backdrop-blur-xl group hover:shadow-2xl hover:shadow-indigo-950/20"
          >
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5 group-hover:scale-110 transition-transform">
                <GraduationCap className="h-6 w-6" />
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                Honors & Education
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
              Informatics Graduate with Honors (IPK 3.87/4.00) & National Scholar
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Graduated with distinction from <strong className="text-white">Universitas Mercu Buana</strong> with specialized research in 
              Multimodal Deep Learning (Late-Fusion of Text & Vision). Awarded the <strong className="text-white">OSC Medcom.id Full Scholarship</strong> (selected out of 50,000+ national candidates) 
              and won <strong className="text-white">Juara 2 Nasional</strong> at the Hackathon Komdigi x DQLab 2025.
            </p>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
              {["IPK 3.87/4.00", "OSC Medcom Awardee (1 of 50K+)", "Juara 2 Hackathon Komdigi", "Bangkit Academy Graduate"].map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-lg bg-slate-800/60 text-slate-300 border border-slate-700/50">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
