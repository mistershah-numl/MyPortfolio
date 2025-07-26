import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, Github, ArrowRight } from "lucide-react"
import Image from "next/image"

interface HeroProps {
    currentSpecialization: number
    specializations: string[]
    setShowContactForm: (value: boolean) => void
}

export default function Hero({ currentSpecialization, specializations, setShowContactForm }: HeroProps) {
    return (
        <section className="pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8 min-h-[70vh] flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                    {/* Left Side - Content */}
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                        <motion.h1
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 dark:from-slate-100 dark:via-cyan-300 dark:to-purple-300 bg-clip-text text-transparent"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            I am Muhammad Shah
                        </motion.h1>

                        <div className="h-12 sm:h-14 lg:h-16 mb-6 sm:mb-8">
                            <AnimatePresence mode="wait">
                                <motion.h2
                                    key={currentSpecialization}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-600 dark:text-cyan-400"
                                >
                                    {specializations[currentSpecialization]}
                                </motion.h2>
                            </AnimatePresence>
                        </div>

                        <motion.p
                            className="text-base sm:text-lg lg:text-lg text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            Crafting secure, scalable, and innovative digital solutions that push the boundaries of technology.
                            Specialized in building the future of web with blockchain integration and enterprise-grade security.
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-3 sm:gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    size="lg"
                                    className="text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-500 dark:to-purple-500 hover:from-blue-700 hover:to-purple-700 dark:hover:from-cyan-600 dark:hover:to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                                    onClick={() => setShowContactForm(true)}
                                >
                                    <Mail className="w-4 h-4 mr-2" />
                                    Get In Touch
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-300 dark:border-slate-600 hover:bg-white/80 dark:hover:bg-slate-700/80 hover:border-blue-400 dark:hover:border-cyan-400 transition-all duration-300"
                                    asChild
                                >
                                    <a href="https://github.com/mistershah-numl" target="_blank" rel="noopener noreferrer">
                                        <Github className="w-4 h-4 mr-2" />
                                        View GitHub
                                    </a>
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center"
                    >
                        <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 dark:from-cyan-400 dark:via-purple-500 dark:to-blue-400 rounded-2xl blur-2xl opacity-30 dark:opacity-40"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    rotate: [0, 180, 360],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "linear",
                                }}
                            />
                            <motion.div
                                className="relative z-10 w-56 sm:w-64 lg:w-80 h-72 sm:h-80 lg:h-96 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-700 shadow-2xl"
                                initial={{ rotate: -5 }}
                                whileHover={{
                                    rotate: 0,
                                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                                    borderColor: "#3b82f6",
                                }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <Image
                                    src="/portfolio1.png"
                                    alt="Professional Portrait"
                                    width={224}
                                    height={288}
                                    className="w-full h-full object-cover"
                                />
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent dark:from-cyan-600/20"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
