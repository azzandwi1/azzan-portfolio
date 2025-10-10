"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")
  
  const projects = [
    {
      title: "Multimodal Classification for Gambling Web Detection",
      description:
        "Designed and implemented a multimodal classification system combining Computer Vision and NLP for identifying gambling websites. Applied transfer learning, custom fine-tuning, and fusion strategy to integrate visual and textual information.",
      image: "/images/gambling.png",
      tools: ["Python", "PyTorch", "HuggingFace", "Playwright", "Tesseract OCR", "Kaggle"],
      links: {
        github: "https://github.com/azzandwi1/identifying-indonesian-gambling-websites-using-multimodal-late-fusion-technique",
        demo: "https://huggingface.co/spaces/azzandr/GamblingDet-ID",
      },
      category: ["Deep Learning & Computer Vision", "Natural Language Processing"]
    },
    {
      title: "Superstore Analytics Dashboard",
      description:
        "End-to-end Power BI dashboard using the Superstore dataset. Built complete workflow: Power Query transformations, data modeling with a dedicated Date table, DAX measures for core KPIs, time intelligence (PY comparisons), and storytelling-focused visuals.",
      image: "/images/superstore.png",
      tools: [
        "Power BI",
        "Power Query",
        "DAX",
        "Data Modeling",
        "Time Intelligence",
        "Visualization",
        "PowerPoint"
      ],
      links: {
        github: "https://github.com/azzandwi1/Power-BI---Superstore-Analytics-Dashboard",
        demo: "#"
      },
      category: "Business Intelligence & Analytics"
    },
    {
      title: "DermoAlly - AI Skin Condition Detection App",
      description:
        "Developed an AI-powered Android app to detect facial skin conditions using a CNN-based image classification model. Built an end-to-end ML pipeline: data collection, preprocessing, augmentation, training, evaluation, and model deployment.",
      image: "/images/dermoally.jpg",
      tools: ["Python", "TensorFlow", "Flask", "GCP", "Kotlin", "Kaggle", "Git"],
      links: {
        github: "https://github.com/Dermoally/Dermoally/",
        demo: "#",
      },
      category: ["Deep Learning & Computer Vision", "AI Applications"]
    },
    {
      title: "Bank Customer Churn Prediction",
      description:
        "Implemented a machine learning model to predict customer churn among bank customers using demographic and transactional features. Conducted data cleaning, exploratory analysis, feature engineering, and applied classification algorithms to identify churn risks.",
      image: "/images/customer-churn.png",
      tools: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "Seaborn", "Jupyter Notebook"],
      links: {
        github: "https://github.com/azzandwi1/analyzing_and_predicting_customer_churn",
        demo: "#",
      },
      category: "Machine Learning & Predictive Analytics"
    },
    {
      title: "Student Performance Prediction Using Machine Learning",
      description:
        "Built a machine learning pipeline to predict student performance using demographic and academic features. Performed EDA, feature selection, model comparison (KNN, Decision Tree, etc.), and analyze factors influencing academic success.",
      image: "/images/student-performance.png",
      tools: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "Seaborn", "Jupyter Notebook"],
      links: {
        github: "https://github.com/azzandwi1/MATHEMATICAL-TOOLS-FOR-DATA-SCIENCE---Prediksi-Performa-Siswa-dalam-Matematika",
        demo: "#",
      },
      category: "Machine Learning & Predictive Analytics"
    },
    {
      title: "Customer Sales & RFM Analysis",
      description:
        "Analyzed customer, order, product, and sales data to answer key business questions. Performed full data wrangling (merging, cleaning, type conversion) using Python. Created EDA visualizations for trends, customer demographics, and product performance.",
      image: "/images/customer.png",
      tools: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook", "Streamlit"],
      links: {
        github: "https://github.com/azzandwi1/submission-data-analysis",
        demo: "https://submission-bike-sharing.streamlit.app/",
      },
      category: "Business Intelligence & Analytics"
    },
    {
      title: "Bike Sharing Dataset Analysis",
      description:
        "Analyzed the Bike Sharing dataset to uncover patterns and business insights. Answered business questions like seasonal trends, user type distribution, and time-based usage. Built an interactive dashboard using Streamlit to present findings clearly.",
      image: "/images/bikeshare.png",
      tools: ["Python", "Pandas", "Matplotlib", "Seaborn",  "Jupyter Notebook", "Streamlit"],
      links: {
        github: "https://github.com/azzandwi1/data-analysis-project",
        demo: "https://dashboard-dico1.streamlit.app/",
      },
      category: "Business Intelligence & Analytics"
    },
    {
      title: "Sentiment Analysis on News Headlines",
      description:
        "Performed sentiment analysis on news headlines using Natural Language Toolkit (NLTK). Built a custom preprocessing pipeline including tokenization and stopword removal, then trained a Naive Bayes Classifier for binary sentiment classification.",
      image: "/images/news-sentiment.png",
      tools: ["Python", "NLTK", "Naive Bayes", "Matplotlib", "Pandas"],
      links: {
        github: "https://github.com/azzandwi1/sentiment-analysis-on-news-headlines",
        demo: "#"
      },
      category: "Natural Language Processing"
    },
    {
      title: "Study with Active Recall LLM App",
      description:
        "Developed an AI-powered Active Recall learning app using Next.js and FastAPI, integrating multi-format content ingestion (PDF, URL, text) and OCR with PaddleOCR. Implemented FAISS-based Retrieval-Augmented Generation with Gemini API for adaptive flashcard and quiz generation, alongside with AI grading. Deployed with PostgreSQL, SQLAlchemy ORM, and Docker.",
      image: "/images/active-recall-app.png",
      tools: ["Next.js", "FastAPI", "Python", "PostgreSQL", "SQLAlchemy", "Docker", "PaddleOCR", "FAISS", "Gemini API", "RAG"],
      links: {
        github: "https://github.com/azzandwi1/study-with-active-recall-llm-app",
        demo: "#"
      },
      category: ["AI Applications", "Natural Language Processing"]
    },    
    {
      title: "Coffee Sales Dashboard",
      description:
        "Interactive Excel dashboard analyzing coffee sales (2019–2022). Showcases advanced Excel features: XLOOKUP, INDEX-MATCH, nested IF logic, formatted Pivot Tables/Charts, Timelines and Slicers for fully filterable insights.",
      image: "/images/coffeesales.png",
      tools: [
        "Excel",
        "XLOOKUP",
        "INDEX-MATCH",
        "IF Logic",
        "Pivot Tables",
        "Pivot Charts",
        "Slicers",
        "Timeline",
        "Data Cleaning",
        "Formatting"
      ],
      links: {
        github: "https://github.com/azzandwi1/coffee-sales-data-analysis",
        demo: "https://1drv.ms/x/c/f108fa9e0dfd42e4/EYwgdoJIFf1Nguyxc9HBAtQBd6oE2My5SlpGoHknyfcgzQ?e=CDAc9T",
      },
      category: "Business Intelligence & Analytics"
    },
  ]

  // Extract all unique categories from projects (handling both string and array)
  const allCategories = projects.flatMap(project => 
    Array.isArray(project.category) ? project.category : [project.category]
  )
  const categories = ["All", ...Array.from(new Set(allCategories))]
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => {
        const projectCategories = Array.isArray(project.category) ? project.category : [project.category]
        return projectCategories.includes(activeCategory)
      })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const tabVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      x: 20,
      transition: { duration: 0.2 }
    }
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-emerald-600">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in machine learning, data analysis, and
            software development.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/25"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 dark:hover:text-emerald-400"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={staggerContainer}
          >
            {filteredProjects.map((project, index) => (
              <motion.div key={`${activeCategory}-${index}`} variants={tabVariants}>
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group">
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6 flex-grow">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.slice(0, 4).map((tool, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="text-xs bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800"
                        >
                          {tool}
                        </Badge>
                      ))}
                      {project.tools.length > 4 && (
                        <Badge
                          variant="outline"
                          className="text-xs bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                        >
                          +{project.tools.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 flex justify-between">
                    <Button variant="outline" size="sm" asChild className="flex-1 mr-2">
                      <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 flex-1" asChild>
                      <Link href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
