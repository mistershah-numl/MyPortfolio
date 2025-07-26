
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Code2, Coins, Shield, Cloud, Award, Users, Star, Zap } from "lucide-react"

export default function About() {
    return (
        <motion.section
            id="about"
            className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className="text-3xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-gray-900 to-blue-900 dark:from-gray-100 dark:to-cyan-300 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    About Me
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-gray-800 dark:text-gray-100">
                            Building Tomorrow's Digital Infrastructure
                        </h3>
                        <p className="text-base sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                            With over 6 years of experience in cutting-edge technology development, I specialize in creating secure,
                            scalable applications that solve complex real-world problems. My expertise spans across modern web
                            technologies, blockchain protocols, and enterprise cybersecurity.
                        </p>
                        <p className="text-base sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                            I'm passionate about emerging technologies and their transformative potential. Whether developing DeFi
                            protocols, securing enterprise applications, or creating intuitive user experiences, I bring a
                            comprehensive, security-first approach to every project.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            {[
                                { icon: Award, text: "6+ Years Experience", color: "text-blue-600 dark:text-cyan-400" },
                                { icon: Users, text: "100+ Projects", color: "text-purple-600 dark:text-purple-400" },
                                { icon: Star, text: "50+ Happy Clients", color: "text-green-600 dark:text-green-400" },
                                { icon: Zap, text: "24/7 Support", color: "text-orange-600 dark:text-orange-400" },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center gap-3"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <item.icon className={`w-6 h-6 ${item.color}`} />
                                    <span className="text-gray-700 dark:text-gray-200 font-medium">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6"
                    >
                        {[
                            {
                                icon: Code2,
                                title: "Full-Stack Development",
                                desc: "Modern web applications with cutting-edge technologies",
                            },
                            { icon: Coins, title: "Blockchain Solutions", desc: "Smart contracts, DeFi protocols, and Web3 apps" },
                            { icon: Shield, title: "Cybersecurity", desc: "Enterprise security audits and penetration testing" },
                            { icon: Cloud, title: "Cloud Architecture", desc: "Scalable cloud solutions and DevOps practices" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                                }}
                            >
                                <Card className="text-center p-4 sm:p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-cyan-400 transition-all duration-300">
                                    <item.icon className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 dark:text-cyan-400 mx-auto mb-3 sm:mb-4" />
                                    <h4 className="font-semibold mb-2 text-base sm:text-lg text-gray-800 dark:text-gray-100">{item.title}</h4>
                                    <p className="text-sm sm:text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}
