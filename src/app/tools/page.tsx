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
  "Tailwind CSS": <BiLogoTailwindCss className="text-blue-400 text-[50px]" />,
  "Framer Motion": <BiPaint className="text-purple-500 text-[50px]" />,
  "HTML5": <BiCodeAlt className="text-orange-500 text-[50px]" />,
  "CSS3": <BiCodeAlt className="text-blue-500 text-[50px]" />,
  "GSAP": <BiPaint className="text-green-400 text-[50px]" />,
  "Flask": <BiServer className="text-gray-700 text-[50px]" />,
  "Django": <BiServer className="text-green-800 text-[50px]" />,

  // Software Development
  "Python": <BiLogoPython className="text-yellow-600 text-[50px]" />,
  "Node.js": <BiLogoNodejs className="text-green-600 text-[50px]" />,
  "Express.js": <BiServer className="text-gray-600 text-[50px]" />,
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
          features: ["Component-Based", "Virtual DOM", "One-way Data Binding", "JSX Support", "Rich Ecosystem"]
        },
        {
          name: "Next.js",
          description: "React framework for production that enables server-side rendering and static site generation.",
          features: ["Server-Side Rendering", "Static Site Generation", "API Routes", "File-based Routing", "Built-in CSS Support"]
        },
        {
          name: "TypeScript",
          description: "Strongly typed programming language that builds on JavaScript giving better tooling.",
          features: ["Static Type Checking", "IDE Support", "ES6 Features", "Interface Definitions", "Compile-time Errors"]
        },
        {
          name: "HTML5",
          description: "The latest evolution of the standard that defines HTML, with new elements and attributes.",
          features: ["Semantic Elements", "Audio/Video Support", "Canvas API", "Local Storage", "Form Validation"]
        },
        {
          name: "CSS3",
          description: "The latest evolution of the Cascading Style Sheets language with new capabilities.",
          features: ["Flexbox", "Grid", "Transitions", "Animations", "Variables"]
        },
        {
          name: "Tailwind CSS",
          description: "A utility-first CSS framework for rapid UI development without leaving your HTML.",
          features: ["Utility-First", "Responsive Design", "Dark Mode", "Custom Variants", "Low Bundle Size"]
        },
        {
          name: "Bootstrap",
          description: "A utility-first CSS framework for rapid UI development without leaving your HTML.",
          features: [
            "Grid System",
            "Pre-built Components",
            "Customizable Themes",
            "Responsive Layouts",
            "JavaScript Plugins"
          ]
        }, 
        {
          name: "Framer Motion",
          description: "A production-ready motion library for React that makes implementing animations easy.",
          features: ["Declarative Animations", "Gestures", "Layout Animations", "Exit Animations", "Variants Support"]
        },
        {
          name: "GSAP",
          description: "Professional-grade JavaScript animation library for creating high-performance animations.",
          features: ["Timeline", "ScrollTrigger", "Advanced Easing", "Path Animation", "Cross-Browser Support"]
        },
        {
          name: "Node.js",
          description: "JavaScript runtime built on Chrome's V8 JavaScript engine for backend development.",
          features: ["Non-blocking I/O", "Event-driven", "NPM Ecosystem", "Microservices", "Real-time Applications"]
        },
        {
          name: "Express.js",
          description: "Fast, unopinionated, minimalist web framework for Node.js for building APIs and web applications.",
          features: ["Middleware", "Routing", "Template Engines", "Error Handling", "HTTP Utility Methods"]
        },
        {
          name: "MongoDB",
          description: "NoSQL database that uses JSON-like documents with optional schemas for modern web applications.",
          features: ["Document-Oriented", "Horizontal Scaling", "Flexible Schema", "Aggregation Framework", "Indexing"]
        },
        {
          name: "PostgreSQL",
          description: "Powerful, open source object-relational database system for web applications.",
          features: ["ACID Compliance", "Complex Queries", "JSON Support", "Multi-Version Concurrency Control", "Extensibility"]
        },
        {
          name: "SQL",
          description: "Standard language for storing, manipulating, and retrieving data in relational databases.",
          features: ["Data Querying", "Data Manipulation", "Data Definition", "Data Control", "Joins & Relationships"]
        },
        {
          name: "SQLite",
          description: "C library that provides a lightweight disk-based database for web applications.",
          features: ["Self-contained", "Serverless", "Zero Configuration", "Cross-platform", "Reliable"]
        },
        {
          name: "Flask",
          description: "Lightweight WSGI web application framework in Python for building web applications.",
          features: ["Minimal", "Flexible", "Extensions", "Jinja2 Templates", "RESTful Request Dispatching"]
        },
        {
          name: "Django",
          description: "High-level Python web framework that encourages rapid development and clean design.",
          features: ["ORM", "Admin Interface", "Authentication", "URL Routing", "Template Engine"]
        }
      ]
    },
    {
      category: "software",
      items: [
        {
          name: "Python",
          description: "High-level, interpreted programming language with dynamic semantics for general programming.",
          features: ["Easy to Learn", "Extensive Libraries", "Data Science Support", "Cross-platform", "OOP Support"]
        },
        {
          name: "Node.js",
          description: "JavaScript runtime built on Chrome's V8 JavaScript engine for building server-side applications.",
          features: ["Non-blocking I/O", "NPM Ecosystem", "Fast Execution", "Cross-Platform", "Microservices Support"]
        },
        {
          name: "Express.js",
          description: "Fast, unopinionated, minimalist web framework for Node.js for building APIs and web applications.",
          features: ["Middleware", "Routing", "Template Engines", "Error Handling", "HTTP Utility Methods"]
        },
        {
          name: "MongoDB",
          description: "NoSQL database that uses JSON-like documents with optional schemas for modern applications.",
          features: ["Document-Oriented", "Horizontal Scaling", "Flexible Schema", "Aggregation Framework", "Indexing"]
        },
        {
          name: "PostgreSQL",
          description: "Powerful, open source object-relational database system with SQL compliance.",
          features: ["ACID Compliance", "Complex Queries", "JSON Support", "Multi-Version Concurrency Control", "Extensibility"]
        },
        {
          name: "SQL",
          description: "Standard language for storing, manipulating, and retrieving data in relational databases.",
          features: ["Data Querying", "Data Manipulation", "Data Definition", "Data Control", "Joins & Relationships"]
        },
        {
          name: "SQLite",
          description: "C library that provides a lightweight disk-based database for software applications.",
          features: ["Self-contained", "Serverless", "Zero Configuration", "Cross-platform", "Reliable"]
        },
        {
          name: "Git",
          description: "Distributed version control system for tracking changes in source code during development.",
          features: ["Branching", "Merging", "Distributed Development", "Speed", "Data Integrity"]
        },
        {
          name: "GitHub",
          description: "Platform for hosting and reviewing code, managing projects, and building software together.",
          features: ["Pull Requests", "Issue Tracking", "Actions", "Code Reviews", "Project Management"]
        },
        {
          name: "Docker",
          description: "Platform for developing, shipping, and running applications using containerization.",
          features: ["Containerization", "Image Versioning", "Isolation", "Portability", "Microservices Architecture"]
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
          features: ["Collaborative Editing", "Prototyping", "Component System", "Vector Networks", "Auto Layout"]
        },
        {
          name: "Adobe Photoshop",
          description: "Industry-standard photo editing software used for image manipulation and graphic design.",
          features: ["Layer-based Editing", "Smart Objects", "Filters", "Adjustment Layers", "Masking"]
        },
        {
          name: "Adobe Illustrator",
          description: "Vector graphics editor used for creating logos, icons, drawings, typography, and illustrations.",
          features: ["Vector Editing", "Pen Tool", "Pathfinder", "Type Tools", "Precise Transformations"]
        },
        {
          name: "Adobe XD",
          description: "Design tool for digital experiences, including websites and mobile apps.",
          features: ["Prototyping", "Responsive Resize", "Repeat Grid", "Voice Prototyping", "Components"]
        },
        {
          name: "Sketch",
          description: "Digital design app focused on user interface and user experience design for web and mobile.",
          features: ["Vector Editing", "Symbols", "Plugins", "Prototyping", "Export Options"]
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
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg p-3 bg-gray-100 dark:bg-gray-800">
                        {getIconForTool(tool.name)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{tool.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {tool.features.map((feature, i) => (
                            <span 
                              key={i} 
                              className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
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