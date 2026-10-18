"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bot, Sparkles, X, Send, RefreshCw, User, ExternalLink } from "lucide-react"

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

function getBotReply(rawInput: string): { text: string; links?: { label: string; href: string }[] } {
  const query = rawInput.trim().toLowerCase()

  // Clean tokens (strip common punctuation, normalize whitespace)
  const cleanText = query.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, " ")
  const words = cleanText.split(/\s+/).filter(Boolean)

  const hasWord = (...targets: string[]) => {
    return targets.some((target) => {
      if (target.includes(" ")) {
        return cleanText.includes(target)
      }
      return words.includes(target)
    })
  }

  const matchPattern = (pattern: RegExp) => pattern.test(cleanText)

  // 1. CAPABILITIES & META QUESTIONS ("apakah kamu bisa menjawab pertanyaan lain?", "kamu bisa apa?", "siapa kamu?")
  if (
    hasWord(
      "pertanyaan lain",
      "pertanyaan lainnya",
      "tanya lain",
      "tanya lainnya",
      "bisa apa",
      "bisa jawab apa",
      "apa saja",
      "kamu bisa apa",
      "siapa kamu",
      "siapakah kamu",
      "kemampuan kamu",
      "fitur kamu",
      "apa fungsi kamu",
      "bisa bantu apa"
    ) ||
    matchPattern(/\b(bisa|dapat)\b.*\b(menjawab|jawab|bantu)\b.*\b(lain|lainnya|apa|semua)\b/) ||
    matchPattern(/\b(kamu|anda|bot)\b.*\b(bisa|dapat)\b.*\b(apa|ngapain)\b/)
  ) {
    return {
      text: "Tentu saja! Saya bisa menjawab berbagai pertanyaan tentang profil dan karya **Azzan Dwi Riski**. 😊\n\n" +
        "Berikut beberapa topik yang bisa Anda tanyakan:\n" +
        "1. 💼 **Pengalaman di SAP Express:** Tugas harian, pemodelan upah kurir UMK 2026 di 500+ kota, model Computer Vision POD, atau dashboard 200+ cabang.\n" +
        "2. 🤖 **Proyek Data & AI:** Detail proyek MobileNetV3 POD, dashboard Power BI Superstore, sistem Active Recall LLM/RAG, dan Credit Scoring.\n" +
        "3. 🛠️ **Keahlian & Tools:** Bahasa pemrograman (Python, SQL, DAX), library machine learning, dan arsitektur data.\n" +
        "4. 🎓 **Pendidikan & Prestasi:** Nilai IPK (3.87), Beasiswa Penuh OSC Medcom, riset skripsi, dan Juara 2 Hackathon Komdigi.\n" +
        "5. 📞 **Kontak & Rekrutmen:** Cara menghubungi Azzan via WhatsApp atau Email untuk wawancara dan peluang karir.\n\n" +
        "Silakan ketik pertanyaan Anda secara bebas!",
      links: [
        { label: "Lihat Tentang Azzan", href: "#about" },
        { label: "Buka Form Kontak", href: "#contact" },
      ],
    }
  }

  // 2. GREETINGS (Halo, Hai, Selamat Pagi, dll)
  if (
    hasWord(
      "halo",
      "hai",
      "hello",
      "hi",
      "hey",
      "selamat pagi",
      "selamat siang",
      "selamat sore",
      "selamat malam",
      "assalamualaikum",
      "pagi",
      "siang",
      "sore",
      "malam",
      "apa kabar"
    )
  ) {
    return {
      text: "Halo! Selamat datang di portofolio Azzan Dwi Riski. 👋\n\n" +
        "Saya adalah asisten virtual yang siap membantu Anda mengenal lebih jauh tentang perjalanan karir Azzan sebagai **QSE Coordinator & Data Analyst** di **SAP Express**, riset **Computer Vision & AI**, hingga portofolio proyeknya.\n\n" +
        "Ada yang ingin Anda ketahui lebih lanjut?",
      links: [
        { label: "Jelajahi Pengalaman", href: "#experience" },
        { label: "Lihat Proyek", href: "#projects" },
      ],
    }
  }

  // 3. APPRECIATION / THANKS ("makasih", "terima kasih", "keren", "good", "oke")
  if (hasWord("terima kasih", "makasih", "thanks", "thank you", "keren", "mantap", "oke", "ok", "siap", "bagus")) {
    return {
      text: "Sama-sama! Senang bisa membantu Anda. 🙏\n\nJika ada hal lain yang ingin Anda ketahui atau tertarik untuk berdiskusi/merekrut Azzan, jangan ragu untuk bertanya lagi atau langsung menghubungi kontak resminya.",
      links: [
        { label: "Hubungi via WhatsApp", href: "https://wa.me/6285866073348?text=Halo%20Azzan%2C%20saya%20melihat%20portofolio%20Anda" },
        { label: "Kirim Email", href: "mailto:azzandwiriski145@gmail.com" },
      ],
    }
  }

  // 4. SCORING SYSTEM FOR SPECIFIC DOMAIN QUERIES
  let scoreSAP = 0
  let scoreProjects = 0
  let scoreSkills = 0
  let scoreEdu = 0
  let scoreContact = 0

  // Check SAP Express keywords
  const sapKeywords = [
    "sap",
    "express",
    "qse",
    "koordinator",
    "coordinator",
    "umk",
    "upah",
    "gaji",
    "kurir",
    "kompensasi",
    "nos",
    "sla",
    "logistik",
    "ekspedisi",
    "kerja",
    "kantor",
    "perusahaan",
    "tugas",
    "pekerjaan",
    "pengalaman",
  ]
  sapKeywords.forEach((k) => {
    if (hasWord(k)) scoreSAP += 2
  })
  if (cleanText.includes("sap express")) scoreSAP += 6
  if (cleanText.includes("pengalaman kerja")) scoreSAP += 4

  // Check Projects & AI keywords (strict standalone words, NOT substrings)
  const projKeywords = [
    "proyek",
    "project",
    "projects",
    "portofolio",
    "portfolio",
    "karya",
    "mobilenet",
    "mobilenetv3",
    "superstore",
    "credit scoring",
    "active recall",
    "rag",
    "yolo",
    "aplikasi",
  ]
  projKeywords.forEach((k) => {
    if (hasWord(k)) scoreProjects += 2
  })
  if (hasWord("ai") || cleanText.includes("artificial intelligence")) scoreProjects += 3
  if (cleanText.includes("computer vision")) scoreProjects += 5
  if (cleanText.includes("machine learning")) scoreProjects += 4
  if (cleanText.includes("deep learning")) scoreProjects += 4

  // Check Skills keywords
  const skillKeywords = [
    "skill",
    "skills",
    "keahlian",
    "kemampuan",
    "tools",
    "teknologi",
    "stack",
    "tech",
    "python",
    "sql",
    "dax",
    "power bi",
    "powerbi",
    "tableau",
    "looker",
    "pytorch",
    "tensorflow",
    "docker",
    "gcp",
    "etl",
    "excel",
  ]
  skillKeywords.forEach((k) => {
    if (hasWord(k)) scoreSkills += 2
  })
  if (cleanText.includes("power bi")) scoreSkills += 4
  if (cleanText.includes("bahasa pemrograman")) scoreSkills += 4

  // Check Education & Honors keywords
  const eduKeywords = [
    "kuliah",
    "kampus",
    "pendidikan",
    "universitas",
    "mercu",
    "buana",
    "umb",
    "ipk",
    "gpa",
    "skripsi",
    "thesis",
    "lulus",
    "sarjana",
    "beasiswa",
    "osc",
    "medcom",
    "prestasi",
    "juara",
    "hackathon",
    "komdigi",
    "penghargaan",
    "sertifikat",
    "sertifikasi",
    "lisensi",
  ]
  eduKeywords.forEach((k) => {
    if (hasWord(k)) scoreEdu += 2
  })
  if (cleanText.includes("mercu buana")) scoreEdu += 5
  if (cleanText.includes("beasiswa osc")) scoreEdu += 5
  if (cleanText.includes("hackathon komdigi")) scoreEdu += 5

  // Check Contact & Hiring keywords
  const contactKeywords = [
    "kontak",
    "contact",
    "hubungi",
    "email",
    "mail",
    "whatsapp",
    "wa",
    "telepon",
    "phone",
    "nomor",
    "hire",
    "rekrut",
    "rekrutmen",
    "interview",
    "wawancara",
    "loker",
    "lowongan",
    "kolaborasi",
    "lokasi",
    "domisili",
    "cv",
    "resume",
  ]
  contactKeywords.forEach((k) => {
    if (hasWord(k)) scoreContact += 2
  })
  if (cleanText.includes("kirim pesan")) scoreContact += 4
  if (cleanText.includes("nomor telepon") || cleanText.includes("nomor wa")) scoreContact += 4

  const maxScore = Math.max(scoreSAP, scoreProjects, scoreSkills, scoreEdu, scoreContact)

  if (maxScore > 0) {
    if (maxScore === scoreSAP) {
      return {
        text: "💼 **Peran & Pengalaman Kerja di PT Satria Antaran Prima Tbk (SAP Express):**\n\n" +
          "Azzan menjabat sebagai **QSE Coordinator & Data Analyst** (dipromosikan dari Data Analyst pada Agustus 2024):\n\n" +
          "• **Pemodelan Upah UMK 2026 Nasional:** Memimpin simulasi kompensasi kurir di 500+ kota/kabupaten se-Indonesia menyambut proyeksi UMK baru untuk efisiensi biaya operasional.\n" +
          "• **Otomatisasi Computer Vision POD:** Mengembangkan model MobileNetV3 edge-ready untuk memvalidasi foto bukti serah terima paket (*Proof of Delivery*), memangkas review manual hingga ~65%.\n" +
          "• **Dashboard Eksekutif NOS:** Mengembangkan dashboard Power BI yang memantau SLA pengiriman dan drop rate di 200+ cabang untuk jajaran Direksi dan General Manager.\n" +
          "• **Otomatisasi Pipeline ETL:** Memangkas durasi rekonsiliasi data operasional harian dari 4 jam menjadi 15 menit menggunakan SQL dan Python.",
        links: [
          { label: "Lihat Timeline Pengalaman", href: "#experience" },
          { label: "Baca Rekomendasi Head of QSE", href: "#recommendation" },
        ],
      }
    }

    if (maxScore === scoreProjects) {
      return {
        text: "🤖 **Portofolio Proyek Unggulan Azzan:**\n\n" +
          "1. **Logistics POD Image Verification (Computer Vision):** Model MobileNetV3 untuk memvalidasi foto bukti serah terima paket kurir secara otomatis dengan akurasi 92.4%.\n" +
          "2. **Superstore Sales Analytics (Power BI):** Dashboard interaktif end-to-end menganalisis profitabilitas, tren geografis, dan retur barang retail menggunakan DAX & Power Query.\n" +
          "3. **Active Recall Learning AI (LLM / RAG):** Platform edukasi adaptif berbasis Retrieval-Augmented Generation untuk latihan soal dan retensi materi.\n" +
          "4. **Credit Risk Scoring (Home Credit Indonesia):** Model prediksi risiko kredit (LightGBM/XGBoost, AUC 0.82) pada 300K+ data aplikasi nasabah.",
        links: [
          { label: "Buka Galeri Proyek", href: "#projects" },
          { label: "Kunjungi GitHub Azzan", href: "https://github.com/azzandwi1" },
        ],
      }
    }

    if (maxScore === scoreSkills) {
      return {
        text: "📊 **Keahlian Teknis & Tools Azzan Dwi Riski:**\n\n" +
          "• **Bahasa Pemrograman & Data:** Python (Pandas, NumPy, Scikit-learn, OpenCV), SQL (PostgreSQL, MySQL), DAX, R, Excel Lanjut (Power Query, VBA).\n" +
          "• **Business Intelligence:** Power BI (Data Modeling, DAX Measures, Storytelling Dashboards), Tableau, Looker Studio, Executive KPI Reporting.\n" +
          "• **Machine Learning & Applied AI:** Computer Vision (MobileNet, YOLO, CNN), Deep Learning (PyTorch, TensorFlow), NLP/LLM RAG.\n" +
          "• **Data Engineering & Cloud:** Automated ETL Pipelines, Google Cloud Platform (GCP Cloud Run), Docker, Git, RESTful API.",
        links: [{ label: "Jelajahi Pilar Keterampilan", href: "#skills" }],
      }
    }

    if (maxScore === scoreEdu) {
      return {
        text: "🎓 **Pendidikan, Beasiswa & Prestasi Resmi:**\n\n" +
          "• **S1 Teknik Informatika — Universitas Mercu Buana:** IPK **3.87 / 4.00** (*Magna Cum Laude*). Riset skripsi berfokus pada Computer Vision & Deep Learning untuk klasifikasi citra.\n" +
          "• **Penerima Beasiswa Penuh OSC Medcom:** Berhasil lolos beasiswa penuh 100% dari 50.000+ pendaftar tingkat nasional.\n" +
          "• **Juara 2 Hackathon Nasional Komdigi x DQLab 2024:** Meraih penghargaan nasional pada kategori solusi *AI for Logistics*.\n" +
          "• **Bangkit Academy (Google, GoTo, Traveloka):** Lulusan Terbaik (*Distinction Graduate*, Top 1.5% dari 67.000+ pendaftar).",
        links: [
          { label: "Lihat Lisensi & Penghargaan", href: "#certifications" },
          { label: "Tentang Profil Azzan", href: "#about" },
        ],
      }
    }

    if (maxScore === scoreContact) {
      return {
        text: "📞 **Informasi Kontak & Ketersediaan Rekrutmen:**\n\n" +
          "Azzan terbuka untuk posisi **Data Analyst, Operations Specialist, dan Applied AI Practitioner** (tersedia On-site di Jakarta/Tangerang, Hybrid, maupun Remote):\n\n" +
          "• **WhatsApp:** +62 858-6607-3348 (Respon Cepat)\n" +
          "• **Email:** azzandwiriski145@gmail.com\n" +
          "• **LinkedIn:** linkedin.com/in/azzandr\n" +
          "• **Domisili:** Tangerang & Jakarta Barat, Indonesia.",
        links: [
          { label: "Chat WhatsApp Sekarang", href: "https://wa.me/6285866073348?text=Halo%20Azzan%2C%20saya%20melihat%20portofolio%20Anda" },
          { label: "Kirim Email Langsung", href: "mailto:azzandwiriski145@gmail.com?subject=Inquiry%20via%20Portfolio" },
          { label: "Buka Form Kontak", href: "#contact" },
        ],
      }
    }
  }

  // 5. DEFAULT / OUT OF SCOPE / UNRECOGNIZED
  return {
    text: "Saya adalah asisten virtual portofolio khusus untuk **Azzan Dwi Riski**. 😊\n\n" +
      "Saya belum menemukan topik yang pas dengan pertanyaan Anda. Anda bisa menanyakan hal seputar:\n" +
      "• Pengalaman kerja & peran Azzan di **SAP Express**\n" +
      "• Proyek **Computer Vision**, **Power BI**, atau **AI**\n" +
      "• **Keahlian teknis** (Python, SQL, Power BI, dll.)\n" +
      "• Latar belakang pendidikan, beasiswa **OSC**, atau **IPK**\n" +
      "• **Cara menghubungi / merekrut** Azzan\n\n" +
      "Silakan coba tanyakan kembali dengan kata kunci di atas!",
    links: [
      { label: "Tentang Azzan", href: "#about" },
      { label: "Kirim Pesan ke Azzan", href: "#contact" },
    ],
  }
}

