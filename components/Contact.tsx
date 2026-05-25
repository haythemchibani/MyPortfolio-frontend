'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm, SubmitHandler } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { FiMail, FiUser, FiMessageSquare, FiSend } from 'react-icons/fi'

interface ContactFormInput {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInput>()

  const onSubmit: SubmitHandler<ContactFormInput> = async (data) => {
    setIsLoading(true)

    // Build the clean object payload manually to eliminate the backend 'parameter manquante' error
    const dynamicPayload = {
      name: data.name.trim(),
      email: data.email.trim(),
      message: data.message.trim()
    }

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, dynamicPayload)
      toast.success('Message sent successfully!')
      reset()
    } catch (error) {
      toast.error('Failed to send message. Please verify all fields.')
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
    <section id="contact" className="py-24 bg-[#181818] text-white px-6 border-t border-white/5">
      <Toaster position="top-right" />
      <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={containerVariants} className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold uppercase tracking-widest text-white">Contact</h2>
          <div className="w-12 h-1 bg-[#784cf4] mx-auto mt-4 rounded"></div>
        </div>

        <div className="max-w-2xl mx-auto bg-[#222] p-8 rounded-xl shadow-2xl border border-white/5">
          <motion.form variants={itemVariants} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-gray-300 font-semibold mb-2 uppercase tracking-wider text-xs">Name</label>
              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full pl-12 pr-4 py-4 bg-[#111] rounded-lg border border-transparent focus:border-[#784cf4] focus:outline-none transition-colors text-white"
                  placeholder="Enter Your Name"
                />
              </div>
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-gray-300 font-semibold mb-2 uppercase tracking-wider text-xs">Email</label>
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' },
                  })}
                  className="w-full pl-12 pr-4 py-4 bg-[#111] rounded-lg border border-transparent focus:border-[#784cf4] focus:outline-none transition-colors text-white"
                  placeholder="Enter Your Email"
                />
              </div>
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-gray-300 font-semibold mb-2 uppercase tracking-wider text-xs">Message</label>
              <div className="relative">
                <FiMessageSquare className="absolute left-4 top-4 text-gray-400" />
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows={6}
                  className="w-full pl-12 pr-4 py-4 bg-[#111] rounded-lg border border-transparent focus:border-[#784cf4] focus:outline-none transition-colors text-white resize-none"
                  placeholder="Enter Your Message"
                />
              </div>
              {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
            </div>

            <motion.button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-[#784cf4] rounded-lg text-white font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:bg-[#633bc9] transition-all disabled:opacity-50 shadow-md"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              {isLoading ? 'Sending...' : <>Submit <FiSend /></>}
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact