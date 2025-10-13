"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Skills() {
  const [activeTab, setActiveTab] = useState("technical")

  const technicalSkills = [
    { name: "Python", icon: "py" },
    { name: "PyTorch", icon: "pytorch" },
    { name: "TensorFlow", icon: "tensorflow" },
    { name: "scikit-learn", icon: "sklearn" },
    { name: "SQL", icon: "sqlite" },
    { name: "pandas", icon: "pandas" },
    { name: "numpy", icon: "numpy" },
    { name: "matplotlib", icon: "matplotlib" },
    { name: "Deep Learning", icon: "pytorch" },
    { name: "API Integration", icon: "fastapi" },
  ]

  const softSkills = [
    "Team Collaboration",
    "Problem Solving", 
    "Technical Mentoring",
    "Critical Thinking",
    "Communication",
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
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="technical">Technical Skills</TabsTrigger>
              <TabsTrigger value="soft">Soft Skills</TabsTrigger>
            </TabsList>

            <TabsContent value="technical">
              <motion.div
                className="grid grid-cols-2 md:grid-cols-5 gap-6"
                variants={staggerContainer}
                initial="hidden"
                animate={activeTab === "technical" ? "visible" : "hidden"}
              >
                {technicalSkills.map((skill, index) => (
                  <motion.div 
                    key={index} 
                    variants={fadeIn} 
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300"
                  >
                    <img 
                      src={`https://skillicons.dev/icons?i=${skill.icon}`}
                      alt={skill.name}
                      className="w-12 h-12 mb-3"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement
                        target.style.display = 'none'
                        const nextElement = target.nextElementSibling as HTMLElement
                        if (nextElement) {
                          nextElement.style.display = 'block'
                        }
                      }}
                    />
                    <div className="text-sm font-medium text-gray-900 dark:text-white text-center" style={{display: 'none'}}>
                      {skill.name}
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white text-center mt-2">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="soft">
              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="hidden"
                animate={activeTab === "soft" ? "visible" : "hidden"}
              >
                {softSkills.map((skill, index) => (
                  <motion.div 
                    key={index} 
                    variants={fadeIn} 
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
                  >
                    <span className="text-lg font-medium text-gray-900 dark:text-white text-center">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Tools & Technologies
          </h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-5 gap-6"
            variants={staggerContainer}
          >
            {[
              { name: "Jupyter Notebook", icon: "jupyter" },
              { name: "Docker", icon: "docker" },
              { name: "Git", icon: "git" },
              { name: "Excel", icon: "excel" },
              { name: "Power BI", icon: "powerbi" },
              { name: "Huggingface", icon: "huggingface" },
              { name: "Roboflow", icon: "roboflow" },
              { name: "Label Studio", icon: "labelstudio" },
            ].map((tool, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300"
              >
                <img 
                  src={`https://skillicons.dev/icons?i=${tool.icon}`}
                  alt={tool.name}
                  className="w-12 h-12 mb-3"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement
                    target.style.display = 'none'
                    const nextElement = target.nextElementSibling as HTMLElement
                    if (nextElement) {
                      nextElement.style.display = 'block'
                    }
                  }}
                />
                <div className="text-sm font-medium text-gray-900 dark:text-white text-center" style={{display: 'none'}}>
                  {tool.name}
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white text-center mt-2">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
