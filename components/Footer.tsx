import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">Jaipur Cardiac Centre</h3>
            <p className="text-gray-300 text-sm">
              Leading destination for advanced and reliable heart care in Jaipur. Trusted by thousands of patients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/doctor" className="hover:text-primary transition-colors">
                  About Doctor
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Cardiac Consultation</li>
              <li>ECG & Echocardiography</li>
              <li>Angiography & Angioplasty</li>
              <li>Pacemaker Implantation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <a href="tel:+918107667788" className="hover:text-primary transition-colors">
                  +91 8107667788
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a href="mailto:drraghven10@gmail.com" className="hover:text-primary transition-colors">
                  drraghven10@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                <p>52 Janak Marg, Hanuman Nagar Ext., Jaipur</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex justify-center gap-6">
            <a
              href="https://www.instagram.com/dr.raghvendrachoudhary"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/p/Jaipur-Cardiac-Center-61577617292425/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Jaipur Cardiac Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
