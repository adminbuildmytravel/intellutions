import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Technologies from '@/components/Technologies'
import ContactForm from '@/components/ContactForm'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Technologies />
      <ContactForm />
      <CTA />
      <Footer />
    </main>
  )
}

