'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-dark">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-secondary">About Intellutions</h2>
            <p className="text-body mb-6">
              We are dedicated to building enterprise-grade AI and robotics solutions that transform businesses and drive innovation. Our team combines cutting-edge technology with deep industry expertise to deliver solutions that make a real impact.
            </p>
            <p className="text-body mb-8">
              With a focus on smart automation, predictive analytics, and natural language processing, we help organizations streamline operations, make data-driven decisions, and unlock new possibilities.
            </p>
            <Link href="#contact" className="btn-secondary inline-block">
              Learn More
            </Link>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Testimonial Card */}
            <div className="card mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Smart Automation
              </h3>
              <p className="text-body mb-4">
                Our AI solutions have helped businesses achieve up to 30% improvement in operational efficiency and significant cost reductions.
              </p>
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Client Testimonial</span>
              </div>
            </div>

            {/* Team Image Placeholder */}
            <div className="relative h-64 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-400">Team Collaboration</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

