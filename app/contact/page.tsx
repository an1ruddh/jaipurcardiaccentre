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
      <section className="bg-white border-b border-gray-200 py-10 md:py-14">
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Contact Us</h1>
            <p className="text-gray-600 text-base max-w-2xl mx-auto">
              Get in touch to schedule your appointment or discuss your cardiac care needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-12 md:py-20 lg:py-28">
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
              {/* Contact Info Cards */}
              <div className="space-y-4">
                {/* Phone */}
                <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Phone className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm mb-2">Phone</h3>
                      <a href="tel:+918107667788" className="text-primary hover:underline block text-xs">
                        +91 8107667788
                      </a>
                      <a href="tel:+919414262690" className="text-primary hover:underline block text-xs">
                        +91 9414262690
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Mail className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm mb-2">Email</h3>
                      <a href="mailto:drraghven10@gmail.com" className="text-primary hover:underline text-xs break-all">
                        drraghven10@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm mb-2">Address</h3>
                      <p className="text-gray-700 text-xs leading-relaxed">
                        52 Janak Marg, Hanuman Nagar Extension, Jaipur, Rajasthan 302012
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Clock className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm mb-2">Hours</h3>
                      <p className="text-gray-700 text-xs mb-1">Monday - Saturday</p>
                      <p className="text-gray-700 text-xs">10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Book an Appointment</h2>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                      <Label htmlFor="name" className="text-gray-900 font-medium mb-1.5 block text-sm">
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
                      <Label htmlFor="email" className="text-gray-900 font-medium mb-1.5 block text-sm">
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
                      <Label htmlFor="phone" className="text-gray-900 font-medium mb-1.5 block text-sm">
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
                      <Label htmlFor="service" className="text-gray-900 font-medium mb-1.5 block text-sm">
                        Service
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
                      <Label htmlFor="message" className="text-gray-900 font-medium mb-1.5 block text-sm">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your health concerns..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="border-gray-300"
                      />
                    </div>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="bg-green-50 border border-green-200 text-green-800 p-3 rounded-lg text-xs">
                        ✓ Your appointment request has been sent successfully. We'll contact you soon!
                      </div>
                    )}
                    {submitStatus === 'error' && (
                      <div className="bg-red-50 border border-red-200 text-red-800 p-3 rounded-lg text-xs">
                        ✗ There was an error sending your request. Please try again.
                      </div>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={submitStatus === 'loading'}
                      className="w-full bg-primary hover:bg-primary-600 text-white h-11 font-medium text-sm"
                    >
                      {submitStatus === 'loading' ? 'Sending...' : 'Send Request'}
                      {submitStatus !== 'loading' && <Send size={16} className="ml-2" />}
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-300 rounded-lg h-64 md:h-80 flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-600 text-sm">🗺️ Google Maps Location</p>
                <p className="text-gray-500 text-xs mt-1">Embed your Google Maps here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Care */}
      <section className="bg-gray-50 py-12 md:py-20 lg:py-28">
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Why Contact Us?
              </h2>
              <p className="text-gray-600 text-base max-w-2xl mx-auto">
                Get answers and expert guidance from our experienced team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Expert Care',
                  description: '25+ years of experience in cardiac care',
                },
                {
                  title: 'Quick Response',
                  description: 'We respond to inquiries within 24 hours',
                },
                {
                  title: 'Personalized Plan',
                  description: 'Custom treatment plans for your needs',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                  <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
