'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitStatus('loading')

    try {
      // Using Formspree for email forwarding
      // Formspree ID: xkoqawjb (setup for drraghven10@gmail.com)
      const response = await fetch('https://formspree.io/f/xkoqawjb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          _subject: `New Appointment Request from ${formData.name}`,
          _replyto: formData.email,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', service: '', message: '' })
        setTimeout(() => setSubmitStatus('idle'), 3000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
      console.error('Form submission error:', error)
    }
  }

  return (
    <main className="overflow-x-hidden">
      {/* Header */}
      <section className="relative py-24 bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-6 text-lg px-4 py-2 bg-white/20 text-white border-white/30">
              Get in Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Get in touch with us to schedule your appointment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-light p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Phone className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg text-secondary mb-2">Phone</h3>
                    <a href="tel:+918107667788" className="text-gray-700 hover:text-primary transition-colors block">
                      +91 8107667788
                    </a>
                    <a href="tel:+919414262690" className="text-gray-700 hover:text-primary transition-colors block">
                      +91 9414262690
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-light p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Mail className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg text-secondary mb-2">Email</h3>
                    <a
                      href="mailto:drraghven10@gmail.com"
                      className="text-gray-700 hover:text-primary transition-colors break-all"
                    >
                      drraghven10@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-light p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg text-secondary mb-2">Address</h3>
                    <p className="text-gray-700">52 Janak Marg, Hanuman Nagar Extension, Jaipur, Rajasthan, 302012</p>
                  </div>
                </div>
              </div>

              <div className="bg-light p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Clock className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg text-secondary mb-2">Hours</h3>
                    <p className="text-gray-700">Monday - Saturday</p>
                    <p className="text-gray-700">10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-light p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-secondary mb-6">Book an Appointment</h2>

                {submitStatus === 'success' && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                    Thank you! Your appointment request has been sent. We'll contact you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                    Error sending form. Please try again or call us directly.
                  </div>
                )}

                <div className="space-y-4">
                  {/* Name */}
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <Label htmlFor="service">Service Required *</Label>
                    <Select value={formData.service} onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Cardiac Consultation">Cardiac Consultation</SelectItem>
                        <SelectItem value="ECG">ECG (Electrocardiogram)</SelectItem>
                        <SelectItem value="Echocardiography">2D Echo (Echocardiography)</SelectItem>
                        <SelectItem value="Angiography">Angiography</SelectItem>
                        <SelectItem value="Angioplasty">Angioplasty</SelectItem>
                        <SelectItem value="Pacemaker Implantation">Pacemaker Implantation</SelectItem>
                        <SelectItem value="General Checkup">General Checkup</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message">Message/Additional Info</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your health concerns..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={submitStatus === 'loading'}
                    className="w-full"
                    size="lg"
                  >
                    {submitStatus === 'loading' ? 'Sending...' : 'Book Appointment'}
                  </Button>

                  <p className="text-xs text-gray-600 text-center mt-4">
                    * Required fields. We'll contact you within 24 hours.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 gradient-text">Find Us on Map</h2>
          <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-600 text-xl mb-2">📍 Google Maps</p>
              <p className="text-gray-500">Embed your Google Maps location here</p>
              <p className="text-gray-500 text-sm mt-4">52 Janak Marg, Hanuman Nagar Extension, Jaipur</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
