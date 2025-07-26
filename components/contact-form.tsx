"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, Send, CheckCircle } from "lucide-react"

interface ContactFormProps {
  isOpen: boolean
  onClose: () => void
  selectedService?: string
}

export function ContactForm({ isOpen, onClose, selectedService = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    services: selectedService ? [selectedService] : [] as string[],
    budget: "",
    timeline: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const services = [
    "Full-Stack Web Development",
    "Blockchain Development",
    "Cybersecurity Consulting",
    "Technical Consulting",
    "Code Review & Auditing",
    "Performance Optimization",
    "Team Training",
    "Other",
  ]

  const budgetRanges = ["Under $5,000", "$5,000 - $15,000", "$15,000 - $50,000", "$50,000 - $100,000", "Over $100,000"]

  const timelineOptions = ["ASAP", "Within 1 month", "1-3 months", "3-6 months", "6+ months"]

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      services: checked ? [...prev.services, service] : prev.services.filter((s) => s !== service),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    // Validation
    if (!formData.name || !formData.email || !formData.services.length || !formData.subject || !formData.message) {
      setError("Please fill in all required fields: Name, Email, Services, Subject, and Message.")
      setIsSubmitting(false)
      return
    }

    try {
      const web3FormsData = new FormData()
      web3FormsData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "fccc41b3-4cb1-4e64-97f9-bc0e272cdd65")
      web3FormsData.append("name", formData.name)
      web3FormsData.append("email", formData.email)
      web3FormsData.append("subject", `New Project Inquiry: ${formData.subject}`)
      web3FormsData.append("company", formData.company || "Not specified")
      web3FormsData.append("phone", formData.phone || "Not provided")
      web3FormsData.append("services", formData.services.join(", "))
      web3FormsData.append("budget", formData.budget || "Not specified")
      web3FormsData.append("timeline", formData.timeline || "Not specified")
      web3FormsData.append("project_details", formData.message)
      web3FormsData.append("from_name", "MisterShah Portfolio")
      web3FormsData.append("autoresponse", "true")

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormsData,
        redirect: "follow", // Follow 301 redirects
      })

      const text = await response.text() // Get raw response text
      console.log("Web3Forms response:", { status: response.status, text }) // Debug log

      // Success if status is 200 (OK) or 302 (Found) after redirect, matching email receipt
      if (response.status === 200 || response.status === 302) {
        setIsSubmitting(false)
        setIsSubmitted(true)
        setTimeout(() => {
          setIsSubmitted(false)
          onClose()
          setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            services: [],
            budget: "",
            timeline: "",
            subject: "",
            message: "",
          })
        }, 3000)
      } else {
        throw new Error(`Failed with status ${response.status}`)
      }
    } catch (err) {
      setIsSubmitting(false)
      setError("An error occurred while sending the message. Please try again or contact via social media.")
      console.error("Form submission error:", err)
    }
  }

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
          <CardHeader className="relative">
            <Button variant="ghost" size="sm" className="absolute right-4 top-4" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
            <CardTitle className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
              Let's Work Together
            </CardTitle>
            <CardDescription className="text-sm sm:text-base dark:text-gray-300">
              Tell me about your project and let's create something amazing together.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-600 dark:text-green-400 mx-auto mb-4" />
                  <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Thank You!</h1>
                  <p className="text-slate-600 dark:text-slate-300">
                    Your message has been sent. You'll receive a confirmation email, and I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  {error && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3 sm:p-4"
                    >
                      <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
                    </motion.div>
                  )}

                  {/* Personal Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="dark:text-gray-200 text-sm sm:text-base">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        required
                        className="mt-1 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 text-sm sm:text-base"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="dark:text-gray-200 text-sm sm:text-base">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        required
                        className="mt-1 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 text-sm sm:text-base"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company" className="dark:text-gray-200 text-sm sm:text-base">
                        Company/Organization
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                        className="mt-1 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 text-sm sm:text-base"
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="dark:text-gray-200 text-sm sm:text-base">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                        className="mt-1 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 text-sm sm:text-base"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <Label className="text-sm sm:text-base font-semibold dark:text-gray-200">Services Needed *</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mt-2 sm:mt-3">
                      {services.map((service) => (
                        <div key={service} className="flex items-center space-x-2">
                          <Checkbox
                            id={service}
                            checked={formData.services.includes(service)}
                            onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                          />
                          <Label
                            htmlFor={service}
                            className="text-xs sm:text-sm font-normal dark:text-gray-300 cursor-pointer"
                          >
                            {service}
                          </Label>
                        </div>
                      ))}
                    </div>
                    {formData.services.length === 0 && (
                      <p className="text-red-500 text-xs mt-1">Please select at least one service</p>
                    )}
                  </div>

                  {/* Budget and Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="budget" className="dark:text-gray-200 text-sm sm:text-base">
                        Project Budget
                      </Label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, budget: value }))}
                      >
                        <SelectTrigger className="mt-1 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 text-sm sm:text-base">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent className="dark:bg-gray-800 dark:border-gray-600">
                          {budgetRanges.map((range) => (
                            <SelectItem
                              key={range}
                              value={range}
                              className="dark:text-gray-100 dark:focus:bg-gray-700 text-sm sm:text-base"
                            >
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="timeline" className="dark:text-gray-200 text-sm sm:text-base">
                        Project Timeline
                      </Label>
                      <Select
                        value={formData.timeline}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, timeline: value }))}
                      >
                        <SelectTrigger className="mt-1 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 text-sm sm:text-base">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent className="dark:bg-gray-800 dark:border-gray-600">
                          {timelineOptions.map((option) => (
                            <SelectItem
                              key={option}
                              value={option}
                              className="dark:text-gray-100 dark:focus:bg-gray-700 text-sm sm:text-base"
                            >
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Subject and Message */}
                  <div>
                    <Label htmlFor="subject" className="dark:text-gray-200 text-sm sm:text-base">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData((prev) => ({ ...prev, subject: e.target.value }))}
                      required
                      className="mt-1 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 text-sm sm:text-base"
                      placeholder="E-commerce Website Development"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="dark:text-gray-200 text-sm sm:text-base">
                      Project Details *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                      required
                      className="mt-1 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 text-sm sm:text-base"
                      rows={4}
                      placeholder="Please provide detailed information about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-500 dark:to-purple-500 hover:from-blue-700 hover:to-purple-700 dark:hover:from-cyan-600 dark:hover:to-purple-600 text-white py-2 sm:py-3 font-medium text-sm sm:text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                          />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>

                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    By submitting this form, you agree to receive email communications about your project inquiry.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
