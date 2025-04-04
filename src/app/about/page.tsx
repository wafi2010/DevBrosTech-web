"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <main className="min-h-screen max-h-auto p-4 pt-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="gradient-text mb-4">About Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          We are a team of dedicated professionals committed to providing exceptional services and cutting-edge solutions for our clients. With years of expertise and a passion for innovation, we help businesses achieve their goals and thrive in an ever-changing market.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card"
          >
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Founded in 2023, DevBros Technology has been at the forefront of digital innovation. 
              We believe in creating solutions that not only meet current needs but also anticipate future challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card"
          >
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300">
              To empower businesses with cutting-edge technology solutions that drive growth, 
              enhance efficiency, and create meaningful connections with their audience.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Experience",
              value: "1.5+ Years",
              description: "Industry expertise and proven track record"
            },
            {
              title: "Projects",
              value: "100+",
              description: "Successfully completed projects"
            },
            {
              title: "Clients",
              value: "20+",
              description: "Satisfied clients worldwide"
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              className="card text-center"
            >
              <h3 className="text-2xl font-bold text-primary-600 mb-2">{stat.value}</h3>
              <h4 className="text-xl font-semibold mb-2">{stat.title}</h4>
              <p className="text-gray-600 dark:text-gray-300">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
} 