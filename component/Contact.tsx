import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { FiMail, FiUser, FiMessageSquare, FiSend } from 'react-icons/fi'

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setIsLoading(true)
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, data)
      toast.success('Message sent successfully!')
      reset()
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="contact" className="section-container bg-light/5">
      <Toaster position="top-right" />
      <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={containerVariants}>
        <h2 className="section-title">Get In Touch</h2>

        <div className="max-w-2xl mx-auto">
          <motion.form variants={itemVariants} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-light/80 mb-2">Name</label>
              <div className="relative">
                <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-light/40" />
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full pl-10 pr-4 py-3 bg-light/10 rounded-lg border border-light/20 focus:border-primary focus:outline-none transition-colors text-light"
                  placeholder="Your name"
                />
              </div>
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-light/80 mb-2">Email</label>
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-light/40" />
                <input
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' },
                  })}
                  className="w-full pl-10 pr-4 py-3 bg-light/10 rounded-lg border border-light/20 focus:border-primary focus:outline-none transition-colors text-light"
                  placeholder="your@email.com"
                />
              </div>
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-light/80 mb-2">Message</label>
              <div className="relative">
                <FiMessageSquare className="absolute left-3 top-3 text-light/40" />
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows={5}
                  className="w-full pl-10 pr-4 py-3 bg-light/10 rounded-lg border border-light/20 focus:border-primary focus:outline-none transition-colors text-light resize-none"
                  placeholder="Your message..."
                />
              </div>
              {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
            </div>

            <motion.button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-lg text-light font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? 'Sending...' : <>Send Message <FiSend /></>}
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact