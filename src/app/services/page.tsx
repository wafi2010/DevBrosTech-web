"use client"

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

// Dynamically import the motion component with ssr disabled
const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), {
  ssr: false
})

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices.",
      icon: "🌐",
      slug: "web-development", // Add slug
      features: [
        "Responsive Design",
        "Performance Optimization",
        "SEO Friendly",
        "Cross-browser Compatibility"
      ]
    },
    {
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs and objectives.",
      icon: "💻",
      slug: "software-development", // Add slug
      features: [
        "Custom Applications",
        "API Development",
        "Database Design",
        "System Integration"
      ]
    },
    {
      title: "Graphic Design",
      description: "Creative and professional designs that capture your brand's essence.",
      icon: "🎨",
      slug: "graphic-design", // Add slug
      features: [
        "Brand Identity",
        "UI/UX Design",
        "Print Design",
        "Digital Marketing Materials"
      ]
    }
  ]

  return (
    <main className="min-h-screen pt-32">
      <div className="container">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="gradient-text mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card hover-lift"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="text-primary-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href={service.slug}>
                <button className="btn btn-primary mt-6 w-full">Learn More</button>
              </a>
            </MotionDiv>
          ))}
        </div>
      </div>
    </main>
  )
}
