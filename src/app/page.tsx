"use client"

import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Terminal, Code, Layers, Zap, Users, Clock, Check, MousePointer } from "lucide-react"
import { useRef, useState, useEffect } from "react"
import Head from "next/head"
// import Logo from '../../public/logo.png'

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const targetRef = useRef(null)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  // Hero carousel text
  const heroTexts = [
    "Creating Digital Excellence",
    "Building Tomorrow's Web",
    "Innovative Solutions",
    "Turning Ideas into Reality"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroTexts.length)
    }, 3000)
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )
    
    if (targetRef.current) {
      observer.observe(targetRef.current)
    }
    
    return () => {
      clearInterval(interval)
      if (targetRef.current) {
        observer.unobserve(targetRef.current)
      }
    }
  }, [heroTexts.length])
  
  const features = [
    {
      icon: <Users className="h-10 w-10 text-blue-500" />,
      title: "Expert Team",
      description: "Our team consists of experienced developers, designers, and strategists passionate about creating exceptional digital products."
    },
    {
      icon: <Layers className="h-10 w-10 text-purple-500" />,
      title: "Quality Work",
      description: "We pride ourselves on delivering high-quality, well-tested, and robust solutions that exceed our clients' expectations."
    },
    {
      icon: <Clock className="h-10 w-10 text-green-500" />,
      title: "Fast Delivery",
      description: "Our efficient workflows and processes ensure that we deliver projects on time without compromising on quality."
    },
    {
      icon: <Zap className="h-10 w-10 text-yellow-500" />,
      title: "24/7 Support",
      description: "We provide ongoing support and maintenance to ensure your digital products remain up-to-date and perform optimally."
    }
  ]

  const scrollToContent = () => {
    const element = document.getElementById('services-section')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>   
    <main>
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden hero-gradient">
        <div className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-20">
          <div className="absolute right-0 top-0 h-64 w-64 bg-purple-400 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute left-0 bottom-0 h-64 w-64 bg-blue-400 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          
          {/* Animated floating shapes */}
          <motion.div 
            className="absolute left-1/4 top-1/3 h-16 w-16 bg-cyan-300 rounded-full filter blur-xl"
            animate={{ 
              y: [0, 30, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          
          <motion.div 
            className="absolute right-1/4 top-2/3 h-24 w-24 bg-indigo-400 rounded-full filter blur-xl"
            animate={{ 
              y: [0, -40, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1 
            }}
          />
        </div>
        
        <motion.div 
          className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5 dark:opacity-10"
          style={{ y, opacity }}
        />
        
        <div className="container relative">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              className="mb-6 mx-auto"
              variants={fadeInUp}
            >
              <span className="gradient-text text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight">
                DevBros Technology
              </span>
            </motion.h1>
            
            <motion.div 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 h-8 overflow-hidden relative"
              variants={fadeInUp}
            >
              {heroTexts.map((text, index) => (
                <motion.p
                  key={index}
                  className="absolute w-full text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: currentIndex === index ? 1 : 0,
                    y: currentIndex === index ? 0 : 20
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className="btn btn-primary px-8 py-4 text-base font-medium rounded-full inline-flex items-center shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow group"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <motion.button
                onClick={() => scrollToContent()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline rounded-full px-8 py-4 text-base font-medium inline-flex items-center"
              >
                Explore Our Services
                <MousePointer className="ml-2 h-5 w-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" ref={targetRef} className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900/30">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We offer a wide range of digital services to help your business grow and succeed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-8 w-8" />,
                title: "Web Development",
                description: "We create responsive, fast, and modern websites that drive engagement and conversions.",
                link: "/web-development"
              },
              {
                icon: <Terminal className="h-8 w-8" />,
                title: "Software Development",
                description: "Custom software solutions tailored to your business needs and challenges.",
                link: "/software-development"
              },
              {
                icon: <Layers className="h-8 w-8" />,
                title: "Graphic Design",
                description: "Eye-catching visuals and branding that communicate your unique identity.",
                link: "/graphic-design"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="card bg-white dark:bg-gray-800/50 hover:translate-y-[-5px] transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-4 w-16 h-16 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                <Link 
                  href={service.link} 
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're committed to excellence in everything we do. Here's what sets us apart.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-xl bg-white dark:bg-gray-800/50 shadow-md hover:shadow-xl transition-all dark:border dark:border-gray-700 relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="rounded-full bg-gray-100 dark:bg-gray-700 p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6 relative z-10 group-hover:shadow-lg transition-shadow">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 relative z-10">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 relative z-10">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Project Counter Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-700/90 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10" />
        
        <div className="container relative z-10">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {[
              { count: "100+", label: "Projects Completed" },
              { count: "20+", label: "Happy Clients" },
              { count: "3", label: "Team Members" },
              { count: "1.5+", label: "Years Experience" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.p 
                  className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
                >
                  {stat.count}
                </motion.p>
                <p className="text-blue-100 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/30">
        <div className="container">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
              Contact us today to discuss your next project and how we can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  href="/contact" 
                  className="btn bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-medium shadow-lg shadow-blue-900/20"
                >
                  Get in Touch
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  href="/services" 
                  className="btn bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 px-8 py-4 rounded-full font-medium border border-gray-200 dark:border-gray-700"
                >
                  Explore Services
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart",
                image: "https://randomuser.me/api/portraits/women/23.jpg",
                quote: "Working with DevBros Technology transformed our business. Their team delivered a website that exceeded our expectations and helped increase our online sales by 40%."
              },
              {
                name: "Michael Chen",
                role: "Founder, InnovateCo",
                image: "https://randomuser.me/api/portraits/men/54.jpg",
                quote: "The team at DevBros is exceptional. They understood our vision perfectly and built a custom solution that streamlined our operations and improved customer satisfaction."
              },
              {
                name: "Emily Robinson",
                role: "Marketing Director, GrowthBrand",
                image: "https://randomuser.me/api/portraits/women/45.jpg",
                quote: "DevBros Technology helped us completely revamp our digital presence. Their expertise in both design and development created a seamless experience our customers love."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="card bg-white dark:bg-gray-800/50 text-center relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                whileHover={{ scale: 1.03 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                
                <div className="mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-20 h-20 rounded-full mx-auto border-4 border-blue-100 dark:border-blue-900 group-hover:border-blue-200 dark:group-hover:border-blue-800 transition-colors"
                  />
                </div>
                <div className="mb-6 text-gray-600 dark:text-gray-300">
                  <svg width="24" height="24" className="text-blue-400 opacity-50 mb-4 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.92896 14H7.5C6.4 14 5.5 12.9333 5.5 11.7333V11.5333C5.5 9.16667 7.32 7.33333 9.65 7.33333H9.96C10.4 7.33333 10.75 7 10.75 6.58333V5.75C10.75 5.33333 10.4 5 9.96 5H9.65C6 5 3 8 3 11.75V11.75C3 14.3333 5.09091 16.5 7.5 16.5H10C10.8 16.5 11.5 17.2 11.5 18C11.5 18.8 10.8 19.5 10 19.5H3C2.45 19.5 2 19.05 2 18.5C2 17.95 2.45 17.5 3 17.5H5.5C5.5 17.5 4.96 16.8333 4.5 16.5C4.04 16.1667 3.5 16 3.5 16C2.67 16 2 15.33 2 14.5C2 13.67 2.67 13 3.5 13H9.92896C9.97175 13.3216 10 13.6567 10 14V14Z" fill="currentColor"></path>
                    <path d="M21.9291 14H19.5C18.4 14 17.5 12.9333 17.5 11.7333V11.5333C17.5 9.16667 19.32 7.33333 21.65 7.33333H21.96C22.4 7.33333 22.75 7 22.75 6.58333V5.75C22.75 5.33333 22.4 5 21.96 5H21.65C18 5 15 8 15 11.75V11.75C15 14.3333 17.0909 16.5 19.5 16.5H22C22.8 16.5 23.5 17.2 23.5 18C23.5 18.8 22.8 19.5 22 19.5H15C14.45 19.5 14 19.05 14 18.5C14 17.95 14.45 17.5 15 17.5H17.5C17.5 17.5 16.96 16.8333 16.5 16.5C16.04 16.1667 15.5 16 15.5 16C14.67 16 14 15.33 14 14.5C14 13.67 14.67 13 15.5 13H21.9291C21.9717 13.3216 22 13.6567 22 14V14Z" fill="currentColor"></path>
                  </svg>
                  <p className="italic">{testimonial.quote}</p>
                </div>
                <div>
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
    </>
  )
} 
