'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="section-padding gradient-bg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="heading-primary text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-body text-gray-200 mb-8 text-xl max-w-3xl mx-auto">
            Revolutionize your business with cutting-edge artificial intelligence technologies developed by Intellutions.
          </p>
          <Link href="#contact" className="btn-primary inline-block">
            Contact us to get started!
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

