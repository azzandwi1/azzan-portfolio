"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, FolderGit2, Sparkles, Layers } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", "Operations & AI", "Computer Vision & NLP", "BI & Analytics"]

  const projects = [
    {
      title: "Courier App Proof of Delivery (POD) Image Classifier",
      description:
        "Engineered an automated on-device Computer Vision classifier using MobileNetV3 to validate delivery proof photos directly in courier mobile apps. Classifies submissions into Valid Recipient, Package/Waybill, Background, or Blurry to eliminate false delivery disputes.",
      image: "/images/dermoally.jpg",
      tools: ["Python", "TensorFlow", "MobileNetV3", "TFLite", "Computer Vision", "Logistics Ops"],
      links: {
        github: "https://github.com/azzandwi1",
        demo: "https://github.com/azzandwi1",
      },
      category: ["Operations & AI", "Computer Vision & NLP"],
      featured: true,
      badge: "Enterprise AI",
    },
    {
      title: "Superstore Executive Analytics Dashboard",
      description:
        "Comprehensive Power BI BI suite for multi-regional sales, profitability, and customer retention. Built with robust star-schema data modeling, dedicated calendar table, and dynamic DAX measures for YoY time intelligence.",
      image: "/images/superstore.png",
      tools: ["Power BI", "DAX", "Power Query", "Data Modeling", "Time Intelligence"],
      links: {
        github: "https://github.com/azzandwi1/Power-BI---Superstore-Analytics-Dashboard",
        demo: "https://github.com/azzandwi1/Power-BI---Superstore-Analytics-Dashboard",
      },
      category: ["BI & Analytics"],
      featured: true,
      badge: "Power BI Specialization",
    },
    {
      title: "Study with Active Recall LLM & RAG Application",
      description:
        "Full-stack AI learning platform featuring document OCR extraction (PaddleOCR), vector embedding retrieval with FAISS, and Gemini API for automated quiz generation and intelligent grading. Containerized with Docker.",
      image: "/images/active-recall-app.png",
      tools: ["Next.js", "FastAPI", "Python", "PostgreSQL", "FAISS", "Gemini API", "Docker"],
      links: {
        github: "https://github.com/azzandwi1/study-with-active-recall-llm-app",
        demo: "https://github.com/azzandwi1/study-with-active-recall-llm-app",
      },
      category: ["Operations & AI", "Computer Vision & NLP"],
      featured: true,
      badge: "Generative AI & RAG",
    },
    {
      title: "Multimodal Indonesian Gambling Web Detection",
      description:
        "Multimodal classification system combining Computer Vision (page screenshot features) and NLP (DOM textual tokens) via late-fusion neural architectures to accurately detect Indonesian illegal gambling websites.",
      image: "/images/gambling.png",
      tools: ["PyTorch", "HuggingFace", "Playwright", "Tesseract OCR", "Late-Fusion"],
      links: {
        github: "https://github.com/azzandwi1/identifying-indonesian-gambling-websites-using-multimodal-late-fusion-technique",
        demo: "https://huggingface.co/spaces/azzandr/GamblingDet-ID",
      },
      category: ["Computer Vision & NLP"],
      featured: false,
      badge: "Undergraduate Thesis",
    },
    {
      title: "Indonesian Provincial Sentiment & Topic Dashboard",
      description:
        "Real-time Power BI DirectQuery dashboard connected to Supabase PostgreSQL, tracking geographical public sentiment trends and topic distributions across all 38 Indonesian provinces.",
      image: "/images/indonesia-sentiment.png",
      tools: ["Power BI", "Supabase", "PostgreSQL", "DirectQuery", "Python"],
      links: {
        github: "https://github.com/azzandwi1/Power-BI---Indonesia-State-Sentiment",
        demo: "https://github.com/azzandwi1/Power-BI---Indonesia-State-Sentiment",
      },
      category: ["BI & Analytics"],
      featured: false,
    },
    {
      title: "DermoAlly - AI Skin Condition Classifier",
      description:
        "Android-based CNN application for detecting common facial skin conditions. Trained with TensorFlow and exported to TFLite for edge inference, developed as Bangkit Academy capstone project.",
      image: "/images/dermoally.jpg",
      tools: ["Python", "TensorFlow", "Flask", "GCP", "Kotlin", "TFLite"],
      links: {
        github: "https://github.com/Dermoally/Dermoally/",
        demo: "https://github.com/Dermoally/Dermoally/",
      },
      category: ["Computer Vision & NLP"],
      featured: false,
      badge: "Bangkit Capstone",
    },
    {
      title: "Bank Customer Churn & Risk Analytics",
      description:
        "Supervised machine learning pipeline evaluating customer churn probability using behavioral and transactional features. Includes exploratory data analysis, feature engineering, and model validation.",
      image: "/images/customer-churn.png",
      tools: ["Python", "Scikit-Learn", "Pandas", "Matplotlib", "Seaborn"],
      links: {
        github: "https://github.com/azzandwi1/analyzing_and_predicting_customer_churn",
        demo: "https://github.com/azzandwi1/analyzing_and_predicting_customer_churn",
      },
      category: ["BI & Analytics"],
      featured: false,
    },
    {
      title: "Coffee Sales Interactive Excel Modeling",
      description:
        "High-performance interactive financial sales model in Microsoft Excel utilizing dynamic formulas (XLOOKUP, INDEX-MATCH), pivot tables, multi-parameter slicers, and trend analysis.",
      image: "/images/coffeesales.png",
      tools: ["Microsoft Excel", "XLOOKUP", "Pivot Tables", "Financial Modeling"],
      links: {
        github: "https://github.com/azzandwi1",
        demo: "https://github.com/azzandwi1",
      },
      category: ["BI & Analytics"],
      featured: false,
    },
  ]

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeCategory))

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-emerald-400 font-medium">
            <FolderGit2 className="h-3.5 w-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Proof of Work & <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Deployed Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Real-world systems spanning enterprise logistics operations, deep learning classification, and executive business intelligence.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 shadow-md shadow-emerald-500/20 scale-105"
                  : "bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
              >
                <Card className="h-full bg-slate-900/80 border-slate-800/80 hover:border-emerald-500/40 rounded-2xl overflow-hidden backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-emerald-950/20 transition-all duration-300 flex flex-col group">
                  {/* Image with zoom effect */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                    {project.badge && (
                      <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-900/90 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <CardContent className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-4 pt-2 border-t border-slate-800/80">
                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1">
                        {project.tools.slice(0, 4).map((tool) => (
                          <span
                            key={tool}
                            className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                        {project.tools.length > 4 && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                            +{project.tools.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-2 pt-1">
                        {project.links.github && (
                          <Button asChild variant="outline" size="sm" className="h-7 text-xs border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-slate-200">
                            <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-3.5 w-3.5 mr-1" />
                              Code
                            </Link>
                          </Button>
                        )}
                        {project.links.demo && project.links.demo !== "#" && (
                          <Button asChild size="sm" className="h-7 text-xs bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold">
                            <Link href={project.links.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-3.5 w-3.5 mr-1" />
                              Live Preview
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
