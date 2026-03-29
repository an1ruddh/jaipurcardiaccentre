'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message. We will contact you soon.')
    setFormData({ name: '', phone: '', email: '', message: '' })
  }

  return (
    <main>
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg">Get in touch with Jaipur Cardiac Centre</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Phone className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-bold text-gray-900">Phone</p>
                    <a href="tel:+918107667788" className="text-primary hover:text-primary-600">
                      +91 8107667788
                    </a>
                    <br />
                    <a href="tel:+919414262690" className="text-primary hover:text-primary-600">
                      +91 9414262690
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-bold text-gray-900">Email</p>
                    <a href="mailto:drraghven10@gmail.com" className="text-primary hover:text-primary-600">
                      drraghven10@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-bold text-gray-900">Address</p>
                    <p className="text-gray-600">
                      52 Janak Marg, Hanuman Nagar Extension, Jaipur, Rajasthan 302012
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-bold text-gray-900">Hours</p>
                    <p className="text-gray-600">Monday - Saturday: 10:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-900 mb-1 block">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="h-10 text-sm"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-900 mb-1 block">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91"
                    required
                    className="h-10 text-sm"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-900 mb-1 block">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="h-10 text-sm"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-900 mb-1 block">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your medical concern..."
                    required
                    rows={5}
                    className="text-sm"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary-600 text-white h-12 text-base">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Location</h2>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-600">Map integration coming soon</p>
          </div>
        </div>
      </section>
    </main>
  )
}
