import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Haythem Chibani | Junior Full Stack Developer',
  description: 'Master of Computer Systems Engineering graduate specializing in Full Stack Development, Computer Networks, and Telecommunications.',
  keywords: ['Full Stack Developer', 'MERN Stack', 'React', 'Next.js', 'Node.js', 'Portfolio'], 
}

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}