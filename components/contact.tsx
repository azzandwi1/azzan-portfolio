"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send, Check, Copy, Linkedin, Github, ExternalLink, RefreshCw } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [sentSuccess, setSentSuccess] = useState(false)
  const [lastSubmission, setLastSubmission] = useState<{
    mailtoUrl: string
    waUrl: string
    subject: string
  } | null>(null)

  const handleCopyEmail = async () => {
    const emailToCopy = "azzandwiriski145@gmail.com"
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(emailToCopy)
      } else {
        const textArea = document.createElement("textarea")
        textArea.value = emailToCopy
        textArea.style.position = "fixed"
        textArea.style.opacity = "0"
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        document.execCommand("copy")
        document.body.removeChild(textArea)
      }
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch (err) {
      console.error("Failed to copy:", err)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const subject = formData.subject.trim() || "Career Opportunity / Analytics Collaboration"
    const bodyContent = 
`Hello Azzan Dwi Riski,

Sender Name: ${formData.name}
Sender Email: ${formData.email}

Message:
${formData.message}

---
Dispatched via Official Portfolio of Azzan Dwi Riski (azzan-portfolio-nu.vercel.app)`

    const mailtoUrl = `mailto:azzandwiriski145@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyContent)}`

    const waText = 
`Hello Azzan, I am ${formData.name} (${formData.email}).

Subject: ${subject}

Message:
${formData.message}`

    const waUrl = `https://wa.me/6285866073348?text=${encodeURIComponent(waText)}`

    setLastSubmission({
      mailtoUrl,
      waUrl,
      subject,
    })

    // Automatically trigger mailto link
    try {
      window.location.href = mailtoUrl
    } catch (err) {
      console.error("Mailto trigger error:", err)
    }

    setIsSubmitting(false)
    setSentSuccess(true)
  }

  const handleResetForm = () => {
    setSentSuccess(false)
    setFormData({ name: "", email: "", subject: "", message: "" })
    setLastSubmission(null)
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-900/30">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-emerald-400 font-medium">
            <Mail className="h-3.5 w-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Exceptional</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Open for high-impact roles in Data Analytics, Operations Strategy, and Applied AI, as well as enterprise consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-4">
            {/* Quick Email Card */}
            <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-6 shadow-xl backdrop-blur-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5" /> Direct Email
                </span>
                <span className="text-[10px] text-slate-500 font-medium">Click to dispatch</span>
              </div>
              <p className="text-xs text-slate-400 mb-4">
                Have a career opportunity, operational challenge, or collaboration proposal? Reach out directly:
              </p>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-500/40 transition-colors">
                <a
                  href="mailto:azzandwiriski145@gmail.com"
                  className="text-xs sm:text-sm font-mono text-slate-200 hover:text-emerald-400 transition-colors truncate mr-2 flex items-center gap-2 group"
                  title="Open in mail application"
                >
                  <Mail className="h-4 w-4 text-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="underline decoration-dotted underline-offset-4">azzandwiriski145@gmail.com</span>
                </a>
                <Button
                  onClick={handleCopyEmail}
                  size="sm"
                  variant="ghost"
                  className="h-8 px-2.5 text-xs text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 cursor-pointer flex-shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 mr-1 text-emerald-400" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 mr-1" /> Copy
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Direct WhatsApp Channel */}
            <a
              href="https://wa.me/6285866073348?text=Hello%20Azzan%2C%20I%20viewed%20your%20portfolio%20and%20would%20like%20to%20connect..."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">WhatsApp Chat</p>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-semibold">Fast Response</span>
                  </div>
                  <p className="text-xs text-slate-400">+62 858-6607-3348</p>
                </div>
              </div>
              <span className="text-xs text-slate-500 group-hover:text-emerald-400 font-medium flex items-center gap-1">
                Chat <ExternalLink className="h-3.5 w-3.5" />
              </span>
            </a>

            {/* LinkedIn Profile */}
            <Link
              href="https://www.linkedin.com/in/azzandr/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">LinkedIn Profile</p>
                  <p className="text-xs text-slate-400">linkedin.com/in/azzandr</p>
                </div>
              </div>
              <span className="text-xs text-slate-500 group-hover:text-cyan-400 font-medium flex items-center gap-1">
                Connect <ExternalLink className="h-3.5 w-3.5" />
              </span>
            </Link>

            {/* GitHub Repository */}
            <Link
              href="https://github.com/azzandwi1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">GitHub Repository</p>
                  <p className="text-xs text-slate-400">github.com/azzandwi1</p>
                </div>
              </div>
              <span className="text-xs text-slate-500 group-hover:text-slate-300 font-medium flex items-center gap-1">
                Explore <ExternalLink className="h-3.5 w-3.5" />
              </span>
            </Link>

            {/* Location */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/50 border border-slate-800/60 text-slate-400 text-xs">
              <MapPin className="h-4 w-4 text-emerald-400 flex-shrink-0" />
              <span>Location: Greater Jakarta (Tangerang & West Jakarta), Indonesia (Available for On-site, Hybrid, & Remote)</span>
            </div>
          </div>

          {/* Right Column: Message Form with Dual Dispatch */}
          <div className="lg:col-span-7">
            <Card className="rounded-2xl bg-slate-900/80 border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-white mb-2">Send a Direct Message</h3>
                <p className="text-xs text-slate-400 mb-6">
                  Leave your details below. You can dispatch your message immediately via Email or WhatsApp.
                </p>

                {sentSuccess && lastSubmission ? (
                  <div className="p-6 rounded-2xl bg-slate-950 border border-emerald-500/40 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                      <Check className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">Message Draft Prepared!</h4>
                      <p className="text-xs text-slate-300 mt-1 max-w-md mx-auto">
                        Your message has been formatted. If your email application did not launch automatically, choose a delivery channel below:
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                      <a
                        href={lastSubmission.mailtoUrl}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
                      >
                        <Mail className="h-4 w-4" /> Open in Email App / Gmail
                      </a>
                      <a
                        href={lastSubmission.waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-emerald-500/30 font-bold text-xs transition-all cursor-pointer"
                      >
                        <Phone className="h-4 w-4" /> Also Send via WhatsApp
                      </a>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={handleResetForm}
                        className="text-xs text-slate-400 hover:text-slate-200 inline-flex items-center gap-1.5 cursor-pointer underline"
                      >
                        <RefreshCw className="h-3 w-3" /> Compose Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-300">Your Name *</label>
                        <Input
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. John Doe / HR Partner"
                          className="bg-slate-950 border-slate-800 text-white text-xs h-10 rounded-xl focus:border-emerald-500"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-300">Your Email *</label>
                        <Input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="bg-slate-950 border-slate-800 text-white text-xs h-10 rounded-xl focus:border-emerald-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Subject / Topic *</label>
                      <Input
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Career Opportunity: Senior Operations Analyst"
                        className="bg-slate-950 border-slate-800 text-white text-xs h-10 rounded-xl focus:border-emerald-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Your Message *</label>
                      <Textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your organization, project scope, or opportunity for Azzan..."
                        className="bg-slate-950 border-slate-800 text-white text-xs rounded-xl focus:border-emerald-500 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-xs h-11 rounded-xl shadow-lg shadow-emerald-500/20 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Preparing draft...</span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5">
                          <Send className="h-3.5 w-3.5" />
                          Send Message Now (Email & WhatsApp)
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
