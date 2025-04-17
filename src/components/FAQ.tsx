// components/FAQ.tsx
'use client'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

const faqs = [
  { q: 'Estetik Plastik Cerrahi Nedir?', a: 'Estetik Plastik Cerrahi...' },
  { q: 'İlk Geldiğim Zaman...',    a: '...' },
  // continue all Q&A
]

export default function FAQ() {
  return (
    <section id="sss" className="py-20">
      <h2 className="text-center text-3xl font-semibold mb-10">Sık Sorulan Sorular</h2>
      <div className="max-w-3xl mx-auto px-6 space-y-4">
        <Accordion type="single" collapsible>
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`${i}`}>
              <AccordionTrigger className="text-lg font-medium">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}