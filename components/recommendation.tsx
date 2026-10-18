"use client"

import { motion } from "framer-motion"
import { Quote, Linkedin, CheckCircle2, Star, Sparkles } from "lucide-react"
import Link from "next/link"

export default function Recommendation() {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          className="relative rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-emerald-500/30 p-8 sm:p-10 shadow-2xl backdrop-blur-xl group hover:border-emerald-500/50 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Subtle Glow behind recommendation */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

          {/* Top Row: Quote Icon & Verification Badge */}
          <div className="flex items-center justify-between mb-6">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Quote className="h-6 w-6" />
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs text-slate-300">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              <span>Verified LinkedIn Recommendation</span>
            </div>
          </div>

          {/* Quote Content */}
          <blockquote className="text-lg sm:text-xl font-medium text-slate-100 leading-relaxed italic mb-8">
            &ldquo;Azzan is a team member who works efficiently, is reliable, and takes full responsibility for his work. Keep shining! ✨&rdquo;
          </blockquote>

          {/* Recommender Bio */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-slate-800/80 gap-4">
            <div>
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                Galih Caesario
                <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                  Direct Supervisor
                </span>
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Head of Quality Service Excellence (QSE) at PT Satria Antaran Prima Tbk
              </p>
            </div>

            <Link
              href="https://www.linkedin.com/in/azzandr/details/recommendations/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <Linkedin className="h-3.5 w-3.5" />
              <span>View on LinkedIn</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
