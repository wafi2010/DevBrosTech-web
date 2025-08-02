"use client"
import Img from 'next/image';
import { motion } from "framer-motion"
import { useState } from "react"
import { Globe, Server, Palette, PenTool, Database, Code, Monitor, Cpu, Figma, Framer, Image, GitBranch, Github, CheckCircle, FileCode, Terminal as TerminalIcon, Box, ArrowRight, Info } from "lucide-react"
import { 
  BiLogoReact , BiLogoTypescript, BiLogoTailwindCss, 
  BiLogoPython, BiLogoNodejs, BiLogoMongodb, BiLogoPostgresql, 
  BiLogoGit, BiLogoGithub, BiLogoDocker, BiLogoFigma 
} from "react-icons/bi";
import { BiCodeAlt, BiServer, BiData, BiPaint } from "react-icons/bi";
// import nextLogo from '@/public/nextjs-logo.svg';
import Link from "next/link"
import nextLogo from '../../../public/nextjs.png';


export default function Tools() {
  const [filter, setFilter] = useState<string | null>(null)
  const [showCategoryInfo, setShowCategoryInfo] = useState<string | null>(null)
  
  const categories = [
    {
      id: "web",
      name: "Web Development",
      icon: <Globe className="h-6 w-6 text-blue-500" />,
      description: "Our web development expertise spans front-end and back-end technologies. We create responsive, fast, and modern websites that drive engagement and conversions.",
      link: "/web-development"
    },
    {
      id: "software",
      name: "Software Development",
      icon: <Cpu className="h-6 w-6 text-green-500" />,
      description: "We build custom software solutions that automate processes, improve efficiency, and solve complex business problems using the latest technologies.",
      link: "/software-development"
    },
    {
      id: "design",
      name: "Design",
      icon: <Palette className="h-6 w-6 text-purple-500" />,
      description: "Our design process combines creativity with user experience principles to create visually stunning interfaces that are intuitive and engaging.",
      link: "/graphic-design"
    }
  ]

  const getIconForTool = (toolName: string) => {
const icons: Record<string, JSX.Element> = {
  // Web Development
  "React": <BiLogoReact className="text-blue-500 text-[50px]" />,
  "Next.js": <Img src={nextLogo} alt="Next.js Logo" width={100} height={100} />,
  "TypeScript": <BiLogoTypescript className="text-blue-600 text-[50px]" />,
  "Flask": <BiServer className="text-gray-700 text-[50px]" />,
  "Django": <BiServer className="text-green-800 text-[50px]" />,
  "Node.js": <BiLogoNodejs className="text-green-600 text-[50px]" />,
  "Express.js": <BiServer className="text-gray-600 text-[50px]" />,
  // Software Development
  "Python": <BiLogoPython className="text-yellow-600 text-[50px]" />,
  "MongoDB": <BiLogoMongodb className="text-green-500 text-[50px]" />,
  "PostgreSQL": <BiLogoPostgresql className="text-blue-700 text-[50px]" />,
  "SQLite": <BiData className="text-blue-300 text-[50px]" />,
  "SQL": <BiData className="text-orange-400 text-[50px]" />,
  "Git": <BiLogoGit className="text-orange-600 text-[50px]" />,
  "GitHub": <BiLogoGithub className="text-gray-700 dark:text-gray-300 text-[50px]" />,
  "Docker": <BiLogoDocker className="text-blue-500 text-[50px]" />,

  // Design
  "Figma": <BiLogoFigma className="text-purple-600 text-[50px]" />,
  "Adobe Photoshop": <BiPaint className="text-blue-800 text-[50px]" />,
  "Adobe Illustrator": <BiPaint className="text-orange-600 text-[50px]" />,
  "Adobe XD": <BiPaint className="text-pink-600 text-[50px]" />,
  "Sketch": <BiPaint className="text-yellow-500 text-[50px]" />,
};

    return icons[toolName] || <Monitor className="h-10 w-10 text-gray-500" />
  }

  const tools = [
    {
      category: "web",
      items: [
        {
          name: "React",
          description: "A JavaScript library for building user interfaces with component-based architecture.",
        },
        {
          name: "Next.js",
          description: "React framework for production that enables server-side rendering and static site generation.",
        },
        {
          name: "TypeScript",
          description: "Strongly typed programming language that builds on JavaScript giving better tooling.",
        },
        {
          name: "Node.js",
          description: "JavaScript runtime built on Chrome's V8 JavaScript engine for backend development.",
        },
        {
          name: "Express.js",
          description: "Fast, unopinionated, minimalist web framework for Node.js for building APIs and web applications.",
        },
        {
          name: "MongoDB",
          description: "NoSQL database that uses JSON-like documents with optional schemas for modern web applications.",
        },
        {
          name: "PostgreSQL",
          description: "Powerful, open source object-relational database system for web applications.",
        },
        {
          name: "SQL",
          description: "Standard language for storing, manipulating, and retrieving data in relational databases.",
        },
        {
          name: "SQLite",
          description: "C library that provides a lightweight disk-based database for web applications.",
        },
        {
          name: "Flask",
          description: "Lightweight WSGI web application framework in Python for building web applications.",
        },
        {
          name: "Django",
          description: "High-level Python web framework that encourages rapid development and clean design.",
        }
      ]
    },
    {
      category: "software",
      items: [
        {
          name: "Python",
          description: "High-level, interpreted programming language with dynamic semantics for general programming.",
        },
        {
          name: "MongoDB",
          description: "NoSQL database that uses JSON-like documents with optional schemas for modern applications.",
        },
        {
          name: "PostgreSQL",
          description: "Powerful, open source object-relational database system with SQL compliance.",
        },
        {
          name: "SQL",
          description: "Standard language for storing, manipulating, and retrieving data in relational databases.",
        },
        {
          name: "SQLite",
          description: "C library that provides a lightweight disk-based database for software applications.",
        },
        {
          name: "Flask",
          description: "Lightweight WSGI web application framework in Python for building software applications.",
          features: ["Minimal", "Flexible", "Extensions", "RESTful Request Dispatching", "Unit Testing Support"]
        },
        {
          name: "Django",
          description: "High-level Python web framework that encourages rapid software development.",
          features: ["ORM", "Admin Interface", "Authentication", "URL Routing", "Security Features"]
        }
      ]
    },
    {
      category: "design",
      items: [
        {
          name: "Figma",
          description: "Cloud-based design tool for interface design with real-time collaboration features.",
        },
        {
          name: "Adobe Photoshop",
          description: "Industry-standard photo editing software used for image manipulation and graphic design.",
        },
        {
          name: "Adobe Illustrator",
          description: "Vector graphics editor used for creating logos, icons, drawings, typography, and illustrations.",
        },
        {
          name: "Adobe XD",
          description: "Design tool for digital experiences, including websites and mobile apps.",
        },
        {
          name: "Sketch",
          description: "Digital design app focused on user interface and user experience design for web and mobile.",
        }
      ]
    }
  ]

  const filteredTools = filter 
    ? tools.filter(category => category.category === filter)
    : tools

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const handleCategoryClick = (categoryId: string) => {
    setFilter(categoryId);
    setShowCategoryInfo(categoryId);
  };

  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text mb-6">Our Tools</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We use cutting-edge technologies to create exceptional digital experiences. Our toolset enables us to deliver robust, scalable, and visually stunning solutions.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            onClick={() => {setFilter(null); setShowCategoryInfo(null);}}
            className={`px-6 py-3 rounded-full font-medium transition-colors ${
              filter === null 
                ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <span className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              All Tools
            </span>
          </button>
          
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2 ${
                filter === category.id 
                  ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Category Info Panel */}
        {showCategoryInfo && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-12 p-6 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"
          >
            {categories.map((category) => (
              category.id === showCategoryInfo && (
                <div key={category.id} className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="rounded-full bg-primary/10 p-6 flex-shrink-0">
                    <div className="h-14 w-14 flex items-center justify-center">
                      {category.icon}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{category.description}</p>
                    <Link 
                      href={category.link} 
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                    >
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              )
            ))}
          </motion.div>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-20"
        >
          {filteredTools.map((category) => (
            <motion.div 
              key={category.category}
              variants={itemVariants}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-center capitalize">
                {categories.find(c => c.id === category.category)?.name || category.category} Tools
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    variants={itemVariants}
                    className="card hover:border-primary/50 hover-lift"
                  >
                    <div className="flex items-center flex-col gap-6">
                      <div className="rounded-lg p-3 bg-gray-100 dark:bg-gray-800">
                        {getIconForTool(tool.name)}
                      </div>
                      <div className="flex items-center flex-col gap-4 text-center justify-center">
                        <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{tool.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  )
} 
