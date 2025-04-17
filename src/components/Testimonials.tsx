// components/Testimonials.tsx
'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const feedback = [
  { author: 'Mimi Hazan', text: 'Birçok klinikle görüşme sağladım…' },
  { author: 'Aysel Akak', text: 'Teşekkürler çok memnun kaldım…' },
  // add all entries
]

export default function Testimonials() {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % feedback.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-center text-3xl font-semibold mb-10">Yorumları</h2>
      <div className="max-w-xl mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white p-6 rounded-lg shadow"
          >
            <p className="italic mb-4">“{feedback[idx].text}”</p>
            <p className="text-right font-semibold">— {feedback[idx].author}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}