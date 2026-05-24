'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi'
import { portfolioData } from '@/data/portfolioData'

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const { personal } = portfolioData

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="section-container">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-light/70 text-lg leading-relaxed mb-6">{personal.profile}</p>
            <p className="text-light/70 text-lg leading-relaxed">
              I am passionate about building modern web applications and continuously learning new technologies.
              With a strong foundation in computer systems and telecommunications, I bring a unique perspective
              to full-stack development, combining technical expertise with problem-solving skills.
            </p>
          </div>

          <div className="bg-light/5 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 gradient-text">Personal Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FiMapPin className="text-primary" />
                <span className="text-light/70">{personal.location}</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="text-primary" />
                <a href={`mailto:${personal.email}`} className="text-light/70 hover:text-primary transition-colors">
                  {personal.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="text-primary" />
                <span className="text-light/70">{personal.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About