import { services } from '@/data/services'

export const metadata = {
  title: 'Services - Jaipur Cardiac Centre',
  description: 'Comprehensive cardiac services including ECG, Echocardiography, Angioplasty, Pacemaker implantation and more.',
}

export default function Services() {
  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
          <p className="text-lg text-gray-100 mt-4">
            Comprehensive cardiac care with state-of-the-art technology and expert treatment
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all card-hover border-l-4 border-primary"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-secondary mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-primary font-bold text-lg">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Service Categories</h2>
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
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-primary mb-6">{category.category}</h3>
                <ul className="space-y-3">
                  {category.services.map((service, sidx) => (
                    <li key={sidx} className="flex items-center gap-3 text-gray-700">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
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
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 gradient-text">Need a Specific Service?</h2>
          <p className="text-gray-700 text-lg mb-8">
            Contact us today to schedule your appointment or discuss your cardiac care needs with Dr. Raghvendra.
          </p>
          <a href="/contact" className="btn-primary">
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  )
}
