"use client"

import { motion } from "framer-motion"
import { Award, Trophy, CheckCircle2, ExternalLink, ShieldCheck, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Certifications() {
  const honors = [
    {
      title: "2nd Place Winner – National Hackathon Komdigi x DQLab 2025",
      issuer: "Ministry of Communication and Digital (Komdigi) & DQLab",
      date: "Nov 2025",
      description:
        "Secured 2nd place nationwide in a competitive data innovation hackathon, building an end-to-end predictive analytics and deep learning solution for operational logistics.",
      badge: "National 2nd Winner",
      accent: "from-amber-500/20 via-orange-500/10 to-transparent border-amber-500/30 text-amber-400",
    },
    {
      title: "OSC Medcom.id Full Undergraduate Scholarship Awardee",
      issuer: "Surya Edukasi Bangsa Foundation & Medcom.id",
      date: "Jan 2021",
      description:
        "Selected from 50,000+ national applicants to receive a 100% full-ride undergraduate scholarship for Computer Science at Universitas Mercu Buana.",
      badge: "Top 0.1% National Scholar",
      accent: "from-emerald-500/20 via-teal-500/10 to-transparent border-emerald-500/30 text-emerald-400",
    },
  ]

  const certifications = [
    {
      title: "Mastery Deep Learning (Fresh Graduate Academy)",
      issuer: "Digital Talent Scholarship — Komdigi RI",
      id: "19511141840-124",
      year: "Oct 2025",
    },
    {
      title: "Intermediate & Fundamental Deep Learning",
      issuer: "Digital Talent Scholarship — Komdigi RI",
      id: "19511112840-32",
      year: "Sep 2025",
    },
    {
      title: "DeepLearning.AI TensorFlow Developer Specialization",
      issuer: "DeepLearning.AI",
      id: "P68H9VJTV3JR",
      year: "May 2024",
    },
    {
      title: "TensorFlow: Advanced Techniques Specialization",
      issuer: "DeepLearning.AI",
      id: "DG9X3S9BMZPN",
      year: "May 2024",
    },
    {
      title: "TensorFlow: Data and Deployment Specialization",
      issuer: "DeepLearning.AI",
      id: "T75KFMTHCZRP",
      year: "May 2024",
    },
    {
      title: "Machine Learning Specialization",
      issuer: "DeepLearning.AI, Coursera, Stanford CPD",
      id: "WEHPZWGAULLC",
      year: "Apr 2024",
    },
    {
      title: "Mathematics for Machine Learning and Data Science",
      issuer: "DeepLearning.AI",
      id: "94FAQ3YLLK4Z",
      year: "Mar 2024",
    },
    {
      title: "Data Analysis with Python Certification",
      issuer: "Dicoding Indonesia",
      id: "1RXY1RD41PVM",
      year: "Mar 2024",
    },
    {
      title: "Database Programming with SQL & Java Fundamentals",
      issuer: "Oracle Academy",
      id: "Oracle Certified",
      year: "2023",
    },
    {
      title: "Data Analytics Specialization Suite",
      issuer: "Google Career Certificates",
      id: "Google Verified",
      year: "2024",
    },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
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
            <Trophy className="h-3.5 w-3.5" />
            <span>Honors & Validation</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Awards, Honors & <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Recognized in national-level data hackathons and backed by 21+ industry-standard verified certifications.
          </p>
        </motion.div>

        {/* 2 Major Honors Hero Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {honors.map((honor, idx) => (
            <motion.div
              key={honor.title}
              className={`rounded-2xl bg-gradient-to-br ${honor.accent} bg-slate-900/80 border p-7 backdrop-blur-xl shadow-xl hover:scale-[1.01] transition-all duration-300 relative group`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-white flex items-center gap-1.5 shadow-sm">
                  <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                  {honor.badge}
                </span>
                <span className="text-xs text-slate-400 font-medium">{honor.date}</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                {honor.title}
              </h3>
              <p className="text-xs font-semibold text-emerald-400 mb-3">{honor.issuer}</p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {honor.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="rounded-xl bg-slate-900/70 border border-slate-800/80 p-5 hover:border-emerald-500/30 transition-all duration-300 backdrop-blur-md group hover:bg-slate-900"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.35, delay: (index % 6) * 0.05 }}
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-snug group-hover:text-emerald-300 transition-colors line-clamp-2">
                    {cert.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-1">{cert.issuer}</p>
                  <div className="flex items-center justify-between text-[10px] text-slate-500 mt-2.5 pt-2 border-t border-slate-800/60 font-mono">
                    <span>ID: {cert.id}</span>
                    <span>{cert.year}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
