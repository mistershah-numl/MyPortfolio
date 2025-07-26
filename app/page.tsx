"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/portfolio/Navbar"
import Hero from "@/components/portfolio/Hero"
import About from "@/components/portfolio/About"
import Skills from "@/components/portfolio/Skills"
import Projects from "@/components/portfolio/Projects"
import Services from "@/components/portfolio/Services"
import Footer from "@/components/portfolio/Footer"
import ContactFormModal from "@/components/portfolio/ContactFormModal"

export default function Portfolio() {
  const [currentSpecialization, setCurrentSpecialization] = useState(0)
  const [showContactForm, setShowContactForm] = useState(false)
  const [selectedService, setSelectedService] = useState("")

  const specializations = ["Full-Stack Developer", "Blockchain Expert", "Cybersecurity Specialist"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpecialization((prev) => (prev + 1) % specializations.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 transition-all duration-500">
      <Navbar setShowContactForm={setShowContactForm} setSelectedService={setSelectedService} />
      <Hero
        currentSpecialization={currentSpecialization}
        specializations={specializations}
        setShowContactForm={setShowContactForm}
      />
      <About />
      <Skills />
      <Projects />
      <Services setShowContactForm={setShowContactForm} setSelectedService={setSelectedService} />
      <ContactFormModal
        showContactForm={showContactForm}
        setShowContactForm={setShowContactForm}
        selectedService={selectedService}
      />
      <Footer />
    </div>
  )
}
