"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send, Check, Copy, Linkedin, Github, Sparkles } from "lucide-react"
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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("azzandwiriski145@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false)
      setSentSuccess(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
      setTimeout(() => setSentSuccess(false), 4000)
    }, 1200)
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
            Open for high-impact Data Analyst, Operations Specialist, or Applied AI roles, as well as high-value consulting collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-5">
            {/* Quick Copy Email Card */}
            <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-6 shadow-xl backdrop-blur-xl">
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Direct Inbox</span>
              <p className="text-sm text-slate-300 mt-1 mb-4">
                Have a job opportunity or operational challenge? Feel free to reach out directly:
              </p>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-xs sm:text-sm font-mono text-slate-200 select-all truncate mr-2">
                  azzandwiriski145@gmail.com
                </span>
                <Button
                  onClick={handleCopyEmail}
                  size="sm"
                  variant="ghost"
                  className="h-8 px-2.5 text-xs text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 mr-1" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 mr-1" /> Copy
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Channels & Location Grid */}
            <div className="space-y-3">
              <Link
                href="https://www.linkedin.com/in/azzandr/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">LinkedIn Profile</p>
                    <p className="text-xs text-slate-400">linkedin.com/in/azzandr</p>
                  </div>
                </div>
                <span className="text-xs text-slate-500 group-hover:text-cyan-400 font-medium">Connect &rarr;</span>
              </Link>

              <Link
                href="https://github.com/azzandwi1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center">
                    <Github className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">GitHub Repository</p>
                    <p className="text-xs text-slate-400">github.com/azzandwi1</p>
                  </div>
                </div>
                <span className="text-xs text-slate-500 group-hover:text-slate-300 font-medium">Explore &rarr;</span>
              </Link>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/50 border border-slate-800/60 text-slate-400 text-xs">
                <MapPin className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>Based in Tangerang / Jakarta, Indonesia (Open to On-site, Hybrid, & Remote)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Message Form */}
          <div className="lg:col-span-7">
            <Card className="rounded-2xl bg-slate-900/80 border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-white mb-2">Send a Direct Message</h3>
                <p className="text-xs text-slate-400 mb-6">
                  Leave your details and I'll respond within 24 business hours.
                </p>

                {sentSuccess ? (
                  <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                    <Check className="h-8 w-8 text-emerald-400 mx-auto" />
                    <h4 className="text-sm font-bold text-white">Message Dispatched!</h4>
                    <p className="text-xs text-slate-300">Thank you for getting in touch. I will reply to your email shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-300">Your Name</label>
                        <Input
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Budi Santoso"
                          className="bg-slate-950/80 border-slate-800 text-white text-xs h-10 rounded-xl focus:border-emerald-500"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-300">Your Email</label>
                        <Input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="budi@company.com"
                          className="bg-slate-950/80 border-slate-800 text-white text-xs h-10 rounded-xl focus:border-emerald-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Subject</label>
                      <Input
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Job Opportunity: Senior Operations Analyst"
                        className="bg-slate-950/80 border-slate-800 text-white text-xs h-10 rounded-xl focus:border-emerald-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Message</label>
                      <Textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your organization or project..."
                        className="bg-slate-950/80 border-slate-800 text-white text-xs rounded-xl focus:border-emerald-500 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-slate-950 font-bold text-xs h-11 rounded-xl shadow-lg shadow-emerald-500/20"
                    >
                      {isSubmitting ? (
                        <span>Sending message...</span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5">
                          <Send className="h-3.5 w-3.5" />
                          Send Message
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
