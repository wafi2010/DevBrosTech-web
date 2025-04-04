"use client";

import dynamic from "next/dynamic";
import { Code, Layers, Zap, Users, Clock, Check, MousePointer } from "lucide-react";

// Dynamically import Framer Motion's motion component with SSR disabled
const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false });
const MotionH1 = dynamic(() => import("framer-motion").then((mod) => mod.motion.h1), { ssr: false });

const services = [
  { title: "Frontend Development", icon: <Code size={40} />, desc: "Building responsive and interactive user interfaces with React, Next.js, and modern web technologies." },
  { title: "Backend Development", icon: <Layers size={40} />, desc: "Creating robust and scalable backend systems with Node.js, Express.js, Django, and databases like MongoDB and PostgreSQL." },
  { title: "UI/UX Design", icon: <MousePointer size={40} />, desc: "Designing intuitive and visually appealing user interfaces using TailwindCSS, Framer Motion, and GSAP." },
  { title: "Mobile Development", icon: <Zap size={40} />, desc: "Developing cross-platform mobile applications with React Native for seamless user experiences." },
  { title: "Project Management", icon: <Users size={40} />, desc: "Managing projects efficiently with Agile methodologies to ensure timely and high-quality delivery." },
  { title: "Performance Optimization", icon: <Clock size={40} />, desc: "Improving website and app performance with optimized code and best practices." },
  { title: "Quality Assurance", icon: <Check size={40} />, desc: "Ensuring bug-free and high-performance applications with thorough testing." },
    { title: "Convert To Figma Desing To Code", icon: <Code size={40} />, desc: "Convert to Figma desing into react ,next and html code." },
];

export default function ServicesPage() {
  return (
    <div className="min-h-scree flex flex-col items-center py-12">
      <MotionH1
        className="text-4xl font-bold mb-8 mt-14 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Web Development Services
      </MotionH1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {services.map((service, index) => (
          <MotionDiv
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="border-2 border-blue-300 p-6 hover:-translate-y-3 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition">
              {service.icon}
              <h2 className="text-xl font-semibold mt-4">{service.title}</h2>
              <p className="mt-2">{service.desc}</p>
            </div>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
}
