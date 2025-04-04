"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import tajul from "../../../public/tajul.png";
import wafi from "../../../public/wafi.png";
import sayem from "../../../public/sayem.png";

export default function Team() {
  const team = [
    {
      name: "Tajul Islam",
      role: "Founder & Backend Developer",
      image: tajul,
      linkedin: "https://www.linkedin.com/in/tajul-islam-b2ab03263/",
      website: "https://tajul2003.github.io/tajuls_portfolio/"
    },
    {
      name: "Wafi Hasan",
      role: "Co Founder & FullStack Developer",
      image: wafi,
      linkedin: "https://www.linkedin.com/in/wafi-hasan-425b76348/",
      website: "https://developerwafi.vercel.app/"
    },
    {
      name: "Sayem Shekh",
      role: "Senior Graphics Desinger",
      image: sayem,
      linkedin : "https://www.linkedin.com/in/md-sayem-2466b8331/",
      website : "https://www.behance.net/mrsayem4"
    },
  ];

  return (
    <main className="min-h-screen pt-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="gradient-text mb-4">Our Team</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the talented individuals behind our success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group card text-center hover-lift overflow-hidden"
            >
              <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden rounded-lg">
                <Image src={member.image} alt={member.name} layout="fill" objectFit="cover" className="transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70 p-4 text-white text-center">
                  <h2 className="text-xl font-bold mb-2">{member.name}</h2>
                  <p className="text-primary-400 mb-2">{member.role}</p>
                </div>
              </div>
              <div className="flex justify-center space-x-4 mt-6">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
                    target="_blank" rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                )}
                {member.website && (
                  <a
                    href={member.website}
                    className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Portfolio
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}