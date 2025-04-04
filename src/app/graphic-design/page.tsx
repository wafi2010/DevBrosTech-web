"use client";

import dynamic from "next/dynamic";
import {
  PenTool,
  Image,
  Brush,
  Monitor,
  Layout,
  Camera,
  Palette,
  Youtube,
} from "lucide-react";

// Dynamically import Framer Motion's motion components with SSR disabled
const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false });
const MotionH1 = dynamic(() => import("framer-motion").then((mod) => mod.motion.h1), { ssr: false });

const services = [
  {
    title: "Logo & Branding",
    icon: <PenTool size={40} />,
    desc: "Crafting unique logos and brand identities that truly represent your business vision.",
  },
  {
    title: "UI/UX Design",
    icon: <Layout size={40} />,
    desc: "Designing modern and user-friendly interfaces for websites and applications with a strong focus on user experience.",
  },
  {
    title: "Illustration & Art",
    icon: <Brush size={40} />,
    desc: "Creating custom illustrations, digital artwork, and icons tailored for your brand or project.",
  },
  {
    title: "Poster & Banner Design",
    icon: <Image size={40} />,
    desc: "Designing impactful posters, banners, and flyers for digital or print media.",
  },
  {
    title: "Social Media Graphics",
    icon: <Camera size={40} />,
    desc: "Designing visually appealing content for your brand’s social media platforms including posts, stories, and ads.",
  },
  {
    title: "Motion Graphics",
    icon: <Youtube size={40} />,
    desc: "Bringing visuals to life with motion design and animations for video intros, explainers, and reels.",
  },
  {
    title: "Print Design",
    icon: <Monitor size={40} />,
    desc: "Designing high-quality print-ready materials such as brochures, business cards, and packaging.",
  },
  {
    title: "Color Palette & Typography",
    icon: <Palette size={40} />,
    desc: "Curating visually pleasing color schemes and font pairings to strengthen brand identity.",
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
        Our Graphics Design Services
      </MotionH1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {services.map((service, index) => (
          <MotionDiv
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="border-2 border-pink-300 p-6 hover:-translate-y-3 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition">
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
