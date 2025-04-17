// app/page.tsx
import Header from '@/components/Header'
import Hero from '@/components/HeroSection'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

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