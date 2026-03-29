import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 mb-8">
          {/* About */}
          <div>
            <h3 className="text-base font-bold mb-3">Jaipur Cardiac Centre</h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Leading destination for advanced heart care in Jaipur. Trusted by thousands of patients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
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
                <Link href="/blog" className="text-gray-300 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-bold mb-3">Services</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li>Cardiac Consultation</li>
              <li>ECG & Echocardiography</li>
              <li>Angiography & Angioplasty</li>
              <li>Pacemaker Implantation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-bold mb-3">Contact</h3>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <Phone size={14} className="text-primary flex-shrink-0 mt-0.5" />
                <a href="tel:+918107667788" className="text-gray-300 hover:text-primary transition-colors">
                  +91 8107667788
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={14} className="text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:drraghven10@gmail.com" className="text-gray-300 hover:text-primary transition-colors truncate">
                  drraghven10@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-gray-300 text-xs">52 Janak Marg, Jaipur</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 py-6 mb-4">
          <div className="flex justify-center gap-6">
            <a
              href="https://www.instagram.com/dr.raghvendrachoudhary"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.facebook.com/p/Jaipur-Cardiac-Center-61577617292425/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-4 text-center text-gray-400 text-xs">
          <p>&copy; {currentYear} Jaipur Cardiac Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
