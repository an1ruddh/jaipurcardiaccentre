'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

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
    <main>
      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get in touch with us to schedule your appointment or discuss your cardiac care needs
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg">
                <div className="flex items-start gap-4">
                  <Phone className="text-primary flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Phone</h3>
                    <a href="tel:+918107667788" className="text-primary hover:underline block text-sm mb-1">
                      +91 8107667788
                    </a>
                    <a href="tel:+919414262690" className="text-primary hover:underline block text-sm">
                      +91 9414262690
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg">
                <div className="flex items-start gap-4">
                  <Mail className="text-primary flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Email</h3>
                    <a href="mailto:drraghven10@gmail.com" className="text-primary hover:underline text-sm">
                      drraghven10@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Address</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      52 Janak Marg, Hanuman Nagar Extension, Jaipur, Rajasthan 302012
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg">
                <div className="flex items-start gap-4">
                  <Clock className="text-primary flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Hours</h3>
                    <p className="text-gray-700 text-sm mb-1">Monday - Saturday</p>
                    <p className="text-gray-700 text-sm">10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 border border-gray-200 p-10 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Book an Appointment</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <Label htmlFor="name" className="text-gray-900 font-medium mb-2 block">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-gray-300"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="text-gray-900 font-medium mb-2 block">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-gray-300"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <Label htmlFor="phone" className="text-gray-900 font-medium mb-2 block">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="border-gray-300"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <Label htmlFor="service" className="text-gray-900 font-medium mb-2 block">
                      Service Interested In
                    </Label>
                    <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                      <SelectTrigger className="border-gray-300">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="consultation">Cardiac Consultation</SelectItem>
                        <SelectItem value="echo">Echocardiography</SelectItem>
                        <SelectItem value="angioplasty">Angioplasty</SelectItem>
                        <SelectItem value="pacemaker">Pacemaker Implantation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-gray-900 font-medium mb-2 block">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your health concerns..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="border-gray-300"
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg text-sm">
                      ✓ Your appointment request has been sent successfully. We'll contact you soon!
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg text-sm">
                      ✗ There was an error sending your request. Please try again.
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={submitStatus === 'loading'}
                    className="w-full bg-primary hover:bg-primary-600 text-white h-12 font-medium"
                  >
                    {submitStatus === 'loading' ? 'Sending...' : 'Send Appointment Request'}
                    {submitStatus !== 'loading' && <Send size={18} className="ml-2" />}
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-600 text-xl">🗺️ Google Maps Location</p>
              <p className="text-gray-500 mt-2">Embed your Google Maps here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Care */}
      <section className="bg-gray-50 py-16 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Contact Us?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Get answers to your questions and expert guidance from our experienced team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Care',
                description: '25+ years of experience in cardiac care and treatment',
              },
              {
                title: 'Quick Response',
                description: 'We respond to your inquiries within 24 hours',
              },
              {
                title: 'Personalized Plan',
                description: 'Custom treatment plans tailored to your needs',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-200 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
