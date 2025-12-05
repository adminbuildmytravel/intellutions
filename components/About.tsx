'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="section-padding gradient-bg">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About Intellutions
            </h2>
            <p className="text-lg text-gray-200 mb-6 leading-relaxed">
              Intellutions is dedicated to building enterprise-grade AI and robotics solutions. We serve businesses with future-ready, innovative, and secure solutions using market-leading custom frameworks.
            </p>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Our team combines cutting-edge technology with deep industry expertise to deliver solutions that transform businesses and drive innovation.
            </p>
            <Link href="#contact" className="btn-primary inline-block">
              Learn More
            </Link>
          </motion.div>

          {/* Right Column - Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Team Image Card */}
            <div className="relative rounded-2xl overflow-hidden bg-white shadow-2xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/about-team.jpg"
                  alt="Intellutions Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
