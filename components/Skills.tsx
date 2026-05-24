'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { portfolioData } from '@/data/portfolioData'

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const { skills } = portfolioData

  const skillCategories = [
    { title: 'Frontend Development', skills: skills.frontend, color: 'from-blue-500 to-cyan-500' },
    { title: 'Backend Development', skills: skills.backend, color: 'from-green-500 to-emerald-500' },
    { title: 'Quality Assurance', skills: skills.qa, color: 'from-purple-500 to-pink-500' },
    { title: 'DevOps & Administration', skills: skills.devops, color: 'from-orange-500 to-red-500' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="section-container bg-white/5">
      <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={containerVariants}>
        <h2 className="section-title">Technical Skills</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-black/50 rounded-xl p-6 border border-white/10 hover:border-primary/50 transition-colors"
            >
              <h3 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skillIdx}
                    className="px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm hover:bg-primary/20 transition-colors cursor-default"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills