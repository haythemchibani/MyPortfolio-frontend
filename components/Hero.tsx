'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { portfolioData } from '@/data/portfolioData'

const Hero = () => {
  const { personal } = portfolioData

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#111] py-20">
      {/* Background Layer with Subdued Texture */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop')] bg-cover bg-center bg-fixed opacity-5" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto space-y-6 flex flex-col items-center"
        >
          {/* Profile Picture Frame with Interactive Dynamic Status Badge */}
          <motion.div variants={itemVariants} className="relative mb-4">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-br from-[#784cf4] to-[#633bc9] shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#222] relative">
                <Image
                  src="/images/profile.jpg"
                  alt="Haythem Chibani"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-w-768px) 128px, 160px"
                />
              </div>
            </div>
            
            {/* Online/Available Status Tag */}
            <div className="absolute bottom-1 right-1 bg-[#111] border border-white/10 px-3 py-1 rounded-full flex items-center gap-2 shadow-lg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-gray-300 whitespace-nowrap">
                Available
              </span>
            </div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase text-white">
            Hey, I'm <span className="text-[#784cf4]">{personal.name}</span>
          </motion.h1>

          <motion.h2 variants={itemVariants} className="text-lg md:text-xl font-semibold tracking-widest uppercase text-gray-400 max-w-2xl mx-auto">
            {personal.title}
          </motion.h2>

          <motion.p variants={itemVariants} className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            A Result-Oriented Full Stack Web Developer building and managing websites and web applications that lead to the success of the overall product.
          </motion.p>

          {/* Social Blocks */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-4 pt-2">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-white bg-[#222] border border-white/5 rounded-md hover:bg-[#784cf4] transition-all shadow-md"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-white bg-[#222] border border-white/5 rounded-md hover:bg-[#784cf4] transition-all shadow-md"
            >
              <FiGithub size={20} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-3 text-white bg-[#222] border border-white/5 rounded-md hover:bg-[#784cf4] transition-all shadow-md"
            >
              <FiMail size={20} />
            </a>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6 w-full sm:w-auto">
            <a
              href="#projects"
              className="w-full sm:w-auto px-10 py-4 bg-[#784cf4] text-white font-bold uppercase tracking-widest text-sm rounded-md shadow-lg hover:bg-[#633bc9] transition-colors text-center"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-10 py-4 bg-[#222] text-white font-bold uppercase tracking-widest text-sm rounded-md border border-white/10 hover:bg-[#333] transition-colors text-center"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator Icon */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-[#784cf4] rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero