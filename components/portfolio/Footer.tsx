import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-4 bg-gray-900 dark:bg-gray-950 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 text-center md:text-left">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
                            <Link href="/">
                                {"<"}MisterShah{" />"}
                            </Link>
                        </h3>
                        <p className="text-gray-400 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                            Building the future of web with cutting-edge technology and innovative solutions.
                        </p>
                        <div className="flex justify-center md:justify-start gap-3 sm:gap-4 flex-wrap">
                            <motion.a
                                href="https://github.com/mistershah-numl"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-cyan-400 transition-colors duration-300"
                            >
                                <Github className="w-6 h-6 sm:w-6 sm:h-6" />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/muhammadshah786"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-cyan-400 transition-colors duration-300"
                            >
                                <Linkedin className="w-6 h-6 sm:w-6 sm:h-6" />
                            </motion.a>
                            <motion.a
                                href="mailto:muhammadshah.10226@gmail.com"
                                whileHover={{ scale: 1.2, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-cyan-400 transition-colors duration-300"
                            >
                                <Mail className="w-6 h-6 sm:w-6 sm:h-6" />
                            </motion.a>
                            <motion.a
                                href="https://wa.me/923209700229"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-cyan-400 transition-colors duration-300"
                            >
                                <MessageCircle className="w-6 h-6 sm:w-6 sm:h-6" />
                            </motion.a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3 sm:mb-4 text-white text-base sm:text-lg">Services</h4>
                        <ul className="space-y-1 sm:space-y-2 text-gray-400 dark:text-gray-300 text-sm sm:text-base">
                            <li>
                                <a href="#services" className="hover:text-white dark:hover:text-cyan-400 transition-colors">
                                    Web Development
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-white dark:hover:text-cyan-400 transition-colors">
                                    Blockchain
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-white dark:hover:text-cyan-400 transition-colors">
                                    Cybersecurity
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-white dark:hover:text-cyan-400 transition-colors">
                                    Consulting
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3 sm:mb-4 text-white text-base sm:text-lg">Technologies</h4>
                        <ul className="space-y-1 sm:space-y-2 text-gray-400 dark:text-gray-300 text-sm sm:text-base">
                            <li>
                                <a href="https://www.contentful.com/blog/next-js-vs-react/" target="_blank" rel="noopener noreferrer" className="hover:text-white dark:hover:text-cyan-400 transition-colors">
                                    React & Next.js
                                </a>
                            </li>
                            <li>
                                <a href="https://kinsta.com/blog/nodejs-vs-python/" target="_blank" rel="noopener noreferrer" className="hover:text-white dark:hover:text-cyan-400 transition-colors">
                                    Node.js & Python
                                </a>
                            </li>
                            <li>
                                <a href="https://soliditylang.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white dark:hover:text-cyan-400 transition-colors">
                                    Solidity & Web3
                                </a>
                            </li>
                            <li>
                                <a href="https://aws.amazon.com/devops/what-is-devops/" target="_blank" rel="noopener noreferrer" className="hover:text-white dark:hover:text-cyan-400 transition-colors">
                                    Cloud & DevOps
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3 sm:mb-4 text-white text-base sm:text-lg">Contact</h4>
                        <ul className="space-y-1 sm:space-y-2 text-white text-sm sm:text-base">
                            <li>muhammadshah.10226@gmail.com</li>
                            <li>+923209700229</li>
                            <li>Islamabad, Pakistan</li>
                            <li>Available 24/7</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 dark:border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 dark:text-gray-300 text-sm sm:text-base">
                    <p>
                        © {new Date().getFullYear()} MisterShah. All rights reserved. Built with ❤️ and cutting-edge technology.
                    </p>
                </div>
            </div>
        </footer>
    )
}