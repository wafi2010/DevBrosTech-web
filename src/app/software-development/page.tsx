"use client";

import dynamic from "next/dynamic";
import {
  Code,
  Layers,
  MonitorSmartphone,
  Smartphone,
  Users,
  Clock,
  Check,
  PenTool,
} from "lucide-react";

// Dynamically import Framer Motion's motion components with SSR disabled
const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false });
const MotionH1 = dynamic(() => import("framer-motion").then((mod) => mod.motion.h1), { ssr: false });

const services = [
  {
    title: "Custom Software Development",
    icon: <Code size={40} />,
    desc: "Building tailored software solutions for businesses using modern technologies such as Python, JavaScript, and Node.js.",
  },
  {
    title: "Web Application Development",
    icon: <MonitorSmartphone size={40} />,
    desc: "Developing fast, secure, and scalable web applications using React, Next.js, Django, and more.",
  },
  {
    title: "Mobile App Development",
    icon: <Smartphone size={40} />,
    desc: "Creating high-performance cross-platform mobile apps using React Native and Flutter.",
  },
  {
    title: "Backend & API Development",
    icon: <Layers size={40} />,
    desc: "Developing powerful backends and RESTful APIs with Node.js, Express.js, Flask, and Django.",
  },
  {
    title: "UI/UX Design",
    icon: <PenTool size={40} />,
    desc: "Designing intuitive user interfaces and experiences using Figma, TailwindCSS, and animation tools like GSAP.",
  },
  {
    title: "Project & Team Management",
    icon: <Users size={40} />,
    desc: "Efficiently managing software projects and teams using Agile methodology and collaborative tools.",
  },
  {
    title: "Performance Optimization",
    icon: <Clock size={40} />,
    desc: "Enhancing speed, responsiveness, and scalability of software through smart optimization practices.",
  },
  {
    title: "Quality Assurance & Testing",
    icon: <Check size={40} />,
    desc: "Ensuring bug-free, reliable software through rigorous manual and automated testing.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col items-center py-12">
      <MotionH1
        className="text-4xl font-bold mb-8 mt-14 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Software Development Services
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
