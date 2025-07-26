
import { AnimatePresence } from "framer-motion"
import { ContactForm } from "@/components/contact-form"

interface ContactFormModalProps {
    showContactForm: boolean
    setShowContactForm: (value: boolean) => void
    selectedService?: string // Make optional to handle navbar case
}

export default function ContactFormModal({
    showContactForm,
    setShowContactForm,
    selectedService = "", // Default to empty string
}: ContactFormModalProps) {
    return (
        <AnimatePresence>
            {showContactForm && (
                <ContactForm
                    isOpen={showContactForm}
                    onClose={() => setShowContactForm(false)}
                    selectedService={selectedService}
                />
            )}
        </AnimatePresence>
    )
}
