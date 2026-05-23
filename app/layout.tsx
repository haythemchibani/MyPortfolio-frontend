import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/component/Header'
import Footer from '@/component/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Haythem Chibani | Junior Full Stack Developer',
  description: 'Master of Computer Systems Engineering graduate specializing in Full Stack Development, Computer Networks, and Telecommunications.',
  keywords: 'Full Stack Developer, MERN Stack, React, Next.js, Node.js, Portfolio',
}

export default function RootLayout({ children }) {
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