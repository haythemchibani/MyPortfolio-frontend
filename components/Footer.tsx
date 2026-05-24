'use client'

import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { portfolioData } from '@/data/portfolioData'

const Footer = () => {
  const { personal } = portfolioData
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark/50 py-8 border-t border-light/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-light/60 hover:text-primary transition-colors">
              <FiLinkedin size={20} />
            </a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-light/60 hover:text-primary transition-colors">
              <FiGithub size={20} />
            </a>
            <a href={`mailto:${personal.email}`} className="text-light/60 hover:text-primary transition-colors">
              <FiMail size={20} />
            </a>
          </div>
          <p className="text-light/40 text-sm">
            © {currentYear} {personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer