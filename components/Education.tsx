'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCalendar } from 'react-icons/fi'
import { portfolioData } from '@/data/portfolioData'

const Education = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const { education } = portfolioData

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <section className="section-container">
      <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={containerVariants}>
        <h2 className="section-title">Education</h2>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="mb-8 relative pl-8 border-l-2 border-secondary/30 hover:border-secondary transition-colors"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-secondary rounded-full" />
              <div className="mb-2">
                <h3 className="text-xl font-semibold text-light">{edu.degree}</h3>
                <p className="text-secondary font-medium">{edu.institution}</p>
              </div>
              <div className="flex flex-wrap gap-4 mb-3 text-sm text-light/50">
                <span className="flex items-center gap-1">
                  <FiCalendar size={14} /> {edu.period}
                </span>
              </div>
              <p className="text-light/70">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Education