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
      <section className="bg-white border-b border-gray-200 py-10 md:py-14">
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Services</h1>
            <p className="text-gray-600 text-base max-w-2xl">
              Comprehensive cardiac care with state-of-the-art technology and expert treatment
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-12 md:py-20 lg:py-28">
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-xs md:text-sm mb-3 leading-relaxed">{service.description}</p>
                  <p className="text-primary font-semibold text-sm">{service.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="bg-gray-50 py-12 md:py-20 lg:py-28">
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Service Categories</h2>
              <p className="text-gray-600 text-base max-w-2xl mx-auto">
                Complete range of diagnostic and interventional cardiac services
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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
                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-base font-bold text-primary mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.services.map((service, sidx) => (
                      <li key={sidx} className="flex items-center gap-2 text-gray-700 text-xs md:text-sm">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-12 md:py-20 lg:py-28">
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
              Need a Specific Service?
            </h2>
            <p className="text-gray-600 text-base mb-8 leading-relaxed">
              Contact us today to schedule your appointment or discuss your cardiac care needs with Dr. Raghvendra Choudhary.
            </p>
            <Button asChild className="bg-primary hover:bg-primary-600 text-white px-6 h-11 text-sm">
              <Link href="/contact">Schedule an Appointment</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
