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
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-primary/20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop')] bg-cover bg-fixed opacity-10" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary p-1">
              <div className="w-full h-full rounded-full bg-dark flex items-center justify-center">
                <span className="text-4xl font-bold gradient-text">HC</span>
              </div>
            </div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            Hi, I'm <span className="gradient-text">{personal.name.split(' ')[0]}</span>
          </motion.h1>

          <motion.h2 variants={itemVariants} className="text-xl md:text-2xl text-light/80 mb-6">
            {personal.title}
          </motion.h2>

          <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-light/60 mb-8 text-lg">
            {personal.profile}
          </motion.p>

          <motion.div variants={itemVariants} className="flex justify-center space-x-4 mb-8">
            <motion.a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-light/10 rounded-full hover:bg-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiLinkedin size={20} />
            </motion.a>
            <motion.a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-light/10 rounded-full hover:bg-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub size={20} />
            </motion.a>
            <motion.a
              href={`mailto:${personal.email}`}
              className="p-3 bg-light/10 rounded-full hover:bg-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMail size={20} />
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center space-x-4">
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg text-light font-semibold hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href="#projects"
              className="px-6 py-3 border border-light/20 rounded-lg text-light font-semibold hover:bg-light/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-light/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-light/50 rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero