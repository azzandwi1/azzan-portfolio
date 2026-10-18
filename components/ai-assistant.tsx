"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bot, Sparkles, X, Send, RefreshCw, User, MessageSquareCode, ExternalLink, CornerDownLeft } from "lucide-react"

interface Message {
  id: string
  sender: "bot" | "user"
  text: string
  timestamp: string
  links?: { label: string; href: string }[]
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "welcome-1",
    sender: "bot",
    text: "Halo! 👋 Saya **Azzan AI Assistant**.\n\nSaya siap membantu Anda mengetahui rekam jejak profesional Azzan Dwi Riski—mulai dari peran sebagai **QSE Coordinator & Data Analyst** di **SAP Express**, riset **Computer Vision & AI**, dashboard **Power BI**, hingga prestasi dan kontaknya.",
    timestamp: "Sekarang",
  },
]

const QUICK_PROMPTS = [
  "💼 Ceritakan peran Azzan di SAP Express",
  "🤖 Apa saja proyek AI & Computer Vision Azzan?",
  "📊 Keahlian utama data & Power BI?",
  "🏆 Prestasi & Beasiswa OSC Medcom",
  "📞 Bagaimana cara menghubungi Azzan?",
]

function getBotReply(input: string): { text: string; links?: { label: string; href: string }[] } {
  const query = input.toLowerCase()

  // 1. SAP Express / Work experience / Promosi
  if (
    query.includes("sap express") ||
    query.includes("sap") ||
    query.includes("pengalaman") ||
    query.includes("kerja") ||
    query.includes("coordinator") ||
    query.includes("qse") ||
    query.includes("peran") ||
    query.includes("jabatan")
  ) {
    return {
      text: "💼 **Pengalaman Utama di PT Satria Antaran Prima Tbk (SAP Express):**\n\n" +
        "Azzan menjabat sebagai **QSE Coordinator & Data Analyst** (dipromosikan dari Data Analyst pada Agustus 2024):\n\n" +
        "• **Simulasi UMK 2026 Nasional:** Memodelkan kompensasi kurir di 500+ kota/kabupaten se-Indonesia untuk menyambut regulasi upah baru secara presisi dan *cost-effective*.\n" +
        "• **Otomatisasi Computer Vision POD:** Mengembangkan model MobileNetV3 untuk memvalidasi foto serah terima paket (*Proof of Delivery*) otomatis, memangkas review manual ~65%.\n" +
        "• **Dashboard Eksekutif NOS:** Mengembangkan dashboard Power BI yang memantau SLA dan performa 200+ cabang untuk jajaran Direksi dan General Manager.\n" +
        "• **Otomatisasi ETL:** Memangkas waktu rekonsiliasi data operasional dari 4 jam menjadi 15 menit menggunakan SQL & Python.",
      links: [
        { label: "Lihat Timeline Pengalaman", href: "#experience" },
        { label: "Baca Rekomendasi Atasan", href: "#recommendation" },
      ],
    }
  }

  // 2. Proyek / Computer Vision / AI / ML
  if (
    query.includes("proyek") ||
    query.includes("project") ||
    query.includes("ai") ||
    query.includes("computer vision") ||
    query.includes("machine learning") ||
    query.includes("model") ||
    query.includes("mobilenet") ||
    query.includes("vision")
  ) {
    return {
      text: "🤖 **Portofolio Proyek Unggulan Azzan:**\n\n" +
        "1. **Logistics POD Image Verification (AI/CV):** Model MobileNetV3 edge-ready untuk memvalidasi foto bukti pengiriman paket logistik dengan akurasi 92.4%.\n" +
        "2. **Superstore Sales Analytics (Power BI):** Dashboard interaktif end-to-end menganalisis profitabilitas, pengembalian barang, dan peramalan tren penjualan retail.\n" +
        "3. **Active Recall Learning AI (LLM / RAG):** Platform edukasi berbasis Retrieval-Augmented Generation untuk latihan soal adaptif dan retensi memori aktif.\n" +
        "4. **Credit Risk Scoring (Home Credit):** Model prediksi risiko kredit (LightGBM/XGBoost, AUC 0.82) pada 300K+ data nasabah dengan SHAP & SMOTE.",
      links: [
        { label: "Buka Galeri Proyek", href: "#projects" },
        { label: "Lihat GitHub Azzan", href: "https://github.com/azzandwi1" },
      ],
    }
  }

  // 3. Keahlian / Tech stack / Tools
  if (
    query.includes("skill") ||
    query.includes("keahlian") ||
    query.includes("kemampuan") ||
    query.includes("tools") ||
    query.includes("stack") ||
    query.includes("python") ||
    query.includes("sql") ||
    query.includes("power bi")
  ) {
    return {
      text: "📊 **Keahlian Teknis Azzan Dwi Riski:**\n\n" +
        "• **Core Languages & Analytics:** Python (Pandas, NumPy, Scikit-learn, OpenCV), SQL (PostgreSQL, MySQL), DAX, R, Excel Lanjut.\n" +
        "• **Business Intelligence:** Power BI (Data Modeling, DAX, Power Query), Tableau, Looker Studio, KPI Executive Reporting.\n" +
        "• **Applied AI & ML:** Computer Vision (MobileNet, YOLO, CNN), Deep Learning (PyTorch, TensorFlow), NLP/LLM RAG.\n" +
        "• **Data Engineering & Cloud:** Automated ETL Pipelines, Google Cloud Platform (GCP Cloud Run), Docker, Git, RESTful APIs.",
      links: [{ label: "Jelajahi Pilar Keterampilan", href: "#skills" }],
    }
  }

  // 4. Prestasi / Beasiswa / Pendidikan
  if (
    query.includes("prestasi") ||
    query.includes("beasiswa") ||
    query.includes("osc") ||
    query.includes("hackathon") ||
    query.includes("pendidikan") ||
    query.includes("kuliah") ||
    query.includes("ipk") ||
    query.includes("mercu buana") ||
    query.includes("juara")
  ) {
    return {
      text: "🏆 **Pendidikan & Prestasi Akademik/Kompetisi:**\n\n" +
        "• **S1 Teknik Informatika — Universitas Mercu Buana:** IPK **3.87 / 4.00** (*Magna Cum Laude*). Riset skripsi pada Computer Vision & Deep Learning.\n" +
        "• **Penerima Beasiswa Penuh OSC Medcom:** Berhasil lolos beasiswa penuh 100% dari 50.000+ pendaftar nasional.\n" +
        "• **Juara 2 Hackathon Nasional Komdigi x DQLab 2024:** Solusi inovasi *AI for Logistics* tingkat nasional.\n" +
        "• **Bangkit Academy Graduate with Distinction:** Top 1.5% dari 67.000+ pendaftar Google, GoTo, & Traveloka.",
      links: [
        { label: "Lihat Sertifikat & Penghargaan", href: "#certifications" },
        { label: "Tentang Azzan", href: "#about" },
      ],
    }
  }

  // 5. Kontak / Hiring / Rekrutmen / WhatsApp / Email
  if (
    query.includes("kontak") ||
    query.includes("contact") ||
    query.includes("email") ||
    query.includes("wa") ||
    query.includes("whatsapp") ||
    query.includes("hire") ||
    query.includes("rekrut") ||
    query.includes("nomor") ||
    query.includes("cv") ||
    query.includes("resume")
  ) {
    return {
      text: "📞 **Hubungi Azzan Dwi Riski:**\n\n" +
        "Azzan saat ini terbuka untuk peluang kolaborasi dan karir strategis di bidang **Data Analytics, Business Intelligence, dan Applied AI**:\n\n" +
        "• **Email:** azzandwiriski145@gmail.com\n" +
        "• **WhatsApp:** +62 858-6607-3348\n" +
        "• **LinkedIn:** linkedin.com/in/azzandr\n" +
        "• **Lokasi:** Jakarta Barat & Tangerang, Indonesia (Tersedia On-site / Hybrid / Remote).",
      links: [
        { label: "Kirim Pesan Langsung", href: "#contact" },
        { label: "Buka Profil LinkedIn", href: "https://www.linkedin.com/in/azzandr/" },
      ],
    }
  }

  // 6. Default / Fallback response
  return {
    text: "Terima kasih atas pertanyaannya! 😊\n\n" +
      "Saya memiliki informasi lengkap mengenai:\n" +
      "1. Pengalaman kerja Azzan di **SAP Express** (pemodelan upah 500+ kota, CV POD, dashboard 200+ cabang).\n" +
      "2. Proyek teknis (**Computer Vision**, **Power BI Superstore**, **LLM RAG**).\n" +
      "3. Latar belakang akademik (**IPK 3.87**, Beasiswa **OSC Medcom**, Juara 2 **Hackathon Komdigi**).\n" +
      "4. Kontak resmi dan opsi rekrutmen.\n\n" +
      "Silakan pilih topik di atas atau tanyakan hal spesifik lainnya!",
    links: [
      { label: "Tentang Azzan", href: "#about" },
      { label: "Hubungi Azzan", href: "#contact" },
    ],
  }
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [hasUnread, setHasUnread] = useState(true)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      setHasUnread(false)
      setTimeout(() => {
        inputRef.current?.focus()
      }, 300)
    }
  }, [isOpen])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim()
    if (!text) return

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text,
      timestamp: "Baru saja",
    }

    setMessages((prev) => [...prev, userMsg])
    setInputValue("")
    setIsTyping(true)

    // Simulate smart thinking delay (450ms)
    setTimeout(() => {
      const reply = getBotReply(text)
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: reply.text,
        timestamp: "Baru saja",
        links: reply.links,
      }
      setMessages((prev) => [...prev, botMsg])
      setIsTyping(false)
    }, 450)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleReset = () => {
    setMessages(INITIAL_MESSAGES)
  }

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          {/* Subtle Ambient Pulse Aura */}
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse" />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-slate-900 border border-teal-500/40 text-slate-100 shadow-xl shadow-teal-950/40 hover:border-teal-400 transition-colors"
            aria-label="Toggle AI Assistant"
          >
            <div className="relative">
              <Bot className="w-5 h-5 text-teal-400" />
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
            </div>
            <span className="font-medium text-sm hidden sm:inline tracking-tight">
              Azzan AI Assistant
            </span>

            {hasUnread && !isOpen && (
              <span className="ml-1 px-1.5 py-0.5 text-[10px] font-bold bg-teal-500 text-slate-950 rounded-full animate-bounce">
                Ask Me
              </span>
            )}
          </button>
        </motion.div>
      </div>

      {/* Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-22 right-4 sm:right-6 z-50 w-[92vw] sm:w-[420px] max-h-[80vh] h-[580px] flex flex-col rounded-2xl bg-[#090D16]/95 backdrop-blur-2xl border border-slate-700/80 shadow-2xl shadow-black/80 overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 py-3.5 border-b border-slate-800/80 bg-slate-900/60">
              <div className="flex items-center gap-3">
                <div className="relative p-2 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400">
                  <Bot className="w-5 h-5" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-slate-900" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-sm text-slate-100">Azzan AI Assistant</h3>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-teal-500/10 text-teal-400 border border-teal-500/20">
                      GPT-Ready
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">Asisten Portofolio & Karir Azzan</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleReset}
                  title="Mulai Ulang Percakapan"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition"
                  aria-label="Reset chat"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Tutup"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition"
                  aria-label="Close assistant"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm scroll-smooth">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.sender === "bot" && (
                    <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mt-0.5">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-teal-600 text-slate-50 rounded-br-none shadow-md shadow-teal-950/40"
                        : "bg-slate-900/90 border border-slate-800 text-slate-200 rounded-bl-none shadow-sm"
                    }`}
                  >
                    <div className="whitespace-pre-line text-[13px]">{msg.text}</div>

                    {/* Interactive Action Links */}
                    {msg.links && msg.links.length > 0 && (
                      <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex flex-wrap gap-2">
                        {msg.links.map((link, i) => (
                          <a
                            key={i}
                            href={link.href}
                            onClick={() => {
                              if (link.href.startsWith("#")) {
                                setIsOpen(false)
                              }
                            }}
                            target={link.href.startsWith("http") ? "_blank" : undefined}
                            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 border border-teal-500/30 transition-colors"
                          >
                            <span>{link.label}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ))}
                      </div>
                    )}

                    <div
                      className={`text-[10px] mt-1.5 text-right ${
                        msg.sender === "user" ? "text-teal-200/70" : "text-slate-500"
                      }`}
                    >
                      {msg.timestamp}
                    </div>
                  </div>

                  {msg.sender === "user" && (
                    <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 mt-0.5">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-slate-900/90 border border-slate-800 rounded-2xl rounded-bl-none px-4 py-2.5 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-teal-400 animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-2 h-2 rounded-full bg-teal-400 animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-2 h-2 rounded-full bg-teal-400 animate-bounce" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Starter Chips */}
            {messages.length <= 2 && (
              <div className="px-4 py-2 border-t border-slate-800/60 bg-slate-900/30">
                <p className="text-[11px] text-slate-400 mb-2 font-medium">Topik Cepat Populer:</p>
                <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
                  {QUICK_PROMPTS.map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(prompt)}
                      className="text-left text-xs px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-teal-500/20 text-slate-300 hover:text-teal-200 border border-slate-700/60 hover:border-teal-500/30 transition-colors"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Bar */}
            <div className="p-3 border-t border-slate-800 bg-slate-900/80">
              <div className="relative flex items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Tanyakan apapun tentang karir & karya Azzan..."
                  className="w-full pl-3.5 pr-10 py-2.5 bg-slate-950/80 border border-slate-700/80 rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!inputValue.trim()}
                  className="absolute right-1.5 p-1.5 rounded-lg bg-teal-500 text-slate-950 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-teal-400 transition"
                  aria-label="Kirim pertanyaan"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="flex items-center justify-between mt-2 px-1 text-[10px] text-slate-500">
                <span>Tekan Enter ↵ untuk mengirim</span>
                <span className="flex items-center gap-1 text-teal-400">
                  <Sparkles className="w-2.5 h-2.5" /> Smart Knowledge Engine
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
