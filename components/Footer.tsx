import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-sm font-bold mb-2">Jaipur Cardiac Centre</h3>
            <p className="text-gray-300 text-xs leading-relaxed">
              Expert cardiac care with 25+ years of experience and 15,000+ patients treated.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-xs">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/doctor" className="text-gray-300 hover:text-primary transition-colors">
                  About Doctor
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold mb-2">Contact</h3>
            <div className="space-y-1 text-xs">
              <div className="flex items-start gap-2">
                <Phone size={14} className="text-primary flex-shrink-0 mt-0.5" />
                <a href="tel:+918107667788" className="text-gray-300 hover:text-primary transition-colors">
                  +91 8107667788
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={14} className="text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:drraghven10@gmail.com" className="text-gray-300 hover:text-primary transition-colors truncate text-xs">
                  drraghven10@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-gray-300 text-xs">Hanuman Nagar, Jaipur</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-xs">
          <p>&copy; {currentYear} Jaipur Cardiac Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
