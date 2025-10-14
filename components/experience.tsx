"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const experiences = [
    {
      title: "Project-Based Virtual Intern: Data Scientist",
      company: "Home Credit Indonesia x Rakamin Academy",
      period: "September 2025 – October 2025",
      description: [
        "Implemented various industry tools and concepts such as Excel, SQL, and Python, with an understanding of Big Data and Data Warehouse applications.",
        "Completed end-to-end data science projects involving data collection, machine learning model development, and creating visualizations and analytical reports that deliver business insights.",
      ],
    },
    {
      title: "Machine Learning Cohort",
      company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
      period: "February – July 2024",
      description: [
        "Completed intensive training on Python, data analysis, machine learning, computer vision, and NLP through Coursera and Dicoding platforms.",
        "Gained practical experience in TensorFlow deployment and ML project management with mentoring from industry experts.",
        "Developed essential soft skills including critical thinking, problem solving, and professional communication in a multidisciplinary tech environment.",
      ],
    },
    {
      title: "Research and Technology Division",
      company: "Association of Computer Science Students",
      period: "September 2023 – September 2024",
      description: [
        "Mentored new students in web development and basic programming.",
        "Supported learning sessions and encouraged technical growth.",
      ],
    },
    {
      title: "IT Student Intern",
      company: "BPTIKP Jawa Tengah",
      period: "December 2019 – March 2020",
      description: [
        "Assisted in developing an educational quiz game focused on space exploration using Java.",
        "Supported the creation of a visitor satisfaction survey website for BPTIK.",
        "Contributed to the development of a digital guest book web application to improve visitor tracking.",
      ],
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
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work <span className="text-emerald-600">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey and experiences that have shaped my skills and expertise in machine learning and
            data analysis.
          </p>
        </motion.div>

        <motion.div
          className="relative max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-emerald-200 dark:bg-emerald-900"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className={`relative flex flex-col md:flex-row items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-600 z-10"></div>

              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Badge className="mb-2 bg-emerald-600 hover:bg-emerald-700">{exp.period}</Badge>
                    <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">{exp.title}</h3>
                    <p className="text-emerald-600 font-medium mb-4">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-400 flex items-start">
                          <span className="mr-2 text-emerald-600">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
