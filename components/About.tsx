'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi'
import { portfolioData } from '@/data/portfolioData'

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const { personal } = portfolioData

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-24 bg-[#fafafa] dark:bg-[#111] text-[#333] dark:text-white px-6">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold uppercase tracking-widest">About Me</h2>
          <div className="w-12 h-1 bg-[#784cf4] mx-auto mt-4 rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">Get to know me!</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
              {personal.profile}
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              I am passionate about building modern web applications and continuously learning new technologies.
              With a strong foundation in computer systems and telecommunications, I bring a unique perspective
              to full-stack development, combining architectural technical expertise with precise problem-solving skills.
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-[#181818] rounded-xl p-8 border border-gray-200 dark:border-white/5 shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-black dark:text-white tracking-wide">Personal Details</h3>
            <div className="space-y-4 text-base">
              <div className="flex items-center space-x-4 py-2 border-b border-gray-200 dark:border-white/5">
                <FiMapPin className="text-[#784cf4] text-xl shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">{personal.location}</span>
              </div>
              <div className="flex items-center space-x-4 py-2 border-b border-gray-200 dark:border-white/5">
                <FiMail className="text-[#784cf4] text-xl shrink-0" />
                <a href={`mailto:${personal.email}`} className="text-gray-700 dark:text-gray-300 font-medium hover:text-[#784cf4] transition-colors break-all">
                  {personal.email}
                </a>
              </div>
              <div className="flex items-center space-x-4 py-2">
                <FiPhone className="text-[#784cf4] text-xl shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">{personal.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About