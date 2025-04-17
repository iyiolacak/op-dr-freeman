// app/page.tsx
import Hero from '@/components/HeroSection'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <Hero />
        <Services />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}