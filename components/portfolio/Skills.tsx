
import { motion } from "framer-motion"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import {
    Globe,
    Server,
    Coins,
    Shield,
    Database,
    Wrench,
    Code2,
    Layout,
    FileCode,
    Palette,
    Layers,
    Code,
    Zap,
    Network,
    Package,
    Bug,
    ShieldCheck,
    Wifi,
    Key,
    Lock,
    HardDrive,
    Cloud,
    GitBranch,
    Container,
    Terminal,
    Settings,
    Cpu,
} from "lucide-react"

const skills = {
    frontend: [
        { name: "React", level: 95, icon: Code2 },
        { name: "Next.js", level: 90, icon: Layout },
        { name: "TypeScript", level: 88, icon: FileCode },
        { name: "Tailwind CSS", level: 92, icon: Palette },
        //{ name: "Vue.js", level: 85, icon: Layers },
    ],
    backend: [
        { name: "Node.js", level: 93, icon: Server },
        { name: "Python", level: 90, icon: Code },
        { name: "Express.js", level: 88, icon: Zap },
        { name: "Django", level: 85, icon: Package },
        //{ name: "GraphQL", level: 82, icon: Network },
    ],
    blockchain: [
        { name: "Solidity", level: 90, icon: Coins },
        { name: "Web3.js", level: 88, icon: Globe },
        { name: "Smart Contracts", level: 92, icon: FileCode },
        //{ name: "DeFi", level: 85, icon: Zap },
        { name: "Ethereum", level: 90, icon: Cpu },
    ],
    cybersecurity: [
        { name: "Penetration Testing", level: 88, icon: Bug },
        //{ name: "OWASP", level: 90, icon: ShieldCheck },
        { name: "Network Security", level: 85, icon: Wifi },
        { name: "Cryptography", level: 87, icon: Key },
        { name: "Security Auditing", level: 92, icon: Lock },
    ],
    database: [
        { name: "PostgreSQL", level: 90, icon: Database },
        { name: "MongoDB", level: 88, icon: HardDrive },
        //{ name: "Redis", level: 85, icon: Zap },
        { name: "Supabase", level: 87, icon: Cloud },
        { name: "Firebase", level: 83, icon: Layers },
    ],
    tools: [
        { name: "Git", level: 95, icon: GitBranch },
        { name: "Docker", level: 88, icon: Container },
        { name: "AWS", level: 85, icon: Cloud },
        { name: "Linux", level: 90, icon: Terminal },
        //{ name: "Kubernetes", level: 82, icon: Settings },
    ],
}

export default function Skills() {
    return (
        <motion.section
            id="skills"
            className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className="text-3xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-gray-900 to-purple-900 dark:from-gray-100 dark:to-purple-300 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Technical Expertise
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {Object.entries(skills).map(([category, skillList], categoryIndex) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: categoryIndex * 0.1, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="w-full"
                        >
                            <Card className="p-4 sm:p-6 lg:p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-blue-300 dark:hover:border-cyan-400 transition-all duration-300 h-full">
                                <CardHeader className="pb-4 sm:pb-6 text-center lg:text-left">
                                    <CardTitle className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 text-xl sm:text-2xl lg:text-2xl">
                                        {category === "frontend" && <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-cyan-400" />}
                                        {category === "backend" && <Server className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" />}
                                        {category === "blockchain" && <Coins className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" />}
                                        {category === "cybersecurity" && <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 dark:text-red-400" />}
                                        {category === "database" && <Database className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 dark:text-orange-400" />}
                                        {category === "tools" && <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" />}
                                        <span className="text-gray-800 dark:text-gray-100">
                                            {category.charAt(0).toUpperCase() + category.slice(1)}
                                        </span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4 sm:space-y-6">
                                        {skillList.map((skill, index) => (
                                            <motion.div
                                                key={skill.name}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                                viewport={{ once: true }}
                                                className="group"
                                            >
                                                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                                                    <motion.div
                                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                                        className="p-1.5 sm:p-2 rounded-lg bg-gray-100 dark:bg-gray-700 group-hover:bg-blue-100 dark:group-hover:bg-gray-600 transition-colors duration-300"
                                                    >
                                                        <skill.icon className="w-4 h-4 sm:w-4 sm:h-4 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300" />
                                                    </motion.div>
                                                    <div className="flex-1">
                                                        <div className="flex justify-between items-center">
                                                            <span className="font-medium text-gray-700 dark:text-gray-200 text-sm sm:text-base">{skill.name}</span>
                                                            <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2 ml-8 sm:ml-11">
                                                    <motion.div
                                                        className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-500 dark:to-purple-500 h-1.5 sm:h-2 rounded-full"
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${skill.level}%` }}
                                                        transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
                                                        viewport={{ once: true }}
                                                    />
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}
