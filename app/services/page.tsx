import { services } from '@/data/services'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata = {
  title: 'Services - Jaipur Cardiac Centre',
  description: 'Comprehensive cardiac services including angiography, angioplasty, and consultations',
}

export default function ServicesPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-gray-600 text-lg">
            Complete range of cardiac diagnostic and interventional procedures
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 text-base leading-relaxed mb-4">{service.description}</p>
                <Button asChild className="bg-primary hover:bg-primary-600 text-white px-6 h-10 text-sm">
                  <Link href="/contact">Inquire Now</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Need Cardiac Care?</h2>
          <p className="text-gray-600 text-lg mb-8">
            Contact us to schedule your consultation with Dr. Raghvendra Choudhary
          </p>
          <Button asChild className="bg-primary hover:bg-primary-600 text-white px-8 h-12 text-base">
            <Link href="/contact">Book Appointment</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
