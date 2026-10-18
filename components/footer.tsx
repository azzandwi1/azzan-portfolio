import Link from "next/link"
import { Github, Linkedin, Mail, Heart, Sparkles } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-white py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-1 text-center md:text-left">
            <Link href="#home" className="text-xl font-extrabold tracking-tight">
              Azzan Dwi Riski<span className="text-emerald-400">.</span>
            </Link>
            <p className="text-xs text-slate-400 max-w-md">
              QSE Coordinator & Data Analyst at PT Satria Antaran Prima Tbk ("SAP Express"). Specializing in operations analytics, machine learning, and BI architecture.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <Link
              href="https://github.com/azzandwi1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/azzandr/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:azzandwiriski145@gmail.com"
              className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-800/80 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>&copy; {currentYear} Azzan Dwi Riski, S.Kom. All rights reserved.</p>

          <ul className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <li>
              <Link href="#about" className="hover:text-emerald-400 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#experience" className="hover:text-emerald-400 transition-colors">
                Experience
              </Link>
            </li>
            <li>
              <Link href="#projects" className="hover:text-emerald-400 transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#skills" className="hover:text-emerald-400 transition-colors">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-emerald-400 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
