"use client"

import { motion } from "framer-motion"
import { BarChart3, Brain, Database, Truck, Code2, Cpu, Wrench } from "lucide-react"

export default function Skills() {
  const skillPillars = [
    {
      title: "Business Intelligence & Analytics",
      icon: BarChart3,
      accent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      description: "Enterprise dashboard engineering, star-schema data modeling, and executive KPI visibility.",
      skills: [
        "Power BI",
        "DAX Studio",
        "Power Query (M Code)",
        "Advanced Excel (Data Model)",
        "Looker Studio",
        "Exploratory Data Analysis (EDA)",
        "KPI Dashboard Architecture",
        "Data Storytelling",
      ],
    },
    {
      title: "Machine Learning & Edge AI",
      icon: Brain,
      accent: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
      description: "Applied deep learning, computer vision, and lightweight edge inference for real-world automation.",
      skills: [
        "Computer Vision",
        "MobileNetV3",
        "TensorFlow / Keras",
        "TensorFlow Lite (TFLite)",
        "PyTorch",
        "Scikit-Learn",
        "RAG (FAISS & Gemini API)",
        "Multimodal Late-Fusion",
      ],
    },
    {
      title: "Data Engineering & Scripting",
      icon: Database,
      accent: "text-teal-400 bg-teal-500/10 border-teal-500/20",
      description: "Building automated data processing workflows, ETL pipelines, and API integrations.",
      skills: [
        "Python (Pandas, NumPy)",
        "SQL (PostgreSQL, BigQuery)",
        "Google Apps Script",
        "ETL / Data Cleaning",
        "FastAPI / REST APIs",
        "Docker Containerization",
        "Web Scraping (Playwright)",
        "Git & GitHub Workflow",
      ],
    },
    {
      title: "Logistics & Operations Excellence",
      icon: Truck,
      accent: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
      description: "Domain expertise in last-mile courier logistics, operational quality governance, and compensation.",
      skills: [
        "Last-Mile Logistics Analytics",
        "NOS & SULTIM KPI Monitoring",
        "SLA & On-Time Performance (OTP)",
        "Courier Wage & Incentive Modeling",
        "UMK 2026 Regional Scaling",
        "Logistic Difficulty Index (LDI)",
        "POD Compliance Audits",
        "Root Cause Analysis (RCA)",
      ],
    },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-900/30">
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
            <Wrench className="h-3.5 w-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Specialized Skills & <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Structured into four distinct pillars: Analytics, Machine Learning, Data Engineering, and Logistics Domain Expertise.
          </p>
        </motion.div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillPillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                className="rounded-2xl bg-slate-900/80 border border-slate-800 p-7 backdrop-blur-xl shadow-xl hover:border-slate-700 hover:shadow-2xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border group-hover:scale-105 transition-transform ${pillar.accent}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                  {pillar.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 rounded-lg bg-slate-800/70 hover:bg-slate-800 text-slate-200 border border-slate-700/60 font-medium transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
