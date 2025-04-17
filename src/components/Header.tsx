'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Op. Dr. Freeman
        </Link>
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          {['Ana Sayfa','Hakkımda','Hizmetlerimiz','Galeri','Blog','SSS','İletişim'].map(item => (
            <Link key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>
              {item}
            </Link>
          ))}
        </nav>
        <Button className="bg-[#25D366] hover:bg-green-600 text-white">
          WhatsApp
        </Button>
      </div>
    </header>
  )
}