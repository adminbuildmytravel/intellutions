'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center gradient-bg pt-16 md:pt-20">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="heading-primary text-white"
            >
              AI Powered Solutions for a Smarter Future
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-body text-gray-200 mb-8 text-xl"
            >
              Revolutionize your business with cutting-edge artificial intelligence technologies developed by Intellutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link href="#contact" className="btn-primary inline-block">
                Contact Us
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full h-96 flex items-center justify-center">
              {/* AI Head Graphic */}
              <div className="relative w-80 h-80">
                {/* Circuit board background */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-30"
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50 50 L350 50 L350 350 L50 350 Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary"
                  />
                  <path
                    d="M100 100 L300 100 L300 300 L100 300 Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary"
                  />
                  <circle cx="200" cy="200" r="60" fill="currentColor" className="text-primary opacity-50" />
                  <path
                    d="M150 150 Q200 100 250 150"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary"
                  />
                  <path
                    d="M150 250 Q200 300 250 250"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary"
                  />
                </svg>
                
                {/* Glowing center chip */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary rounded-lg flex items-center justify-center shadow-2xl"
                >
                  <div className="w-16 h-16 bg-white rounded opacity-90" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

