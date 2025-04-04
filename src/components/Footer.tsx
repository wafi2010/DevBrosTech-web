"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Facebook, Youtube } from "lucide-react"

export default function Footer() {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
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

  const currentYear = new Date().getFullYear()

  return (
    <motion.footer 
      className="bg-gradient-to-br from-gray-900 to-gray-950 text-gray-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">DevBros Technology</h3>
            <p className="text-sm mb-6">
              Creating digital excellence through innovative solutions and cutting-edge technology. We build experiences that users love.
            </p>
            <div className="flex space-x-4">
              {/* <a href="https://www.linkedin.com/in/tajul-islam-b2ab03263/" className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a> */}
              <a href="https://www.youtube.com/@DevBrosTech-DbT" className="p-2 rounded-full bg-gray-800 hover:bg-red-700 transition-colors duration-300" aria-label="Twitter">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100092335185064" className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors duration-300" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-gray-800">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { text: "Home", href: "/" },
                { text: "About Us", href: "/about" },
                { text: "Services", href: "/services" },
                { text: "Our Team", href: "/team" },
                { text: "Tools", href: "/tools" },
                { text: "Contact", href: "/contact" }
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="inline-block hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    <span className="flex items-center">
                      <span className="text-blue-400 mr-2">›</span> {link.text}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-gray-800">Services</h4>
            <ul className="space-y-3">
              {[
                { text: "Web Development", href: "/web-development" },
                { text: "Mobile App Development", href: "/web-development" },
                { text: "UI/UX Design", href: "/web-development" },
                { text: "Software Development", href: "/software-development" },
                { text: "Graphic Design", href: "/graphic-design" }
              ].map((service) => (
                <li key={service.href}>
                  <Link 
                    href={service.href} 
                    className="inline-block hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    <span className="flex items-center">
                      <span className="text-purple-400 mr-2">›</span> {service.text}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-gray-800">Contact Information</h4>
            <div className="space-y-4">
              <p className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 shrink-0 mt-0.5" />
                <span>Dhaka City , Bangladesh<br />Keranigonj ,Dhaka 1310.</span>
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3 shrink-0" />
                <a href="mailto:info@devbrostechnology.com" className="hover:text-white transition-colors duration-300">
                  taju7256@gmail.com
                </a>
              </p>
              <p className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3 shrink-0" />
                <a href="tel:+15551234567" className="hover:text-white transition-colors duration-300">
                +880 1755459355
                </a>
              </p>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-gray-800 text-center text-sm"
        >
          <p>
            &copy; {currentYear} DevBros Technology. All rights reserved. 
            <span className="block mt-2 md:inline md:mt-0 md:ml-4">
              Designed with <span className="text-red-500">DBT Web Comunity</span> for the digital future.
            </span>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
} 