import { motion } from "framer-motion"
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge" // Correct import for Badge
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"; // Ensure this import is present

const projects = [
    {
        title: "Glocal Travel",
        description:
            "Contributed to Front End of a modern web app for spiritual journeys, featuring Hajj and Umrah packages with a seamless user experience.",
        tech: ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "Lucide React"],
        category: "Full-Stack",
        image: "https://sjc.microlink.io/xJELiKL8C-JYkw01BrOmgqV0W6MGwPFnsITauVjMvA8fp8nImdW9WbjHdkcSzKB0EXPGbTCDFgFMD0VKXTWtyQ.jpeg",
        github: "https://github.com/mistershah-numl/G-Local-Travels",
        demo: "https://g-local-travels.vercel.app/",
        featured: true,
    },
    {
        title: "Assessment Tracker",
        description:
            "Contributed to Front End of 'Assessment Tracker' which is a tool for team assessments and leadership development.",
        tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel"],
        category: "Full-Stack",
        image: "https://api.microlink.io?url=https://leadbetter-delta.vercel.app/&screenshot=true&embed=screenshot.url",
        github: "https://github.com/mistershah-numl/Assessment-Tracker",
        demo: "https://leadbetter-delta.vercel.app/",
        featured: true,
    },
    {
        title: "React GPT-3 Static Website",
        description:
            "A simple one-page SPA built with React, showcasing an elegant design and deployed on GitHub Pages.",
        tech: ["React", "HTML", "CSS", "SCSS", "JavaScript"],
        category: "Front-End",
        image: "https://api.microlink.io?url=https://mistershah-numl.github.io/react-gpt3/&screenshot=true&embed=screenshot.url",
        github: "https://github.com/mistershah-numl/react-gpt3",
        demo: "https://mistershah-numl.github.io/react-gpt3/",
        featured: true,
    },
    /*
    {
        title: "E-commerce Microservices",
        description: "Scalable e-commerce platform built with microservices architecture and containerized deployment.",
        tech: ["Node.js", "React", "MongoDB", "Docker", "Kubernetes"],
        category: "Full-Stack",
        image: "/placeholder.svg?height=300&width=500",
        github: "#",
        demo: "#",
        featured: true,
    },
      {
          title: "NFT Marketplace",
          description: "Full-featured NFT marketplace with minting, trading, and royalty distribution capabilities.",
          tech: ["Next.js", "Solidity", "IPFS", "Ethers.js", "Tailwind"],
          category: "Blockchain",
          image: "/placeholder.svg?height=300&width=500",
          github: "#",
          demo: "#",
          featured: false,
      },
      {
          title: "Penetration Testing Suite",
          description: "Automated penetration testing tools with comprehensive reporting and vulnerability tracking.",
          tech: ["Python", "Django", "PostgreSQL", "Docker", "Linux"],
          category: "Cybersecurity",
          image: "/placeholder.svg?height=300&width=500",
          github: "#",
          demo: "#",
          featured: false,
      },
      {
          title: "Real-time Chat Application",
          description: "Secure real-time messaging platform with end-to-end encryption and file sharing.",
          tech: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
          category: "Full-Stack",
          image: "/placeholder.svg?height=300&width=500", // Fixed: Corrected invalid image URL
          github: "#",
          demo: "#",
          featured: false,
      },*/
]

export default function Projects() {
    return (
        <motion.section
            id="projects"
            className="py-20 px-6 lg:px-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="container mx-auto px-6 lg:px-8">
                <motion.h2
                    className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-slate-900 to-green-900 dark:from-slate-100 dark:to-green-300 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Featured Projects
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group"
                        >
                            <Card className="overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-500 group-hover:border-blue-300 dark:group-hover:border-cyan-400">
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        width={500}
                                        height={300}
                                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <Badge className="absolute top-4 left-4 bg-blue-600 dark:bg-cyan-500 text-white">
                                        {project.category}
                                    </Badge>
                                    {project.featured && (
                                        <Badge className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                                            <Star className="w-3 h-3 mr-1" />
                                            Featured
                                        </Badge>
                                    )}

                                    {/* Hover Buttons */}
                                    <motion.div
                                        className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        initial={{ scale: 0.8 }}
                                        whileHover={{ scale: 1 }}
                                    >
                                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                            <Button asChild size="sm" className="bg-white text-slate-900 hover:bg-slate-100">
                                                <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="w-4 h-4 mr-2" />
                                                    Live Demo
                                                </Link>
                                            </Button>
                                        </motion.div>
                                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                            <Button
                                                asChild
                                                size="sm"
                                                variant="outline"
                                                className="bg-slate-900/80 text-white border-white hover:bg-slate-800"
                                            >
                                                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                                    <Github className="w-4 h-4 mr-2" />
                                                    Code
                                                </Link>
                                            </Button>
                                        </motion.div>
                                    </motion.div>
                                </div>

                                <CardHeader>
                                    <CardTitle className="text-slate-800 dark:text-white">{project.title}</CardTitle>
                                    <CardDescription className="text-slate-600 dark:text-slate-300">{project.description}</CardDescription>
                                </CardHeader>

                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <Badge
                                                key={tech}
                                                variant="outline"
                                                className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-white border-slate-300 dark:border-slate-600"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
