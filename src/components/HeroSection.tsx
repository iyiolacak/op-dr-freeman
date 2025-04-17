// components/Hero.tsx
'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center py-20">
        {/* Text Column */}
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 60 }}
          className="md:w-1/2 space-y-6"
        >
          <h1 className="text-4xl font-bold">Meme Estetiği</h1>
          <ul className="space-y-2 list-disc list-inside text-lg">
            <li>Meme Büyütme</li>
            <li>Meme Küçültme</li>
            <li>Yüz Gençleştirme</li>
            {/* Extend to all items*/}
          </ul>
        </motion.div>

        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="md:w-1/2 mt-10 md:mt-0 h-96 relative"
        >
          <Image
            src="/images/dr-tolgahan.jpg"
            alt="Dr. Tolgahan Alpaydin"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </div>

      {/* CTA Cards */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 pb-20">
        <div className="bg-[#B2804E] p-8 text-white rounded-lg text-center">
          <h3 className="font-semibold mb-2">Randevu Formu</h3>
          <button className="underline">Randevu Formu &rarr;</button>
        </div>
        <div className="bg-[#B2804E] p-8 text-white rounded-lg text-center">
          <h3 className="font-semibold mb-2">WhatsApp İletişim</h3>
          <button className="underline">WhatsApp &rarr;</button>
        </div>
        <div className="bg-[#B2804E] p-8 text-white rounded-lg text-center">
          <h3 className="font-semibold mb-2">Çalışma Saatlerimiz</h3>
          <p>P.tesi – C.tesi: 09:00–17:00</p>
        </div>
      </div>
    </section>
  )
}