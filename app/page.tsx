import Link from 'next/link'
import { services } from '@/data/services'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Jaipur Cardiac Centre - Expert Heart Care',
  description: 'Expert cardiac care with 25+ years experience. Dr. Raghvendra Choudhary - DM Cardiology',
}

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Expert Cardiac Care You Can Trust
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                25+ years of expertise. 15,000+ patients treated. Advanced cardiac interventions by Dr. Raghvendra Choudhary, DM Cardiology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-primary hover:bg-primary-600 text-white px-6 h-12 text-base">
                  <Link href="/contact">Book Appointment</Link>
                </Button>
                <Button asChild variant="outline" className="border-2 border-gray-300 text-gray-900 px-6 h-12 text-base hover:bg-gray-50">
                  <Link href="/doctor">Learn About Doctor</Link>
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-10 flex items-center justify-center min-h-96">
              <div className="text-center">
                <div className="text-6xl mb-4">H</div>
                <p className="text-gray-600 font-medium">Jaipur Cardiac Centre</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">15000+</div>
              <p className="text-primary-100 text-sm">Cases Treated</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">10000+</div>
              <p className="text-primary-100 text-sm">Angioplasties</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">25+</div>
              <p className="text-primary-100 text-sm">Years Experience</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <p className="text-primary-100 text-sm">Patient Focus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive cardiac care with advanced diagnostic and interventional procedures
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-6 rounded-lg border border-gray-200 hover:border-primary hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                <Link href="/services" className="text-primary hover:text-primary-700 font-medium text-sm flex items-center gap-2">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild className="bg-gray-900 hover:bg-gray-800 text-white px-8 h-12 text-base">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Excellence in cardiac care backed by experience and compassion
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Doctor</h3>
              <p className="text-gray-600 text-sm">
                DM Cardiology with 25+ years of experience in complex cardiac interventions and patient care.
              </p>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Technology</h3>
              <p className="text-gray-600 text-sm">
                State-of-the-art equipment for accurate diagnosis and minimally invasive procedures.
              </p>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Patient-Centric Care</h3>
              <p className="text-gray-600 text-sm">
                Personalized treatment plans with compassionate care and support throughout your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Take Care of Your Heart?</h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with Dr. Raghvendra Choudhary today
          </p>
          <Button asChild className="bg-white hover:bg-gray-100 text-primary px-8 h-12 text-base font-medium">
            <Link href="/contact">Book Your Appointment</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
