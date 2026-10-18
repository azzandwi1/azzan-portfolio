"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Github, Linkedin, FileText, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Credentials", href: "#certifications" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 px-4">
      <div
        className={cn(
          "max-w-6xl mx-auto rounded-2xl transition-all duration-300 px-5 py-3 flex items-center justify-between",
          scrolled
            ? "bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 shadow-2xl shadow-emerald-950/20"
            : "bg-slate-900/40 backdrop-blur-md border border-slate-800/40"
        )}
      >
        {/* Brand */}
        <Link href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-slate-950 font-black text-sm shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            AD
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white tracking-tight flex items-center gap-1">
              Azzan Dwi Riski
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            </span>
            <span className="text-[10px] text-emerald-400 font-medium tracking-wider uppercase">
              QSE & Data Analyst
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs lg:text-sm font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-lg hover:bg-slate-800/60 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <div className="flex items-center space-x-1 border-r border-slate-800 pr-3">
            <Button variant="ghost" size="icon" asChild className="h-8 w-8 text-slate-400 hover:text-white hover:bg-slate-800/60">
              <Link href="https://github.com/azzandwi1" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="h-8 w-8 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60">
              <Link href="https://www.linkedin.com/in/azzandr/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>

          <Button asChild size="sm" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-slate-950 font-semibold shadow-md shadow-emerald-500/20 text-xs">
            <Link href="#contact">
              <Sparkles className="h-3.5 w-3.5 mr-1" />
              Let's Talk
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="h-9 w-9 text-slate-300 hover:text-white hover:bg-slate-800"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl p-4">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-white px-3 py-2 rounded-lg hover:bg-slate-800/80 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <div className="flex space-x-2">
                <Button variant="ghost" size="icon" asChild className="h-8 w-8 text-slate-400 hover:text-white">
                  <Link href="https://github.com/azzandwi1" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild className="h-8 w-8 text-slate-400 hover:text-cyan-400">
                  <Link href="https://www.linkedin.com/in/azzandr/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Button asChild size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold text-xs">
                <Link href="#contact" onClick={() => setIsOpen(false)}>
                  Contact Me
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
