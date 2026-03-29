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
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  Expert Heart Care for Your Health
                </h1>
                <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
                  Welcome to Jaipur Cardiac Centre. With 25+ years of expertise, Dr. Raghvendra Choudhary provides comprehensive, compassionate cardiac care backed by proven results.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="bg-primary hover:bg-primary-600 text-white px-6 h-10 text-xs md:text-sm">
                    <Link href="/contact">Book Appointment</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-2 border-gray-300 text-gray-900 px-6 h-10 text-xs md:text-sm">
                    <Link href="/doctor">Meet the Doctor</Link>
                  </Button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-6 md:p-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Heart className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <h3 className="font-bold text-sm text-gray-900">25+ Years Experience</h3>
                      <p className="text-gray-600 text-xs mt-0.5">Treating thousands of cardiac patients</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <h3 className="font-bold text-sm text-gray-900">15,000+ Procedures</h3>
                      <p className="text-gray-600 text-xs mt-0.5">Advanced angioplasty & interventions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <h3 className="font-bold text-sm text-gray-900">Expert Training</h3>
                      <p className="text-gray-600 text-xs mt-0.5">DM Cardiology, SMS Medical College</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-12 md:py-16 lg:py-20">
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Why Choose Us
              </h2>
              <p className="text-gray-600 text-xs md:text-sm max-w-3xl mx-auto">
                Comprehensive cardiac care with cutting-edge technology and compassionate patient-centric approach
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {[
                {
                  icon: '🏥',
                  title: 'State-of-the-Art',
                  description: 'Modern equipment for accurate diagnosis',
                },
                {
                  icon: '👨‍⚕️',
                  title: 'Expert Doctor',
                  description: 'Dr. Raghvendra with 25+ years expertise',
                },
                {
                  icon: '❤️',
                  title: 'Patient-Centric',
                  description: 'Compassionate approach with personalized care',
                },
                {
                  icon: '✅',
                  title: 'Proven Success',
                  description: '15,000+ successful procedures',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-xs md:text-sm text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-xs">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Our Services
              </h2>
              <p className="text-gray-600 text-xs md:text-sm max-w-3xl mx-auto">
                Comprehensive range of cardiac services and procedures
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-8">
              {topServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white border border-gray-200 p-5 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="text-2xl mb-2">{service.icon}</div>
                  <h3 className="font-bold text-xs md:text-sm text-gray-900 mb-1">{service.name}</h3>
                  <p className="text-gray-600 text-xs mb-2">{service.description}</p>
                  <p className="text-primary font-semibold text-xs">{service.price}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button asChild className="bg-gray-900 hover:bg-gray-800 text-white px-6 h-10 text-xs md:text-sm">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="bg-gray-50 py-12 md:py-16 lg:py-20">
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Patient Testimonials
              </h2>
              <p className="text-gray-600 text-xs md:text-sm max-w-3xl mx-auto">
                Hear from our satisfied patients about their experiences
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-8">
              {testimonials.slice(0, 3).map((testimonial) => (
                <div key={testimonial.id} className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">{testimonial.image}</span>
                    <div className="min-w-0">
                      <h3 className="font-bold text-xs text-gray-900">{testimonial.name}</h3>
                      <p className="text-xs text-gray-600">{testimonial.condition}</p>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xs">
                          ⭐
                        </span>
                      ))}
                  </div>
                  <p className="text-gray-700 text-xs leading-relaxed">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button asChild className="bg-gray-900 hover:bg-gray-800 text-white px-6 h-10 text-xs md:text-sm">
                <Link href="/testimonials">Read All Testimonials</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary text-white py-10 md:py-14 lg:py-16">
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { number: '15000+', label: 'Cardiac Cases' },
                { number: '10000+', label: 'Angioplasties' },
                { number: '25+', label: 'Years Exp.' },
                { number: '100%', label: 'Satisfaction' },
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.number}</div>
                  <p className="text-gray-300 text-xs md:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Take Control of Your Heart Health
            </h2>
            <p className="text-gray-600 text-xs md:text-sm mb-6 leading-relaxed">
              Don't delay your cardiac health check-up. Book an appointment with Dr. Raghvendra today and take the first step towards a healthier, longer life.
            </p>
            <Button asChild className="bg-primary hover:bg-primary-600 text-white px-6 h-10 text-xs md:text-sm">
              <Link href="/contact">Schedule Your Appointment</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
