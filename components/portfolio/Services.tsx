
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, MessageSquare, Globe, Coins, Shield, FileCode } from "lucide-react"
import { LucideIcon } from "lucide-react" // Added for TypeScript typing

// Define interface for service to ensure TypeScript compatibility
interface Service {
    title: string
    description: string
    icon: LucideIcon // Type for Lucide icons
    features: string[]
    price: string
}

const services: Service[] = [
    {
        title: "Full-Stack Web Development",
        description: "Complete web application development from frontend to backend with modern technologies.",
        icon: Globe,
        features: ["React/Next.js Development", "API Development", "Database Design", "Cloud Deployment"], // Fixed: Removed comma in string (line 12)
        price: "Starting at $5,000",
    },
    {
        title: "Blockchain Development",
        description: "Smart contracts, DeFi protocols, and Web3 application development.",
        icon: Coins,
        features: ["Smart Contract Development", "DeFi Creation", "NFT Marketplace", "Web3 Integration"],
        price: "Starting at $8,000",
    },
    {
        title: "Cybersecurity Consulting",
        description: "Comprehensive security assessments and penetration testing services.",
        icon: Shield,
        features: ["Security Audits", "Penetration Testing", "Vulnerability Assessment", "Security Training"],
        price: "Starting at $3,000",
    },
    {
        title: "Technical Consulting",
        description: "Architecture design, code review, and technical strategy consultation.",
        icon: FileCode,
        features: ["Architecture Review", "Code Auditing", "Performance Optimization", "Team Training"],
        price: "Starting at $2,000",
    },
]

interface ServicesProps {
    setShowContactForm: (value: boolean) => void
    setSelectedService: (value: string) => void
}

export default function Services({ setShowContactForm, setSelectedService }: ServicesProps) {
    return (
        <motion.section
            id="services"
            className="py-20 px-6 lg:px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="container mx-auto px-6 lg:px-4">
                <motion.h2
                    className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-slate-900 to-orange-900 dark:from-white dark:to-orange-300 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Professional Services
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group"
                        >
                            <Card className="text-center p-8 h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-500 group-hover:border-blue-300 dark:group-hover:border-cyan-400 relative overflow-hidden">
                                <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 dark:from-cyan-600/10 dark:to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative z-10">
                                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
                                        <service.icon className="w-16 h-16 text-blue-600 dark:text-cyan-400 mx-auto mb-6" />
                                    </motion.div>
                                    <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-white">{service.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-300 mb-6">{service.description}</p>

                                    <div className="space-y-2 mb-6">
                                        {service.features.map((feature, featureIndex) => (
                                            <div
                                                key={featureIndex}
                                                className="flex items-center justify-center gap-2 text-sm text-slate-600 dark:text-slate-300"
                                            >
                                                <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-6">{service.price}</div>

                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Button
                                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 hover:from-blue-700 hover:to-purple-700 dark:hover:from-cyan-600 dark:hover:to-purple-600 text-white opacity-0 group-hover:opacity-100 transition-all duration-300" // Fixed: Completed dark mode hover gradient (line 68)
                                            onClick={() => {
                                                setSelectedService(service.title)
                                                setShowContactForm(true)
                                            }}
                                        >
                                            <MessageSquare className="w-4 h-4 mr-2" />
                                            Get Quote
                                        </Button>
                                    </motion.div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}
