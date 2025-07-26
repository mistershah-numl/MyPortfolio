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
      // Prepare form data for Web3Forms
      const web3FormsData = new FormData()

      // Web3Forms required fields
      web3FormsData.append("access_key", "fccc41b3-4cb1-4e64-97f9-bc0e272cdd65") // Replace with your key
      web3FormsData.append("name", formData.name)
      web3FormsData.append("email", formData.email)
      web3FormsData.append("subject", `New Project Inquiry: ${formData.subject}`)

      // Custom fields
      web3FormsData.append("company", formData.company || "Not specified")
      web3FormsData.append("phone", formData.phone || "Not provided")
      web3FormsData.append("services", formData.services.join(", "))
      web3FormsData.append("budget", formData.budget || "Not specified")
      web3FormsData.append("timeline", formData.timeline || "Not specified")
      web3FormsData.append("project_details", formData.message)

      // Web3Forms configuration
      web3FormsData.append("redirect", `${window.location.origin}/thank-you`)
      web3FormsData.append("from_name", "DevMaster Portfolio")
      web3FormsData.append("autoresponse", "true")

      // Send to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit/", {
        method: "POST",
        body: web3FormsData
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitting(false)
        setIsSubmitted(true)

        // Reset form after 3 seconds
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
        throw new Error(result.message || "Failed to send message")
      }
    } catch (err) {
      setIsSubmitting(false)
      setError("An error occurred while sending the message. Please try again or Try Contacting on Social Media Channel.")
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
        className="w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
          <CardHeader className="relative">
            <Button variant="ghost" size="sm" className="absolute right-4 top-4" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
            <CardTitle className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
              Let's Work Together
            </CardTitle>
            <CardDescription className="dark:text-slate-300">
              Tell me about your project and let's create something amazing together.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mb-2 text-slate-800 dark:text-slate-100">
                    Message Sent Successfully! 🎉
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Thank you for reaching out! You'll receive a confirmation email, and I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {error && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4"
                    >
                      <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
                    </motion.div>
                  )}

                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="dark:text-slate-200">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        required
                        className="mt-1 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="dark:text-slate-200">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        required
                        className="mt-1 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company" className="dark:text-slate-200">
                        Company/Organization
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                        className="mt-1 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100"
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="dark:text-slate-200">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                        className="mt-1 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <Label className="text-base font-semibold dark:text-slate-200">Services Needed *</Label>
                    <div className="grid md:grid-cols-2 gap-3 mt-3">
                      {services.map((service) => (
                        <div key={service} className="flex items-center space-x-2">
                          <Checkbox
                            id={service}
                            checked={formData.services.includes(service)}
                            onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                          />
                          <Label
                            htmlFor={service}
                            className="text-sm font-normal dark:text-slate-300 cursor-pointer"
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
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="budget" className="dark:text-slate-200">
                        Project Budget
                      </Label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, budget: value }))}
                      >
                        <SelectTrigger className="mt-1 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent className="dark:bg-slate-800 dark:border-slate-600">
                          {budgetRanges.map((range) => (
                            <SelectItem
                              key={range}
                              value={range}
                              className="dark:text-slate-100 dark:focus:bg-slate-700"
                            >
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="timeline" className="dark:text-slate-200">
                        Project Timeline
                      </Label>
                      <Select
                        value={formData.timeline}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, timeline: value }))}
                      >
                        <SelectTrigger className="mt-1 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent className="dark:bg-slate-800 dark:border-slate-600">
                          {timelineOptions.map((option) => (
                            <SelectItem
                              key={option}
                              value={option}
                              className="dark:text-slate-100 dark:focus:bg-slate-700"
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
                    <Label htmlFor="subject" className="dark:text-slate-200">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData((prev) => ({ ...prev, subject: e.target.value }))}
                      required
                      className="mt-1 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100"
                      placeholder="E-commerce Website Development"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="dark:text-slate-200">
                      Project Details *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                      required
                      className="mt-1 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100"
                      rows={5}
                      placeholder="Please provide detailed information about your project, requirements, and any specific needs. The more details you provide, the better I can understand your vision and provide an accurate quote."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-500 dark:to-purple-500 hover:from-blue-700 hover:to-purple-700 dark:hover:from-cyan-600 dark:hover:to-purple-600 text-white py-3 font-medium"
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
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
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