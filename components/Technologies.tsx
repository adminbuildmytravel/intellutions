'use client'

import { motion } from 'framer-motion'

interface TechnologyCard {
  icon: React.ReactNode
  title: string
  description: string
  buttonText: string
}

const technologies: TechnologyCard[] = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: 'Smart Automation',
    description: 'Automate routine tasks and increase efficiency with our AI-driven solutions.',
    buttonText: 'Learn More',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Predictive Analytics',
    description: 'Leverage machine learning models to predict trends and make informed decisions.',
    buttonText: 'Learn More',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    title: 'Natural Language Processing',
    description: 'Enhance customer interaction through chatbots and smart language solutions.',
    buttonText: 'Learn More',
  },
]

export default function Technologies() {
  return (
    <section id="services" className="section-padding bg-white dark:bg-white">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-900 mb-12 text-center"
        >
          Our Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="card group cursor-pointer"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-900 mb-3">
                {tech.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-600 mb-6 text-sm leading-relaxed">
                {tech.description}
              </p>
              <button className="text-primary dark:text-primary font-semibold hover:text-primary-dark dark:hover:text-primary-dark transition-colors">
                {tech.buttonText} →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