export default function AIAssistant() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [hasUnread, setHasUnread] = useState(true)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      setHasUnread(false)
      const timer = setTimeout(() => {
        inputRef.current?.focus()
      }, 200)
      return () => clearTimeout(timer)
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
    }, 400)
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

  if (!mounted) {
    return null
  }

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-[60]">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          {/* Subtle Ambient Pulse Aura (pointer-events-none to prevent blocking clicks) */}
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse pointer-events-none" />

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-slate-900 border border-teal-500/50 text-slate-100 shadow-2xl shadow-teal-950/60 hover:border-teal-400 transition-colors cursor-pointer select-none"
            aria-label="Toggle AI Assistant"
          >
            <div className="relative">
              {isOpen ? (
                <X className="w-5 h-5 text-teal-400" />
              ) : (
                <Bot className="w-5 h-5 text-teal-400" />
              )}
              {!isOpen && (
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
              )}
            </div>
            <span className="font-semibold text-sm hidden sm:inline tracking-tight">
              {isOpen ? "Tutup AI" : "Azzan AI Assistant"}
            </span>

            {hasUnread && !isOpen && (
              <span className="ml-1 px-1.5 py-0.5 text-[10px] font-bold bg-teal-500 text-slate-950 rounded-full animate-bounce">
                Ask Me
              </span>
            )}
          </button>
        </motion.div>
      </div>

      {/* Chat Window Modal (Clean positioning: bottom-24, guaranteed visible) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-24 right-4 sm:right-6 z-[70] w-[calc(100vw-2rem)] sm:w-[420px] max-h-[82vh] h-[580px] flex flex-col rounded-2xl bg-[#090D16] border border-teal-500/40 shadow-2xl shadow-black overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 py-3.5 border-b border-slate-800 bg-slate-900/90">
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
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm scroll-smooth bg-slate-950/60">
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
                        : "bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-none shadow-sm"
                    }`}
                  >
                    <div className="whitespace-pre-line text-[13px]">{msg.text}</div>

                    {/* Interactive Action Links */}
                    {msg.links && msg.links.length > 0 && (
                      <div className="mt-3 pt-2.5 border-t border-slate-800 flex flex-wrap gap-2">
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
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl rounded-bl-none px-4 py-2.5 flex items-center gap-1.5">
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
              <div className="px-4 py-2.5 border-t border-slate-800 bg-slate-900/70">
                <p className="text-[11px] text-slate-400 mb-2 font-medium">Topik Cepat Populer:</p>
                <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
                  {QUICK_PROMPTS.map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(prompt)}
                      className="text-left text-xs px-2.5 py-1 rounded-lg bg-slate-800/90 hover:bg-teal-500/20 text-slate-300 hover:text-teal-200 border border-slate-700/60 hover:border-teal-500/40 transition-colors cursor-pointer"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Bar */}
            <div className="p-3 border-t border-slate-800 bg-slate-900">
              <div className="relative flex items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Tanyakan apapun tentang karir & karya Azzan..."
                  className="w-full pl-3.5 pr-10 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!inputValue.trim()}
                  className="absolute right-1.5 p-1.5 rounded-lg bg-teal-500 text-slate-950 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-teal-400 transition cursor-pointer"
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
