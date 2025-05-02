"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function Skills() {
  const [activeTab, setActiveTab] = useState("technical")

  const technicalSkills = [
    { name: "Python", level: 90 },
    { name: "PyTorch", level: 85 },
    { name: "TensorFlow", level: 85 },
    { name: "scikit-learn", level: 80 },
    { name: "SQL", level: 75 },
    { name: "pandas", level: 85 },
    { name: "numpy", level: 85 },
    { name: "matplotlib", level: 80 },
  ]

  const mlSkills = [
    { name: "Computer Vision", level: 85 },
    { name: "NLP", level: 80 },
    { name: "Deep Learning", level: 85 },
    { name: "Transfer Learning", level: 80 },
    { name: "LLM (introductory)", level: 70 },
    { name: "EDA", level: 85 },
    { name: "Data Preprocessing", level: 85 },
    { name: "Feature Engineering", level: 80 },
    { name: "API Integration", level: 75 },
  ]

  const softSkills = [
    { name: "Team Collaboration", level: 85 },
    { name: "Problem Solving", level: 90 },
    { name: "Technical Mentoring", level: 80 },
    { name: "Critical Thinking", level: 85 },
    { name: "Communication", level: 80 },
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
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-emerald-600">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I've developed a diverse set of skills in machine learning, data analysis, and software development.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <Tabs defaultValue="technical" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="technical">Technical Skills</TabsTrigger>
              <TabsTrigger value="ml">ML & AI</TabsTrigger>
              <TabsTrigger value="soft">Soft Skills</TabsTrigger>
            </TabsList>

            <TabsContent value="technical">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="hidden"
                animate={activeTab === "technical" ? "visible" : "hidden"}
              >
                {technicalSkills.map((skill, index) => (
                  <motion.div key={index} variants={fadeIn} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="ml">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="hidden"
                animate={activeTab === "ml" ? "visible" : "hidden"}
              >
                {mlSkills.map((skill, index) => (
                  <motion.div key={index} variants={fadeIn} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="soft">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="hidden"
                animate={activeTab === "soft" ? "visible" : "hidden"}
              >
                {softSkills.map((skill, index) => (
                  <motion.div key={index} variants={fadeIn} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {["Google Colab", "Huggingface", "Kaggle", "Roboflow", "Label Studio", "Git", "Streamlit", "Tableau"].map(
            (tool, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex items-center justify-center h-24"
              >
                <span className="text-lg font-medium text-gray-900 dark:text-white">{tool}</span>
              </motion.div>
            ),
          )}
        </motion.div>
      </div>
    </section>
  )
}
