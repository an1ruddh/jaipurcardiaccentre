import Link from 'next/link'
import { services } from '@/data/services'
import { testimonials } from '@/data/testimonials'
import { Heart, CheckCircle, Users, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Home() {
  const topServices = services.slice(0, 6)

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Expert Heart Care for Your Health
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Welcome to Jaipur Cardiac Centre. With 25+ years of expertise, Dr. Raghvendra Choudhary provides comprehensive, compassionate cardiac care backed by proven results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-primary hover:bg-primary-600 text-white px-8 h-12">
                  <Link href="/contact">Book Appointment</Link>
                </Button>
                <Button asChild variant="outline" className="border-2 border-gray-300 text-gray-900 px-8 h-12">
                  <Link href="/doctor">Meet the Doctor</Link>
                </Button>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8 md:p-10">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Heart className="text-primary flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">25+ Years Experience</h3>
                    <p className="text-gray-600 text-sm mt-1">Treating thousands of cardiac patients with excellence</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">15,000+ Procedures</h3>
                    <p className="text-gray-600 text-sm mt-1">Advanced angioplasty and cardiac interventions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="text-primary flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Expert Training</h3>
                    <p className="text-gray-600 text-sm mt-1">DM Cardiology from SMS Medical College, Jaipur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive cardiac care with cutting-edge technology and compassionate patient-centric approach
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🏥',
                title: 'State-of-the-Art Technology',
                description: 'Modern equipment and techniques for accurate diagnosis and treatment',
              },
              {
                icon: '👨‍⚕️',
                title: 'Expert Specialist',
                description: 'Dr. Raghvendra with 25+ years of cardiac expertise',
              },
              {
                icon: '❤️',
                title: 'Patient-Centric Care',
                description: 'Compassionate approach with personalized treatment plans',
              },
              {
                icon: '✅',
                title: 'Proven Success Rate',
                description: '15,000+ successful cardiac procedures and interventions',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive range of cardiac services and procedures
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {topServices.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                <p className="text-primary font-semibold">{service.price}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button asChild className="bg-gray-900 hover:bg-gray-800 text-white px-8 h-12">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="bg-gray-50 py-16 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Patient Testimonials
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Hear from our satisfied patients about their experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{testimonial.image}</span>
                  <div className="min-w-0">
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-xs text-gray-600">{testimonial.condition}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ⭐
                      </span>
                    ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button asChild className="bg-gray-900 hover:bg-gray-800 text-white px-8 h-12">
              <Link href="/testimonials">Read All Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary text-white py-16 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: '15000+', label: 'Cardiac Cases' },
              { number: '10000+', label: 'Angioplasties' },
              { number: '25+', label: 'Years Experience' },
              { number: '100%', label: 'Patient Satisfaction' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-5xl md:text-6xl font-bold text-primary mb-3">{stat.number}</div>
                <p className="text-gray-300 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Take Control of Your Heart Health
          </h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Don't delay your cardiac health check-up. Book an appointment with Dr. Raghvendra today and take the first step towards a healthier, longer life.
          </p>
          <Button asChild className="bg-primary hover:bg-primary-600 text-white px-10 h-12 text-lg">
            <Link href="/contact">Schedule Your Appointment</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
