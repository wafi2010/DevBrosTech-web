"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      console.log(formData)
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <main className="min-h-screen pt-20 pb-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="gradient-text mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to start your next project or have questions? We're here to help you build exceptional digital experiences.
          </p>
        </motion.div>

        <motion.div 
          className="glass p-2 rounded-2xl shadow-xl mb-24 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 rounded-xl overflow-hidden">
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-10 text-white">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={parentVariants}
                className="h-full flex flex-col"
              >
                <motion.div variants={childVariants}>
                  <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                  <p className="mb-10 text-blue-100">
                    Fill out the form and our team will get back to you within 24 hours.
                  </p>
                </motion.div>

                <motion.div variants={childVariants} className="space-y-6 mb-10">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 mr-4 text-blue-200" />
                    <div>
                      <h3 className="font-semibold text-lg">Call Us</h3>
                      <p className="text-blue-100">+880 1755459355</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 mr-4 text-blue-200" />
                    <div>
                      <h3 className="font-semibold text-lg">Email Us</h3>
                      <p className="text-blue-100">taju72562gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 mr-4 text-blue-200" />
                    <div>
                      <h3 className="font-semibold text-lg">Visit Us</h3>
                      <p className="text-blue-100">
                        Keranigonj , Dhaka 1310, Bangladesh.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <div className="col-span-2 p-10 bg-white dark:bg-gray-900">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={parentVariants}
              >
                <motion.h2 
                  variants={childVariants}
                  className="text-2xl font-bold mb-8"
                >
                  Send us a Message
                </motion.h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div variants={childVariants}>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="input"
                        required
                        placeholder="John Doe"
                      />
                    </motion.div>
                    
                    <motion.div variants={childVariants}>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input"
                        required
                        placeholder="john@example.com"
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div variants={childVariants}>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="input"
                      required
                      placeholder="How can we help you?"
                    />
                  </motion.div>
                  
                  <motion.div variants={childVariants}>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="input h-40"
                      required
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </motion.div>
                  
                  <motion.div variants={childVariants}>
                    {isSubmitted ? (
                      <div className="p-4 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Thank you! Your message has been sent successfully.
                      </div>
                    ) : (
                      <button 
                        type="submit" 
                        className="btn btn-primary w-full flex justify-center items-center"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </button>
                    )}
                  </motion.div>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
} 