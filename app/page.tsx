import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Recommendation from "@/components/recommendation"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import ScrollToTop from "@/components/scroll-to-top"
import AIAssistant from "@/components/ai-assistant"

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent transition-colors duration-300">
      <Hero />
      <About />
      <Experience />
      <Recommendation />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <ScrollToTop />
      <AIAssistant />
    </main>
  )
}
