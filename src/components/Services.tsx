// components/Services.tsx
'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

const services = [
  { title: 'Leke Tedavileri', img: '/images/leke.jpg' },
  { title: 'Uyluk Germe',      img: '/images/uyluk.jpg' },
  { title: 'Kol Germe',        img: '/images/kol.jpg' },
]

export default function Services() {
  return (
    <section id="hizmetlerimiz" className="py-20">
      <h2 className="text-center text-3xl font-semibold mb-12">Hizmetlerimiz</h2>
      <div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src={s.img} fill alt={s.title} className="object-cover" />
              </div>
              <CardContent className="text-center">
                <h3 className="text-xl font-medium mb-2">{s.title}</h3>
                <button className="text-[#B2804E] font-semibold">Read Article</button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}