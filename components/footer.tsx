import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="#home" className="text-2xl font-bold">
              Azzan<span className="text-emerald-500">.</span>
            </Link>
            <p className="mt-2 text-gray-400 max-w-md">
              AI & Machine Learning Engineer specializing in computer vision, NLP, and data analysis.
            </p>
          </div>

          <div className="flex space-x-6">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-500 transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-500 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:azzandwiriski145@gmail.com"
              className="text-gray-400 hover:text-emerald-500 transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {currentYear} Azzan Dwi Riski. All rights reserved.</p>

          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-emerald-500 text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-emerald-500 text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-400 hover:text-emerald-500 text-sm transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-emerald-500 text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
