'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/doctor', label: 'Doctor' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/blog', label: 'Blog' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl md:text-2xl gradient-text flex-shrink-0">
            <span className="text-primary">❤️</span>
            <span className="hidden sm:inline">JCC</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-6 xl:gap-8 items-center flex-1 justify-center mx-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary transition-colors font-medium text-sm lg:text-base whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block flex-shrink-0">
            <Link href="/contact" className="btn-primary text-sm lg:text-base">
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 ml-auto"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t">
            <div className="flex flex-col gap-3 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-primary transition-colors font-medium px-4 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="btn-primary block text-center mx-4 mt-2">
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
