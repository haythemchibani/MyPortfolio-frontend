'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink } from 'react-icons/fi'
import { portfolioData } from '@/data/portfolioData'

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const { projects } = portfolioData

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="section-container">
      <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={containerVariants}>
        <h2 className="section-title">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-light/5 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-light group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-light/60 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIdx) => (
                    <span key={techIdx} className="text-xs px-2 py-1 bg-primary/20 rounded-full text-primary">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.link}
                    className="text-light/60 hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects