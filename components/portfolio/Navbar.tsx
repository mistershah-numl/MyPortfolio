
"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Download, Menu, X } from "lucide-react"
import Link from "next/link"

interface NavbarProps {
    setShowContactForm: (value: boolean) => void
    setSelectedService: (value: string) => void
}

export default function Navbar({ setShowContactForm, setSelectedService }: NavbarProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const hamburgerRef = useRef<HTMLButtonElement>(null)

    // Close menu on outside click
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                isMobileMenuOpen &&
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                hamburgerRef.current &&
                !hamburgerRef.current.contains(event.target as Node)
            ) {
                setIsMobileMenuOpen(false)
            }
        }
        document.addEventListener("mousedown", handleOutsideClick)
        return () => document.removeEventListener("mousedown", handleOutsideClick)
    }, [isMobileMenuOpen])

    const navItems = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Services", href: "#services" },
        {
            name: "Contact",
            href: "#contact",
            action: () => {
                setSelectedService("") // Explicitly set empty for navbar contact
                setShowContactForm(true)
            },
        },
    ]

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 w-full bg-white/80 dark:bg-gray-900/90 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 z-50 transition-all duration-300 py-3"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-4">
                <div className="flex items-center justify-between h-12">
                    <motion.div
                        className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent"
                        whileTap={{ scale: 0.95 }}
                    >
                        {"<"}MisterShah{" />"}
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex space-x-6 justify-center flex-grow items-center">
                        {navItems.map((item) => (
                            <motion.div
                                key={item.name}
                                className="relative text-base text-gray-700 dark:text-gray-300"
                                whileTap={{ scale: 0.95 }}
                            >
                                {item.action ? (
                                    <button
                                        onClick={item.action}
                                        className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-300"
                                    >
                                        {item.name}
                                        <motion.div
                                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400"
                                            whileHover={{ width: "100%" }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </button>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-300"
                                    >
                                        {item.name}
                                        <motion.div
                                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400"
                                            whileHover={{ width: "100%" }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </Link>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Side: Theme Toggle and Resume (Desktop Only) */}
                    <div className="flex items-center gap-2 sm:gap-4">
                        <ThemeToggle />
                        <motion.div whileTap={{ scale: 0.95 }} className="hidden lg:block">
                            <Button
                                variant="outline"
                                size="sm"
                                className="px-4 py-2 text-base bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-300 dark:border-gray-600 hover:bg-white/80 dark:hover:bg-gray-700/80"
                                asChild
                            >
                                <a href="/MuhammadShah-July-2025-semicolon.pdf" download>
                                    <Download className="w-4 h-4 mr-2" />
                                    Resume
                                </a>
                            </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                            <Button
                                ref={hamburgerRef}
                                variant="ghost"
                                size="sm"
                                className="lg:hidden p-2 rounded-full bg-white/20 dark:bg-gray-800/20 hover:bg-blue-100 dark:hover:bg-gray-700/30 transition-all duration-300"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                            >
                                {isMobileMenuOpen ? (
                                    <motion.div
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300" />
                                    </motion.div>
                                )}
                            </Button>
                        </motion.div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <motion.div
                    ref={menuRef}
                    className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"} absolute top-full right-0 w-64 max-w-[75vw] bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-l-2xl shadow-xl border-l border-b border-gray-200 dark:border-gray-700 z-50 overflow-hidden`}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : 100 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    {navItems.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                        >
                            {item.action ? (
                                <button
                                    onClick={() => {
                                        item.action()
                                        setIsMobileMenuOpen(false)
                                    }}
                                    className="block w-full text-left px-4 py-3 text-base text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800/50 transition-colors duration-200 border-b border-gray-200/50 dark:border-gray-700/50"
                                >
                                    {item.name}
                                </button>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="block px-4 py-3 text-base text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800/50 transition-colors duration-200 border-b border-gray-200/50 dark:border-gray-700/50"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            )}
                        </motion.div>
                    ))}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
                    >
                        <a
                            href="/MuhammadShah-July-2025-semicolon.pdf"
                            download
                            className="block w-full text-left px-4 py-3 text-base text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800/50 transition-colors duration-200 border-b border-gray-200/50 dark:border-gray-700/50"
                        >
                            <motion.div whileTap={{ scale: 0.95 }} className="flex items-center gap-2">
                                <Download className="w-5 h-5" />
                                Resume
                            </motion.div>
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </motion.nav>
    )
}
