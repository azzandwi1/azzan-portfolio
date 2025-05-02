"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "Multimodal Classification for Gambling Web Detection",
      description:
        "Designed and implemented a multimodal classification system combining Computer Vision and NLP for identifying gambling websites. Applied transfer learning, custom fine-tuning, and fusion strategy to integrate visual and textual information.",
      image: "/images/gambling.jpg",
      tools: ["Python", "PyTorch", "HuggingFace", "Playwright", "Tesseract OCR", "Kaggle"],
      links: {
        github: "https://github.com/azzandwi1/identifying-indonesian-gambling-websites-using-multimodal-late-fusion-technique",
        demo: "https://huggingface.co/spaces/azzandr/gambling-site-detector",
      },
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
    },
  ]

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
        staggerChildren: 0.2,
      },
    },
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

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tools.map((tool, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700" asChild>
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
      </div>
    </section>
  )
}
