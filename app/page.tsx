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
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                Expert Heart Care in Jaipur
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-100 mb-6 md:mb-8">
                Welcome to Jaipur Cardiac Centre - Your trusted destination for advanced and reliable heart care. Dr. Raghvendra Choudhary, with 25+ years of expertise, provides comprehensive cardiac solutions.
              </p>
               <div className="flex flex-col sm:flex-row gap-4">
                 <Button asChild size="lg">
                   <Link href="/contact">Book Appointment</Link>
                 </Button>
                 <Button asChild variant="outline" size="lg">
                   <Link href="/doctor">Meet Dr. Raghvendra</Link>
                 </Button>
               </div>
            </div>
            <div className="bg-white/10 rounded-lg p-6 md:p-8 backdrop-blur-sm">
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <Heart className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div className="min-w-0">
                    <h3 className="font-bold text-base md:text-lg">25+ Years Experience</h3>
                    <p className="text-gray-200 text-sm md:text-base break-words">Treating thousands of cardiac patients successfully</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div className="min-w-0">
                    <h3 className="font-bold text-base md:text-lg">15,000+ Procedures</h3>
                    <p className="text-gray-200 text-sm md:text-base break-words">Advanced angioplasty and cardiac interventions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <Award className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div className="min-w-0">
                    <h3 className="font-bold text-base md:text-lg">Expert Training</h3>
                    <p className="text-gray-200 text-sm md:text-base break-words">DM Cardiology from SMS Medical College</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Why Choose Jaipur Cardiac Centre?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: '🏥',
                title: 'State-of-the-Art',
                description: 'Modern technology and equipment for accurate diagnosis',
              },
              {
                icon: '👨‍⚕️',
                title: 'Expert Doctor',
                description: 'Dr. Raghvendra with 25+ years of cardiac expertise',
              },
              {
                icon: '❤️',
                title: 'Patient-Centric',
                description: 'Compassionate care with personalized treatment plans',
              },
              {
                icon: '✅',
                title: 'Proven Track',
                description: '15,000+ successful cardiac procedures and interventions',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {topServices.map((service) => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-lg shadow-md card-hover border-l-4 border-primary"
              >
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="font-bold text-lg mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <p className="text-primary font-bold">{service.price}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Patient Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md card-hover">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">{testimonial.image}</span>
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-xs text-gray-600">{testimonial.condition}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ⭐
                      </span>
                    ))}
                </div>
                <p className="text-gray-700 text-sm italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/testimonials">Read More Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '15000+', label: 'Cardiac Cases' },
              { number: '10000+', label: 'Angioplasties' },
              { number: '25+', label: 'Years Experience' },
              { number: '100%', label: 'Patient Satisfaction' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-lg text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Your Heart Health is Our Priority
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Don't delay your cardiac check-up. Book an appointment with Dr. Raghvendra today and take the first step towards a healthier heart.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Schedule Your Appointment Today</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
