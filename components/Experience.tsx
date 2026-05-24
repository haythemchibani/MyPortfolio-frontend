'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMapPin, FiCalendar } from 'react-icons/fi'
import { portfolioData } from '@/data/portfolioData'

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const { experience } = portfolioData

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <section id="experience" className="section-container bg-light/5">
      <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={containerVariants}>
        <h2 className="section-title">Work Experience</h2>

        <div className="max-w-4xl mx-auto">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="mb-8 relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full" />
              <div className="mb-2">
                <h3 className="text-xl font-semibold text-light">{exp.position}</h3>
                <p className="text-primary font-medium">{exp.company}</p>
              </div>
              <div className="flex flex-wrap gap-4 mb-3 text-sm text-light/50">
                <span className="flex items-center gap-1">
                  <FiMapPin size={14} /> {exp.location}
                </span>
                <span className="flex items-center gap-1">
                  <FiCalendar size={14} /> {exp.period}
                </span>
              </div>
              <p className="text-light/70">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience