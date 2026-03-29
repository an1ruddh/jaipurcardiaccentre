import { services } from '@/data/services'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata = {
  title: 'Services - Jaipur Cardiac Centre',
  description: 'Comprehensive cardiac services including ECG, Echocardiography, Angioplasty, Pacemaker implantation and more.',
}

export default function Services() {
  return (
    <main>
      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Comprehensive cardiac care with state-of-the-art technology and expert treatment
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                <p className="text-primary font-semibold">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="bg-gray-50 py-16 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Service Categories</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Complete range of diagnostic and interventional cardiac services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                category: 'Diagnostic Services',
                services: [
                  'ECG (Electrocardiogram)',
                  '2D Echo (Echocardiography)',
                  'TMT (Treadmill Test)',
                  'Holter Monitoring',
                  'Blood Pressure Monitoring',
                  'Stress Test',
                  'Cardiac Catheterization',
                ],
              },
              {
                category: 'Interventional Procedures',
                services: [
                  'Cardiac Catheterization',
                  'Coronary Angiography',
                  'Angioplasty',
                  'Pacemaker Implantation',
                  'Peripheral Angioplasty',
                ],
              },
              {
                category: 'Disease Management',
                services: [
                  'Cardiac Consultation',
                  'Heart Failure Management',
                  'Arrhythmia Treatment',
                  'Hypertension Treatment',
                  'Chest Pain Treatment',
                ],
              },
              {
                category: 'Specialized Care',
                services: [
                  'Preventive Cardiology',
                  'Lipid Profile Management',
                  'Congenital Heart Disease Treatment',
                  'Valvular Heart Disease Treatment',
                  'Cardiac Rehabilitation',
                ],
              },
            ].map((category, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-primary mb-6">{category.category}</h3>
                <ul className="space-y-3">
                  {category.services.map((service, sidx) => (
                    <li key={sidx} className="flex items-center gap-3 text-gray-700 text-sm">
                      <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Need a Specific Service?
          </h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Contact us today to schedule your appointment or discuss your cardiac care needs with Dr. Raghvendra Choudhary.
          </p>
          <Button asChild className="bg-primary hover:bg-primary-600 text-white px-8 h-12">
            <Link href="/contact">Schedule an Appointment</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
