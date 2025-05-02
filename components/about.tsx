"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code, Database, Lightbulb } from "lucide-react"

export default function About() {
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
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-emerald-600">Me</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Final-year Informatics Engineering student at Universitas Mercu Buana with strong interests in machine
            learning and data analysis. Experienced in building machine learning and deep learning models using Python,
            scikit-learn, PyTorch, and TensorFlow.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeIn}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mb-4">
                  <Brain className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Machine Learning</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Skilled in building and deploying machine learning models for various applications.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mb-4">
                  <Code className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Deep Learning</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Experience with PyTorch and TensorFlow for computer vision and NLP tasks.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mb-4">
                  <Database className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Data Analysis</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Proficient in exploratory data analysis, data preprocessing, and visualization.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mb-4">
                  <Lightbulb className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Problem Solving</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Strong analytical skills and ability to solve complex technical challenges.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 bg-white dark:bg-gray-900 rounded-lg shadow-md p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Education</h3>

          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Bachelor of Informatics Engineering
                </h4>
                <p className="text-emerald-600 font-medium">Mercu Buana University, Jakarta</p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">August 2021 – Present</p>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  High School Software Engineering
                </h4>
                <p className="text-emerald-600 font-medium">Telkom Purwokerto Vocational High School</p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">June 2018 – May 2021</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
