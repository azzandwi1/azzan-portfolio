"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin, TrendingUp, CheckCircle, ArrowRight, Building2, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const experiences = [
    {
      company: "PT Satria Antaran Prima Tbk. (\"SAP Express\")",
      companyType: "Public Logistics & Express Delivery Enterprise",
      period: "Nov 2025 – Present · 1 Year",
      location: "Jakarta, Indonesia · On-site",
      isCurrent: true,
      roles: [
        {
          title: "QSE Coordinator & Data Analyst",
          period: "May 2026 – Present · 6 mos",
          isPromotion: true,
          description: [
            "Coordinated and monitored national operational quality and performance standards across hundreds of Hubs/Sub-Hubs and thousands of couriers across Indonesia.",
            "Architected nationwide courier compensation and incentive models aligned with UMK 2026 across 500+ cities/regencies, integrating fuel allowances (BBM), volume tiers (Kg Delivered), and Logistic Difficulty Index (LDI) to ensure operational financial sustainability.",
            "Engineered an automated Computer Vision model (MobileNetV3, TensorFlow, TFLite) for mobile Proof of Delivery (POD) photo verification to filter invalid/fraudulent entries in real-time.",
            "Formulated QSE operational policies and audit guidelines (Internal Memo) for POD Delivered/Undelivered compliance between branch leaders and central operations.",
          ],
          tags: ["Operations Analytics", "Power BI", "Incentive Modeling", "MobileNetV3", "Google Apps Script", "QSE Leadership"],
        },
        {
          title: "QSE Data Analyst",
          period: "Nov 2025 – May 2026 · 7 mos",
          isPromotion: false,
          description: [
            "Built executive KPI tracking dashboards (NOS GM/RM Visibility, SULTIM) to monitor national SLA, On-Time Performance (OTP), and failure rate metrics for C-level and regional executives.",
            "Automated multi-million row operational data transformation pipelines using Power Query (M Code), DAX Studio, and Excel Data Models, slashing weekly reporting turnaround by over 50%.",
            "Executed deep-dive root-cause analyses on thousands of customer complaint tickets (damage, lost, delayed delivery) for VIP Business Solution clients.",
          ],
          tags: ["Power Query", "DAX Studio", "SQL", "KPI Dashboards", "SLA & OTP Monitoring", "Root Cause Analysis"],
        },
      ],
    },
    {
      company: "Home Credit Indonesia x Rakamin Academy",
      companyType: "Consumer Finance & FinTech",
      period: "Oct 2025 – Nov 2025 · 2 mos",
      location: "Jakarta, Indonesia · Hybrid",
      isCurrent: false,
      roles: [
        {
          title: "Project-Based Virtual Intern: Data Scientist",
          period: "Oct 2025 – Nov 2025",
          isPromotion: false,
          description: [
            "Executed end-to-end data science workflows on financial transaction datasets, including data extraction (SQL), EDA, feature engineering, and predictive modeling for customer risk/churn.",
            "Constructed analytics reports and interactive dashboards demonstrating customer segmentation and credit risk behavior to support business stakeholders.",
          ],
          tags: ["Python", "SQL", "Predictive Modeling", "Risk Analytics", "Big Data Concepts"],
        },
      ],
    },
    {
      company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
      companyType: "Tech Consortium Internship",
      period: "Feb 2024 – Jun 2024 · 5 mos",
      location: "Remote",
      isCurrent: false,
      roles: [
        {
          title: "Machine Learning Cohort (Internship)",
          period: "Feb 2024 – Jun 2024",
          isPromotion: false,
          description: [
            "Completed rigorous training in advanced machine learning, deep learning, computer vision, and NLP curated by Google and industry mentors.",
            "Developed the DermoAlly Android app's CNN classification model with TensorFlow, handling end-to-end data preprocessing, augmentation, hyperparameter tuning, and TFLite mobile deployment.",
          ],
          tags: ["TensorFlow", "Deep Learning", "CNN", "Python", "Google Cloud Platform", "TFLite"],
        },
      ],
    },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-900/30">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-emerald-400 font-medium">
            <Briefcase className="h-3.5 w-3.5" />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            From machine learning foundations to leading operational intelligence at a nationwide logistics scale.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-10">
          {experiences.map((exp, expIdx) => (
            <motion.div
              key={expIdx}
              className="relative rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-xl hover:border-slate-700 transition-all duration-300"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: expIdx * 0.1 }}
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800/80 gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mt-0.5">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      {exp.company}
                      {exp.isCurrent && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                          Current
                        </span>
                      )}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">{exp.companyType}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end text-xs text-slate-400">
                  <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-emerald-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1 mt-1 text-slate-500">
                    <MapPin className="h-3 w-3" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Roles Under Company */}
              <div className="mt-6 space-y-8">
                {exp.roles.map((role, roleIdx) => (
                  <div key={roleIdx} className="relative pl-6 border-l-2 border-emerald-500/40 space-y-3">
                    {/* Bullet marker */}
                    <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-emerald-400 ring-4 ring-slate-900" />

                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <h4 className="text-base sm:text-lg font-bold text-white">
                          {role.title}
                        </h4>
                        {role.isPromotion && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-semibold">
                            <TrendingUp className="h-3 w-3" />
                            Promoted
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-slate-400 font-medium bg-slate-800/60 px-2.5 py-1 rounded-md">
                        {role.period}
                      </span>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2.5 pt-1">
                      {role.description.map((item, i) => (
                        <li key={i} className="text-xs sm:text-sm text-slate-300 leading-relaxed flex items-start gap-2.5">
                          <span className="text-emerald-400 mt-1 flex-shrink-0 text-base leading-none">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {role.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/60 text-[11px] font-medium text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
