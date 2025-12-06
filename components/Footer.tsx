'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <img
                src="/images/logo.jpg"
                alt="Intellutions"
                className="h-8 sm:h-12 md:h-14 w-auto object-contain"
                style={{ maxWidth: '180px' }}
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              UAE-based partner for AI and robotics solutions, delivering innovative technology services for businesses and communities.
            </p>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4">Email</h3>
            <a
              href="mailto:info@intellutions.ae"
              className="text-gray-600 hover:text-primary transition-colors text-sm block"
            >
              info@intellutions.ae
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4">Phone</h3>
            <a
              href="tel:+97126740222"
              className="text-gray-600 hover:text-primary transition-colors text-sm block"
            >
              +971 2 674 0222
            </a>
          </motion.div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4">Address</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              103, Sheika Fawzeya Bint Hamdan Al Nahyan Building, Khalifa Street, Abu Dhabi, UAE
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            © 2025 Intellutions. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {/* Social Media Icons */}
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md group"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md group"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

