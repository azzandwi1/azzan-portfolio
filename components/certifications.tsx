"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"

export default function Certifications() {
  const certifications = [
    "DeepLearning.AI TensorFlow Developer Specialization - DeepLearning.AI",
    "TensorFlow: Advanced Techniques Specialization - DeepLearning.AI",
    "TensorFlow: Data and Deployment Specialization - DeepLearning.AI",
    "Machine Learning Specialization - DeepLearning.AI, Coursera, Stanford CPD, UVM",
    "Mathematics for Machine Learning and Data Science Specialization - DeepLearning.AI",
    "Belajar Analisis Data dengan Python - Dicoding Indonesia",
    "Process Data from Dirty to Clean - Google",
    "Analyze Data to Answer Questions - Google",
    "Share Data Through the Art of Visualization – Google",
    "Java Fundamental & Java Programming - TSA Digital Talent Scholarship 2023",
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
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-emerald-600">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I've earned various certifications to enhance my skills and knowledge in machine learning, data science, and
            programming.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start">
                  <Award className="h-6 w-6 text-emerald-600 mr-4 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 dark:text-gray-300">{cert}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
