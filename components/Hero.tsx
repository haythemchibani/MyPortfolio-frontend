'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { portfolioData } from '@/data/portfolioData'

const Hero = () => {
  const { personal } = portfolioData

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#111]">
      {/* Background Layer with Dark Low-Opacity Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop')] bg-cover bg-center bg-fixed opacity-5" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto space-y-6"
        >
          {/* Circular Branding Badge */}
          <motion.div variants={itemVariants} className="inline-block">
            <div className="w-24 h-24 mx-auto rounded-full bg-[#222] border-2 border-white/10 flex items-center justify-center shadow-xl">
              <span className="text-2xl font-extrabold tracking-wider text-[#784cf4]">HC</span>
            </div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase text-white">
            Hey, I'm <span className="text-[#784cf4]">{personal.name}</span>
          </motion.h1>

          <motion.h2 variants={itemVariants} className="text-lg md:text-xl font-medium tracking-widest uppercase text-gray-400 max-w-2xl mx-auto">
            {personal.title}
          </motion.h2>

          <motion.p variants={itemVariants} className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            A Result-Oriented Full Stack Web Developer building and managing websites and web applications that lead to the success of the overall product.
          </motion.p>

          {/* Social Icons Blocks */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-6 pt-2">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-white bg-[#222] border border-white/5 rounded-md hover:bg-[#784cf4] hover:text-white transition-all shadow-md"
            >
              <FiLinkedin size={22} />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-white bg-[#222] border border-white/5 rounded-md hover:bg-[#784cf4] hover:text-white transition-all shadow-md"
            >
              <FiGithub size={22} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-3 text-white bg-[#222] border border-white/5 rounded-md hover:bg-[#784cf4] hover:text-white transition-all shadow-md"
            >
              <FiMail size={22} />
            </a>
          </motion.div>

          {/* Call to Actions Blocks */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
            <a
              href="#projects"
              className="w-full sm:w-auto px-10 py-4 bg-[#784cf4] text-white font-bold uppercase tracking-widest text-sm rounded-md shadow-lg hover:bg-[#633bc9] transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-10 py-4 bg-[#222] text-white font-bold uppercase tracking-widest text-sm rounded-md border border-white/10 hover:bg-[#333] transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Modernized Minimalist Scroll Indicator */}
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