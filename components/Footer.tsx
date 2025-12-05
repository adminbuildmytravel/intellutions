'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  const quickLinks = [
    { href: '#', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#solutions', label: 'Solutions' },
    { href: '#', label: 'Our Services' },
    { href: '#', label: 'Team' },
    { href: '#contact', label: 'Contact' },
  ]

  const services = [
    'Innovation & AI Research',
    'AI Robot Wholesale',
    'AI Robotic Systems Management',
    'AI Development and Training',
  ]

  const solutions = [
    'Healthcare',
    'Education',
    'Social',
    'Marketplace',
    'Manufacturing',
    'Finance',
  ]

  return (
    <footer className="bg-gray-100 dark:bg-dark-light border-t border-gray-200 dark:border-gray-700">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">i</span>
              </div>
              <span className="text-xl font-bold text-dark dark:text-white">intellutions</span>
            </div>
            <p className="text-body text-sm mb-4">
              UAE-based partner for AI and robotics solutions, delivering innovative technology services for businesses and communities.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-semibold">Email:</span>{' '}
                <a href="mailto:info@intellutions.ae" className="hover:text-primary transition-colors">
                  info@intellutions.ae
                </a>
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-semibold">Phone:</span>{' '}
                <a href="tel:+97126740222" className="hover:text-primary transition-colors">
                  +971 2 674 0222
                </a>
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                <span className="font-semibold">Address:</span> 103, Sheika Fawzeya Bint Hamdan Al Nahyan Building, Khalifa Street, Abu Dhabi, UAE
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Solutions</h3>
            <ul className="space-y-2">
              {solutions.map((solution) => (
                <li key={solution}>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm"
                  >
                    {solution}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © 2025 Intellutions. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {/* Social Media Icons */}
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-200 dark:bg-dark flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-200 dark:bg-dark flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

